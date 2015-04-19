module.exports = {
    beforeEach: function(browser, done) {
        browser.url("http://guarded-inlet-6923.herokuapp.com/#/main")
            .waitForElementVisible('body', 1000)
            .assert.title('Twitter Mood - Whats the mood of your twitter account');
        done();
    },

    "Get Twitter Results": function(browser) {
        browser.setValue("#name", "chrislaughlin")
            .click("#submit")
            .pause(1000)
            .waitForElementVisible(".results-section", 5000)
            .end();
    }
};
