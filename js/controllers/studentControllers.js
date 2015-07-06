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
    LocalStorageService.pushItem("stu_" + $scope.student.studentNumber, angular.toJson($scope.student));
    $window.location.href = "#/students";
  };
}

function ViewStudentController($scope, $routeParams, LocalStorageService) {
  
  $scope.student = angular.fromJson(LocalStorageService.getItem("stu_" + $routeParams.id));
}

function EditStudentController($scope, $routeParams, $window, LocalStorageService) {
  
  var studentId = "stu_" + $routeParams.id;
  $scope.student = angular.fromJson(LocalStorageService.getItem(studentId));
  
  $scope.updateStudent = function() {
    LocalStorageService.pushItem(studentId, angular.toJson($scope.student));
    $window.location.href = "#/students";
  };
}

function ListStudentsController($scope, $route, LocalStorageService, ObjTypeFilterService) {
  
  var resultsList = LocalStorageService.retrieveData();
  $scope.studentsList = [];
  
  // Filter the list for students
  for (var index in resultsList) {
    var currentItem = resultsList[index];
    if (ObjTypeFilterService.isStudent(currentItem)) $scope.studentsList.push(currentItem);
  }
  
  $scope.deleteStudent = function(studentId) {
    LocalStorageService.removeItem("stu_" + studentId);
    $route.reload(); 
  };
}