module.exports = {
    "Login To Twitter" : function (browser) {
        browser
            .url("http://www.twitter.com")
            .waitForElementVisible('body', 1000)
            .setValue('#signin-email', 'nightwatchrun')
            .setValue('#signin-password', ['NightTwitter', browser.Keys.ENTER])
            .waitForElementVisible('.dashboard', 1000)
            .assert.containsText('.DashboardProfileCard-name', 'Night Watch Test')
            .end();
    }
};