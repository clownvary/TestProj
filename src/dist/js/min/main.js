angular.module("angular",["direc"]).controller("testSelect",["$scope","person",function(e,n){var r=n;e.testN="速度速度撒旦是",e.sex="男",e.selected=23,e.show=function(e){e.name="是我"},e.option=[{name:"张三",sex:"男",age:12},{name:r.getName("张三"),sex:"男",age:23},{name:"张五",sex:"女",age:15},{name:"张六",sex:"女",age:19}]}]),angular.module("direc",[]).controller("MainController",["$scope",function(e){e.myProperty="innner ok"}]).directive("myDirective",function(){return{restrict:"A",scope:{myProperty:"="},priority:100,template:'<div>内部:{{ myProperty }}<input ng-model="myProperty"/></div>'}}).service("person",function(){this.getName=function(e){return"你的名字是"+e}});