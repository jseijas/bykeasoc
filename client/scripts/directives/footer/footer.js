'use strict';

angular.module('bykeasoc')
	.directive('footer',function(){
		return {
        templateUrl:'scripts/directives/footer/footer.html',
        restrict: 'E',
        replace: true,
    	}
	});


