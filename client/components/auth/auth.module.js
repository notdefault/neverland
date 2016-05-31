'use strict';

angular.module('wwwApp.auth', ['wwwApp.constants', 'wwwApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
