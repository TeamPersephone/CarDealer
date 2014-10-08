'use strict';

appMain.factory('adsData', ['$http', '$q', 'httQ', function($http, $q, httQ) {
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
        },
        postAd: function(ad) {
            return httQ.post(baseUrl, ad);
        }
    }
}]);