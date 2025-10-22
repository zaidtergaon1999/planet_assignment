define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.MenuItem.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomIcon.mvc$model", "ShopperPortalEU_UI_Theme.model$MenuItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Theme.referencesHealth", "ShopperPortalEU_UI_Theme.referencesHealth$ShopperPortalEU_UI_Components"], function (OutSystems, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Options", "optionsIn", "Options", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEU_UI_ThemeModel.MenuItemOptionsRec());
}, false, ShopperPortalEU_UI_ThemeModel.MenuItemOptionsRec), 
this.attr("_optionsInDataFetchStatus", "_optionsInDataFetchStatus", "_optionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = undefined;
Object.defineProperty(Model, "hasValidationWidgets", {
enumerable: true,
configurable: true,
get: function () {
if((Model._hasValidationWidgetsValue === undefined)) {
Model._hasValidationWidgetsValue = ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("Options" in inputs) {
this.variables.optionsIn = inputs.Options;
if("_optionsInDataFetchStatus" in inputs) {
this.variables._optionsInDataFetchStatus = inputs._optionsInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ShopperPortalEUUIThemeLayoutsComponents.MenuItem");
});
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.MenuItem.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Theme.controller", "ShopperPortalEU_UI_Components.model", "react", "OutSystems/ReactView/Main", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.MenuItem.mvc$model", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.MenuItem.mvc$controller", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomIcon.mvc$view", "ShopperPortalEU_UI_Theme.model$MenuItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Theme.referencesHealth", "ShopperPortalEU_UI_Theme.referencesHealth$ShopperPortalEU_UI_Components"], function (OutSystems, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ThemeController, ShopperPortalEU_UI_ComponentsModel, React, OSView, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_model, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_controller, OSWidgets, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view) {
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
        View.displayName = "ShopperPortalEUUIThemeLayoutsComponents.MenuItem";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("EVTGbqjkDkKhoqQhRBNRaQ.Style"), function () {
return ("menu__item" + ((!(model.variables.optionsIn.iconAttr.rightAlignedAttr)) ? ("") : (" menu__item--icon-right")));
}, function () {
return model.variables.optionsIn.iconAttr.rightAlignedAttr;
}),
visible: true,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "menu__item-icon",
visible: ((model.variables.optionsIn.iconAttr.nameAttr) !== ("")),
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
visible_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("JoREjZSZlEasZIDxe4+1Tw.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomIconOptionsRec();
rec.nameAttr = model.variables.optionsIn.iconAttr.nameAttr;
rec.familyAttr = model.variables.optionsIn.iconAttr.familyAttr;
rec.sizeAttr = OS.BuiltinFunctions.nullTextIdentifier();
rec.isFilledAttr = model.variables.optionsIn.iconAttr.isFilledAttr;
return rec;
}();
}, function () {
return model.variables.optionsIn.iconAttr.nameAttr;
}, function () {
return model.variables.optionsIn.iconAttr.familyAttr;
}, function () {
return model.variables.optionsIn.iconAttr.isFilledAttr;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "2",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.label,
style: "menu__item-label",
_idProps: {
service: idService,
name: "Label"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.right,
style: "menu__item-right ph",
_idProps: {
service: idService,
name: "Right"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.MenuItem.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Theme.controller", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Theme.languageResources", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.MenuItem.mvc$debugger", "ShopperPortalEU_UI_Theme.model$MenuItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Theme.referencesHealth", "ShopperPortalEU_UI_Theme.referencesHealth$ShopperPortalEU_UI_Components"], function (OutSystems, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ThemeController, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ThemeLanguageResources, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_Debugger) {
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
OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:uRd0Q1laQ0yzNZQMUt7Aug:/NRWebFlows.uRd0Q1laQ0yzNZQMUt7Aug:AOdtJWIZ_kUN4hGD9hTAnA", "ShopperPortalEU_UI_Theme", "ShopperPortalEUUIThemeLayoutsComponents", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:QAAmUg5zS0OGz6P32ssQwQ:/NRWebFlows.uRd0Q1laQ0yzNZQMUt7Aug/NodesShownInESpaceTree.QAAmUg5zS0OGz6P32ssQwQ:VIfKzi6Wkr+GxZTtsnRSEA", "ShopperPortalEU_UI_Theme", "MenuItem", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:QAAmUg5zS0OGz6P32ssQwQ", callContext.id);
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:uRd0Q1laQ0yzNZQMUt7Aug", callContext.id);
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
return ShopperPortalEU_UI_ThemeController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, ShopperPortalEU_UI_ThemeLanguageResources);
});

define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.MenuItem.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"SYs2xqbFdUqUKN1GCc4eKw": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsIn;
}
},
"PnJS8tagw0yrYu4+H1NeVQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"cdFyq8eYyk+AHQAPOPDSEg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
