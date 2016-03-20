'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('MainCtrl', ['loggedUserName' ,'$location', 'LoggedUserFactory', function (loggedUserName, $location, LoggedUserFactory) {
      var vm=this;
      vm.utenteLoggato=loggedUserName;
      

      	vm.goToPannel=function(user){
            $location.path('/controlpanel');
          };

        vm.esciUtente=function(){
        	vm.utenteLoggato=LoggedUserFactory.logout();
        	 $location.path('/login');
        }


    }]);
