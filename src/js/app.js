'use strict';

angular.module('App', ['ui.router', 'ngMaterial', 'App.controllers'])
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
            })
            .state('skills', {
                url: '/skills',
                templateUrl: 'partials/skills.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact.html'
            });
    });