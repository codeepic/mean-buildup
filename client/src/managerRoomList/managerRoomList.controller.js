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
        this.rooms = [
        	{
        		name: "room 1",  
        		area:"Third floor", 
				standard: "Premium",
				capacity: "3",
				bed: "No",
				price: "158.01"
        	},
        	{
        		name: "room 2",  
        		area:"Third floor", 
				standard: "Delux",
				capacity: "2",
				bed: "Yes",
				price: "258.01"
        	},
	       	{
        		name: "room 3",  
        		area:"Third floor", 
				standard: "Simple",
				capacity: "1",
				bed: "Yes",
				price: "58.01"
        	}
        ];
    }
}());