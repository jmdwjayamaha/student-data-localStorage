/*
 * Student controller handling student operations
 */
angular
	.module("studentApp")
	.controller("AddStudentController", AddStudentController)
	.controller("ViewStudentController", ViewStudentController)
	.controller("EditStudentController", EditStudentController)
	.controller("ListStudentsController", ListStudentsController);

function AddStudentController($scope, $window, LocalStorageService) {
  
  $scope.student = {studentNumber: '', firstName: '', lastName: '', gender: "MALE", email: '', disability: false};
  $scope.addStudent = function() {
    LocalStorageService.pushItem($scope.student.studentNumber, angular.toJson($scope.student));
    $window.location.href = "#/students";
  };
}

function ViewStudentController($scope, $routeParams, LocalStorageService) {
  
  $scope.student = angular.fromJson(LocalStorageService.getItem($routeParams.id));
}

function EditStudentController($scope, $routeParams, $window, LocalStorageService) {
  
  var studentId = $routeParams.id;
  $scope.student = angular.fromJson(LocalStorageService.getItem(studentId));
  
  $scope.updateStudent = function() {
    LocalStorageService.pushItem(studentId, angular.toJson($scope.student));
    $window.location.href = "#/students";
  };
}

function ListStudentsController($scope, $route, LocalStorageService) {
  
  $scope.studentsList = LocalStorageService.retrieveData();
  
  $scope.deleteStudent = function(studentId) {
    LocalStorageService.removeItem(studentId);
    $route.reload(); 
  };
}