/**
 * Created by Tasos on 17/10/2015.
 */
(function() {
    angular
        .module('angular-buildup')
        .controller('AddRoomController', AddRoomController);

    AddRoomController.$inject=[];

    function AddRoomController() {
    	var addRoom = this;
        addRoom.welcome = "AddRoomController!";
        addRoom.submitAddRoom= function(){
        	console.log("Sucess", this.user)

        }
    }
}());