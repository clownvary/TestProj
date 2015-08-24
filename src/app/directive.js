/**
 * Created by Administrator on 2015/8/24.
 */
angular.module("direc",[])
    .controller('MainController', function ($scope) {
        $scope.myProperty="innner ok";
    })
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
            scope:{
                myProperty:'='
            },//切换为{}，true,false测试
            priority: 100,
            template: '<div>内部:{{ myProperty }}<input ng-model="myProperty"/></div>'
        };
    });