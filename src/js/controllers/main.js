'use strict';

angular.module('App.controllers', [])
    .controller('MainController', ['$scope', '$location', function($scope, $location) {
        var tabs = ['about', 'projects'];

        var selectedIndex = tabs.forEach(function(tab, i) {
            if($location.url() === '/' + tab) {
                $scope.selectedIndex = i;
            }
        });

        $scope.main.tabs = tabs;
    }])