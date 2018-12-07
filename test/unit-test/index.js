'use strict';

require('marko/node-require').install();
var expect = require('chai').expect;
var renderer = require('../../src/components/ebay-predict');

describe('ebay-predict ', function() {
    it('should render template with <noscript>', function(done) {
        var out = function(err, output) {
            if (err) {
                done(err);
            }
            var htmlStr = output.toString();
            expect(htmlStr).to.contain('<noscript ')
                .and.to.contain('</noscript>');

            done();
        };
        out.global = {};
        renderer({}, out);
    });

    it('should render attribute data-src', function(done) {
        var out = function(err, output) {
            if (err) {
                done(err);
            }
            var htmlStr = output.toString();
            expect(htmlStr).to.contain('<noscript ')
                .and.to.contain('data-src="https://www.ebay.com"');

            done();
        };
        out.global = {};
        renderer({ src: 'https://www.ebay.com' }, out);
    });

    it('should render attribute data-delay', function(done) {
        var out = function(err, output) {
            if (err) {
                done(err);
            }
            var htmlStr = output.toString();
            expect(htmlStr).to.contain('<noscript ')
                .and.to.contain('data-delay="500"');

            done();
        };
        out.global = {};
        renderer({ delay: '500' }, out);
    });

    it('should render attribute data-limit', function(done) {
        var out = function(err, output) {
            if (err) {
                done(err);
            }
            var htmlStr = output.toString();
            expect(htmlStr).to.contain('<noscript ')
                .and.to.contain('data-limit="2"');

            done();
        };
        out.global = {};
        renderer({ limit: '2' }, out);
    });
});
