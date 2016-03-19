'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
