define("ShopperPortalEU.LayoutsComponents.Back.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.HeaderAction.mvc$model", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.HeaderActionItem.mvc$model", "ShopperPortalEU_UI_Theme.model$HeaderActionOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU_UI_Theme.model$HeaderActionItemOptionsRec", "ShopperPortalEU_UI_Theme.model$HeaderActionItemIconOptionsRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderAction_mvcModel, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderActionItem_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ManualRedirect", "manualRedirectIn", "ManualRedirect", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("_manualRedirectInDataFetchStatus", "_manualRedirectInDataFetchStatus", "_manualRedirectInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderAction_mvcModel.hasValidationWidgets || ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderActionItem_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ManualRedirect" in inputs) {
this.variables.manualRedirectIn = inputs.ManualRedirect;
if("_manualRedirectInDataFetchStatus" in inputs) {
this.variables._manualRedirectInDataFetchStatus = inputs._manualRedirectInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "LayoutsComponents.Back");
});
define("ShopperPortalEU.LayoutsComponents.Back.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Theme.model", "react", "OutSystems/ReactView/Main", "ShopperPortalEU.LayoutsComponents.Back.mvc$model", "ShopperPortalEU.LayoutsComponents.Back.mvc$controller", "ShopperPortalEU.clientVariables", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.HeaderAction.mvc$view", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.HeaderActionItem.mvc$view", "ShopperPortalEU_UI_Theme.model$HeaderActionOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU_UI_Theme.model$HeaderActionItemOptionsRec", "ShopperPortalEU_UI_Theme.model$HeaderActionItemIconOptionsRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ThemeModel, React, OSView, ShopperPortalEU_LayoutsComponents_Back_mvc_model, ShopperPortalEU_LayoutsComponents_Back_mvc_controller, ShopperPortalEUClientVariables, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderAction_mvc_view, OSWidgets, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderActionItem_mvc_view) {
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
        View.displayName = "LayoutsComponents.Back";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderAction_mvc_view, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderActionItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_LayoutsComponents_Back_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_LayoutsComponents_Back_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderAction_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("HoeV_3RVJUeFJy35AV5p+Q.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.HeaderActionOptionsRec();
rec.testIdAttr = "BackLink";
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
uuid: "0",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
item: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
onClick: function () {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LayoutsComponents/Back/Link OnClick");
return controller.backOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});
;
},
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_HeaderActionItem_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("4Ne_XK8m0k+yARrQTxi8qw.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.HeaderActionItemOptionsRec();
rec.iconAttr = function () {
var rec = new ShopperPortalEU_UI_ThemeModel.HeaderActionItemIconOptionsRec();
rec.nameAttr = "arrow_back_ios";
return rec;
}();
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
}))];
})
},
_dependencies: []
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU.LayoutsComponents.Back.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU.languageResources", "ShopperPortalEU.clientVariables", "ShopperPortalEU.LayoutsComponents.Back.mvc$debugger", "ShopperPortalEU_UI_Theme.model$HeaderActionOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU_UI_Theme.model$HeaderActionItemOptionsRec", "ShopperPortalEU_UI_Theme.model$HeaderActionItemIconOptionsRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ThemeModel, ShopperPortalEULanguageResources, ShopperPortalEUClientVariables, ShopperPortalEU_LayoutsComponents_Back_mvc_Debugger) {
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
Controller.prototype._backOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("BackOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:YYnufwO_Hk6_egUS6jUOwg:/NRWebFlows.L_YboVe7KUC5K0uH_jh6qw/NodesShownInESpaceTree.Gguctsr3UkGcL6860gGQtg/ClientActions.YYnufwO_Hk6_egUS6jUOwg:VBSU0q4ZQnvR+_aYWVFghg", "ShopperPortalEU", "BackOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:zcJNZz8cqkuNBcimjnSY+g", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:6XZuDLAGTUOz55i+6ojtrw", callContext.id) && model.variables.manualRedirectIn)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:BqBL+sjomky+5fPGCadxlg", callContext.id);
// Trigger Event: OnClick
return controller.onClick$Action(callContext).then(function () {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:Y+5i3VzsEUOkpsNony0MBg", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:oBjV4FTu8kmUOJtESVwOnw", callContext.id);
// Destination: (PreviousScreen)
return OS.Flow.returnAsync(OS.Navigation.navigateBack(null, callContext, true));
}

});
}).then(function (res) {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:YYnufwO_Hk6_egUS6jUOwg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:YYnufwO_Hk6_egUS6jUOwg", callContext.id);
throw ex;

});
};

Controller.prototype.backOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._backOnClick$Action, callContext);

};
Controller.prototype.onClick$Action = function () {
return Promise.resolve();
};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:L_YboVe7KUC5K0uH_jh6qw:/NRWebFlows.L_YboVe7KUC5K0uH_jh6qw:7M96ALC1q_CnwlpVX8Rm0w", "ShopperPortalEU", "LayoutsComponents", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:Gguctsr3UkGcL6860gGQtg:/NRWebFlows.L_YboVe7KUC5K0uH_jh6qw/NodesShownInESpaceTree.Gguctsr3UkGcL6860gGQtg:DWqdddI0lcBX1_VyCGmnGA", "ShopperPortalEU", "Back", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:Gguctsr3UkGcL6860gGQtg", callContext.id);
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:L_YboVe7KUC5K0uH_jh6qw", callContext.id);
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

define("ShopperPortalEU.LayoutsComponents.Back.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"lX7VWNWxFU2b1lqwOGeUgA": {
getter: function (varBag, idService) {
return varBag.model.variables.manualRedirectIn;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"ZNyYWv9Za063ZfPgOGUryw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Item"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
