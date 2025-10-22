define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.HeaderSteps.mvc$model", "ShopperPortalEU_UI_Theme.model$LayoutDetailOptionsRec", "ShopperPortalEU_UI_Theme.model$HeaderStepsOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderSteps_mvcModel) {
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
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEU_UI_ThemeModel.LayoutDetailOptionsRec());
}, false, ShopperPortalEU_UI_ThemeModel.LayoutDetailOptionsRec), 
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
Model._hasValidationWidgetsValue = ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderSteps_mvcModel.hasValidationWidgets;
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
return new OS.Model.ModelFactory(Model, "ShopperPortalEUUIThemeLayouts.LayoutDetail");
});
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Theme.controller", "react", "OutSystems/ReactView/Main", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$model", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$controller", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.HeaderSteps.mvc$view", "ShopperPortalEU_UI_Theme.model$LayoutDetailOptionsRec", "ShopperPortalEU_UI_Theme.model$HeaderStepsOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ThemeController, React, OSView, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_model, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_controller, OSWidgets, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderSteps_mvc_view) {
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
        View.displayName = "ShopperPortalEUUIThemeLayouts.LayoutDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/ShopperPortalEU_UI_Theme.browserReport.js", "scripts/ShopperPortalEU_UI_Theme.customMessage.js", "scripts/ShopperPortalEU_UI_Theme.libcountry.js", "scripts/ShopperPortalEU_UI_Theme.layout.js"];
        };
        View.getBlocks = function() {
            return [ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderSteps_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_controller;
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
return (("layout layout--detail" + ((!(model.variables.optionsIn.noPaddingAttr)) ? ("") : (" layout--detail-no-padding"))) + (((model.variables.optionsIn.bannerAttr === OS.BuiltinFunctions.nullTextIdentifier())) ? ("") : ((" layout--detail-banner layout--detail-banner-" + model.variables.optionsIn.bannerAttr))));
}, function () {
return model.variables.optionsIn.noPaddingAttr;
}, function () {
return model.variables.optionsIn.bannerAttr;
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
style: "main",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "banner",
className: "header"
},
tag: "header",
_idProps: {
service: idService,
name: "Header"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-top",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "header-content",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerLeft,
style: "header-left",
_idProps: {
service: idService,
name: "HeaderLeft"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerCenter,
style: "header-center",
_idProps: {
service: idService,
name: "HeaderCenter"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerRight,
style: "header-right",
_idProps: {
service: idService,
name: "HeaderRight"
},
_widgetRecordProvider: widgetsRecordProvider
}))), $if(false, false, this, function () {
return [];
}, function () {
return [$if((model.variables.optionsIn.headerStepsAttr.stepsAttr > 0), false, this, function () {
return [React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderSteps_mvc_view, {
inputs: {
Options: model.variables.optionsIn.headerStepsAttr,
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
uuid: "8",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}, function () {
return [];
})];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "content",
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
role: "main"
},
style: "main-content",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "content-middle",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
}))), React.createElement(OSWidgets.AdvancedHtml, {
extendedProperties: {
role: "contentinfo",
className: "content-bottom"
},
tag: "footer",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.bottom,
style: "footer ph",
_idProps: {
service: idService,
name: "Bottom"
},
_widgetRecordProvider: widgetsRecordProvider
})))));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Theme.controller", "ShopperPortalEU_UI_Theme.languageResources", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$debugger", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$controller.OnReady.ReadyJS", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$controller.OnDestroy.DestroyJS", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$controller.OnInitialize.InitializeJS", "ShopperPortalEU_UI_Theme.model$LayoutDetailOptionsRec", "ShopperPortalEU_UI_Theme.model$HeaderStepsOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ThemeController, ShopperPortalEU_UI_ThemeLanguageResources, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_Debugger, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_controller_OnReady_ReadyJS, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_controller_OnDestroy_DestroyJS, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_controller_OnInitialize_InitializeJS) {
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
try {OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:E53iULvih0qQu85Z5mBCiQ:/NRWebFlows.pdL08HV3tkuaoCVu1D0yRA/NodesShownInESpaceTree.UhxhnJkUQ0OBz5UwnvMPAA/ClientActions.E53iULvih0qQu85Z5mBCiQ:LQK3WA67tJNPmClF2+rnag", "ShopperPortalEU_UI_Theme", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:55itN+hHb0WFEzQVzv3+zQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:Rnm3045nPEq+3NPA60Aznw", callContext.id) && ((model.variables.objVar) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:NTnhNnTKzUmHPjHncu6RNQ", callContext.id);
// Ready method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_controller_OnReady_ReadyJS, "Ready", "OnReady", {
ElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Layout"), OS.DataTypes.DataTypes.Text),
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:sjN5Hp8tZESo78tDRt4uJQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:t2dPmTgXj0OLvNHNJ6YcWw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:E53iULvih0qQu85Z5mBCiQ", callContext.id);
}

};
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
try {OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:P6kDU9WATEeVhastCqCWPQ:/NRWebFlows.pdL08HV3tkuaoCVu1D0yRA/NodesShownInESpaceTree.UhxhnJkUQ0OBz5UwnvMPAA/ClientActions.P6kDU9WATEeVhastCqCWPQ:e51LMPGJ0aFxZG2rY21W_w", "ShopperPortalEU_UI_Theme", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:vLywHb7z00a3KE2fEZXJgw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:nnX+1SGptkqbo35h3oPvXA", callContext.id) && ((model.variables.objVar) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:V0mZChXsUEK0safpGnKYrw", callContext.id);
// Destroy method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_controller_OnDestroy_DestroyJS, "Destroy", "OnDestroy", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:J+hoyqMmikaNB4RMhVoLIg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:pddBDTfBw0WVjKo8ZbOynw", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:P6kDU9WATEeVhastCqCWPQ", callContext.id);
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
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.OrientationChange$vars"))());
vars.value.orientationInLocal = orientationIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:F9lwawGkm0+T42S9T51SZg:/NRWebFlows.pdL08HV3tkuaoCVu1D0yRA/NodesShownInESpaceTree.UhxhnJkUQ0OBz5UwnvMPAA/ClientActions.F9lwawGkm0+T42S9T51SZg:RgjoZceENBG4GOlM+wa8QQ", "ShopperPortalEU_UI_Theme", "OrientationChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:KbuBcpAva06DV_e0+466CQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:f3DJEUFV+02Gk3bZpylM_g", callContext.id);
// Trigger Event: OnOrientationChange
return controller.onOrientationChange$Action(vars.value.orientationInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:SGOpIO5qhEWyDbhrYiRY0w", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:F9lwawGkm0+T42S9T51SZg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:F9lwawGkm0+T42S9T51SZg", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.OrientationChange$vars", [{
name: "Orientation",
attrName: "orientationInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
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
try {OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:FkNR+fqnyEGLZJmCJkeKZA:/NRWebFlows.pdL08HV3tkuaoCVu1D0yRA/NodesShownInESpaceTree.UhxhnJkUQ0OBz5UwnvMPAA/ClientActions.FkNR+fqnyEGLZJmCJkeKZA:XhKrCVTIxfjTPvthPMJmoQ", "ShopperPortalEU_UI_Theme", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:m2ufABjopEGZ07JR5m8ClA", callContext.id);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:lohAUtpjuUqkmjUtHkf51w", callContext.id);
// JSON Serialize: OptionsJSON
optionsJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsIn, true, false);
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:aT6RGrr5Xkm1r164M0eV7A", callContext.id);
// Initialize layout.
initializeJSResult.value = controller.safeExecuteJSNode(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_controller_OnInitialize_InitializeJS, "Initialize", "OnInitialize", {
Options: OS.DataConversion.JSNodeParamConverter.to(optionsJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
Obj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.OnInitialize$initializeJSResult"))();
jsNodeResult.objOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Obj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
OrientationChange: controller.clientActionProxies.orientationChange$Action
}, {});
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:j+MH0IaYKkyEoV59E9aRMQ", callContext.id);
// Obj = Initialize.Obj
model.variables.objVar = initializeJSResult.value.objOut;
OutSystemsDebugger.handleBreakpoint("1ohZxgV1_kKH2z+Fu01SDQ:Te36zOvJ2EW2XuNYIOzExg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:FkNR+fqnyEGLZJmCJkeKZA", callContext.id);
}

};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.OnInitialize$initializeJSResult", [{
name: "Obj",
attrName: "objOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);

Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.orientationChange$Action = function (orientationIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._orientationChange$Action, callContext, orientationIn);

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
OutSystemsDebugger.push("1ohZxgV1_kKH2z+Fu01SDQ:UhxhnJkUQ0OBz5UwnvMPAA:/NRWebFlows.pdL08HV3tkuaoCVu1D0yRA/NodesShownInESpaceTree.UhxhnJkUQ0OBz5UwnvMPAA:LsKwUwE22Yzj55YASZ3cNw", "ShopperPortalEU_UI_Theme", "LayoutDetail", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:UhxhnJkUQ0OBz5UwnvMPAA", callContext.id);
OutSystemsDebugger.pop("1ohZxgV1_kKH2z+Fu01SDQ:pdL08HV3tkuaoCVu1D0yRA", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIThemeLayouts/LayoutDetail On Initialize");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIThemeLayouts/LayoutDetail On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIThemeLayouts/LayoutDetail On Destroy");
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
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$controller.OnReady.ReadyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.ready($parameters.ElementId);
};
});
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$controller.OnDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.destroy();
};
});
define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$controller.OnInitialize.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj = new layout(JSON.parse($parameters.Options),{
    orientationChange:$actions.OrientationChange
});
};
});

define("ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"NTnhNnTKzUmHPjHncu6RNQ": {
getter: function (varBag, idService) {
return varBag.readyJSResult.value;
}
},
"V0mZChXsUEK0safpGnKYrw": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"5NYOGytrbUCQE7t+td_59Q": {
getter: function (varBag, idService) {
return varBag.vars.value.orientationInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"lohAUtpjuUqkmjUtHkf51w": {
getter: function (varBag, idService) {
return varBag.optionsJSONVar.value;
}
},
"aT6RGrr5Xkm1r164M0eV7A": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"It2J5LAWhUO9_PnMNb7OqA": {
getter: function (varBag, idService) {
return varBag.model.variables.objVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"8Nk62kPtVkamCPI2I9Purw": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsIn;
}
},
"EeDykipZcUKJTnSxwqzvlw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Layout"));
})(varBag.model, idService);
}
},
"uqEHZr1SrEm5f85BibbF5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Header"));
})(varBag.model, idService);
}
},
"ItTXzhXQkE6nrd53DmVIJw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"qa9hZsmhHkOJJc1KgHIAGQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderCenter"));
})(varBag.model, idService);
}
},
"F7lkBbVv8060rpbfCnZ0bw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"92ktVj6JIkeFndWK8Rkdzw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"2+HkHD4MB02p1m8J_I1EbA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
