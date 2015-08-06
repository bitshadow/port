'use strict';

angular.module('App', ['ui.router', 'App.controllers'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/about');

        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'partials/about.html'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'partials/projects.html'
            });
    });