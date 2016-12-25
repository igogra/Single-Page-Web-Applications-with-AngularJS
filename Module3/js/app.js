var app = angular.module('AssignmentApp', []);

app.controller('NarrowItDownController', NarrowItDownController);
app.service('MenuSearchService', MenuSearchService);
app.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
app.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
    var ddo = {
        restrict: 'E',
        templateUrl: 'foundItems.html',
        scope: {
            foundItems: '<',
            onEmpty: '<',
            onRemove: '&'
        },
        controller: ShoppingListDirectiveController,
        controllerAs: 'ctrlList',
        bindToController: true
    };

    return ddo;
}

function ShoppingListDirectiveController() {
    var list = this;

    // list.isEmpty = function () {
    //     if (list.onEmpty.length <= 0) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
        return $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
        }).then(function (response) {
            var foundItems = [];

            //console.log(response.data);
            //console.log(response.data['menu_items'].length);
            for (var i = 0; i < response.data['menu_items'].length; i++) {
                //console.log(response.data['menu_items'][i]);
                if (searchTerm.length > 0 &&
                    response.data['menu_items'][i]['description'].toLowerCase().indexOf(searchTerm) !== -1) {
                    foundItems.push(response.data['menu_items'][i]);
                }
            }

            // return processed items
            return foundItems;
        });
    };


}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.found = [];
    ctrl.message = "";
    ctrl.searchFor = "";

    ctrl.search = function () {
        //ctrl.found = [];
        var foundObj = MenuSearchService.getMatchedMenuItems(ctrl.searchFor);

        foundObj.then(function (items) {
            if (items && items.length > 0) {
                ctrl.message = "";
                ctrl.found = items;
            }
            else {
                ctrl.message = "Nothing found!";
                ctrl.found = [];
                //console.log(ctrl.found);
            }
        });
    };

    ctrl.removeItem = function (itemIndex) {
        ctrl.found.splice(itemIndex, 1);
    };
}


