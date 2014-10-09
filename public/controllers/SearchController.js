'use strict';

appMain.controller('SearchController', function SearchController($scope, adsData, $routeParams, $location) {
    function updateAds (ads) {
        if (ads.length === 0) {
            $scope.noResults = true;
        }
        else {
            $scope.noResults = false;
            $scope.ads = ads;
        }
    }

    function updateAdsByUrl () {
        var queryString = '';
        console.log($routeParams);
        for (var searchField in $routeParams) {
            var searchObjectValue = $routeParams[searchField];
            if (searchObjectValue || searchObjectValue === 0) {
                queryString += '&' + searchField + '=' + searchObjectValue;
                $location.path($location.path()).search(searchField, searchObjectValue);
            }
        }

        adsData.getSearchResults(queryString).then(function(results) {
            updateAds(results);
        });
    }

    var switchPage = function(isNext) {
        $routeParams.page = $routeParams.page || 0;
        if (isNext) {
            $routeParams.page = parseInt($routeParams.page) + 1;
        }
        else {
            $routeParams.page = parseInt($routeParams.page) - 1;
            if (parseInt($routeParams.page) < 0) {
                $routeParams.page = 0;
            }
        }
        $location.path($location.path()).search('page', $routeParams.page);
        updateAdsByUrl();
    };

    var executeSearch = function (searchObject) {
        if (!searchObject) {
            searchObject = {};
        }
        searchObject.make = searchObject.make || undefined;
        searchObject.model = searchObject.model || undefined;
        searchObject.transmission = searchObject.transmission || undefined;
        searchObject.fuelType = searchObject.fuelType || undefined;
        searchObject.year = searchObject.year || undefined;
        searchObject.minPrice = searchObject.minPrice || undefined;
        searchObject.maxPrice = searchObject.maxPrice || undefined;

        for (var searchField in searchObject) {
            $location.path($location.path()).search(searchField, searchObject[searchField]);
            $routeParams[searchField] = searchObject[searchField];
        }

        updateAdsByUrl();
    };

    var manufacturerChosen = function (manufacturerName) {
        for (var index in $scope.makes) {
            var make = $scope.makes[index];
            if (make.name === manufacturerName) {
                $scope.models = make.model;
            }
        }
    };

    adsData.getMakes().then(function(makes) {
       $scope.makes = makes;
    });

    adsData.getSearchResults().then(function(results) {
       updateAds(results);
    });

    $scope.executeSearch = executeSearch;
    $scope.manufacturerChosen = manufacturerChosen;
    $scope.switchPage = switchPage;
});