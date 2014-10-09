'use strict';

appMain.controller('AdsByUserController', function HomeController($scope, adsData , $routeParams) {
    adsData.byUser($routeParams.id).then(function(data){
        //console.log(data);
        $scope.ads = data;
    });
});