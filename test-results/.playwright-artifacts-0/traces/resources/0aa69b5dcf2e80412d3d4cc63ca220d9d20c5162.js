define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.model$ScanPassportPropertiesRec", "ShopperPortalEU_UI_Components.model$ScanPassportErrorRec", "ShopperPortalEU_UI_Components.model$ScanPassportDataRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel) {
var OS = OutSystems.Internal;

var GetLicenseDataActRec = (function (_super) {
__extends(GetLicenseDataActRec, _super);
function GetLicenseDataActRec(defaults) {
_super.apply(this, arguments);
}
GetLicenseDataActRec.attributesToDeclare = function () {
return [
this.attr("License", "licenseOut", "License", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetLicenseDataActRec.fromStructure = function (str) {
return new GetLicenseDataActRec(new GetLicenseDataActRec.RecordClass({
licenseOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetLicenseDataActRec.init();
return GetLicenseDataActRec;
})(OS.Model.DataSourceRecord);

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
this.attr("Properties", "propertiesVar", "Properties", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEU_UI_ComponentsModel.ScanPassportPropertiesRec());
}, false, ShopperPortalEU_UI_ComponentsModel.ScanPassportPropertiesRec), 
this.attr("ExtendedClass", "extendedClassIn", "ExtendedClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", "_extendedClassInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetLicense", "getLicenseDataAct", "getLicenseDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetLicenseDataActRec());
}, true, GetLicenseDataActRec)
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
if("ExtendedClass" in inputs) {
this.variables.extendedClassIn = inputs.ExtendedClass;
if("_extendedClassInDataFetchStatus" in inputs) {
this.variables._extendedClassInDataFetchStatus = inputs._extendedClassInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "ShopperPortalEUUIComponents.ScanPassport");
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "react", "OutSystems/ReactView/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.mvc$controller", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Components.model$ScanPassportPropertiesRec", "ShopperPortalEU_UI_Components.model$ScanPassportErrorRec", "ShopperPortalEU_UI_Components.model$ScanPassportDataRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, React, OSView, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ScanPassport_mvc_model, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ScanPassport_mvc_controller, OSWidgets) {
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
        View.displayName = "ShopperPortalEUUIComponents.ScanPassport";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/ShopperPortalEU_UI_Components.anylineJS.js", "scripts/ShopperPortalEU_UI_Components.scanPassport.js"];
        };
        View.getBlocks = function() {
            return [];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ScanPassport_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ScanPassport_mvc_controller;
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
return ("scan-passport" + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
}, function () {
return model.variables.extendedClassIn;
}),
visible: true,
_idProps: {
service: idService,
name: "Element"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._extendedClassInDataFetchStatus)
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "ShopperPortalEU_UI_Components.languageResources", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.mvc$debugger", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.mvc$controller.Ready.InitializeJS", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.mvc$controller.OnDestroy.DestroyJS", "ShopperPortalEU_UI_Components.model$ScanPassportPropertiesRec", "ShopperPortalEU_UI_Components.model$ScanPassportErrorRec", "ShopperPortalEU_UI_Components.model$ScanPassportDataRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, ShopperPortalEU_UI_ComponentsLanguageResources, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ScanPassport_mvc_Debugger, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ScanPassport_mvc_controller_Ready_InitializeJS, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ScanPassport_mvc_controller_OnDestroy_DestroyJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
load$Action: function () {
return controller.executeActionInsideJSNode(controller._load$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Load");
},
result$Action: function (dataIn) {
dataIn = (dataIn === undefined) ? "" : dataIn;
return controller.executeActionInsideJSNode(controller._result$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dataIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Result");
},
error$Action: function (dataIn) {
dataIn = (dataIn === undefined) ? "" : dataIn;
return controller.executeActionInsideJSNode(controller._error$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dataIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Error");
}
};
this.dataFetchDependenciesOriginal = {
getLicense$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
getLicense$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = false;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getLicense$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:6dMjslF13k+RZuAU30DbsA:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.9pZbTJitBEme9RPLTjM5Tw/DataActions.6dMjslF13k+RZuAU30DbsA:ags8tom8eC9LRbHQaxsX8A", "ShopperPortalEU_UI_Components", "GetLicense", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/ScanPassport/GetLicense");
return controller.callDataAction("DataActionGetLicense", "screenservices/ShopperPortalEU_UI_Components/ShopperPortalEUUIComponents/ScanPassport/DataActionGetLicense", "jUr2eL+nE0O8LbjMFA87SQ", function (b) {
model.variables.getLicenseDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getLicenseDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getLicenseDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, undefined, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/ScanPassport/GetLicense On After Fetch");
return controller._ready$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:6dMjslF13k+RZuAU30DbsA", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getLicense$DataActRefresh"];
// Client Actions
Controller.prototype._ready$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Ready");
callContext = controller.callContext(callContext);
var initializeJSResult = new OS.DataTypes.VariableHolder();
var propertiesJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.initializeJSResult = initializeJSResult;
varBag.propertiesJSONVar = propertiesJSONVar;
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:JMG3fLEc1k6a2i6I8v55jQ:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.9pZbTJitBEme9RPLTjM5Tw/ClientActions.JMG3fLEc1k6a2i6I8v55jQ:LoeMJXVABECGJSep3RX9GQ", "ShopperPortalEU_UI_Components", "Ready", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:cu7Vyp9oV0GGvzlrqUzqAg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Has license
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:wORcI47rNkGh3rTQZWykOg", callContext.id) && ((model.variables.getLicenseDataAct.licenseOut) !== ("")))) {
// Properties
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:mVS0dwtonEq6nYgCPIiJ4g", callContext.id);
// Properties.License = GetLicense.License
model.variables.propertiesVar.licenseAttr = model.variables.getLicenseDataAct.licenseOut;
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:8EwPh557r0SZNdA__O40Lw", callContext.id);
// JSON Serialize: PropertiesJSON
propertiesJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.propertiesVar, true, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:WLIjY3TxOUGkhtVC8F7YvA", callContext.id);
// Initialize component.
initializeJSResult.value = controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ScanPassport_mvc_controller_Ready_InitializeJS, "Initialize", "Ready", {
Properties: OS.DataConversion.JSNodeParamConverter.to(propertiesJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Element"), OS.DataTypes.DataTypes.Text),
Obj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.Ready$initializeJSResult"))();
jsNodeResult.objOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Obj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Load: controller.clientActionProxies.load$Action,
Result: controller.clientActionProxies.result$Action,
Error: controller.clientActionProxies.error$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:hzOpJ4kDjUuJ4dr4ACQZEQ", callContext.id);
// Obj = Initialize.Obj
model.variables.objVar = initializeJSResult.value.objOut;
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:rJSHpz6yS06wLetIK9HxkQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:pPFitkWxgEKwqitbVezWJg", callContext.id);
// Trigger Event: OnError
return controller.onError$Action(function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.ScanPassportErrorRec();
rec.codeAttr = "1";
rec.messageAttr = "Invalid license";
return rec;
}(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:Ukei5JRck0WDhV800cjLVg", callContext.id);
});
}

});
}).then(function (res) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:JMG3fLEc1k6a2i6I8v55jQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:JMG3fLEc1k6a2i6I8v55jQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.Ready$initializeJSResult", [{
name: "Obj",
attrName: "objOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._load$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Load");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:Tvd8zHu5KkqGSJtIVYU1ow:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.9pZbTJitBEme9RPLTjM5Tw/ClientActions.Tvd8zHu5KkqGSJtIVYU1ow:5DaSeBaCJzj+PrK8T11G3Q", "ShopperPortalEU_UI_Components", "Load", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:aMZtU2ydkUOIvRvNElIRQg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:sGVYK3726EOrpreMDuPHQQ", callContext.id);
// Trigger Event: OnLoad
return controller.onLoad$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:lv29kNiFAkWNWkqHM4MaTQ", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:Tvd8zHu5KkqGSJtIVYU1ow", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:Tvd8zHu5KkqGSJtIVYU1ow", callContext.id);
throw ex;

});
};
Controller.prototype._error$Action = function (dataIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Error");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.Error$vars"))());
vars.value.dataInLocal = dataIn;
var errorFromJSONVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(ShopperPortalEU_UI_ComponentsModel.ScanPassportErrorRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.errorFromJSONVar = errorFromJSONVar;
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:SXOt0X8_dU+6sYFxgoZ5OA:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.9pZbTJitBEme9RPLTjM5Tw/ClientActions.SXOt0X8_dU+6sYFxgoZ5OA:L10QyppqZk9q7RW1z4SVrg", "ShopperPortalEU_UI_Components", "Error", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:WOxh8z_xxEm8bB5tYeIToQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:4NlF48glykeMMtcyKHmwoQ", callContext.id);
// JSON Deserialize: ErrorFromJSON
errorFromJSONVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.dataInLocal, ShopperPortalEU_UI_ComponentsModel.ScanPassportErrorRec, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:Sgca1KFtQU6L28wXx_Rbqw", callContext.id);
// Trigger Event: OnError
return controller.onError$Action(errorFromJSONVar.value.dataOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:SQpqGdfUOkujo_Jy03kirA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:SXOt0X8_dU+6sYFxgoZ5OA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:SXOt0X8_dU+6sYFxgoZ5OA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.Error$vars", [{
name: "Data",
attrName: "dataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._result$Action = function (dataIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Result");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.Result$vars"))());
vars.value.dataInLocal = dataIn;
var resultFromJSONVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(ShopperPortalEU_UI_ComponentsModel.ScanPassportDataRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.resultFromJSONVar = resultFromJSONVar;
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:pFU03puLX0e3g7koO87ivQ:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.9pZbTJitBEme9RPLTjM5Tw/ClientActions.pFU03puLX0e3g7koO87ivQ:KatQc8+SxIh5oAyuLs9ioA", "ShopperPortalEU_UI_Components", "Result", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:UuxF5BOBn0uFkzDI7QXyaQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:5N0bwydA60+2reRmD1tUdA", callContext.id);
// JSON Deserialize: ResultFromJSON
resultFromJSONVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.dataInLocal, ShopperPortalEU_UI_ComponentsModel.ScanPassportDataRec, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:eexyL5Mkike2PkaIexyE9Q", callContext.id);
// Trigger Event: OnResult
return controller.onResult$Action(resultFromJSONVar.value.dataOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:H5KODS6Db0aOcK2j8xq8+g", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:pFU03puLX0e3g7koO87ivQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:pFU03puLX0e3g7koO87ivQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.Result$vars", [{
name: "Data",
attrName: "dataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
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
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:X2Qg7dRqBUCUe3GhB+y3Zw:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.9pZbTJitBEme9RPLTjM5Tw/ClientActions.X2Qg7dRqBUCUe3GhB+y3Zw:a9v8rfarkhBNfkPbYZHu_Q", "ShopperPortalEU_UI_Components", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:pJ2Itytyw0++ra1IsptE1g", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:soh_jeuCLkelOr2NkReC8w", callContext.id) && ((model.variables.objVar) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:72ACcw+4+k6jr0EDfeqMRg", callContext.id);
// Destroy method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ScanPassport_mvc_controller_OnDestroy_DestroyJS, "Destroy", "OnDestroy", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:qUC0rKd2PUSFWVHj0Qpitg", callContext.id);
// Obj = NullObject
model.variables.objVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:kSUWnZ9Ejkmm7Mr9MT6Kdw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:YHpDHvanKEGYl3OYZgGmJQ", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:X2Qg7dRqBUCUe3GhB+y3Zw", callContext.id);
}

};

Controller.prototype.ready$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._ready$Action, callContext);

};
Controller.prototype.load$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._load$Action, callContext);

};
Controller.prototype.error$Action = function (dataIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._error$Action, callContext, dataIn);

};
Controller.prototype.result$Action = function (dataIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._result$Action, callContext, dataIn);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.onLoad$Action = function () {
return Promise.resolve();
};
Controller.prototype.onError$Action = function () {
return Promise.resolve();
};
Controller.prototype.onResult$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:7hC2bHqrKEmxvEuPSzIN0Q:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q:g5BtT+X6uN+vFl8t9PMqCQ", "ShopperPortalEU_UI_Components", "ShopperPortalEUUIComponents", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:9pZbTJitBEme9RPLTjM5Tw:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.9pZbTJitBEme9RPLTjM5Tw:g_mnS+wkY9R7ztZU6lXaig", "ShopperPortalEU_UI_Components", "ScanPassport", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:9pZbTJitBEme9RPLTjM5Tw", callContext.id);
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:7hC2bHqrKEmxvEuPSzIN0Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = null;
Controller.prototype.onReadyEventHandler = null;
Controller.prototype.onRenderEventHandler = null;
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/ScanPassport On Destroy");
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
return ShopperPortalEU_UI_ComponentsController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, ShopperPortalEU_UI_ComponentsLanguageResources);
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.mvc$controller.Ready.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj = new scanPassport($parameters.ElementId,JSON.parse($parameters.Properties),{
    load:$actions.Load,
    result:$actions.Result,
    error:$actions.Error
});
};
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.mvc$controller.OnDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.destroy();
};
});

define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ScanPassport.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"8EwPh557r0SZNdA__O40Lw": {
getter: function (varBag, idService) {
return varBag.propertiesJSONVar.value;
}
},
"WLIjY3TxOUGkhtVC8F7YvA": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"IWNAgR9VDEqllAdDbM+94Q": {
getter: function (varBag, idService) {
return varBag.vars.value.dataInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4NlF48glykeMMtcyKHmwoQ": {
getter: function (varBag, idService) {
return varBag.errorFromJSONVar.value;
}
},
"25RJZY0L8k6XcxI8La2dpg": {
getter: function (varBag, idService) {
return varBag.vars.value.dataInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5N0bwydA60+2reRmD1tUdA": {
getter: function (varBag, idService) {
return varBag.resultFromJSONVar.value;
}
},
"72ACcw+4+k6jr0EDfeqMRg": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"dq3floC_+0GZWI4Wo8Rexg": {
getter: function (varBag, idService) {
return varBag.model.variables.objVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Jz6tDHFuUEi6O09p5wXeuQ": {
getter: function (varBag, idService) {
return varBag.model.variables.propertiesVar;
}
},
"+tbSogTta0GsdGUFgHWVaQ": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6dMjslF13k+RZuAU30DbsA": {
getter: function (varBag, idService) {
return varBag.model.variables.getLicenseDataAct;
}
},
"IOpbqs6kw0WaDeYUUacTBg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Element"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
