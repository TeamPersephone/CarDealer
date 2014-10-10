'use strict';

appMain.controller('AdByIdController', function HomeController($scope, adsData , $routeParams, AccountService, $location) {
    var deleteAd = function deleteAd() {
        if (!AccountService.checkRole('admin')) {
            return this;
        }

        adsData.deleteAd($routeParams.id).then(function() {
            $location.path('/');
        });
    };

    adsData.byId($routeParams.id).then(function(data){
        $scope.ad = data;
    });

    $scope.checkRole = AccountService.checkRole;
    $scope.deleteAd = deleteAd;
});