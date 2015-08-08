'use strict';

angular.module('App.controllers', [])
    .controller('MainController', ['$scope', function($scope) {
        var tabs = ['about', 'projects'];
        $scope.main.tabs = tabs;
    }])