'use strict';

angular.module('myApp', [
    'placeFinderServiceModule'
])/*.config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'translations/en',
        suffix: '.json'
    });
})*/.controller('placeFinderController', ['$scope', '$http', 'placeFinderService',
    function ($scope, $http, placeFinderService) {
    $scope.categories = [
        {name: "All", id: "ALL"},
        {name: "Arts & Entertainment", id: "4d4b7104d754a06370d81259"},
        {name: "College & University", id: "4d4b7105d754a06372d81259"},
        {name: "Food", id: "4d4b7105d754a06374d81259"}
    ];
    $scope.isDisabled = true;
    $scope.errorNotification = false;
    $scope.errorValidation=false;
    var customerInput;
    $scope.getPlaces = function () {
        if (angular.isDefined($scope.placeName)) {
            customerInput = "&near=" + $scope.placeName;
        } else if ((angular.isDefined($scope.longitude)) && (angular.isDefined($scope.latitude))) {
            customerInput = "&ll=" + $scope.longitude + "," + $scope.latitude;
        } else {
            $scope.errorValidation=true;
           return;
        }
        if ($scope.selectedCategory !== 'ALL') {
            customerInput += "&categoryId=" + $scope.selectedCategory;
        }
        customerInput += "&radius="+$scope.radius;
        placeFinderService.getVenues(customerInput).then(function (success) {
            $scope.errorNotification = false;
            $scope.errorValidation=false;
            console.log("response:" + success.data.response.venues.length);
            $scope.venues = success.data.response.venues;
        }).catch(function (error) {
            $scope.errorValidation=false;
           $scope.errorNotification=true;
        });
    }
}]);