'use strict';

angular.module('App.controllers', [])
    .controller('MainController', ['$scope', function($scope) {
            $scope.main.name = 'test';

            var tabs = ['About', 'Projects', 'Resume'];

            $scope.main.tabs = tabs;
        }]);
