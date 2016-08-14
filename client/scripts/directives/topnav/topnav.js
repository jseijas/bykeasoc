'use strict';

angular.module('bykeasoc')
	.directive('topnav', function () {
		return {
			templateUrl: 'scripts/directives/topnav/topnav.html',
			restrict: 'E',
			replace: true,
			controller: function ($scope, $rootScope, AuthSrv, Configuration) {

				$scope.showMenu = function () {
					$('#app-container').toggleClass('push-right');
				}
				
				$scope.appName = Configuration.appName;
				$scope.userName = AuthSrv.userData.name;
				$scope.isAdmin = AuthSrv.userData.isAdmin;

				$scope.logout = function () {
					AuthSrv.logout();
				}
			}
		}
	});


