app.controller('baseController', function ($scope) {
    $scope.reloadList = function () {
        if ($scope.paginationConf.itemsPerPage == $scope.paginationConf.totalItems) {
            $scope.findAll();
        }

        else {
            $scope.search();
        }

    };
    $scope.isSelected = function (id) {
        if ($scope.ids.indexOf(id) > -1) {
            return true;
        }
    };
    $scope.paginationConf = {
        currentPage: 1,
        // totalItems: 10,
        itemsPerPage: 10,
        perPageOptions: [10, 20, 30, 40, 50],
        onChange: function () {
            $scope.reloadList();

        }//重新加载
    };
    $scope.changeChecked = function ($event, id) {
        if ($event.target.checked) {
            $scope.ids.push(id);
        } else {
            var index = $scope.ids.indexOf(id);
            $scope.ids.splice(index, 1);
        }

    };
    $scope.changeAll = function ($event) {
        if ($event.target.checked) {
            $("#dataList input").each(function () {
                this.checked = true;
            });
            $scope.ids = [];
            for (var i = 0; i < $scope.list.length; i++) {
                $scope.ids.push($scope.list[i].id);
            }
        } else {
            $("#dataList input").each(function () {
                this.checked = false;
            });
            $scope.ids = [];
        }

    };


});