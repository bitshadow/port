'use strict';

angular.module('App.controllers', [])
    .controller('MainController', ['$scope', function($scope) {
            $scope.main.name = 'test';

            var tabs = ['projects', 'skills', 'contact', 'about'];

            $scope.main.tabs = tabs;
        }]);
