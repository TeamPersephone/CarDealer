'use strict';

appMain.factory('adsData', ['$http', '$q', 'httQ', function($http, $q, httQ , $route) {
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
            return httQ.post(baseUrl, ad );
        },
        byUser:function(userId){
            return httQ.get(baseUrl+'/byuser/'+userId);
        },
        byId:function(adId){
            return httQ.get(baseUrl+'/'+adId);
        },
        getMakes: function() {
            return httQ.get('/api/makes');
        },
        getSearchResults: function(searchString) {
            return httQ.get('/api/search?' + searchString);
        },
        deleteAd: function(id) {
            console.log('/api/remove/' + id );
            return httQ.put('/api/remove/' + id );
        }
    }
}]);