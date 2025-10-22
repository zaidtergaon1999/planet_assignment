define("reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.mvc$model", ["OutSystems/ClientRuntime/Main", "reCAPTCHAReact.model", "reCAPTCHAReact.reCAPTCHAPrivate.GoogleJS.mvc$model"], function (OutSystems, reCAPTCHAReactModel, reCAPTCHAReact_reCAPTCHAPrivate_GoogleJS_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("SiteKey", "siteKeyIn", "SiteKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_siteKeyInDataFetchStatus", "_siteKeyInDataFetchStatus", "_siteKeyInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("RecaptchaTheme", "recaptchaThemeIn", "RecaptchaTheme", true, false, OS.DataTypes.DataTypes.Text, function () {
return reCAPTCHAReactModel.staticEntities.recaptchaTheme.light;
}, false), 
this.attr("_recaptchaThemeInDataFetchStatus", "_recaptchaThemeInDataFetchStatus", "_recaptchaThemeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("RecaptchaBadge", "recaptchaBadgeIn", "RecaptchaBadge", true, false, OS.DataTypes.DataTypes.Text, function () {
return reCAPTCHAReactModel.staticEntities.recaptchaBadge.inline;
}, false), 
this.attr("_recaptchaBadgeInDataFetchStatus", "_recaptchaBadgeInDataFetchStatus", "_recaptchaBadgeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Checkbox", "checkboxIn", "Checkbox", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_checkboxInDataFetchStatus", "_checkboxInDataFetchStatus", "_checkboxInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("RecaptchaSize", "recaptchaSizeIn", "RecaptchaSize", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_recaptchaSizeInDataFetchStatus", "_recaptchaSizeInDataFetchStatus", "_recaptchaSizeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("HideBadge", "hideBadgeIn", "HideBadge", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_hideBadgeInDataFetchStatus", "_hideBadgeInDataFetchStatus", "_hideBadgeInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AddExpiredCallback", "addExpiredCallbackIn", "AddExpiredCallback", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_addExpiredCallbackInDataFetchStatus", "_addExpiredCallbackInDataFetchStatus", "_addExpiredCallbackInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("AddErrorCallback", "addErrorCallbackIn", "AddErrorCallback", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_addErrorCallbackInDataFetchStatus", "_addErrorCallbackInDataFetchStatus", "_addErrorCallbackInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = reCAPTCHAReact_reCAPTCHAPrivate_GoogleJS_mvcModel.hasValidationWidgets;
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("SiteKey" in inputs) {
this.variables.siteKeyIn = inputs.SiteKey;
if("_siteKeyInDataFetchStatus" in inputs) {
this.variables._siteKeyInDataFetchStatus = inputs._siteKeyInDataFetchStatus;
}

}

if("RecaptchaTheme" in inputs) {
this.variables.recaptchaThemeIn = inputs.RecaptchaTheme;
if("_recaptchaThemeInDataFetchStatus" in inputs) {
this.variables._recaptchaThemeInDataFetchStatus = inputs._recaptchaThemeInDataFetchStatus;
}

}

if("RecaptchaBadge" in inputs) {
this.variables.recaptchaBadgeIn = inputs.RecaptchaBadge;
if("_recaptchaBadgeInDataFetchStatus" in inputs) {
this.variables._recaptchaBadgeInDataFetchStatus = inputs._recaptchaBadgeInDataFetchStatus;
}

}

if("Checkbox" in inputs) {
this.variables.checkboxIn = inputs.Checkbox;
if("_checkboxInDataFetchStatus" in inputs) {
this.variables._checkboxInDataFetchStatus = inputs._checkboxInDataFetchStatus;
}

}

if("RecaptchaSize" in inputs) {
this.variables.recaptchaSizeIn = inputs.RecaptchaSize;
if("_recaptchaSizeInDataFetchStatus" in inputs) {
this.variables._recaptchaSizeInDataFetchStatus = inputs._recaptchaSizeInDataFetchStatus;
}

}

if("HideBadge" in inputs) {
this.variables.hideBadgeIn = inputs.HideBadge;
if("_hideBadgeInDataFetchStatus" in inputs) {
this.variables._hideBadgeInDataFetchStatus = inputs._hideBadgeInDataFetchStatus;
}

}

if("AddExpiredCallback" in inputs) {
this.variables.addExpiredCallbackIn = inputs.AddExpiredCallback;
if("_addExpiredCallbackInDataFetchStatus" in inputs) {
this.variables._addExpiredCallbackInDataFetchStatus = inputs._addExpiredCallbackInDataFetchStatus;
}

}

if("AddErrorCallback" in inputs) {
this.variables.addErrorCallbackIn = inputs.AddErrorCallback;
if("_addErrorCallbackInDataFetchStatus" in inputs) {
this.variables._addErrorCallbackInDataFetchStatus = inputs._addErrorCallbackInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "reCAPTCHAPrivate.Recaptcha");
});
define("reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.mvc$view", ["OutSystems/ClientRuntime/Main", "reCAPTCHAReact.model", "reCAPTCHAReact.controller", "react", "OutSystems/ReactView/Main", "reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.mvc$model", "reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.mvc$controller", "reCAPTCHAReact.reCAPTCHAPrivate.GoogleJS.mvc$view", "OutSystems/ReactWidgets/Main"], function (OutSystems, reCAPTCHAReactModel, reCAPTCHAReactController, React, OSView, reCAPTCHAReact_reCAPTCHAPrivate_Recaptcha_mvc_model, reCAPTCHAReact_reCAPTCHAPrivate_Recaptcha_mvc_controller, reCAPTCHAReact_reCAPTCHAPrivate_GoogleJS_mvc_view, OSWidgets) {
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
        View.displayName = "reCAPTCHAPrivate.Recaptcha";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [reCAPTCHAReact_reCAPTCHAPrivate_GoogleJS_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return reCAPTCHAReact_reCAPTCHAPrivate_Recaptcha_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return reCAPTCHAReact_reCAPTCHAPrivate_Recaptcha_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), $if((model.variables.siteKeyIn === ""), false, this, function () {
return [];
}, function () {
return [React.createElement(reCAPTCHAReact_reCAPTCHAPrivate_GoogleJS_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onLoad$Action: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "reCAPTCHAPrivate/GoogleJS OnLoad");
return controller.googleJSOnLoad$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
}
},
_validationProps: {
validationService: validationService
},
_idProps: {
service: idService,
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), $if(false, false, this, function () {
return [];
}, function () {
return [$if(model.variables.checkboxIn, false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-theme": model.variables.recaptchaThemeIn,
"data-size": model.variables.recaptchaSizeIn
},
style: "g-recaptcha",
visible: true,
_idProps: {
service: idService,
name: "ContainerCheckbox"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: model.getCachedValue(idService.getId("2N75sOEeI0asbBWH9DU3Ww.Style"), function () {
return ((model.variables.hideBadgeIn) ? ("hide-badge") : (""));
}, function () {
return model.variables.hideBadgeIn;
}),
visible: true,
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
style_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._hideBadgeInDataFetchStatus)
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-size": "invisible",
"data-theme": model.variables.recaptchaThemeIn,
"data-badge": model.variables.recaptchaBadgeIn
},
style: "g-recaptcha",
visible: true,
_idProps: {
service: idService,
name: "ContainerBadge"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})];
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.mvc$controller", ["OutSystems/ClientRuntime/Main", "reCAPTCHAReact.model", "reCAPTCHAReact.controller", "reCAPTCHAReact.languageResources", "reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.mvc$debugger", "reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.mvc$controller.RenderRecaptcha.RenderJS"], function (OutSystems, reCAPTCHAReactModel, reCAPTCHAReactController, reCAPTCHAReactLanguageResources, reCAPTCHAReact_reCAPTCHAPrivate_Recaptcha_mvc_Debugger, reCAPTCHAReact_reCAPTCHAPrivate_Recaptcha_mvc_controller_RenderRecaptcha_RenderJS) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {
triggerOnDataCallback$Action: function (tokenIn) {
tokenIn = (tokenIn === undefined) ? "" : tokenIn;
return controller.executeActionInsideJSNode(controller._triggerOnDataCallback$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tokenIn, OS.DataTypes.DataTypes.Text)), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerOnDataCallback");
},
triggerExpiredCallback$Action: function () {
return controller.executeActionInsideJSNode(controller._triggerExpiredCallback$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerExpiredCallback");
},
triggerErrorCallback$Action: function () {
return controller.executeActionInsideJSNode(controller._triggerErrorCallback$Action.bind(controller), controller.callContext(), function (actionResults) {
return {};
}, function () {
return;
}, "TriggerErrorCallback");
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
Controller.prototype._triggerExpiredCallback$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerExpiredCallback");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("o_YczqP5jE+AKx3_6JNghg:_psOZ4QirkGFrr0r77WuTQ:/NRWebFlows.4iJa9bpDZ0anc6ITcMzLEQ/NodesShownInESpaceTree._TneByZugkuy3+BsLPzQ_g/ClientActions._psOZ4QirkGFrr0r77WuTQ:nmRVpKIeSQ6wLajI+7RXGA", "reCAPTCHAReact", "TriggerExpiredCallback", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:p+T8uRbXkUy31fa0DUht5w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:06muedpl90aGy49USOw+Cg", callContext.id);
// Trigger Event: ExpiredCallback
return controller.expiredCallback$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:8ENFAR5H_0C2fICsBbixPA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:_psOZ4QirkGFrr0r77WuTQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:_psOZ4QirkGFrr0r77WuTQ", callContext.id);
throw ex;

});
};
Controller.prototype._triggerOnDataCallback$Action = function (tokenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerOnDataCallback");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.TriggerOnDataCallback$vars"))());
vars.value.tokenInLocal = tokenIn;
varBag.callContext = callContext;
varBag.vars = vars;
OutSystemsDebugger.push("o_YczqP5jE+AKx3_6JNghg:15HRrKRTz0uWyfR4iSE7WA:/NRWebFlows.4iJa9bpDZ0anc6ITcMzLEQ/NodesShownInESpaceTree._TneByZugkuy3+BsLPzQ_g/ClientActions.15HRrKRTz0uWyfR4iSE7WA:QfcuTtRxYJWdOA1MtV2aNQ", "reCAPTCHAReact", "TriggerOnDataCallback", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:0V+EXzE210aeOOufJrv3aQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:kaEqh+PUxk2_jiwEfxMu4Q", callContext.id);
// Trigger Event: DataCallback
return controller.dataCallback$Action(vars.value.tokenInLocal, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:dFXbCX7GgU6hdRrrd_0_nA", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:15HRrKRTz0uWyfR4iSE7WA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:15HRrKRTz0uWyfR4iSE7WA", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.TriggerOnDataCallback$vars", [{
name: "Token",
attrName: "tokenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._renderRecaptcha$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("RenderRecaptcha");
callContext = controller.callContext(callContext);
var renderJSResult = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.renderJSResult = renderJSResult;
OutSystemsDebugger.push("o_YczqP5jE+AKx3_6JNghg:q8OkrnFADUmajjOfToo0uQ:/NRWebFlows.4iJa9bpDZ0anc6ITcMzLEQ/NodesShownInESpaceTree._TneByZugkuy3+BsLPzQ_g/ClientActions.q8OkrnFADUmajjOfToo0uQ:Vip+S9Lk2u4nlIRbP4eTNg", "reCAPTCHAReact", "RenderRecaptcha", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:+KWMR4IjGEilB9JC4Qs8Tw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:T_l6Af2sO0mk3e_23mbLKg", callContext.id);
return controller.safeExecuteAsyncJSNode(reCAPTCHAReact_reCAPTCHAPrivate_Recaptcha_mvc_controller_RenderRecaptcha_RenderJS, "Render", "RenderRecaptcha", {
AddExpiredCallback: OS.DataConversion.JSNodeParamConverter.to(model.variables.addExpiredCallbackIn, OS.DataTypes.DataTypes.Boolean),
WidgetId: OS.DataConversion.JSNodeParamConverter.to(((model.variables.checkboxIn) ? (idService.getId("ContainerCheckbox")) : (idService.getId("ContainerBadge"))), OS.DataTypes.DataTypes.Text),
SiteKey: OS.DataConversion.JSNodeParamConverter.to(model.variables.siteKeyIn, OS.DataTypes.DataTypes.Text),
AddErrorCallback: OS.DataConversion.JSNodeParamConverter.to(model.variables.addErrorCallbackIn, OS.DataTypes.DataTypes.Boolean),
RecaptchaId: OS.DataConversion.JSNodeParamConverter.to(0, OS.DataTypes.DataTypes.Integer),
Success: OS.DataConversion.JSNodeParamConverter.to(true, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.RenderRecaptcha$renderJSResult"))();
jsNodeResult.recaptchaIdOut = OS.DataConversion.JSNodeParamConverter.from($parameters.RecaptchaId, OS.DataTypes.DataTypes.Integer);
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {
TriggerOnDataCallback: controller.clientActionProxies.triggerOnDataCallback$Action,
TriggerExpiredCallback: controller.clientActionProxies.triggerExpiredCallback$Action,
TriggerErrorCallback: controller.clientActionProxies.triggerErrorCallback$Action
}, {}).then(function (results) {
renderJSResult.value = results;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:zattL_LnjE2UpN_ON2sUxw", callContext.id) && !(renderJSResult.value.successOut))) {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:NF2Wzo7mGUOuVcudI19Org", callContext.id);
// Raise Error: RenderException
throw new OS.Exceptions.Exceptions.UserException("reCAPTCHAReact.RenderException", "Could not render the reCAPTCHA");
} else {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:admkySZH7kS4JLvfr+MufA", callContext.id);
// Trigger Event: RecaptchaRendered
return controller.recaptchaRendered$Action((renderJSResult.value.recaptchaIdOut).toString(), callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:zG3tth6P+0OYrnY824ziUg", callContext.id);
});
}

});
});
}).then(function (res) {
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:q8OkrnFADUmajjOfToo0uQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:q8OkrnFADUmajjOfToo0uQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.RenderRecaptcha$renderJSResult", [{
name: "RecaptchaId",
attrName: "recaptchaIdOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 0;
}
}, {
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}]);
Controller.prototype._triggerErrorCallback$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("TriggerErrorCallback");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("o_YczqP5jE+AKx3_6JNghg:Ke6k5uwN5kqlziLILQjfmg:/NRWebFlows.4iJa9bpDZ0anc6ITcMzLEQ/NodesShownInESpaceTree._TneByZugkuy3+BsLPzQ_g/ClientActions.Ke6k5uwN5kqlziLILQjfmg:1Pby48BWtdnzDlXilJ8+qw", "reCAPTCHAReact", "TriggerErrorCallback", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:T3HIGx17kkutEo4lzf92bQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:NpdJvTRWsE+pdJXksgcTYQ", callContext.id);
// Trigger Event: ErrorCallback
return controller.errorCallback$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:_6nQ74nl40+0KNu03FoLvg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:Ke6k5uwN5kqlziLILQjfmg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:Ke6k5uwN5kqlziLILQjfmg", callContext.id);
throw ex;

});
};
Controller.prototype._googleJSOnLoad$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GoogleJSOnLoad");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("o_YczqP5jE+AKx3_6JNghg:P6P17Bi7QU2aZZpShD4OUg:/NRWebFlows.4iJa9bpDZ0anc6ITcMzLEQ/NodesShownInESpaceTree._TneByZugkuy3+BsLPzQ_g/ClientActions.P6P17Bi7QU2aZZpShD4OUg:zc1rDQroowxIlLhKflISJA", "reCAPTCHAReact", "GoogleJSOnLoad", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:lhZRe8+X70ifZabheqPqGg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:HgrHQGtjQUmB0o4xRpB2dg", callContext.id);
// Execute Action: RenderRecaptcha
return controller._renderRecaptcha$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("o_YczqP5jE+AKx3_6JNghg:qVKs+LTatEyt_PO6fixteg", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:P6P17Bi7QU2aZZpShD4OUg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:P6P17Bi7QU2aZZpShD4OUg", callContext.id);
throw ex;

});
};

Controller.prototype.triggerExpiredCallback$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerExpiredCallback$Action, callContext);

};
Controller.prototype.triggerOnDataCallback$Action = function (tokenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerOnDataCallback$Action, callContext, tokenIn);

};
Controller.prototype.renderRecaptcha$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._renderRecaptcha$Action, callContext);

};
Controller.prototype.triggerErrorCallback$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._triggerErrorCallback$Action, callContext);

};
Controller.prototype.googleJSOnLoad$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._googleJSOnLoad$Action, callContext);

};
Controller.prototype.errorCallback$Action = function () {
return Promise.resolve();
};
Controller.prototype.dataCallback$Action = function () {
return Promise.resolve();
};
Controller.prototype.expiredCallback$Action = function () {
return Promise.resolve();
};
Controller.prototype.recaptchaRendered$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("o_YczqP5jE+AKx3_6JNghg:4iJa9bpDZ0anc6ITcMzLEQ:/NRWebFlows.4iJa9bpDZ0anc6ITcMzLEQ:jL9CWKo0vzi2ozx67CiyHw", "reCAPTCHAReact", "reCAPTCHAPrivate", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("o_YczqP5jE+AKx3_6JNghg:_TneByZugkuy3+BsLPzQ_g:/NRWebFlows.4iJa9bpDZ0anc6ITcMzLEQ/NodesShownInESpaceTree._TneByZugkuy3+BsLPzQ_g:CA1F6at92ujaTFnWBh4JBg", "reCAPTCHAReact", "Recaptcha", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:_TneByZugkuy3+BsLPzQ_g", callContext.id);
OutSystemsDebugger.pop("o_YczqP5jE+AKx3_6JNghg:4iJa9bpDZ0anc6ITcMzLEQ", callContext.id);
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
return reCAPTCHAReactController.default.defaultTimeout;
};
return Controller;
})(OS.Controller.BaseViewController);
return new OS.Controller.ControllerFactory(Controller, reCAPTCHAReactLanguageResources);
});
define("reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.mvc$controller.RenderRecaptcha.RenderJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
// Ensure the container is dynamically fetched based on a more reliable attribute
var container = document.querySelector("[id='" + $parameters.WidgetId + "']");

var parameters = {
    'sitekey': $parameters.SiteKey,
    'callback': $actions.TriggerOnDataCallback
};

if ($parameters.AddExpiredCallback) {
    parameters["expired-callback"] = $actions.TriggerExpiredCallback;
}

if ($parameters.AddErrorCallback) {
    parameters["error-callback"] = $actions.TriggerErrorCallback;
}

if (typeof grecaptcha !== 'undefined') {
    grecaptcha.ready(function () {
        // Double-check the element after reactivity update
        container = document.querySelector("[id='" + $parameters.WidgetId + "']");
        
        if (!container) {
            console.error('reCAPTCHA error: Container not found. WidgetId:', $parameters.WidgetId);
            $parameters.Success = false;
            $resolve();
            return;
        }

        // Prevent multiple renders using a data attribute
        if (container.dataset.recaptchaRendered === "true") {
            //console.warn('reCAPTCHA already rendered. Skipping render.');
            $resolve();
            return;
        }

        // Render reCAPTCHA and mark as rendered
        try {
            $parameters.RecaptchaId = grecaptcha.render(container, parameters);
            container.dataset.recaptchaRendered = "true";
            $resolve();
        } catch (error) {
            console.error('Error rendering reCAPTCHA:', error);
            $parameters.Success = false;
            $resolve();
        }
    });
} else {
    console.error('grecaptcha not loaded');
    $parameters.Success = false;
    $resolve();
}

});
};
});

define("reCAPTCHAReact.reCAPTCHAPrivate.Recaptcha.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"IAUsZgBQmUWF4Rp88457Lw": {
getter: function (varBag, idService) {
return varBag.vars.value.tokenInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"T_l6Af2sO0mk3e_23mbLKg": {
getter: function (varBag, idService) {
return varBag.renderJSResult.value;
}
},
"2DyWchpdAUmudqwwWy7E1w": {
getter: function (varBag, idService) {
return varBag.model.variables.siteKeyIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"_Ygyu++eNkG8y2QJ3O1Ogg": {
getter: function (varBag, idService) {
return varBag.model.variables.recaptchaThemeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fv9anxlhTkGzpRIW07y75A": {
getter: function (varBag, idService) {
return varBag.model.variables.recaptchaBadgeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"BT6_DeJhIUmjbwETvwIm9A": {
getter: function (varBag, idService) {
return varBag.model.variables.checkboxIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tBuyCYPhAk6lherhYU1+GA": {
getter: function (varBag, idService) {
return varBag.model.variables.recaptchaSizeIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tK2PMz1KG0GczUhotDHCZQ": {
getter: function (varBag, idService) {
return varBag.model.variables.hideBadgeIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"xJgHZgWe9EyX4LkkkyRb4Q": {
getter: function (varBag, idService) {
return varBag.model.variables.addExpiredCallbackIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"njSxfUjCgEOnnxi0b_rqAA": {
getter: function (varBag, idService) {
return varBag.model.variables.addErrorCallbackIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"9Ou+UQCqREOT8XCzqVFYxQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Empty_Sitekey"));
})(varBag.model, idService);
}
},
"LhABpTr3802s97Wiv6PUIA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Preview"));
})(varBag.model, idService);
}
},
"Q6BkaMBu7UCM50sbgxC4dw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("If_Checkbox"));
})(varBag.model, idService);
}
},
"kXm63iQ5DUGRS2Ymk_JyLw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContainerCheckbox"));
})(varBag.model, idService);
}
},
"e2OUPwi05UaXGS0tZ3Comw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ContainerBadge"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
