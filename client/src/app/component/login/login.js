angular.module('component.login.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'component/login/login.tpl.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', ["$scope", 'LoginService', function($scope, loginService) {
        console.log("loginController");

        $scope.login = function(user) {
            alert(user.email + " logined");
            loginService.login(user.email, user.password);
        }
}])

.factory('LoginService', ['$http', function($http) {
        console.log("loginService");

        var login = function(id , password) {

            $http.post(window.context + '/login', {id : id, password : password}).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("success");
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("fail");
                });
        }

        return {
            login : login
        }
}]);