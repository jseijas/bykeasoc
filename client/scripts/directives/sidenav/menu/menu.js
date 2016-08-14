'use strict';

angular.module('bykeasoc')
	.directive('menu',function(){
		return {
	        templateUrl:'scripts/directives/sidenav/menu/menu.html',
	        restrict: 'E',
	        replace: true,
        	controller: function($scope){
	        	$scope.selectedMenu = 'dashboard';
						$scope.showingSubNav = 0;
						$scope.showSubNav = function(x){
							if(x==$scope.showingSubNav)
								$scope.showingSubNav = 0;
							else
								$scope.showingSubNav = x;
						};				
	        },
    	}
	});