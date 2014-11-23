'use strict';

angular.module('component.login.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'component/login/login.tpl.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', ["$scope", function($scope) {
        console.log("login controller");

        $scope.login = function(user) {
            alert(user.email + " logined");
        }
}])

.factory('LoginService', function() {
        console.log("service");
})