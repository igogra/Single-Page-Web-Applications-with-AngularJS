(function () {
'use strict';

	angular.module('MenuApp')
		.component('categories', {

			templateUrl: 'src/templates/categories.component.html',
			//controller: categoriesComponentController,
			bindings: {
				categories: '<'
			}

		})
	;

	/*
	categoriesComponentController.$inject = ['$scope'];
	function categoriesComponentController($scope) {
		var $ctrl = this;

		console.log('Initializing categories.component..');
	}*/

})();