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
    	var _checkCredentials = function (userName, password){
    		if (userExists(userName)) {
    			if (passwordIsCorrect(userName, password)) return true;
    			else return 'La password è sbagliata';
    		} else return 'Utente inesistente';
    	};
        var _getUserInfo = function (userName){
            for (var i=0, length=users.length;i<length;i++){
                if (users[i].name==userName) {
                    return users[i];
                }
                console.log("wtf?");
            }
        };
        var _addUser = function (user){
            users.push(user);
        };
    	var users = [
    	{
    		name: 'Davide',
    		password: 'Davide.c0m',
            realName: 'Davide',
            realSurname: 'Caputo',
            email: 'caputodav93@gmail.com'
    	},
    	{
    		name: 'Jack',
    		password: 'Jack.c0m',
            realName: 'Gianluca',
            realSurname: 'Esposito',
            email: 'g.esposito16@gmail.com'
    	},
    	{
    		name: 'Pippo',
    		password: 'Pippo.c0m',
            realName: 'Pippo',
            realSurname: 'Poi',
            email: 'pippopoi@gmail.com'
    	},
    	{
    		name: 'Pluto',
    		password: 'Pluto.c0m',
            realName: 'Pluto',
            realSurname: 'Mouse',
            email: 'plutomouse@gmail.com'
    	},
    	{
    		name: 'Paperino',
    		password: 'Paperino.c0m',
            realName: 'Donald',
            realSurname: 'Duck',
            email: 'donaldduck@gmail.com'
    	}
		];
  	return {
  		checkCredentials: _checkCredentials,
        getUserInfo: _getUserInfo,
        addUser: _addUser
  	}    
}]);
