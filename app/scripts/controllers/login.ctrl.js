'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('LoginCtrl', function ($scope) {

  		$scope.stato="LOGIN";
      $scope.colore="#428bca"

  		$scope.cambiaStato=function(){
  			if($scope.stato==="LOGIN"){
  				$scope.stato="REGISTRA";
          $scope.colore="#f0ad4e"

  			}else {
  				$scope.stato="LOGIN";
          $scope.colore="#428bca"
  			}
  		}

  });
