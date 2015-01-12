var apiServerBaseUrl =  "http://localhost:3000";

angular.module('clientApp').constant('Config',
  {
    serverApiUrl:    apiServerBaseUrl + "/api/v1/"
  }
);
