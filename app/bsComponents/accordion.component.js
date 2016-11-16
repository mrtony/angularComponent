(function () {
    'use strict'

    var module = angular
        .module('app');

    var accordionController = function() {
        var model = this;
    }

    var accordionPanelController = function() {
        var model = this;
        console.log(model.heading);
    }

    module.component("accordion", {
        template: "<div class='panel-group' ng-transclude></div>",
        transclude: true,
        controllerAs: "model",
        controller: accordionController
    });

    module.component("accordionPanel", {
        templateUrl: "../app/bsComponents/accordion-panel.component.html",
        bindings: {
            "heading": "@"
        },
        transclude: true,
        controllerAs: "model",
        controller: accordionPanelController
    });

}())

