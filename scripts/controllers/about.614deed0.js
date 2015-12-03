'use strict';

/**
 * @ngdoc function
 * @name yoAngularVirginApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoAngularVirginApp
 */
angular.module('yoAngularVirginApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
