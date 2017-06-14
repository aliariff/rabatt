const app = angular.module('rabattApp', ['ngRoute']);

app.service('backend', function ($http) {
  this.get = function (address, data, callback) {
    $http.get(address, data).success((data, status) => {
      if (status === 200) {
        callback(null, data);
      } else {
        callback(new Error(`Error ${status}`));
      }
    }).error(() => {
      callback(new Error('Error No Response'));
    });
  };

  this.post = function (address, data, callback) {
    $http.post(address, data).success((data, status) => {
      if (status === 200) {
        callback(null, data);
      } else {
        callback(new Error(`Error ${status}`));
      }
    }).error(() => {
      callback(new Error('Error No Response'));
    });
  };


  this.put = function (address, data, callback) {
    $http.put(address, data).success((data, status) => {
      if (status === 200) {
        callback(null, data);
      } else {
        callback(new Error(`Error ${status}`));
      }
    }).error(() => {
      callback(new Error('Error No Response'));
    });
  };

  this.delete = function (address, data, callback) {
    $http.delete(address, data).success((data, status) => {
      if (status === 200) {
        callback(null, data);
      } else {
        callback(new Error(`Error ${status}`));
      }
    }).error(() => {
      callback(new Error('Error No Response'));
    });
  };
});