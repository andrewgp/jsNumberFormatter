/**
 * LIBRARY: jsNumberFormatter
 * COMPONENT: Locale Support - CLDR Super-Set Data
 * DESCRIPTION: Provides locale support for jsNumberFormatter.
 * FILENAME: jsNumberFormatter.locale.decimal.superset.js
 * DATE: 2015-04-16
 * AUTHOR: Andrew G Parry
 * SOURCE: https://github.com/andrewgp/jsNumberFormatter
 * 
 * VERSION: 0.4
 * STATE: Alpha
 * DEPENDANCIES: jsNumberFormatter.js; jsNumberFormatter.locale.js
 * 
 * This provides a hard-coded CLDR super-set of data for decimal info for locales.
 * 
 * STATUS: Working OK
 * 
 * CHANGELOG:
 * 2015-04-16   AP  Added
 * 
 * LICENSE:
 * 
 * The MIT License (MIT)
 * Copyright (c) 2015 Andrew G Parry
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
var JsNumberFormatter = JsNumberFormatter || require('../jsnumberformatter.js').nf || {};
JsNumberFormatter.locales = JsNumberFormatter.locales || require('../jsnumberformatter.locale.js').nfl || {};

// locales data namespace
JsNumberFormatter.locales.data = {
	decimals: {
		locales: [
			// #0
			[
				'gv',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'rof',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ga',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mn_Mong_CN',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'om_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'jmc_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'cch_NG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ka_GE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'to',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_Shaw',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'th',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ti',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'tg',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kcg',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zh_Hans_HK',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mg',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'guz',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'trv',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ee_GH',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'tig',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zh',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'tg_Cyrl',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sbp',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'wae_CH',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'vai_Vaii_LR',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ssy_ER',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kaj_NG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'lg_UG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'rof_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'tig_ER',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mer',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'root',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kam_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'es_HN',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'guz_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'az_Cyrl',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mn_Cyrl_MN',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'haw_US',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'chr',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'vun_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'yo',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ksb',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ii_CN',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'jmc',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kln',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mn',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mt',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ms',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'my',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ku_Latn_SY',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'to_TO',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_HK',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'es_GT',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_AS',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nyn',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ig',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sid',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'oc_FR',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ky_KG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'lag',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ebu_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mer_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sw',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'so',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sn',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'se',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'gv_GB',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_SG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_AU',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'luo_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mas_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'lg',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'lo',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'naq_NA',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'byn',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fil',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'uz_Cyrl_UZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zh_Hans_CN',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'rwk',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'dav',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_Dsrt_US',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_ZW',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'es_PR',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ee',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'es_PE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ku_Arab_IR',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ku_Arab_IQ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bo_CN',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'az_Latn',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'dav_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'rm',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'es_US',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_TT',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'asa',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'vai',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ms_MY',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'asa_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mn_Mong',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'lo_LA',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'so_DJ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'cy_GB',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zh_Hant_MO',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sw_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'teo',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fur_IT',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ha_Latn_GH',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_MH',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_MT',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_MU',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_MP',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'am_ET',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bem',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bez',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'so_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kln_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sah',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ee_TG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'es_419',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'saq',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ga_IE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sah_RU',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_PK',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ur_PK',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kaj',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kam',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ka',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ki',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ko',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kde_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kw',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ku',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ky',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bo_IN',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_BB',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_BM',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_BW',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mas_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_BZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'xog',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zh_Hans_MO',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'cgg_UG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'vai_Vaii',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ksh',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'tg_Cyrl_TJ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ssy',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'dz',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_IE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mg_MG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'he_IL',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_UM',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nus',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ebu',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_US',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'th_TH',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'so_SO',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'luy',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'so_ET',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'om_ET',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'luo',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bez_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ja',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zh_Hant_HK',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nus_SD',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'uz_Cyrl',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ksh_DE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'teo_UG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_NA',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nds_DE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_NZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'cy',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'trv_TW',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'rwk_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_GY',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_GU',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ja_JP',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ne_NP',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_GB',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'es_SV',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ti_ER',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'gaa',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fur',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'vun',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ku_Latn',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ne_IN',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sid_ET',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'vai_Latn',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ii',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'gaa_GH',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ia',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'xog_UG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ko_KR',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sn_ZW',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'rm_CH',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ha_Latn',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'saq_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'cch',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'wal_ET',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'aa_ET',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'aa_ER',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'es_NI',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ksb_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'byn_ER',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_JM',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mn_Cyrl',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'haw',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fil_PH',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'chr_US',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kw_GB',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'uz_Latn',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zh_Hans_SG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_PH',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kde',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zh_Hans',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zh_Hant',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bm_ML',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nd_ZW',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_CA',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bem_ZM',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bm',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bo',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'cgg',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kcg_NG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ha_Latn_NG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'om',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ha_Latn_NE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'se_NO',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'oc',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'vai_Latn_LR',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nds',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'luy_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ig_NG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mas',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'az_Latn_AZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sbp_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'wal',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'yo_NG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'wae',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ku_Arab',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_Dsrt',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_VI',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mt_MT',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'se_FI',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ha',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'he',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'uz',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ur',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'uz_Latn_UZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ki_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'teo_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'aa',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'es_PA',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'am',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'my_MM',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zh_Hant_TW',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'az',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'lag_TZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nyn_UG',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'aa_DJ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nd',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ne',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'dz_BT',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ku_Latn_TR',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'naq',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'az_Cyrl_AZ',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'es_MX',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sw_KE',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ti_ET',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'es_DO',	// Gaelg ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
			],
			[ [ '-', ',', '.'], [ '#,##0.###', '3', '3' ] ],

			// #1
			[
				'gu',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'te',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'ta',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'bn_BD',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'gu_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'brx',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'kok_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'ta_LK',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'ml',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'mr',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'or',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'si',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'ta_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'or_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'kok',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'kn_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'brx_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'bn_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'kn',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'en_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'pa_Guru',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'si_LK',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'pa_Guru_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'mr_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'hi_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'pa',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'te_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'as_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'ml_IN',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'bn',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'hi',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
				'as',	// ગુજરાતી ($Date: 2011-07-05 08:29:49 -0700 (Tue, 05 Jul 2011) $)
			],
			[ [ '-', ',', '.'], [ '#,##,##0.###', '3', '3' ] ],

			// #2
			[
				'fr_DJ',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'uk_UA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ts',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'hu_HU',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'agq_CM',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'be',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zu',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_YT',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nso_ZA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'tn',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'shi_Tfng_MA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ru_RU',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'br_FR',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_BI',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'af_ZA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'st_LS',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'st_ZA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'dua',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_KM',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ss_SZ',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ff',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fi',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'shi_Latn_MA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ss',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_RE',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sk',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_RW',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'dua_CM',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'en_ZA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'tzm_Latn',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'eo',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'et_EE',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'et',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ru',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ff_SN',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kk_Cyrl_KZ',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ts_ZA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_GN',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_GA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_GF',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_GQ',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_GP',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_NE',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nb_NO',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'xh',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'be_BY',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'pt_GW',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'tn_ZA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nr_ZA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'st',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_MQ',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'tzm_Latn_MA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'yav_CM',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_MG',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_MF',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_MC',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_ML',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kab',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_CM',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_CI',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_CG',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_CF',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_CD',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_CA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kk',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ru_MD',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'xh_ZA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'dyo_SN',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'pt_PT',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ksf',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'cs_CZ',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'dyo',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'sk_SK',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_TG',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_TD',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bas',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'shi',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ksf_CM',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_FR',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fi_FI',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ru_UA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bas_CM',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'shi_Tfng',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				've_ZA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'cs',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nmg_CM',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bg_BG',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'shi_Latn',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				've',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_BJ',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_BL',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'tzm',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_BF',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ewo',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ss_ZA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ewo_CM',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'af_NA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kk_Cyrl',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'pt_MZ',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'bg',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nmg',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'br',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'pt_AO',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'yav',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nso',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'fr_SN',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'hu',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'zu_ZA',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'pl',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'uk',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'af',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nb',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'nr',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'pt_ST',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'kab_DZ',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'pl_PL',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'agq',	// français (Djibouti) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
			],
			[ [ '-', ' ', ','], [ '#,##0.###', '3', '3' ] ],

			// #3
			[
				'ckb_Latn',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'uz_Arab',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'ckb_IR',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'pa_Arab_PK',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'ckb_IQ',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'pa_Arab',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'fa',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'fa_IR',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'uz_Arab_AF',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'ckb',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'ps_AF',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'ckb_Arab',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'ckb_Arab_IR',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'ckb_Arab_IQ',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'ckb_Latn_IQ',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'ps',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
				'fa_AF',	// undefined (undefined) ($Date: 2011-02-07 14:00:00 -0800 (Tues, 07 Feb 2011) $)
			],
			[ [ '-', '٬', '٫'], [ '#,##0.###', '3', '3' ] ],

			// #4
			[
				'gl',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es_VE',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'tr',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'de_AT',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'bs_BA',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'nl_NL',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'ro_RO',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es_CO',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es_CL',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es_CR',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'da_DK',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'kl_GL',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'vi_VN',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sl_SI',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sg_CF',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'ln_CD',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'ln_CG',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'mk',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'is_IS',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'el_GR',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es_GQ',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'fr_BE',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'mgh',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'fo',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sr',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sq',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sg',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es_UY',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'ln',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'lu',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'nl_AW',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'tr_TR',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'rn_BI',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'el',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es_PY',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sr_Latn_BA',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'eu',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'swc',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'rw',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'hr_HR',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'rn',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'ro',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sq_AL',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'seh_MZ',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'id_ID',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'el_POLYTON',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es_BO',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'it_IT',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'seh',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sl',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'km',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'kl',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'en_BE',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es_AR',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'de',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'el_CY',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'mua',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'kea',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'swc_CD',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'pt',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es_EC',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'lu_CD',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'es_ES',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sr_Latn_ME',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sr_Cyrl_ME',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'km_KH',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'mua_CM',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'fo_FO',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'de_BE',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sr_Cyrl_RS',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'vi',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'is',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'it',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'kea_CV',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'id',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'pt_BR',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'gl_ES',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'de_LU',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'ca',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sr_Cyrl',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'mk_MK',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'fr_LU',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'da',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'eu_ES',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'bs',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sr_Latn_RS',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'ms_BN',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sr_Latn',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'mgh_MZ',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'sr_Cyrl_BA',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'ca_ES',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'hr',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'nl_BE',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'rw_RW',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'nl',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'de_DE',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'ro_MD',	// Galego ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
			],
			[ [ '-', '.', ','], [ '#,##0.###', '3', '3' ] ],

			// #5
			[
				'sh_YU',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ha_Arab',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ha_SD',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ku_IQ',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ku_IR',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'wo_Latn_SN',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ha_Arab_NG',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'mo',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ug_Arab',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sr_Cyrl_CS',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'zh_MO',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ha_Arab_SD',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'tt',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ug',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'az_AZ',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'tl',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sh_BA',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'mi',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'zh_HK',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ku_TR',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'tg_TJ',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'wo_SN',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sh',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sa',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sr_Latn_YU',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sr_Cyrl_YU',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sa_IN',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'tzm_MA',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'az_Arab_IR',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'az_Arab',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'en_ZZ',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sr_RS',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ku_SY',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'kfo',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'shi_MA',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'uz_UZ',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'tl_PH',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'mi_NZ',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ug_Arab_CN',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sh_CS',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'pa_PK',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ha_GH',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'gez',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'dv',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'zh_CN',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sr_ME',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ny_MW',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'wo',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'mn_CN',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'kk_KZ',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sr_BA',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sr_Latn_CS',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'zh_TW',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'iu',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'iw',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'in',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'wo_Latn',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ug_CN',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'syr',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'kpe_GN',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'mn_MN',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'kpe_LR',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'kfo_CI',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'syr_SY',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ha_NG',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ha_NE',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sr_CS',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'kpe',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'gez_ET',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'gez_ER',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'dv_MV',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'az_IR',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sr_YU',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'zh_SG',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'no',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'ny',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'tt_RU',	// Srpskohrvatski (undefined) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
			],
			[ [ '', '', ''], [ '#,##0.###', '3', '3' ] ],

			// #6
			[
				'ar_MA',	// العربية (المغرب) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ar_DZ',	// العربية (المغرب) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
			],
			[ [ '-', '.', ','], [ '#,##0.###;#,##0.###-', '4', '3' ] ],

			// #7
			[
				'hy_AM',	// Հայերէն (Հայաստանի Հանրապետութիւն) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'hy',	// Հայերէն (Հայաստանի Հանրապետութիւն) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
			],
			[ [ '-', '.', ','], [ '#0.###', '3', '0' ] ],

			// #8
			[
				'nn_NO',	// nynorsk (Noreg) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sv_FI',	// nynorsk (Noreg) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sv',	// nynorsk (Noreg) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'lv',	// nynorsk (Noreg) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'sv_SE',	// nynorsk (Noreg) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'lv_LV',	// nynorsk (Noreg) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'nn',	// nynorsk (Noreg) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
			],
			[ [ '−', ' ', ','], [ '#,##0.###', '3', '3' ] ],

			// #9
			[
				'ar_LY',	// العربية (ليبيا) ($Date: 2010-02-25 22:32:00 -0800 (Thu, 25 Feb 2010) $)
				'ar_BH',	// العربية (ليبيا) ($Date: 2010-02-25 22:32:00 -0800 (Thu, 25 Feb 2010) $)
				'ar_IQ',	// العربية (ليبيا) ($Date: 2010-02-25 22:32:00 -0800 (Thu, 25 Feb 2010) $)
				'ar_JO',	// العربية (ليبيا) ($Date: 2010-02-25 22:32:00 -0800 (Thu, 25 Feb 2010) $)
				'ar_OM',	// العربية (ليبيا) ($Date: 2010-02-25 22:32:00 -0800 (Thu, 25 Feb 2010) $)
				'ar_AE',	// العربية (ليبيا) ($Date: 2010-02-25 22:32:00 -0800 (Thu, 25 Feb 2010) $)
				'ar_LB',	// العربية (ليبيا) ($Date: 2010-02-25 22:32:00 -0800 (Thu, 25 Feb 2010) $)
				'ar_KW',	// العربية (ليبيا) ($Date: 2010-02-25 22:32:00 -0800 (Thu, 25 Feb 2010) $)
				'ar_EG',	// العربية (ليبيا) ($Date: 2010-02-25 22:32:00 -0800 (Thu, 25 Feb 2010) $)
				'ar_SD',	// العربية (ليبيا) ($Date: 2010-02-25 22:32:00 -0800 (Thu, 25 Feb 2010) $)
				'ar',	// العربية (ليبيا) ($Date: 2010-02-25 22:32:00 -0800 (Thu, 25 Feb 2010) $)
			],
			[ [ '-', '٬', '٫'], [ '#,##0.###;#,##0.###-', '4', '3' ] ],

			// #10
			[
				'twq',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'dje',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'twq_NE',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'dje_NE',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ses_ML',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ses',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mfe_MU',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'mfe',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'khq_ML',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ak_GH',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'khq',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'ak',	// Tasawaq senni ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
			],
			[ [ '-', ' ', '.'], [ '#,##0.###', '3', '3' ] ],

			// #11
			[
				'pa_IN',	// ਪੰਜਾਬੀ (ਭਾਰਤ) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
			],
			[ [ '', '', ''], [ '#,##,##0.###', '3', '3' ] ],

			// #12
			[
				'en_US_POSIX',	// English (United States) ($Date: 2011-04-27 22:24:47 -0700 (Wed, 27 Apr 2011) $)
			],
			[ [ '-', ',', '.'], [ '#0.######', '6', '0' ] ],

			// #13
			[
				'gsw_CH',	// Schwiizertüütsch (Schwiiz) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
				'gsw',	// Schwiizertüütsch (Schwiiz) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
			],
			[ [ '−', '’', '.'], [ '#,##0.###', '3', '3' ] ],

			// #14
			[
				'lt',	// lietuvių ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
				'lt_LT',	// lietuvių ($Date: 2011-07-05 13:52:21 -0700 (Tue, 05 Jul 2011) $)
			],
			[ [ '−', ',', '.'], [ '#,##0.###', '3', '3' ] ],

			// #15
			[
				'ar_QA',	// العربية (قطر) ($Date: 2011-04-26 11:39:31 -0700 (Tue, 26 Apr 2011) $)
				'ar_YE',	// العربية (قطر) ($Date: 2011-04-26 11:39:31 -0700 (Tue, 26 Apr 2011) $)
				'ar_SA',	// العربية (قطر) ($Date: 2011-04-26 11:39:31 -0700 (Tue, 26 Apr 2011) $)
				'ar_SY',	// العربية (قطر) ($Date: 2011-04-26 11:39:31 -0700 (Tue, 26 Apr 2011) $)
			],
			[ [ '-', '٬', '٫'], [ '#0.###;#0.###-', '4', '0' ] ],

			// #16
			[
				'fr_CH',	// français suisse ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'it_CH',	// français suisse ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'de_LI',	// français suisse ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
				'de_CH',	// français suisse ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
			],
			[ [ '-', '\'', '.'], [ '#,##0.###', '3', '3' ] ],

			// #17
			[
				'uz_AF',	// اۉزبېک (افغانستان) ($Date: 2009-05-05 16:06:42 -0700 (Tue, 05 May 2009) $)
			],
			[ [ 'undefined', '٬', '٫'], [ '#,##0.###', '3', '3' ] ],

			// #18
			[
				'ar_TN',	// العربية (تونس) ($Date: 2011-05-01 23:05:34 -0700 (Sun, 01 May 2011) $)
			],
			[ [ '-', '.', ','], [ '#0.###;#0.###-', '4', '0' ] ],

			// #19
			[
				'ur_IN',	// اردو (بھارت) ($Date: 2011-04-25 12:35:18 -0700 (Mon, 25 Apr 2011) $)
			],
			[ [ '-', '٬', '٫'], [ '#,##,##0.###', '3', '3' ] ],

		],
		
		countries: [
			// like US
	        [ 'ae','au','ca','cn','eg','gb','hk','il','in','jp','sk','th','tw','us' ],
	        [ ['^-(.+)', ',', '.'] ],
	        
	        // like DE
	        [ 'at','br','de','dk','es','gr','it','nl','pt','tr','vn' ],
	        [ ['^-(.+)', '.', ','] ],
	        
	        // like FR
	        [ 'bg','cz','fi','fr','no','pl','ru','se' ],
	        [ ['^-(.+)', ' ', ','] ],
	        
	        // like CH
	        [ 'ch' ],
	        [ ['^-(.+)', '\'', '.'] ],
		],
	},
};

/*  MISC    */


// export for RequireJS support (mainly to allow mocha to work)
module.exports.nfldd = JsNumberFormatter.locales.data.decimals;
