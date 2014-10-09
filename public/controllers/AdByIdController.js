'use strict';

appMain.controller('AdByIdController', function HomeController($scope, adsData , $routeParams) {
    adsData.byId($routeParams.id).then(function(data){
        $scope.ad = data;
    });
});