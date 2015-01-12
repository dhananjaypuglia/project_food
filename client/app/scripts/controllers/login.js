(function () {
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

LoginController.$inject = ['$scope','userService'];

function LoginController($scope,userService) {
  $scope.login = login;
  function login(){
    console.log("Login");
    userService.create({username: 'a',password:'a'}).$promise.then(function(success){
      console.log(success);
    });
  }
}})();
