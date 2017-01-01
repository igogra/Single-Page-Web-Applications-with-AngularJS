(function () {
'use strict';

	angular.module('MenuApp')
		.config(RoutesConfig)
	;

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		// Redirect to home page if no other URL matches
		$urlRouterProvider.otherwise('/');

		// *** Set up UI states ***
		$stateProvider

			// Home page
			.state('home', {
				url: '/',
				templateUrl: 'src/templates/home.template.html'
				//template: '<div><h2>Welcome to Menu App</h2><br><br><p>Check the available Menu Catagories</p><button class="btn btn-info" ui-sref="categories">Menu Categories</button></div>'
			})

			// Categories page
			.state('categories', {
				url: '/categories',
				templateUrl: 'src/templates/categories.template.html',
				controller: 'categoriesController as categoriesCtrl',
				resolve: {
					categories: ['MenuDataService', function (MenuDataService) {
						return MenuDataService.getAllCategories();
					}]
				}
			})

			// Items page
			.state('items', {
				url: '/categories/{categoryShortName}',
				//url: '/categories/{categoryName.split(" ").join("+")}',
				templateUrl: 'src/templates/categorieItems.template.html',
				controller: 'categorieItemsController as categorieItemsCtrl',
				params: {
					categoryShortName: null,
					categoryName: null
				},
				resolve: {
					categorieItems: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
						
						/*console.log('X');
						console.log($stateParams.categoryShortName);
						console.log($stateParams.categoryName);*/

						return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
					}]
				}
			})

			;


	}


})();