(function () {
    app.controller('TestMy', function ($scope, $http) {
        $scope.GetPageData = function () {
            $http.get('//Home/GetPaggedData').then(function (myData) {
                $scope.adminList = myData.data;
                alert("This is my value" + $scope.adminList);
            });
        }
    }).call(angular);
})