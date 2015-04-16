// requires
var assert = require('assert');

var nf = require('../jsnumberformatter.js').nf;
var nfl = require('../jsnumberformatter.locale.js').nfl;
// decimal locale data
var nfldd = require('../locale-data/jsnumberformatter.locale.decimal.superset.js').nfldd;

// tests
describe('parseNumberSimple.locale', function() {
    // countries
    describe('Positive Country Parse Tests', function() {
        describe('Test1-Parse', function() {
            it('Parse to 1', function() {
                var options = new nf.locales.parseOptions('gb');
                var number = nf.parseNumberSimple('1.00', options, true);
                assert.equal(number, 1);
            });
        });
        
        describe('Test2-Parse', function() {
            it('Parse to 1', function() {
                var options = new nf.locales.parseOptions('es');
                var number = nf.parseNumberSimple('1,00', options, true);
                assert.equal(number, 1);
            });
        });
        
        describe('Test3-Parse', function() {
            it('Parse to 1', function() {
                var options = new nf.locales.parseOptions('nl')
                                .specifyRemoveBadCh(true)
                                .specifyNegativeMatch('^.*-(.+)');
                var number = nf.parseNumberSimple('1,00', options, true);
                assert.equal(number, 1);
            });
        });
        
    });
    
    // locales
    describe('Positive Locale Parse Tests', function() {
        describe('Test1-Parse', function() {
            it('Parse to 1', function() {
                var options = new nf.locales.parseOptions('en_US');
                var number = nf.parseNumberSimple('1.00', options, true);
                assert.equal(number, 1);
            });
        });
    });
});

describe('formatNumberSimple.locale', function() {
    // countries
    describe('Positive Country Format Tests', function() {
        describe('Test1-Format', function() {
            it('Format to 1', function() {
                var options = new nf.locales.formatOptions('gb');
                var number = nf.formatNumber(1, options, true);
                assert.equal(number, '1');
            });
        });
        
        describe('Test2-Format', function() {
            it('Format to 1,00', function() {
                var options = new nf.locales.formatOptions('es')
                                .specifyDecimalMask('00');
                var number = nf.formatNumber(1, options, true);
                assert.equal(number, '1,00');
            });
        });
    });
    
    // locales
    describe('Positive Locale Format Tests', function() {
        describe('Test1-Format', function() {
            it('Format to 1', function() {
                var options = new nf.locales.formatOptions('en_US');
                var number = nf.formatNumber(1, options, true);
                assert.equal(number, '1');
            });
        });
    });
});