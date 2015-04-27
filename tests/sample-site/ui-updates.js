var utils = require("../../utils");
module.exports = {
    beforeEach: function(browser, done) {
        browser.url("http://chrislaughlin.github.io/nightwatch-test/site/")
            .waitForElementVisible('body', 1000)
            .assert.title('TESTS');
        done();
    },

    "First accordion section open": function(browser) {
        browser
            .assert
            .cssClassPresent("#accordion #ui-id-2", "ui-accordion-content-active")
            .end();
    },

    "Open Accordion Sections": function(browser) {
        //Open First
        utils.openAccrodion(browser, "ui-id-3")
            .assert
            .cssClassPresent("#accordion #ui-id-4", "ui-accordion-content-active")
            .waitForElementVisible("#ui-id-4", 1000);
        //Open Second
        utils.openAccrodion(browser, "ui-id-5")
            .assert
            .cssClassPresent("#accordion #ui-id-6", "ui-accordion-content-active")
            .waitForElementVisible("#ui-id-6", 1000);
        //Open Third
        utils.openAccrodion(browser, "ui-id-7")
            .assert
            .cssClassPresent("#accordion #ui-id-8", "ui-accordion-content-active")
            .waitForElementVisible("#ui-id-8", 1000)
            .end();
    }


};

