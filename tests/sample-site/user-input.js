module.exports = {
    beforeEach: function(browser, done) {
        browser.url("http://chrislaughlin.github.io/nightwatch-test/site/")
            .waitForElementVisible('body', 1000)
            .assert.title('TESTS');
        done();
    },

    "log user in": function(browser) {
        browser
            .setValue("#username", "chrislaughlin")
            .setValue("#password", "Password1")
            .click("#submit")
            .assert
            .containsText("#username-display", "chrislaughlin")
            .assert
            .containsText("#password-display", "Password")
    }
};

