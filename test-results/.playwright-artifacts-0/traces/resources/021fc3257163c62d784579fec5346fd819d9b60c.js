define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.model$CustomDropdownOptionsRec", "ShopperPortalEU_UI_Components.model$CustomDropdownCustomValueOptionList", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$CustomDropdownCustomValueOptionRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel) {
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
this.attr("Search", "searchVar", "Search", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("IsVisible", "isVisibleVar", "IsVisible", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("Options", "optionsIn", "Options", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEU_UI_ComponentsModel.CustomDropdownOptionsRec());
}, false, ShopperPortalEU_UI_ComponentsModel.CustomDropdownOptionsRec), 
this.attr("_optionsInDataFetchStatus", "_optionsInDataFetchStatus", "_optionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("List", "listIn", "List", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEU_UI_ComponentsModel.CustomDropdownCustomValueOptionList());
}, false, ShopperPortalEU_UI_ComponentsModel.CustomDropdownCustomValueOptionList), 
this.attr("_listInDataFetchStatus", "_listInDataFetchStatus", "_listInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Input_Search: OS.Model.ValidationWidgetRecord
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

if("List" in inputs) {
this.variables.listIn = inputs.List;
if("_listInDataFetchStatus" in inputs) {
this.variables._listInDataFetchStatus = inputs._listInDataFetchStatus;
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
return new OS.Model.ModelFactory(Model, "ShopperPortalEUUIComponents.CustomDropdown");
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "react", "OutSystems/ReactView/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomIcon.mvc$view", "ShopperPortalEU_UI_Components.model$CustomDropdownOptionsRec", "ShopperPortalEU_UI_Components.model$CustomDropdownCustomValueOptionList", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$CustomDropdownCustomValueOptionRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, React, OSView, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_model, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller, OSWidgets, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view) {
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
        View.displayName = "ShopperPortalEUUIComponents.CustomDropdown";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return ["scripts/ShopperPortalEU_UI_Components.customDropdown.js"];
        };
        View.getBlocks = function() {
            return [ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller;
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
return ((((("custom-dropdown" + (((model.variables.optionsIn.validationAttr.stateAttr === OS.BuiltinFunctions.nullTextIdentifier())) ? ("") : (((" custom-dropdown--" + model.variables.optionsIn.validationAttr.stateAttr) + (((model.variables.optionsIn.validationAttr.stateAttr === ShopperPortalEU_UI_ComponentsModel.staticEntities.customValidationMessageState.error)) ? (" not-valid") : ("")))))) + ((!(model.variables.optionsIn.isNativeAttr)) ? (" custom-dropdown--custom") : (" custom-dropdown--native"))) + ((model.variables.optionsIn.topLabelAttr) ? (" custom-dropdown--top-label") : (" custom-dropdown--side-label"))) + ((!(model.variables.optionsIn.validationAttr.isValidationMessageAbsoluteAttr)) ? ("") : (" custom-dropdown--validation-absolute"))) + (((model.variables.extendedClassIn === "")) ? ("") : ((" " + model.variables.extendedClassIn))));
}, function () {
return model.variables.optionsIn.validationAttr.stateAttr;
}, function () {
return model.variables.optionsIn.isNativeAttr;
}, function () {
return model.variables.optionsIn.topLabelAttr;
}, function () {
return model.variables.optionsIn.validationAttr.isValidationMessageAbsoluteAttr;
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
style: "custom-dropdown__label ph",
_idProps: {
service: idService,
name: "Label"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__custom",
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__custom-value",
visible: true,
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: true,
style: "custom-dropdown__custom-dropdown",
visible: model.variables.isVisibleVar,
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__header",
visible: true,
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__header-title",
visible: true,
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": model.getCachedValue(idService.getId("AC6iDXGHIE+ew2OAFZlQJg.data-testid"), function () {
return ((((model.variables.optionsIn.testIdAttr) !== (""))) ? ((model.variables.optionsIn.testIdAttr + "OpenedLabel")) : (""));
}, function () {
return model.variables.optionsIn.testIdAttr;
})
},
value: model.variables.optionsIn.customAttr.labelAttr,
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
})), React.createElement(OSWidgets.Button, {
enabled: true,
extendedProperties: {
"data-testid": model.getCachedValue(idService.getId("_VgY2mn0q02gV80PU1yIJQ.data-testid"), function () {
return ((((model.variables.optionsIn.testIdAttr) !== (""))) ? ((model.variables.optionsIn.testIdAttr + "Close")) : (""));
}, function () {
return model.variables.optionsIn.testIdAttr;
})
},
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ShopperPortalEUUIComponents/CustomDropdown/Button OnClick");
controller.toggle$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "custom-dropdown__close",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("rVP2s6zYdkWJ69XjbM8CZA.Options"), function () {
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
uuid: "9",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})), $if((model.variables.optionsIn.customAttr.descriptionAttr === ""), false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__header-description",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": model.getCachedValue(idService.getId("iNDQvKU3AkCYXA1RmyVPsQ.data-testid"), function () {
return ((((model.variables.optionsIn.testIdAttr) !== (""))) ? ((model.variables.optionsIn.testIdAttr + "OpenedDescription")) : (""));
}, function () {
return model.variables.optionsIn.testIdAttr;
})
},
value: model.variables.optionsIn.customAttr.descriptionAttr,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
}))];
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__search",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService
},
enabled: true,
extendedEvents: {
"componentDidMount": function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ShopperPortalEUUIComponents/CustomDropdown/Input_Search componentDidMount");
controller.dropdownRendered$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
extendedProperties: {
spellCheck: "false",
"data-testid": model.getCachedValue(idService.getId("Input_Search.data-testid"), function () {
return (((model.variables.optionsIn.testIdAttr === "")) ? ("") : ((model.variables.optionsIn.testIdAttr + "SearchInput")));
}, function () {
return model.variables.optionsIn.testIdAttr;
})
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Search*/ 8,
mandatory: false,
maxLength: 50,
prompt: model.variables.optionsIn.customAttr.searchAttr.placeholderAttr,
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Text, model.variables.searchVar, function (value) {
model.variables.searchVar = value;
}),
_idProps: {
service: idService,
name: "Input_Search"
},
_widgetRecordProvider: widgetsRecordProvider,
prompt_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__options ph",
visible: true,
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__empty-message",
visible: true,
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__empty-message-title",
visible: true,
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": model.getCachedValue(idService.getId("N7Yc7_XQo0m_RyANsF9ALw.data-testid"), function () {
return (((model.variables.optionsIn.testIdAttr === "")) ? ("") : ((model.variables.optionsIn.testIdAttr + "EmptyMessageTitle")));
}, function () {
return model.variables.optionsIn.testIdAttr;
})
},
value: model.variables.optionsIn.customAttr.searchAttr.emptyMessageAttr,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__empty-message-description",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": model.getCachedValue(idService.getId("un9KjvgEb0K_djsATzOGxA.data-testid"), function () {
return (((model.variables.optionsIn.testIdAttr === "")) ? ("") : ((model.variables.optionsIn.testIdAttr + "EmptyMessageDescription")));
}, function () {
return model.variables.optionsIn.testIdAttr;
})
},
value: model.variables.optionsIn.customAttr.searchAttr.emptyDescriptionAttr,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
}))))), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__dropdown",
visible: true,
_idProps: {
service: idService,
uuid: "20"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.dropdown,
style: "custom-dropdown__dropdown-ph",
_idProps: {
service: idService,
name: "Dropdown"
},
_widgetRecordProvider: widgetsRecordProvider
})), $if((model.variables.optionsIn.validationAttr.messageAttr === ""), false, this, function () {
return [];
}, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": model.getCachedValue(idService.getId("Sbvg0e8QSkWTS1tr5suiaA.data-testid"), function () {
return (((model.variables.optionsIn.testIdAttr === "")) ? ("") : ((model.variables.optionsIn.testIdAttr + "ValidationMessage")));
}, function () {
return model.variables.optionsIn.testIdAttr;
})
},
style: "validation-message",
value: model.variables.optionsIn.validationAttr.messageAttr,
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "custom-dropdown__overlay",
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.controller", "ShopperPortalEU_UI_Components.languageResources", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$debugger", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.OnParametersChanged.ParametersChangedJS", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.DropdownRendered.DropdownRenderedJS", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.OnReady.InitializeJS", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.Toggle.ToggleJS", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.OnRender.RenderJS", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.OnDestroy.DestroyJS", "ShopperPortalEU_UI_Components.model$CustomDropdownOptionsRec", "ShopperPortalEU_UI_Components.model$CustomDropdownCustomValueOptionList", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$CustomDropdownCustomValueOptionRec"], function (OutSystems, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ComponentsController, ShopperPortalEU_UI_ComponentsLanguageResources, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_Debugger, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_OnParametersChanged_ParametersChangedJS, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_DropdownRendered_DropdownRenderedJS, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_OnReady_InitializeJS, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_Toggle_ToggleJS, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_OnRender_RenderJS, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_OnDestroy_DestroyJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
customChange$Action: function (currentDataIn) {
currentDataIn = (currentDataIn === undefined) ? "" : currentDataIn;
return controller.executeActionInsideJSNode(controller._customChange$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(currentDataIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "CustomChange");
},
close$Action: function () {
return controller.executeActionInsideJSNode(controller._close$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Close");
},
open$Action: function () {
return controller.executeActionInsideJSNode(controller._open$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "Open");
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
Controller.prototype._onParametersChanged$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnParametersChanged");
callContext = controller.callContext(callContext);
var listJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var optionsJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.listJSONVar = listJSONVar;
varBag.optionsJSONVar = optionsJSONVar;
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:gA19NOhUV0SUZ0Nl1kAq+w:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.EVOLdAMPe0Gsb8AJWDUKYw/ClientActions.gA19NOhUV0SUZ0Nl1kAq+w:yTlZ1ErBTdagIA7iRZpiGw", "ShopperPortalEU_UI_Components", "OnParametersChanged", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:HRHo85u_dUWG6uasc4do1g", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:yfuW2de2zkCb97clU7i4aQ", callContext.id) && ((model.variables.objVar) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:TFu+6X37O0i2iZ8+X_8Ahg", callContext.id);
// JSON Serialize: OptionsJSON
optionsJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsIn, true, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:A7uaj7KJcE2xEaw3zQntUA", callContext.id);
// JSON Serialize: ListJSON
listJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.listIn, true, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:vrEsHNvDM0yOVxymePhhng", callContext.id);
// Parameters change method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_OnParametersChanged_ParametersChangedJS, "ParametersChanged", "OnParametersChanged", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object),
List: OS.DataConversion.JSNodeParamConverter.to(listJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
Options: OS.DataConversion.JSNodeParamConverter.to(optionsJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:Mra+7Ww2J0O4+j4ey6uYtw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:9Pj_YQQVOUamfN0j6kyytg", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:gA19NOhUV0SUZ0Nl1kAq+w", callContext.id);
}

};
Controller.prototype._dropdownRendered$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("DropdownRendered");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:ZSf5OV6Iv0OuyuEgx+Iucg:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.EVOLdAMPe0Gsb8AJWDUKYw/ClientActions.ZSf5OV6Iv0OuyuEgx+Iucg:k2vj2amxoo2o0BEfv67G9w", "ShopperPortalEU_UI_Components", "DropdownRendered", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:Z+PEpgH+RkmrSIfUAq172Q", callContext.id);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:mrdawp+uMkW2KydSwjSrgw", callContext.id);
// DropdownRendered method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_DropdownRendered_DropdownRenderedJS, "DropdownRendered", "DropdownRendered", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:4DylhtlaiEqYB0OH2F0GtQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:ZSf5OV6Iv0OuyuEgx+Iucg", callContext.id);
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
var listJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var optionsJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
varBag.callContext = callContext;
varBag.initializeJSResult = initializeJSResult;
varBag.listJSONVar = listJSONVar;
varBag.optionsJSONVar = optionsJSONVar;
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:8q+qTpIXIkSH+xDllWcM2g:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.EVOLdAMPe0Gsb8AJWDUKYw/ClientActions.8q+qTpIXIkSH+xDllWcM2g:IzLLow5N0vsDWDlluwtv8A", "ShopperPortalEU_UI_Components", "OnReady", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:bz_r4BGruU27H8SbQIvYtQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:KwJo6RxoXk+6JDQO9hTCYw", callContext.id);
// JSON Serialize: OptionsJSON
optionsJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.optionsIn, true, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:pLGrKIcy+EKqQ59b2T9X9Q", callContext.id);
// JSON Serialize: ListJSON
listJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(model.variables.listIn, true, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:iGhB63jNdkWl7kCOlRp2iA", callContext.id);
// Initialize component.
initializeJSResult.value = controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_OnReady_InitializeJS, "Initialize", "OnReady", {
Options: OS.DataConversion.JSNodeParamConverter.to(optionsJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
List: OS.DataConversion.JSNodeParamConverter.to(listJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ElementId: OS.DataConversion.JSNodeParamConverter.to(idService.getId("Element"), OS.DataTypes.DataTypes.Text),
Obj: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.OnReady$initializeJSResult"))();
jsNodeResult.objOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Obj, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {
CustomChange: controller.clientActionProxies.customChange$Action,
Close: controller.clientActionProxies.close$Action,
Open: controller.clientActionProxies.open$Action
}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:jWIfCcRUqEetb1VcX4T62g", callContext.id);
// Obj = Initialize.Obj
model.variables.objVar = initializeJSResult.value.objOut;
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:1dlrvbP8y0mzbuX+yc_zgw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:8q+qTpIXIkSH+xDllWcM2g", callContext.id);
}

};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.OnReady$initializeJSResult", [{
name: "Obj",
attrName: "objOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Controller.prototype._open$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Open");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:DPjBTsk9N0q5wL3hdX2KCA:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.EVOLdAMPe0Gsb8AJWDUKYw/ClientActions.DPjBTsk9N0q5wL3hdX2KCA:V30KRGQiJRfjxmfJGDh_lg", "ShopperPortalEU_UI_Components", "Open", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:U6LHwSDQA0mcyTv5NgC_+A", callContext.id);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:LkYOG8GDrUWQg8zO0kuFeA", callContext.id);
// IsVisible = True
model.variables.isVisibleVar = true;
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:+PZTyp3je067+nXS_TfuxA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:DPjBTsk9N0q5wL3hdX2KCA", callContext.id);
}

};
Controller.prototype._customChange$Action = function (currentDataIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("CustomChange");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.CustomChange$vars"))());
vars.value.currentDataInLocal = currentDataIn;
var currentDataJSONVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(ShopperPortalEU_UI_ComponentsModel.CustomDropdownCustomValueOptionRec))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.currentDataJSONVar = currentDataJSONVar;
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:RgfGW2_E7E2kyhNw3qLHHw:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.EVOLdAMPe0Gsb8AJWDUKYw/ClientActions.RgfGW2_E7E2kyhNw3qLHHw:E3TQVXNkYgtRVV2JEh3Axw", "ShopperPortalEU_UI_Components", "CustomChange", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:S2WLRk4BzEiY15dL8kKUvg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:2RvAxzTFIE6r9W8A4f431w", callContext.id);
// JSON Deserialize: CurrentDataJSON
currentDataJSONVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(vars.value.currentDataInLocal, ShopperPortalEU_UI_ComponentsModel.CustomDropdownCustomValueOptionRec, false);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:qlS64QGV4kOqpV90URa+0w", callContext.id);
// Trigger Event: OnCustomChange
return controller.onCustomChange$Action(currentDataJSONVar.value.dataOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:lPZM2k8OhESbgDmdk3uCVA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:RgfGW2_E7E2kyhNw3qLHHw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:RgfGW2_E7E2kyhNw3qLHHw", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.CustomChange$vars", [{
name: "CurrentData",
attrName: "currentDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._toggle$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Toggle");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:eA_lnGwhCEiuoKhPuVE6_g:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.EVOLdAMPe0Gsb8AJWDUKYw/ClientActions.eA_lnGwhCEiuoKhPuVE6_g:N2drJ4tGTwvNtUoXviGu3Q", "ShopperPortalEU_UI_Components", "Toggle", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:OJcNJVD+60WypgfMjQrrNg", callContext.id);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:3vlEbD62yEuBYCTt0_Ac8g", callContext.id);
// Toggle method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_Toggle_ToggleJS, "Toggle", "Toggle", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:L3KVotu5e0u9HPuDY8QOmQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:eA_lnGwhCEiuoKhPuVE6_g", callContext.id);
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
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:pxHKrUBUbk62XyrO28CpEg:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.EVOLdAMPe0Gsb8AJWDUKYw/ClientActions.pxHKrUBUbk62XyrO28CpEg:ltWEmg8+BqgLWBcxKz0jyA", "ShopperPortalEU_UI_Components", "OnRender", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:xIax5eSu80iGUR1ILDWpog", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:EWSel5lyLUepxAs4f6Wonw", callContext.id) && ((model.variables.objVar) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:T3dOBdSHwk2LIwPIom2crA", callContext.id);
// Component render method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_OnRender_RenderJS, "Render", "OnRender", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:VQNmRoHcb0Gmon4kaimX9Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:VQNmRoHcb0Gmon4kaimX9Q", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:pxHKrUBUbk62XyrO28CpEg", callContext.id);
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
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:iL35vq62+0S22x3eHaxEzQ:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.EVOLdAMPe0Gsb8AJWDUKYw/ClientActions.iL35vq62+0S22x3eHaxEzQ:umbQJZ9azgRBVOa3trKm9g", "ShopperPortalEU_UI_Components", "OnDestroy", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:_hN26cr2+0GV08LmumnOYw", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:ZfnbJ4UJjUqZlu1ieJ_DGg", callContext.id) && ((model.variables.objVar) !== (OS.BuiltinFunctions.nullObject())))) {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:b4V+LzakrkCg4c1k8yp3GA", callContext.id);
// Destroy method.
controller.safeExecuteJSNode(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomDropdown_mvc_controller_OnDestroy_DestroyJS, "Destroy", "OnDestroy", {
Obj: OS.DataConversion.JSNodeParamConverter.to(model.variables.objVar, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:nu588JJLa0iMxuvYF9l4zA", callContext.id);
// Obj = NullObject
model.variables.objVar = OS.BuiltinFunctions.nullObject();
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:yYceD5bL5EWt_RRmsmypAw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:uPMls6s7OEa1XexsExahCA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:iL35vq62+0S22x3eHaxEzQ", callContext.id);
}

};
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
try {OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:w9XcwPA5t0+QnFf_V4UDjA:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.EVOLdAMPe0Gsb8AJWDUKYw/ClientActions.w9XcwPA5t0+QnFf_V4UDjA:E6xWxr64PrJGJ93PdE+B9A", "ShopperPortalEU_UI_Components", "Close", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:u6GEbVHWRkCFARgFx4d+yA", callContext.id);
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:fySaDI5lmEeC1F7AzJtLrA", callContext.id);
// IsVisible = False
model.variables.isVisibleVar = false;
OutSystemsDebugger.handleBreakpoint("Jn6752SvaU+UNgdo1U6gGw:Szdf4Sgj2ECoyJuFIKpOGA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:w9XcwPA5t0+QnFf_V4UDjA", callContext.id);
}

};

Controller.prototype.onParametersChanged$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onParametersChanged$Action, callContext);

};
Controller.prototype.dropdownRendered$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._dropdownRendered$Action, callContext);

};
Controller.prototype.onReady$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onReady$Action, callContext);

};
Controller.prototype.open$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._open$Action, callContext);

};
Controller.prototype.customChange$Action = function (currentDataIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._customChange$Action, callContext, currentDataIn);

};
Controller.prototype.toggle$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._toggle$Action, callContext);

};
Controller.prototype.onRender$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onRender$Action, callContext);

};
Controller.prototype.onDestroy$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onDestroy$Action, callContext);

};
Controller.prototype.close$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._close$Action, callContext);

};
Controller.prototype.onCustomChange$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:7hC2bHqrKEmxvEuPSzIN0Q:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q:g5BtT+X6uN+vFl8t9PMqCQ", "ShopperPortalEU_UI_Components", "ShopperPortalEUUIComponents", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("Jn6752SvaU+UNgdo1U6gGw:EVOLdAMPe0Gsb8AJWDUKYw:/NRWebFlows.7hC2bHqrKEmxvEuPSzIN0Q/NodesShownInESpaceTree.EVOLdAMPe0Gsb8AJWDUKYw:53GZJpLVumpHWjwyXx4UGQ", "ShopperPortalEU_UI_Components", "CustomDropdown", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("Jn6752SvaU+UNgdo1U6gGw:EVOLdAMPe0Gsb8AJWDUKYw", callContext.id);
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

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/CustomDropdown On Ready");
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

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/CustomDropdown On Render");
return controller.onRender$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onDestroyEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/CustomDropdown On Destroy");
return controller.onDestroy$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
Controller.prototype.onParametersChangedEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "ShopperPortalEUUIComponents/CustomDropdown On Parameters Changed");
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
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.OnParametersChanged.ParametersChangedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.parametersChanged(JSON.parse($parameters.Options),JSON.parse($parameters.List));
};
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.DropdownRendered.DropdownRenderedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.dropdownRendered();
};
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.OnReady.InitializeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj = new customDropdown($parameters.ElementId, JSON.parse($parameters.Options),{
    customChange:$actions.CustomChange,
    close:$actions.Close,
    open: $actions.Open
},JSON.parse($parameters.List))
};
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.Toggle.ToggleJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.toggle();
};
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.OnRender.RenderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.render();
};
});
define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$controller.OnDestroy.DestroyJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Obj.destroy();
};
});

define("ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomDropdown.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"A7uaj7KJcE2xEaw3zQntUA": {
getter: function (varBag, idService) {
return varBag.listJSONVar.value;
}
},
"TFu+6X37O0i2iZ8+X_8Ahg": {
getter: function (varBag, idService) {
return varBag.optionsJSONVar.value;
}
},
"vrEsHNvDM0yOVxymePhhng": {
getter: function (varBag, idService) {
return varBag.parametersChangedJSResult.value;
}
},
"mrdawp+uMkW2KydSwjSrgw": {
getter: function (varBag, idService) {
return varBag.dropdownRenderedJSResult.value;
}
},
"pLGrKIcy+EKqQ59b2T9X9Q": {
getter: function (varBag, idService) {
return varBag.listJSONVar.value;
}
},
"KwJo6RxoXk+6JDQO9hTCYw": {
getter: function (varBag, idService) {
return varBag.optionsJSONVar.value;
}
},
"iGhB63jNdkWl7kCOlRp2iA": {
getter: function (varBag, idService) {
return varBag.initializeJSResult.value;
}
},
"rVmJ2ZM7VUCkSS9fJs1umg": {
getter: function (varBag, idService) {
return varBag.vars.value.currentDataInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2RvAxzTFIE6r9W8A4f431w": {
getter: function (varBag, idService) {
return varBag.currentDataJSONVar.value;
}
},
"3vlEbD62yEuBYCTt0_Ac8g": {
getter: function (varBag, idService) {
return varBag.toggleJSResult.value;
}
},
"T3dOBdSHwk2LIwPIom2crA": {
getter: function (varBag, idService) {
return varBag.renderJSResult.value;
}
},
"b4V+LzakrkCg4c1k8yp3GA": {
getter: function (varBag, idService) {
return varBag.destroyJSResult.value;
}
},
"pnu7UBXnTUSp+2+b_i1fHQ": {
getter: function (varBag, idService) {
return varBag.model.variables.objVar;
},
dataType: OS.DataTypes.DataTypes.Object
},
"sFhy4vpPdECVBemD18hMRw": {
getter: function (varBag, idService) {
return varBag.model.variables.searchVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"NjEqIhC7jkODj3YJMogk_A": {
getter: function (varBag, idService) {
return varBag.model.variables.isVisibleVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"IPoE7YAfiECep4Cs1FGBCQ": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsIn;
}
},
"d4uyqUWq2Eq2un8E1kouKA": {
getter: function (varBag, idService) {
return varBag.model.variables.listIn;
}
},
"IIalxlwJGku2gK3LnUcSIg": {
getter: function (varBag, idService) {
return varBag.model.variables.extendedClassIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"hPVNgIA9e0Kq3KxpImEdEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Element"));
})(varBag.model, idService);
}
},
"k+qXVEJK9EStctotYsxSew": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"SXIPK_HqFEi_nXxguz3OFw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Search"));
})(varBag.model, idService);
}
},
"2uJZQSaD70GukLyMi_L78Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Dropdown"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
