function BooksController($scope, $http) {
    $http.get('/books').then(function(response){
        $scope.books_list = response.data;
    }, function(response){
        $scope.books_list = response.data;
    })
}