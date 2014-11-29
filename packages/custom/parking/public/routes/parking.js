'use strict';

angular.module('mean.parking').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('parking example page', {
      url: '/parking/example',
      templateUrl: 'parking/views/index.html'
    });
  }
]);
