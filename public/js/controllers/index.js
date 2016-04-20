//angular.module('mean.articles').controller('IndexController', ['$scope', '$location', 'Global', 'Users',function ($scope, $location, Global, Users) {
 angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;


}]);