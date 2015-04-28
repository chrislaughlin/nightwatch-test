module.exports = {
    beforeEach: function(browser, done) {
        browser.url("http://chrislaughlin.github.io/nightwatch-test/site/")
            .waitForElementVisible('body', 1000)
            .assert.title('TESTS');
        done();
    },

    "box color changes": function(browser) {
        browser
            .assert
            .cssProperty(".box", "background-color", "rgba(0, 0, 0, 1)")
            .click(".red")
            .assert
            .cssProperty(".box", "background-color", "rgba(255, 0, 0, 1)")
            .click(".green")
            .assert
            .cssProperty(".box", "background-color", "rgba(0, 128, 0, 1)")
            .click(".blue")
            .assert
            .cssProperty(".box", "background-color", "rgba(0, 0, 255, 1)")
    }
};

