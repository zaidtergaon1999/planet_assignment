define("ShopperPortalEU.Authentication.VerifyIdentity.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Theme.controller", "reCAPTCHAReact.model", "reCAPTCHAReact.controller", "ShopperPortalEU_UI_Theme.model$LayoutBlankOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU.model$LayoutAuthenticationRec", "ShopperPortalEU_UI_Theme.model$LoginOptionsRec", "ShopperPortalEU_UI_Components.model$CustomFormOptionsRec", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$FullHeightContentOptionsRec", "ShopperPortalEU_UI_Components.model$FullHeightContentTopOptionsRec", "ShopperPortalEU_UI_Components.model$FullHeightContentBottomOptionsRec", "ShopperPortalEU_UI_Components.model$CustomInputOptionsRec", "ShopperPortalEU_UI_Components.model$CustomInputIconOptionRec", "ShopperPortalEU_UI_Components.model$CustomInputValidationOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsIconRec", "ShopperPortalEU.model$BooleanRecord", "ShopperPortalEU.controller$CheckRedirectShopper", "ShopperPortalEU_UI_Theme.model$CustomMessageOptionsRec", "ShopperPortalEU_UI_Theme.controller$CustomMessageTrigger", "ShopperPortalEU.controller$ClarityEvent", "ShopperPortalEU.controller$Authenticate", "ShopperPortalEU.controller$GenericErrorMessage", "reCAPTCHAReact.model$ResponseRec", "ShopperPortalEU.referencesHealth$reCAPTCHAReact", "reCAPTCHAReact.controller$v3Execute"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEUController, ShopperPortalEU_UI_ThemeController, reCAPTCHAReactModel, reCAPTCHAReactController) {
var OS = OutSystems.Internal;

var GetReCAPTCHASiteDataActRec = (function (_super) {
__extends(GetReCAPTCHASiteDataActRec, _super);
function GetReCAPTCHASiteDataActRec(defaults) {
_super.apply(this, arguments);
}
GetReCAPTCHASiteDataActRec.attributesToDeclare = function () {
return [
this.attr("v3_Key", "v3_KeyOut", "v3_Key", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetReCAPTCHASiteDataActRec.fromStructure = function (str) {
return new GetReCAPTCHASiteDataActRec(new GetReCAPTCHASiteDataActRec.RecordClass({
v3_KeyOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetReCAPTCHASiteDataActRec.init();
return GetReCAPTCHASiteDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("Email", "emailVar", "Email", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, false), 
this.attr("ShowScreen", "showScreenVar", "ShowScreen", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsLoading", "isLoadingVar", "IsLoading", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("IsGenericLogin", "isGenericLoginVar", "IsGenericLogin", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("reCAPTCHAv3_Id", "reCAPTCHAv3_IdVar", "reCAPTCHAv3_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("ShopperHasLowScore", "shopperHasLowScoreVar", "ShopperHasLowScore", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("CaptchaToken", "captchaTokenVar", "CaptchaToken", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("LT", "lTIn", "LT", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, false), 
this.attr("_lTInDataFetchStatus", "_lTInDataFetchStatus", "_lTInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetReCAPTCHASite", "getReCAPTCHASiteDataAct", "getReCAPTCHASiteDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetReCAPTCHASiteDataActRec());
}, true, GetReCAPTCHASiteDataActRec)
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
Form1: OS.Model.ValidationWidgetRecord,
Input_Email: OS.Model.ValidationWidgetRecord
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
if("LT" in inputs) {
this.variables.lTIn = OS.DataConversion.ServerDataConverter.from(inputs.LT, OS.DataTypes.DataTypes.Integer);
}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "Authentication.VerifyIdentity");
});
define("ShopperPortalEU.Authentication.VerifyIdentity.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Theme.controller", "reCAPTCHAReact.model", "reCAPTCHAReact.controller", "react", "OutSystems/ReactView/Main", "ShopperPortalEU.Authentication.VerifyIdentity.mvc$model", "ShopperPortalEU.Authentication.VerifyIdentity.mvc$controller", "ShopperPortalEU.clientVariables", "ShopperPortalEU.Layouts.LayoutBlank.mvc$view", "OutSystems/ReactWidgets/Main", "ShopperPortalEU.Common.DataLoading.mvc$view", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.Login.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomForm.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.FullHeightContent.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomInput.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButton.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButtonItem.mvc$view", "reCAPTCHAReact.reCAPTCHAv3.RecaptchaV3.mvc$view", "ShopperPortalEU_UI_Theme.model$LayoutBlankOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU.model$LayoutAuthenticationRec", "ShopperPortalEU_UI_Theme.model$LoginOptionsRec", "ShopperPortalEU_UI_Components.model$CustomFormOptionsRec", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$FullHeightContentOptionsRec", "ShopperPortalEU_UI_Components.model$FullHeightContentTopOptionsRec", "ShopperPortalEU_UI_Components.model$FullHeightContentBottomOptionsRec", "ShopperPortalEU_UI_Components.model$CustomInputOptionsRec", "ShopperPortalEU_UI_Components.model$CustomInputIconOptionRec", "ShopperPortalEU_UI_Components.model$CustomInputValidationOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsIconRec", "ShopperPortalEU.model$BooleanRecord", "ShopperPortalEU.controller$CheckRedirectShopper", "ShopperPortalEU_UI_Theme.model$CustomMessageOptionsRec", "ShopperPortalEU_UI_Theme.controller$CustomMessageTrigger", "ShopperPortalEU.controller$ClarityEvent", "ShopperPortalEU.controller$Authenticate", "ShopperPortalEU.controller$GenericErrorMessage", "reCAPTCHAReact.model$ResponseRec", "ShopperPortalEU.referencesHealth$reCAPTCHAReact", "reCAPTCHAReact.controller$v3Execute"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ThemeController, reCAPTCHAReactModel, reCAPTCHAReactController, React, OSView, ShopperPortalEU_Authentication_VerifyIdentity_mvc_model, ShopperPortalEU_Authentication_VerifyIdentity_mvc_controller, ShopperPortalEUClientVariables, ShopperPortalEU_Layouts_LayoutBlank_mvc_view, OSWidgets, ShopperPortalEU_Common_DataLoading_mvc_view, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_Login_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomForm_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_FullHeightContent_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomInput_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButton_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonItem_mvc_view, reCAPTCHAReact_reCAPTCHAv3_RecaptchaV3_mvc_view) {
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
        View.displayName = "Authentication.VerifyIdentity";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css", "css/ShopperPortalEU_UI_Theme.ShopperPortalEUUITheme.css", "css/ShopperPortalEU.ShopperPortalEU.css", "css/ShopperPortalEU_UI_Theme.ShopperPortalEUUITheme.extra.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [ShopperPortalEU_Layouts_LayoutBlank_mvc_view, ShopperPortalEU_Common_DataLoading_mvc_view, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_Login_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomForm_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_FullHeightContent_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomInput_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButton_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonItem_mvc_view, reCAPTCHAReact_reCAPTCHAv3_RecaptchaV3_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_Authentication_VerifyIdentity_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_Authentication_VerifyIdentity_mvc_controller;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "title", {
            get: function () {
                return "Shopper Portal EU - Verify Identity";
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(ShopperPortalEU_Layouts_LayoutBlank_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("Lg5gC69EfUaBpzMpZsbiwQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.LayoutBlankOptionsRec();
rec.noPaddingAttr = true;
rec.darkModeAttr = true;
return rec;
}();
}),
Auth: model.getCachedValue(idService.getId("Lg5gC69EfUaBpzMpZsbiwQ.Auth"), function () {
return function () {
var rec = new ShopperPortalEUModel.LayoutAuthenticationRec();
rec.notAutomaticallyRedirectAttr = true;
return rec;
}();
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
afterAuthentication$Action: function (isAuthenticatedIn) {
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Layouts/LayoutBlank AfterAuthentication");
return controller.layoutAfterAuthentication$Action(isAuthenticatedIn, controller.callContext(eventHandlerContext));
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
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_Common_DataLoading_mvc_view, {
inputs: {
IsDataFetched: model.variables.showScreenVar
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_Login_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("PlWKstwgUUOm1s1FCCB64A.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.LoginOptionsRec();
rec.backgroundURLAttr = ((((model.variables.lTIn === 1) || (model.variables.lTIn === 2))) ? ("/ShopperPortalEU_UI_Theme/img/ShopperPortalEU_UI_Theme.login_background_secondary.png") : ("/ShopperPortalEU_UI_Theme/img/ShopperPortalEU_UI_Theme.login_background.png"));
return rec;
}();
}, function () {
return model.variables.lTIn;
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomForm_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("iVLtx+qAs0m4OCzzSXph5A.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomFormOptionsRec();
rec.isFullHeightAttr = true;
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
uuid: "3",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
form: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Form, {
_validationProps: {
validationService: validationService
},
gridProperties: {
classes: "OSFillParent"
},
style: "form",
_idProps: {
service: idService,
name: "Form1"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_FullHeightContent_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("PAc3iSMzEEmTNnu0GgY07w.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.FullHeightContentOptionsRec();
rec.spacingAttr = ShopperPortalEUModel.staticEntities.spacing.space5;
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
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "5",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
top: new PlaceholderContent(function () {
return [$if(model.variables.isGenericLoginVar, false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "LoginTitle"
},
style: "heading6 font-light",
value: "Log in or sign up",
_idProps: {
service: idService,
uuid: "6"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "VerifyIdentityTitle"
},
style: "heading6 font-light",
value: "Verify your Identity",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if((model.variables.lTIn === 1), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-testid": "VerifyIdentityExtraInfo"
},
style: "margin-top-02 body-4",
visible: true,
_idProps: {
service: idService,
uuid: "8"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "We want to make sure your Shopper Portal account is secure. To verify your identity, ",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(OSWidgets.Expression, {
style: "font-bold",
value: "please enter your email provided at the store of purchase.",
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
extendedProperties: {
"data-testid": "VerifyIdentityExtraInfo"
},
style: "margin-top-02 body-4",
visible: true,
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
value: "To access your Shopper Portal, simply enter your email address. We\'ll quickly verify it to protect your account.",
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
})];
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-05",
visible: true,
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomInput_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("C2m5oOMKd0eKBdOOkCpgsQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomInputOptionsRec();
rec.testIdAttr = "EmailInput";
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
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "14",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Label, {
gridProperties: {
classes: "OSFillParent"
},
mandatory: false,
targetWidget: "Input_Email",
_idProps: {
service: idService,
uuid: "15"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "EmailLabel"
},
value: "Email",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}))];
}),
input: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Input, {
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
enabled: !(model.variables.isLoadingVar),
extendedProperties: {
"data-testid": "Input"
},
gridProperties: {
classes: "OSFillParent"
},
inputType: /*Email*/ 7,
mandatory: false,
maxLength: 50,
onChange: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Authentication/VerifyIdentity/Input_Email OnChange");
controller.input_EmailOnClick$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "form-control",
variable: model.createVariable(OS.DataTypes.DataTypes.Email, model.variables.emailVar, function (value) {
model.variables.emailVar = value;
}),
_idProps: {
service: idService,
name: "Input_Email"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
description: PlaceholderContent.Empty
},
_dependencies: [asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.emailVar)]
}))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButton_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("iQJy5GH7TUOLhpZ_Tay+Fw.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomButtonOptionsRec();
rec.testIdAttr = "ContinueButton";
rec.typeAttr = ShopperPortalEUModel.staticEntities.customButtonType.primary;
rec.isLoadingAttr = model.variables.isLoadingVar;
rec.isFullWidthAttr = true;
return rec;
}();
}, function () {
return model.variables.isLoadingVar;
})
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "18",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: true,
onClick: function () {
_this.validateWidget(idService.getId("Form1"));
return Promise.resolve().then(function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Authentication/VerifyIdentity/Button OnClick");
return controller.continue$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});
});

;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonItem_mvc_view, {
inputs: {},
events: {
_handleError: function (ex) {
controller.handleError(ex);
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "20",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Continue",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
}))];
})
},
_dependencies: []
}), React.createElement(reCAPTCHAReact_reCAPTCHAv3_RecaptchaV3_mvc_view, {
inputs: {
SiteKey: model.variables.getReCAPTCHASiteDataAct.v3_KeyOut,
_siteKeyInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables.getReCAPTCHASiteDataAct.dataFetchStatusAttr),
HideBadge: true,
RecaptchaTheme: ShopperPortalEUModel.staticEntities.recaptchaTheme.dark,
RecaptchaBadge: ShopperPortalEUModel.staticEntities.recaptchaBadge.inline
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
render$Action: function (idIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "reCAPTCHAv3/RecaptchaV3 Render");
controller.reCaptchaV3Render$Action(idIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
callback$Action: function (tokenIn) {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "reCAPTCHAv3/RecaptchaV3 Callback");
controller.reCaptchaV3Callback$Action(tokenIn, controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
}
},
_validationProps: {
validationService: validationService,
validationParentId: idService.getId("Form1")
},
_idProps: {
service: idService,
uuid: "22",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getReCAPTCHASiteDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getReCAPTCHASiteDataAct.v3_KeyOut), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.emailVar), asPrimitiveValue(model.variables.lTIn), asPrimitiveValue(model.variables.isGenericLoginVar)]
}))];
})
},
_dependencies: [asPrimitiveValue(model.variables.getReCAPTCHASiteDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getReCAPTCHASiteDataAct.v3_KeyOut), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.emailVar), asPrimitiveValue(model.variables.lTIn), asPrimitiveValue(model.variables.isGenericLoginVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getReCAPTCHASiteDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getReCAPTCHASiteDataAct.v3_KeyOut), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.emailVar), asPrimitiveValue(model.variables.lTIn), asPrimitiveValue(model.variables.isGenericLoginVar)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getReCAPTCHASiteDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getReCAPTCHASiteDataAct.v3_KeyOut), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.emailVar), asPrimitiveValue(model.variables.isGenericLoginVar), asPrimitiveValue(model.variables.lTIn)]
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.getReCAPTCHASiteDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getReCAPTCHASiteDataAct.v3_KeyOut), asPrimitiveValue(model.variables.isLoadingVar), asPrimitiveValue(model.variables.emailVar), asPrimitiveValue(model.variables.isGenericLoginVar), asPrimitiveValue(model.variables.lTIn), asPrimitiveValue(model.variables.showScreenVar)]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebScreen);
	
    return View;
});
define("ShopperPortalEU.Authentication.VerifyIdentity.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Theme.controller", "reCAPTCHAReact.model", "reCAPTCHAReact.controller", "ShopperPortalEU.languageResources", "ShopperPortalEU.clientVariables", "ShopperPortalEU.Authentication.VerifyIdentity.mvc$debugger", "ShopperPortalEU.Authentication.controller", "ShopperPortalEU_UI_Theme.model$LayoutBlankOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU.model$LayoutAuthenticationRec", "ShopperPortalEU_UI_Theme.model$LoginOptionsRec", "ShopperPortalEU_UI_Components.model$CustomFormOptionsRec", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$FullHeightContentOptionsRec", "ShopperPortalEU_UI_Components.model$FullHeightContentTopOptionsRec", "ShopperPortalEU_UI_Components.model$FullHeightContentBottomOptionsRec", "ShopperPortalEU_UI_Components.model$CustomInputOptionsRec", "ShopperPortalEU_UI_Components.model$CustomInputIconOptionRec", "ShopperPortalEU_UI_Components.model$CustomInputValidationOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsIconRec", "ShopperPortalEU.model$BooleanRecord", "ShopperPortalEU.controller$CheckRedirectShopper", "ShopperPortalEU_UI_Theme.model$CustomMessageOptionsRec", "ShopperPortalEU_UI_Theme.controller$CustomMessageTrigger", "ShopperPortalEU.controller$ClarityEvent", "ShopperPortalEU.controller$Authenticate", "ShopperPortalEU.controller$GenericErrorMessage", "reCAPTCHAReact.model$ResponseRec", "ShopperPortalEU.referencesHealth$reCAPTCHAReact", "reCAPTCHAReact.controller$v3Execute"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_ThemeController, reCAPTCHAReactModel, reCAPTCHAReactController, ShopperPortalEULanguageResources, ShopperPortalEUClientVariables, ShopperPortalEU_Authentication_VerifyIdentity_mvc_Debugger, ShopperPortalEU_AuthenticationController) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getReCAPTCHASite$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
getReCAPTCHASite$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = true;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getReCAPTCHASite$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:JNXQBFVXAEu5CApjTL4row:/NRWebFlows.ozCJCRi2BU2OkqD4Zl84lQ/NodesShownInESpaceTree.Ml4qMDIr2EezSJRtI5QYFw/DataActions.JNXQBFVXAEu5CApjTL4row:IafNNXZRUFFfXtTk02PJbQ", "ShopperPortalEU", "GetReCAPTCHASite", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "Authentication/VerifyIdentity/GetReCAPTCHASite");
return controller.callDataAction("DataActionGetReCAPTCHASite", "screenservices/ShopperPortalEU/Authentication/VerifyIdentity/DataActionGetReCAPTCHASite", "bgtcf8+fl5Xuzoxhi+y5Ng", function (b) {
model.variables.getReCAPTCHASiteDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getReCAPTCHASiteDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getReCAPTCHASiteDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, ShopperPortalEUClientVariables, false);

}, function () {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:JNXQBFVXAEu5CApjTL4row", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getReCAPTCHASite$DataActRefresh"];
// Client Actions
Controller.prototype._validateEmailField$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ValidateEmailField");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:S5IsHvSdH0mggm+ppPa9OA:/NRWebFlows.ozCJCRi2BU2OkqD4Zl84lQ/NodesShownInESpaceTree.Ml4qMDIr2EezSJRtI5QYFw/ClientActions.S5IsHvSdH0mggm+ppPa9OA:dCNX7q1+LwePxGiyfkMG8g", "ShopperPortalEU", "ValidateEmailField", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:dHxYfqIMbEiR6z0YZBQ9sQ", callContext.id);
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:L1YVM1l8u0OYmg0I8WihEQ", callContext.id) && ((model.variables.emailVar) !== ("")))) {
// Email valid ?
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:3dVo1mN1E0yvhHDrsVphhA", callContext.id) && (((OS.BuiltinFunctions.index(model.variables.emailVar, ".", 0, false, false)) !== (-1)) && ((OS.BuiltinFunctions.index(model.variables.emailVar, "@", 0, false, false)) !== (-1))))) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:XVmD1mfIE0aPMi88E381OQ", callContext.id);
} else {
// Set Invalid Iput
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:RmdcdKEMY0a95P6r7gMcBg", callContext.id);
// Input_Email.Valid = False
model.widgets.get(idService.getId("Input_Email")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:RmdcdKEMY0a95P6r7gMcBg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Email.ValidationMessage = "Enter a valid email address"
model.widgets.get(idService.getId("Input_Email")).validationMessageAttr = "Enter a valid email address";
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:ly5B2CYetE+y89qMOA4gCQ", callContext.id);
}

} else {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:IdtKiO8wH0GxSqP8TbnD2g", callContext.id);
}

} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:S5IsHvSdH0mggm+ppPa9OA", callContext.id);
}

};
Controller.prototype._input_EmailOnClick$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Input_EmailOnClick");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:OSXIN79cXUKEv3Ko_uj18w:/NRWebFlows.ozCJCRi2BU2OkqD4Zl84lQ/NodesShownInESpaceTree.Ml4qMDIr2EezSJRtI5QYFw/ClientActions.OSXIN79cXUKEv3Ko_uj18w:xeBOVwOsasXXWrSTsS83ow", "ShopperPortalEU", "Input_EmailOnClick", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:tY_fF_5KsEGFh9slr8Zvmg", callContext.id);
// Reset Input
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:TWzx5JEziUKKRhGoYdgCWw", callContext.id);
// Input_Email.Valid = True
model.widgets.get(idService.getId("Input_Email")).validAttr = true;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:TWzx5JEziUKKRhGoYdgCWw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Input_Email.ValidationMessage = ""
model.widgets.get(idService.getId("Input_Email")).validationMessageAttr = "";
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:bwRNXra+9UKT+_ocOt9XLQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:OSXIN79cXUKEv3Ko_uj18w", callContext.id);
}

};
Controller.prototype._layoutAfterAuthentication$Action = function (isAuthenticatedIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("LayoutAfterAuthentication");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU.Authentication.VerifyIdentity.LayoutAfterAuthentication$vars"))());
vars.value.isAuthenticatedInLocal = isAuthenticatedIn;
var checkRedirectShopperVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.checkRedirectShopperVar = checkRedirectShopperVar;
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:pU_XR1gnBEWlGQwCVVoW9Q:/NRWebFlows.ozCJCRi2BU2OkqD4Zl84lQ/NodesShownInESpaceTree.Ml4qMDIr2EezSJRtI5QYFw/ClientActions.pU_XR1gnBEWlGQwCVVoW9Q:m__TzU8ztbIuB+GIZttdRw", "ShopperPortalEU", "LayoutAfterAuthentication", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:vQhg5p884UKVGusiNPc8UA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:iJSyBEmWHkmffMDaEaKH+Q", callContext.id) && vars.value.isAuthenticatedInLocal)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:1AtNofi9rUeUAW24dNctQw", callContext.id);
// Execute Action: CheckRedirectShopper
model.flush();
return ShopperPortalEUController.default.checkRedirectShopper$Action(callContext).then(function (value) {
checkRedirectShopperVar.value = value;
}).then(function () {
// Success
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:D2P9qx5R1UGdcyZVAL7zRg", callContext.id) && !(checkRedirectShopperVar.value.hasErrorOut))) {
// Redirect
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:oksFqU4c0EqpQB0gXmsSqw", callContext.id) && (checkRedirectShopperVar.value.redirectOut === 1))) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:gYd_bdMWuEipcBwnYxmUwA", callContext.id);
// Destination: /ShopperPortalEU/TermsService
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "TermsService", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
if((checkRedirectShopperVar.value.redirectOut === 2)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:NpC_7+TmmUqrhKZx0p3Y1Q", callContext.id);
// Destination: /ShopperPortalEU/PassportDetails
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "PassportDetails", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
if((checkRedirectShopperVar.value.redirectOut === 3)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:c92MsmdCbkCp0Xm1dUyhdQ", callContext.id);
// Destination: /ShopperPortalEU/ConfirmPassport
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "ConfirmPassport", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
if((checkRedirectShopperVar.value.redirectOut === 4)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:J18NFA3fVEGcbE5FS4KIsA", callContext.id);
// Destination: /ShopperPortalEU/CompleteDetails
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "CompleteDetails", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:GioZ8MPYfkKT5R0Ku0+oYw", callContext.id);
// Destination: /ShopperPortalEU/MyRefunds
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "MyRefunds", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
}

}

}

}

}

});
}

}).then(function () {
// ShowScreen 
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:dfVcBCIG0U+u64l7blGkYg", callContext.id);
// ShowScreen = True
model.variables.showScreenVar = true;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:AX9bw+oB5Uyr+7DE32Lblw", callContext.id);
});
}).then(function (res) {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:pU_XR1gnBEWlGQwCVVoW9Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:pU_XR1gnBEWlGQwCVVoW9Q", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("ShopperPortalEU.Authentication.VerifyIdentity.LayoutAfterAuthentication$vars", [{
name: "IsAuthenticated",
attrName: "isAuthenticatedInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Controller.prototype._reCaptchaV3Callback$Action = function (tokenIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ReCaptchaV3Callback");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU.Authentication.VerifyIdentity.ReCaptchaV3Callback$vars"))());
vars.value.tokenInLocal = tokenIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:33GFTkO1eE680vzEQ1mDGg:/NRWebFlows.ozCJCRi2BU2OkqD4Zl84lQ/NodesShownInESpaceTree.Ml4qMDIr2EezSJRtI5QYFw/ClientActions.33GFTkO1eE680vzEQ1mDGg:UfHVHzV00+m4EHnlRNLpsg", "ShopperPortalEU", "ReCaptchaV3Callback", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:8zTBnAXJYEiT0COQkcjs1g", callContext.id);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:FzgmevfLtEWKNSIkwUyOVA", callContext.id);
// CaptchaToken = Token
model.variables.captchaTokenVar = vars.value.tokenInLocal;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:NbuG0j7QgE6z0TxdbwYfCA", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:33GFTkO1eE680vzEQ1mDGg", callContext.id);
}

};
Controller.registerVariableGroupType("ShopperPortalEU.Authentication.VerifyIdentity.ReCaptchaV3Callback$vars", [{
name: "Token",
attrName: "tokenInLocal",
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
varBag.callContext = callContext;
try {OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:LS41iuIHO06BI8HEKKweLQ:/NRWebFlows.ozCJCRi2BU2OkqD4Zl84lQ/NodesShownInESpaceTree.Ml4qMDIr2EezSJRtI5QYFw/ClientActions.LS41iuIHO06BI8HEKKweLQ:62ovO5kJK_RQUzxaCUb4gQ", "ShopperPortalEU", "OnInitialize", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:_LCxL0F30Eahor4FTrkTNQ", callContext.id);
// init vars
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:vviUSPToN0GVPAgdp82y4g", callContext.id);
// ShowScreen = False
model.variables.showScreenVar = false;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:vviUSPToN0GVPAgdp82y4g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:vviUSPToN0GVPAgdp82y4g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsGenericLogin = LT <> 1 and LT <> 2
model.variables.isGenericLoginVar = (((model.variables.lTIn) !== (1)) && ((model.variables.lTIn) !== (2)));
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:vviUSPToN0GVPAgdp82y4g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "4");
// LoginType = LT
ShopperPortalEUClientVariables.setLoginType(model.variables.lTIn);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:vviUSPToN0GVPAgdp82y4g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "5");
// ShopperChecked = False
ShopperPortalEUClientVariables.setShopperChecked(false);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:l5xaFIm4Mk6qxJvaJyrpAQ", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:LS41iuIHO06BI8HEKKweLQ", callContext.id);
}

};
Controller.prototype._reCaptchaV3Render$Action = function (idIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ReCaptchaV3Render");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU.Authentication.VerifyIdentity.ReCaptchaV3Render$vars"))());
vars.value.idInLocal = idIn;
varBag.callContext = callContext;
varBag.vars = vars;
try {OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:+CMyz1Ip6U+8f2_ta4+vUg:/NRWebFlows.ozCJCRi2BU2OkqD4Zl84lQ/NodesShownInESpaceTree.Ml4qMDIr2EezSJRtI5QYFw/ClientActions.+CMyz1Ip6U+8f2_ta4+vUg:sMruhc+9JdPvQHzPU0jTXA", "ShopperPortalEU", "ReCaptchaV3Render", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:LDy15myolEafXkZZuczyiQ", callContext.id);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:L+5XdsEAHEuKuhaI+O1Q1A", callContext.id);
// reCAPTCHAv3_Id = Id
model.variables.reCAPTCHAv3_IdVar = vars.value.idInLocal;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:gV9OgGap6EmHvorHUZPhbg", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:+CMyz1Ip6U+8f2_ta4+vUg", callContext.id);
}

};
Controller.registerVariableGroupType("ShopperPortalEU.Authentication.VerifyIdentity.ReCaptchaV3Render$vars", [{
name: "Id",
attrName: "idInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Controller.prototype._continue$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Continue");
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var authenticateVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.authenticateVar = authenticateVar;
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:gM1+5hraMEiV9voJGbXsjg:/NRWebFlows.ozCJCRi2BU2OkqD4Zl84lQ/NodesShownInESpaceTree.Ml4qMDIr2EezSJRtI5QYFw/ClientActions.gM1+5hraMEiV9voJGbXsjg:lQH20ukRn+5lA+Nf97ABow", "ShopperPortalEU", "Continue", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:+jU8z5QpvkOC18jgVEBBwg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
// Remove spaces & IsLoading
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:5HyF7snLJE6Q6tiwhjSqCA", callContext.id);
// Email = Replace
model.variables.emailVar = OS.BuiltinFunctions.replace(model.variables.emailVar, " ", "");
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:5HyF7snLJE6Q6tiwhjSqCA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsLoading = True
model.variables.isLoadingVar = true;
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:UF8AsXxHAE6bxt2+N8_gcw", callContext.id) && (model.variables.getReCAPTCHASiteDataAct.v3_KeyOut === ""))) {
// < - >
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:BsPWMMPRR0iG31K8fxeL2g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:a+YxFDj7xEudEW+2PRNKPA", callContext.id);
// Execute Action: ReCaptchaV3Execute
return controller._reCaptchaV3Execute$Action("Continue", callContext).then(function () {
// Is shopper/user safe ?
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:R7BJy0uaN0ytPWm3h4HtWQ", callContext.id) && !(!(model.variables.shopperHasLowScoreVar)))) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:a+6CNPnGGESMkMofQOSR7A", callContext.id);
// Raise Error: InvalidLogin
throw new OS.Exceptions.Exceptions.InvalidLoginException("");
}

});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:xEo1_Ddvd0yR41RIv03X9Q", callContext.id);
// Execute Action: ValidateEmailField
controller._validateEmailField$Action(callContext);
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:ikqjeOLReEOukWjKqActtg", callContext.id) && model.widgets.get(idService.getId("Input_Email")).validAttr)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:qSk4a01hJ06ZiP1rtA8iww", callContext.id);
// Execute Action: Authenticate
model.flush();
return ShopperPortalEUController.default.authenticate$Action(model.variables.emailVar, model.variables.isGenericLoginVar, model.variables.captchaTokenVar, callContext).then(function (value) {
authenticateVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:F+tcNyqQL0qYvLDgEdh8eA", callContext.id) && authenticateVar.value.successOut)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:ENYXVX7170ClggIpHS6Ysg", callContext.id);
// Email = Email
ShopperPortalEUClientVariables.setEmail(model.variables.emailVar);
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:HCj4sQ9tZ0C9C0uITXQuXQ", callContext.id) && model.variables.isGenericLoginVar)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:D8PkSkK62kmjn2OJk6ZjWw", callContext.id);
// Execute Action: ClarityEventGeneric
ShopperPortalEUController.default.clarityEvent$Action("ContinueSignUpEmail_btn", callContext);
} else {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:YRWrkImpDkyjHwzkHqWf6w", callContext.id);
// Execute Action: ClarityEventNotGeneric
ShopperPortalEUController.default.clarityEvent$Action("ContinueEmailPOS_btn", callContext);
}

OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:vGSXwiFiA06frWz0yqY+kw", callContext.id);
// Destination: /ShopperPortalEU/VerifyIdentityCode
return OS.Flow.returnAsync(OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "VerifyIdentityCode", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default), callContext, true));
} else {
// Error coming from signup ?
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:C4GCbtMd_UipEKJzBEZIYg", callContext.id) && ((OS.BuiltinFunctions.substr(authenticateVar.value.errorMessageOut, 0, 5)) !== ("Enter")))) {
// IsLoading
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:d1jZbw8blkeIS_R3dn7wDw", callContext.id);
// IsLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:QXtkELMh2EidIf22If7FUA", callContext.id);
// Execute Action: CustomMessageTrigger2
ShopperPortalEU_UI_ThemeController.default.customMessageTrigger$Action(function () {
var rec = new ShopperPortalEU_UI_ThemeModel.CustomMessageOptionsRec();
rec.typeAttr = ShopperPortalEUModel.staticEntities.customMessageType.error;
rec.titleAttr = "Sorry, we are experiencing technical difficulties";
rec.contentAttr = OutSystemsDebugger.handleFunctionCall(function () {
return ShopperPortalEUController.default.genericErrorMessage$Action(callContext).errorMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
rec.testIdAttr = "ErrorAuth";
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:giCV6hNMl0a2p39g8cdNVg", callContext.id);
} else {
// Set Invalid Iput
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:qbs5VwugyE+rj8lFJ+SthA", callContext.id);
// Input_Email.Valid = False
model.widgets.get(idService.getId("Input_Email")).validAttr = false;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:qbs5VwugyE+rj8lFJ+SthA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:qbs5VwugyE+rj8lFJ+SthA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Input_Email.ValidationMessage = Authenticate.ErrorMessage
model.widgets.get(idService.getId("Input_Email")).validationMessageAttr = authenticateVar.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:0Hhn6aIkLE2uu0W_Pht5+A", callContext.id);
}

}

});
} else {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:U50ZyiLnbUaxCtnQt9QmZw", callContext.id);
// IsLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:HVe1RJ+urUuxUpEshqA4qw", callContext.id);
}

});
});
}).catch(function (ex) {
OS.Logger.trace("VerifyIdentity.Continue", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:gPIZiBYKzUGCWK9zag_sXg", callContext.id);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:dqRvwe9JbUOR2QVWLrfstQ", callContext.id);
// Execute Action: CustomMessageTrigger
ShopperPortalEU_UI_ThemeController.default.customMessageTrigger$Action(function () {
var rec = new ShopperPortalEU_UI_ThemeModel.CustomMessageOptionsRec();
rec.typeAttr = ShopperPortalEUModel.staticEntities.customMessageType.error;
rec.titleAttr = "Sorry, we are experiencing technical difficulties";
rec.contentAttr = OutSystemsDebugger.handleFunctionCall(function () {
return ShopperPortalEUController.default.genericErrorMessage$Action(callContext).errorMessageOut;
}, OS.DataTypes.DataTypes.Text, callContext.id);
rec.testIdAttr = "ErrorAuth";
return rec;
}(), callContext);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:Vuuy1dkJlUKdO540pZ8sDA", callContext.id);
// IsLoading = False
model.variables.isLoadingVar = false;
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:BUEEXrG+5EeOs94rxErg5w", callContext.id);
return OS.Flow.returnAsync();

});
}

throw ex;
}).then(function (res) {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:gM1+5hraMEiV9voJGbXsjg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:gM1+5hraMEiV9voJGbXsjg", callContext.id);
throw ex;

});
};
Controller.prototype._reCaptchaV3Execute$Action = function (actionNameIn, callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("ReCaptchaV3Execute");
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU.Authentication.VerifyIdentity.ReCaptchaV3Execute$vars"))());
vars.value.actionNameInLocal = actionNameIn;
var v3ExecuteVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.v3ExecuteVar = v3ExecuteVar;
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:dA7I5hBvD0+BzmK6kCmOhQ:/NRWebFlows.ozCJCRi2BU2OkqD4Zl84lQ/NodesShownInESpaceTree.Ml4qMDIr2EezSJRtI5QYFw/ClientActions.dA7I5hBvD0+BzmK6kCmOhQ:DiNDDltamfqxifBD7tWMxg", "ShopperPortalEU", "ReCaptchaV3Execute", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:dczsp7lRSEOzcfDDZbsnoQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:x3yanqZCsUm8vh1_RE92pQ", callContext.id);
// Execute Action: v3Execute
model.flush();
return reCAPTCHAReactController.default.v3Execute$Action(model.variables.reCAPTCHAv3_IdVar, vars.value.actionNameInLocal, callContext).then(function (value) {
v3ExecuteVar.value = value;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:QHdtNYL_aU2oALjJEqS_9w", callContext.id) && v3ExecuteVar.value.responseOut.successAttr)) {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:X09e+2QE_UO7AZaSoyERzA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:ZiQhhL4PmEe53MfWcMOgDw", callContext.id);
// Raise Error: InvalidLogin
throw new OS.Exceptions.Exceptions.InvalidLoginException("reCaptcha error");
}

});
}).then(function (res) {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:dA7I5hBvD0+BzmK6kCmOhQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:dA7I5hBvD0+BzmK6kCmOhQ", callContext.id);
throw ex;

});
};
Controller.registerVariableGroupType("ShopperPortalEU.Authentication.VerifyIdentity.ReCaptchaV3Execute$vars", [{
name: "ActionName",
attrName: "actionNameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);

Controller.prototype.validateEmailField$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._validateEmailField$Action, callContext);

};
Controller.prototype.input_EmailOnClick$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._input_EmailOnClick$Action, callContext);

};
Controller.prototype.layoutAfterAuthentication$Action = function (isAuthenticatedIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._layoutAfterAuthentication$Action, callContext, isAuthenticatedIn);

};
Controller.prototype.reCaptchaV3Callback$Action = function (tokenIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._reCaptchaV3Callback$Action, callContext, tokenIn);

};
Controller.prototype.onInitialize$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._onInitialize$Action, callContext);

};
Controller.prototype.reCaptchaV3Render$Action = function (idIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._reCaptchaV3Render$Action, callContext, idIn);

};
Controller.prototype.continue$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._continue$Action, callContext);

};
Controller.prototype.reCaptchaV3Execute$Action = function (actionNameIn, callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._reCaptchaV3Execute$Action, callContext, actionNameIn);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:ozCJCRi2BU2OkqD4Zl84lQ:/NRWebFlows.ozCJCRi2BU2OkqD4Zl84lQ:EruRjKvlJ0FVyQ96YiDGmw", "ShopperPortalEU", "Authentication", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:Ml4qMDIr2EezSJRtI5QYFw:/NRWebFlows.ozCJCRi2BU2OkqD4Zl84lQ/NodesShownInESpaceTree.Ml4qMDIr2EezSJRtI5QYFw:eDgQ9DoG2z8fqr4otJk1CA", "ShopperPortalEU", "VerifyIdentity", "NRNodes.WebScreen", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:Ml4qMDIr2EezSJRtI5QYFw", callContext.id);
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:ozCJCRi2BU2OkqD4Zl84lQ", callContext.id);
};
Controller.prototype.onInitializeEventHandler = function (callContext) {
var controller = this.controller;
var model = this.model;
var idService = this.idService;

return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.setThreadStartName(callContext.id, "Authentication/VerifyIdentity On Initialize");
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
return ShopperPortalEU_AuthenticationController.default.handleError(ex, this.callContext());
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

define("ShopperPortalEU.Authentication.VerifyIdentity.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"cLOhvm+810SnUCzD8oii6g": {
getter: function (varBag, idService) {
return varBag.vars.value.isAuthenticatedInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"1AtNofi9rUeUAW24dNctQw": {
getter: function (varBag, idService) {
return varBag.checkRedirectShopperVar.value;
}
},
"IsSYotrMDEW54TTEsbjJpg": {
getter: function (varBag, idService) {
return varBag.vars.value.tokenInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"fexwIGIovEiBk4H+W3I+dg": {
getter: function (varBag, idService) {
return varBag.vars.value.idInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gPIZiBYKzUGCWK9zag_sXg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"qSk4a01hJ06ZiP1rtA8iww": {
getter: function (varBag, idService) {
return varBag.authenticateVar.value;
}
},
"Ityk0GWeIkyf9vEizt3IEg": {
getter: function (varBag, idService) {
return varBag.vars.value.actionNameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"x3yanqZCsUm8vh1_RE92pQ": {
getter: function (varBag, idService) {
return varBag.v3ExecuteVar.value;
}
},
"1ctyN5q7ZUmz3Z1+AuX1kQ": {
getter: function (varBag, idService) {
return varBag.model.variables.emailVar;
},
dataType: OS.DataTypes.DataTypes.Email
},
"uTJF6hkLWE+Fg8d9SC1lmw": {
getter: function (varBag, idService) {
return varBag.model.variables.showScreenVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Ee_n9tsguUGou2Viggkw3A": {
getter: function (varBag, idService) {
return varBag.model.variables.isLoadingVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"t90MKwBBCEeNaj4ZyHAQoQ": {
getter: function (varBag, idService) {
return varBag.model.variables.isGenericLoginVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tgx3UktpeUmiev+wBYBGhA": {
getter: function (varBag, idService) {
return varBag.model.variables.reCAPTCHAv3_IdVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"W+wCNc32sEulVWSOqQ0Cjw": {
getter: function (varBag, idService) {
return varBag.model.variables.shopperHasLowScoreVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"TL0YQnhdwUKZ7nk+C5R0RA": {
getter: function (varBag, idService) {
return varBag.model.variables.captchaTokenVar;
},
dataType: OS.DataTypes.DataTypes.Text
},
"SyQMpt1CE0a39qQUDFRbAQ": {
getter: function (varBag, idService) {
return varBag.model.variables.lTIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"JNXQBFVXAEu5CApjTL4row": {
getter: function (varBag, idService) {
return varBag.model.variables.getReCAPTCHASiteDataAct;
}
},
"heiGoeWrCkOCNpPq8P1WLA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"0wQuo+lV60WRWFuQEm+KBw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"cAIAZvgM00ClqQrrDLcKPA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"wFR_EHLX_kC6KI9BxQDDcw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Form"));
})(varBag.model, idService);
}
},
"Ro+gqKHR4ke6avX_HCgi3A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Form1"));
})(varBag.model, idService);
}
},
"X5QUF4RwBESpfAwr9mMpuQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"+tEJ6tzBQEa1Ll1UjjgQ7g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("GenericLogin"));
})(varBag.model, idService);
}
},
"P1z0b5SHiUaE9Jz9PFpbyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("LT_1"));
})(varBag.model, idService);
}
},
"YtVY4LocAEWVyF2fPomQ8A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"DgEPwqgLXUCIpenNquzWXA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input"));
})(varBag.model, idService);
}
},
"L2yP0Yg6+UC8GmFb+q_SMg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Input_Email"));
})(varBag.model, idService);
}
},
"s6fhSpaEiUOByTsGWwZ4BQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Description"));
})(varBag.model, idService);
}
},
"W5fp3q7czEeRuJV1ZCr3qQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"OzArcwGf_kuxxKi7RV3AZA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
},
"ldnzTmpf+kyLIXFrlMgxgA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
