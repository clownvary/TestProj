/**
 * Created by clownvary on 2015/8/30.
 * Email vary_007@163.com
 *
 */

angular.module('jqueryM',[])
    .directive('mtree', function () {
        return {
            retstrict:'E',
            replace:false,
            templateUrl:'../learnTest/accordin.tpl.html',
            link:function(scope,ele,attrs)
            {
                $(".topnav").accordion({
                    accordion:true,
                    speed: 500,
                    closedSign: '[+]',
                    openedSign: '[-]'
                });
            }

        }
    });
