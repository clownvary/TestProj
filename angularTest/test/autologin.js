describe("login", function() {
	browser.ignoreSynchronization = true;
	it("should be ok", function() {

		browser.get("http://zbz.159.com/index.aspx");
		element(by.id('username')).sendKeys("clownvary");
		element(by.id('password')).sendKeys("wy900921");
		element(by.name('submit')).click();
	   //  chrome.Alert.accept();
       //expect(element(by.id('gobutton')).isPresent()).toBe(false);
	
	});

});