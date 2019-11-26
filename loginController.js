
var app = angular.module('myApp');
app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
$rootScope.title = "Slack Login Page";
$scope.formSubmit = function() {
if(LoginService.login($scope.username, $scope.password)) {
$rootScope.userName = $scope.username;
$scope.error = '';
$scope.username = '';
$scope.password = '';
$state.go('home');
} else {
$scope.error = "Incorrect username/password !";
}   
};    
});