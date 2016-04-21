angular.module('mean.articles').controller('ArticlesController', ['$scope', '$routeParams', '$location', 'Global', 'Articles', function ($scope, $routeParams, $location, Global, Articles) {

    $scope.global = Global;
    $scope.theBoolean=true;
    $scope.format="yyyy-MM-dd";
    $scope.date = Date.now();
    // $scope.time;

    $scope.create = function() {   
        var article = new Articles({
            title: this.title,
            content: this.content,
            isPrivate: $scope.theBoolean,
            eventDate: $scope.date
            // eventTime:$scope.time
        });
        article.$save(function(response) {
            $location.path("articles/" + response.id);
        });

        this.title = "";
        this.content = "";
    };

    $scope.remove = function(article) {
        if (article) {
            article.$remove();  

            for (var i in $scope.articles) {
                if ($scope.articles[i] === article) {
                    $scope.articles.splice(i, 1);
                }
            }
        }
        else {
            $scope.article.$remove();
            $location.path('articles');
        }
    };

    $scope.update = function() {
        var article = $scope.article;
        if (!article.updated) {
            article.updated = [];
        }
        article.updated.push(new Date().getTime());

        article.$update(function() {
            $location.path('articles/' + article.id);
        });
    };

    $scope.find = function() {
        Articles.query(function(articles) {
            $scope.articles = articles;
        });
    };

    $scope.findOne = function() {
        Articles.get({
            articleId: $routeParams.articleId
        }, function(article) {
            $scope.article = article;
        });
    };

    $scope.attend = function() {
        Articles.get({
            articleId: $routeParams.articleId
        }, function(article) {
            $scope.article = article;
            console.log(article.User.id);
            console.log($scope.global.user.id);
        });            
    };    
}]);