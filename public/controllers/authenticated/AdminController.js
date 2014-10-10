'use strict';

appMain.controller('AdminController', function MakeAdController($scope, $location, AccountService, adsData , admin) {

    adsData.getMakes().then(function (makes) {
        $scope.makes = makes;
    });
    $scope.addModel = function(model){
        console.log(admin);
        admin.addModel(model).then(function(){
            alert("Added")
        },function(err){
            alert("Invalid Params");
        });
    }
    $scope.createMake = function(make){
        admin.addMake(make).then(function(){
            alert("Added")
        },function(err){
            alert("Invalid Params");
        });
    }
});