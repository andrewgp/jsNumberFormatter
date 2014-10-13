/**
 * LIBRARY: jsNumberFormatter
 * COMPONENT: Locale Support
 * DESCRIPTION: Provides locale support for jsNumberFormatter.
 * FILENAME: jsNumberFormatter.locale.js
 * DATE: 2014-06-11
 * AUTHOR: Andrew G Parry
 * SOURCE: https://github.com/andrewgp/jsNumberFormatter
 *
 * VERSION: 0.1
 * STATE: Prototype
 * DEPENDANCIES: jsNumberFormatter.js
 *
 * STATUS: -
 *
 * CHANGELOG:
 * 2014-06-11   AP  Added component
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
    localesLikeUS: [ 'ae','au','ca','cn','eg','gb','hk','il','in','jo','jp','my','mx','nz','qa','sk','sg','th','tw','us','za' ],
    localesLikeDE: [ 'at','br','de','dk','es','gr','is','it','nl','pt','tr','vn' ],
    localesLikeFR: [ 'bg','cz','fi','fr','no','pl','ru','se' ],
    localesLikeCH: [ 'ch' ],

    allLocales: [ ],
    localeFormatting: [ ['.', ',', '^-(.+)'], [',', '.', '^-(.+)'], [',', ' ', '^-(.+)'], ['.', '\'', '^-(.+)'] ],

    localesMap: new JsNumberFormatter.util.HashMap(),

    parseOptions: function(locale, isFullLocale) {
        var codes = JsNumberFormatter.locales._getCodes(locale, isFullLocale);
        var dec = codes[0];
        var group = codes[1];
        var neg = codes[2];
        return new JsNumberFormatter.parseNumberSimpleOptions().specifyAll(dec, group, false, true, false, '^' + neg + '(.+)');
    },

    formatOptions: function(locale, isFullLocale) {
        var codes = JsNumberFormatter.locales._getCodes(locale, isFullLocale);
        var dec = codes[0];
        var group = codes[1];
        var neg = codes[2];
        return new JsNumberFormatter.formatNumberOptions().specifyAll(group + '###', '##', dec, neg);
    },

    _getCodes: function(locale, isFullLocale) {
        // handle optional params
        if (typeof isFullLocale === 'undefined') {
            isFullLocale = false;
        }

        if (JsNumberFormatter.locales.allLocales.length === 0) {
            JsNumberFormatter.locales.allLocales = [
                  JsNumberFormatter.locales.localesLikeUS,
                  JsNumberFormatter.locales.localesLikeDE,
                  JsNumberFormatter.locales.localesLikeFR,
                  JsNumberFormatter.locales.localesLikeCH ];
        }

        if (JsNumberFormatter.locales.localesMap.size() === 0) {
            for (var localeGroupIdx = 0; localeGroupIdx < JsNumberFormatter.locales.allLocales.length; localeGroupIdx++) {
                var localeGroup = JsNumberFormatter.locales.allLocales[localeGroupIdx];
                for (var i = 0; i < localeGroup.length; i++) {
                    JsNumberFormatter.locales.localesMap.put(localeGroup[i], localeGroupIdx);
                }
            }
        }

        if (isFullLocale === false) {
            // Extract and convert to lower-case any language code from a real 'locale' formatted string, if not use as-is
            // (To prevent locale format like : "fr_FR", "en_US", "de_DE", "fr_FR", "en-US", "de-DE")
            if (locale.indexOf('_') != -1) {
                locale = locale.split('_')[1].toLowerCase();
            } else if (locale.indexOf('-') != -1) {
                locale = locale.split('-')[1].toLowerCase();
            }
        }

        // lookup to match locale with codes
        var codesIndex = JsNumberFormatter.locales.localesMap.get(locale);
        if (codesIndex === null || typeof codesIndex === 'undefined') {
            throw new TypeError('Locale "' + locale + '" not supported');
        }
        var codes = JsNumberFormatter.locales.localeFormatting[codesIndex];
        if (codes === null || typeof codes === 'undefined') {
            throw new TypeError('Locale "' + locale + '" not supported');
        }
        return codes;
    }
};

/*  MISC    */


// export for RequireJS support (mainly to allow mocha to work)
if (module) {
    module.exports.nfl = JsNumberFormatter.locales;
}
