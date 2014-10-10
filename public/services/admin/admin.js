'use strict';

appMain.factory('admin', ['$http', '$q', 'httQ', function($http, $q, httQ , $route) {

    return {
        addMake: function(make) {
            return httQ.post('/api/makes/addmake' , make);
        },
        addModel: function(model) {
            return httQ.post('/api/makes/addmodel', model );
        }
    }
}]);