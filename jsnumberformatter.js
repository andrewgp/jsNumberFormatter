/**
 * Prototype for jsNumberFormatter.
 * 
 */
function NumberFormatter() {
    
    // constants
    this.consts = {};
    this.consts.regexStrNonNumeric = '[^0-9\\-\\.]';
    
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
            throw new TypeError('Expecting a string as number param');
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
        
        // finally try to parse/force to a javascript number
        if (log) {
            console.log('Output: ' + newNumberString);
        }
        return new Number(newNumberString);
    };
    
    this.parseNumberSimpleOptions = function() {
        this.decimalStr = '.';
        this.groupStr = ',';
        this.strict = false;
        this.trim = true;
        this.removeBadCh = false;
        
        this.specifyAll = function(decimalStr, groupStr, strict, trim, removeBadCh) {
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
            return this;
        };
        
        this.print = function() {
            return 'parseNumberSimpleOptions{decimalStr:"' + this.decimalStr
                + '",groupStr:"' + this.groupStr
                + '",strict:"' + this.strict
                + '",trim:"' + this.trim
                + '",removeBadCh:"' + this.removeBadCh
                + '"}';
        };
	};
}

// export for RequireJS support (mainly to allow mocha to work)
module.exports.nf = new NumberFormatter();
