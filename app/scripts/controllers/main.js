'use strict';

/**
 * @ngdoc function
 * @name lyearnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lyearnApp
 */
angular.module('lyearnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
