"use strict"

angular.module('app',
     [
         'ngRoute',
         'app.templates',
         'component.modules',
         'ui.bootstrap'
     ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        console.log("app start");

        $locationProvider.html5Mode({
                enabled: true,
                requireBase: false});

        $routeProvider.otherwise({redirectTo: ''});

        window.context = 'http://localhost:3000';
    }]);

