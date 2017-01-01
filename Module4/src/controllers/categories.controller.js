(function () {
'use strict';

	angular.module('MenuApp')
		.controller('categoriesController', categoriesController);
	;

	categoriesController.$inject = ['MenuDataService', 'categories'];
	function categoriesController(MenuDataService, categories) {

		var categoriesCtrl = this;
		categoriesCtrl.categories = categories;

		//console.log(categoriesCtrl.categories);

	}

	//console.log("Initializing categories.controller..");

})();