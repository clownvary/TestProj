angular.module("angular", [])
	.controller('testSelect', function($scope) {

		$scope.testN = "速度速度撒旦是";
		$scope.sex = "男";
		$scope.selected=23;
		$scope.show = function(u) {

			u.name = "是我";
		}
		$scope.option = [{
			name: "张三",
			sex: "男",
			age: 12
		}, {
			name: "张四",
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
	});