'use strict';

angular.module('component.signup.signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'component/signup/signup.tpl.html',
    controller: 'SignUpController'
  });
}])

.controller('SignUpController', [function() {
    console.log("sign up controller")
}]);