'use strict';

/**
 * @ngdoc function
 * @name minsafeApp.controller:PessoaCtrl
 * @description
 * # PessoaCtrl
 * Controller of the minsafeApp
 */
angular.module('angularMongoApp')
    .controller('PessoaCtrl', function ($scope, $http) {
        $scope.title = "Pessoas OPAAA";
        $scope.pessoa = {};

        $scope.save = function () {
            var json = angular.toJson($scope.pessoa);
            $http({ method: 'POST', url: '/pessoa', data: json })
                .success(function (response, status, headers) {

                });
        }

    });
