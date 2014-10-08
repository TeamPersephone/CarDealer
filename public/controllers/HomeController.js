'use strict';

appMain.controller('HomeController', function HomeController($scope, adsData) {
    $scope.ads = adsData.getAds();
});