/**
 * Created by Tasos on 17/10/2015.
 */
(function() {
    angular
        .module('angular-buildup')
        .controller('ManagerRoomListController', ManagerRoomListController);

    ManagerRoomListController.$inject=[];

    function ManagerRoomListController() {
        this.welcome = "ManagerRoomListController!";
    }
}());