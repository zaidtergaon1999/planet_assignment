define("ShopperPortalEU.Common.DataLoading.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.FullHeightContent.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomIcon.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomLoading.mvc$model", "ShopperPortalEU_UI_Components.model$FullHeightContentOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$FullHeightContentTopOptionsRec", "ShopperPortalEU_UI_Components.model$FullHeightContentBottomOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLoadingOptionsRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_FullHeightContent_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLoading_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("IsDataFetched", "isDataFetchedIn", "IsDataFetched", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_isDataFetchedInDataFetchStatus", "_isDataFetchedInDataFetchStatus", "_isDataFetchedInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HasError", "hasErrorIn", "HasError", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_hasErrorInDataFetchStatus", "_hasErrorInDataFetchStatus", "_hasErrorInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("ErrorMessage", "errorMessageIn", "ErrorMessage", true, false, OS.DataTypes.DataTypes.Text, function () {
return "Sorry, we couldn\'t get your data.";
}, false), 
this.attr("_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", "_errorMessageInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = ((ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_FullHeightContent_mvcModel.hasValidationWidgets || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLoading_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("IsDataFetched" in inputs) {
this.variables.isDataFetchedIn = inputs.IsDataFetched;
if("_isDataFetchedInDataFetchStatus" in inputs) {
this.variables._isDataFetchedInDataFetchStatus = inputs._isDataFetchedInDataFetchStatus;
}

}

if("HasError" in inputs) {
this.variables.hasErrorIn = inputs.HasError;
if("_hasErrorInDataFetchStatus" in inputs) {
this.variables._hasErrorInDataFetchStatus = inputs._hasErrorInDataFetchStatus;
}

}

if("ErrorMessage" in inputs) {
this.variables.errorMessageIn = inputs.ErrorMessage;
if("_errorMessageInDataFetchStatus" in inputs) {
this.variables._errorMessageInDataFetchStatus = inputs._errorMessageInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Common.DataLoading");
});
define("ShopperPortalEU.Common.DataLoading.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Components.model", "react", "OutSystems/ReactView/Main", "ShopperPortalEU.Common.DataLoading.mvc$model", "ShopperPortalEU.Common.DataLoading.mvc$controller", "ShopperPortalEU.clientVariables", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.FullHeightContent.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomIcon.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomLoading.mvc$view", "ShopperPortalEU_UI_Components.model$FullHeightContentOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$FullHeightContentTopOptionsRec", "ShopperPortalEU_UI_Components.model$FullHeightContentBottomOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLoadingOptionsRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ComponentsModel, React, OSView, ShopperPortalEU_Common_DataLoading_mvc_model, ShopperPortalEU_Common_DataLoading_mvc_controller, ShopperPortalEUClientVariables, OSWidgets, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_FullHeightContent_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLoading_mvc_view) {
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
        View.displayName = "Common.DataLoading";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_FullHeightContent_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLoading_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_Common_DataLoading_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_Common_DataLoading_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if(model.variables.isDataFetchedIn, false, this, function () {
return [$if(!(model.variables.hasErrorIn), false, this, function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "full-height ph",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_FullHeightContent_mvc_view, {
inputs: {
ExtendedClass: "text-align-center",
Options: model.getCachedValue(idService.getId("GARBM+F_bUS9YcNZ72ikHA.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.FullHeightContentOptionsRec();
rec.topAttr = function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.FullHeightContentTopOptionsRec();
rec.verticalAlignmentAttr = ShopperPortalEUModel.staticEntities.fullHeightContentAlignment.center;
rec.horizontalAlignmentAttr = ShopperPortalEUModel.staticEntities.fullHeightContentAlignment.center;
return rec;
}();
rec.spacingAttr = ShopperPortalEUModel.staticEntities.spacing.none;
return rec;
}();
})
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
uuid: "1",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
top: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("5PhkaGoAIUqYyIdWGumwXg.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomIconOptionsRec();
rec.nameAttr = "error";
rec.sizeAttr = ShopperPortalEUModel.staticEntities.customIconSize.large;
rec.colorAttr = "var(--color-error-70)";
rec.isFilledAttr = true;
return rec;
}();
})
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
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-05 heading5 text-primary-black",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: model.variables.errorMessageIn,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._errorMessageInDataFetchStatus)
}))];
}),
bottom: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables._errorMessageInDataFetchStatus), asPrimitiveValue(model.variables.errorMessageIn)]
})];
})];
}, function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLoading_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("x4b70PbvvkejkASaj9bgqg.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomLoadingOptionsRec();
rec.showAttr = true;
rec.textAttr = "Loading...";
rec.isFullHeightAttr = true;
return rec;
}();
})
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
uuid: "5",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU.Common.DataLoading.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU.languageResources", "ShopperPortalEU.clientVariables", "ShopperPortalEU.Common.DataLoading.mvc$debugger", "ShopperPortalEU_UI_Components.model$FullHeightContentOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$FullHeightContentTopOptionsRec", "ShopperPortalEU_UI_Components.model$FullHeightContentBottomOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLoadingOptionsRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEULanguageResources, ShopperPortalEUClientVariables, ShopperPortalEU_Common_DataLoading_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {};
this.dataFetchDependentsGraph = {};
this.shouldSendClientVarsToDataSources = true;
}
// Server Actions

// Aggregates and Data Actions

Controller.prototype.dataFetchActionNames = [];
// Client Actions


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:B4kRGvrnOEmQonA8ir4Pyg:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg:SzbSE76vSJUYiPdzujZAFw", "ShopperPortalEU", "Common", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:WrixeJhOLEiyTrDUuv+oKg:/NRWebFlows.B4kRGvrnOEmQonA8ir4Pyg/NodesShownInESpaceTree.WrixeJhOLEiyTrDUuv+oKg:2m9rsF40tHmYxMHGdfjREw", "ShopperPortalEU", "DataLoading", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:WrixeJhOLEiyTrDUuv+oKg", callContext.id);
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:B4kRGvrnOEmQonA8ir4Pyg", callContext.id);
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
return ShopperPortalEUController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, ShopperPortalEULanguageResources);
});

define("ShopperPortalEU.Common.DataLoading.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"BHWCmKCbM0WifKY5EaRuhQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isDataFetchedIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"7YuI63iIM0iSHL7pQ5r_vw": {
getter: function (varBag, idService) {
return varBag.model.variables.hasErrorIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"fuH03eHNYEu8vX4cIFAR+w": {
getter: function (varBag, idService) {
return varBag.model.variables.errorMessageIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FJGHGiDvakubY2eMVvilsQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"2DOAXlnSnkGRoCUGL_rDew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"xkCST4xHKk6gncuUqexWeQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
