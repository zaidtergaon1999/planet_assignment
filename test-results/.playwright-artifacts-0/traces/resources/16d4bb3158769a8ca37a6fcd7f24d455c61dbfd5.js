define("ShopperPortalEU.InternalComponents.RefundDetails_Text_WB.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BulletsList.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BulletsListItem.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomLink.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomLinkItem.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButton.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButtonItem.mvc$model", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$CustomLinkItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsIconRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsIconRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsList_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsListItem_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLink_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLinkItem_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButton_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonItem_mvcModel) {
var OS = OutSystems.Internal;


var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("FormStatusLabel", "formStatusLabelIn", "FormStatusLabel", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_formStatusLabelInDataFetchStatus", "_formStatusLabelInDataFetchStatus", "_formStatusLabelInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("FormStatusId", "formStatusIdIn", "FormStatusId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_formStatusIdInDataFetchStatus", "_formStatusIdInDataFetchStatus", "_formStatusIdInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("CC4Digits", "cC4DigitsIn", "CC4Digits", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_cC4DigitsInDataFetchStatus", "_cC4DigitsInDataFetchStatus", "_cC4DigitsInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("Country", "countryIn", "Country", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, false), 
this.attr("_countryInDataFetchStatus", "_countryInDataFetchStatus", "_countryInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
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
Model._hasValidationWidgetsValue = (((((ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsList_mvcModel.hasValidationWidgets || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsListItem_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLink_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLinkItem_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButton_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonItem_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("FormStatusLabel" in inputs) {
this.variables.formStatusLabelIn = inputs.FormStatusLabel;
if("_formStatusLabelInDataFetchStatus" in inputs) {
this.variables._formStatusLabelInDataFetchStatus = inputs._formStatusLabelInDataFetchStatus;
}

}

if("FormStatusId" in inputs) {
this.variables.formStatusIdIn = inputs.FormStatusId;
if("_formStatusIdInDataFetchStatus" in inputs) {
this.variables._formStatusIdInDataFetchStatus = inputs._formStatusIdInDataFetchStatus;
}

}

if("CC4Digits" in inputs) {
this.variables.cC4DigitsIn = inputs.CC4Digits;
if("_cC4DigitsInDataFetchStatus" in inputs) {
this.variables._cC4DigitsInDataFetchStatus = inputs._cC4DigitsInDataFetchStatus;
}

}

if("Country" in inputs) {
this.variables.countryIn = inputs.Country;
if("_countryInDataFetchStatus" in inputs) {
this.variables._countryInDataFetchStatus = inputs._countryInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "InternalComponents.RefundDetails_Text_WB");
});
define("ShopperPortalEU.InternalComponents.RefundDetails_Text_WB.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Components.model", "react", "OutSystems/ReactView/Main", "ShopperPortalEU.InternalComponents.RefundDetails_Text_WB.mvc$model", "ShopperPortalEU.InternalComponents.RefundDetails_Text_WB.mvc$controller", "ShopperPortalEU.clientVariables", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BulletsList.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.BulletsListItem.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomLink.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomLinkItem.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButton.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomButtonItem.mvc$view", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$CustomLinkItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsIconRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsIconRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ComponentsModel, React, OSView, ShopperPortalEU_InternalComponents_RefundDetails_Text_WB_mvc_model, ShopperPortalEU_InternalComponents_RefundDetails_Text_WB_mvc_controller, ShopperPortalEUClientVariables, OSWidgets, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsList_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsListItem_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLink_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLinkItem_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButton_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonItem_mvc_view) {
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
        View.displayName = "InternalComponents.RefundDetails_Text_WB";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsList_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsListItem_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLink_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLinkItem_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButton_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonItem_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_InternalComponents_RefundDetails_Text_WB_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_InternalComponents_RefundDetails_Text_WB_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetails_StatusTitle"
},
style: "body-3 font-bold text-primary-black",
value: model.variables.formStatusLabelIn,
_idProps: {
service: idService,
uuid: "0"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._formStatusLabelInDataFetchStatus)
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "body-4 margin-top-01",
visible: true,
_idProps: {
service: idService,
uuid: "1"
},
_widgetRecordProvider: widgetsRecordProvider
}, $if(((model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefunded_RA7) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefunded_RA10)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetailsText"
},
style: "text-primary-35",
value: "Your Planet Tax Free process has been successfully completed.",
_idProps: {
service: idService,
uuid: "2"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(((((((((model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postGetCustomsApproval) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postCustomsInspectionRequired)) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefundDetailsRequired)) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefundOnHold)) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postUpdateRefundDetails)) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.preGetCustomsApproval)) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.preCustomsInspectionRequired)) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.preUpdateRefundDetails)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetailsText"
},
style: "text-primary-35",
value: "Action required",
_idProps: {
service: idService,
uuid: "3"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(((((model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefundApproved_RA3) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefundApproved_RA11)) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.preRefundClaimOngoing)) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefundInProgress)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetailsText"
},
style: "text-primary-35",
value: "View more details",
_idProps: {
service: idService,
uuid: "4"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(((model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.preRefundClaimRejected) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefundClaimRejected)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetailsText"
},
style: "text-primary-35",
value: "We\'re sorry, but your Planet Tax Free form has been rejected, and we cannot process your refund. This may be due to one of the following reasons:",
_idProps: {
service: idService,
uuid: "5"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsList_mvc_view, {
inputs: {
ExtendedClass: "margin-top-04 margin-bottom-04"
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
uuid: "6",
alias: "1"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
list: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "ul",
_idProps: {
service: idService,
uuid: "7"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsListItem_mvc_view, {
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
uuid: "8",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "customsStampUnavailable"
},
style: "text-primary-35",
value: "Missing Customs stamp",
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
}), React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsListItem_mvc_view, {
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
uuid: "10",
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "customsStampExpired"
},
style: "text-primary-35",
value: "Expired Customs stamp",
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
}), React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsListItem_mvc_view, {
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
uuid: "12",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "customsStampNotValid"
},
style: "text-primary-35",
value: "Invalid Customs stamp",
_idProps: {
service: idService,
uuid: "13"
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
})];
}, function () {
return [$if((((model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefundClaimCancelled_RA9) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefundClaimCancelled_VA6)) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.preRefundClaimCancelled)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetailsText"
},
style: "text-primary-35",
value: "Your Planet Tax Free form has been cancelled due to one of the following reasons:",
_idProps: {
service: idService,
uuid: "14"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsList_mvc_view, {
inputs: {
ExtendedClass: "margin-top-04 margin-bottom-04"
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
uuid: "15",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
list: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.AdvancedHtml, {
tag: "ul",
_idProps: {
service: idService,
uuid: "16"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsListItem_mvc_view, {
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
uuid: "17",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "IncorrectForm"
},
style: "text-primary-35",
value: "The form was issued incorrectly",
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
}), React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_BulletsListItem_mvc_view, {
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
uuid: "19",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "ReturnedItems"
},
style: "text-primary-35",
value: "The purchased items were returned",
_idProps: {
service: idService,
uuid: "20"
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
}), React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetailsText2"
},
gridProperties: {
classes: "ThemeGrid_MarginGutter"
},
style: "text-primary-35",
value: "For more details, please contact the store where you made your purchase.",
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if(((model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefundClaimExpired_VA5) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.postRefundClaimExpired_RA8)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetailsText"
},
style: "text-primary-35",
value: "Your Planet Tax Free form expired.\r\nFor more information, check the ",
_idProps: {
service: idService,
uuid: "22"
},
_widgetRecordProvider: widgetsRecordProvider
}), React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLink_mvc_view, {
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
uuid: "23",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
link: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("ShopperPortalEU", "CountryRules", {}),
visible: true,
_idProps: {
service: idService,
uuid: "24"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLinkItem_mvc_view, {
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
uuid: "25",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Country Rules",
_idProps: {
service: idService,
uuid: "26"
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
}), React.createElement(OSWidgets.Expression, {
value: ".",
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [$if((model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.preRefundRevoked_RB4), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetailsText"
},
style: "text-primary-35",
value: model.getCachedValue(idService.getId("ojsVtw5T50qrNRkX0Guy_Q.Value"), function () {
return (((("Unfortunately, your Planet Tax Free process was not completed. The refund was charged back to your card ending in " + model.variables.cC4DigitsIn) + ", with an additional fee.\r\n\r\nThe charge will show as PLANET TAX FREE ") + OS.BuiltinFunctions.toUpper(model.variables.countryIn)) + ".");
}, function () {
return model.variables.cC4DigitsIn;
}, function () {
return model.variables.countryIn;
}),
_idProps: {
service: idService,
uuid: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
value_dataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._cC4DigitsInDataFetchStatus, model.variables._countryInDataFetchStatus)
}), React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButton_mvc_view, {
inputs: {
ExtendedClass: "margin-top-02",
Options: model.getCachedValue(idService.getId("eqZ4ZLLb1EGIvxNc8kgPVQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomButtonOptionsRec();
rec.testIdAttr = "RefundDetails_ConcactCustomerSupport _Button";
rec.typeAttr = ShopperPortalEUModel.staticEntities.customButtonType.primary;
rec.isFullWidthAttr = true;
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
uuid: "29",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "Help", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "30"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonItem_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("_g+oH2SiPkuAIj20l_USOQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomButtonItemOptionsRec();
rec.iconAttr = function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomButtonOptionsIconRec();
rec.nameAttr = "person";
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
uuid: "31",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetails_ConcactCustomerSupport _Button_Text"
},
value: "Contact Customer Support",
_idProps: {
service: idService,
uuid: "32"
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
})];
}, function () {
return [$if(((model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.preRefundClaimCompleted_RB3) || (model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.preRefundClaimCompleted_RB6)), false, this, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetailsText"
},
style: "text-primary-35",
value: "Your Planet Tax Free process has been successfully completed.",
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}, function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetailsText"
},
style: "text-primary-35",
value: "Contact Customer Support for further details",
_idProps: {
service: idService,
uuid: "34"
},
_widgetRecordProvider: widgetsRecordProvider
}), $if((model.variables.formStatusIdIn === ShopperPortalEUModel.staticEntities.sPFormStatus.refundClaimPending), false, this, function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButton_mvc_view, {
inputs: {
ExtendedClass: "margin-top-02",
Options: model.getCachedValue(idService.getId("b57rD74AXU6VsJaooI9yzg.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomButtonOptionsRec();
rec.testIdAttr = "RefundDetails_ConcactCustomerSupport _Button";
rec.typeAttr = ShopperPortalEUModel.staticEntities.customButtonType.primary;
rec.isFullWidthAttr = true;
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
uuid: "35",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
button: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
OS.Navigation.navigateTo(OS.Navigation.generateScreenURL("ShopperPortalEU", "Help", {}), OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default));
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "36"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomButtonItem_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("BFj9wGbDz0+z1W90HLWhaQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomButtonItemOptionsRec();
rec.iconAttr = function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomButtonOptionsIconRec();
rec.nameAttr = "person";
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
uuid: "37",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "RefundDetailsText"
},
value: "Contact Customer Support",
_idProps: {
service: idService,
uuid: "38"
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
})];
}, function () {
return [];
})];
})];
})];
})];
})];
})];
})];
})];
})));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU.InternalComponents.RefundDetails_Text_WB.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU.languageResources", "ShopperPortalEU.clientVariables", "ShopperPortalEU.InternalComponents.RefundDetails_Text_WB.mvc$debugger", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$CustomLinkItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsIconRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomButtonOptionsIconRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEULanguageResources, ShopperPortalEUClientVariables, ShopperPortalEU_InternalComponents_RefundDetails_Text_WB_mvc_Debugger) {
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


// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:WLZg9jO0M0aiRlyqBkvkgg:/NRWebFlows.WLZg9jO0M0aiRlyqBkvkgg:eI2Gsuu43vLy9LWSnrwTXg", "ShopperPortalEU", "InternalComponents", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:xhPrBK+UJUCH5VY_BSArXA:/NRWebFlows.WLZg9jO0M0aiRlyqBkvkgg/NodesShownInESpaceTree.xhPrBK+UJUCH5VY_BSArXA:vAML+VckgzlXV1SUmLBmsg", "ShopperPortalEU", "RefundDetails_Text_WB", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:xhPrBK+UJUCH5VY_BSArXA", callContext.id);
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:WLZg9jO0M0aiRlyqBkvkgg", callContext.id);
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

define("ShopperPortalEU.InternalComponents.RefundDetails_Text_WB.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"5ZTSnbzv7Eyuz9GEszl5yg": {
getter: function (varBag, idService) {
return varBag.model.variables.formStatusLabelIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"yWeM8sYedk6ZU25eahmhIA": {
getter: function (varBag, idService) {
return varBag.model.variables.formStatusIdIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Nlkspu1UDU6YyBtGDNmHGQ": {
getter: function (varBag, idService) {
return varBag.model.variables.cC4DigitsIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0Oh+Tyvce0qxEg4ZrgTsag": {
getter: function (varBag, idService) {
return varBag.model.variables.countryIn;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XQHCQtT6NkSEAMAp7v+3gQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ManyStatusesNoText"));
})(varBag.model, idService);
}
},
"ZxXdd4Dez0u0NbmqpvOGUw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ManyStatusesActionRequired"));
})(varBag.model, idService);
}
},
"BCJXAoRiBEKYN0bC7uS9zg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PostRefundApproved"));
})(varBag.model, idService);
}
},
"lH3vghyBWUeeRQok1TVuZQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RefundClaimRejected"));
})(varBag.model, idService);
}
},
"J0VSk5w00UuR1tEP8r6wjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List"));
})(varBag.model, idService);
}
},
"v4P_S_kcN0iJ0lGh+EtflA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"zGiZaWWdDkSoDpx7kAkuOg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"NaoZ4pk870qZD1Jrlr2jZg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"rKp9dvDjEU+n5qsu1dGL3Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RefundClaimCancelled"));
})(varBag.model, idService);
}
},
"iMEX85jaI0mLpBmw+VRLuQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("List"));
})(varBag.model, idService);
}
},
"PkpyfNAeAEy_hlko3B4dyA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"OGdxSeVnfEGfl_+gISZz_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"YmJOERdlfEKCSAPJhMDDcw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PostRefundClaimExpired"));
})(varBag.model, idService);
}
},
"9kEk0OJ+zU+Tq6rM3ExYVA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Link"));
})(varBag.model, idService);
}
},
"dUtJMFXxWUKfx6BHYEzBEw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"OW3VxRLQIUW0UAE8hvJDHg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PreRefundRevoked"));
})(varBag.model, idService);
}
},
"R0uhFYcrs02p_EPz2GBkPg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
},
"rxVdQoFZ9UmJSXhmHhAirA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Rx1Ph_SCWUmX82umI51wlA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("PreRefundCompleted"));
})(varBag.model, idService);
}
},
"gelXtDrsRUSBUd3yRzgNaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("RefundClaimPending"));
})(varBag.model, idService);
}
},
"dSr_xeKNN0i6cngRxhpHhg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Button"));
})(varBag.model, idService);
}
},
"fBwNoVpOx0+GBsP7LkGl5g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
