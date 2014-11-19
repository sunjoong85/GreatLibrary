/**
 * Created by SDS on 2014-11-03.
 */
angular.module('component.layout.header',[])
.controller('HeaderController', ['$scope', '$location', function($scope, $location) {
      /*  $scope.templates = {};
        $scope.templates.header = {url: 'app/shared/layout/header.tpl.html'};*/

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
}]);
