/**
 * Created by Tasos on 17/10/2015.
 */
(function() {
    angular
        .module('angular-buildup')
        .controller('AuthController', AuthController);

    AuthController.$inject=['Auth', '$location'];

    function AuthController(Auth, $location) {
        if (Auth.isAuth()) {
            redirectAuthenticatedFn();
        }

        var me = this;

        this.login = "";
        this.password = "";
        this.errorMessage = "";

        this.authenticate = function() {
            me.errorMessage = "";

            Auth.authenticate(me.login,me.password)
                .then(function(result) {
                    redirectAuthenticatedFn();
                })
                .catch(function(err) {
                    me.errorMessage = err;
                });
        };

        function redirectAuthenticatedFn() {
            $location.path('/manager/room/add');
        }
    }
}());