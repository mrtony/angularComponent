(function () {
    'use strict'

   var module = angular
        .module('app');

    module.component("appRoot", {
        templateUrl: "../app/app.component.html",
        bindings: {
        },
        controllerAs: "model",
        controller: function () {
            var model = this;

            model.title = "Hello component!";

            model.$onChanges = function (changes) {
                //bindings >, @有發生改變
            };

            model.$onInit = function () {
                //初始化需要的資料
            };

            model.$onDestroy = function () {
            }
        }
    });

}())

