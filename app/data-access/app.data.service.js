angular.module('placeFinderServiceModule',['placeFinderConstantModule'])
    .service('placeFinderService', ['AppConstant', '$http', function(AppConstant,$http) {
        var queryParams = "client_id=" + AppConstant.client_id + "&client_secret=" + AppConstant.client_secret + "&v="+AppConstant.version;
        this.getVenues = function(customerInput) {
            var url = AppConstant.baseURL + AppConstant.searchAPI + "?"+ queryParams + customerInput;
            return $http.get(url);
        };
    }]);