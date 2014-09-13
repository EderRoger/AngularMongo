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
            if($scope.pessoa._id){
                $http({ method: 'PUT', url: '/pessoa/'+ $scope.pessoa._id, data: json })
                    .success(function (response, status, headers) {
                        console.log(response);
                        $scope.pessoa = response;
                        $location.path('/pessoas/');
                    });
            }else{
                $http({ method: 'POST', url: '/pessoa', data: json })
                    .success(function (response, status, headers) {
                        console.log(response);
                        $scope.pessoa = response;
                        $location.path('/pessoas/' + $scope.pessoa._id);
                    });
            }

        }

        $scope.remove = function () {

            var confirm = window.confirm("Confirma deletar?");
            if(confirm){
            $http({ method: 'delete', url: '/pessoa/' + $scope.pessoa._id })
                .success(function (response, status, headers) {
                    console.log(response);
                    $scope.pessoa = response;
                    $location.path('/pessoas');
                });
            }
        }

    }).controller('PessoaListCtrl', function ($scope, $http, $routeParams, $location) {
        $scope.title = "Pessoas";

        $http({ method: 'GET', url: '/pessoas' })
            .success(function (response, status, headers) {
                console.log(response);
                $scope.pessoas = response;
            });

    });
