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

        .when('/manager/room/edit/:id', {
            templateUrl: 'static/src/editRoom/editRoom.template.html',
            controller: 'EditRoomController',
            controllerAs: 'editRoom'
        })
        .when('/manager/room/add', {
            templateUrl: 'static/src/addRoom/addRoom.template.html',
            controller: 'AddRoomController',
            controllerAs: 'addRoom'
        })
        .when('/manager/room/list', {
            templateUrl: 'static/src/managerRoomList/managerRoomList.template.html',
            controller: 'ManagerRoomListController',
            controllerAs: 'managerRoomList'
        })
        .when('/manager/booking/list', {
            templateUrl: 'static/src/managerBookingList/managerBookingList.template.html',
            controller: 'ManagerBookingListController',
            controllerAs: 'managerBookingList'
        })
        .when('/homepage', {
            templateUrl: 'static/src/homepage/homepage.template.html',
            controller: 'HomepageController',
            controllerAs: 'homepage'
        })
        .when('/auth', {
            templateUrl: 'static/src/auth/auth.template.html',
            controller: 'AuthController',
            controllerAs: 'auth'
        })

        .otherwise({
            redirectTo: '/homepage'
        });
}

function AppRun() {
    console.log('Angular app have runned');
}