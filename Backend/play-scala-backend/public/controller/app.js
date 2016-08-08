var app = angular.module("app", ["ngResource", "ngRoute"])
    .constant("apiUrl", "/api")
    .config(["$routeProvider", function($routeProvider) {
        return $routeProvider.when("/", {
            templateUrl: "/views/main",
            controller: "NamesCtrl  "
        }).when("/create", {
            templateUrl: "/views/detail",
            controller: "CreateCtrl"
        }).when("/edit/:id", {
            templateUrl: "/views/detail",
            controller: "EditCtrl"
        }).otherwise({
            redirectTo: "/"
        });
    }
    ]).config([
        "$locationProvider", function($locationProvider) {
            return $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            }).hashPrefix("!"); // enable the new HTML5 routing and history API
            // return $locationProvider.html5Mode(true).hashPrefix("!"); // enable the new HTML5 routing and history API
        }
    ]);



app.controller('NamesCtrl', function($scope) {
    $http.get('/employees').success(function(data){
        $scope.names = data;
    });
});