'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:ControlPanelCtrl
 * @description
 * # ControlPanelCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('ControlPanelCtrl',[ 'LoggedUserFactory', 'loggedUser', function (LoggedUserFactory, loggedUser) {
		var vm=this;
		var utenteTemp=loggedUser;
		vm.utenteLocale={
			'Nome Utente': utenteTemp.name,
			'Password': utenteTemp.password,
			'Nome': utenteTemp.realName,
			'Cognome': utenteTemp.realSurname,
			'Email': utenteTemp.email
		};


  }]);
