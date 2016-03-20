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

  		$scope.cambiaStato=function(){
  			if($scope.stato==="LOGIN"){
  				$scope.stato="REGISTRA";
  			}else {
  				$scope.stato="LOGIN";
  			}
  		}

  });
