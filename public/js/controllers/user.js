angular.module('mean.users').controller('UserController', ['$scope', '$routeParams', '$location', 'Global', 'Users',function ($scope, $routeParams, $location, Global, Users) {
    
    $scope.global = Global;
        
    // $scope.updateProfile = function(){

    //  var user = $scope.global.user;
    //  if (!user.updated) {
    //         user.updated = [];
    //     }

    //     user.updated.push(new Date().getTime());

    //     user.$update(function() {
    //         $location.path('profile/profile');
    //     });
    // };


}]);