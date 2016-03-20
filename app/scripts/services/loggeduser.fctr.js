'use strict';

/**
 * @ngdoc factory
 * @name orzoApp.LoggedUserFactory
 * @description
 * # LoggedUserFactory
 * Factory in the orzoApp.
 */
angular.module('orzoApp')
  .factory('LoggedUserFactory', function () {
  	var loggedUser = {name: 'nessuno', password: 'nessuno'};

  	var _setLoggedUser = function(userName, password){
  		loggedUser.name = userName;
  		loggedUser.password = password;
  	};
  	var _getLoggedUser = function(){
  		return loggedUser;
  	};
  	var _setLoggedUserName = function(name){
  		loggedUser.name = name;
  	};
  	var _getLoggedUserName = function(){
  		return loggedUser.name
  	};
  	var _setLoggedUserPassword = function(password){
  		loggedUser.password = password;
  	};
  	var _getLoggedUserPassword = function(){
  		return loggedUser.password;
  	};
  	return {
  		setLoggedUser: _setLoggedUser,
  		getLoggedUser: _getLoggedUser,
  		setLoggedUserName: _setLoggedUserName,
  		getLoggedUserName: _getLoggedUserName,
  		setLoggedUserPassword: _setLoggedUserPassword,
  		getLoggedUserPassword: _getLoggedUserPassword
  	}
  });
