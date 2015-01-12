(function () {
  'use strict';

  angular.module('clientApp').factory('userService', userService);

  userService.$inject = ['$resource', 'Config'];

  function userService($resource, Config) {

    return $resource(Config.serverApiUrl + 'user/login',{}, {
      create: {method: 'POST',params:{username: '@id', password: '@password'}}
    });

  }
})();
