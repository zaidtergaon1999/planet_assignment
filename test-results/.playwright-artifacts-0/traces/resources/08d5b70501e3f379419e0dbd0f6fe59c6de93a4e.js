define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.model$DatePickerOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$DatePickerChangeOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel) {
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
this.attr("Date", "dateVar", "Date", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("Options", "optionsIn", "Options", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEU_UI_ComponentsModel.DatePickerOptionsRec());
}, false, ShopperPortalEU_UI_ComponentsModel.DatePickerOptionsRec), 
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
return {
Input_Date: OS.Model.ValidationWidgetRecord
};
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
return true;
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
return new OS.Model.ModelFactory(Model, "ShopperPortalEUUIComponents.DatePicker");
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "react", "OutSystems/ReactView/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$controller", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomIcon.mvc$view", "ShopperPortalEU_UI_Components.model$DatePickerOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$DatePickerChangeOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, React, OSView, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_model, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_controller, OSWidgets, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view) {
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
        View.displayName = "ShopperPortalEUUIComponents.DatePicker";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/ShopperPortalEU_UI_Components.dayJS.js", "scripts/ShopperPortalEU_UI_Components.datePicker.js"];
        };
        View.getBlocks = function() {
            return [ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_controller;
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
return (((("date-picker" + ((!(model.variables.optionsIn.isDisabledAttr)) ? ("") : (" date-picker--disabled"))) + ((!(model.variables.optionsIn.isFullWidthAttr)) ? ("") : (" date-picker--full-width"))) + (((model.variables.optionsIn.validationAttr.stateAttr === OS.BuiltinFunctions.nullTextIdentifier())) ? ("") : ((" date-picker--" + model.variables.optionsIn.validationAttr.stateAttr)))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
}, function () {
return model.variables.optionsIn.isDisabledAttr;
}, function () {
return model.variables.optionsIn.isFullWidthAttr;
}, function () {
return model.variables.optionsIn.validationAttr.stateAttr;
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
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.label,
style: "date-picker__label ph",
_idProps: {
service: idService,
name: "Label"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "date-picker__input-wrapper",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: !(model.variables.optionsIn.isDisabledAttr),
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Text*/ 0,
mandatory: model.variables.optionsIn.isMandatoryAttr,
maxLength: 0,
style: model.getCachedValue(idService.getId("Input_Date.Style"), function () {
return ("form-control date-picker__input" + ((((model.variables.optionsIn.validationAttr.stateAttr) !== (ShopperPortalEU_UI_ComponentsModel.staticEntities.customValidationMessageState.error))) ? ("") : (" not-valid")));
}, function () {
return model.variables.optionsIn.validationAttr.stateAttr;
}),
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.dateVar, function (value) {
model.variables.dateVar = value;
}),
_idProps: {
service: idService,
name: "Input_Date"
},
_widgetRecordProvider: widgetsRecordProvider,
enabled_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus),
mandatory_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus),
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
}), React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ShopperPortalEUUIComponents/DatePicker/Button OnClick");
controller.iconClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "date-picker__input-icon",
visible: true,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("VkCxwfkoY0uCJsCNQ7FTUA.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomIconOptionsRec();
rec.nameAttr = "calendar_month";
rec.sizeAttr = ShopperPortalEU_UI_ComponentsModel.staticEntities.customIconSize.small;
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
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))), $if(false, false, this, function () {
return [];
}, function () {
return [$if(((model.variables.optionsIn.validationAttr.messageAttr) !== ("")), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": model.getCachedValue(idService.getId("ZO_T1VVZLEmV9FzS+aCflw.data-testid"), function () {
return (((model.variables.optionsIn.testIdAttr === "")) ? ("") : ((model.variables.optionsIn.testIdAttr + "ValidationMessage")));
}, function () {
return model.variables.optionsIn.testIdAttr;
})
},
style: "validation-message",
value: model.variables.optionsIn.validationAttr.messageAttr,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
})];
}, function () {
return [];
})];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "ShopperPortalEU_UI_Components.languageResources", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$debugger", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$controller.IconClick.IconClickJS", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$controller.OnRender.RenderJS", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$controller.OnReady.InitializeJS", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$controller.OnParametersChanged.ParametersChangedJS", "ShopperPortalEU_UI_Components.model$DatePickerOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$DatePickerChangeOptionsRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, ShopperPortalEU_UI_ComponentsLanguageResources, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_Debugger, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_controller_IconClick_IconClickJS, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_controller_OnRender_RenderJS, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_controller_OnReady_InitializeJS, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_controller_OnParametersChanged_ParametersChangedJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
change$Action: function (dataIn) {
dataIn = (dataIn === undefined) ? "" : dataIn;
return controller.executeActionInsideJSNode(controller._change$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(dataIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Change");
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
Controller.prototype._change$Action = function (dataIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Change");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.Change$vars"))());
vars.value.dataInLocal = dataIn;
var dataFromJSONVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(ShopperPortalEU_UI_ComponentsModel.DatePickerChangeOptionsRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.dataFromJSONVar = dataFromJSONVar;
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:nkFTHFYIR0aRU54tnHfEvA:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.IZ25SglDnEyZXddX2e+zVA/ClientActions.nkFTHFYIR0aRU54tnHfEvA:ypZeK9UL2CUGEGq2v5PxHQ", "ShopperPortalEU_UI_Components", "Change", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:93n8acQ6bk6EndLhfjl0ZQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:mreFsfPTSESRwbveQOZ+6Q", callContext.id);
// JSON Deserialize: DataFromJSON
dataFromJSONVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.dataInLocal, ShopperPortalEU_UI_ComponentsModel.DatePickerChangeOptionsRec, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:go0oRqy83ka05+YWHjorrw", callContext.id);
// Date = DataFromJSON.Data.FormattedDate
model.variables.dateVar = dataFromJSONVar.value.dataOut.formattedDateAttr;
// Trigger
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:A2U5zFABy0+X8ZUv_UmJXg", callContext.id) && dataFromJSONVar.value.dataOut.triggerAttr)) {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:aFw5Dn5M3kK7VGLtLU9WYw", callContext.id);
// Trigger Event: OnChange
return controller.onChange$Action(OS.BuiltinFunctions.dateTimeToDate(dataFromJSONVar.value.dataOut.dateAttr), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:phj7NAktj0iVnrwTQX52NA", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:phj7NAktj0iVnrwTQX52NA", callContext.id);
}

});
}).then(function (res) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:nkFTHFYIR0aRU54tnHfEvA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:nkFTHFYIR0aRU54tnHfEvA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.Change$vars", [{
name: "Data",
attrName: "dataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._iconClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("IconClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:ZOiqM+2wmUaF_pJPA4IS+g:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.IZ25SglDnEyZXddX2e+zVA/ClientActions.ZOiqM+2wmUaF_pJPA4IS+g:HkAGHIdm8e9PFSo2HtHzQw", "ShopperPortalEU_UI_Components", "IconClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:LLn3NJJe0k+JmxN0UhdfHw", callContext.id);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:bmCpnmmOfkGxpm6IfRtRlg", callContext.id);
// iconClick method
controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_controller_IconClick_IconClickJS, "IconClick", "IconClick", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:KKpgmPSc5k+3zU1llWJfVQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:ZOiqM+2wmUaF_pJPA4IS+g", callContext.id);
}

};
Controller.prototype._onRender$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnRender");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:nYOHi4TmHEmxEmKcKCa+qQ:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.IZ25SglDnEyZXddX2e+zVA/ClientActions.nYOHi4TmHEmxEmKcKCa+qQ:UCIAvN9xpJsbQTGiePkOsQ", "ShopperPortalEU_UI_Components", "OnRender", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:GTiBaVHO2UaMFJis3zmrFA", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:371m98XfPESIeniCf7e9ZA", callContext.id) && ((model.variables.objVar) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:ao41X8gDkEW5QgkzB7m8zQ", callContext.id);
// Component render method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_controller_OnRender_RenderJS, "Render", "OnRender", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:ZaaFYg43GUqHtlNgZu96pg", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:ZaaFYg43GUqHtlNgZu96pg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:nYOHi4TmHEmxEmKcKCa+qQ", callContext.id);
}

};
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
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:QuEqrc8fq0i_BezSPq00gg:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.IZ25SglDnEyZXddX2e+zVA/ClientActions.QuEqrc8fq0i_BezSPq00gg:ijPtoKap4tT73u8GgrYfJA", "ShopperPortalEU_UI_Components", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:YIeqfPdDm06b0eCu6Nj5uQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:uWI7YRkdZ0+RL7DA1Ibncg", callContext.id);
// JSON Serialize: OptionsJSON
optionsJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsIn, true, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:1p3GUOuIUkW38tGef7Pq2g", callContext.id);
// Initialize component.
initializeJSResult.value = controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_controller_OnReady_InitializeJS, "Initialize", "OnReady", {
Options: OS.DataConversion.JSNodeParamConverter.to(optionsJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Element"), OS.DataTypes.DataTypes.Text),
Obj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.OnReady$initializeJSResult"))();
jsNodeResult.objOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Obj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
Change: controller.clientActionProxies.change$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:iVvG1sMFEk+igS_4SY1WGw", callContext.id);
// Obj = Initialize.Obj
model.variables.objVar = initializeJSResult.value.objOut;
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:PWtzE_0gzUqnvbk6VEVudw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:QuEqrc8fq0i_BezSPq00gg", callContext.id);
}

};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.OnReady$initializeJSResult", [{
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
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:Cxa55O0Jekqom3S1Hoba2g:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.IZ25SglDnEyZXddX2e+zVA/ClientActions.Cxa55O0Jekqom3S1Hoba2g:G+SjU7JDCzFmhr4tU0or9A", "ShopperPortalEU_UI_Components", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:enzu8+Q7J0er9vDHYNPT1A", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:7osBwcIhsEWoyGZ2wbROpw", callContext.id) && ((model.variables.objVar) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:k3cbypNjFUuXIwOHE+dPug", callContext.id);
// JSON Serialize: OptionsJSON
optionsJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsIn, true, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:_ghpkXyfR0+zXrsz3j+PTA", callContext.id);
// Parameters change method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_DatePicker_mvc_controller_OnParametersChanged_ParametersChangedJS, "ParametersChanged", "OnParametersChanged", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object),
Options: OS.DataConversion.JSNodeParamConverter.to(optionsJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:QM80PHdN5EuEFMAggGEpuQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:HA+ZmEg5G0C4X7AjPV6H0g", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:Cxa55O0Jekqom3S1Hoba2g", callContext.id);
}

};

Controller.prototype.change$Action = function (dataIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._change$Action, callContext, dataIn);

};
Controller.prototype.iconClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._iconClick$Action, callContext);

};
Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.onChange$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:7hC2bHqrKEmxvEuPSzIN0Q:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q:g5BtT+X6uN+vFl8t9PMqCQ", "ShopperPortalEU_UI_Components", "ShopperPortalEUUIComponents", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:IZ25SglDnEyZXddX2e+zVA:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.IZ25SglDnEyZXddX2e+zVA:2WmoT9vyAuC4ZSQt09xXwQ", "ShopperPortalEU_UI_Components", "DatePicker", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:IZ25SglDnEyZXddX2e+zVA", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/DatePicker On Ready");
return controller.onReady$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onRenderEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/DatePicker On Render");
return controller.onRender$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onDestroyEventHandler = null;
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/DatePicker On Parameters Changed");
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
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$controller.IconClick.IconClickJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.iconClick();
};
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$controller.OnRender.RenderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.render();
};
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$controller.OnReady.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj = new datePicker($parameters.ElementId, JSON.parse($parameters.Options), {
    change: $actions.Change
});
};
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$controller.OnParametersChanged.ParametersChangedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.parametersChanged(JSON.parse($parameters.Options));
};
});

define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.DatePicker.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"ZMyC0jlKGE28v7GYs+DiUQ": {
getter: function (varBag, idService) {
return varBag.vars.value.dataInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mreFsfPTSESRwbveQOZ+6Q": {
getter: function (varBag, idService) {
return varBag.dataFromJSONVar.value;
}
},
"bmCpnmmOfkGxpm6IfRtRlg": {
getter: function (varBag, idService) {
return varBag.iconClickJSResult.value;
}
},
"ao41X8gDkEW5QgkzB7m8zQ": {
getter: function (varBag, idService) {
return varBag.renderJSResult.value;
}
},
"uWI7YRkdZ0+RL7DA1Ibncg": {
getter: function (varBag, idService) {
return varBag.optionsJSONVar.value;
}
},
"1p3GUOuIUkW38tGef7Pq2g": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"k3cbypNjFUuXIwOHE+dPug": {
getter: function (varBag, idService) {
return varBag.optionsJSONVar.value;
}
},
"_ghpkXyfR0+zXrsz3j+PTA": {
getter: function (varBag, idService) {
return varBag.parametersChangedJSResult.value;
}
},
"H5S_h7LzhUS8t3v8p_qp_Q": {
getter: function (varBag, idService) {
return varBag.model.variables.objVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"dr1+d7r70k+RjGwwuvW_fw": {
getter: function (varBag, idService) {
return varBag.model.variables.dateVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4l09IY2M4kCYEQeZw4655g": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsIn;
}
},
"6QXAneLz70epRQ7DTsQ6Qw": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3SaavAQevU2bZOWUUmCr1g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Element"));
})(varBag.model, idService);
}
},
"lmoFHXySJEusvoA4syhEMA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"sw4DvmQHZUWtS04ZkZBxQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Date"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
