module.exports = {
    openAccrodion: function(browser, section) {
        browser.waitForElementVisible("#accordion", 1000)
            .click("#" + section);
        return browser;
    }
}
