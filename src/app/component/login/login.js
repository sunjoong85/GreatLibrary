'use strict';

angular.module('component.login.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'component/login/login.tpl.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', [function() {
    console.log("login controller");
}]);