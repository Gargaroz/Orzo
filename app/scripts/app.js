'use strict';

/**
 * @ngdoc overview
 * @name orzoApp
 * @description
 * # orzoApp
 *
 * Main module of the application.
 */
angular
  .module('orzoApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/login'
      })
      .when('/404', {
        templateUrl: '/404.html'
      })
      .when('/login', {
        templateUrl: 'views/login.tmpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginctrl'
      })
      .when('/main', {
        templateUrl: 'views/main.tmpl.html',
        controller: 'MainCtrl',
        controllerAs: 'mainctrl',
        resolve: {
          loggedUserName: function(LoggedUserFactory, $location){
          if (LoggedUserFactory.getLoggedUserName() == 'nessuno' || LoggedUserFactory.getLoggedUserPassword() == 'nessuno') $location.path("/login");
           else return LoggedUserFactory.getLoggedUserName();
          }
        }
      })
      .when('/controlpanel', {
        templateUrl: 'views/control-panel.tmpl.html',
        controller: 'ControlPanelCtrl',
        controllerAs: 'controlpanelctrl',
        resolve: {
          loggedUser: function(LoggedUserFactory, $location){
            if (LoggedUserFactory.getLoggedUserName() == 'nessuno' || LoggedUserFactory.getLoggedUserPassword() == 'nessuno') $location.path("/login");
            else return LoggedUserFactory.getLoggedUser();
          }
        }
      })
      .when('/register', {
        templateUrl: 'views/register.tmpl.html',
        controller: 'RegisterCtrl',
        controllerAs: 'registerctrl',
        resolve: {
          unloggedUser: function(LoggedUserFactory){
            var unloggedUser = {};
            unloggedUser.name = LoggedUserFactory.getLoggedUserName();
            unloggedUser.password = LoggedUserFactory.getLoggedUserPassword();
            return unloggedUser;
          }
        }
      })
      .otherwise({
        redirectTo: '/404'
      });
  });