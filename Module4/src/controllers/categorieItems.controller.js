(function () {
'use strict';

	angular.module('MenuApp')
		.controller('categorieItemsController', categorieItemsController);
	;

	categorieItemsController.$inject = ['$stateParams', 'MenuDataService', 'categorieItems'];
	function categorieItemsController($stateParams, MenuDataService, categorieItems) {

		var categorieItemsCtrl = this;
		categorieItemsCtrl.categorieItems = categorieItems;

		categorieItemsCtrl.categoryName = $stateParams.categoryName;

	}

	//console.log("Initializing categorieitems.controller..");

})();