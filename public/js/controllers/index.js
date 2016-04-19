//angular.module('mean.articles').controller('IndexController', ['$scope', '$location', 'Global', 'Users',function ($scope, $location, Global, Users) {
 angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    // $scope.updateProfile = function(){


    //     if (!user.updated) {
    //         user.updated = [];
    //     }

    //     user.updated.push(new Date().getTime());

    //     user.$update(function() {
    //         $location.path('profile/profile');
    //     });

    // };


//Updating Laptop to Computer
// $scope.updateProfile = function(){
//     Users.find({where:{id:global.user.id}}).complete(function (err, data) {
//   if(err){
//     console.log(err);
//   }
//   if(data){
//     data.updateAttributes({
//     name: global.user.name,
//     email: global.user.name,
//     school : global.user.school,
//     major : global.user.major

//   }).success(function (data1) {
//     console.log(data1);
// //   })
//  };


}]);