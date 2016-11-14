(function () {
    'use strict'

    var module = angular
        .module('bsComponents');
        
    module.component("rating", {
        templateUrl: "../app/bsComponents/rating.component.html",
        bindings: {
            "value": "<"
        },
        transclude: true,
        controllerAs: "model",
        controller: function () {
            var model = this;
            console.log(model.value);

            // var buildEntries = function (value, max) {
            //     var result = [];
            //     for (var i = 1; i <= max; i++) {
            //         result.push(i <= value ? "star" : "star-empty");
            //     }
            //     return result;
            // };

            model.$onChanges = function (changes) {
                //model.entries = buildEntries(model.value, model.max);
            };

            model.$onInit = function () {
                //初始化需要的資料
                model.entries = new Array(model.value);
            };

            model.$onDestroy = function () {
            }
        }
    });

}())

