// requires
var assert = require('assert');

var nf = require('../jsnumberformatter.js').nf;
var nfl = require('../jsnumberformatter.locale.js').nfl;

// tests
describe('parseNumberSimple.locale', function() {
    describe('Positive Tests', function() {
        describe('Test1-Parse', function() {
            it('Parse to 1', function() {
                var options = new nf.locales.parseOptions('gb', nf);
                var number = nf.parseNumberSimple('1.00', options, true);
                assert.equal(number, 1);
            });
        });
    });
});
