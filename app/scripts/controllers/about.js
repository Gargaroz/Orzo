'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
