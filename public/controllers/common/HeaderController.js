'use strict';

appMain.controller('HeaderController', function ($scope, $location, AccountService) {
    $scope.title = "CarDealer";

    $scope.logOut = function () {
        AccountService.logOutUser();
        $location.path('/home');
    };

    $scope.userData = AccountService.userData;

    $scope.checkRole = AccountService.checkRole;
});