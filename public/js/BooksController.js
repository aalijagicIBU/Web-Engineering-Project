function BooksController($scope) {
    console.log("Test");

    $scope.books_list = [
        {title:"Count of Monte Cristo", author:"Alexandar Dumas", publisher:"Vulkan"},
        {title:"Harry Potter", author:"J.K.Rowling", publisher:"Algoritam"},
        {title:"The Greatest Salesman in the World", author:"Og Mandino", publisher:"Laguna"}
    ]
}