'use strict';

appMain.controller('HomeController', function ($scope, $location, ArticlesResource) {
    ArticlesResource.getAll()
        .then(function (response) {
            $scope.articles = response;
            console.log($scope.articles);
        });
});