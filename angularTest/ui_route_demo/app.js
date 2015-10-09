 'use strict';
 var mod=angular.module('testMod',[]);
//	cont.controller('errorController',function($scope){
//	$scope.title="error page from contrl";
//});
	mod.factory('goFac',function($scope){
		var o={};
		o.getTitle=function()
		{
			return "error page from factory";
		}
		return o;
});
var routerApp = angular.module('routerApp', ['ui.router','testMod']);

routerApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/error');//定义错误路由

  $stateProvider

    .state('home', {
    	abstract:true,
      url: '/home',
      templateUrl: 'home.html'
    })

    // nested list with custom controller
    .state('home.list', {
      url: '/list/{ttt:.}',
      templateUrl: 'homelist.html',
      controller: function($scope) {
        $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
      }
    })
     .state('home.list.go', {
      url: '/go/{ttt:4}',
      templateUrl: 'homelist_go.html',
      controller: function($scope) {
     // 	var x=errorFac.getTitle();
        $scope.topics = ['Butterscotch', 'Black Current'];
      }
    })

    // nested list with just some random string data
    .state('paragraph', {
      url: '/paragraph',
      template: '<p>I could sure use a scoop of ice-cream.</p> '
    })

    .state('abouts', {
      url: '/about',
      views: {
        '': { templateUrl: 'about.html' },
        'columnOne@abouts': { template: '<p>来自子模板</p> ' },
        'columnTwo@abouts': { 
          templateUrl: 'table-data.html',
          controller: 'Controller'
        }
      }

    })
    .state('error',{
    	url:'/error',
    	templateUrl:'error.html',
    	controller:'errorCon'
    	
    })

}]);

routerApp.controller('Controller', ['$scope','$urlRouter','goFac',function($scope,$urlRouter,goFac) {

  $scope.message = 'sssss';
//$bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
//person: "bob"
//});
   //var s=goFac.getTitle();
  $scope.topics = [
    {
      name: 'Butterscotch',
      price: 'ssdsd'
    },
    {
      name: 'Black Current',
      price: 100
    },
    {
      name: 'Mango',
      price: 20
    }
  ];

}]);
routerApp.controller("errorCon",function($scope){
	$scope.title="error page";
});
