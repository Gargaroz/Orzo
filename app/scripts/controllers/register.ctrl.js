'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('RegisterCtrl', ['unLoggedUser', 'LoggedUserFactory', '$location', function (unLoggedUser, LoggedUserFactory, $location){
  var vm=this;
		var utenteTemp=unLoggedUser;
		vm.utenteLocale={
			'Nome Utente': utenteTemp.name,
			'Password': utenteTemp.password,

		};

  }]);
