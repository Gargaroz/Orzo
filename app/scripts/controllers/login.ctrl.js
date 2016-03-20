'use strict';

/**
 * @ngdoc function
 * @name orzoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the orzoApp
 */
angular.module('orzoApp')
  .controller('LoginCtrl',['UsersFactory','$location','LoggedUserFactory', function (UsersFactory, $location, LoggedUserFactory) {
      var vm=this;
        vm.disLog;;
        vm.messLog="";
        vm.messReg=" Ti Ho Abilitato La Funzione Per Registrarti";
        vm.disReg;

        console.log(LoggedUserFactory.getLoggedUser());

      vm.controllo=function(user,pass){
        if(UsersFactory.checkCredentials(user,pass)==='La password è sbagliata'){
            vm.messLog="Hai Sbagliato La Password " + user.toUpperCase()
 + " Stai Piu Attento!";
            vm.disLog=false;
            vm.disReg=false;
        } else if(UsersFactory.checkCredentials(user,pass)==='Utente inesistente'){
           vm.messLog="Forse Non Ti Sei Registrato??";
            vm.disLog=false;
            vm.disReg=true;
        } else vm.goToMain(user);
      };

          vm.goToMain=function(user){
            LoggedUserFactory.setLoggedUser(user);
            $location.path("/main");

          }


  }]);
