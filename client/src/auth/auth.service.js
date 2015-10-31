/**
 * Created by Tasos on 31/10/2015.
 */
(function () {

    angular
        .module('angular-buildup')
        .service('Auth', ['$resource', '$q', function ($resource, $q) {
            this.authenticate = authenticateFn;
            this.isAuth = isAuthFn;
            this.getToken = getTokenFn;

            function authenticateFn(login, password) {
                var resource = $resource('/auth/login');

                return $q(function(resolve, reject) {
                    resource.save({ login: login, password: password },
                       function success(response) {
                          saveTokenFn(response.token);
                          resolve(response.login);
                    }, function error(err) {
                          reject(err.data.msg);
                    });
                });
            }

            function isAuthFn() {
                var token = localStorage.getItem('token');
                return !!token;
            }

            function getTokenFn() {
                return localStorage.getItem('token');
            }

            function saveTokenFn(token) {
                localStorage.setItem('token', token);
            }
        }]);

}());