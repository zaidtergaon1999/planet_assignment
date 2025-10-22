define("ShopperPortalEU.LayoutsComponents.Menu.mvc$model", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.Menu.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.Padding.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomLink.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomLinkItem.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomCard.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.Flex.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.Avatar.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomIcon.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ProgressBar.mvc$model", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.MenuElement.mvc$model", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.MenuItem.mvc$model", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomTag.mvc$model", "ShopperPortalEU.Common.LogoupPopup.mvc$model", "ShopperPortalEU.controller$TRuleWrapper", "ShopperPortalEU_UI_Theme.model$MenuOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU_UI_Components.model$PaddingRec", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$PaddingSideOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsIconRec", "ShopperPortalEU_UI_Components.model$CustomCardOptionsRec", "ShopperPortalEU_UI_Components.model$FlexOptionsRec", "ShopperPortalEU_UI_Components.model$AvatarOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$ProgressBarOptionsRec", "ShopperPortalEU_UI_Theme.model$MenuElementOptionsRec", "ShopperPortalEU_UI_Theme.model$MenuItemOptionsRec", "ShopperPortalEU_UI_Theme.model$MenuItemIconOptionsRec", "ShopperPortalEU_UI_Components.model$CustomTagOptionsRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_Menu_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Padding_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLink_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLinkItem_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomCard_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Flex_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Avatar_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ProgressBar_mvcModel, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvcModel, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvcModel, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomTag_mvcModel, ShopperPortalEU_Common_LogoupPopup_mvcModel) {
var OS = OutSystems.Internal;

var GetDataDataActRec = (function (_super) {
__extends(GetDataDataActRec, _super);
function GetDataDataActRec(defaults) {
_super.apply(this, arguments);
}
GetDataDataActRec.attributesToDeclare = function () {
return [
this.attr("IsToShowMyTrips", "isToShowMyTripsOut", "IsToShowMyTrips", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GetDataDataActRec.fromStructure = function (str) {
return new GetDataDataActRec(new GetDataDataActRec.RecordClass({
isToShowMyTripsOut: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GetDataDataActRec.init();
return GetDataDataActRec;
})(OS.Model.DataSourceRecord);

var VariablesRecord = (function (_super) {
__extends(VariablesRecord, _super);
function VariablesRecord(defaults) {
_super.apply(this, arguments);
}
VariablesRecord.attributesToDeclare = function () {
return [
this.attr("ShowLogoutPopup", "showLogoutPopupVar", "ShowLogoutPopup", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, false), 
this.attr("ActiveMenu", "activeMenuIn", "ActiveMenu", true, false, OS.DataTypes.DataTypes.Integer, function () {
return -1;
}, false), 
this.attr("_activeMenuInDataFetchStatus", "_activeMenuInDataFetchStatus", "_activeMenuInDataFetchStatus", true, false, OS.DataTypes.DataTypes.Integer, function () {
return /*Fetched*/ 1;
}, false), 
this.attr("GetData", "getDataDataAct", "getDataDataAct", true, true, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new GetDataDataActRec());
}, true, GetDataDataActRec)
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
Model._hasValidationWidgetsValue = ((((((((((((ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_Menu_mvcModel.hasValidationWidgets || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Padding_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLink_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLinkItem_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomCard_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Flex_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Avatar_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ProgressBar_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvcModel.hasValidationWidgets) || ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomTag_mvcModel.hasValidationWidgets) || ShopperPortalEU_Common_LogoupPopup_mvcModel.hasValidationWidgets);
}

return Model._hasValidationWidgetsValue;
}
});

Model.prototype.setInputs = function (inputs) {
if("ActiveMenu" in inputs) {
this.variables.activeMenuIn = inputs.ActiveMenu;
if("_activeMenuInDataFetchStatus" in inputs) {
this.variables._activeMenuInDataFetchStatus = inputs._activeMenuInDataFetchStatus;
}

}

};
return Model;
})(OS.Model.BaseViewModel);
return new OS.Model.ModelFactory(Model, "LayoutsComponents.Menu");
});
define("ShopperPortalEU.LayoutsComponents.Menu.mvc$view", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Components.model", "react", "OutSystems/ReactView/Main", "ShopperPortalEU.LayoutsComponents.Menu.mvc$model", "ShopperPortalEU.LayoutsComponents.Menu.mvc$controller", "ShopperPortalEU.clientVariables", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.Menu.mvc$view", "OutSystems/ReactWidgets/Main", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.Padding.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomLink.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomLinkItem.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomCard.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.Flex.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.Avatar.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomIcon.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.ProgressBar.mvc$view", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.MenuElement.mvc$view", "ShopperPortalEU_UI_Theme.ShopperPortalEUUIThemeLayoutsComponents.MenuItem.mvc$view", "ShopperPortalEU_UI_Components.ShopperPortalEUUIComponents.CustomTag.mvc$view", "ShopperPortalEU.Common.LogoupPopup.mvc$view", "ShopperPortalEU.controller$TRuleWrapper", "ShopperPortalEU_UI_Theme.model$MenuOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU_UI_Components.model$PaddingRec", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$PaddingSideOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsIconRec", "ShopperPortalEU_UI_Components.model$CustomCardOptionsRec", "ShopperPortalEU_UI_Components.model$FlexOptionsRec", "ShopperPortalEU_UI_Components.model$AvatarOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$ProgressBarOptionsRec", "ShopperPortalEU_UI_Theme.model$MenuElementOptionsRec", "ShopperPortalEU_UI_Theme.model$MenuItemOptionsRec", "ShopperPortalEU_UI_Theme.model$MenuItemIconOptionsRec", "ShopperPortalEU_UI_Components.model$CustomTagOptionsRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ComponentsModel, React, OSView, ShopperPortalEU_LayoutsComponents_Menu_mvc_model, ShopperPortalEU_LayoutsComponents_Menu_mvc_controller, ShopperPortalEUClientVariables, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_Menu_mvc_view, OSWidgets, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Padding_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLink_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLinkItem_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomCard_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Flex_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Avatar_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ProgressBar_mvc_view, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvc_view, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomTag_mvc_view, ShopperPortalEU_Common_LogoupPopup_mvc_view) {
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
        View.displayName = "LayoutsComponents.Menu";
        View.getCssDependencies = function() {
            return ["css/OutSystemsReactWidgets.css"];
        };
        View.getJsDependencies = function() {
            return [];
        };
        View.getBlocks = function() {
            return [ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_Menu_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Padding_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLink_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLinkItem_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomCard_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Flex_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Avatar_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ProgressBar_mvc_view, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvc_view, ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_view, ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomTag_mvc_view, ShopperPortalEU_Common_LogoupPopup_mvc_view];
        };
        Object.defineProperty(View.prototype, "modelFactory", {
            get: function () {
                return ShopperPortalEU_LayoutsComponents_Menu_mvc_model;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(View.prototype, "controllerFactory", {
            get: function () {
                return ShopperPortalEU_LayoutsComponents_Menu_mvc_controller;
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

            return React.createElement("div", this.getRootNodeProperties(), React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_Menu_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("S_Wy0aCwokmwheReP5Zi4g.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuOptionsRec();
rec.activeMenuAttr = model.variables.activeMenuIn;
return rec;
}();
}, function () {
return model.variables.activeMenuIn;
}),
_optionsInDataFetchStatus: OS.Model.calculateDataFetchStatus(model.variables._activeMenuInDataFetchStatus)
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
top: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Padding_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("NidwElJEe0CbjlBp+TvVzg.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.PaddingRec();
rec.rightAttr = function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.PaddingSideOptionsRec();
rec.layoutAttr = true;
return rec;
}();
rec.leftAttr = function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.PaddingSideOptionsRec();
rec.layoutAttr = true;
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
uuid: "1",
alias: "2"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomLink_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("hURhPGytLkmPM9TQZpREvw.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomLinkOptionsRec();
rec.testIdAttr = "Menu_Profile";
rec.typeAttr = ShopperPortalEUModel.staticEntities.customLinkType.ghost;
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
alias: "3"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
link: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("ShopperPortalEU", "MyProfile", {}),
visible: true,
_idProps: {
service: idService,
uuid: "3"
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
uuid: "4",
alias: "4"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomCard_mvc_view, {
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
uuid: "5",
alias: "5"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Flex_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("jxSkAwauLE62jHtVK6WCVQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.FlexOptionsRec();
rec.alignAttr = ShopperPortalEUModel.staticEntities.flexAlign.center;
rec.justifyAttr = ShopperPortalEUModel.staticEntities.flexJustify.spaceBetween;
rec.spacingAttr = ShopperPortalEUModel.staticEntities.spacing.space3;
rec.wrapAttr = false;
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
uuid: "6",
alias: "6"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Flex_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("pU8k63qHuUOOrdBvsvn3iA.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.FlexOptionsRec();
rec.alignAttr = ShopperPortalEUModel.staticEntities.flexAlign.center;
rec.spacingAttr = ShopperPortalEUModel.staticEntities.spacing.space3;
rec.wrapAttr = false;
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
uuid: "7",
alias: "7"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Avatar_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("cyOKjDP6gkOVN0gbyPPBtw.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.AvatarOptionsRec();
rec.nameAttr = ShopperPortalEUClientVariables.getShopperName();
rec.testIdAttr = "ShopperInitials";
return rec;
}();
}, function () {
return ShopperPortalEUClientVariables.getShopperName();
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
uuid: "8",
alias: "8"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
visible: true,
_idProps: {
service: idService,
uuid: "9"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "heading6",
visible: true,
_idProps: {
service: idService,
uuid: "10"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "ShopperName"
},
value: ShopperPortalEUClientVariables.getShopperName(),
_idProps: {
service: idService,
uuid: "11"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "body-4",
visible: true,
_idProps: {
service: idService,
uuid: "12"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "ShopperContact"
},
value: ShopperPortalEUClientVariables.getShopperContact(),
_idProps: {
service: idService,
uuid: "13"
},
_widgetRecordProvider: widgetsRecordProvider
})))];
})
},
_dependencies: [asPrimitiveValue(ShopperPortalEUClientVariables.getShopperContact()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperName())]
}), React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_Flex_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("1yMLvtfV3USUMMPHdHL7SQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.FlexOptionsRec();
rec.alignAttr = ShopperPortalEUModel.staticEntities.flexAlign.center;
rec.spacingAttr = ShopperPortalEUModel.staticEntities.spacing.space3;
rec.wrapAttr = false;
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
uuid: "14",
alias: "9"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [$if((ShopperPortalEUClientVariables.getShopperCards() > 0), false, this, function () {
return [];
}, function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("5dE3ekUVtUGxe2bqbauEsA.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomIconOptionsRec();
rec.nameAttr = "error";
rec.sizeAttr = ShopperPortalEUModel.staticEntities.customIconSize.small;
rec.colorAttr = "var(--color-error-70)";
rec.isFilledAttr = true;
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
uuid: "15",
alias: "10"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
}), React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomIcon_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("xMKpZjpXpk6ifkNK9bLiUA.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomIconOptionsRec();
rec.nameAttr = "arrow_forward_ios";
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
uuid: "16",
alias: "11"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(ShopperPortalEUClientVariables.getShopperCards())]
})];
})
},
_dependencies: [asPrimitiveValue(ShopperPortalEUClientVariables.getShopperCards()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperContact()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperName())]
}), $if(ShopperPortalEUClientVariables.getShopperProfileCompleted().lt(OS.BuiltinFunctions.integerToDecimal(100)), false, this, function () {
return [React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-04",
visible: true,
_idProps: {
service: idService,
uuid: "17"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "body-4 margin-bottom-02",
visible: true,
_idProps: {
service: idService,
uuid: "18"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(OSWidgets.Expression, {
extendedProperties: {
"data-testid": "ShopperProfileCompletedLabel"
},
value: (("Profile " + OS.BuiltinFunctions.decimalToText(ShopperPortalEUClientVariables.getShopperProfileCompleted())) + "%"),
_idProps: {
service: idService,
uuid: "19"
},
_widgetRecordProvider: widgetsRecordProvider
})), React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_ProgressBar_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("RafO84o+90Gv5edE8tE+Ew.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.ProgressBarOptionsRec();
rec.testIdAttr = "ShopperProfileCompletedBar";
rec.progressAttr = ShopperPortalEUClientVariables.getShopperProfileCompleted();
rec.stepsAttr = 4;
return rec;
}();
}, function () {
return ShopperPortalEUClientVariables.getShopperProfileCompleted();
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
uuid: "20",
alias: "12"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
}))];
}, function () {
return [];
})];
})
},
_dependencies: [asPrimitiveValue(ShopperPortalEUClientVariables.getShopperProfileCompleted()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperCards()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperContact()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperName())]
})];
})
},
_dependencies: [asPrimitiveValue(ShopperPortalEUClientVariables.getShopperProfileCompleted()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperCards()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperContact()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperName())]
}))];
})
},
_dependencies: [asPrimitiveValue(ShopperPortalEUClientVariables.getShopperProfileCompleted()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperCards()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperContact()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperName())]
})];
})
},
_dependencies: [asPrimitiveValue(ShopperPortalEUClientVariables.getShopperProfileCompleted()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperCards()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperContact()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperName())]
}), React.createElement(OSWidgets.Container, {
align: /*Default*/ 0,
animate: false,
style: "margin-top-05",
visible: true,
_idProps: {
service: idService,
uuid: "21"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("O6dy1AVj1kGozPSPdHCroQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuElementOptionsRec();
rec.testIdAttr = "Menu_MyRefunds";
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
uuid: "22",
alias: "13"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
menuItem: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("ShopperPortalEU", "MyRefunds", {}),
visible: true,
_idProps: {
service: idService,
uuid: "23"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("GUyvsVZlCUeHSsPX2u1oTQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemOptionsRec();
rec.iconAttr = function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemIconOptionsRec();
rec.nameAttr = "receipt_long";
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
uuid: "24",
alias: "14"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "My refunds",
_idProps: {
service: idService,
uuid: "25"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
right: PlaceholderContent.Empty
},
_dependencies: []
}))];
})
},
_dependencies: []
}), $if(model.variables.getDataDataAct.isToShowMyTripsOut, false, this, function () {
return [React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("x+24Ynn1QkK7T1wBo20APA.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuElementOptionsRec();
rec.testIdAttr = "Menu_Trips";
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
uuid: "26",
alias: "15"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
menuItem: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("ShopperPortalEU", "MyTrips", {}),
visible: true,
_idProps: {
service: idService,
uuid: "27"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("yh0mcbwVeku7zLvtPeqvTg.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemOptionsRec();
rec.iconAttr = function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemIconOptionsRec();
rec.nameAttr = "trip";
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
uuid: "28",
alias: "16"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "My trips",
_idProps: {
service: idService,
uuid: "29"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
right: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Components_ShopperPortalEUUIComponents_CustomTag_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("4B4U_zSSrEOUU1a74vYPUQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ComponentsModel.CustomTagOptionsRec();
rec.testIdAttr = "NewTripTag";
rec.stateAttr = ShopperPortalEUModel.staticEntities.customTagState.new;
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
uuid: "30",
alias: "17"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
content: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "New",
_idProps: {
service: idService,
uuid: "31"
},
_widgetRecordProvider: widgetsRecordProvider
})];
})
},
_dependencies: []
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
}), React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("bufWpowBEU6UaEVcCsnpRQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuElementOptionsRec();
rec.testIdAttr = "Menu_Locations";
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
uuid: "32",
alias: "18"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
menuItem: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("ShopperPortalEU", "Locations", {}),
visible: true,
_idProps: {
service: idService,
uuid: "33"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("X1kXuRHfD0ONLlXEi7XRLQ.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemOptionsRec();
rec.iconAttr = function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemIconOptionsRec();
rec.nameAttr = "location_on";
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
uuid: "34",
alias: "19"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Locations",
_idProps: {
service: idService,
uuid: "35"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
right: PlaceholderContent.Empty
},
_dependencies: []
}))];
})
},
_dependencies: []
}), React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("2MUxLnjHyUq+HFGXzctIDw.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuElementOptionsRec();
rec.testIdAttr = "Menu_CountryRules";
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
uuid: "36",
alias: "20"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
menuItem: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("ShopperPortalEU", "CountryRules", {}),
visible: true,
_idProps: {
service: idService,
uuid: "37"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("HS7LUikZPkKjhJUq59Gjzw.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemOptionsRec();
rec.iconAttr = function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemIconOptionsRec();
rec.nameAttr = "policy";
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
uuid: "38",
alias: "21"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Country rules",
_idProps: {
service: idService,
uuid: "39"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
right: PlaceholderContent.Empty
},
_dependencies: []
}))];
})
},
_dependencies: []
}))];
}),
bottom: new PlaceholderContent(function () {
return [React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("VWJGSGFFgUSSDKLfHMgd6g.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuElementOptionsRec();
rec.testIdAttr = "Menu_Help";
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
uuid: "40",
alias: "22"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
menuItem: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL("ShopperPortalEU", "Help", {}),
visible: true,
_idProps: {
service: idService,
uuid: "41"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("XEgvUOkmQEKXhUXbkQ_wCg.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemOptionsRec();
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
uuid: "42",
alias: "23"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Help",
_idProps: {
service: idService,
uuid: "43"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
right: PlaceholderContent.Empty
},
_dependencies: []
}))];
})
},
_dependencies: []
}), React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("wfPYFD7N4E+ohstPHD0LGw.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuElementOptionsRec();
rec.testIdAttr = "Menu_TermsAndConditions";
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
uuid: "44",
alias: "24"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
menuItem: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
target: "_blank"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL(OutSystemsDebugger.handleFunctionCall(function () {
return ShopperPortalEUController.default.tRuleWrapper$Action("support_termsandconditions", "", callContext).textOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), {}),
visible: true,
_idProps: {
service: idService,
uuid: "45"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("lZG4G+TTekaoiKdUxBjyIw.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemOptionsRec();
rec.iconAttr = function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemIconOptionsRec();
rec.nameAttr = "open_in_new";
rec.rightAlignedAttr = true;
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
uuid: "46",
alias: "25"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Terms and conditions",
_idProps: {
service: idService,
uuid: "47"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
right: PlaceholderContent.Empty
},
_dependencies: []
}))];
})
},
_dependencies: []
}), React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("JTjl8WdDGUiiuJn3NkTugA.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuElementOptionsRec();
rec.testIdAttr = "Menu_PrivacyPolicy";
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
uuid: "48",
alias: "26"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
menuItem: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Link, {
enabled: true,
extendedProperties: {
target: "_blank"
},
transition: OS.Transitions.createTransition(OS.Transitions.TransitionAnimation.Default),
url: OS.Navigation.generateScreenURL(OutSystemsDebugger.handleFunctionCall(function () {
return ShopperPortalEUController.default.tRuleWrapper$Action("support_privacypolicy", "", callContext).textOut;
}, OS.DataTypes.DataTypes.Text, callContext.id), {}),
visible: true,
_idProps: {
service: idService,
uuid: "49"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("WksTlMv5o0ObHu5MDsXncg.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemOptionsRec();
rec.iconAttr = function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemIconOptionsRec();
rec.nameAttr = "open_in_new";
rec.rightAlignedAttr = true;
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
uuid: "50",
alias: "27"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Privacy policy",
_idProps: {
service: idService,
uuid: "51"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
right: PlaceholderContent.Empty
},
_dependencies: []
}))];
})
},
_dependencies: []
}), React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuElement_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("jAt9uvqNmk6QmHDAXI7uvA.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuElementOptionsRec();
rec.testIdAttr = "Menu_Logout";
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
uuid: "52",
alias: "28"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
menuItem: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Button, {
enabled: true,
isDefault: false,
onClick: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "LayoutsComponents/Menu/Button OnClick");
controller.logout_ToggleShowLogoutPopup$Action(controller.callContext(eventHandlerContext));
}, function () {
controller.popDebuggerContext(eventHandlerContext);
});

;
},
style: "btn",
visible: true,
_idProps: {
service: idService,
uuid: "53"
},
_widgetRecordProvider: widgetsRecordProvider
}, React.createElement(ShopperPortalEU_UI_Theme_ShopperPortalEUUIThemeLayoutsComponents_MenuItem_mvc_view, {
inputs: {
Options: model.getCachedValue(idService.getId("ZJsRqX1wu0K0tWktuepXWg.Options"), function () {
return function () {
var rec = new ShopperPortalEU_UI_ThemeModel.MenuItemOptionsRec();
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
uuid: "54",
alias: "29"
},
_widgetRecordProvider: widgetsRecordProvider,
placeholders: {
label: new PlaceholderContent(function () {
return [React.createElement(OSWidgets.Expression, {
value: "Logout",
_idProps: {
service: idService,
uuid: "55"
},
_widgetRecordProvider: widgetsRecordProvider
})];
}),
right: PlaceholderContent.Empty
},
_dependencies: []
}))];
})
},
_dependencies: []
}), React.createElement(ShopperPortalEU_Common_LogoupPopup_mvc_view, {
inputs: {
Show: model.variables.showLogoutPopupVar
},
events: {
_handleError: function (ex) {
controller.handleError(ex);
},
onClose$Action: function () {
var eventHandlerContext = callContext.clone();
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(eventHandlerContext);

OutSystemsDebugger.setThreadStartName(eventHandlerContext.id, "Common/LogoupPopup OnClose");
controller.logout_ToggleShowLogoutPopup$Action(controller.callContext(eventHandlerContext));
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
uuid: "56",
alias: "30"
},
_widgetRecordProvider: widgetsRecordProvider,
_dependencies: []
})];
})
},
_dependencies: [asPrimitiveValue(model.variables.showLogoutPopupVar), asPrimitiveValue(model.variables.getDataDataAct.dataFetchStatusAttr), asPrimitiveValue(model.variables.getDataDataAct.isToShowMyTripsOut), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperProfileCompleted()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperCards()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperContact()), asPrimitiveValue(ShopperPortalEUClientVariables.getShopperName())]
}));
        };
        return View;
    })(OSView.BaseView.BaseWebBlock);
	
    return View;
});
define("ShopperPortalEU.LayoutsComponents.Menu.mvc$controller", ["OutSystems/ClientRuntime/Main", "ShopperPortalEU.model", "ShopperPortalEU.controller", "ShopperPortalEU_UI_Theme.model", "ShopperPortalEU_UI_Components.model", "ShopperPortalEU.languageResources", "ShopperPortalEU.clientVariables", "ShopperPortalEU.LayoutsComponents.Menu.mvc$debugger", "ShopperPortalEU.controller$TRuleWrapper", "ShopperPortalEU_UI_Theme.model$MenuOptionsRec", "ShopperPortalEU.referencesHealth", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Theme", "ShopperPortalEU_UI_Components.model$PaddingRec", "ShopperPortalEU.referencesHealth$ShopperPortalEU_UI_Components", "ShopperPortalEU_UI_Components.model$PaddingSideOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkItemOptionsRec", "ShopperPortalEU_UI_Components.model$CustomLinkOptionsIconRec", "ShopperPortalEU_UI_Components.model$CustomCardOptionsRec", "ShopperPortalEU_UI_Components.model$FlexOptionsRec", "ShopperPortalEU_UI_Components.model$AvatarOptionsRec", "ShopperPortalEU_UI_Components.model$CustomIconOptionsRec", "ShopperPortalEU_UI_Components.model$ProgressBarOptionsRec", "ShopperPortalEU_UI_Theme.model$MenuElementOptionsRec", "ShopperPortalEU_UI_Theme.model$MenuItemOptionsRec", "ShopperPortalEU_UI_Theme.model$MenuItemIconOptionsRec", "ShopperPortalEU_UI_Components.model$CustomTagOptionsRec"], function (OutSystems, ShopperPortalEUModel, ShopperPortalEUController, ShopperPortalEU_UI_ThemeModel, ShopperPortalEU_UI_ComponentsModel, ShopperPortalEULanguageResources, ShopperPortalEUClientVariables, ShopperPortalEU_LayoutsComponents_Menu_mvc_Debugger) {
var OS = OutSystems.Internal;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
var controller = this.controller;
this.clientActionProxies = {};
this.dataFetchDependenciesOriginal = {
getData$DataActRefresh: 0
};
this.dataFetchDependentsGraph = {
getData$DataActRefresh: []
};
this.shouldSendClientVarsToDataSources = true;
}
// Server Actions

// Aggregates and Data Actions
Controller.prototype.getData$DataActRefresh = function (callContext) {
var model = this.model;
var controller = this.controller;
var callContext = controller.callContext(callContext);
return OS.Flow.tryFinally(function () {
var varBag = {};
controller.pushDebuggerContext(callContext);

OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:eS3WylAW5EW7vx8nFdxNFQ:/NRWebFlows.L_YboVe7KUC5K0uH_jh6qw/NodesShownInESpaceTree.eoon_NeCmUWwLZJbhwheJw/DataActions.eS3WylAW5EW7vx8nFdxNFQ:djHANnMvmFCm8RGmVvENTQ", "ShopperPortalEU", "GetData", "NRFlows.DataScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.setThreadStartName(callContext.id, "LayoutsComponents/Menu/GetData");
return controller.callDataAction("DataActionGetData", "screenservices/ShopperPortalEU/LayoutsComponents/Menu/DataActionGetData", "Q5BoFCS0XunO_Zi3MaG+1Q", function (b) {
model.variables.getDataDataAct.dataFetchStatusAttr = b;
}, function (json) {
model.variables.getDataDataAct.replaceWith(OS.DataConversion.ServerDataConverter.from(json, model.variables.getDataDataAct.constructor));
}, undefined, OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, callContext, ShopperPortalEUClientVariables, false);

}, function () {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:eS3WylAW5EW7vx8nFdxNFQ", callContext.id);
controller.popDebuggerContext(callContext);

});
};

Controller.prototype.dataFetchActionNames = ["getData$DataActRefresh"];
// Client Actions
Controller.prototype._logout_ToggleShowLogoutPopup$Action = function (callContext) {
var varBag = {};
var model = this.model;
var controller = this.controller;
var idService = this.idService;
varBag.model = model;
varBag.idService = idService;
controller.ensureControllerAlive("Logout_ToggleShowLogoutPopup");
callContext = controller.callContext(callContext);
varBag.callContext = callContext;
try {OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:1430EeNme0+H_FCx+UGSvg:/NRWebFlows.L_YboVe7KUC5K0uH_jh6qw/NodesShownInESpaceTree.eoon_NeCmUWwLZJbhwheJw/ClientActions.1430EeNme0+H_FCx+UGSvg:m5lSRIalsmALlydZ6mTVzA", "ShopperPortalEU", "Logout_ToggleShowLogoutPopup", "NRFlows.ClientScreenActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:F2co69Y8BUu373SittizXw", callContext.id);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:pJuU9OHTRUW1wO908wC0xQ", callContext.id);
// ShowLogoutPopup = notShowLogoutPopup
model.variables.showLogoutPopupVar = !(model.variables.showLogoutPopupVar);
OutSystemsDebugger.handleBreakpoint("sVWao32nAUKeYxPPAcjqKg:GA7zLxNUqEqqJApuIPBjEw", callContext.id);
} catch (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
throw ex;
} finally {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:1430EeNme0+H_FCx+UGSvg", callContext.id);
}

};

Controller.prototype.logout_ToggleShowLogoutPopup$Action = function (callContext) {
var controller = this.controller;
return controller.safeExecuteClientAction(controller._logout_ToggleShowLogoutPopup$Action, callContext);

};

// Event Handler Actions
Controller.prototype.pushDebuggerContext = function (callContext) {
var varBag = {};
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:L_YboVe7KUC5K0uH_jh6qw:/NRWebFlows.L_YboVe7KUC5K0uH_jh6qw:7M96ALC1q_CnwlpVX8Rm0w", "ShopperPortalEU", "LayoutsComponents", "NRFlows.WebFlow", callContext.id, varBag);
OutSystemsDebugger.push("sVWao32nAUKeYxPPAcjqKg:eoon_NeCmUWwLZJbhwheJw:/NRWebFlows.L_YboVe7KUC5K0uH_jh6qw/NodesShownInESpaceTree.eoon_NeCmUWwLZJbhwheJw:CIV_zKB4UU_bgl8ihAIH2w", "ShopperPortalEU", "Menu", "NRNodes.WebBlock", callContext.id, varBag);
};
Controller.prototype.popDebuggerContext = function (callContext) {
OutSystemsDebugger.pop("sVWao32nAUKeYxPPAcjqKg:eoon_NeCmUWwLZJbhwheJw", callContext.id);
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

define("ShopperPortalEU.LayoutsComponents.Menu.mvc$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"OedOBnq4HUiKmFTtCg0+cQ": {
getter: function (varBag, idService) {
return varBag.model.variables.showLogoutPopupVar;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"9UIwbmS67UuNNAXsBVeKUw": {
getter: function (varBag, idService) {
return varBag.model.variables.activeMenuIn;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"eS3WylAW5EW7vx8nFdxNFQ": {
getter: function (varBag, idService) {
return varBag.model.variables.getDataDataAct;
}
},
"rU4AMmL7mkCylHBJgRBx+g": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Top"));
})(varBag.model, idService);
}
},
"5g5duMw56UaMOq52RVy7uA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"4IU0ucT+uU+6g2ShaldZxw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Link"));
})(varBag.model, idService);
}
},
"gvVbz3f33EeQ+tpwhaWlpw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"Egv0Z7MgfkGuJFe4Vy+bpQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"YWa0xru6E068cp_0QwcK9w": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"CVMhrdYcR0O4yJ58YMwnQw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"R+p6YqRnnEu9shRii_kMnA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"tDSMyMiu90OA7AoEqZ717A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuItem"));
})(varBag.model, idService);
}
},
"T0ylEbNfe0KMXRsyKP9B3A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"MEEULg6sP0qmC7FwtZ47lg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"uQJWPH7gbki3x8ER4jHvaw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("ShowMyTrips"));
})(varBag.model, idService);
}
},
"ksRKnBvEoU2qO1aPLAhffQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuItem"));
})(varBag.model, idService);
}
},
"9wShKDslhEq_5ef4yH+0nw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"vsVLNYe6hkyEreRcndXYvw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"N1zhNKXVokKLJKcYIe_2HA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Content"));
})(varBag.model, idService);
}
},
"nyqZgtQfDEus7QMhUrcqLg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuItem"));
})(varBag.model, idService);
}
},
"oGbYeXxLYkie3Sf2GOMpXQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"hnFJ4eNGp0e+8vUFrTxz_Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"HZio7WbqtUmVcWIimuPccw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuItem"));
})(varBag.model, idService);
}
},
"u2KubdjEdEin+KvD0IYURA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"wBClw+oB4E2npJMGEtD7aA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"eQllwSdOf0eZSTk978X+gQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Bottom"));
})(varBag.model, idService);
}
},
"9SXaojdbIk+G5xriF+mstA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuItem"));
})(varBag.model, idService);
}
},
"xtaNjAhI7kOz+oxXZqkfRg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"nUwuoScPnES08jQrzwuqIA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"xJUIkDxVwU200ry++ZzwAw": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuItem"));
})(varBag.model, idService);
}
},
"h1SSutl1ckGaZVhWrNVx9A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"A6X_vluxfUS4Dd5UJp4aog": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"hf_ES9YaLEa2dPtOwVPSjA": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuItem"));
})(varBag.model, idService);
}
},
"mefOVWPrYUem2j3tx5cf+A": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"FqBHECWJSUaGWdXicK8M6Q": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
},
"KuulgPI3YUaP78iTHySTiQ": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("MenuItem"));
})(varBag.model, idService);
}
},
"DN5h33_cR0GmwKa8k9EKJg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Label"));
})(varBag.model, idService);
}
},
"fsjG8dpL+UuCbDp9UvWKlg": {
getter: function (varBag, idService) {
return (function (model, idService) {
return model.widgets.get(idService.getId("Right"));
})(varBag.model, idService);
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
