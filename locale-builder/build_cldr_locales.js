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
 * STATE: Alpha
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
 * TODO:
 * 
 * 1. Perhaps best to have locale names in english and not native/local lang.
 * 2. Add currency support
 * 3. Add percentage support
 * 4. Escape single quotes in data write
 * 
 * CHANGELOG:
 * 2015-04-15   AP  Added
 * 2015-04-16   AP  Improved with file saving support etc.
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
var localeInFilter = [ ];
// filter OUT these items
var localeOutFilter = [ ];

//
// dependencies
//

var http = require('http');
var fs = require('fs');

//
// runtime
//

// read params
var useFile = true;
if (process.argv.length > 2) {
    useFile = process.argv[2];
}

listLocales();

var localeLimitNum = 0;
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
                
                // check limit
                if (localeLimitNum > 0 && locales.length == localeLimitNum) {
                    console.log('Stopping at limit of ' + localeLimitNum);
                    break;
                }
            }
            console.log('Found ' + locales.length + ' locales');
            
            series(locales.shift());
        });
    };
    
    http.request(options, callback).end();
}

function async(arg, callback) {
    setTimeout(function() { getLocale(arg, callback); }, 200);
}

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
    
    // build content as a big string
    // TODO Parsing of the format mask
    var cont = '// base namespace re-declaration\n';
    cont += 'var JsNumberFormatter = JsNumberFormatter || require(\'../jsnumberformatter.js\').nf || {};\n';
    cont += 'JsNumberFormatter.locales = JsNumberFormatter.locales || require(\'../jsnumberformatter.locale.js\').nfl || {};\n\n';
    cont += '// locales data namespace\n';
    cont += 'JsNumberFormatter.locales.data = {\n';
    cont += '\tdecimals: {\n\t\tlocales: [\n';
    for (var grpIdx = 0; grpIdx < groupedLocales.length; grpIdx++) {
        var group = groupedLocales[grpIdx];
        
        cont += '\t\t\t// #' + grpIdx + '\n';
        cont += '\t\t\t[\n';
        for (var i = 0; i < group.length; i++) {
            cont += '\t\t\t\t\'' + group[i].locale + '\',';
            cont += '\t// ' + group[0].name + ' (' + group[0].id + ')\n';
        }
        cont += '\t\t\t],\n';
        cont += '\t\t\t[ [ ';
        for (var i = 0; i < group[0].numberSystem.length; i++) {
            if (i > 0) {
                cont += ', ';
            }
            var value = 
            cont += '\'' + group[0].numberSystem[i] + '\'';
        }
        cont += '], [ ';
        for (var i = 0; i < group[0].decimalFormat.length; i++) {
            if (i > 0) {
                cont += ', ';
            }
            cont += '\'' + group[0].decimalFormat[i] + '\'';
        }
        cont += ' ] ],\n';
        cont += '\n';
    }
    cont += '\t\t],\n\t}\n};';
    
    if (useFile) {
        // write to file
        fs.writeFile('locales_cldr.js', cont, function (err) {
            if (err) {
                throw err;
            }
            console.log('File saved');
        });
    } else {
        // write to console
        console.log('=========== JS File Start ===========');
        console.log(cont);
        console.log('=========== JS File End ===========');
    }
}

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
            var name = json.localeDisplayNames.languages[locale];
            if (!name) {
                // build from language + terriority
                var comps = locale.split('_', 2);
                name = json.localeDisplayNames.languages[comps[0]] + ' (' + json.localeDisplayNames.territories[comps[1]] + ')';
            }
            
            console.log('Name = ' + name + ' ID= ' + id);
            data.locale = locale;
            data.id = id;
            data.name = name;
            
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
            data.grouping = numSys[0] + numSys[1] + numSys[2] + decFormat[0];
            callback(data);
        });
    };
    
    http.request(options, httpCallback).end();
}

function parseNumberSystem(numbers) {
    var defNumSys = numbers.defaultNumberingSystem;
    var numSys = numbers['symbols-numberSystem-' + defNumSys];
    if (numSys) {
        var group = numSys.group;
        if (group === ' ') {
            group = ' ';
        }
        return [ numSys.minusSign, group, numSys.decimal ];
    }
    return [ '', '', '' ];
}

function parseDecimalFormat(numbers, name) {
    var decimalFormats = numbers.decimalFormats;
    var format = decimalFormats[name].decimalFormat.pattern;
    
    // parse decimal points
    var decPos = format.lastIndexOf('.');
    var decSize = 0;
    if (decPos && decPos > 0) {
        decSize = format.length - (decPos + 1);
    }
    
    // parse groups
    // TODO support multiple groups
    var grpPos = format.lastIndexOf(',');
    var grpSize = 0;
    if (grpPos && grpPos > 0) {
        grpSize = format.length - (decSize + 1) - (grpPos + 1);
    }
    
    return [ format, decSize, grpSize ];
}