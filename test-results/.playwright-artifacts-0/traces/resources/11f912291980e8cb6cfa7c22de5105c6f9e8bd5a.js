define("ShopperPortalEU.Layouts.LayoutDetail.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Theme.controller", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$model", "ShopperPortalEU_DataSync.Sync.DataSyncCore.mvc$model", "ShopperPortalEU_UI_Theme.model$LayoutDetailOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU.model$LayoutAuthenticationRec", "ShopperPortalEU_UI_Theme.model$HeaderStepsOptionsRec", "ShopperPortalEU.controller$LayoutCheckAuthentication", "ShopperPortalEU.controller$CheckRedirectShopper", "ShopperPortalEU_UI_Theme.model$CustomMessageOptionsRec", "ShopperPortalEU_UI_Theme.controller$CustomMessageTrigger", "ShopperPortalEU.controller$GenericErrorMessage"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEU_UI_ThemeModel, ShopperPortalEUController, ShopperPortalEU_UI_ThemeController, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvcModel, ShopperPortalEU_DataSync_Sync_DataSyncCore_mvcModel) {
var OS = OutSystems.Internal;

var GetWebAuthSitePropertiesDataActRec = (function (_super) {
__extends(GetWebAuthSitePropertiesDataActRec, _super);
function GetWebAuthSitePropertiesDataActRec(defaults) {
_super.apply(this, arguments);
}
GetWebAuthSitePropertiesDataActRec.attributesToDeclare = function () {
return [
this.attr("Domain", "domainOut", "Domain", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ClientId", "clientIdOut", "ClientId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RedirectURL", "redirectURLOut", "RedirectURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetWebAuthSitePropertiesDataActRec.init();
return GetWebAuthSitePropertiesDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Options", "optionsIn", "Options", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEU_UI_ThemeModel.LayoutDetailOptionsRec());
}, false, ShopperPortalEU_UI_ThemeModel.LayoutDetailOptionsRec), 
this.attr("_optionsInDataFetchStatus", "_optionsInDataFetchStatus", "_optionsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Auth", "authIn", "Auth", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new ShopperPortalEUModel.LayoutAuthenticationRec());
}, false, ShopperPortalEUModel.LayoutAuthenticationRec), 
this.attr("_authInDataFetchStatus", "_authInDataFetchStatus", "_authInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetWebAuthSiteProperties", "getWebAuthSitePropertiesDataAct", "getWebAuthSitePropertiesDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetWebAuthSitePropertiesDataActRec());
}, true, GetWebAuthSitePropertiesDataActRec)
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
Model._hasValidationWidgetsValue = (ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvcModel.hasValidationWidgets || ShopperPortalEU_DataSync_Sync_DataSyncCore_mvcModel.hasValidationWidgets);
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

if("Auth" in inputs) {
this.variables.authIn = inputs.Auth;
if("_authInDataFetchStatus" in inputs) {
this.variables._authInDataFetchStatus = inputs._authInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Layouts.LayoutDetail");
});
define("ShopperPortalEU.Layouts.LayoutDetail.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Theme.controller", "react", "OutSystems/ReactView/Main", "ShopperPortalEU.Layouts.LayoutDetail.mvc$model", "ShopperPortalEU.Layouts.LayoutDetail.mvc$controller", "ShopperPortalEU.clientVariables", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayouts.LayoutDetail.mvc$view", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_DataSync.Sync.DataSyncCore.mvc$view", "ShopperPortalEU_UI_Theme.model$LayoutDetailOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU.model$LayoutAuthenticationRec", "ShopperPortalEU_UI_Theme.model$HeaderStepsOptionsRec", "ShopperPortalEU.controller$LayoutCheckAuthentication", "ShopperPortalEU.controller$CheckRedirectShopper", "ShopperPortalEU_UI_Theme.model$CustomMessageOptionsRec", "ShopperPortalEU_UI_Theme.controller$CustomMessageTrigger", "ShopperPortalEU.controller$GenericErrorMessage"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ThemeController, React, OSView, ShopperPortalEU_Layouts_LayoutDetail_mvc_model, ShopperPortalEU_Layouts_LayoutDetail_mvc_controller, ShopperPortalEUClientVariables, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_view, OSWidgets, ShopperPortalEU_DataSync_Sync_DataSyncCore_mvc_view) {
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
        View.displayName = "Layouts.LayoutDetail";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_view, ShopperPortalEU_DataSync_Sync_DataSyncCore_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_Layouts_LayoutDetail_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_Layouts_LayoutDetail_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayouts_LayoutDetail_mvc_view, {
inputs: {
Options: model.variables.optionsIn,
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._optionsInDataFetchStatus)
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onOrientationChange$Action: function (currentOrientationIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "ShopperPortalEUUIThemeLayouts/LayoutDetail OnOrientationChange");
controller.onOrientationChange$Action("", controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
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
placeholders: {
headerLeft: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerLeft,
style: "ph",
_idProps: {
service: idService,
name: "HeaderLeft"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
headerCenter: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerCenter,
style: "ph",
_idProps: {
service: idService,
name: "HeaderCenter"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
headerRight: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.headerRight,
style: "ph",
_idProps: {
service: idService,
name: "HeaderRight"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.content,
style: "ph",
_idProps: {
service: idService,
name: "Content"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Placeholder, {
align: /*Default*/ 0,
content: _this.props.placeholders.bottom,
style: "ph",
_idProps: {
service: idService,
name: "Bottom"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
}
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "hide-on-service-studio",
visible: true,
_idProps: {
service: idService,
name: "Sync"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_DataSync_Sync_DataSyncCore_mvc_view, {
inputs: {},
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
uuid: "7",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU.Layouts.LayoutDetail.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Theme.controller", "ShopperPortalEU.languageResources", "ShopperPortalEU.clientVariables", "ShopperPortalEU.Layouts.LayoutDetail.mvc$debugger", "ShopperPortalEU_UI_Theme.model$LayoutDetailOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU.model$LayoutAuthenticationRec", "ShopperPortalEU_UI_Theme.model$HeaderStepsOptionsRec", "ShopperPortalEU.controller$LayoutCheckAuthentication", "ShopperPortalEU.controller$CheckRedirectShopper", "ShopperPortalEU_UI_Theme.model$CustomMessageOptionsRec", "ShopperPortalEU_UI_Theme.controller$CustomMessageTrigger", "ShopperPortalEU.controller$GenericErrorMessage"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ThemeController, ShopperPortalEULanguageResources, ShopperPortalEUClientVariables, ShopperPortalEU_Layouts_LayoutDetail_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getWebAuthSiteProperties$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
getWebAuthSiteProperties$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = true;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getWebAuthSiteProperties$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:1x+57AQrXUuS8jDf0pxx0Q:/NRWebFlows.9dW_P1aGJE6tp_XCzsZj4Q/NodesShownInESpaceTree.JiixCpIoXEKG1x8YmhlEtw/DataActions.1x+57AQrXUuS8jDf0pxx0Q:o5BRekOMZU5u9nrrZw3oIg", "ShopperPortalEU", "GetWebAuthSiteProperties", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/LayoutDetail/GetWebAuthSiteProperties");
return controller.callDataAction("DataActionGetWebAuthSiteProperties", "screenservices/ShopperPortalEU/Layouts/LayoutDetail/DataActionGetWebAuthSiteProperties", "f21k_TZBWF5uqE6tQ+6e2A", function (b) {
model.variables.getWebAuthSitePropertiesDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getWebAuthSitePropertiesDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getWebAuthSitePropertiesDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, ShopperPortalEUClientVariables, false).then(function () {
OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/LayoutDetail/GetWebAuthSiteProperties On After Fetch");
return controller._getWebAuthSitePropertiesOnAfterFetch$Action(controller.callContext(callContext));

});

}, function () {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:1x+57AQrXUuS8jDf0pxx0Q", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getWebAuthSiteProperties$DataActRefresh"];
// Client Actions
Controller.prototype._onInitialize$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("OnInitialize");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:n4Uaf+1P40mw7RDahCK2CA:/NRWebFlows.9dW_P1aGJE6tp_XCzsZj4Q/NodesShownInESpaceTree.JiixCpIoXEKG1x8YmhlEtw/ClientActions.n4Uaf+1P40mw7RDahCK2CA:vOxxX6bVdZLkDeTX8V02Dw", "ShopperPortalEU", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:gykAj8XmLUu057wGgQ8C6g", callContext.id);
// In maintenance
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:8dgL0QlYbESPSwI1vzwhdQ", callContext.id) && (ShopperPortalEUClientVariables.getIsInMaintenance() && !(model.variables.authIn.notCheckMaintenanceAttr)))) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:WX8tIsLHk0SxeR2dvLx7ug", callContext.id);
// Raise Error: Maintenance
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU.Maintenance", "Application in maintenance");
} else {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:s5_c5FyYtEObDQZ10SfpBA", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:n4Uaf+1P40mw7RDahCK2CA", callContext.id);
}

};
Controller.prototype._getWebAuthSitePropertiesOnAfterFetch$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("GetWebAuthSitePropertiesOnAfterFetch");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var layoutCheckAuthenticationVar = new OS.DataTypes.VariableHolder();
var checkRedirectShopperVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.layoutCheckAuthenticationVar = layoutCheckAuthenticationVar;
varBag.checkRedirectShopperVar = checkRedirectShopperVar;
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:CGVdlUgMq0aDUNLXBkb1rw:/NRWebFlows.9dW_P1aGJE6tp_XCzsZj4Q/NodesShownInESpaceTree.JiixCpIoXEKG1x8YmhlEtw/ClientActions.CGVdlUgMq0aDUNLXBkb1rw:Cw2_yvajZ3jWzpdHfC86yA", "ShopperPortalEU", "GetWebAuthSitePropertiesOnAfterFetch", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:pFb8_JnGVkq3U9JC4v58sA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:lzQTO4n+U0GCe2deBdzdew", callContext.id);
// Execute Action: LayoutCheckAuthentication
model.flush();
return ShopperPortalEUController.default.layoutCheckAuthentication$Action(model.variables.authIn, model.variables.getWebAuthSitePropertiesDataAct.domainOut, model.variables.getWebAuthSitePropertiesDataAct.clientIdOut, model.variables.getWebAuthSitePropertiesDataAct.redirectURLOut, callContext).then(function (value) {
layoutCheckAuthenticationVar.value = value;
}).then(function () {
// Check shopper
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:GfittQ9DxU6Exsqe_fIdlw", callContext.id) && ((!(ShopperPortalEUClientVariables.getShopperChecked()) && model.variables.authIn.isToUseAuthAttr) && !(model.variables.authIn.notAutomaticallyRedirectAttr)))) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:QwY8T2fFVEKjwWfjH3preQ", callContext.id);
// Execute Action: CheckRedirectShopper
model.flush();
return ShopperPortalEUController.default.checkRedirectShopper$Action(callContext).then(function (value) {
checkRedirectShopperVar.value = value;
}).then(function () {
// Success
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:hj2rD3RCaUeJ74LYiI2OYg", callContext.id) && !(checkRedirectShopperVar.value.hasErrorOut))) {
// Redirect
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:Yin6sT1O9EWTYaWgVKmyKg", callContext.id) && (checkRedirectShopperVar.value.redirectOut === 1))) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:fE+EJiO0MUuM8h60KlvXsA", callContext.id);
// Destination: /ShopperPortalEU/TermsService
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "TermsService", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((checkRedirectShopperVar.value.redirectOut === 2)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:87w82P9JXU+yuaBA+MbvtQ", callContext.id);
// Destination: /ShopperPortalEU/PassportDetails
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "PassportDetails", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((checkRedirectShopperVar.value.redirectOut === 3)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:iUsKAqetU0WNOLQ40qnqNA", callContext.id);
// Destination: /ShopperPortalEU/ConfirmPassport
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "ConfirmPassport", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
return OS.Flow.executeSequence(function () {
if((checkRedirectShopperVar.value.redirectOut === 4)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:uFp0uzhiUkapHwy6ysZhkg", callContext.id);
// Destination: /ShopperPortalEU/CompleteDetails
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "CompleteDetails", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:D5SdPSCPcUWsRwpqlxD8zQ", callContext.id);
// Trigger Event: Authentication2
return controller.afterAuthentication$Action(layoutCheckAuthenticationVar.value.isAuthenticatedOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:8eFkEsBoMUWByd1hacIm1A", callContext.id);
});
}

});
}

});
}

});
}

});
} else {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:EwAl9fCRUkmTsac8XvP89A", callContext.id);
// Destination: /ShopperPortalEU/Error
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "Error", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

});
});
} else {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:IFE1ADKDT0K7rqVrlrc5PQ", callContext.id);
// Trigger Event: Authentication
return controller.afterAuthentication$Action(layoutCheckAuthenticationVar.value.isAuthenticatedOut, callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:sbfALLCMT02042aweOkODg", callContext.id);
});
}

});
});
}).catch(function (ex) {
OS.Logger.trace("LayoutDetail.GetWebAuthSitePropertiesOnAfterFetch", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:_NXK7zBtyUejioJjnAEruA", callContext.id);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:IIOadkYU20WPGNwTUJlqdw", callContext.id);
// Execute Action: AllExceptionsMessage
ShopperPortalEU_UI_ThemeController.default.customMessageTrigger$Action(function () {
var rec = new ShopperPortalEU_UI_ThemeModel.CustomMessageOptionsRec();
rec.typeAttr = ShopperPortalEUModel.staticEntities.customMessageType.error;
rec.titleAttr = "Sorry, we are experiencing technical difficulties";
rec.contentAttr = OutSystemsDebugger.handleFunctionCall(function () {
return ShopperPortalEUController.default.genericErrorMessage$Action(callContext).errorMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:OGv0SP_g2EWDrZUx9wWJtw", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:CGVdlUgMq0aDUNLXBkb1rw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:CGVdlUgMq0aDUNLXBkb1rw", callContext.id);
throw ex;

});
};

Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.getWebAuthSitePropertiesOnAfterFetch$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._getWebAuthSitePropertiesOnAfterFetch$Action, callContext);

};
Controller.prototype.onOrientationChange$Action = function () {
return Promise.resolve();
};
Controller.prototype.afterAuthentication$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:9dW_P1aGJE6tp_XCzsZj4Q:/NRWebFlows.9dW_P1aGJE6tp_XCzsZj4Q:nNMjO4GL+VwElV3Ipnmv5w", "ShopperPortalEU", "Layouts", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:JiixCpIoXEKG1x8YmhlEtw:/NRWebFlows.9dW_P1aGJE6tp_XCzsZj4Q/NodesShownInESpaceTree.JiixCpIoXEKG1x8YmhlEtw:GxLSXBCxdnkOfomTAmZYYA", "ShopperPortalEU", "LayoutDetail", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:JiixCpIoXEKG1x8YmhlEtw", callContext.id);
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:9dW_P1aGJE6tp_XCzsZj4Q", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Layouts/LayoutDetail On Initialize");
return controller.onInitialize$Action(callContext);

}, function () {
controller.popDebuggerContext(callContext);

});

};
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

define("ShopperPortalEU.Layouts.LayoutDetail.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"_NXK7zBtyUejioJjnAEruA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"lzQTO4n+U0GCe2deBdzdew": {
getter: function (varBag, idService) {
return varBag.layoutCheckAuthenticationVar.value;
}
},
"QwY8T2fFVEKjwWfjH3preQ": {
getter: function (varBag, idService) {
return varBag.checkRedirectShopperVar.value;
}
},
"okNrWp3WbESlLOlQLvEqtw": {
getter: function (varBag, idService) {
return varBag.model.variables.optionsIn;
}
},
"fPF8nIBKS0Kzexpj1KV+1Q": {
getter: function (varBag, idService) {
return varBag.model.variables.authIn;
}
},
"1x+57AQrXUuS8jDf0pxx0Q": {
getter: function (varBag, idService) {
return varBag.model.variables.getWebAuthSitePropertiesDataAct;
}
},
"CiDSKfsli0ihzKSPq3Bnsw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"psOUwD0eSUaRLPOclw65Fw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderLeft"));
})(varBag.model, idService);
}
},
"ZSdshKDY3UeQWyotJwo_TA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderCenter"));
})(varBag.model, idService);
}
},
"JEfLiOHce0q+5DTMWiMCWA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderCenter"));
})(varBag.model, idService);
}
},
"H4+Xe_0h1UqiyGWj2xXx3w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"QwfDkbIDFkWscJsH5GYJDg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("HeaderRight"));
})(varBag.model, idService);
}
},
"DXjcWsdusE2PSzl5W2dijg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"shjSVkL6Vk6WR_fvDQrppg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"D5PBBAZ_Ck6D+f_ZIVqvmQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"KVXs247HPkO8THv4dxPraA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"O3JoYQodFESbRJebUoYdKw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Sync"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
