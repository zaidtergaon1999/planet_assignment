define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.model$CustomFlagOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Obj", "objVar", "Obj", true, false, OS.DataTypes.DataTypes.Object, function () {
return null;
}, false), 
this.attr("Options", "optionsIn", "Options", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEU_UI_ComponentsModel.CustomFlagOptionsRec());
}, false, ShopperPortalEU_UI_ComponentsModel.CustomFlagOptionsRec), 
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
return new OS.Model.ModelFactory(Model, "ShopperPortalEUUIComponents.CustomFlag");
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "react", "OutSystems/ReactView/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.mvc$controller", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Components.model$CustomFlagOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, React, OSView, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomFlag_mvc_model, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomFlag_mvc_controller, OSWidgets) {
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
        View.displayName = "ShopperPortalEUUIComponents.CustomFlag";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/ShopperPortalEU_UI_Components.customFlag.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomFlag_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomFlag_mvc_controller;
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
style: model.getCachedValue(idService.getId("Element.Style"), function () {
return (("custom-flag-wrapper" + ((!(model.variables.optionsIn.isDisabledAttr)) ? ("") : (" custom-flag-wrapper--disabled"))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
}, function () {
return model.variables.optionsIn.isDisabledAttr;
}, function () {
return model.variables.extendedClassIn;
}),
visible: true,
_idProps: {
service: idService,
name: "Element"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus, model.variables._extendedClassInDataFetchStatus)
}, $if(false, false, this, function () {
return [];
}, function () {
return [];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "ShopperPortalEU_UI_Components.languageResources", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.mvc$debugger", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.mvc$controller.OnReady.InitializeJS", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.mvc$controller.OnParametersChanged.ParametersChangedJS", "ShopperPortalEU_UI_Components.model$CustomFlagOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, ShopperPortalEU_UI_ComponentsLanguageResources, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomFlag_mvc_Debugger, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomFlag_mvc_controller_OnReady_InitializeJS, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomFlag_mvc_controller_OnParametersChanged_ParametersChangedJS) {
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
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
var initializeJSResult = new OS.DataTypes.VariableHolder();
var optionsJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.initializeJSResult = initializeJSResult;
varBag.optionsJSONVar = optionsJSONVar;
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:_91YKqShAkWqGehSr+BfkQ:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.cB_R2FkleEu5Fdc_0a6GKw/ClientActions._91YKqShAkWqGehSr+BfkQ:IJspTELHgM1SSs4_qBE01g", "ShopperPortalEU_UI_Components", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:lUmFIgwwUUGmVIqsi8q_JQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:NQ6vFH1kH0iEslwO64A4+Q", callContext.id);
// JSON Serialize: OptionsJSON
optionsJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsIn, true, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:MjlkKTSnak2sfDe_fV9hFQ", callContext.id);
// Initialize component.
initializeJSResult.value = controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomFlag_mvc_controller_OnReady_InitializeJS, "Initialize", "OnReady", {
Options: OS.DataConversion.JSNodeParamConverter.to(optionsJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Element"), OS.DataTypes.DataTypes.Text),
Obj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.OnReady$initializeJSResult"))();
jsNodeResult.objOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Obj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:KI2tBlHdYE2QTCdm5o7ebw", callContext.id);
// Obj = Initialize.Obj
model.variables.objVar = initializeJSResult.value.objOut;
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:9Zs4Yq2p90GAre4g40NUUg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:_91YKqShAkWqGehSr+BfkQ", callContext.id);
}

};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.OnReady$initializeJSResult", [{
name: "Obj",
attrName: "objOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var optionsJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.optionsJSONVar = optionsJSONVar;
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:8ZH4URT8mEyMoZuhVsg6LQ:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.cB_R2FkleEu5Fdc_0a6GKw/ClientActions.8ZH4URT8mEyMoZuhVsg6LQ:WOgmlo29q_VaH9TBf2NPhQ", "ShopperPortalEU_UI_Components", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:Hs8TeVoPcEOpUlAr+dILYg", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:R07WEXDTgUKa1my8WPV4+w", callContext.id) && ((model.variables.objVar) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:KELdVf8d_k+UUwjdOG2prA", callContext.id);
// JSON Serialize: OptionsJSON
optionsJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsIn, true, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:cRoiiFIlpkaR1n7fcTOByg", callContext.id);
// Parameters change method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomFlag_mvc_controller_OnParametersChanged_ParametersChangedJS, "ParametersChanged", "OnParametersChanged", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object),
Options: OS.DataConversion.JSNodeParamConverter.to(optionsJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:DZKnYU2mAkm+xSO0CT1YHw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:SmOiwLuHs0moEvveJ1zyvg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:8ZH4URT8mEyMoZuhVsg6LQ", callContext.id);
}

};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:7hC2bHqrKEmxvEuPSzIN0Q:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q:g5BtT+X6uN+vFl8t9PMqCQ", "ShopperPortalEU_UI_Components", "ShopperPortalEUUIComponents", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:cB_R2FkleEu5Fdc_0a6GKw:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.cB_R2FkleEu5Fdc_0a6GKw:K00BxoAN45HDd7uFgVLk3w", "ShopperPortalEU_UI_Components", "CustomFlag", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:cB_R2FkleEu5Fdc_0a6GKw", callContext.id);
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:7hC2bHqrKEmxvEuPSzIN0Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/CustomFlag On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/CustomFlag On Parameters Changed");
return controller.onParametersChanged$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.mvc$controller.OnReady.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj = new customFlag($parameters.ElementId,JSON.parse($parameters.Options));
};
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.mvc$controller.OnParametersChanged.ParametersChangedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.parametersChanged(JSON.parse($parameters.Options));
};
});

define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomFlag.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"NQ6vFH1kH0iEslwO64A4+Q": {
getter: function (varBag, idService) {
return varBag.optionsJSONVar.value;
}
},
"MjlkKTSnak2sfDe_fV9hFQ": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"KELdVf8d_k+UUwjdOG2prA": {
getter: function (varBag, idService) {
return varBag.optionsJSONVar.value;
}
},
"cRoiiFIlpkaR1n7fcTOByg": {
getter: function (varBag, idService) {
return varBag.parametersChangedJSResult.value;
}
},
"zIgwLdjac0moAIL1SU0IHA": {
getter: function (varBag, idService) {
return varBag.model.variables.objVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"aawkMZgIY02pSCmCryCA1Q": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsIn;
}
},
"15wQKn88gkCJp6HEJXrirg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jm4Jfrc3OU6OzOmWSf1GOw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Element"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
