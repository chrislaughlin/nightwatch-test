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
            .cssProperty(".box", "background-color", "red")
            .click(".green")
            .assert
            .cssProperty(".box", "background-color", "green")
            .click(".blue")
            .assert
            .cssProperty(".box", "background-color", "blue")
    }
};

