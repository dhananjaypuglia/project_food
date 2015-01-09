'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', LoginController);

LoginController.$inject = ['$scope,userService'];

function LoginController($scope,userService) {
  $scope.login = login;
  function login(){
    console.log("Loggin");
    userService.query().$promise.then(function(success){
      console.log(success);
    });
  }
}
