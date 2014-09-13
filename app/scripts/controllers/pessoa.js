'use strict';

/**
 * @ngdoc function
 * @name minsafeApp.controller:PessoaCtrl
 * @description
 * # PessoaCtrl
 * Controller of the angularMongoApp
 */
angular.module('angularMongoApp')
    .controller('PessoaCtrl', function ($scope, $http, $routeParams, $location) {
        $scope.title = "Cadastrando nova Pessoa";
        $scope.pessoa = {};

        var _id = $routeParams.id;
        $scope.btnLabel = "Cadastrar";

        if (_id) {
            $http({ method: 'GET', url: '/pessoa/' + $routeParams.id })
                .success(function (response, status, headers) {
                    $scope.pessoa = response;
                    $scope.btnLabel = "Editar";
                    $scope.title = "Editando: " + $scope.pessoa.nome;
                });
        }
        $scope.save = function () {
            var json = angular.toJson($scope.pessoa);
            $http({ method: 'POST', url: '/pessoa', data: json })
                .success(function (response, status, headers) {
                    console.log(response);
                    $scope.pessoa = response;
                    $location.path('/pessoas/'+ $scope.pessoa._id);
                });
        }

        $scope.remove = function () {
            $http({ method: 'delete', url: '/pessoa/' + $scope.pessoa._id })
                .success(function (response, status, headers) {
                    console.log(response);
                    $scope.pessoa = response;
                    $location.path('/pessoas');
                });
        }

    });
