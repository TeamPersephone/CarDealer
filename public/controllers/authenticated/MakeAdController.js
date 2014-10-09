'use strict';

appMain.controller('MakeAdController', function MakeAdController($scope, $location, AccountService, adsData) {
    if (AccountService.userData.isAuth === false) {
        $location.path("/");
    }
    $scope.successfulRegistration = false;
    $scope.formMessage = "";
    $scope.change = function () {
        $scope.models =  $scope.makes[$scope.selectedMake].model;
    }
    adsData.getMakes().then(function (makes) {
        $scope.makes = makes;
    });
});