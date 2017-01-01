(function () {
'use strict';

	angular.module('data')
		.service('MenuDataService', MenuDataService)
	;

	MenuDataService.$inject = ['$http', 'ApiBasePath']
	function MenuDataService($http, ApiBasePath) {

		//console.log("Initializing menudata.service..");

	  	var service = this;

	  	service.getAllCategories = function () {

	    	return $http({
		      	method: "GET",
		      	url: (ApiBasePath + "/categories.json")
		    })
		    .then(function (result) {

			    // return processed items
			    return result.data;

			})
		    .catch(function (error) {
			    console.log(error);
		    });

	  	};

	  	service.getItemsForCategory = function (categoryShortName) {

	    	return $http({
		      	method: "GET",
		      	url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
		    })
		    .then(function (result) {

			    // return processed items
			    return result.data.menu_items;

			})
		    .catch(function (error) {
			    console.log(error);
		    });

	  	};


	}

})();