'use strict';

/**
 * @ngdoc overview
 * @name minsafeApp
 * @description
 * # minsafeApp
 *
 * Main module of the application.
 */
var angular_mongo_app = angular
  .module('angularMongoApp', [
    'ngRoute'
  ]);

angular_mongo_app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/pessoas', {
                templateUrl: 'views/pessoa/index.html',
                controller: 'PessoaCtrl'
            }).
            when('/pessoas/:id', {
                templateUrl: 'views/pessoa/index.html',
                controller: 'PessoaCtrl'
            }).
            otherwise({
                redirectTo: '/pessoas'
            });
    }]);
