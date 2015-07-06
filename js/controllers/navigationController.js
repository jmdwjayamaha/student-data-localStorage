/*
 * Controller for handling navigation bar operations
 */
angular
  .module("studentApp")
  .controller("NavigationController", NavigationController);

function NavigationController($scope, $location) {
  
  $scope.currentNav = $location.path().substring(1) || "students";
  
  $scope.selectStudents = selectStudents;
  $scope.selectSchools = selectSchools;
  
  function selectStudents() {
    $scope.currentNav = "students";
  }
  
  function selectSchools() {
  	 $scope.currentNav = "schools";
  }
}