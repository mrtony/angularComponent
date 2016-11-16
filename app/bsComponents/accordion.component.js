(function () {
    'use strict'

    var module = angular
        .module('app');

    var accordionController = function() {
        var model = this;
        var panels = [];

        model.selectPanel = function(panel) {
            for(var i in panels) {
                debugger;
                if (panel === panels[i])
                    panels[i].turnOn();
                else
                    panels[i].turnOff();
            }
        }

        model.addPanel = function(panel) {
            panels.push(panel);

            if (panels.length > 0)
                panels[0].turnOn();
        }
    }

    var accordionPanelController = function() {
        var model = this;
        model.selected = false;

        model.$onInit = function() {
            model.parent.addPanel(model);
        }

        model.turnOn = function() {
            model.selected = true;
        }

        model.turnOff = function() {
            model.selected = false;
        }

        model.select = function() {
            model.parent.selectPanel(model);
        }

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
        require: {
            "parent": "^accordion"
        },
        transclude: true,
        controllerAs: "model",
        controller: accordionPanelController
    });

}())

