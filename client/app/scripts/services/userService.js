(function() {
  'use strict';

  angular.module('clientApp').factory('userService', userService);

  userService.$inject = ['$resource', 'Config'];


  function userService($resource, Config) {

    return $resource(Config.serverApiUrl + 'login', {username: '@id',password: '@password'}, {
      create: {method: 'POST'}
    });

  }
})();
