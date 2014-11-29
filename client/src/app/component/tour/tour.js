angular.module('component.tour.tour', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tour', {
    templateUrl: 'component/tour/tour.tpl.html',
    controller: 'TourController'
  });
}])

.controller('TourController', [function() {
    console.log("Tour loaded");
}]);