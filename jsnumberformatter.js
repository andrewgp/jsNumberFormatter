/**
 * Prototype for jsNumberFormatter.
 * 
 */
function NumberFormatter() {
    
    
    /*  CONSTANTS   */
    
    
    this.consts = {
        regexStrNonNumeric: '[^0-9\\.]',
        negativeParanRegex: '^\\(([^\\)]+)\\)$',
        numberRegex: new RegExp('^([0-9]*)\\.([0-9]*)$'),
        maskCharsStr: '[0#]',
        maskCharsRegex: new RegExp('[0#]', 'g')
    };
    
    
    /*  PARSING */
    
    
    /**
     * Parses a number very simply and quickly.
     */
    this.parseNumberSimple = function(numberString, options, log) {
        // handle log param
        log = typeof log !== 'undefined' ? log : false;
        
        // check other params
        if (log) {
            console.log('[' + numberString + '] Checking params...');
        }
        if (typeof numberString != 'string') {
            throw new TypeError('Expecting a string as numberString param');
        }
        options = typeof options !== 'undefined' ? options : new this.parseNumberSimpleOptions();
        // if (typeof options != 'parseNumberSimpleOptions') {
        //     throw new TypeError('Options param expected=parseNumberSimpleOptions actual=' + typeof option);
        // }
        if (log) {
            console.log('[' + numberString + '] Options=' + options.print());
            console.log('[' + numberString + '] Params OK');
        }
        
        var newNumberString = numberString;
        
        // trim the whitespace ends off the string
        if (options.trim) {
            if (log) {
                console.log('[' + numberString + '] Trimming...');
            }
            newNumberString = newNumberString.replace(new RegExp('^\\s+|\\s+$', 'g'), '');
        }
        
        // strip out the group occurrances
        if (log) {
            console.log('[' + numberString + '] Removing groups...');
        }
        newNumberString = newNumberString.replace(new RegExp(options.groupStr, 'g'), '');
        
        // replace the decimal separator (if needed)
        if (options.decimalStr != '.') {
            if (log) {
                console.log('[' + numberString + '] Replacing decimal point(s)...');
            }
            newNumberString = newNumberString.replace(new RegExp(options.decimalStr, 'g'), '.');
        }
        
        // remove the negative signage
        if (options.negativeMatch) {
            if (log) {
                console.log('[' + numberString + '] Removing any negative signs...');
            }
            var match = options.negativeMatch.exec(newNumberString);
            var isNegative = false;
            if (match) {
                newNumberString = match[1];
                isNegative = true;
            }
        }
        
        if (options.strict) {
            // check that there is 0 or 1 occurrances of the decimal point
            if (log) {
                console.log('[' + numberString + '] Counting decimal points...');
            }
            var count = newNumberString.match(new RegExp('\\.', 'g')).length;
            if (count > 1) {
                throw new Error('Input has more than 1 decimal point: ' + count);
            }
            
            if (!options.removeBadCh) {
                // flag any non numerics
                if (log) {
                    console.log('[' + numberString + '] Counting disallowed chars...');
                }
                count = newNumberString.match(new RegExp(this.consts.regexStrNonNumeric, 'g')).length;
                if (count > 0) {
                    throw new Error('Input has ' + count + ' disallowed chars: ' + numberString);
                }
            }
        }
        
        // remove any non-numeric chars
        if (options.removeBadCh) {
            if (log) {
                console.log('[' + numberString + '] Removing bad chars...');
            }
            newNumberString = newNumberString.replace(new RegExp(this.consts.regexStrNonNumeric, 'g'), '');
        }
        
        // add the negative sign on if required
        if (isNegative) {
            newNumberString = '-' + newNumberString;
        }
        
        // finally try to parse/force to a javascript number
        if (log) {
            console.log('Output: ' + newNumberString);
        }
        var result = new Number(newNumberString);
        if (isNaN(result)) {
            throw new NaNError();
        }
        
        return result;
    };
    
    this.parseNumberSimpleOptions = function() {
        this.decimalStr = '.';
        this.groupStr = ',';
        this.strict = false;
        this.trim = true;
        this.removeBadCh = false;
        this.negativeMatch = null;//new RegExp('^-(.+)');
        
        this.specifyAll = function(decimalStr, groupStr, strict, trim, removeBadCh, negativeMatch) {
            // check params
            if (typeof decimalStr !== 'undefined') {
                if (typeof decimalStr !== 'string') {
                    throw new TypeError('Expecting a string as decimalStr param');
                }
                this.decimalStr = decimalStr;
            }
            if (typeof groupStr !== 'undefined') {
                if (typeof groupStr !== 'string') {
                    throw new TypeError('Expecting a string as groupStr param');
                }
                this.groupStr = groupStr;
            }
            if (typeof strict !== 'undefined') {
                if (typeof strict !== 'boolean') {
                    throw new TypeError('Expecting a boolean as strict param');
                }
                this.strict = strict;
            }
            if (typeof trim !== 'undefined') {
                if (typeof trim !== 'boolean') {
                    throw new TypeError('Expecting a boolean as trim param');
                }
                this.trim = trim;
            }
            if (typeof removeBadCh !== 'undefined') {
                if (typeof removeBadCh !== 'boolean') {
                    throw new TypeError('Expecting a boolean as removeBadCh param');
                }
                this.removeBadCh = removeBadCh;
            }
            if (typeof negativeMatch !== 'undefined') {
                if (typeof negativeMatch !== 'string') {
                    throw new TypeError('Expecting a string as negativeMatch param');
                }
                this.negativeMatch = new RegExp(negativeMatch);
            }
            return this;
        };
        
        this.print = function() {
            return 'parseNumberSimpleOptions{decimalStr:"' + this.decimalStr
                + '",groupStr:"' + this.groupStr
                + '",strict:"' + this.strict
                + '",trim:"' + this.trim
                + '",removeBadCh:"' + this.removeBadCh
                + '",negativeMatch:"' + this.negativeMatch
                + '"}';
        };
	};
    
    
    /*  FORMATTING  */
    
    
    /**
     * Formats a number (object) into a string, based on the options.
     */
    this.formatNumber = function(number, options, log) {
        // handle log param
        log = typeof log !== 'undefined' ? log : false;
        
        // check other params
        if (log) {
            console.log('[' + number + '] Checking params...');
        }
        if (typeof number != 'number') {
            throw new TypeError('Expecting a number as number param');
        }
        options = typeof options !== 'undefined' ? options : new this.formatNumberOptions();
        if (log) {
            console.log('[' + number + '] Options=' + options.print());
            console.log('[' + number + '] Params OK');
        }
        
        // Compile masks
        if (!options.compiled) {
            if (log) {
                console.log('Compiling options...');
            }
            options.compile(new this.formatMaskCompiled(options.groupMaskStr), new this.formatMaskCompiled(options.decimalMaskStr));
        }
        
        // break up number into 2 strings, 1 for the integer and 1 for the decimals
        if (log) {
            console.log('Splitting number to parts...');
        }
        
        var integerPartStr;
        var decimalPartStr;
        var match = this.consts.numberRegex.exec(number);
        if (match) {
            // has 2 parts
            integerPartStr = match[1];
            decimalPartStr = match[2];
        } else {
            // likely only 1 part, or something is wrong!
            integerPartStr = number;
            decimalPartStr = '';
        }
        if (log) {
            console.log('Parts=integer:' + integerPartStr + ',decimal:' + decimalPartStr);
        }
        
        // apply group mask
        if (log) {
            console.log('Applying group mask...');
        }
        var formatterIntPartStr = options.groupMask.apply(integerPartStr);
        
        // apply decimal mask
        if (log) {
            console.log('Applying decimal mask...');
        }
        var formatterDecPartStr = options.decimalMask.apply(decimalPartStr);
        
        // build final response
        // TODO needs more here
        var result = formatterIntPartStr + options.decimalSeperatorStr + formatterDecPartStr;
        
        if (log) {
            console.log('Result=' + result);
        }
        return result;
    };
    
    this.formatNumberOptions = function() {
        this.groupMaskStr = ',###';
        this.decimalSeperatorStr = '.';
        this.decimalMaskStr = '##';
        this.negativeMaskStr = '-$1';
        
        this.groupMask = null;
        this.decimalMask = null;
        this.compiled = false;
        
        this.numberMaskValidRegex = new RegExp('[#0]', 'g');
        this.negativeMaskValidRegex = new RegExp('$1', 'g');
        
        this.specifyAll = function(groupMaskStr, decimalMaskStr, decimalSeperatorStr, negativeMaskStr) {
            // check basic params integrity and handle actually apply the changes
            if (typeof groupMaskStr !== 'undefined') {
                if (typeof groupMaskStr !== 'string') {
                    throw new TypeError('Expecting a string as groupMaskStr param');
                }
                this.groupMaskStr = groupMaskStr;
            }
            if (typeof decimalMaskStr !== 'undefined') {
                if (typeof decimalMaskStr !== 'string') {
                    throw new TypeError('Expecting a string as decimalMaskStr param');
                }
                this.decimalMaskStr = decimalMaskStr;
            }
            if (typeof decimalSeperatorStr !== 'undefined') {
                if (typeof decimalSeperatorStr !== 'string') {
                    throw new TypeError('Expecting a string as decimalSeperatorStr param');
                }
                this.decimalSeperatorStr = decimalSeperatorStr;
            }
            if (typeof negativeMaskStr !== 'undefined') {
                if (typeof negativeMaskStr !== 'boolean') {
                    throw new TypeError('Expecting a string as negativeMaskStr param');
                }
                this.negativeMaskStr = negativeMaskStr;
            }
            
            // validate param values
            var match = groupMaskStr.match(this.numberMaskValidRegex);
            if (!match || match.length === 0) {
                throw new Error('groupMaskStr must have at least 1 "0" or "#" char');
            }
            
            match = decimalMaskStr.match(this.numberMaskValidRegex);
            if (!match || match.length === 0) {
                throw new Error('decimalMaskStr must have at least 1 "0" or "#" char');
            }
            
            match = negativeMaskStr.match(this.negativeMaskValidRegex);
            if (!match || match.length === 0) {
                throw new Error('negativeMaskStr must have at least 1 "$1" string within it');
            }
            
            return this;
        };
        
        this.print = function() {
            return 'parseNumberSimpleOptions{groupMaskStr:"' + this.groupMaskStr
                + '",decimalMaskStr:"' + this.decimalMaskStr
                + '",decimalSeperatorStr:"' + this.decimalSeperatorStr
                + '",negativeMaskStr:"' + this.negativeMaskStr
                + '"}';
        };
        
        this.compile = function(groupMask, decimalMask) {
            if (!this.compiled) {
                this.groupMask = groupMask;
                this.groupMask.reversed = true;
                this.groupMask.repeating = true;
                this.groupMask.compile();
                
                this.decimalMask = decimalMask;
                this.decimalMask.reversed = false;
                this.decimalMask.repeating = false;    // TODO allow repeating here
                this.decimalMask.compile();
            }
        };
    };
    
    this.formatMaskCompiled = function(maskStr) {
        this.maskStr = maskStr;
        this.repeating = false;
        this.reversed = false;
        
        this.compiled = false;
        this.maskDigitSize = -1;
        
        this.apply = function(pureNumericStr) {
            if (!this.compiled) {
                throw new Error('Mask not compiled');
            }
            
            pureNumericStr = '' + pureNumericStr;
            
            console.log('Applying mask:"' + this.maskStr + '",reversed=' + this.reversed + ',input="' + pureNumericStr + '"');
            var result = '';
            if (this.repeating) {
                if (this.reversed) {
                    var strLen = pureNumericStr.length;
                    console.log('length=' + strLen);
                    for (var pos = strLen; pos >= 0; pos -= this.maskDigitSize) {    // FIXME going to truncate?
                        // break into the digits to format
                        console.log('Pos:' + pos);
                        var bottomBound = pos - this.maskDigitSize < 0 ? 0 : pos - this.maskDigitSize;
                        var subDigits = strLen === 1 ? ('' + pureNumericStr).substring(bottomBound, pos) : pureNumericStr.substring(bottomBound, pos);
                        
                        var newStr = this._applyReverseMask(maskStr, subDigits, bottomBound > 0);
                        if (newStr == '') {
                            break;
                        }
                        result = newStr + result;
                    }
                } else {
                    // TODO
                }
                
                return result;
            } else {
                result = this.reversed ? this._applyReverseMask(maskStr, pureNumericStr, false) : this._applyMask(maskStr, pureNumericStr);
            }
            return result;
        };
        
        this.compile = function() {
            var match = this.maskStr.match(new RegExp('[0#]', 'g'));
            this.maskDigitSize = match.length;
            console.log('Compiled at length:' + this.maskDigitSize);
            
            this.compiled = true;
        };
        
        this._applyMask = function(maskStr, pureNumericStr) {
            var result = '';
            // sanity check
            if (maskStr.length < pureNumericStr.length) {
                throw new Error('Mask is not long enough, mask:"' + maskStr + '",number="' + pureNumericStr + '"');
            }
            
            // walk through mask and number together
            var strLen = typeof pureNumericStr.length === 'undefined' ? 1 : pureNumericStr.length;
            for (var i = 0; i < maskStr.length; i++) {
                var maskCh = maskStr.charAt(i);
                
                if (i < strLen) {
                    // still numbers to insert
                    var digit = pureNumericStr.charAt(i);

                    if (maskCh === '0' || maskCh == '#') {
                        // write digit as-is
                        result += digit;
                    } else {
                        // write it out as is
                        result += maskCh;
                    }
                } else {
                    // no more numbers to insert
                    console.log('Mask ch:' + maskCh);
                    if (maskCh === '0') {
                        // zero padding
                        console.log('Zero pad');
                        result += '0';
                    } else if (maskCh == '#') {
                        // no more padding or formatting chars, break the mask
                        break;
                    } else {
                        result += maskCh;
                        
                        // no more padding or formatting chars, break the mask
                        break;
                    }
                }
            }
            console.log('Mask result=' + result);
            return result;
        };
        
        this._applyReverseMask = function(maskStr, pureNumericStr, areMore) {
            console.log('Applying reverse mask:"' + maskStr + '"areMore:' + areMore + ',str:"' + pureNumericStr + '"');
            var result = '';
            // sanity check
            if (maskStr.length < pureNumericStr.length) {
                throw new Error('Mask is not long enough, mask:"' + maskStr + '",number="' + pureNumericStr + '"');
            }
            
            // walk through mask and number together (backwards)
            var digitPos = pureNumericStr.length - 1;
            var holdChars = null;
            for (var i = maskStr.length - 1; i >= 0; i--) {
                var maskCh = maskStr.charAt(i);
                console.log('Mask ch:' + maskCh);
                
                if (digitPos >= 0) {
                    console.log('Digit Pos:' + digitPos);
                    // still numbers to insert
                    if (maskCh === '0' || maskCh == '#') {
                        var digit = pureNumericStr.charAt(digitPos);
                        console.log('Digit:' + digit);
                        digitPos--;
                        
                        // write out any held chars
                        if (holdChars != null) {
                            console.log('Writing hold chars:' + holdChars);
                            result = holdChars + result;
                            holdChars = null;
                        }
                        
                        // write digit as-is
                        result = digit + result;
                    } else {
                        // hold the char
                        holdChars = holdChars != null ? maskCh + holdChars : maskCh;
                        console.log('Held char:' + maskCh);
                    }
                } else {
                    // no more numbers to insert
                    if (maskCh === '0') {
                        // write out any held chars
                        if (null != holdChars) {
                            console.log('Writing hold chars:' + holdChars);
                            result = holdChars + result;
                            holdChars = null;
                        }
                        
                        // zero padding
                        result = '0' + result;
                    } else if (maskCh == '#') {
                        // no more padding or formatting chars, break the mask
                        break;
                    } else {
                        holdChars = holdChars != null ? maskCh + holdChars : maskCh;
                        console.log('Held char:' + maskCh);
                    }
                }
            }
            if (areMore && holdChars != null) {
                result = holdChars + result;
            }
            console.log('Mask result=' + result);
            return result;
        };
    };
}


/*  EXCEPTIONS  */


function NaNError(message) {
    this.name = "NaNError";
    this.message = ("NaN " || message);
}
NaNError.prototype = Error.prototype;


/*  MISC    */


// export for RequireJS support (mainly to allow mocha to work)
module.exports.nf = new NumberFormatter();
