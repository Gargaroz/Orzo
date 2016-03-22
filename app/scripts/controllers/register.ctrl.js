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
  		var user=LoggedUserFactory.getLoggedUserName();
  		var pass=LoggedUserFactory.getLoggedUserPassword();

		vm.utenteLocale={
			'Nome Utente': user,
			'Password': pass,
			'Nome': " " ,
			'Cognome': " ",
			'Email': " "
		};

  }]);
