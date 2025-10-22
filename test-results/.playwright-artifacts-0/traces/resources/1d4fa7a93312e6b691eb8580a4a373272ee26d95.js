define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BottomDrawer.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomIcon.mvc$model", "ShopperPortalEU_UI_Components.model$BottomDrawerRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvcModel) {
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
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEU_UI_ComponentsModel.BottomDrawerRec());
}, false, ShopperPortalEU_UI_ComponentsModel.BottomDrawerRec), 
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

if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ShopperPortalEUUIComponents.BottomDrawer");
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BottomDrawer.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "react", "OutSystems/ReactView/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BottomDrawer.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BottomDrawer.mvc$controller", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomIcon.mvc$view", "ShopperPortalEU_UI_Components.model$BottomDrawerRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, React, OSView, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BottomDrawer_mvc_model, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BottomDrawer_mvc_controller, OSWidgets, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view) {
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
        View.displayName = "ShopperPortalEUUIComponents.BottomDrawer";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/ShopperPortalEU_UI_Components.bottomDrawer.js"];
        };
        View.getBlocks = function() {
            return [ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BottomDrawer_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BottomDrawer_mvc_controller;
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
extendedProperties: {
"data-testid": model.variables.optionsIn.testIdAttr
},
style: model.getCachedValue(idService.getId("Element.Style"), function () {
return (("bottom-drawer" + ((!(model.variables.optionsIn.isOpenAttr)) ? ("") : (" bottom-drawer--open"))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
}, function () {
return model.variables.optionsIn.isOpenAttr;
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
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-drawer__main",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-drawer__header",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-testid": model.getCachedValue(idService.getId("lfJdAE4DcEyW71hJztRpJw.data-testid"), function () {
return ((((model.variables.optionsIn.testIdAttr) !== (""))) ? ((model.variables.optionsIn.testIdAttr + "Close")) : (""));
}, function () {
return model.variables.optionsIn.testIdAttr;
})
},
isDefault: false,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ShopperPortalEUUIComponents/BottomDrawer/Button OnClick");
return controller.close$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
style: "bottom-drawer__close",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("wHVSl+2OvU+67PxZQ6uObA.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomIconOptionsRec();
rec.nameAttr = "close";
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
uuid: "4",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "bottom-drawer__content",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "bottom-drawer__overlay",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BottomDrawer.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "ShopperPortalEU_UI_Components.languageResources", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BottomDrawer.mvc$debugger", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BottomDrawer.mvc$controller.OnReady.InitializeJS", "ShopperPortalEU_UI_Components.model$BottomDrawerRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, ShopperPortalEU_UI_ComponentsLanguageResources, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BottomDrawer_mvc_Debugger, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BottomDrawer_mvc_controller_OnReady_InitializeJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
close$Action: function () {
return controller.executeActionInsideJSNode(controller._close$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Close");
}
};
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
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:nI2cBNoA80yGkUURXrjaYw:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.nWlCFPKaIUCZsviMyaUgFw/ClientActions.nI2cBNoA80yGkUURXrjaYw:PzQagn0bE4rRZ4Vi237GIw", "ShopperPortalEU_UI_Components", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:vBJiFe6peUizfD6mIK_MZQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:o28DjM0U3EWrbIlxlMzXwQ", callContext.id);
// JSON Serialize: OptionsJSON
optionsJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsIn, true, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:6wfHCTnzfEGqgzAckeLLXQ", callContext.id);
// Initialize component
initializeJSResult.value = controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BottomDrawer_mvc_controller_OnReady_InitializeJS, "Initialize", "OnReady", {
Options: OS.DataConversion.JSNodeParamConverter.to(optionsJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Element"), OS.DataTypes.DataTypes.Text),
Obj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BottomDrawer.OnReady$initializeJSResult"))();
jsNodeResult.objOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Obj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Close: controller.clientActionProxies.close$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:uP2j+egQOUGCq6gSPGiVFg", callContext.id);
// Obj = Initialize.Obj
model.variables.objVar = initializeJSResult.value.objOut;
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:Fe9NAuoZJESEs2NR_0BwNg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:nI2cBNoA80yGkUURXrjaYw", callContext.id);
}

};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BottomDrawer.OnReady$initializeJSResult", [{
name: "Obj",
attrName: "objOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._close$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Close");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:J7Y3cWVljUW4PZCgq2Rxnw:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.nWlCFPKaIUCZsviMyaUgFw/ClientActions.J7Y3cWVljUW4PZCgq2Rxnw:TQulL8+Fud6AroqmrOrgVg", "ShopperPortalEU_UI_Components", "Close", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:MKeaFpNjAUmkKkX+8OIeSQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:6C4ZyxX4c0S44TN1io9V9g", callContext.id);
// Trigger Event: OnClose
return controller.onClose$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:4MYvu7Mt_UKZnY4fSkQZQA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:J7Y3cWVljUW4PZCgq2Rxnw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:J7Y3cWVljUW4PZCgq2Rxnw", callContext.id);
throw ex;

});
};

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.close$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._close$Action, callContext);

};
Controller.prototype.onClose$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:7hC2bHqrKEmxvEuPSzIN0Q:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q:g5BtT+X6uN+vFl8t9PMqCQ", "ShopperPortalEU_UI_Components", "ShopperPortalEUUIComponents", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:nWlCFPKaIUCZsviMyaUgFw:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.nWlCFPKaIUCZsviMyaUgFw:kyvWasSxL6LN661PzZ83Iw", "ShopperPortalEU_UI_Components", "BottomDrawer", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:nWlCFPKaIUCZsviMyaUgFw", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/BottomDrawer On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BottomDrawer.mvc$controller.OnReady.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj = new bottomDrawer($parameters.ElementId,JSON.parse($parameters.Options),{
    close:$actions.Close
});
};
});

define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BottomDrawer.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"o28DjM0U3EWrbIlxlMzXwQ": {
getter: function (varBag, idService) {
return varBag.optionsJSONVar.value;
}
},
"6wfHCTnzfEGqgzAckeLLXQ": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"JU4T4r_FzU+kxhCs7tVs+g": {
getter: function (varBag, idService) {
return varBag.model.variables.objVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"EKpKua4d5E2lruF82w1dzQ": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsIn;
}
},
"27stDAU8tUKGq7m5hU72Sg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6ZQVzTXXTUiXKuepTO4ICg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Element"));
})(varBag.model, idService);
}
},
"VFautQQ9S0y03rvsCsLPaQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
