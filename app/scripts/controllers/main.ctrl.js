'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('MainCtrl', ['loggedUser' ,function (loggedUser) {
      var vm=this;
      vm.utenteLoggato=loggedUser.name;
    }]);
