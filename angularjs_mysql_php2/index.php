<!-- <!DOCTYPE html>
<!-- index.php !-->
<html>

<head>
    <title>Angular JS project with php and mysql</title>
    <!-- google font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
    <!-- bootstrap cdn -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
    <!-- angular cdn -->
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <div class="containers">
        <div ng-app="myapp" ng-controller="mycontroller">
            <h3>Angular JS project</h3>
            <div class='withForm'>
                <div class='d-flex'>
                    <div>
                        <label>First Name</label>
                        <input type="text" ng-model='firstname' class='form-control' autocomplete="off"><br>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" ng-model='lastname' class='form-control'><br>
                    </div>
                    <!-- <input type="button" name="Add" class='btn btn-success' ng-click="loadTable()" value="Add"> -->
                    <button type="button" ng-click="loadTable()" class="btn btn-info">Add</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html> 

<script>
    var app = angular.module('myapp', [])
    app.controller('mycontroller', function($scope, $http) {

                $scope.loadTable = function() {
                    alert('Hai');
                    $http.post(
                        "insert.php",
                        {'firstname':$scope.firstname, 'lastname':$scope.lastname}
                        ).success(function(data) {
                        alert(data);
                        $scope.firstname = null;
                        $scope.lastname = null;
                    });
                }
            }); 
</script>