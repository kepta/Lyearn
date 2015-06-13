'use strict';

/**
 * @ngdoc function
 * @name lyearnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lyearnApp
 */
angular.module('lyearnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
