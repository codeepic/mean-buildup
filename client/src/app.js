/**
 * Created by Pencroff on 11-Oct-15.
 */
angular
    .module('angular-buildup', ['ngRoute'])
    .config(AppConfig)
    .run(function () {
        console.log('Angular app have runned');
    });

AppConfig.$inject = ['$routeProvider'];

function AppConfig($routeProvider) {
    $routeProvider.when('/auth', {
            templateUrl: "/static/src/auth/auth.template.html",
            controller: "AuthController",
            controllerAs: "auth"
        })
        .otherwise({
            redirectTo: "/"
        });
}

