/**
 * Created by Tasos on 17/10/2015.
 */
(function() {
    angular
        .module('angular-buildup')
        .controller('ManagerBookingListController', ManagerBookingListController);

    ManagerBookingListController.$inject=[];

    function ManagerBookingListController() {
        this.welcome = "ManagerBookingListController!";
    }
}());