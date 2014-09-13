'use strict';

/**
 * @ngdoc function
 * @name minsafeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minsafeApp
 */
angular.module('angularMongoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
