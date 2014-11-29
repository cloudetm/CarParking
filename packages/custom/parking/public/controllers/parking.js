'use strict';

angular.module('mean.parking').controller('ParkingController', ['$scope', 'Global', 'Parking',
  function($scope, Global, Parking) {
    $scope.global = Global;
    $scope.package = {
      name: 'parking'
    };
  }
]);
