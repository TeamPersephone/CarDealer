'use strict';

appMain.controller('SearchController', function SearchController($scope, adsData) {
    var executeSearch = function (searchObject) {
        console.log(searchObject);
    }

    $scope.executeSearch = executeSearch;
});