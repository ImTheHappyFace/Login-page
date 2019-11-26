
var app = angular.module('myApp');
app.factory('LoginService', function() {
var admin = 'Prateek';
var pass = 'password';
var isAuthenticated = true;
return {
login : function(username, password) {
isAuthenticated = username === admin && password === pass;
return isAuthenticated;
},
isAuthenticated : function() {
return isAuthenticated;
}
};
});