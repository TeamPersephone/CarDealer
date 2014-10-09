'use strict';

appMain.controller('AdByIdController', function HomeController($scope, adsData , $routeParams) {
    adsData.byId($routeParams.id).then(function(data){
        console.log(data);
        $scope.result = data;
    });
});