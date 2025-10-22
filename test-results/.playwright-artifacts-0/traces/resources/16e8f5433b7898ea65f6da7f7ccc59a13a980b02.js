define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButtonGroup.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.model$CustomButtonGroupOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Options", "optionsIn", "Options", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEU_UI_ComponentsModel.CustomButtonGroupOptionsRec());
}, false, ShopperPortalEU_UI_ComponentsModel.CustomButtonGroupOptionsRec), 
this.attr("_optionsInDataFetchStatus", "_optionsInDataFetchStatus", "_optionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false)
].concat(_super.attributesToDeclare.call(this));
};
VariablesRecord.init();
return VariablesRecord;
})(OS.DataTypes.GenericRecord);
var WidgetsRecord = (function (_super) {
__extends(WidgetsRecord, _super);
function WidgetsRecord() {
_super.apply(this, arguments);
}
WidgetsRecord.getWidgetsType = function () {
return {};
};

return WidgetsRecord;
})(OS.Model.BaseWidgetRecordMap);
var Model = (function (_super) {
__extends(Model, _super);
function Model() {
_super.apply(this, arguments);
}
Model.getVariablesRecordConstructor = function () {
return VariablesRecord;
};
Model.getWidgetsRecordConstructor = function () {
return WidgetsRecord;
};
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
return false;
}
});

Model.prototype.setInputs = function (inputs) {
if("Options" in inputs) {
this.variables.optionsIn = inputs.Options;
if("_optionsInDataFetchStatus" in inputs) {
this.variables._optionsInDataFetchStatus = inputs._optionsInDataFetchStatus;
}

}

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ShopperPortalEUUIComponents.CustomButtonGroup");
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButtonGroup.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "react", "OutSystems/ReactView/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButtonGroup.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButtonGroup.mvc$controller", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Components.model$CustomButtonGroupOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, React, OSView, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonGroup_mvc_model, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonGroup_mvc_controller, OSWidgets) {
    var OS = OutSystems.Internal;
var PlaceholderContent = OSView.Widget.PlaceholderContent;
var IteratorPlaceholderContent = OSView.Widget.IteratorPlaceholderContent;


    var View = (function (_super) {
        __extends(View,_super);
        function View() {
            var thisIsInstanceOfSuper = this instanceof _super;
            if (thisIsInstanceOfSuper == false) {
                return;
            }

            try {
                this.initialize.apply(this, arguments);
            } catch (error) {
                View.handleError(error);
                throw error;
            }
        }
        View.prototype.initialize = function() {
            _super.apply(this, arguments);
        };
        View.displayName = "ShopperPortalEUUIComponents.CustomButtonGroup";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonGroup_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonGroup_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "";
            },
            enumerable: true,
            configurable: true
        });
        View.prototype.internalRender = function() {
            var model = this.model;
            var controller = this.controller;
            var idService = this.idService;
            var validationService = controller.validationService;
            var widgetsRecordProvider = this.widgetsRecordProvider;
            var callContext = controller.callContext();
            var $if = View.ifWidget;
            var $text = View.textWidget;
            var asPrimitiveValue = View.asPrimitiveValue;
            var getTranslation = View.getTranslation;
            var _this = this;

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.buttonGroup,
style: model.getCachedValue(idService.getId("ButtonGroup.Style"), function () {
return (("custom-button-group" + (((model.variables.optionsIn.orientationAttr === OS.BuiltinFunctions.nullTextIdentifier())) ? ("") : ((" custom-button-group--" + model.variables.optionsIn.orientationAttr)))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
}, function () {
return model.variables.optionsIn.orientationAttr;
}, function () {
return model.variables.extendedClassIn;
}),
_idProps: {
service: idService,
name: "ButtonGroup"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButtonGroup.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "ShopperPortalEU_UI_Components.languageResources", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButtonGroup.mvc$debugger", "ShopperPortalEU_UI_Components.model$CustomButtonGroupOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, ShopperPortalEU_UI_ComponentsLanguageResources, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonGroup_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:7hC2bHqrKEmxvEuPSzIN0Q:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q:g5BtT+X6uN+vFl8t9PMqCQ", "ShopperPortalEU_UI_Components", "ShopperPortalEUUIComponents", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:ESx53DEFpkCckwuIVlsjCg:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.ESx53DEFpkCckwuIVlsjCg:mf8HTB2xlahYqTUCsJBQ8g", "ShopperPortalEU_UI_Components", "CustomButtonGroup", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:ESx53DEFpkCckwuIVlsjCg", callContext.id);
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:7hC2bHqrKEmxvEuPSzIN0Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = null;
Controller.prototype.handleError = function (ex) {
return controller.handleError(ex);
};
Controller.checkPermissions = function () {
};
Controller.prototype.getDefaultTimeout = function () {
return ShopperPortalEU_UI_ComponentsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, ShopperPortalEU_UI_ComponentsLanguageResources);
});

define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButtonGroup.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"OhD7ijHqWE2vNmU_WCPk9Q": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsIn;
}
},
"LMHJxqQ3S02zv8Gj2arkMg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"dBuqFL0xvEmmLc9l7+p6XA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ButtonGroup"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
