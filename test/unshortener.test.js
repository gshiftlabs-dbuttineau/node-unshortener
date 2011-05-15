var unshortener = require('../lib/unshortener')
  , assert = require('assert');

var urllib = require('url');


module.exports = {
    'expand_string': function () {
        var fired = false;
        unshortener.expand('http://bit.ly/mShvIR', function (url) {
            assert.strictEqual(url.href, 'http://www.premiumpixels.com/freebies/add-to-cart-buttons-psd/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+premiumpixels+%28Premium+Pixels%29');
            fired = true;
        });

        assert.ok(fired);
    },

    'expand_object': function () {
        var fired = false;
        unshortener.expand(urllib.parse('http://t.co/rWP6BP3'),
                           function (url) {
                               assert.strictEqual(url.href, 'https://www.facebook.com/mybrucebruce');
                               fired = true;
                           });

        assert.ok(fired);
    }
};
