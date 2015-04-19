module.exports = {
    beforeEach: function(browser, done) {
        browser.url("http://chrislaughlin.github.io/nightwatch-test/site/")
            .waitForElementVisible('body', 1000)
            .assert.title('TESTS');
        done();
    },

    "Count Items in list": function(browser) {
        browser.assert.countItems(".list-item", 5).end();
    }
};


