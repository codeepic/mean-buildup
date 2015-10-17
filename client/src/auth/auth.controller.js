/**
 * Created by bl4de on 17.10.2015.
 */
angular
    .module('angular-buildup')
    .controller('AuthController', AuthController);

AuthController.$inject = [];

function AuthController() {
    this.testval = "Test val";
}