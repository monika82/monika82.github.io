/*
* Application states
*/
(function() {
    
	'use strict';

	angular
		.module('portfolio')
		.config([
			'$stateProvider', 
			'$urlRouterProvider', 
			function($stateProvider, $urlRouterProvider){

			// any unknown URLS go to 404
		    $urlRouterProvider.otherwise('/404');
		    // no route goes to index
		    $urlRouterProvider.when('', '/');
		    // use a state provider for routing

		    $stateProvider
		        .state('kimjestem', {
		            url: '/',
		            templateUrl: 'app/components/kimjestem/kimjestem.view.html',
		            controller: 'kimjestemController',
		            controllerAs: 'kimjestem'
		        })
		    	.state('oferta', {
		            url: '/oferta',
		            templateUrl: 'app/components/oferta/oferta.view.html',
		            controller: 'ofertaController',
		            controllerAs: 'oferta'
		        })
		        .state('kontakt', {
		            url: '/kontakt',
		            templateUrl: 'app/components/kontakt/kontakt.view.html',
		            controller: 'kontaktController',
		            controllerAs: 'kontakt'
		        })
				.state('cv', {
		            url: '/cv',
		            templateUrl: 'app/components/cv/cv.view.html',
		            controller: 'cvController',
		            controllerAs: 'cv'
		        })
		        .state('404', {
		            url: '/404',
		            templateUrl: 'app/shared/404.html'
		        });    
	}]);

})();