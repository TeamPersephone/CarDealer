'use strict';

appMain.controller('ListAdsController', function ListAdsController($scope, adsData) {
    adsData.getAds()
        .then(function(data) {
            $scope.users  = data;
        });
});