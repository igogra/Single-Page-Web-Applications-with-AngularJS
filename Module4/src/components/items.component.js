(function () {
'use strict';

	angular.module('MenuApp')
		.component('items', {

			templateUrl: 'src/templates/categorieItems.component.html',
			//controller: categorieItemsComponentController,
			bindings: {
				categorieItems: '<'
			}

		})
	;

	/*
	categorieItemsComponentController.$inject = ['$scope'];
	function categorieItemsComponentController($scope) {
		var $ctrl = this;

		console.log('Initializing items.component..');
	}*/



})();