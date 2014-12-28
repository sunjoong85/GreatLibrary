angular.module('component.practice.practice', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/practice', {
            templateUrl: 'component/practice/practice.tpl.html',
            controller: 'PracticeController'
        });
    }])

    .controller('PracticeController', ["$scope", function($scope) {
        console.log("loginController");

    }]);
