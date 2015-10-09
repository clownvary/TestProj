var next = angular.module('nextM', ['ui.router']);
next.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
				resolve: {
					name: function() {
						return {
							value: 'simple!'
						};
					}
				},
				onEnter: function(name) {
					if (name) {
						//alert('enter');
					}
				},
				// title 是解决依赖项，这里也是可以使用解决依赖项的
				onExit: function(name) {
					if (name) {
						//alert('out');
					}
				},
				url: '/nexthome/{id:[0-9]}',
				template: '<p>yes it is ture</p>',
				controller: function($rootScope,$scope, $stateParams,$state, name) {
                     
					$scope.title = "next title";
					$rootScope.$on('$stateChangeSuccess', 
                      function(event, toState, toParams, fromState, fromParams){
                      	console.log("home:状态改变成功");});

					$scope.$on('$viewContentLoading',//视图模板加载事件，是在scope上绑定的
					function(event, viewConfig) {
						console.log("home:模板开始解析");
						// Access to all the view config properties.
						// and one special property 'targetView'
						// viewConfig.targetView 
					});
					$state.go('error');
				},
				
			})
		.state('error',{
			url:'^/error',
			templateUrl:'error.html'
			
		})
			.state('xxx', {
				url: '/xxx',
				template: '<p>yes it is xxx</p>',
				controller: function($rootScope,$scope, $stateParams) {

					$scope.title = "next title";
					$rootScope.$on('$stateChangeSuccess', 
                      function(event, toState, toParams, fromState, fromParams){
                      	console.log("xxx:状态改变成功");});

					$scope.$on('$viewContentLoading',//视图模板加载事件，是在scope上绑定的
					function(event, viewConfig) {
						console.log("xxx:模板开始解析");
						// Access to all the view config properties.
						// and one special property 'targetView'
						// viewConfig.targetView 
					});
				}
			});
		$urlRouterProvider.when('/c', '/xxx');
		$urlRouterProvider.otherwise('/error'); //定义错误路由
		//	.state('goback',{
		//		url:'../'
		//	})

	}
]);