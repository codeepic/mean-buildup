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
				roomID: "1",
        		area: "secondFlor",
        		capacity: "3",
        		doubleBed: "true",
        		standard: "premium",
        		price: "128.34",
        		urlImage: "/local/test/myimageroom.jpg"        	
        	},
        	{
				roomID: "2",
        		area: "thirdFlor",
        		capacity: "2",
        		doubleBed: "true",
        		standard: "delux",
        		price: "228.34",
        		urlImage: "/local/test/myimageroom.jpg"        	
        	},
	       	{
				roomID: "3",
        		area: "firstFlor",
        		capacity: "1",
        		doubleBed: "false",
        		standard: "standard",
        		price: "28.34",
        		urlImage: "/local/test/myimageroom.jpg"        	
        	}
        ];
    }
}());