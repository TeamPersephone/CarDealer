'use strict';

appMain.controller('AdByIdController', function HomeController($scope, adsData , $routeParams, AccountService) {
    var deleteAd = function deleteAd() {
        //TODO: Add service to delete ad
        console.log($routeParams);
    };

    adsData.byId($routeParams.id).then(function(data){
        $scope.ad = data;
    });

    $scope.checkRole = AccountService.checkRole;
    $scope.deleteAd = deleteAd;
});