'use strict';

angular.module('App.controllers')
    .controller('AboutController', ['$scope', '$log', function($scope, $log) {
            var contributions = [{
                key: 'Mozilla',
                url: 'https://www.mozilla.org/credits/',
                next: ' '
            }, {
                key: 'Firefox',
                url: 'https://github.com/neonux/mozilla-all/commits/mozilla-central?author=bitshadow',
                next: ', '
            }, {
                key: 'KDE',
                url: 'http://quickgit.kde.org/?p=kdelibs.git&a=search&h=6ae50bc428b8fa8a482c6322764378671b45bd8b&st=committer&s=Jignesh+kakadiya',
                next: ', '
            }, {
                key: 'React JS',
                url: 'http://facebook.github.io/react/acknowledgements.html',
                next: ', '
            }, {
                key: 'Yeoman',
                url: 'https://github.com/yeoman/yeoman-app/commits/master?author=bitshadow',
                next: '.'
            }];

            var contacts = [{
                type: 'gmail',
                icon: 'fa-envelope',
                url: 'mailto:jigneshhk1992@gmail.com'
            },{
                type: 'github',
                icon: 'fa-github-alt',
                url: 'https://github.com/bitshadow'
            },{
                type: 'twitter',
                icon: 'fa-twitter',
                url: 'https://twitter.com/bitshadow'
            },{
                type: 'linkedin',
                icon: 'fa-linkedin',
                url: 'https://in.linkedin.com/pub/jignesh-kakadiya/3a/170/523'
            }];

            var work = {
                name: 'InMobi',
                url: 'https://www.inmobi.com'
            }

            $scope.work = work;
            $scope.$log = $log;
            $scope.contributions = contributions;
            $scope.contacts = contacts;
        }]);
