/**
 * LIBRARY: jsNumberFormatter
 * COMPONENT: Locale Support
 * DESCRIPTION: Provides locale support for jsNumberFormatter.
 * FILENAME: jsNumberFormatter.locale.js
 * DATE: 2014-06-17
 * AUTHOR: Andrew G Parry
 * SOURCE: https://github.com/andrewgp/jsNumberFormatter
 * 
 * VERSION: 0.3
 * STATE: Alpha
 * DEPENDANCIES: jsNumberFormatter.js
 * 
 * This will provide locale (and basic country as a sub-set) support.
 * It can read it's data from a varienty of supporting JS files, currently
 * we support the following -
 * 
 * 1. jsnumberformatter.locale.superset.js - Hard coded complete dump of CLDR (a lot of data and likely far more than you need)
 * 2. xyz.js                               - Your own file with a sub-set of the above
 * 3. TODO                                 - Dynamically reading what is needed from CLDR JSON repository at runtime
 * 
 * STATUS: Basics there
 * 
 * TODO:
 * 
 * 1. Add support for format mask from decimal data
 * 2. Add currency support from data
 * 3. Add percentage support from data
 * 
 * CHANGELOG:
 * 2014-06-11   AP  Added component
 * 2014-06-17   AP  Added full locale support
 * 2015-04-15   AP  Finalised basic impl.
 * 
 * LICENSE:
 * 
 * The MIT License (MIT)
 * Copyright (c) 2014 Andrew G Parry
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// base namespace re-declaration
var JsNumberFormatter = JsNumberFormatter || require('./jsnumberformatter.js').nf || {};

// locales namespace
JsNumberFormatter.locales = {
    
    // lookup maps
    countriesMap: new JsNumberFormatter.util.HashMap(),
    localesMap: new JsNumberFormatter.util.HashMap(),
    
    parseOptions: function(locale) {
        var codes = JsNumberFormatter.locales._getCodes(locale);
        var dec = codes[0][2];
        var group = codes[0][1];
        var neg = codes[0][0];
        return new JsNumberFormatter.parseNumberSimpleOptions().specifyAll(dec, group, false, true, false, '^' + neg + '(.+)');
    },
    
    formatOptions: function(locale) {
        var codes = JsNumberFormatter.locales._getCodes(locale);
        var dec = codes[0][2];
        var group = codes[0][1];
        var neg = codes[0][0];
        return new JsNumberFormatter.formatNumberOptions().specifyAll(group + '###', '##', dec, neg);
    },
    
    _getCodes: function(locale) {
        var isFullLocale = locale.indexOf('_') > 0 || locale.indexOf('-') > 0;
        if (isFullLocale) {
            return JsNumberFormatter.locales._getCodesForLocale(locale);
        }
        return JsNumberFormatter.locales._getCodesForCountry(locale);
    },
    
    _getCodesForCountry: function(country) {
        // build the maps needed for lookup
        if (JsNumberFormatter.locales.countriesMap.size() === 0) {
            for (var locGroupIdx = 0; locGroupIdx < JsNumberFormatter.locales.data.decimals.countries.length; locGroupIdx += 2) {
                var countries = JsNumberFormatter.locales.data.decimals.countries[locGroupIdx];
                if (!countries) {
                    break;
                }
                var options = JsNumberFormatter.locales.data.decimals.countries[locGroupIdx + 1];
                for (var i = 0; i < countries.length; i++) {
                    JsNumberFormatter.locales.countriesMap.put(countries[i], options);
                }
            }
        }

        // if (isFullLocale === false) {
        //     // Extract and convert to lower-case any language code from a real 'locale' formatted string, if not use as-is
        //     // (To prevent locale format like : "fr_FR", "en_US", "de_DE", "fr_FR", "en-US", "de-DE")
        //     if (locale.indexOf('_') != -1) {
        //         locale = locale.split('_')[1].toLowerCase();
        //     } else if (locale.indexOf('-') != -1) {
        //         locale = locale.split('-')[1].toLowerCase();
        //     }
        // }

        // lookup to match locale with codes
        var codes = JsNumberFormatter.locales.countriesMap.get(country);
        if (codes === null || typeof codes === 'undefined') {
            throw new TypeError('Country "' + country + '" not supported');
        }
        return codes;
    },
    
    _getCodesForLocale: function(locale) {
        if (JsNumberFormatter.locales.localesMap.size() === 0) {
            // build lookup map
            for (var locGroupIdx = 0; locGroupIdx < JsNumberFormatter.locales.data.decimals.locales.length; locGroupIdx += 2) {
                var locales = JsNumberFormatter.locales.data.decimals.locales[locGroupIdx];
                if (!locales) {
                    break;
                }
                var options = JsNumberFormatter.locales.data.decimals.locales[locGroupIdx + 1];
                for (var i = 0; i < locales.length; i++) {
                    JsNumberFormatter.locales.localesMap.put(locales[i], options);
                }
            }
        }

        // if (isFullLocale === false) {
        //     // Extract and convert to lower-case any language code from a real 'locale' formatted string, if not use as-is
        //     // (To prevent locale format like : "fr_FR", "en_US", "de_DE", "fr_FR", "en-US", "de-DE")
        //     if (locale.indexOf('_') != -1) {
        //         locale = locale.split('_')[1].toLowerCase();
        //     } else if (locale.indexOf('-') != -1) {
        //         locale = locale.split('-')[1].toLowerCase();
        //     }
        // }

        // lookup to match locale with codes
        var codes = JsNumberFormatter.locales.localesMap.get(locale);
        if (codes === null || typeof codes === 'undefined') {
            throw new TypeError('Locale "' + locale + '" not supported');
        }
        return codes;
    },
};

/*  MISC    */


// export for RequireJS support (mainly to allow mocha to work)
module.exports.nfl = JsNumberFormatter.locales;
