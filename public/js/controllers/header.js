angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Events",
        "link": "articles"
    }, {
        "title": "Create New Event",
        "link": "articles/create"
    }];
    
    $scope.isCollapsed = false;
}]);