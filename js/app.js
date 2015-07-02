/*
 *  Define studentApp angular module 
 */
angular
  	.module("studentApp", ["ngRoute"])
	.config(["$routeProvider", setupRoutes]);

// Route configurations
function setupRoutes($routeProvider) {
  $routeProvider
  	.when("/students/new", {
   	templateUrl : "views/addStudent.html",
    	controller: "AddStudentController"
  	})
   .when("/students/:id", {
      templateUrl : "views/viewStudent.html",
      controller : "ViewStudentController"
   })
  	.when("/students/:id/edit", {
      templateUrl : "views/editStudent.html",
      controller : "EditStudentController"   
   })
   .when("/students", {
   	templateUrl : "views/listStudents.html",
      controller : "ListStudentsController"
   })
   .otherwise({
     	redirectTo: "/students"
   });
}