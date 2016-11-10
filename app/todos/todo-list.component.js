(function () {
    'use strict'

   var module = angular
        .module('todos');

    module.component("todoList", {
        templateUrl: "../app/todos/todo-list.component.html",
        bindings: {
            todos: '<'
        },
        controllerAs: "model",
        controller: function () {
            var model = this;

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

