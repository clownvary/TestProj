/**
 * Created by clownvary on 2015/8/28.
 * Email:vary_007@163.com
 */
describe('TestSer', function () {
    beforeEach(module('direc'));
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
    it("contains spec with an expectation2", function() {
        expect(true).toBe(true);
        expect('3').toEqual('3');
    });
    it("should return name",inject(function(_person_){
        var x=_person_.getName('wy');//测试服务
        expect(x).toEqual('你的名字是wy');


    }));
    it('should replace VERSION', inject(function(interpolateFilter) {
        //测试过滤器，注意过滤器和服务工程不太一样，必须在注入的名称后面加Filter,不然出错找不到，service可以不加
        expect(interpolateFilter('before after')).toEqual('before after格式化');
    }));
})
