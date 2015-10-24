/**
 * Created by Tasos on 17/10/2015.
 */
(function() {
    angular
        .module('angular-buildup')
        .controller('EditRoomController', EditRoomController);

    EditRoomController.$inject=[];

    function EditRoomController() {
        this.welcome = "EditRoomController!";
    }
}());