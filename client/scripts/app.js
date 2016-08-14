'use strict'

angular
.module('bykeasoc', ['ui.router', 'ui.bootstrap', 'lbServices'])
.constant('Configuration', {
	appName: 'Byke Asoc'
})
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/home', '/main/home');
    $urlRouterProvider.otherwise('/main');
    $stateProvider
    .state('plain', {
        abstract: true,
        url: '',
        templateUrl: 'views/layouts/plain.html'
    })
    .state('boxed', {
        abstract: true,
        url: '',
        parent: 'plain',
        templateUrl: 'views/layouts/boxed.html'
    })
    .state('main', {
        url: '/main',
        parent: 'plain',
        templateUrl: 'views/layouts/main.html',
        controller: 'MainCtrl'
    })
    .state('clubs', {
        url: '/club',
        parent: 'main',
        templateUrl: 'views/pages/clubs.html',
        controller: 'ClubCtrl'
    })
});