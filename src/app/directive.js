/**
 * Created by Administrator on 2015/8/24.
 */
angular.module("direc", [])
    .controller('MainController', ['$scope', function ($scope) {
        $scope.myProperty = "innner ok";
    }])
    .controller('Controller', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.name = 'Tobias';
        $scope.hideDialog = function () {
            $scope.dialogIsHidden = true;
            $timeout(function () {
                $scope.dialogIsHidden = false;
            }, 2000);
        };
    }])
    .directive('myDialog', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                'close2': '&onClose'//通过这种写法就间接的和controller里的已定义的回调挂上勾，如果直接把事件写在模板里，是访问不到controller里的方法的
            },
            //scope:false,.//当然如果这样就可以访问得到
            templateUrl: 'my-dialog-close.tpl.html'
        };
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
    .service('person', function () {
        this.getName = function (name) {
            return "你的名字是" + name;
        }
    })
    .directive('myDirective', function () {
        return {
            restrict: 'A',
            scope: {
                myProperty: '='
            },//切换为{}，true,false测试
            priority: 100,
            template: '<div>内部:{{ myProperty }}<input ng-model="myProperty"/></div>'
        };
    });
