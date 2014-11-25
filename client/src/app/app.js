/*angular.module('myapp', ['ngRoute'])
 .config(['$routeProvider',
 function ($routeProvider) {
 *//*            $routeProvider.
 when('/phones', {
 templateUrl: 'partials/phone-list.html',
 controller: 'PhoneListCtrl'
 }).
 when('/phones/:phoneId', {
 templateUrl: 'partials/phone-detail.html',
 controller: 'PhoneDetailCtrl'
 }).
 otherwise({
 redirectTo: '/phones'
 });*//*
 }]);*/
/*
 .controller('myappController', function ($scope) {
 console.log("myappController");
 console.log("scope", $scope);
 });

 */

angular.module('app',
     [
         'ngRoute',
         'app.templates',
         'ui.bootstrap',
         'component.module'
     ])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        console.log("app start");

        $locationProvider.html5Mode({
                enabled: true,
                requireBase: false});

        $routeProvider.otherwise({redirectTo: ''});

        window.context = 'http://localhost:3000';
    }]);

