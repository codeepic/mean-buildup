/**
 * Created by Tasos on 17/10/2015.
 */
(function() {
    angular
        .module('angular-buildup')
        .controller('AuthController', AuthController);

    AuthController.$inject=[];

    function AuthController() {
        this.controllerName = "This is auth controller";
    }
}());