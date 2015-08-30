/**
 * Created by clownvary on 2015/8/28.
 * Email:vary_007@163.com
 */
describe('TestSer', function () {
    beforeEach(module('direc'));
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
    /**
     * match，not macther
     */
    it("contains spec with an expectation2", function() {

        var message = "foo bar baz";

        expect(message).toMatch(/[^\W+]/);
        expect(message).not.toMatch(/quux/);
    });
    it("should return name",inject(function(_person_){
        var x=_person_.getName('wy');//测试服务
        expect(x).toEqual('你的名字是wy');


    }));
    it('should replace VERSION', inject(function(interpolateFilter) {
        //测试过滤器，注意过滤器和服务工程不太一样，必须在注入的名称后面加Filter,不然出错找不到，service可以不加
        expect(interpolateFilter('before after')).toEqual('before after格式化');
    }));
    it("The 'toBeDefined' matcher compares against `undefined`", function() {
        var a = {
            foo: "foo"
        };

        expect(a.foo).toBeDefined();
        expect(a.bar).toBeUndefined();
    });
    it("The 'toBeTruthy' matcher is for boolean casting testing", function() {
        var a, foo = "foo";
        var x=7;

        expect(x).toBeTruthy();
        expect(a).not.toBeTruthy();
    });
    fit("应该返回一个异常", function () {
        var foo = function() {
            throw new TypeError("foo bar baz");
        };
        var go= function () {
            return a+1;
        }
        function get()
        {
            return 2+3;
        }

        expect(foo).toThrowError("foo bar baz");
        expect(go).toThrow();
        expect(get()).toEqual(5);
    });
})
