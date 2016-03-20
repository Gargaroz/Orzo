'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('MainCtrl', ['loggedUserName' ,'$location',function (loggedUserName, $location) {
      var vm=this;
      vm.utenteLoggato=loggedUserName;

      	vm.goToPannel=function(user){
            $location.path('/controlpanel');
          };


    }]);
