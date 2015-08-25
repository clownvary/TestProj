angular.module("angular", ['direc'])
    .controller('testSelect', ['$scope', 'person', function ($scope, _person_) {
        var per = _person_;
        $scope.testN = "速度速度撒旦是";
        $scope.sex = "男";
        $scope.selected = 23;
        $scope.show = function (u) {

            u.name = "是我";
        }
        $scope.option = [{
            name: "张三",
            sex: "男",
            age: 12
        }, {
            name: per.getName("张三"),
            sex: "男",
            age: 23
        }, {
            name: "张五",
            sex: "女",
            age: 15
        }, {
            name: "张六",
            sex: "女",
            age: 19
        }];
    }]);
/**
 * Created by Administrator on 2015/8/24.
 */
angular.module("direc", [])
    .controller('MainController', ['$scope', function ($scope) {
        $scope.myProperty = "innner ok";
    }])
//.directive('myDirective',function(){
//        return{
//            restrict:'EAC',
//            scope:{
//              text:'@'
//            },
//            //transclude:true,
//            replace:true,
//            //template: function (elem, attr) {
//            //    return "<a href='" + attr.value + "'>" + attr.text + "</a>";
//            //}//去掉注释可见效果
//            template:'<a href="http://www.baidu.com">{{text}}</a>'
//        }
//    })
    .directive('myDirective', function () {
        return {
            restrict: 'A',
            scope: {
                myProperty: '='
            },//切换为{}，true,false测试
            priority: 100,
            template: '<div>内部:{{ myProperty }}<input ng-model="myProperty"/></div>'
        };
    })
    .service('person', function () {
        this.getName = function (name) {
            return "你的名字是" + name;
        }
    });