'use strict';

var appMain = angular.module('appMain', ['ngRoute', 'LocalStorageModule', 'httpQRequest']);

appMain.constant("appSettings", {
    author: "Dev International",
    authorLink: "http://telerikacademy.com",
    poweredBy: "AngularJs"
});

appMain.config(function ($routeProvider, appSettings) {

    $routeProvider.when("/home", {
        controller: "HomeController",
        templateUrl: "/partials/home/home"
    });

    $routeProvider.when("/login", {
        controller: "LoginController",
        templateUrl: "/partials/account/login"
    });

    $routeProvider.when("/signup", {
        controller: "SignUpController",
        templateUrl: "/partials/account/signup"
    });

    $routeProvider.when("/create", {
        controller: "MakeAdController",
        templateUrl: "/partials/authenticated/createAd"
    });
    $routeProvider.when("/byuser/:id", {
        controller: "AdsByUserController",
        templateUrl: "/partials/ads/byuser"
    });
    $routeProvider.when("/ad/:id", {
        controller: "AdByIdController",
        templateUrl: "/partials/ads/byadid"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});

appMain.run(function (AccountService) {
    AccountService.checkIdentity();
});