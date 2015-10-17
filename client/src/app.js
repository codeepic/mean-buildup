/**
 * Created by Pencroff on 11-Oct-15.
 */
angular
    .module('angular-buildup', ['ngRoute'])
    .config(AppConfig)
    .run(AppRun);

AppConfig.$inject = ['$routeProvider'];

function AppConfig($routeProvider) {
    $routeProvider
        .when('/auth', {
            templateUrl: 'static/src/auth/auth.template.html',
            controller: 'AuthController',
            controllerAs: 'auth'
        });
}

function AppRun() {
    console.log('Angular app have runned');
}