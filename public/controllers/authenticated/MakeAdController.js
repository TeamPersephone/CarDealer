'use strict';

appMain.controller('MakeAdController', function MakeAdController($scope, $location, AccountService, adsData) {
    if (AccountService.userData.isAuth === false ) {
        $location.path("/");
    }
    $scope.successfulRegistration = false;
    $scope.formMessage = "";

    adsData.getMakes().then(function(makes){
    $scope.makes = makes;
    //$scope.selected = "";
    $scope.models = makes[0].Model;

    $scope.selectedMake = '';
    $scope.selectedModel = '';

    $scope.makeAd = function makeAdFunction(ad) {

        if (ad.make === ""){
            $scope.formMessage = "You must provide the maker's name";
            return;
        }

        if (ad.model === ""){
            $scope.formMessage = "You must provide the model";
            return;
        }

        ad.published = new Date();
        ad.user = AccountService.userData.userId;

        adsData.postAd(ad)
            .then(function (response) {
                $scope.successfulRegistration = true;
                $scope.formMessage = "Ad created successfully, redirecting to home page...";
                $location.path("/");
            }, function (error) {
                $scope.formMessage = error.message;
            });
    }});
});