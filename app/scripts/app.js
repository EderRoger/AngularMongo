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
            when('/people', {
                templateUrl: 'views/people/index.html',
                controller: 'PeopleListCtrl'
            }).
            when('/people/new', {
                templateUrl: 'views/people/form.html',
                controller: 'PeopleCtrl'
            }).
            when('/people/:id', {
                templateUrl: 'views/people/form.html',
                controller: 'PeopleCtrl'
            }).
            otherwise({
                redirectTo: '/people'
            });
    }]);
