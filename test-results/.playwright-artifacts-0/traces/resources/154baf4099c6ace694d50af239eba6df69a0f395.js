define("ShopperPortalEU_API.model$SPCountry_WrapperRec", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_API.model"], function (exports, OutSystems, ShopperPortalEU_APIModel) {
var OS = OutSystems.Internal;
var SPCountry_WrapperRec = (function (_super) {
__extends(SPCountry_WrapperRec, _super);
function SPCountry_WrapperRec(defaults) {
_super.apply(this, arguments);
}
SPCountry_WrapperRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Code2", "code2Attr", "Code2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Code3", "code3Attr", "Code3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Code3Digits", "code3DigitsAttr", "Code3Digits", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CodePassport", "codePassportAttr", "CodePassport", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DefaultLanguage", "defaultLanguageAttr", "DefaultLanguage", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CultureCode", "cultureCodeAttr", "CultureCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsShopperPortalEurope", "isShopperPortalEuropeAttr", "IsShopperPortalEurope", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SPCountry_WrapperRec.init();
return SPCountry_WrapperRec;
})(OS.DataTypes.GenericRecord);
ShopperPortalEU_APIModel.SPCountry_WrapperRec = SPCountry_WrapperRec;

});
define("ShopperPortalEU_API.model$RefundPoint_WrapperRec", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_API.model"], function (exports, OutSystems, ShopperPortalEU_APIModel) {
var OS = OutSystems.Internal;
var RefundPoint_WrapperRec = (function (_super) {
__extends(RefundPoint_WrapperRec, _super);
function RefundPoint_WrapperRec(defaults) {
_super.apply(this, arguments);
}
RefundPoint_WrapperRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FullAddress", "fullAddressAttr", "FullAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("City", "cityAttr", "City", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RefundPoint_WrapperRec.init();
return RefundPoint_WrapperRec;
})(OS.DataTypes.GenericRecord);
ShopperPortalEU_APIModel.RefundPoint_WrapperRec = RefundPoint_WrapperRec;

});
define("ShopperPortalEU_API.model$CityInfo_WrapperRec", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_API.model"], function (exports, OutSystems, ShopperPortalEU_APIModel) {
var OS = OutSystems.Internal;
var CityInfo_WrapperRec = (function (_super) {
__extends(CityInfo_WrapperRec, _super);
function CityInfo_WrapperRec(defaults) {
_super.apply(this, arguments);
}
CityInfo_WrapperRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CityInfo_WrapperRec.init();
return CityInfo_WrapperRec;
})(OS.DataTypes.GenericRecord);
ShopperPortalEU_APIModel.CityInfo_WrapperRec = CityInfo_WrapperRec;

});
define("ShopperPortalEU_API.model$CustomOfficeInfo_WrapperRec", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_API.model"], function (exports, OutSystems, ShopperPortalEU_APIModel) {
var OS = OutSystems.Internal;
var CustomOfficeInfo_WrapperRec = (function (_super) {
__extends(CustomOfficeInfo_WrapperRec, _super);
function CustomOfficeInfo_WrapperRec(defaults) {
_super.apply(this, arguments);
}
CustomOfficeInfo_WrapperRec.attributesToDeclare = function () {
return [
this.attr("CityName", "cityNameAttr", "CityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CategoryName", "categoryNameAttr", "CategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocationName", "locationNameAttr", "LocationName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Directions", "directionsAttr", "Directions", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OperationHours", "operationHoursAttr", "OperationHours", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CustomOfficeInfo_WrapperRec.init();
return CustomOfficeInfo_WrapperRec;
})(OS.DataTypes.GenericRecord);
ShopperPortalEU_APIModel.CustomOfficeInfo_WrapperRec = CustomOfficeInfo_WrapperRec;

});
define("ShopperPortalEU_API.model$RefundDetails_WrapperRec", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_API.model"], function (exports, OutSystems, ShopperPortalEU_APIModel) {
var OS = OutSystems.Internal;
var RefundDetails_WrapperRec = (function (_super) {
__extends(RefundDetails_WrapperRec, _super);
function RefundDetails_WrapperRec(defaults) {
_super.apply(this, arguments);
}
RefundDetails_WrapperRec.attributesToDeclare = function () {
return [
this.attr("PaymentType", "paymentTypeAttr", "PaymentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PaymentAccount", "paymentAccountAttr", "PaymentAccount", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PaidOn", "paidOnAttr", "PaidOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("AcquirerRef", "acquirerRefAttr", "AcquirerRef", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Location", "locationAttr", "Location", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RefundDetails_WrapperRec.init();
return RefundDetails_WrapperRec;
})(OS.DataTypes.GenericRecord);
ShopperPortalEU_APIModel.RefundDetails_WrapperRec = RefundDetails_WrapperRec;

});
define("ShopperPortalEU_API.model$Location_WrapperRec", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_API.model"], function (exports, OutSystems, ShopperPortalEU_APIModel) {
var OS = OutSystems.Internal;
var Location_WrapperRec = (function (_super) {
__extends(Location_WrapperRec, _super);
function Location_WrapperRec(defaults) {
_super.apply(this, arguments);
}
Location_WrapperRec.attributesToDeclare = function () {
return [
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("City", "cityAttr", "City", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Location_WrapperRec.init();
return Location_WrapperRec;
})(OS.DataTypes.GenericRecord);
ShopperPortalEU_APIModel.Location_WrapperRec = Location_WrapperRec;

});
define("ShopperPortalEU_API.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ShopperPortalEU_APIModel = exports;
});
