(function() {
    'use strict';

    angular.module('MenuApp').controller('itemsController', itemsController);

    itemsController.$inject = ['$stateParams', 'MenuDataService', 'items'];

    function itemsController($stateParams, MenuDataService, items) {
        var itemsCtrl = this;
        itemsCtrl.items = items;
        itemsCtrl.categoryName = $stateParams.categoryName;
    }
})();
