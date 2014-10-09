'use strict';

appMain.controller('MakeAdController', function MakeAdController($scope, $location, AccountService, adsData) {
    if (AccountService.userData.isAuth === false) {
        $location.path("/");
    }
    $scope.successfulRegistration = false;
    $scope.formMessage = "";
    $scope.change = function () {
        for (var i = 0 , len = $scope.makes.length; i < len; i++) {
            if($scope.makes[i].name == $scope.selectedMake){
                $scope.models = $scope.makes[i].model;
                break;
            }
        }
    }
    adsData.getMakes().then(function (makes) {
        $scope.makes = makes;
    });
});