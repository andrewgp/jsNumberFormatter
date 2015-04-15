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
 * STATE: Prototype
 * DEPENDANCIES: jsNumberFormatter.js
 * 
 * This will provide some quick and easy hard-coded locale data.
 * Dynamically or statically reading CLDR data is planned for later.
 * 
 * STATUS: -
 * 
 * CHANGELOG:
 * 2014-06-11   AP  Added component
 * 2014-06-17   AP  Added full locale support
 * 2015-04-15   AP  Finalised impl.
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
    // http://www.unicode.org/cldr/charts/25/by_type/numbers.number_formatting_patterns.html
    numberLocales: [
        // like EN (-,.)
        [
            'af_ZA', // Afrikaans (South Africa)
            'am_ET', // Amharic (Ethiopia)
            'ar_DZ', // Arabic (Algeria)
            'en_US', // English (United States)
            'de_CH', // German (Switzerland)
            'it_CH', // Italian (Switzerland)
            'fr_CH', // French (Switzerland)
            'de_LI', // German (Liechtenstein)
            'hy_AM', // Armenian (Armenia)
            'rm_CH', // Romansh (Switzerland)
            'zh_CN', // Chinese (Simplified, PRC)
            'zh_SG', // Chinese (Simplified, Singapore)
            'zh_HK', // Chinese (Traditional, Hong Kong S.A.R.)
            'zh_MO', // Chinese (Traditional, Macao S.A.R.)
            'zh_TW', // Chinese (Traditional, Taiwan)
            'fa_IR', // Persian (Iran)
            'he_IL', // Hebrew (Israel)
            'ja_JP', // Japanese (Japan)
            'ko_KR', // Korean (Korea)
            'th_TH', // Thai (Thailand)
            'en_GB', // English (United Kingdom)
        ],
        [ '^-(.+)', ',', '.' ],
        
        // like IN (-,. 3x2.2)
        [
            'as_IN', // Assamese (India)
            'bn_BD', // Bengali (Bangladesh)
            'bn_IN', // Bengali (India)
        ],
        [ '-(.+)$',',', '.' ],
        
        // like BH (,.- 3.3)
        [
            'ar_BH', // Arabic (Bahrain)
            'ar_EG', // Arabic (Egypt)
            'ar_JO', // Arabic (Jordan)
            'ar_KW', // Arabic (Kuwait)
            'ar_LY', // Arabic (Libya)
            'ar_TN', // Arabic (Tunisia)
        ],
        [ '(.+)-$', ',', '.' ],
        
        // like IQ (,.- 3.2)
        [
            'ar_IQ', // Arabic (Iraq)
            'ar_LB', // Arabic (Lebanon)
            'ar_MA', // Arabic (Morocco)
            'ar_OM', // Arabic (Oman)
            'ar_QA', // Arabic (Qatar)
            'ar_SA', // Arabic (Saudi Arabia)
            'ar_SY', // Arabic (Syria)
            'ar_AE', // Arabic (U.A.E.)
            'ar_YE', // Arabic (Yemen)
        ],
        [ '(.+)-$', ',', '.' ],
        
        // like BY (-,. 3.2)
        [
            'be_BY', // Belarusian (Belarus)
        ],
        [ '-(.+)$', ',', '.' ],
        
        // like AZ (-blank,)
        [
            'az_Cyrl_AZ', // Azeri (Cyrillic, Azerbaijan)
            'az_Latn_AZ', // Azeri (Latin, Azerbaijan)
            'ba_RU', // Bashkir (Russia)
            'br_FR', // Breton (France)
            'bg_BG', // Bulgarian (Bulgaria)
            'co_FR', // Corsican (France)
            'hr_HR', // Croatian (Croatia)
            'hr_BA', // Croatian (Latin, Bosnia and Herzegovina)
            'gsw_FR', // Alsatian (France)
            'bg_BG', // Bulgarian (Bulgaria)
            'cs_CZ', // Czech (Czech Republic)
            'fi_FI', // Finnish (Finland)
            'fr_FR', // French (France)
            'hu_HU', // Hungarian (Hungary)
            'nb_NO', // Norwegian, Bokmål (Norway)
            'pl_PL', // Polish (Poland)
            'ru_RU', // Russian (Russia)
            'sk_SK', // Slovak (Slovakia)
            'uk_UA', // Ukrainian (Ukraine)
            'be_BY', // Belarusian (Belarus)
            'lv_LV', // Latvian (Latvia)
            'az_Latn_AZ', // Azeri (Latin, Azerbaijan)
            'ka_GE', // Georgian (Georgia)
            'uz_Latn_UZ', // Uzbek (Latin, Uzbekistan)
            'tt_RU', // Tatar (Russia)
            'mn_MN', // Mongolian (Cyrillic, Mongolia)
            'nn_NO', // Norwegian, Nynorsk (Norway)
            'sv_FI', // Swedish (Finland)
            'az_Cyrl_AZ', // Azeri (Cyrillic, Azerbaijan)
            'uz_Cyrl_UZ', // Uzbek (Cyrillic, Uzbekistan)
            'fr_CA', // French (Canada)
            'fr_LU', // French (Luxembourg)
            'fr_MC', // French (Principality of Monaco)
            'sma_NO', // Sami (Southern) (Norway)
            'smn_FI', // Sami (Inari) (Finland)
            'se_FI', // Sami (Northern) (Finland)
            'sms_FI', // Sami (Skolt) (Finland)
            'smj_NO', // Sami (Lule) (Norway)
            'lb_LU', // Luxembourgish (Luxembourg)
            'se_NO', // Sami (Northern) (Norway)
        ],
        [ '-(.+)$', ' ', ',' ],
        
        // like ES (-.,)
        [
            'bs_Cyrl_BA', // Bosnian (Cyrillic, Bosnia and Herzegovina)
            'bs_Latn_BA', // Bosnian (Latin, Bosnia and Herzegovina)
            'ca_ES', // Catalan (Catalan)
            'da_DK', // Danish (Denmark)
            'de_DE', // German (Germany)
            'el_GR', // Greek (Greece)
            'eu_ES', // Basque (Basque)
            'hr_HR', // Croatian (Croatia)
            'lt_LT', // Lithuanian (Lithuania)
            'id_ID', // Indonesian (Indonesia)
            'is_IS', // Icelandic (Iceland)
            'it_IT', // Italian (Italy)
            'nl_NL', // Dutch (Netherlands)
            'pt_BR', // Portuguese (Brazil)
            'ro_RO', // Romanian (Romania)
            'sl_SI', // Slovenian (Slovenia)
            'sq_AL', // Albanian (Albania)
            'sv_SE', // Swedish (Sweden)
            'tr_TR', // Turkish (Turkey)
            'vi_VN', // Vietnamese (Vietnam)
            'eu_ES', // Basque (Basque)
            'mk_MK', // Macedonian (Former Yugoslav Republic of Macedonia)
            'fo_FO', // Faroese (Faroe Islands)
            'ms_MY', // Malay (Malaysia)
            'gl_ES', // Galician (Galician)
            'fr_BE', // French (Belgium)
            'nl_BE', // Dutch (Belgium)
            'pt_PT', // Portuguese (Portugal)
            'sr_Latn_CS', // Serbian (Latin, Serbia)
            'ms_BN', // Malay (Brunei Darussalam)
            'de_AT', // German (Austria)
            'es_ES', // Spanish (Spain)
            'sr_Cyrl_CS', // Serbian (Cyrillic, Serbia)
            'de_LU', // German (Luxembourg)
            'es_CR', // Spanish (Costa Rica)
            'es_VE', // Spanish (Venezuela)
            'es_CO', // Spanish (Colombia)
            'es_AR', // Spanish (Argentina)
            'es_EC', // Spanish (Ecuador)
            'es_CL', // Spanish (Chile)
            'es_UY', // Spanish (Uruguay)
            'es_PY', // Spanish (Paraguay)
            'es_BO', // Spanish (Bolivia)
            'sr_Cyrl_BA', // Serbian (Cyrillic) (Bosnia and Herzegovina)
            'fy_NL', // Frisian (Netherlands)
            'se_SE', // Sami (Northern) (Sweden)
            'sma_SE', // Sami (Southern) (Sweden)
            'hr_BA', // Croatian (Bosnia and Herzegovina)
            'bs_Latn_BA', // Bosnian (Bosnia and Herzegovina)
            'bs_Cyrl_BA', // Bosnian (Cyrillic) (Bosnia and Herzegovina)
            'arn_CL', // Mapudungun (Chile)
            'quz_EC', // Quechua (Ecuador)
            'sr_Latn_BA', // Serbian (Latin) (Bosnia and Herzegovina)
            'smj_SE', // Sami (Lule) (Sweden)
            'quz_BO', // Quechua (Bolivia)
            'es_PE', // Spanish (Peru)
        ],
        [ '-(.+)$', '.', ',' ],
        
        
        ],
        
    // locales: [

    //     work in progress
    //     
    //     'ur_PK', // Urdu (Islamic Republic of Pakistan)
    //     'hy_AM', // Armenian (Armenia)
    //     'af_ZA', // Afrikaans (South Africa)
    //     'hi_IN', // Hindi (India)
    //     'sw_KE', // Kiswahili (Kenya)
    //     'pa_IN', // Punjabi (India)
    //     'gu_IN', // Gujarati (India)
    //     'ta_IN', // Tamil (India)
    //     'te_IN', // Telugu (India)
    //     'kn_IN', // Kannada (India)
    //     'mr_IN', // Marathi (India)
    //     'sa_IN', // Sanskrit (India)
    //     'kok_IN', // Konkani (India)
    //     'syr_SY', // Syriac (Syria)
    //     'dv_MV', // Divehi (Maldives)
    //     'ar_IQ', // Arabic (Iraq)
    //     'zh_CN', // Chinese (People's Republic of China)
    //     
    //     'es_MX', // Spanish (Mexico)
    //     'ar_EG', // Arabic (Egypt)
    //     'zh_HK', // Chinese (Hong Kong S.A.R.)
    //     'en_AU', // English (Australia)
    //     'ar_LY', // Arabic (Libya)
    //     'zh_SG', // Chinese (Singapore)
    //     'en_CA', // English (Canada)
    //     'es_GT', // Spanish (Guatemala)
    //     'ar_DZ', // Arabic (Algeria)
    //     'zh_MO', // Chinese (Macao S.A.R.)
    //     'en_NZ', // English (New Zealand)
    //     'ar_MA', // Arabic (Morocco)
    //     'en_IE', // English (Ireland)
    //     'es_PA', // Spanish (Panama)
    //     'ar_TN', // Arabic (Tunisia)
    //     'en_ZA', // English (South Africa)
    //     'es_DO', // Spanish (Dominican Republic)
    //     'ar_OM', // Arabic (Oman)
    //     'en_JM', // English (Jamaica)
    //     'ar_YE', // Arabic (Yemen)
    //     'en_029', // English (Caribbean)
    //     'ar_SY', // Arabic (Syria)
    //     'en_BZ', // English (Belize)
    //     
    //     'ar_JO', // Arabic (Jordan)
    //     'en_TT', // English (Trinidad and Tobago)
    //     'ar_LB', // Arabic (Lebanon)
    //     'en_ZW', // English (Zimbabwe)
    //     'ar_KW', // Arabic (Kuwait)
    //     'en_PH', // English (Republic of the Philippines)
    //     'ar_AE', // Arabic (U.A.E.)
    //     'ar_BH', // Arabic (Bahrain)
    //     'ar_QA', // Arabic (Qatar)
    //     'es_SV', // Spanish (El Salvador)
    //     'es_HN', // Spanish (Honduras)
    //     'es_NI', // Spanish (Nicaragua)
    //     'es_PR', // Spanish (Puerto Rico)
    //     'zu_ZA', // Zulu (South Africa)
    //     'xh_ZA', // Xhosa (South Africa)
    //     'tn_ZA', // Tswana (South Africa)
    //     'quz_PE', // Quechua (Peru)
    //     'cy_GB', // Welsh (United Kingdom)
    //     'fil_PH', // Filipino (Philippines)
    //     'iu_Latn_CA', // Inuktitut (Latin) (Canada)
    //     'mi_NZ', // Maori (New Zealand)
    //     'ga_IE', // Irish (Ireland)
    //     'moh_CA', // Mohawk (Canada)
    //     'ns_ZA', // Northern Sotho (South Africa)
    //     'mt_MT', // Maltese (Malta)
    //     ],

    // localesLikeIR: [
    //     
    //     ],
    // localesLikeKZ: [
    //     'kk-KZ', // Kazakh (Kazakhstan)
    //     'ky-KG', // Kyrgyz (Kyrgyzstan)
    //     ],
    // localesLikeEE: [
    //     'et-EE', // Estonian (Estonia)
    //     ],
    
    numberCountries: [
        // like US
        [ 'ae','au','ca','cn','eg','gb','hk','il','in','jp','sk','th','tw','us' ],
        [ '^-(.+)', ',', '.' ],
        
        // like DE
        [ 'at','br','de','dk','es','gr','it','nl','pt','tr','vn' ],
        [ '^-(.+)', '.', ',' ],
        
        // like FR
        [ 'bg','cz','fi','fr','no','pl','ru','se' ],
        [ '^-(.+)', ' ', ',' ],
        
        // like CH
        [ 'ch' ]
        [ '^-(.+)', '\'', '.' ]
        
        ],
    
    // lookup maps
    countriesMap: new JsNumberFormatter.util.HashMap(),
    localesMap: new JsNumberFormatter.util.HashMap(),
    
    parseOptions: function(locale) {
        var codes = JsNumberFormatter.locales._getCodes(locale);
        var dec = codes[2];
        var group = codes[1];
        var neg = codes[0];
        return new JsNumberFormatter.parseNumberSimpleOptions().specifyAll(dec, group, false, true, false, '^' + neg + '(.+)');
    },
    
    formatOptions: function(locale) {
        var codes = JsNumberFormatter.locales._getCodes(locale);
        var dec = codes[2];
        var group = codes[1];
        var neg = codes[0];
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
            for (var locGroupIdx = 0; locGroupIdx < JsNumberFormatter.locales.numberCountries.length; locGroupIdx += 2) {
                var countries = JsNumberFormatter.locales.numberCountries[locGroupIdx];
                if (!countries) {
                    break;
                }
                var options = JsNumberFormatter.locales.numberCountries[locGroupIdx + 1];
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
            for (var locGroupIdx = 0; locGroupIdx < JsNumberFormatter.locales.numberLocales.length; locGroupIdx += 2) {
                var locales = JsNumberFormatter.locales.numberLocales[locGroupIdx];
                if (!locales) {
                    break;
                }
                var options = JsNumberFormatter.locales.numberLocales[locGroupIdx + 1];
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
