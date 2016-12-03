'use strict';

angular.module('wwwApp'
	,[ 'wwwApp.auth'
	 , 'wwwApp.admin'
	 , 'wwwApp.constants'
	 , 'ngCookies'
	 , 'ngResource'
	 , 'ngSanitize'
	 , 'ui.router'
	 , 'ui.bootstrap'
	 , 'validation.match'
  ])
  .config(function
  	( $urlRouterProvider
  	, $locationProvider)
  {
    
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

  });
