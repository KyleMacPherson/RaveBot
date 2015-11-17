// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var ravebot = angular.module('thememe', ['ionic', 'ngCordova', 'ui.router', 'ngCookies'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      cache: false,
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })

    .state('setsong', {
      cache: false,
      url: '/',
      templateUrl: 'templates/setsong.html',
      controller: ''
    })

    .state('playtheme', {
      cache: false,
      url: '/',
      templateUrl: 'templates/play.html',
      controller: ''
    })

})
