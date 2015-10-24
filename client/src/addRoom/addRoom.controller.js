/**
 * Created by Tasos on 17/10/2015.
 */
(function() {
    angular
        .module('angular-buildup')
        .controller('AddRoomController', AddRoomController);

    AddRoomController.$inject=[];

    function AddRoomController() {
        this.welcome = "AddRoomController!";
    }
}());