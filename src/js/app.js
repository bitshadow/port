'use strict';

angular.module('App', ['ui.router', 'ngMaterial', 'App.controllers'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/projects');

        $stateProvider
            .state('projects', {
                url: '/projects',
                templateUrl: 'partials/projects.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact.html'
            });
    });