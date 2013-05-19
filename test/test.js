// requires
var assert = require('assert');
var nf = require('../jsnumberformatter.js').nf;

// tests
describe('parseNumberSimple', function() {
    describe('Positive Tests', function() {
        describe('Test1-Parse', function() {
            it('Parse to 1', function() {
                var options = new nf.parseNumberSimpleOptions();
                var number = nf.parseNumberSimple('1.00', options, true);
                assert.equal(number, 1);
            });
        });
        
        describe('Test2-Trim', function() {
            it('Parse to 1', function() {
                var options = new nf.parseNumberSimpleOptions().specifyAll('.', ',', false, true, false);
                var number = nf.parseNumberSimple(' 1.00 ', options, true);
                assert.equal(number, 1);
            });
        });
        
        describe('Test3-RemoveBadCh', function() {
            it('Parse to 1', function() {
                var options = new nf.parseNumberSimpleOptions().specifyAll('.', ',', false, false, true);
                var number = nf.parseNumberSimple('/1k.0l0!', options, true);
                assert.equal(number, 1);
            });
        });
    });
    
    describe('Negative Tests', function() {
        describe('Test1-Strict', function() {
            it('Parse to 1', function() {
                try {
                    var options = new nf.parseNumberSimpleOptions().specifyAll(' ', ',', true);
                    var number = nf.parseNumberSimple('1 0 0', options, true);
                    assert.fail('Error expected');
                } catch(err) {
                    assert.equal(err.name, 'Error');
                    assert.equal(err.message, 'Input has more than 1 decimal point: 2');
                }
            });
        });
    });
});
