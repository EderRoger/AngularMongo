'use strict';

/**
 * @ngdoc function
 * @description
 * # PeopleCtrl
 * # PeopleListCtrl
 * Controller of the angularMongoApp
 */
angular.module('angularMongoApp')
    .controller('PeopleCtrl', function ($scope, $http, $routeParams, $location) {
        $scope.title = "New people";
        $scope.people = {};

        var _id = $routeParams.id;
        $scope.btnLabel = "Save";

        if (_id) {
            $http({ method: 'GET', url: '/people/' + $routeParams.id })
                .success(function (response) {
                    $scope.people = response;
                    $scope.btnLabel = "Edit";
                    $scope.title = "Edit: " + $scope.people.name;
                });
        }
        $scope.save = function () {
            var json = angular.toJson($scope.people);
            if($scope.people._id){
                $http({ method: 'PUT', url: '/people/'+ $scope.people._id, data: json })
                    .success(function (response) {
                        $scope.people = response;
                        $location.path('/people/');
                    });
            }else{
                $http({ method: 'POST', url: '/people', data: json })
                    .success(function (response) {
                        $scope.people = response;
                        $location.path('/people/' + $scope.people._id);
                    });
            }

        }

        $scope.remove = function () {

            var confirm = window.confirm("Confirm?");
            if(confirm){
            $http({ method: 'delete', url: '/people/' + $scope.people._id })
                .success(function (response) {
                    $scope.people = response;
                    $location.path('/people');
                });
            }
        }

    }).controller('PeopleListCtrl', function ($scope, $http) {
        $scope.title = "People";

        $http({ method: 'GET', url: '/people' })
            .success(function (response) {
                $scope.people = response;
            });

    });
