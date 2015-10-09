var app = angular.module('myapp', []).factory("testService", function() {
	//var test="xxxxxxxxxxx";
	var o = {};
	o.test = "sdsdsds";
	return o;
});
app.factory("myfilter", function() {
	var o = {};
	o.filter2 = function(s) {
		alert(s);
	}
	return o;
});
app.filter("filter2", function() {
	
return function(input,par,par2){
	return input+par+par2;
}
});
app.run(function($rootScope, $http, testService) {
	$rootScope.xname = "硕大的说的";

	$rootScope.go = function() {
		$http({
			method: 'jsonp',
			url: "http://yunapi.159.com/index.php/api?platform=1&typeid=9&page=1&pcount=60" + '&callback=JSON_CALLBACK'
		}).success(function(data, status) {
			alert(JSON.toString());
		}).error(function(data, status) {
			// Some error occurred 
			alert(data);
		});
	}

});

app.controller('mycontroller', ['$scope', 'testService',
	function($scope, testService) {
		$scope.person = {
			name: "cxvf"
		}
		$scope.testSer = function() {
			var s = testService;
			alert(testService.test);
		}

	}
]);
app.controller('childcon', function($scope) {
	$scope.sex = {
		name: "我来自子控制器"
	}
});
app.controller('playcon', ['$scope', 'myfilter',
	function($scope, myfilter) {
		$scope.playing = false;
		$scope.audio = document.createElement('audio');
		$scope.audio.src = 'http://me.cztv.com/video-1469431.html';
		$scope.roommates = [{
			name: 'Ari'
		}, {
			name: 'Q'
		}, {
			name: 'Sean'
		}, {
			name: 'Anand'
		}];
		var o = {};
		o.play = function(s) {
			$scope.playing = true;
		}
		o.stop = function(s) {
			$scope.playing = false;

		}
		$scope.k = o;
		//过滤测试
		$scope.testFilter = function(s) {

             
			return s[0] == s[0].toUpperCase();
		}


	}
]);