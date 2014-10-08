'use strict';

appMain.factory('adsData', ['$http', '$q', function($http, $q) {
    var baseUrl ='/api/ads';

    return {
        getAds: function() {
            var deferred = $q.defer();
            $http.get(baseUrl)
                .success(function(data) {
                    deferred.resolve(data);
                }, function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
}]);