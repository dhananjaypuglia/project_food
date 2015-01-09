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

LoginController.$inject = ['$scope'];

function LoginController($scope) {
  $scope.login = login;
  function login(){
    console.log("Loggin");
  }
}
