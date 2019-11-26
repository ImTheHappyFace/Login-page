
    var app = angular.module('myApp', ['ui.router']);
    app.run(function($rootScope, $location, $state, LoginService) {
    console.clear();
    console.log('Working GGGGG');
    if(!LoginService.isAuthenticated()) {
    $state.go('login');
    }
    });
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
    url : '/LOGIN',
    templateUrl : 'login.html',
    controller : 'LoginController'
    })
    .state('home', {
    url : '/HOME',
    templateUrl : 'home.html',
    controller : 'HomeController'
    });
    $urlRouterProvider.otherwise('/login');
    }]);