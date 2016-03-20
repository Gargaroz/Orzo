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
      .when('/login', {
        templateUrl: 'views/login.tmpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'loginctrl'
      })
      .when('/404', {
        templateUrl: '/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
