'use strict';

angular.module('App.controllers', [])
    .controller('MainController', ['$scope', function($scope) {
            $scope.main.name = 'test';

            var tabs = ['about', 'projects', 'resume'];

            $scope.main.tabs = tabs;
        }]);
