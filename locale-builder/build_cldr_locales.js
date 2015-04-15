/**
 * LIBRARY: jsNumberFormatter
 * COMPONENT: Offline Locale Support
 * DESCRIPTION: Provides locale construction from online CLDR data.
 * FILENAME: build_cldr_locales.js
 * DATE: 2015-04-15
 * AUTHOR: Andrew G Parry
 * SOURCE: https://github.com/andrewgp/jsNumberFormatter
 * 
 * VERSION: 0.1
 * STATE: Prototype
 * DEPENDANCIES: -
 * 
 * This just proves offline support to read online CLDR (JSON) data and create
 * a supporting JS file for the number formatter to use. This will be helpful
 * for initial full build and also for the construction of a sub-set of just
 * the locales needed for a given project.
 * 
 * Note: Is a node.js file
 * 
 * STATUS: Working but needs more work
 * 
 * CHANGELOG:
 * 2015-04-15   AP  Added
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

//
// config
//

// filter IN these items
var localeInFilter = [ ];// 'en_GB', 'en_US' ];
// filter OUT these items
var localeOutFilter = [ ];

//
// setup
//

var http = require('http');

//
// Runtime
//

listLocales();

var locales = [];
var localeData = [];

function listLocales() {
    // list all locales
    var options = {
      host: 'i18ndata.appspot.com',
      path: '/cldr/tags/approved/main?depth=-1'
    };
    
    var callback = function(response) {
        var str = '';
        
        response.on('data', function (chunk) {
            str += chunk;
        });
    
        response.on('end', function () {
            console.log('Listing locales...');
            var json = JSON.parse(str);
            for (var property in json) {
                if (json.hasOwnProperty(property)) {
                    if (localeInFilter.length > 0) {
                        if (localeInFilter.indexOf(property) >= 0) {
                            locales.push(property);
                        }
                    } else {
                        if (localeOutFilter.length > 0) {
                            if (!localeOutFilter.indexOf(property)) {
                                locales.push(property);
                            }
                        } else {
                            locales.push(property);
                        }
                    }
                }
            }
            console.log('Found ' + locales.length + ' locales');
            
            series(locales.shift());
        });
    };
    
    http.request(options, callback).end();
}

// Async task (same in all examples in this chapter)
function async(arg, callback) {
    //console.log('do something with \''+arg+'\', return 1 sec later');
    setTimeout(function() { getLocale(arg, callback); }, 200);
}
// Final task (same in all the examples)
function final() {
    console.log('Done');
    
    var groupedLocales = [];
    var groupedSpecs = [];
    for (var locIdx = 0; locIdx < localeData.length; locIdx++) {
        var spec = localeData[locIdx].grouping;
        
        // check against each existing group
        var specMatch = -1;
        for (var specIdx = 0; specIdx < groupedSpecs.length; specIdx++) {
            if (spec === groupedSpecs[specIdx]) {
                specMatch = specIdx;
                break;
            }
        }
        
        if (specMatch != -1) {
            // add to existing
            groupedLocales[specMatch].push(localeData[locIdx]);
        } else {
            // add new
            groupedSpecs.push(spec);
            groupedLocales.push([ localeData[locIdx] ]);
        }
    }
    
    console.log('=========== JS File Start ===========');
    // TODO Parsing of the format mask
    for (var grpIdx = 0; grpIdx < groupedLocales.length; grpIdx++) {
        var group = groupedLocales[grpIdx];
        
        console.log('[');
        for (var i = 0; i < group.length; i++) {
            console.log('\'' + group[i].locale + '\',' + '// ' + group[0].locale + ' (' + group[0].id + ')');
        }
        console.log('],');
        console.log('[');
        for (var i = 0; i < group[0].numberSystem.length; i++) {
            console.log('\'' + group[0].numberSystem[i] + '\',');
        }
        console.log('],');
        console.log('');
    }
    console.log('=========== JS File End ===========');
}

// A simple async series:
// var items = [ 'en_GB', 'en_US' ];
// var results = [];
function series(item) {
  if(item) {
    async( item, function(result) {
      localeData.push(result);
      return series(locales.shift());
    });
  } else {
    return final();
  }
}
// series(items.shift());

function getLocale(locale, callback) {
    console.log('Getting ' + locale);
    
    var options = {
      host: 'i18ndata.appspot.com',
      path: '/cldr/tags/approved/main/' + locale + '?depth=-1'
    };
    
    var httpCallback = function(response) {
        var str = '';
        
        response.on('data', function (chunk) {
            str += chunk;
        });
    
        response.on('end', function () {
            var data = new Object();
            console.log('locale= ' + locale + ' ...');
            var json = JSON.parse(str);
            var id = json.identity.generation['@date'];
            console.log('ID= ' + id);
            data.locale = locale;
            data.id = id;
            
            var numbers = json.numbers;

            var numSys = parseNumberSystem(numbers);
            var decFormat = parseDecimalFormat(numbers, 'standard');
            //var percFormat = numbers.percentFormats;
            //var currencyFormats = numbers.currencyFormats;
            
            // console.log('Perc Format= ' + percFormat);
            // console.log('Currency Format= ' + currencyFormats);
            console.log('// Decimal Format= ' + decFormat);
            console.log('// Num Sys= ' + numSys);
            
            data.numberSystem = numSys;
            data.decimalFormat = decFormat;
            data.grouping = numSys[0] + numSys[1] + numSys[2];
            callback(data);
        });
    };
    
    http.request(options, httpCallback).end();
}

function parseNumberSystem(numbers) {
    var defNumSys = numbers.defaultNumberingSystem;
    var numSys = numbers['symbols-numberSystem-' + defNumSys];
    if (numSys) {
        return [ numSys.minusSign, numSys.group, numSys.decimal ];
    }
    return [ '', '', '' ];
}

function parseDecimalFormat(numbers, name) {
    var decimalFormats = numbers.decimalFormats;
    var format = decimalFormats[name].decimalFormat.pattern;
    return format;
}