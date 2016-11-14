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

            model.todos = [
                {completed: false,title: 'first todo title', description: 'first todo description',responsible: 'first todo responsible', rating:3},
                {completed: false, title: 'second todo title', description: 'second todo description',responsible: 'second todo responsible', rating: 4}
            ];

            model.changeTodoTitle = function() {
                model.todo.title = 'change to new title' + new Date();
            }
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

