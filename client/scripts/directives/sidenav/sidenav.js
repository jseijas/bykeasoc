'use strict';

angular.module('bykeasoc')
	.directive('sidenav', function () {
		return {
			templateUrl: 'scripts/directives/sidenav/sidenav.html',
			restrict: 'E',
			replace: true,
			controller: function ($scope, $timeout, $rootScope) {
				$scope.tabActive = [];

				$scope.menuToggle = function () {
					$('body').toggleClass('menu-hidden');
					$scope.tabActive = [1];
					if ($('body').hasClass('menu-hidden') == 1) {
	        			$rootScope.$broadcast('resize');
	        			$(document).click(function (e) {
									if (!$(".sidenav-sub-menu").is(e.target)) {
										$(".sidenav-sub-menu").hide();
									}
								});
					}	else {
						$timeout(function () {
							$rootScope.$broadcast('resize');
	        	}, 100);
	        	$(document).click(function (e) {
							if (!$(".sidenav-sub-menu").is(e.target)) {
								$(".sidenav-sub-menu").show();
							}
						});
					}
				}
			},
			link: function (scope, el, attrs) {
			}
		}
	});


