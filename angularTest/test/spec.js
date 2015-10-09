describe('protractor demo', function() {

	//	it('should have a title ', function() {
	//		browser.get("http://127.0.0.1:8020/angularTest/form.html");
	//		expect(browser.getTitle()).toEqual('CSSClasses');
	//	});
//	 var firstNumber = element(by.model('first'));
//var secondNumber = element(by.model('second'));
//var goButton = element(by.id('gobutton'));
//var latestResult = element(by.binding('latest'));
//var history = element.all(by.repeater('result in memory'));
//
//function add(a, b) {
//  firstNumber.sendKeys(a);
//  secondNumber.sendKeys(b);
//  goButton.click();
//}
//
//beforeEach(function() {
//  browser.get('http://juliemr.github.io/protractor-demo/');
//});
//
//it('should have a history', function() {
//  add(1, 2);
//  add(3, 4);
//
//  expect(history.count()).toEqual(2);
//
//  add(5, 6);
//
//  expect(history.count()).toEqual(3); // This is wrong!
//});
browser.ignoreSynchronization = true;
it("should be bardu",function(){
	browser.get("http://www.baidu.com");

 //var t= element(by.model("list"));
 expect(browser.getTitle()).toContain("百度");
 
 expect(element(by.id('gobutton')).isPresent()).toBe(false);//.isPresent()是在括号里面放到外面的话结果值 不对，最后的断言都是针对整体的
});

});