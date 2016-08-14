'use strict';

angular.module('bykeasoc')
	.directive('pageheader',function(){
		return {
        templateUrl:'scripts/directives/pageheader/pageheader.html',
        restrict: 'E',
        replace: true,
        scope: {
	        'pagename': '@',
	        'subtitle': '@'
  		}
    	}
	});


