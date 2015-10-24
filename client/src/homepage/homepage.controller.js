/**
 * Created by Tasos on 17/10/2015.
 */
(function() {
    angular
        .module('angular-buildup')
        .controller('HomepageController', HomepageController);

    HomepageController.$inject=[];

    function HomepageController() {
        this.welcome = "Welcome!";
    }
}());