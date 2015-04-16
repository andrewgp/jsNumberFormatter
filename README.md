jsNumberFormatter
=================

JavaScript Number formatting &amp; parsing library - Pure stand-alone javascript

+ Status: Alpha
+ Version 0.4

This is intended to be the basis of my rewrite of the jQuery plugin jQuery-NumberFormatter (https://code.google.com/p/jquery-numberformatter/), providing base methods that do not require jQuery at all or any other dependency.

Supports many parsing and formatting options, including a module for locale support and data files for the locales.

Looking fairly good now, still a bit of work to come.

Twitter have a nice JS library with CLDR support here - https://github.com/twitter/twitter-cldr-js it's more aimed at Rails but I understand it works standalone.
I suppose a good reason not to use that project is the lack of options, flexibility/customisation and parsing support (as I see it).
Obviously the goal is to match and surpass the number support found in that library (including currencies, percentages, rounding etc.). This will also be more modular as not everyone needs all of those areas of functionality.


=================

Dependancies:
+ RequireJS (only for the Unit Tests), should run fine without it

Features: (see the jQuery plugin for a rough idea, I will be adding many more also.)

+ Parsing for format X to a JS number
  + Percentage Parsing
  + User defined negative number formats (-1, 1- or (1) etc)
  + Trimming of white pace around the value
  + Removal of any non-numeric chars
  + Rounding options
+ Formatting a JS number to format X
  + Prefix and Postfix support
  + Rounding options
  - (TODO Percentage formatting)
  - (TODO Modularlisation)
+ Locale Support for both parsing and formatting
+ Modular parsing
  + Allows you to add functions to run during the parsing
+ Togglable logging to console

Major Items TODO:

- Need to read CLDR data in some form, suggest a pre-building script to pull the JSON data into a JS ref file for specific languages needed
- Seperate locale data for currencies

## Usage:

### A couple of simple parsing examples -

a) default options (i.e. no locale)
```
var options = new JsNumberFormatter.parseNumberSimpleOptions(); 
var number = JsNumberFormatter.parseNumberSimple('-1,000,123.45', options, true);
console.log(number); // == -1000123.45
```

b) espanol locale parsing
```javascript
   var options = new JsNumberFormatter.locales.parseOptions('es', nf);
   var number = JsNumberFormatter.parseNumberSimple('1,00', options, true);
   console.log(number); // == -1
```

c) no locale but with custom negative number mask (regex)
```javascript
   var options = new JsNumberFormatter.parseNumberSimpleOptions().specifyAll('.', ',', false, false, false, '^\\(([^\\)]+)\\)$');
   var number = JsNumberFormatter.parseNumberSimple('(1,000,123.45)', options, true);
   console.log(number); // == -1000123.45
```

d) NL locale, parsing dollars (stripping non-numerics)
```javascript
   var options = new JsNumberFormatter.locales.parseOptions('nl_NL')
                                .specifyRemoveBadCh(true)
                                .specifyNegativeMatch('^.*-(.+)');
   var number = JsNumberFormatter.parseNumberSimple('$-1.000.123,45', options, true);
   console.log(number); // == -1000123.45
```

e) no locale, percentage parsing
```javascript
   var options = new JsNumberFormatter.parseNumberSimpleOptions()
                    .specifyAll('.', ',', false, false, true)
                    .specifyPerc(true);
   var number = JsNumberFormatter.parseNumberSimple('123.45%', options, true);
   console.log(number); // == 1.2345
```

### A couple of formatting examples -

a)  no locale
```javascript
   var options = new JsNumberFormatter.formatNumberOptions();
   var numberStr = JsNumberFormatter.formatNumber(1234.56, options, true);
   console.log(numberStr); // == 1,234.56
```

b) espanol locale formatting
```javascript
   var options = new JsNumberFormatter.locales.formatOptions('es')
                    .specifyDecimalMask('00');
   var number = JsNumberFormatter.formatNumber(1, options, true);
```

=================

## Files

jsnumberformatter.js - The main parsing and formatting
jsnumberformatter.locale.js - The locale support module

locale-data/jsnumberformatter.locale.*.js - Support data files for locale (needs 1 loaded and 1 only for locale support)

locale-builder/*.js - Files for building the locale data support files (mainly from CLDR repo.)

test/*.js - Mocha unit tests

=================

Dev Env:
Cloud9 - http://c9.io/ap0/jsnumberformatter

Cloud9 Setup:
npm install -g mocha
(for the unit tests)