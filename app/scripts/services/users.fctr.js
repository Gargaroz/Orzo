'use strict';

/**
 * @ngdoc factory
 * @name orzoApp.UsersFactory
 * @description
 * # UsersFactory
 * Factory in the orzoApp.
 */
angular.module('orzoApp')
  .factory('UsersFactory',['$timeout', function ($timeout) {
    	var userExists = function(userName){
    		// $timeout(function(){
    			for (var i=0,length=users.length;i<length;i++){
    				if (users[i].name == userName) return true;
    				return false
    			}
    		// }, 2000);
    	};
    	var passwordIsCorrect = function(userName, password){
    		// $timeout(function(){
    			var ret = false;
    			for (var i=0, length=users.length;i<length;i++){
	    			if (users[i].password == password) {
	    				ret = true;
	    				break;
	    			}
    			}
    			return ret;
    		// }, 2000);
    	};
    	var localCheckCredentials = function (userName, password){
    		if (userExists(userName)) {
    			if (passwordIsCorrect(userName, password)) return true;
    			else return 'La password è sbagliata';
    		} else return 'Utente inesistente';
    	};
    	var users = [
    	{
    		name: 'Davide',
    		password: 'Davide.c0m'
    	},
    	{
    		name: 'Jack',
    		password: 'Jack.c0m'
    	},
    	{
    		name: 'Pippo',
    		password: 'Pippo.c0m'
    	},
    	{
    		name: 'Pluto',
    		password: 'Pluto.c0m'
    	},
    	{
    		name: 'Paperino',
    		password: 'Paperino.c0m'
    	}
		];
  	return {
  		checkCredentials: localCheckCredentials
  	}    
}]);
