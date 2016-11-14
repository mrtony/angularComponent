(function () {
    'use strict'

   var module = angular
        .module('todos');

    module.component("todoItem", {
        templateUrl: "../app/todos/todo-item.component.html",
        bindings: {
            todo: '<'
        },
        controllerAs: "model",
        controller: function () {
            var model = this;

            model.setRating = function(todo, newRating) {
                todo.rating = newRating;
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

