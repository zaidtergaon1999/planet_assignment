define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Theme.model$LayoutBlankOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ThemeModel) {
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
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEU_UI_ThemeModel.LayoutBlankOptionsRec());
}, false, ShopperPortalEU_UI_ThemeModel.LayoutBlankOptionsRec), 
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

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ShopperPortalEUUIThemeLayouts.LayoutBlank");
});
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Theme.controller", "react", "OutSystems/ReactView/Main", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$model", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$controller", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Theme.model$LayoutBlankOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ThemeController, React, OSView, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutBlank_mvc_model, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutBlank_mvc_controller, OSWidgets) {
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
        View.displayName = "ShopperPortalEUUIThemeLayouts.LayoutBlank";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/ShopperPortalEU_UI_Theme.browserReport.js", "scripts/ShopperPortalEU_UI_Theme.customMessage.js", "scripts/ShopperPortalEU_UI_Theme.libcountry.js", "scripts/ShopperPortalEU_UI_Theme.layout.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutBlank_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutBlank_mvc_controller;
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
style: model.getCachedValue(idService.getId("Layout.Style"), function () {
return (("layout layout--blank" + ((!(model.variables.optionsIn.noPaddingAttr)) ? ("") : (" layout--blank-no-padding"))) + ((!(model.variables.optionsIn.fullWidthAttr)) ? ("") : (" layout--blank-full-width")));
}, function () {
return model.variables.optionsIn.noPaddingAttr;
}, function () {
return model.variables.optionsIn.fullWidthAttr;
}),
visible: true,
_idProps: {
service: idService,
name: "Layout"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "main-content",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Theme.controller", "ShopperPortalEU_UI_Theme.languageResources", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$debugger", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$controller.OnDestroy.DestroyJS", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$controller.OnReady.ReadyJS", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$controller.OnInitialize.InitializeJS", "ShopperPortalEU_UI_Theme.model$LayoutBlankOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ThemeController, ShopperPortalEU_UI_ThemeLanguageResources, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutBlank_mvc_Debugger, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutBlank_mvc_controller_OnDestroy_DestroyJS, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutBlank_mvc_controller_OnReady_ReadyJS, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutBlank_mvc_controller_OnInitialize_InitializeJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
orientationChange$Action: function (orientationIn) {
orientationIn = (orientationIn === undefined) ? "" : orientationIn;
return controller.executeActionInsideJSNode(controller._orientationChange$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(orientationIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "OrientationChange");
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
Controller.prototype._onDestroy$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnDestroy");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:Hu8pJ3sHvkCg7JwBV8jApQ:/NRWebFlows.pdL08HV3tkuaoCVu1D0yRA/NodesShownInESpaceTree.7yrxM8JE0UOU25F5bJNMqQ/ClientActions.Hu8pJ3sHvkCg7JwBV8jApQ:P82hZi7J_ArR9_2OMLOBeg", "ShopperPortalEU_UI_Theme", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:Bwh5Jc0YhE2RfMiN3j254g", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:7u9El8gNRk668MSIWunfpA", callContext.id) && ((model.variables.objVar) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:oBk3HfOSpUW_VINVyQTPtQ", callContext.id);
// Destroy method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutBlank_mvc_controller_OnDestroy_DestroyJS, "Destroy", "OnDestroy", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:LKUmcLnBLEGNXzdhEFeonA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:pZ2F0xo1lUi3_izwlcubNw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:Hu8pJ3sHvkCg7JwBV8jApQ", callContext.id);
}

};
Controller.prototype._orientationChange$Action = function (orientationIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OrientationChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.OrientationChange$vars"))());
vars.value.orientationInLocal = orientationIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:d3WoXR+w9Ueo4+DwiRaiBA:/NRWebFlows.pdL08HV3tkuaoCVu1D0yRA/NodesShownInESpaceTree.7yrxM8JE0UOU25F5bJNMqQ/ClientActions.d3WoXR+w9Ueo4+DwiRaiBA:o4Kn0Q+Fml3R8I_w84wQcQ", "ShopperPortalEU_UI_Theme", "OrientationChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:GR2RNgKtqUqyVF1YUVzOHA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:HvYi3M1ztkWpfOsaRAiBvQ", callContext.id);
// Trigger Event: OnOrientationChange
return controller.onOrientationChange$Action(vars.value.orientationInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:6rBrjQ95JEuJj+sMm53WJg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:d3WoXR+w9Ueo4+DwiRaiBA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:d3WoXR+w9Ueo4+DwiRaiBA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.OrientationChange$vars", [{
name: "Orientation",
attrName: "orientationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._onReady$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnReady");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:w_4sXiQsekOF4jiUUnrAuQ:/NRWebFlows.pdL08HV3tkuaoCVu1D0yRA/NodesShownInESpaceTree.7yrxM8JE0UOU25F5bJNMqQ/ClientActions.w_4sXiQsekOF4jiUUnrAuQ:BmTZ04qvqXF_JcXWWYNn8A", "ShopperPortalEU_UI_Theme", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:rbJ1x_zgvEOdGaAk2BvdlQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:m5mXyAu0SEqrxeGp1CpxVg", callContext.id) && ((model.variables.objVar) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:hSHs3dVgSk+IXZLGiTjvrA", callContext.id);
// Ready method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutBlank_mvc_controller_OnReady_ReadyJS, "Ready", "OnReady", {
ElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Layout"), OS.DataTypes.DataTypes.Text),
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:cb6Rl242Ik+rgJBIw+gfXQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:LRzDsOodFUGLhfxAnVMKNQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:w_4sXiQsekOF4jiUUnrAuQ", callContext.id);
}

};
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
var initializeJSResult = new OS.DataTypes.VariableHolder();
var optionsJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.initializeJSResult = initializeJSResult;
varBag.optionsJSONVar = optionsJSONVar;
try {OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:y8dju6gUpUW+8nLovXR7EQ:/NRWebFlows.pdL08HV3tkuaoCVu1D0yRA/NodesShownInESpaceTree.7yrxM8JE0UOU25F5bJNMqQ/ClientActions.y8dju6gUpUW+8nLovXR7EQ:gqvZbm2an1BDMvNbIvmPAg", "ShopperPortalEU_UI_Theme", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:CoFhR2RV+0u_c6fqfMiDVw", callContext.id);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:KJTSqEOBSECSJVfRDqO+ZQ", callContext.id);
// JSON Serialize: OptionsJSON
optionsJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsIn, true, false);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:P4X98YUUGEeCQtaKHP5yYg", callContext.id);
// Initialize layout.
initializeJSResult.value = controller.safeExecuteJSNode(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutBlank_mvc_controller_OnInitialize_InitializeJS, "Initialize", "OnInitialize", {
Options: OS.DataConversion.JSNodeParamConverter.to(optionsJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
Obj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.OnInitialize$initializeJSResult"))();
jsNodeResult.objOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Obj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OrientationChange: controller.clientActionProxies.orientationChange$Action
}, {});
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:yn51oXKMakuOiM_o2uGfaQ", callContext.id);
// Obj = Initialize.Obj
model.variables.objVar = initializeJSResult.value.objOut;
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:R1E8wtV5w0WzO+RhOnGSAQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:y8dju6gUpUW+8nLovXR7EQ", callContext.id);
}

};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.OnInitialize$initializeJSResult", [{
name: "Obj",
attrName: "objOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.orientationChange$Action = function (orientationIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._orientationChange$Action, callContext, orientationIn);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.onOrientationChange$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:pdL08HV3tkuaoCVu1D0yRA:/NRWebFlows.pdL08HV3tkuaoCVu1D0yRA:+wiupQuhUhpXjyoGXv6j4w", "ShopperPortalEU_UI_Theme", "ShopperPortalEUUIThemeLayouts", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:7yrxM8JE0UOU25F5bJNMqQ:/NRWebFlows.pdL08HV3tkuaoCVu1D0yRA/NodesShownInESpaceTree.7yrxM8JE0UOU25F5bJNMqQ:05qvEhDSMrZScTf+md_2tw", "ShopperPortalEU_UI_Theme", "LayoutBlank", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:7yrxM8JE0UOU25F5bJNMqQ", callContext.id);
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:pdL08HV3tkuaoCVu1D0yRA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIThemeLayouts/LayoutBlank On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onReadyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIThemeLayouts/LayoutBlank On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIThemeLayouts/LayoutBlank On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$controller.OnDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.destroy();
};
});
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$controller.OnReady.ReadyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.ready($parameters.ElementId);
};
});
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$controller.OnInitialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj = new layout(JSON.parse($parameters.Options),{
    orientationChange:$actions.OrientationChange
});
};
});

define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutBlank.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"oBk3HfOSpUW_VINVyQTPtQ": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"VPg6UzZ+dECyaWhy82AJcQ": {
getter: function (varBag, idService) {
return varBag.vars.value.orientationInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hSHs3dVgSk+IXZLGiTjvrA": {
getter: function (varBag, idService) {
return varBag.readyJSResult.value;
}
},
"KJTSqEOBSECSJVfRDqO+ZQ": {
getter: function (varBag, idService) {
return varBag.optionsJSONVar.value;
}
},
"P4X98YUUGEeCQtaKHP5yYg": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"lWRutHCgpEGeib5bn1oNIw": {
getter: function (varBag, idService) {
return varBag.model.variables.objVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"h8XY3sQh_EmU11NmBY1fmQ": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsIn;
}
},
"4q_5pELEFkOXS_PrftXZtw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Layout"));
})(varBag.model, idService);
}
},
"OQaFD2EAykGdNREDu3Lr6w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
