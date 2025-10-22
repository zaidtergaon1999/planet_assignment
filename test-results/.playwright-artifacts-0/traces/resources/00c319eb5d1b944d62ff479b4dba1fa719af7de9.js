define("ShopperPortalEU_Shopper_IS.controller$CreateCard", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "ShopperPortalEU_Shopper_IS.model$PostCardRec", "ShopperPortalEU_Shopper_IS.controller$Post_Card", "ShopperPortalEU_Shopper_IS.controller$ServerAction.GetCreateCardSiteProperties", "ShopperPortalEU_Shopper_IS.model$GetDatatransTokenRec", "ShopperPortalEU_Shopper_IS.controller$Get_DatatransToken", "ShopperPortalEU_Shopper_IS.model$PostCardBodyRec", "ShopperPortalEU_Shopper_IS.model$DatatransTokenFallbackRec", "ShopperPortalEU_Shopper_IS.model$CreateCardRec"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.createCard$Action = function (cardDataIn, bypassTokenIn, datatransTokenIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.CreateCard$vars"))());
vars.value.cardDataInLocal = cardDataIn.clone();
vars.value.bypassTokenInLocal = bypassTokenIn;
vars.value.datatransTokenInLocal = datatransTokenIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getCreateCardSitePropertiesVar = new OS.DataTypes.VariableHolder();
var post_CardVar = new OS.DataTypes.VariableHolder();
var get_DatatransTokenVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.CreateCard$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getCreateCardSitePropertiesVar = getCreateCardSitePropertiesVar;
varBag.post_CardVar = post_CardVar;
varBag.get_DatatransTokenVar = get_DatatransTokenVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:GL3GkRVCVEG7TqNuzTqKHA:/ClientActionFlows.GL3GkRVCVEG7TqNuzTqKHA:K1BpnciZSfLQeuyVxCLAIQ", "ShopperPortalEU_Shopper_IS", "CreateCard", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:mMLieJ0ZxUeGTkcK5_zg0A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:y376MFF0nUKzLUI8rTvvgA", callContext.id);
// Execute Action: GetCreateCardSiteProperties
return controller.getCreateCardSiteProperties$ServerAction(callContext).then(function (value) {
getCreateCardSitePropertiesVar.value = value;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:3nuUHcmqWk6H09aYCtIOJA", callContext.id) && !(vars.value.bypassTokenInLocal))) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:cwAQ3LNLaUSWgIKLUWh96w", callContext.id);
// Execute Action: Get_DatatransToken
return ShopperPortalEU_Shopper_ISController.default.get_DatatransToken$Action(vars.value.cardDataInLocal.transactionIdAttr, getCreateCardSitePropertiesVar.value.tokenServiceAPIAudienceOut, getCreateCardSitePropertiesVar.value.tokenServiceAPIEndpointOut, callContext).then(function (value) {
get_DatatransTokenVar.value = value;
}).then(function () {
// DatatransSucess
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:bQeXW7I7lkGmupD0W+oK+A", callContext.id) && get_DatatransTokenVar.value.isSuccessOut)) {
// Set token info
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:zwS3Ihues0+1PhW6V1engA", callContext.id);
// Token.Alias = Get_DatatransToken.CardData.Alias
vars.value.tokenVar.aliasAttr = get_DatatransTokenVar.value.cardDataOut.aliasAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:zwS3Ihues0+1PhW6V1engA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// Token.MaskedCard = Get_DatatransToken.CardData.MaskedCard
vars.value.tokenVar.maskedCardAttr = get_DatatransTokenVar.value.cardDataOut.maskedCardAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:zwS3Ihues0+1PhW6V1engA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// Token.PaymentMethod = Get_DatatransToken.CardData.PaymentMethod
vars.value.tokenVar.paymentMethodAttr = get_DatatransTokenVar.value.cardDataOut.paymentMethodAttr;
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:aDWOwxA2K0Gn4xvAuok4mA", callContext.id);
// Raise Error: DatatransError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.DatatransError", ("Error creating card: " + get_DatatransTokenVar.value.errorMessageOut));
}

});
} else {
// Token
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:WqOlX6L2MUqGc+HCDadKJQ", callContext.id);
// Token = DatatransToken
vars.value.tokenVar = vars.value.datatransTokenInLocal;
}

});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:+7R2CjN7cEulStkSr24W3w", callContext.id);
// Execute Action: Post_Card
return ShopperPortalEU_Shopper_ISController.default.post_Card$Action(function () {
var rec = new ShopperPortalEU_Shopper_ISModel.PostCardRec();
rec.shopperGuidAttr = vars.value.cardDataInLocal.shopperGuidAttr;
rec.bodyAttr = function () {
var rec = new ShopperPortalEU_Shopper_ISModel.PostCardBodyRec();
rec.maskedCardNumberAttr = vars.value.tokenVar.maskedCardAttr;
rec.expiryDateAttr = vars.value.cardDataInLocal.cardDataAttr.expiryDateAttr;
rec.isDefaultAttr = vars.value.cardDataInLocal.cardDataAttr.isDefaultAttr;
rec.paymentMethodAttr = vars.value.tokenVar.paymentMethodAttr;
rec.tokenValueAttr = vars.value.tokenVar.aliasAttr;
rec.tokenProviderAttr = "Datatrans";
rec.cardHolderNameAttr = vars.value.cardDataInLocal.cardDataAttr.cardHolderNameAttr;
return rec;
}();
return rec;
}(), getCreateCardSitePropertiesVar.value.shopperServiceAPIAudienceOut, getCreateCardSitePropertiesVar.value.shopperServiceAPIEndpointOut, callContext).then(function (value) {
post_CardVar.value = value;
});
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:hD0uW9ODMk2mEZ+OubPmaA", callContext.id) && post_CardVar.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:AgLY03hBakyX4oVCK3K+rA", callContext.id);
// IsSuccess = True
outVars.value.isSuccessOut = true;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:KRVaVoTczkGeGAoikoMWQw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:wTom0pS1CEiZ_Hj65exj6g", callContext.id);
// DatatransTokenFallback = Token
outVars.value.datatransTokenFallbackOut = vars.value.tokenVar;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:wTom0pS1CEiZ_Hj65exj6g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:SrjQHVZ0tUKR8Lcuj6YMYA", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", ((((OS.BuiltinFunctions.index(post_CardVar.value.errorMessageOut, "ligib", 0, false, false)) !== (-1))) ? ("Card not supported. Please try another one.") : (((((OS.BuiltinFunctions.index(post_CardVar.value.errorMessageOut, "xpiry", 0, false, false)) !== (-1))) ? ("Enter a valid date of expiry") : ("Error saving card")))));
}

});
}).catch(function (ex) {
OS.Logger.trace("CreateCard.CreateCard", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:vYjsodK2ykW3qUxB6mBPlA", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:1PGEkCbqGEyos2n8ZWsHWQ", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:1PGEkCbqGEyos2n8ZWsHWQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorMessageOut = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:1PGEkCbqGEyos2n8ZWsHWQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// IsGenericError = If
outVars.value.isGenericErrorOut = (((outVars.value.errorMessageOut === "Error creating card.")) ? (true) : (false));
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:RGUudjiM1E2F_4HA_rbbkw", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:GL3GkRVCVEG7TqNuzTqKHA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:GL3GkRVCVEG7TqNuzTqKHA", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.CreateCard$vars", [{
name: "CardData",
attrName: "cardDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.CreateCardRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.CreateCardRec
}, {
name: "BypassToken",
attrName: "bypassTokenInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "DatatransToken",
attrName: "datatransTokenInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.DatatransTokenFallbackRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.DatatransTokenFallbackRec
}, {
name: "Token",
attrName: "tokenVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.DatatransTokenFallbackRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.DatatransTokenFallbackRec
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.CreateCard$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsGenericError",
attrName: "isGenericErrorOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "DatatransTokenFallback",
attrName: "datatransTokenFallbackOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.DatatransTokenFallbackRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.DatatransTokenFallbackRec
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.createCard$Action = function (cardDataIn, bypassTokenIn, datatransTokenIn) {
cardDataIn = (cardDataIn === undefined) ? new ShopperPortalEU_Shopper_ISModel.CreateCardRec() : cardDataIn;
bypassTokenIn = (bypassTokenIn === undefined) ? false : bypassTokenIn;
datatransTokenIn = (datatransTokenIn === undefined) ? new ShopperPortalEU_Shopper_ISModel.DatatransTokenFallbackRec() : datatransTokenIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.createCard$Action.bind(controller, cardDataIn, OS.DataConversion.JSNodeParamConverter.from(bypassTokenIn, OS.DataTypes.DataTypes.Boolean), datatransTokenIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
IsGenericError: OS.DataConversion.JSNodeParamConverter.to(actionResults.isGenericErrorOut, OS.DataTypes.DataTypes.Boolean),
DatatransTokenFallback: actionResults.datatransTokenFallbackOut
};
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$CreateTravelDocument", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "ShopperPortalEU_Shopper_IS.controller$ServerAction.GetShopperSiteProperties", "ShopperPortalEU_Shopper_IS.controller$Post_TravelDocuments"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.createTravelDocument$Action = function (shopperGuidIn, numberIn, issuedByIn, expirationDateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.CreateTravelDocument$vars"))());
vars.value.shopperGuidInLocal = shopperGuidIn;
vars.value.numberInLocal = numberIn;
vars.value.issuedByInLocal = issuedByIn;
vars.value.expirationDateInLocal = expirationDateIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getShopperSitePropertiesVar = new OS.DataTypes.VariableHolder();
var post_TravelDocumentsVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.CreateTravelDocument$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getShopperSitePropertiesVar = getShopperSitePropertiesVar;
varBag.post_TravelDocumentsVar = post_TravelDocumentsVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:psMGgjrk5EaHhKTQQE7jQQ:/ClientActionFlows.psMGgjrk5EaHhKTQQE7jQQ:09AVFk1pfvOXwVdj_xlg_Q", "ShopperPortalEU_Shopper_IS", "CreateTravelDocument", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:ivmmGb0emUKYuHep+XStAA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:UM7m36zb002jwaqntX_ZfQ", callContext.id);
// Execute Action: GetShopperSiteProperties
return controller.getShopperSiteProperties$ServerAction(callContext).then(function (value) {
getShopperSitePropertiesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:y1yx4YGJ0Ua7t9R4GY24sw", callContext.id);
// Execute Action: Post_TravelDocuments
return ShopperPortalEU_Shopper_ISController.default.post_TravelDocuments$Action(vars.value.shopperGuidInLocal, getShopperSitePropertiesVar.value.shopperServiceAPIAudienceOut, getShopperSitePropertiesVar.value.shopperServiceAPIEndpointOut, OS.BuiltinFunctions.trim(vars.value.numberInLocal), vars.value.issuedByInLocal, ((!(vars.value.expirationDateInLocal.equals(OS.BuiltinFunctions.nullDate()))) ? (OS.BuiltinFunctions.formatDateTime(vars.value.expirationDateInLocal, "yyyy-MM-dd")) : ("")), callContext).then(function (value) {
post_TravelDocumentsVar.value = value;
});
}).then(function () {
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:fjsCdZbkG0iBzQeZsYjmPg", callContext.id);
// IsSuccess = Post_TravelDocuments.IsSuccess
outVars.value.isSuccessOut = post_TravelDocumentsVar.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:fjsCdZbkG0iBzQeZsYjmPg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = Post_TravelDocuments.ErrorMessage
outVars.value.errorMessageOut = post_TravelDocumentsVar.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:fjsCdZbkG0iBzQeZsYjmPg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorCode = Post_TravelDocuments.ErrorCode
outVars.value.errorCodeOut = post_TravelDocumentsVar.value.errorCodeOut;
}).then(function () {
// Success
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:0PbwLL17JEi_d6w_Ohi+IA", callContext.id) && outVars.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:BO4BPq0q2E2+LGGL2Ofkig", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:+0lTSVzTQE6hHZOJpwJLYQ", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", outVars.value.errorMessageOut);
}

});
}).catch(function (ex) {
OS.Logger.trace("CreateTravelDocument.CreateTravelDocument", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:kSmcZKkbrUOGt2D9GG6jPQ", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:djKw6JVct02yupzQ4rK0Qw", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:djKw6JVct02yupzQ4rK0Qw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorMessageOut = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:rL1CWEDZQkWNhgydRqvUfw", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:psMGgjrk5EaHhKTQQE7jQQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:psMGgjrk5EaHhKTQQE7jQQ", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.CreateTravelDocument$vars", [{
name: "ShopperGuid",
attrName: "shopperGuidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Number",
attrName: "numberInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IssuedBy",
attrName: "issuedByInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "ExpirationDate",
attrName: "expirationDateInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.CreateTravelDocument$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.createTravelDocument$Action = function (shopperGuidIn, numberIn, issuedByIn, expirationDateIn) {
shopperGuidIn = (shopperGuidIn === undefined) ? "" : shopperGuidIn;
numberIn = (numberIn === undefined) ? "" : numberIn;
issuedByIn = (issuedByIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : issuedByIn;
expirationDateIn = (expirationDateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : expirationDateIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.createTravelDocument$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shopperGuidIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(numberIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(issuedByIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(expirationDateIn, OS.DataTypes.DataTypes.Date)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$Delete_Card", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "Auth_Europe.controller", "ShopperPortalEU_Shopper_IS.controller$Delete_Card.DeleteCardJS", "Auth_Europe.controller$GetAccessToken", "ShopperPortalEU_Shopper_IS.referencesHealth", "ShopperPortalEU_Shopper_IS.referencesHealth$Auth_Europe", "ShopperPortalEU_Shopper_IS.model$DeleteCardBodyRec", "ShopperPortalEU_Shopper_IS.model$DeleteCardRec"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController, Auth_EuropeController, ShopperPortalEU_Shopper_IS_controller_Delete_Card_DeleteCardJS) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.delete_Card$Action = function (cardDataIn, audienceIn, endpointIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Delete_Card$vars"))());
vars.value.cardDataInLocal = cardDataIn.clone();
vars.value.audienceInLocal = audienceIn;
vars.value.endpointInLocal = endpointIn;
var getAccessTokenVar = new OS.DataTypes.VariableHolder();
var deleteCardJSResult = new OS.DataTypes.VariableHolder();
var jSONSerializeRequestBodyVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Delete_Card$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getAccessTokenVar = getAccessTokenVar;
varBag.deleteCardJSResult = deleteCardJSResult;
varBag.jSONSerializeRequestBodyVar = jSONSerializeRequestBodyVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:gWhJUlSeq0GSPSYZJG5xtA:/ClientActionFlows.gWhJUlSeq0GSPSYZJG5xtA:mbEQ4qYgFezz4AyHgfA_nQ", "ShopperPortalEU_Shopper_IS", "Delete_Card", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:m8a+J2bENk2pcs0PJsE6gw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:KWJ+orw+fkys6XhOvnsIZA", callContext.id);
// Execute Action: GetAccessToken
return Auth_EuropeController.default.getAccessToken$Action(vars.value.audienceInLocal, callContext).then(function (value) {
getAccessTokenVar.value = value;
}).then(function () {
// HasToken
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Pp8gSGPPj0WVNZPAJiW8ug", callContext.id) && ((getAccessTokenVar.value.accessTokenOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Ro5eYuYoS0KWw0rz9TM6vQ", callContext.id);
// JSON Serialize: JSONSerializeRequestBody
jSONSerializeRequestBodyVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.cardDataInLocal.deleteCardBodyAttr, false, false);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:oddbWkYCRUezR85MUuzOdA", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_Delete_Card_DeleteCardJS, "DeleteCard", "Delete_Card", {
body: OS.DataConversion.JSNodeParamConverter.to(jSONSerializeRequestBodyVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
ShopperGuid: OS.DataConversion.JSNodeParamConverter.to(vars.value.cardDataInLocal.shopperGuidAttr, OS.DataTypes.DataTypes.Text),
Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
Token: OS.DataConversion.JSNodeParamConverter.to(getAccessTokenVar.value.accessTokenOut, OS.DataTypes.DataTypes.Text),
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Delete_Card$deleteCardJSResult"))();
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSuccess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
deleteCardJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:SNkIO03jZkGPhhNjDcXPqQ", callContext.id);
// IsSuccess = DeleteCard.IsSuccess
outVars.value.isSuccessOut = deleteCardJSResult.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:SNkIO03jZkGPhhNjDcXPqQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = DeleteCard.ErrorMessage
outVars.value.errorMessageOut = deleteCardJSResult.value.errorMessageOut;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:CNXllIA6fEqSErlM0ktXxg", callContext.id) && outVars.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:RyAgEK5rqk6zZyU5pGGjlQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:hC2YUDQyIEaKwc92Xp1GHw", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", "Error deleting card.");
}

});
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:hcE48NFQikqNFPVEMWg+Ig", callContext.id);
// Raise Error: TokenError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.TokenError", "Error deleting the card.");
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:gWhJUlSeq0GSPSYZJG5xtA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:gWhJUlSeq0GSPSYZJG5xtA", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Delete_Card$vars", [{
name: "CardData",
attrName: "cardDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.DeleteCardRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.DeleteCardRec
}, {
name: "Audience",
attrName: "audienceInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Endpoint",
attrName: "endpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Delete_Card$deleteCardJSResult", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Delete_Card$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.delete_Card$Action = function (cardDataIn, audienceIn, endpointIn) {
cardDataIn = (cardDataIn === undefined) ? new ShopperPortalEU_Shopper_ISModel.DeleteCardRec() : cardDataIn;
audienceIn = (audienceIn === undefined) ? "" : audienceIn;
endpointIn = (endpointIn === undefined) ? "" : endpointIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.delete_Card$Action.bind(controller, cardDataIn, OS.DataConversion.JSNodeParamConverter.from(audienceIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$Delete_Card.DeleteCardJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
fetch(`${$parameters.Endpoint}/Shoppers/${$parameters.ShopperGuid}/cards`, {
    method: 'DELETE',
    headers: {
         Authorization: 'Bearer ' + $parameters.Token,
        'Access-Control-Allow-Origin': window.location.origin,
        'Content-Type': 'application/json'
    },
     body: $parameters.body
}).then(response => {
    if (response.ok) {
        return Promise.resolve();
    } else {
        return Promise.reject({
            status:response.status,
            statusText:response.statusText
        });
    }
}).then(() => {
    $parameters.IsSuccess = true;
    $resolve();
}).catch(error => {
    $parameters.IsSuccess = false;
    $parameters.ErrorMessage = error.statusText;
    $resolve();
});
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$DeleteCreditCard", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "ShopperPortalEU_Shopper_IS.controller$ServerAction.GetCardsSiteProperties", "ShopperPortalEU_Shopper_IS.model$DeleteCardRec", "ShopperPortalEU_Shopper_IS.controller$Delete_Card"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.deleteCreditCard$Action = function (cardDataIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.DeleteCreditCard$vars"))());
vars.value.cardDataInLocal = cardDataIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getCardsSitePropertiesVar = new OS.DataTypes.VariableHolder();
var delete_CardVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.DeleteCreditCard$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getCardsSitePropertiesVar = getCardsSitePropertiesVar;
varBag.delete_CardVar = delete_CardVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:VYWL6WIXAUKW4wCR044OFw:/ClientActionFlows.VYWL6WIXAUKW4wCR044OFw:w8QsWVHb_ieWGHvQqaO+lw", "ShopperPortalEU_Shopper_IS", "DeleteCreditCard", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:4V2+o5fd3USmofMrelDkxA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:D2LyBCBqtE6z+dVNKXMx7w", callContext.id);
// Execute Action: GetCardsSiteProperties
return controller.getCardsSiteProperties$ServerAction(callContext).then(function (value) {
getCardsSitePropertiesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:yVam9H5S5E6RJxHmADO3hQ", callContext.id);
// Execute Action: Delete_Card
return ShopperPortalEU_Shopper_ISController.default.delete_Card$Action(vars.value.cardDataInLocal, getCardsSitePropertiesVar.value.shopperServiceAPIAudienceOut, getCardsSitePropertiesVar.value.shopperServiceAPIEndpointOut, callContext).then(function (value) {
delete_CardVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:UMUqrK+EZEyP+jTgHpunrg", callContext.id);
// IsSuccess = True
outVars.value.isSuccessOut = true;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:UAj0x60UgU+Mw1o8a+1uEw", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("DeleteCreditCard.DeleteCreditCard", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:5Y8sbyWXGkWJtuibR9MWyQ", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:jz3PgO9xik2YNVqMwToBzA", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:jz3PgO9xik2YNVqMwToBzA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorMessageOut = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:FcB4Aq730EydBrWGaji5kA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:VYWL6WIXAUKW4wCR044OFw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:VYWL6WIXAUKW4wCR044OFw", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.DeleteCreditCard$vars", [{
name: "CardData",
attrName: "cardDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.DeleteCardRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.DeleteCardRec
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.DeleteCreditCard$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.deleteCreditCard$Action = function (cardDataIn) {
cardDataIn = (cardDataIn === undefined) ? new ShopperPortalEU_Shopper_ISModel.DeleteCardRec() : cardDataIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.deleteCreditCard$Action.bind(controller, cardDataIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$Get_DatatransToken", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "Auth_Europe.controller", "ShopperPortalEU_Shopper_IS.controller$Get_DatatransToken.GetDatatransTokenJS", "Auth_Europe.controller$GetAccessToken", "ShopperPortalEU_Shopper_IS.referencesHealth", "ShopperPortalEU_Shopper_IS.referencesHealth$Auth_Europe", "ShopperPortalEU_Shopper_IS.model$GetDatatransTokenRec"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController, Auth_EuropeController, ShopperPortalEU_Shopper_IS_controller_Get_DatatransToken_GetDatatransTokenJS) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.get_DatatransToken$Action = function (transactionIdIn, audienceIn, endpointIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Get_DatatransToken$vars"))());
vars.value.transactionIdInLocal = transactionIdIn;
vars.value.audienceInLocal = audienceIn;
vars.value.endpointInLocal = endpointIn;
var getAccessTokenVar = new OS.DataTypes.VariableHolder();
var getDatatransTokenJSResult = new OS.DataTypes.VariableHolder();
var jSONToCardDataVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(ShopperPortalEU_Shopper_ISModel.GetDatatransTokenRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Get_DatatransToken$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getAccessTokenVar = getAccessTokenVar;
varBag.getDatatransTokenJSResult = getDatatransTokenJSResult;
varBag.jSONToCardDataVar = jSONToCardDataVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:1SDeUgYdmE6VvqhSr4LmDQ:/ClientActionFlows.1SDeUgYdmE6VvqhSr4LmDQ:nWMjc_4IgRm7k3tQPDdnGA", "ShopperPortalEU_Shopper_IS", "Get_DatatransToken", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:ad_YP4OYI0iYfBt7+xSMXQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:cXdweMgluU+A4F4_W5h2nw", callContext.id);
// Execute Action: GetAccessToken
return Auth_EuropeController.default.getAccessToken$Action(vars.value.audienceInLocal, callContext).then(function (value) {
getAccessTokenVar.value = value;
}).then(function () {
// HasToken
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:HQT_zRjlxUCCUdwcMIjYsw", callContext.id) && ((getAccessTokenVar.value.accessTokenOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:7_LcYOPdNUWgi11US45fwQ", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_Get_DatatransToken_GetDatatransTokenJS, "GetDatatransToken", "Get_DatatransToken", {
Token: OS.DataConversion.JSNodeParamConverter.to(getAccessTokenVar.value.accessTokenOut, OS.DataTypes.DataTypes.Text),
Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
TransactionId: OS.DataConversion.JSNodeParamConverter.to(vars.value.transactionIdInLocal, OS.DataTypes.DataTypes.Text),
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
CardData: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Get_DatatransToken$getDatatransTokenJSResult"))();
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSuccess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.cardDataOut = OS.DataConversion.JSNodeParamConverter.from($parameters.CardData, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
getDatatransTokenJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:5WV6KXx09ESYozk+MoU93g", callContext.id);
// IsSuccess = GetDatatransToken.IsSuccess
outVars.value.isSuccessOut = getDatatransTokenJSResult.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:5WV6KXx09ESYozk+MoU93g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = GetDatatransToken.ErrorMessage
outVars.value.errorMessageOut = getDatatransTokenJSResult.value.errorMessageOut;
}).then(function () {
// IsSuccess
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:cXa9VElhNk2MG9Uunawfgg", callContext.id) && getDatatransTokenJSResult.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:+FUdgUrV5EWvjM1CzTiI+A", callContext.id);
// JSON Deserialize: JSONToCardData
jSONToCardDataVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getDatatransTokenJSResult.value.cardDataOut, ShopperPortalEU_Shopper_ISModel.GetDatatransTokenRec, false);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:_3SoyWyfMEWNbBardKlWqQ", callContext.id);
// CardData = JSONToCardData.Data
outVars.value.cardDataOut = jSONToCardDataVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:+84o4x4GvkqMKE7FZZeD_Q", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:gdXk3yl1hUuAjr4JSMfayg", callContext.id);
// Raise Error: DatatransError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.DatatransError", getDatatransTokenJSResult.value.errorMessageOut);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:J1kDu_bt5k+lPGqWfRYi5w", callContext.id);
// Raise Error: DatatransError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.DatatransError", "Token missing");
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:1SDeUgYdmE6VvqhSr4LmDQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:1SDeUgYdmE6VvqhSr4LmDQ", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Get_DatatransToken$vars", [{
name: "TransactionId",
attrName: "transactionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Audience",
attrName: "audienceInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Endpoint",
attrName: "endpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Get_DatatransToken$getDatatransTokenJSResult", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "CardData",
attrName: "cardDataOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Get_DatatransToken$outVars", [{
name: "CardData",
attrName: "cardDataOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.GetDatatransTokenRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.GetDatatransTokenRec
}, {
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.get_DatatransToken$Action = function (transactionIdIn, audienceIn, endpointIn) {
transactionIdIn = (transactionIdIn === undefined) ? "" : transactionIdIn;
audienceIn = (audienceIn === undefined) ? "" : audienceIn;
endpointIn = (endpointIn === undefined) ? "" : endpointIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.get_DatatransToken$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(transactionIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(audienceIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
CardData: actionResults.cardDataOut,
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$Get_DatatransToken.GetDatatransTokenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
fetch(`${$parameters.Endpoint}/datatrans/${$parameters.TransactionId}/token`, {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + $parameters.Token,
        'Access-Control-Allow-Origin': window.location.origin
    }
}).then(response => {
    if(response.ok){
        return response.json();
    }else{
        return Promise.reject({
            status:response.status,
            statusText:response.statusText
        });
    }
}).then(data => {
    $parameters.CardData = JSON.stringify(data);
    $parameters.IsSuccess = true;
    $resolve(); 
}).catch(error => {
    $parameters.IsSuccess = false;
    $parameters.ErrorMessage =  error.statusText;
    $resolve();
});
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$Get_Shopper", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "Auth_Europe.controller", "ShopperPortalEU_Shopper_IS.controller$Get_Shopper.GetShopperJS", "Auth_Europe.controller$GetAccessToken", "ShopperPortalEU_Shopper_IS.referencesHealth", "ShopperPortalEU_Shopper_IS.referencesHealth$Auth_Europe", "ShopperPortalEU_Shopper_IS.model$GetShopperResponseRec"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController, Auth_EuropeController, ShopperPortalEU_Shopper_IS_controller_Get_Shopper_GetShopperJS) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.get_Shopper$Action = function (shopperGuidIn, audienceIn, endpointIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Get_Shopper$vars"))());
vars.value.shopperGuidInLocal = shopperGuidIn;
vars.value.audienceInLocal = audienceIn;
vars.value.endpointInLocal = endpointIn;
var getAccessTokenVar = new OS.DataTypes.VariableHolder();
var getShopperJSResult = new OS.DataTypes.VariableHolder();
var shopperFromJSONVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(ShopperPortalEU_Shopper_ISModel.GetShopperResponseRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Get_Shopper$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getAccessTokenVar = getAccessTokenVar;
varBag.getShopperJSResult = getShopperJSResult;
varBag.shopperFromJSONVar = shopperFromJSONVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:Ju2vMvWEeEW5tN3Fv68Ekg:/ClientActionFlows.Ju2vMvWEeEW5tN3Fv68Ekg:Ti9wH2pXHzGi0xE0ltQk7Q", "ShopperPortalEU_Shopper_IS", "Get_Shopper", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:W3WMbnkYhkGpBf9z9gIxbw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:TRTmLFSA8UyYYje5S2CCQg", callContext.id);
// Execute Action: GetAccessToken
return Auth_EuropeController.default.getAccessToken$Action(vars.value.audienceInLocal, callContext).then(function (value) {
getAccessTokenVar.value = value;
}).then(function () {
// HasToken
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:BDbIgc2nCkmw38iXUSuTeA", callContext.id) && ((getAccessTokenVar.value.accessTokenOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:BWPSAIrGp0a5Lo4C7P_0Yg", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_Get_Shopper_GetShopperJS, "GetShopper", "Get_Shopper", {
Token: OS.DataConversion.JSNodeParamConverter.to(getAccessTokenVar.value.accessTokenOut, OS.DataTypes.DataTypes.Text),
Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
ShopperGuid: OS.DataConversion.JSNodeParamConverter.to(vars.value.shopperGuidInLocal, OS.DataTypes.DataTypes.Text),
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Shopper: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Get_Shopper$getShopperJSResult"))();
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSuccess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.shopperOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Shopper, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
getShopperJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:XhVOBX4kX0aJ2gmLtm4TYg", callContext.id);
// IsSuccess = GetShopper.IsSuccess
outVars.value.isSuccessOut = getShopperJSResult.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:XhVOBX4kX0aJ2gmLtm4TYg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = GetShopper.ErrorMessage
outVars.value.errorMessageOut = getShopperJSResult.value.errorMessageOut;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:9r+1Z+t030eJpzo4pnDkvw", callContext.id) && outVars.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:+eSwt0hDe0io5cRSQaqHfg", callContext.id);
// JSON Deserialize: ShopperFromJSON
shopperFromJSONVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getShopperJSResult.value.shopperOut, ShopperPortalEU_Shopper_ISModel.GetShopperResponseRec, false);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:P7eai7pFYUaJCXWcEwJlFQ", callContext.id);
// Shopper = ShopperFromJSON.Data
outVars.value.shopperOut = shopperFromJSONVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:uHN9JPvoz0ueUT09e04Z2w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:IwDIp5CPM0q7j7KXDO5wSQ", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", "Error getting shopper.");
}

});
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:uYY2pDHBvU61fuhGOqpXWg", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", "Error getting shopper.");
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:Ju2vMvWEeEW5tN3Fv68Ekg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:Ju2vMvWEeEW5tN3Fv68Ekg", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Get_Shopper$vars", [{
name: "ShopperGuid",
attrName: "shopperGuidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Audience",
attrName: "audienceInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Endpoint",
attrName: "endpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Get_Shopper$getShopperJSResult", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Shopper",
attrName: "shopperOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Get_Shopper$outVars", [{
name: "Shopper",
attrName: "shopperOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.GetShopperResponseRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.GetShopperResponseRec
}, {
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.get_Shopper$Action = function (shopperGuidIn, audienceIn, endpointIn) {
shopperGuidIn = (shopperGuidIn === undefined) ? "" : shopperGuidIn;
audienceIn = (audienceIn === undefined) ? "" : audienceIn;
endpointIn = (endpointIn === undefined) ? "" : endpointIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.get_Shopper$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shopperGuidIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(audienceIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Shopper: actionResults.shopperOut,
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$Get_Shopper.GetShopperJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
fetch(`${$parameters.Endpoint}/Shoppers/${$parameters.ShopperGuid}`, {
    method: 'GET',
    headers: {
         Authorization: 'Bearer ' + $parameters.Token,
        'Access-Control-Allow-Origin': window.location.origin,
        'Content-type': 'application/json; charset=UTF-8'
    }
}).then(response => {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject({
            status:response.status,
            statusText:response.statusText
        });
    }
}).then((data) => {
    $parameters.IsSuccess = true;
    $parameters.Shopper = JSON.stringify(data);
    $resolve();
}).catch(error => {
    $parameters.IsSuccess = false;
    $parameters.ErrorMessage = error.statusText ? error.statusText : error.message ? error.message:'';
    $resolve();
});
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$GetCardDetailsByTransactionId", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "ShopperPortalEU_Shopper_IS.model$GetDatatransTokenRec", "ShopperPortalEU_Shopper_IS.controller$Get_DatatransToken", "ShopperPortalEU_Shopper_IS.controller$ServerAction.GetCreateCardSiteProperties", "ShopperPortalEU_Shopper_IS.model$DatatransTokenFallbackRec"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.getCardDetailsByTransactionId$Action = function (transactionIdIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.GetCardDetailsByTransactionId$vars"))());
vars.value.transactionIdInLocal = transactionIdIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getCreateCardSitePropertiesVar = new OS.DataTypes.VariableHolder();
var get_DatatransTokenVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.GetCardDetailsByTransactionId$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getCreateCardSitePropertiesVar = getCreateCardSitePropertiesVar;
varBag.get_DatatransTokenVar = get_DatatransTokenVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:_WgBa7SU_UG6K1GjKp2Kww:/ClientActionFlows._WgBa7SU_UG6K1GjKp2Kww:PcaIX7ZxwRQ4scZXOf4WVQ", "ShopperPortalEU_Shopper_IS", "GetCardDetailsByTransactionId", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:SFz3iDScZEyhEsc25RhJpw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Qk6CunFhQESlGG+5TuDJ3Q", callContext.id);
// Execute Action: GetCreateCardSiteProperties
return controller.getCreateCardSiteProperties$ServerAction(callContext).then(function (value) {
getCreateCardSitePropertiesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:K6seqxLRskaMPtr_CeOBRA", callContext.id);
// Execute Action: Get_DatatransToken
return ShopperPortalEU_Shopper_ISController.default.get_DatatransToken$Action(vars.value.transactionIdInLocal, getCreateCardSitePropertiesVar.value.tokenServiceAPIAudienceOut, getCreateCardSitePropertiesVar.value.tokenServiceAPIEndpointOut, callContext).then(function (value) {
get_DatatransTokenVar.value = value;
});
}).then(function () {
// DatatransSucess
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:060+5qF24UGOiostColWXg", callContext.id) && get_DatatransTokenVar.value.isSuccessOut)) {
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:D0hDvEFzjUOTZYt4M6j9_Q", callContext.id);
// DatatransTokenFallback.Alias = Get_DatatransToken.CardData.Alias
outVars.value.datatransTokenFallbackOut.aliasAttr = get_DatatransTokenVar.value.cardDataOut.aliasAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:D0hDvEFzjUOTZYt4M6j9_Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// DatatransTokenFallback.MaskedCard = Get_DatatransToken.CardData.MaskedCard
outVars.value.datatransTokenFallbackOut.maskedCardAttr = get_DatatransTokenVar.value.cardDataOut.maskedCardAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:D0hDvEFzjUOTZYt4M6j9_Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// DatatransTokenFallback.PaymentMethod = Get_DatatransToken.CardData.PaymentMethod
outVars.value.datatransTokenFallbackOut.paymentMethodAttr = get_DatatransTokenVar.value.cardDataOut.paymentMethodAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Ahu4iTXC2UKHuYAzDT1nTQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:j0gxxisVOkGH1Dfg_46yrw", callContext.id);
// Raise Error: DatatransError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.DatatransError", "Error getting card details by TransactionId");
}

});
}).catch(function (ex) {
OS.Logger.trace("GetCardDetailsByTransactionId.GetCardDetailsByTransactionId", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:G9btmP+QBUK6Blm8+K12wg", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:69NRajtC6UWWDazU3BsqKw", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:69NRajtC6UWWDazU3BsqKw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorMessageOut = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:DnS+0BI9MEWLwjjOilheZQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:_WgBa7SU_UG6K1GjKp2Kww", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:_WgBa7SU_UG6K1GjKp2Kww", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.GetCardDetailsByTransactionId$vars", [{
name: "TransactionId",
attrName: "transactionIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.GetCardDetailsByTransactionId$outVars", [{
name: "DatatransTokenFallback",
attrName: "datatransTokenFallbackOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.DatatransTokenFallbackRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.DatatransTokenFallbackRec
}, {
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.getCardDetailsByTransactionId$Action = function (transactionIdIn) {
transactionIdIn = (transactionIdIn === undefined) ? "" : transactionIdIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.getCardDetailsByTransactionId$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(transactionIdIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
DatatransTokenFallback: actionResults.datatransTokenFallbackOut,
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$GetCards", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "Auth_Europe.controller", "ShopperPortalEU_Shopper_IS.controller$GetCards.GetCardsJS", "Auth_Europe.controller$GetAccessToken", "ShopperPortalEU_Shopper_IS.referencesHealth", "ShopperPortalEU_Shopper_IS.referencesHealth$Auth_Europe", "ShopperPortalEU_Shopper_IS.controller$ServerAction.GetCardsSiteProperties", "ShopperPortalEU_Shopper_IS.model$GetCardsResponseList"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController, Auth_EuropeController, ShopperPortalEU_Shopper_IS_controller_GetCards_GetCardsJS) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.getCards$Action = function (shopperGuidIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.GetCards$vars"))());
vars.value.shopperGuidInLocal = shopperGuidIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getCardsSitePropertiesVar = new OS.DataTypes.VariableHolder();
var getAccessTokenVar = new OS.DataTypes.VariableHolder();
var getCardsJSResult = new OS.DataTypes.VariableHolder();
var jSONToCardsVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(ShopperPortalEU_Shopper_ISModel.GetCardsResponseList))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.GetCards$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getCardsSitePropertiesVar = getCardsSitePropertiesVar;
varBag.getAccessTokenVar = getAccessTokenVar;
varBag.getCardsJSResult = getCardsJSResult;
varBag.jSONToCardsVar = jSONToCardsVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:0J5lA8y9EEqx63lOekLWpA:/ClientActionFlows.0J5lA8y9EEqx63lOekLWpA:7Rx7y97g80zOfxWaqBFj1w", "ShopperPortalEU_Shopper_IS", "GetCards", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:8NzWE1POokaDAmYvsyo5Ww", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:VTKEX9kvA0SzD5sGf5Z37Q", callContext.id);
// Execute Action: GetCardsSiteProperties
return controller.getCardsSiteProperties$ServerAction(callContext).then(function (value) {
getCardsSitePropertiesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:RCTKLSmIaEyyhloOekVZ7A", callContext.id);
// Execute Action: GetAccessToken
return Auth_EuropeController.default.getAccessToken$Action(getCardsSitePropertiesVar.value.shopperServiceAPIAudienceOut, callContext).then(function (value) {
getAccessTokenVar.value = value;
});
}).then(function () {
// HasToken
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:fKXNdMa8NEWhwh2lVKa4DA", callContext.id) && ((getAccessTokenVar.value.accessTokenOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:9x4A9LqTkUmJJhyBqHHweQ", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_GetCards_GetCardsJS, "GetCards", "GetCards", {
ShopperGuid: OS.DataConversion.JSNodeParamConverter.to(vars.value.shopperGuidInLocal, OS.DataTypes.DataTypes.Text),
Endpoint: OS.DataConversion.JSNodeParamConverter.to(getCardsSitePropertiesVar.value.shopperServiceAPIEndpointOut, OS.DataTypes.DataTypes.Text),
Token: OS.DataConversion.JSNodeParamConverter.to(getAccessTokenVar.value.accessTokenOut, OS.DataTypes.DataTypes.Text),
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
Response: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.GetCards$getCardsJSResult"))();
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSuccess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.responseOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Response, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
getCardsJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:UeyPUaTvWkqpf7ls3os_2g", callContext.id);
// IsSuccess = GetCards.IsSuccess
outVars.value.isSuccessOut = getCardsJSResult.value.isSuccessOut;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:14ZKieJC00i1DBfM+ASKmw", callContext.id) && outVars.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:rWMf60OX7UKPp8GKZpW5pQ", callContext.id);
// JSON Deserialize: JSONToCards
jSONToCardsVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(getCardsJSResult.value.responseOut, ShopperPortalEU_Shopper_ISModel.GetCardsResponseList, false);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:pcdSQB1BCkaUEn_8GLE05Q", callContext.id);
// Execute Action: ListSort
OS.SystemActions.listSort(jSONToCardsVar.value.dataOut, function (p) {
return p.expiryDateFormatAttr;
}, false, callContext);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:olXZn8JUykGB6bQSvm9+NA", callContext.id);
// Cards = JSONToCards.Data
outVars.value.cardsOut = jSONToCardsVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:RiYQnGKT_kqaBOOoAbBhRw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:ZZIr5XSifEOvDzMyA1+IYw", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", ("Error getting cards: " + getCardsJSResult.value.errorMessageOut));
}

});
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:YwoLE6b_MkCjrpb0pqEwLA", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", "Error getting cards.");
}

});
});
}).catch(function (ex) {
OS.Logger.trace("GetCards.GetCards", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:TboIbGZcI0uuT2pVC+kTrw", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:OOcxkhwX3Eyme_eYgSihDg", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:OOcxkhwX3Eyme_eYgSihDg", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorMessageOut = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:u6vSA0yDck+EgjeuuRhKlQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:0J5lA8y9EEqx63lOekLWpA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:0J5lA8y9EEqx63lOekLWpA", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.GetCards$vars", [{
name: "ShopperGuid",
attrName: "shopperGuidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.GetCards$getCardsJSResult", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Response",
attrName: "responseOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.GetCards$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Cards",
attrName: "cardsOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.RecordList,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.GetCardsResponseList();
},
complexType: ShopperPortalEU_Shopper_ISModel.GetCardsResponseList
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.getCards$Action = function (shopperGuidIn) {
shopperGuidIn = (shopperGuidIn === undefined) ? "" : shopperGuidIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.getCards$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shopperGuidIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
Cards: actionResults.cardsOut
};
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$GetCards.GetCardsJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
fetch(`${$parameters.Endpoint}/Shoppers/${$parameters.ShopperGuid}/cards`, {
    method: 'GET',
    headers: {
        Authorization: 'Bearer ' + $parameters.Token,
        'Access-Control-Allow-Origin': window.location.origin,
    }
}).then(response => {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject({
            status: response.status,
            statusText: result.statusText
        });
    }
}).then(data => {
    $parameters.IsSuccess = true;
    data.forEach(x => x.expiryDateFormat = new Date(x.expiryDate.slice(0, 2) + '/01/' + x.expiryDate.slice(2, 4)));
    $parameters.Response = JSON.stringify(Object.assign(data));
    $resolve();
}).catch(error => {
    $parameters.IsSuccess = false;
    $parameters.ErrorMessage = error.statusText ? error.statusText : error.message ? error.message : '';
    $resolve();
});
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$GetShopper", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "ShopperPortalEU_Shopper_IS.model$GetShopperResponseRec", "ShopperPortalEU_Shopper_IS.controller$Get_Shopper", "ShopperPortalEU_Shopper_IS.controller$ServerAction.GetShopperSiteProperties"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.getShopper$Action = function (shopperGuidIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.GetShopper$vars"))());
vars.value.shopperGuidInLocal = shopperGuidIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getShopperSitePropertiesVar = new OS.DataTypes.VariableHolder();
var get_ShopperVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.GetShopper$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getShopperSitePropertiesVar = getShopperSitePropertiesVar;
varBag.get_ShopperVar = get_ShopperVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:EK4uRG_LwUW2cf+em+gzjQ:/ClientActionFlows.EK4uRG_LwUW2cf+em+gzjQ:IfwqpG9xRBIcLDTPPJXzlA", "ShopperPortalEU_Shopper_IS", "GetShopper", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:B9h9sIFIfEGluBNe7NFqAQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:uyHhPpRzr0OFLVVjUbS1pw", callContext.id);
// Execute Action: GetShopperSiteProperties
return controller.getShopperSiteProperties$ServerAction(callContext).then(function (value) {
getShopperSitePropertiesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:oJDeFpZQf0SD8c2mfEERWw", callContext.id);
// Execute Action: Get_Shopper
return ShopperPortalEU_Shopper_ISController.default.get_Shopper$Action(vars.value.shopperGuidInLocal, getShopperSitePropertiesVar.value.shopperServiceAPIAudienceOut, getShopperSitePropertiesVar.value.shopperServiceAPIEndpointOut, callContext).then(function (value) {
get_ShopperVar.value = value;
});
}).then(function () {
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Ffvf54mTH0aCpOyzDExj5Q", callContext.id);
// Shopper = Get_Shopper.Shopper
outVars.value.shopperOut = get_ShopperVar.value.shopperOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Ffvf54mTH0aCpOyzDExj5Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// IsSuccess = Get_Shopper.IsSuccess
outVars.value.isSuccessOut = get_ShopperVar.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Ffvf54mTH0aCpOyzDExj5Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorMessage = Get_Shopper.ErrorMessage
outVars.value.errorMessageOut = get_ShopperVar.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:cPALwbZnFkSOF3_R7n6Yog", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("GetShopper.GetShopper", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:x9FVZO5S4kyoSZ_vDRg9yg", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:T3bClqg8ukKapp4r6pAw6Q", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:T3bClqg8ukKapp4r6pAw6Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorMessageOut = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:BsHekn9rA0qdsbbukFfsoQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:EK4uRG_LwUW2cf+em+gzjQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:EK4uRG_LwUW2cf+em+gzjQ", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.GetShopper$vars", [{
name: "ShopperGuid",
attrName: "shopperGuidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.GetShopper$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Shopper",
attrName: "shopperOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.GetShopperResponseRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.GetShopperResponseRec
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.getShopper$Action = function (shopperGuidIn) {
shopperGuidIn = (shopperGuidIn === undefined) ? "" : shopperGuidIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.getShopper$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shopperGuidIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
Shopper: actionResults.shopperOut
};
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$Patch_Shopper", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "Auth_Europe.controller", "ShopperPortalEU_Shopper_IS.controller$Patch_Shopper.PatchShopperJS", "Auth_Europe.controller$GetAccessToken", "ShopperPortalEU_Shopper_IS.referencesHealth", "ShopperPortalEU_Shopper_IS.referencesHealth$Auth_Europe"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController, Auth_EuropeController, ShopperPortalEU_Shopper_IS_controller_Patch_Shopper_PatchShopperJS) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.patch_Shopper$Action = function (shopperGuidIn, requestIn, audienceIn, endpointIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_Shopper$vars"))());
vars.value.shopperGuidInLocal = shopperGuidIn;
vars.value.requestInLocal = requestIn;
vars.value.audienceInLocal = audienceIn;
vars.value.endpointInLocal = endpointIn;
var getAccessTokenVar = new OS.DataTypes.VariableHolder();
var patchShopperJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_Shopper$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getAccessTokenVar = getAccessTokenVar;
varBag.patchShopperJSResult = patchShopperJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:wRX7ZWqPVkqmxJnXsDvJWQ:/ClientActionFlows.wRX7ZWqPVkqmxJnXsDvJWQ:VdwXymE9tCLp5AcSzaXlfA", "ShopperPortalEU_Shopper_IS", "Patch_Shopper", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:fo_6OOHUIESoxkgkX2viEA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:ldoLh3wLLkOvs5Tm_NONUg", callContext.id);
// Execute Action: GetAccessToken
return Auth_EuropeController.default.getAccessToken$Action(vars.value.audienceInLocal, callContext).then(function (value) {
getAccessTokenVar.value = value;
}).then(function () {
// HasToken
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:3V0mQha6AUKn1kFycnAbfw", callContext.id) && ((getAccessTokenVar.value.accessTokenOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:B+53AE1FMk6G_288jcxFjw", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_Patch_Shopper_PatchShopperJS, "PatchShopper", "Patch_Shopper", {
Token: OS.DataConversion.JSNodeParamConverter.to(getAccessTokenVar.value.accessTokenOut, OS.DataTypes.DataTypes.Text),
Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
ShopperGuid: OS.DataConversion.JSNodeParamConverter.to(vars.value.shopperGuidInLocal, OS.DataTypes.DataTypes.Text),
Value: OS.DataConversion.JSNodeParamConverter.to(vars.value.requestInLocal, OS.DataTypes.DataTypes.Text),
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_Shopper$patchShopperJSResult"))();
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSuccess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
patchShopperJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:djhxYRdQX06OkSmZbs3KBQ", callContext.id);
// IsSuccess = PatchShopper.IsSuccess
outVars.value.isSuccessOut = patchShopperJSResult.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:djhxYRdQX06OkSmZbs3KBQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = PatchShopper.ErrorMessage
outVars.value.errorMessageOut = patchShopperJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:djhxYRdQX06OkSmZbs3KBQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorCode = PatchShopper.ErrorCode
outVars.value.errorCodeOut = patchShopperJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:2dlVequnLkKedc_RRKlgOw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:2Bkg2CvjUUe7UcQTjz_uew", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", "Error updating shopper.");
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:wRX7ZWqPVkqmxJnXsDvJWQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:wRX7ZWqPVkqmxJnXsDvJWQ", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_Shopper$vars", [{
name: "ShopperGuid",
attrName: "shopperGuidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Request",
attrName: "requestInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Audience",
attrName: "audienceInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Endpoint",
attrName: "endpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_Shopper$patchShopperJSResult", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_Shopper$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.patch_Shopper$Action = function (shopperGuidIn, requestIn, audienceIn, endpointIn) {
shopperGuidIn = (shopperGuidIn === undefined) ? "" : shopperGuidIn;
requestIn = (requestIn === undefined) ? "" : requestIn;
audienceIn = (audienceIn === undefined) ? "" : audienceIn;
endpointIn = (endpointIn === undefined) ? "" : endpointIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.patch_Shopper$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shopperGuidIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(requestIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(audienceIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$Patch_Shopper.PatchShopperJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
fetch(`${$parameters.Endpoint}/Shoppers/${$parameters.ShopperGuid}`, {
  method: 'PATCH',
  headers: {
    Authorization: 'Bearer ' + $parameters.Token,
    'Access-Control-Allow-Origin': window.location.origin,
    'Content-type': 'application/json; charset=UTF-8'
  },
  body: $parameters.Value
}).then(response => {
  if (response.ok) {
    return {
      message: ''
    };
  } else {
    return response.json();
  }
}).then((data) => {
  if (data.message) {
    $parameters.IsSuccess = false;
    $parameters.ErrorMessage = data.message;
  } else {
    if (data.Errors) {
      $parameters.IsSuccess = false;
      $parameters.ErrorMessage = data.Errors.ErrorMessage;
      $parameters.ErrorCode = data.Errors.ErrorCode;
    } else {
      $parameters.IsSuccess = true;
    }
  }
  $resolve();
}).catch(error => {
  $parameters.IsSuccess = false;
  $parameters.ErrorMessage = error.statusText;
  $resolve();
});
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$Patch_TravelDocuments", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "Auth_Europe.controller", "ShopperPortalEU_Shopper_IS.controller$Patch_TravelDocuments.PatchTravelDocumentJS", "Auth_Europe.controller$GetAccessToken", "ShopperPortalEU_Shopper_IS.referencesHealth", "ShopperPortalEU_Shopper_IS.referencesHealth$Auth_Europe"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController, Auth_EuropeController, ShopperPortalEU_Shopper_IS_controller_Patch_TravelDocuments_PatchTravelDocumentJS) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.patch_TravelDocuments$Action = function (shopperGuidIn, audienceIn, endpointIn, numberIn, issuedByIn, expirationDateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_TravelDocuments$vars"))());
vars.value.shopperGuidInLocal = shopperGuidIn;
vars.value.audienceInLocal = audienceIn;
vars.value.endpointInLocal = endpointIn;
vars.value.numberInLocal = numberIn;
vars.value.issuedByInLocal = issuedByIn;
vars.value.expirationDateInLocal = expirationDateIn;
var getAccessTokenVar = new OS.DataTypes.VariableHolder();
var patchTravelDocumentJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_TravelDocuments$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getAccessTokenVar = getAccessTokenVar;
varBag.patchTravelDocumentJSResult = patchTravelDocumentJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:k_L5Gnq1w0SLyAtsnWIl2A:/ClientActionFlows.k_L5Gnq1w0SLyAtsnWIl2A:wEnnIqZWjv8yDuzwu2OfCA", "ShopperPortalEU_Shopper_IS", "Patch_TravelDocuments", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:RiS++4_6p02hgKaq+Bw20w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:2aW_2h849E+IAX1PkP+tgA", callContext.id);
// Execute Action: GetAccessToken
return Auth_EuropeController.default.getAccessToken$Action(vars.value.audienceInLocal, callContext).then(function (value) {
getAccessTokenVar.value = value;
}).then(function () {
// HasToken
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:5bpGY+z2SkqwhCxOBfc2MQ", callContext.id) && ((getAccessTokenVar.value.accessTokenOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:+PjNmVDvXUCRJmhWjrUFkA", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_Patch_TravelDocuments_PatchTravelDocumentJS, "PatchTravelDocument", "Patch_TravelDocuments", {
IssuedBy: OS.DataConversion.JSNodeParamConverter.to(vars.value.issuedByInLocal, OS.DataTypes.DataTypes.LongInteger),
Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
Token: OS.DataConversion.JSNodeParamConverter.to(getAccessTokenVar.value.accessTokenOut, OS.DataTypes.DataTypes.Text),
Number: OS.DataConversion.JSNodeParamConverter.to(vars.value.numberInLocal, OS.DataTypes.DataTypes.Text),
ExpirationDate: OS.DataConversion.JSNodeParamConverter.to(vars.value.expirationDateInLocal, OS.DataTypes.DataTypes.Text),
ShopperGuid: OS.DataConversion.JSNodeParamConverter.to(vars.value.shopperGuidInLocal, OS.DataTypes.DataTypes.Text),
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_TravelDocuments$patchTravelDocumentJSResult"))();
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSuccess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
patchTravelDocumentJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:vBIklMVmnUu_Fuq_9y41VA", callContext.id);
// IsSuccess = PatchTravelDocument.IsSuccess
outVars.value.isSuccessOut = patchTravelDocumentJSResult.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:vBIklMVmnUu_Fuq_9y41VA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = PatchTravelDocument.ErrorMessage
outVars.value.errorMessageOut = patchTravelDocumentJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:vBIklMVmnUu_Fuq_9y41VA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorCode = PatchTravelDocument.ErrorCode
outVars.value.errorCodeOut = patchTravelDocumentJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:V1PQbSUKQEC_KaK8qINzkQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:PANVIepmlEGK6vg44b7RTg", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", "Unable to save passport details.");
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:k_L5Gnq1w0SLyAtsnWIl2A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:k_L5Gnq1w0SLyAtsnWIl2A", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_TravelDocuments$vars", [{
name: "ShopperGuid",
attrName: "shopperGuidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Audience",
attrName: "audienceInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Endpoint",
attrName: "endpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Number",
attrName: "numberInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IssuedBy",
attrName: "issuedByInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "ExpirationDate",
attrName: "expirationDateInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_TravelDocuments$patchTravelDocumentJSResult", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Patch_TravelDocuments$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.patch_TravelDocuments$Action = function (shopperGuidIn, audienceIn, endpointIn, numberIn, issuedByIn, expirationDateIn) {
shopperGuidIn = (shopperGuidIn === undefined) ? "" : shopperGuidIn;
audienceIn = (audienceIn === undefined) ? "" : audienceIn;
endpointIn = (endpointIn === undefined) ? "" : endpointIn;
numberIn = (numberIn === undefined) ? "" : numberIn;
issuedByIn = (issuedByIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : issuedByIn;
expirationDateIn = (expirationDateIn === undefined) ? "" : expirationDateIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.patch_TravelDocuments$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shopperGuidIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(audienceIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(numberIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(issuedByIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(expirationDateIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$Patch_TravelDocuments.PatchTravelDocumentJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
fetch(`${$parameters.Endpoint}/Shoppers/${$parameters.ShopperGuid}/traveldocuments?type=Passport${$parameters.Number!==''?`&number=${$parameters.Number}`:''}${$parameters.IssuedBy>0?`&issuedByIso=${$parameters.IssuedBy}`:''}`, {
    method: 'PATCH',
    headers: {
         Authorization: 'Bearer ' + $parameters.Token,
        'Access-Control-Allow-Origin': window.location.origin,
        'Content-type': 'application/json; charset=UTF-8'
    },
    body:JSON.stringify([{
        "op": "replace",
        "path": "/ExpirationDate",
        "value": $parameters.ExpirationDate
    }])
}).then(response => {
  if (response.ok) {
    return {
      message: ''
    };
  } else {
    return response.json();
  }
}).then((data) => {
  if (data.message) {
    $parameters.IsSuccess = false;
    $parameters.ErrorMessage = data.message;
  } else {
    if (data.Errors) {
      $parameters.IsSuccess = false;
      $parameters.ErrorMessage = data.Errors.ErrorMessage;
      $parameters.ErrorCode = data.Errors.ErrorCode;
    } else {
      $parameters.IsSuccess = true;
    }
  }
  $resolve();
}).catch(error => {
    $parameters.IsSuccess = false;
    $resolve();
});
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$Post_Card", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "Auth_Europe.controller", "ShopperPortalEU_Shopper_IS.controller$Post_Card.PostCardJS", "Auth_Europe.controller$GetAccessToken", "ShopperPortalEU_Shopper_IS.referencesHealth", "ShopperPortalEU_Shopper_IS.referencesHealth$Auth_Europe", "ShopperPortalEU_Shopper_IS.model$PostCardBodyRec", "ShopperPortalEU_Shopper_IS.model$PostCardRec"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController, Auth_EuropeController, ShopperPortalEU_Shopper_IS_controller_Post_Card_PostCardJS) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.post_Card$Action = function (cardIn, audienceIn, endpointIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Card$vars"))());
vars.value.cardInLocal = cardIn.clone();
vars.value.audienceInLocal = audienceIn;
vars.value.endpointInLocal = endpointIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getAccessTokenVar = new OS.DataTypes.VariableHolder();
var postCardJSResult = new OS.DataTypes.VariableHolder();
var bodyToJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Card$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getAccessTokenVar = getAccessTokenVar;
varBag.postCardJSResult = postCardJSResult;
varBag.bodyToJSONVar = bodyToJSONVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:uyzkyJPyqkmFQ584yp2VJw:/ClientActionFlows.uyzkyJPyqkmFQ584yp2VJw:6Prt0IWkP6FKIHPZ8uH3Qw", "ShopperPortalEU_Shopper_IS", "Post_Card", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:ZzHK6tTBKUuqv56FEsc8Vg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:CZ0QZZoPfk2oweCcEyr1nw", callContext.id);
// Execute Action: GetAccessToken
return Auth_EuropeController.default.getAccessToken$Action(vars.value.audienceInLocal, callContext).then(function (value) {
getAccessTokenVar.value = value;
}).then(function () {
// HasToken
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:_IA90MNkQ0654Jwf9AmyKQ", callContext.id) && ((getAccessTokenVar.value.accessTokenOut) !== ("")))) {
// FormatExpiryDate
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:1HymO_O4dUqx7CRH5tzbmA", callContext.id);
// Card.Body.ExpiryDate = FormatDateTime
vars.value.cardInLocal.bodyAttr.expiryDateAttr = OS.BuiltinFunctions.formatDateTime(OS.BuiltinFunctions.textToDate(vars.value.cardInLocal.bodyAttr.expiryDateAttr), "MMyy");
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:LUK0wG1O_kaQEbwegsW2Jw", callContext.id);
// JSON Serialize: BodyToJSON
bodyToJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.cardInLocal.bodyAttr, true, false);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:e_ILAmGqr0e_8pZkgnUC6A", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_Post_Card_PostCardJS, "PostCard", "Post_Card", {
ShopperGuid: OS.DataConversion.JSNodeParamConverter.to(vars.value.cardInLocal.shopperGuidAttr, OS.DataTypes.DataTypes.Text),
Token: OS.DataConversion.JSNodeParamConverter.to(getAccessTokenVar.value.accessTokenOut, OS.DataTypes.DataTypes.Text),
Body: OS.DataConversion.JSNodeParamConverter.to(bodyToJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Card$postCardJSResult"))();
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSuccess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
postCardJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:rVJn9uBe+U2nFrSW_xxgcA", callContext.id);
// IsSuccess = PostCard.IsSuccess
outVars.value.isSuccessOut = postCardJSResult.value.isSuccessOut;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:mwX9juXwcEeytm6gpoZt3A", callContext.id) && outVars.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:jVl+E4n6HU2ZclBj3Zz_DQ", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:_SNnDxYxhUKVlXVpDOJ4WA", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", postCardJSResult.value.errorMessageOut);
}

});
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:fdx+M1rrikyL06Au3PHPmw", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", "Error creating card.");
}

});
});
}).catch(function (ex) {
OS.Logger.trace("Post_Card.Post_Card", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:mJ0N79Voy0ab5j0dnO6u4w", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:ra+jCFtIxE+BEcUD65GdZA", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:ra+jCFtIxE+BEcUD65GdZA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorMessageOut = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:jQ2398Cewka8sGV2j0XJaQ", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:uyzkyJPyqkmFQ584yp2VJw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:uyzkyJPyqkmFQ584yp2VJw", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Card$vars", [{
name: "Card",
attrName: "cardInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.PostCardRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.PostCardRec
}, {
name: "Audience",
attrName: "audienceInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Endpoint",
attrName: "endpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Card$postCardJSResult", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Card$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.post_Card$Action = function (cardIn, audienceIn, endpointIn) {
cardIn = (cardIn === undefined) ? new ShopperPortalEU_Shopper_ISModel.PostCardRec() : cardIn;
audienceIn = (audienceIn === undefined) ? "" : audienceIn;
endpointIn = (endpointIn === undefined) ? "" : endpointIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.post_Card$Action.bind(controller, cardIn, OS.DataConversion.JSNodeParamConverter.from(audienceIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$Post_Card.PostCardJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
fetch(`${$parameters.Endpoint}/Shoppers/${$parameters.ShopperGuid}/cards`, {
    method: 'POST',
    headers: {
        Authorization: 'Bearer ' + $parameters.Token,
        'Access-Control-Allow-Origin': window.location.origin,
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: $parameters.Body
}).then(response => {
    if (response.ok) {
        return {
            message: ''
        };
    } else {
        return response.json();
    }
}).then((data) => {
    if (data.Errors) {
        // This means an error JSON structure was returned
        $parameters.IsSuccess = false;
        $parameters.ErrorMessage = data.detail;
    } else {
        $parameters.IsSuccess = true;
    }
    $resolve();
}).catch(error => {
    $parameters.IsSuccess = false;
    $parameters.ErrorMessage = error.message;
    $resolve();
});
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$Post_Signup", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "ShopperPortalEU_Shopper_IS.controller$Post_Signup.BackoffLogicJS", "ShopperPortalEU_Shopper_IS.controller$Post_Signup.PostSignupJS", "ShopperPortalEU_Shopper_IS.controller$Post_Signup.CheckSignupRequestStatusJS", "ShopperPortalEU_Shopper_IS.model$RequestSignupRec"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController, ShopperPortalEU_Shopper_IS_controller_Post_Signup_BackoffLogicJS, ShopperPortalEU_Shopper_IS_controller_Post_Signup_PostSignupJS, ShopperPortalEU_Shopper_IS_controller_Post_Signup_CheckSignupRequestStatusJS) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.post_Signup$Action = function (signupRequestIn, endpointIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Signup$vars"))());
vars.value.signupRequestInLocal = signupRequestIn.clone();
vars.value.endpointInLocal = endpointIn;
var backoffLogicJSResult = new OS.DataTypes.VariableHolder();
var postSignupJSResult = new OS.DataTypes.VariableHolder();
var checkSignupRequestStatusJSResult = new OS.DataTypes.VariableHolder();
var bodyToJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Signup$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.backoffLogicJSResult = backoffLogicJSResult;
varBag.postSignupJSResult = postSignupJSResult;
varBag.checkSignupRequestStatusJSResult = checkSignupRequestStatusJSResult;
varBag.bodyToJSONVar = bodyToJSONVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:xyt72S6QbE+H_VI1jrWK_Q:/ClientActionFlows.xyt72S6QbE+H_VI1jrWK_Q:7ERmgY7QHY7jbMC7DGzHRg", "ShopperPortalEU_Shopper_IS", "Post_Signup", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:sxRdMnkBOkmQrxalD7LXBw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:+plwhuUNqkCXofcD3ZdYAg", callContext.id);
// JSON Serialize: BodyToJSON
bodyToJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.signupRequestInLocal, true, false);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:YmmufKN1AE6kTHqoMj4pEw", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_Post_Signup_PostSignupJS, "PostSignup", "Post_Signup", {
Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
Body: OS.DataConversion.JSNodeParamConverter.to(bodyToJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
SignupRequestCompleted: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
SignupRequestGuid: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Signup$postSignupJSResult"))();
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSuccess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.signupRequestCompletedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SignupRequestCompleted, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.signupRequestGuidOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SignupRequestGuid, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
postSignupJSResult.value = results;
}).then(function () {
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:kUt+qwb9gkO7Zwq_DltQrA", callContext.id) && postSignupJSResult.value.isSuccessOut)) {
// SignupRequestCompleted?
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:257DyxSnaUCMOKbTHRxo9A", callContext.id) && !(postSignupJSResult.value.signupRequestCompletedOut))) {
return OS.Flow.whileTrueAsync(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:lTwGKZnXq0q9fpf91Z5hcQ", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_Post_Signup_BackoffLogicJS, "BackoffLogic", "Post_Signup", {
NumTriesCheckRequestStatus: OS.DataConversion.JSNodeParamConverter.to(vars.value.numTriesCheckRequestStatusVar, OS.DataTypes.DataTypes.Integer),
TryAgain: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Signup$backoffLogicJSResult"))();
jsNodeResult.tryAgainOut = OS.DataConversion.JSNodeParamConverter.from($parameters.TryAgain, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
backoffLogicJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:wjhp65FrcE2T_kgGYyGOUg", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_Post_Signup_CheckSignupRequestStatusJS, "CheckSignupRequestStatus", "Post_Signup", {
ShopperGuid: OS.DataConversion.JSNodeParamConverter.to(postSignupJSResult.value.signupRequestGuidOut, OS.DataTypes.DataTypes.Text),
Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
SignupRequestCompleted: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Signup$checkSignupRequestStatusJSResult"))();
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSuccess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.signupRequestCompletedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.SignupRequestCompleted, OS.DataTypes.DataTypes.Boolean);
return jsNodeResult;
}, {}, {}).then(function (results) {
checkSignupRequestStatusJSResult.value = results;
});
}).then(function () {
// SignupRequestCheckSuccess
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:lF_U5HB5bkCChRj0VW0gow", callContext.id) && checkSignupRequestStatusJSResult.value.isSuccessOut)) {
// SignupRequestCompleted?
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:ZOzHUyBXE0KKms42ybiQ_A", callContext.id) && checkSignupRequestStatusJSResult.value.signupRequestCompletedOut)) {
return OS.Flow.breakAsync();
} else {
// ShouldTryAgain
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:RbVfzq_MJkiWCbyake2Jsg", callContext.id) && backoffLogicJSResult.value.tryAgainOut)) {
// Increment Number of Tries
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:NlIgggZizESAUYXdTsqM9Q", callContext.id);
// NumTriesCheckRequestStatus = NumTriesCheckRequestStatus + 1
vars.value.numTriesCheckRequestStatusVar = (vars.value.numTriesCheckRequestStatusVar + 1);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:VZLZ85XFa0uQiJnZ3e8iuw", callContext.id);
// Raise Error: InvalidSignup
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.InvalidSignup", "Error on sign up proccess request.");
}

}

} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:+eZ9cgmdd0SrG_fyGNTNbQ", callContext.id);
// Raise Error: InvalidSignup
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.InvalidSignup", "Error on sign up.");
}

});
});
}

}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:BbpOh1W9FECZr9xLn8G+cA", callContext.id);
// IsSuccess = True
outVars.value.isSuccessOut = true;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:rUTsmmnDGEm48+f_7qFCUQ", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Y14bXINoT0Ctp74myVwNbA", callContext.id);
// Raise Error: InvalidSignup
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.InvalidSignup", "Error on sign up.");
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:xyt72S6QbE+H_VI1jrWK_Q", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:xyt72S6QbE+H_VI1jrWK_Q", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Signup$vars", [{
name: "SignupRequest",
attrName: "signupRequestInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.RequestSignupRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.RequestSignupRec
}, {
name: "Endpoint",
attrName: "endpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "NumTriesCheckRequestStatus",
attrName: "numTriesCheckRequestStatusVar",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Integer,
defaultValue: function () {
return 1;
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Signup$backoffLogicJSResult", [{
name: "TryAgain",
attrName: "tryAgainOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Signup$postSignupJSResult", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SignupRequestCompleted",
attrName: "signupRequestCompletedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "SignupRequestGuid",
attrName: "signupRequestGuidOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Signup$checkSignupRequestStatusJSResult", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "SignupRequestCompleted",
attrName: "signupRequestCompletedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Post_Signup$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.post_Signup$Action = function (signupRequestIn, endpointIn) {
signupRequestIn = (signupRequestIn === undefined) ? new ShopperPortalEU_Shopper_ISModel.RequestSignupRec() : signupRequestIn;
endpointIn = (endpointIn === undefined) ? "" : endpointIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.post_Signup$Action.bind(controller, signupRequestIn, OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean)
};
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$Post_Signup.BackoffLogicJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
// this logic will check status after 1000ms, 3000ms and 7000ms
var exponentialBackoff = 2 ** $parameters.NumTriesCheckRequestStatus;
var delayInMilliseconds = (exponentialBackoff * 1000); 

setTimeout(function() {
    $parameters.TryAgain = ($parameters.NumTriesCheckRequestStatus < 3);
    $resolve();
}, delayInMilliseconds);
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$Post_Signup.PostSignupJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
fetch(`${$parameters.Endpoint}/Authentication/signup`, {
    method: 'POST',
    headers: {
        'Access-Control-Allow-Origin': window.location.origin,
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: $parameters.Body
}).then(response => {
    if (response.status === 200) {  
        $parameters.IsSuccess = true;
        $parameters.SignupRequestCompleted = true;
        $resolve();
    } else {
        response.json().then(body => {
            var signupRequestGuid = "";
            if (response.url) {
                var urlParts = response.url.split("/");
                signupRequestGuid = urlParts[urlParts.length - 1] || "";
            }

            $parameters.SignupRequestGuid = signupRequestGuid;
            $parameters.IsSuccess = false;
            $parameters.SignupRequestCompleted = false;
            $parameters.ErrorMessage = body && body.message ? body.message : "Unknown error occurred";
            $resolve();
        }).catch(error => {
            $parameters.IsSuccess = false;
            $parameters.SignupRequestCompleted = false;
            $parameters.ErrorMessage = "Failed to parse error response";
            $resolve();
        });
    }
}).catch(error => {
    $parameters.IsSuccess = false;
    $parameters.SignupRequestCompleted = false;
    $parameters.ErrorMessage = error && error.message ? error.message : "Unexpected error occurred";
    $resolve();
});

});
};
});
define("ShopperPortalEU_Shopper_IS.controller$Post_Signup.CheckSignupRequestStatusJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
fetch(`${$parameters.Endpoint}/Authentication/signup/${$parameters.ShopperGuid}`, {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': window.location.origin,
        'Content-type': 'application/json; charset=UTF-8'
    }
}).then(response => {
    if (response.ok) {
        response.json().then(body => {
            $parameters.IsSuccess = body.state != "ProcessedWithError";
            $parameters.SignupRequestCompleted = body.state == "Processed" || body.state == "ProcessedWithError";
            $parameters.ErrorMessage = body.state == "ProcessedWithError" ? "It was not possible to process the signup request. Please try again" : "";
            $resolve();
        });
    } else {
        response.json().then(body => {
            $parameters.IsSuccess = false;
            $parameters.SignupRequestCompleted = false;
            $parameters.ErrorMessage = body.message;
            $resolve();
        });
    }
}).catch(error => {
    $parameters.IsSuccess = false;
    $parameters.SignupRequestCompleted = false;
    $parameters.ErrorMessage = error.message;
    $resolve();
});
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$Post_TravelDocuments", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "Auth_Europe.controller", "ShopperPortalEU_Shopper_IS.controller$Post_TravelDocuments.PostTravelDocumentJS", "Auth_Europe.controller$GetAccessToken", "ShopperPortalEU_Shopper_IS.referencesHealth", "ShopperPortalEU_Shopper_IS.referencesHealth$Auth_Europe"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController, Auth_EuropeController, ShopperPortalEU_Shopper_IS_controller_Post_TravelDocuments_PostTravelDocumentJS) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.post_TravelDocuments$Action = function (shopperGuidIn, audienceIn, endpointIn, numberIn, issuedByIn, expirationDateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Post_TravelDocuments$vars"))());
vars.value.shopperGuidInLocal = shopperGuidIn;
vars.value.audienceInLocal = audienceIn;
vars.value.endpointInLocal = endpointIn;
vars.value.numberInLocal = numberIn;
vars.value.issuedByInLocal = issuedByIn;
vars.value.expirationDateInLocal = expirationDateIn;
var getAccessTokenVar = new OS.DataTypes.VariableHolder();
var postTravelDocumentJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Post_TravelDocuments$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getAccessTokenVar = getAccessTokenVar;
varBag.postTravelDocumentJSResult = postTravelDocumentJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:P691Tqaa6kaKh8P2MlBq4A:/ClientActionFlows.P691Tqaa6kaKh8P2MlBq4A:hG79EnIqV_UOL0TsrUkBuw", "ShopperPortalEU_Shopper_IS", "Post_TravelDocuments", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:0bWgvQWNvkODazrlj7N6tg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:+rXBLIUQwE6L+DM2uTvu9Q", callContext.id);
// Execute Action: GetAccessToken
return Auth_EuropeController.default.getAccessToken$Action(vars.value.audienceInLocal, callContext).then(function (value) {
getAccessTokenVar.value = value;
}).then(function () {
// HasToken
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:imbZnWgMM06bafmH8ZzN6w", callContext.id) && ((getAccessTokenVar.value.accessTokenOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:P7+yDp3+dUayj3nzi4JhfA", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_Post_TravelDocuments_PostTravelDocumentJS, "PostTravelDocument", "Post_TravelDocuments", {
IssuedBy: OS.DataConversion.JSNodeParamConverter.to(vars.value.issuedByInLocal, OS.DataTypes.DataTypes.LongInteger),
Token: OS.DataConversion.JSNodeParamConverter.to(getAccessTokenVar.value.accessTokenOut, OS.DataTypes.DataTypes.Text),
ExpirateDate: OS.DataConversion.JSNodeParamConverter.to(vars.value.expirationDateInLocal, OS.DataTypes.DataTypes.Text),
Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
Number: OS.DataConversion.JSNodeParamConverter.to(vars.value.numberInLocal, OS.DataTypes.DataTypes.Text),
ShopperGuid: OS.DataConversion.JSNodeParamConverter.to(vars.value.shopperGuidInLocal, OS.DataTypes.DataTypes.Text),
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Post_TravelDocuments$postTravelDocumentJSResult"))();
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSuccess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
postTravelDocumentJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:m+qKboPUSEypMzAfzRW8_g", callContext.id);
// IsSuccess = PostTravelDocument.IsSuccess
outVars.value.isSuccessOut = postTravelDocumentJSResult.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:m+qKboPUSEypMzAfzRW8_g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = PostTravelDocument.ErrorMessage
outVars.value.errorMessageOut = postTravelDocumentJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:m+qKboPUSEypMzAfzRW8_g", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorCode = PostTravelDocument.ErrorCode
outVars.value.errorCodeOut = postTravelDocumentJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Skx8vE4b+UaWqgUfVKo4iw", callContext.id);
});
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:D4PxLLja20GeCg8yAQiuHg", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", "Unable to save passport details.");
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:P691Tqaa6kaKh8P2MlBq4A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:P691Tqaa6kaKh8P2MlBq4A", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Post_TravelDocuments$vars", [{
name: "ShopperGuid",
attrName: "shopperGuidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Audience",
attrName: "audienceInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Endpoint",
attrName: "endpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Number",
attrName: "numberInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IssuedBy",
attrName: "issuedByInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "ExpirationDate",
attrName: "expirationDateInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Post_TravelDocuments$postTravelDocumentJSResult", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Post_TravelDocuments$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.post_TravelDocuments$Action = function (shopperGuidIn, audienceIn, endpointIn, numberIn, issuedByIn, expirationDateIn) {
shopperGuidIn = (shopperGuidIn === undefined) ? "" : shopperGuidIn;
audienceIn = (audienceIn === undefined) ? "" : audienceIn;
endpointIn = (endpointIn === undefined) ? "" : endpointIn;
numberIn = (numberIn === undefined) ? "" : numberIn;
issuedByIn = (issuedByIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : issuedByIn;
expirationDateIn = (expirationDateIn === undefined) ? "" : expirationDateIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.post_TravelDocuments$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shopperGuidIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(audienceIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(numberIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(issuedByIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(expirationDateIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$Post_TravelDocuments.PostTravelDocumentJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
fetch(`${$parameters.Endpoint}/Shoppers/${$parameters.ShopperGuid}/traveldocuments`, {
  method: 'POST',
  headers: {
    Authorization: 'Bearer ' + $parameters.Token,
    'Access-Control-Allow-Origin': window.location.origin,
    'Content-type': 'application/json; charset=UTF-8'
  },
  body: JSON.stringify({
    type: 'Passport',
    number: $parameters.Number,
    issuedByIso: $parameters.IssuedBy,
    expirationDate: $parameters.ExpirateDate
  })
}).then(response => {
  if (response.ok) {
    return {
      message: ''
    };
  } else {
    return response.json();
  }
}).then((data) => {
  if (data.message) {
    $parameters.IsSuccess = false;
    $parameters.ErrorMessage = data.message;
  } else {
    if (data.Errors) {
      $parameters.IsSuccess = false;
      $parameters.ErrorMessage = data.Errors.ErrorMessage;
      $parameters.ErrorCode = data.Errors.ErrorCode;
    } else {
      $parameters.IsSuccess = true;
    }
  }
  $resolve();
}).catch(error => {
  $parameters.IsSuccess = false;
  $resolve();
});
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$Put_Card", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "Auth_Europe.controller", "ShopperPortalEU_Shopper_IS.controller$Put_Card.PutCardJS", "Auth_Europe.controller$GetAccessToken", "ShopperPortalEU_Shopper_IS.referencesHealth", "ShopperPortalEU_Shopper_IS.referencesHealth$Auth_Europe", "ShopperPortalEU_Shopper_IS.model$UpdateCardDataRec", "ShopperPortalEU_Shopper_IS.model$UpdateCardRec"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController, Auth_EuropeController, ShopperPortalEU_Shopper_IS_controller_Put_Card_PutCardJS) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.put_Card$Action = function (updateCardIn, audienceIn, endpointIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Put_Card$vars"))());
vars.value.updateCardInLocal = updateCardIn.clone();
vars.value.audienceInLocal = audienceIn;
vars.value.endpointInLocal = endpointIn;
var getAccessTokenVar = new OS.DataTypes.VariableHolder();
var putCardJSResult = new OS.DataTypes.VariableHolder();
var requestToJSONVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.JSONSerializeOutputType());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Put_Card$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getAccessTokenVar = getAccessTokenVar;
varBag.putCardJSResult = putCardJSResult;
varBag.requestToJSONVar = requestToJSONVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:rnvIy7IZBkatUJMv7_hsEQ:/ClientActionFlows.rnvIy7IZBkatUJMv7_hsEQ:ZfPBMVCmZFgtHXzPGcw21w", "ShopperPortalEU_Shopper_IS", "Put_Card", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:JmAbEjlDdEq4M23pMFhT3w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:mRSgSNQ05k+KS5Ib+nMLDg", callContext.id);
// Execute Action: GetAccessToken
return Auth_EuropeController.default.getAccessToken$Action(vars.value.audienceInLocal, callContext).then(function (value) {
getAccessTokenVar.value = value;
}).then(function () {
// HasToken
return OS.Flow.executeSequence(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:4Mcb27DsEE6H2YdjjIZKSw", callContext.id) && ((getAccessTokenVar.value.accessTokenOut) !== ("")))) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:fKgoHFU_iEePB97BIuzagg", callContext.id);
// JSON Serialize: RequestToJSON
requestToJSONVar.value.jSONOut = OS.JSONUtils.serializeToJSON(vars.value.updateCardInLocal.updateCardDataAttr, true, false);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:VX3Ve7Sslke8eQsWEDe18Q", callContext.id);
return controller.safeExecuteAsyncJSNode(ShopperPortalEU_Shopper_IS_controller_Put_Card_PutCardJS, "PutCard", "Put_Card", {
ShopperGuid: OS.DataConversion.JSNodeParamConverter.to(vars.value.updateCardInLocal.shopperGuidAttr, OS.DataTypes.DataTypes.Text),
Endpoint: OS.DataConversion.JSNodeParamConverter.to(vars.value.endpointInLocal, OS.DataTypes.DataTypes.Text),
Token: OS.DataConversion.JSNodeParamConverter.to(getAccessTokenVar.value.accessTokenOut, OS.DataTypes.DataTypes.Text),
Body: OS.DataConversion.JSNodeParamConverter.to(requestToJSONVar.value.jSONOut, OS.DataTypes.DataTypes.Text),
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.Put_Card$putCardJSResult"))();
jsNodeResult.isSuccessOut = OS.DataConversion.JSNodeParamConverter.from($parameters.IsSuccess, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
putCardJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Ui2ZoEXglku9oFJ77Qm80w", callContext.id);
// IsSuccess = PutCard.IsSuccess
outVars.value.isSuccessOut = putCardJSResult.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Ui2ZoEXglku9oFJ77Qm80w", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = PutCard.ErrorMessage
outVars.value.errorMessageOut = putCardJSResult.value.errorMessageOut;
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:CriQeLqyNUy8bFCtg0boew", callContext.id) && outVars.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:jAHmQ92jN0yxA_QUZZ2G1w", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:VSTHa5Ysbk+Z+b_VtFNveA", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", ("Error updating card: " + putCardJSResult.value.errorMessageOut));
}

});
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:oRQV9wBTgkCbN3o5x_uJ5w", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", "Error updating card.");
}

});
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:rnvIy7IZBkatUJMv7_hsEQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:rnvIy7IZBkatUJMv7_hsEQ", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Put_Card$vars", [{
name: "UpdateCard",
attrName: "updateCardInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.UpdateCardRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.UpdateCardRec
}, {
name: "Audience",
attrName: "audienceInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Endpoint",
attrName: "endpointInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Put_Card$putCardJSResult", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.Put_Card$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.put_Card$Action = function (updateCardIn, audienceIn, endpointIn) {
updateCardIn = (updateCardIn === undefined) ? new ShopperPortalEU_Shopper_ISModel.UpdateCardRec() : updateCardIn;
audienceIn = (audienceIn === undefined) ? "" : audienceIn;
endpointIn = (endpointIn === undefined) ? "" : endpointIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.put_Card$Action.bind(controller, updateCardIn, OS.DataConversion.JSNodeParamConverter.from(audienceIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(endpointIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$Put_Card.PutCardJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
fetch(`${$parameters.Endpoint}/Shoppers/${$parameters.ShopperGuid}/cards`, {
    method: 'PUT',
    headers: {
         Authorization: 'Bearer ' + $parameters.Token,
        'Access-Control-Allow-Origin': window.location.origin,
        'Content-type': 'application/json; charset=UTF-8'
    },
    body: $parameters.Body
}).then(response => {
    if (response.ok) {
        return Promise.resolve();
    } else {
        return Promise.reject({
            status:response.status,
            statusText:response.statusText
        });
    }
}).then(() => {
    $parameters.IsSuccess = true;
    $resolve();
}).catch(error => {
    $parameters.IsSuccess = false;
    $parameters.ErrorMessage = error.statusText;
    $resolve();
});
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$SetTermsAndConditions", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "ShopperPortalEU_Shopper_IS.controller$SetTermsAndConditions.SetBodyRequestJS", "ShopperPortalEU_Shopper_IS.controller$ServerAction.GetShopperSiteProperties", "ShopperPortalEU_Shopper_IS.controller$Patch_Shopper"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController, ShopperPortalEU_Shopper_IS_controller_SetTermsAndConditions_SetBodyRequestJS) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.setTermsAndConditions$Action = function (shopperGuidIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.SetTermsAndConditions$vars"))());
vars.value.shopperGuidInLocal = shopperGuidIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getShopperSitePropertiesVar = new OS.DataTypes.VariableHolder();
var patch_ShopperVar = new OS.DataTypes.VariableHolder();
var setBodyRequestJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.SetTermsAndConditions$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getShopperSitePropertiesVar = getShopperSitePropertiesVar;
varBag.patch_ShopperVar = patch_ShopperVar;
varBag.setBodyRequestJSResult = setBodyRequestJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:sJ63W2LuhE6VXq3eJ32VsQ:/ClientActionFlows.sJ63W2LuhE6VXq3eJ32VsQ:AmcL8VL7Cd0iWwzfn+I2oQ", "ShopperPortalEU_Shopper_IS", "SetTermsAndConditions", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Tl9nQ9VR5E2wZq4sfxSQfg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:DZgDLV9CyU6xvtHL448bsw", callContext.id);
// Execute Action: GetShopperSiteProperties
return controller.getShopperSiteProperties$ServerAction(callContext).then(function (value) {
getShopperSitePropertiesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:aWwN6hC2OUG5KsQD4OrWFg", callContext.id);
setBodyRequestJSResult.value = controller.safeExecuteJSNode(ShopperPortalEU_Shopper_IS_controller_SetTermsAndConditions_SetBodyRequestJS, "SetBodyRequest", "SetTermsAndConditions", {
Request: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.SetTermsAndConditions$setBodyRequestJSResult"))();
jsNodeResult.requestOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Request, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {});
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:bgmZ2uEZSEiiU+CsJNt+rw", callContext.id);
// Execute Action: Patch_Shopper
return ShopperPortalEU_Shopper_ISController.default.patch_Shopper$Action(vars.value.shopperGuidInLocal, setBodyRequestJSResult.value.requestOut, getShopperSitePropertiesVar.value.shopperServiceAPIAudienceOut, getShopperSitePropertiesVar.value.shopperServiceAPIEndpointOut, callContext).then(function (value) {
patch_ShopperVar.value = value;
});
}).then(function () {
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:ghFBmzTBF0qEtKlE7syqyA", callContext.id);
// IsSuccess = Patch_Shopper.IsSuccess
outVars.value.isSuccessOut = patch_ShopperVar.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:ghFBmzTBF0qEtKlE7syqyA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = Patch_Shopper.ErrorMessage
outVars.value.errorMessageOut = patch_ShopperVar.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:zpilw6PYyUu4EP_thmZyJA", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("SetTermsAndConditions.SetTermsAndConditions", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:L4VMVDEuSEmk9RoDqK4Bsg", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:G9IsbAP2iUKINRAsiCchhA", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:G9IsbAP2iUKINRAsiCchhA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = "Error updating terms and conditions."
outVars.value.errorMessageOut = "Error updating terms and conditions.";
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:AHBNGFzh10667gcDqFIKwA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:sJ63W2LuhE6VXq3eJ32VsQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:sJ63W2LuhE6VXq3eJ32VsQ", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.SetTermsAndConditions$vars", [{
name: "ShopperGuid",
attrName: "shopperGuidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.SetTermsAndConditions$setBodyRequestJSResult", [{
name: "Request",
attrName: "requestOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.SetTermsAndConditions$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.setTermsAndConditions$Action = function (shopperGuidIn) {
shopperGuidIn = (shopperGuidIn === undefined) ? "" : shopperGuidIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.setTermsAndConditions$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shopperGuidIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("ShopperPortalEU_Shopper_IS.controller$SetTermsAndConditions.SetBodyRequestJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.Request = JSON.stringify([{
    "op": "replace",
    "path": "/EulaAccepted",
    "value": "true",
}]);
};
});

define("ShopperPortalEU_Shopper_IS.controller$SignupShopper", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "ShopperPortalEU_Shopper_IS.controller$ServerAction.GetShopperSiteProperties", "ShopperPortalEU_Shopper_IS.model$RequestSignupRec", "ShopperPortalEU_Shopper_IS.controller$Post_Signup"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.signupShopper$Action = function (emailIn, mobileNumberIn, captchaTokenIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.SignupShopper$vars"))());
vars.value.emailInLocal = emailIn;
vars.value.mobileNumberInLocal = mobileNumberIn;
vars.value.captchaTokenInLocal = captchaTokenIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getShopperSitePropertiesVar = new OS.DataTypes.VariableHolder();
var post_SignupVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.SignupShopper$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getShopperSitePropertiesVar = getShopperSitePropertiesVar;
varBag.post_SignupVar = post_SignupVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:bGgmmbnLjkaYsfXLRdHnjw:/ClientActionFlows.bGgmmbnLjkaYsfXLRdHnjw:HVLO48fNEZTcTLFkgUU2Jw", "ShopperPortalEU_Shopper_IS", "SignupShopper", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Ly7G2MVQ70mw4_fc4UjULA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:l9bUwL8FGUa9o3HQY4O5uw", callContext.id);
// Execute Action: GetShopperSiteProperties
return controller.getShopperSiteProperties$ServerAction(callContext).then(function (value) {
getShopperSitePropertiesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:tfq6+98Xmk+7Ebily8z8mg", callContext.id);
// Execute Action: Post_Signup
return ShopperPortalEU_Shopper_ISController.default.post_Signup$Action(function () {
var rec = new ShopperPortalEU_Shopper_ISModel.RequestSignupRec();
rec.emailAttr = vars.value.emailInLocal;
rec.mobileNumberAttr = vars.value.mobileNumberInLocal;
rec.captchaTokenAttr = vars.value.captchaTokenInLocal;
return rec;
}(), getShopperSitePropertiesVar.value.shopperServiceAPIEndpointOut, callContext).then(function (value) {
post_SignupVar.value = value;
});
}).then(function () {
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:rwLzN0xK_0ippvBDADawwQ", callContext.id);
// IsSuccess = Post_Signup.IsSuccess
outVars.value.isSuccessOut = post_SignupVar.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:UR+5pCEQaUKlm35+muhS6g", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("SignupShopper.SignupShopper", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Cqvd9D6rbUKHqL1ZsBzbkQ", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:BFAy9rk5LEuoFt4Q7ssa1A", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:BFAy9rk5LEuoFt4Q7ssa1A", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorMessageOut = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:45o00Kdv0U6H7gfvopeu1w", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:bGgmmbnLjkaYsfXLRdHnjw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:bGgmmbnLjkaYsfXLRdHnjw", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.SignupShopper$vars", [{
name: "Email",
attrName: "emailInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "MobileNumber",
attrName: "mobileNumberInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "CaptchaToken",
attrName: "captchaTokenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.SignupShopper$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.signupShopper$Action = function (emailIn, mobileNumberIn, captchaTokenIn) {
emailIn = (emailIn === undefined) ? "" : emailIn;
mobileNumberIn = (mobileNumberIn === undefined) ? "" : mobileNumberIn;
captchaTokenIn = (captchaTokenIn === undefined) ? "" : captchaTokenIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.signupShopper$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(emailIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(mobileNumberIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(captchaTokenIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$UpdateCard", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "ShopperPortalEU_Shopper_IS.controller$ServerAction.GetCreateCardSiteProperties", "ShopperPortalEU_Shopper_IS.model$UpdateCardRec", "ShopperPortalEU_Shopper_IS.controller$Put_Card", "ShopperPortalEU_Shopper_IS.model$UpdateCardDataRec"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.updateCard$Action = function (cardDataIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateCard$vars"))());
vars.value.cardDataInLocal = cardDataIn.clone();
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getCreateCardSitePropertiesVar = new OS.DataTypes.VariableHolder();
var put_CardVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateCard$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getCreateCardSitePropertiesVar = getCreateCardSitePropertiesVar;
varBag.put_CardVar = put_CardVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:Kan3ynqIRUSmlOGFknjvgQ:/ClientActionFlows.Kan3ynqIRUSmlOGFknjvgQ:3Rfh2bds6fwTuML4m+M18Q", "ShopperPortalEU_Shopper_IS", "UpdateCard", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:Z1vR2CgAFUa2XjCxWhDFrw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:f4oRevFw8kCxBMlInzOv_Q", callContext.id);
// Execute Action: GetCreateCardSiteProperties
return controller.getCreateCardSiteProperties$ServerAction(callContext).then(function (value) {
getCreateCardSitePropertiesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:2Pgm2UoptUikIZqj4eqYnQ", callContext.id);
// Execute Action: Put_Card
return ShopperPortalEU_Shopper_ISController.default.put_Card$Action(function () {
var rec = new ShopperPortalEU_Shopper_ISModel.UpdateCardRec();
rec.shopperGuidAttr = vars.value.cardDataInLocal.shopperGuidAttr;
rec.updateCardDataAttr = function () {
var rec = new ShopperPortalEU_Shopper_ISModel.UpdateCardDataRec();
rec.tokenValueAttr = vars.value.cardDataInLocal.updateCardDataAttr.tokenValueAttr;
rec.tokenProviderAttr = vars.value.cardDataInLocal.updateCardDataAttr.tokenProviderAttr;
rec.isDefaultAttr = vars.value.cardDataInLocal.updateCardDataAttr.isDefaultAttr;
return rec;
}();
return rec;
}(), getCreateCardSitePropertiesVar.value.shopperServiceAPIAudienceOut, getCreateCardSitePropertiesVar.value.shopperServiceAPIEndpointOut, callContext).then(function (value) {
put_CardVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:jlhQpH6JuE6FwuRJng9s6g", callContext.id);
// IsSuccess = True
outVars.value.isSuccessOut = true;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:qIBwFmQrCE2xesWpPkl2SA", callContext.id);
});
}).catch(function (ex) {
OS.Logger.trace("UpdateCard.UpdateCard", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:E1y1H7y9tEmGLCMmhlRNgg", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:063VKXnhY0yAXIy2637TUw", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:063VKXnhY0yAXIy2637TUw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorMessageOut = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:4IAqaptmG0mC3GowejSW+A", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:Kan3ynqIRUSmlOGFknjvgQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:Kan3ynqIRUSmlOGFknjvgQ", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateCard$vars", [{
name: "CardData",
attrName: "cardDataInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new ShopperPortalEU_Shopper_ISModel.UpdateCardRec();
},
complexType: ShopperPortalEU_Shopper_ISModel.UpdateCardRec
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateCard$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.updateCard$Action = function (cardDataIn) {
cardDataIn = (cardDataIn === undefined) ? new ShopperPortalEU_Shopper_ISModel.UpdateCardRec() : cardDataIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.updateCard$Action.bind(controller, cardDataIn), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$UpdateShopper", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "ShopperPortalEU_Shopper_IS.controller$Patch_Shopper", "ShopperPortalEU_Shopper_IS.controller$ServerAction.GetShopperSiteProperties"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.updateShopper$Action = function (shopperGuidIn, requestIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateShopper$vars"))());
vars.value.shopperGuidInLocal = shopperGuidIn;
vars.value.requestInLocal = requestIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getShopperSitePropertiesVar = new OS.DataTypes.VariableHolder();
var patch_ShopperVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateShopper$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getShopperSitePropertiesVar = getShopperSitePropertiesVar;
varBag.patch_ShopperVar = patch_ShopperVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:jCOzvcsTOkepU2lH2kT8HQ:/ClientActionFlows.jCOzvcsTOkepU2lH2kT8HQ:8RPKc3sdzJdzn2vezaC34g", "ShopperPortalEU_Shopper_IS", "UpdateShopper", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:6lQkgRmeVkin4Ra0KVcI9w", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:YS6b6JAQWUOvvit7UIIGmQ", callContext.id);
// Execute Action: GetShopperSiteProperties
return controller.getShopperSiteProperties$ServerAction(callContext).then(function (value) {
getShopperSitePropertiesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:7unkSdfJ5EqDaw_1hu1fgg", callContext.id);
// Execute Action: Patch_Shopper
return ShopperPortalEU_Shopper_ISController.default.patch_Shopper$Action(vars.value.shopperGuidInLocal, vars.value.requestInLocal, getShopperSitePropertiesVar.value.shopperServiceAPIAudienceOut, getShopperSitePropertiesVar.value.shopperServiceAPIEndpointOut, callContext).then(function (value) {
patch_ShopperVar.value = value;
});
}).then(function () {
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:CPg6Pa5rwkWXoGiRy9bnGw", callContext.id);
// IsSuccess = Patch_Shopper.IsSuccess
outVars.value.isSuccessOut = patch_ShopperVar.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:CPg6Pa5rwkWXoGiRy9bnGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = Patch_Shopper.ErrorMessage
outVars.value.errorMessageOut = patch_ShopperVar.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:CPg6Pa5rwkWXoGiRy9bnGw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorCode = Patch_Shopper.ErrorCode
outVars.value.errorCodeOut = patch_ShopperVar.value.errorCodeOut;
}).then(function () {
// Success
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:n0+n0jWnqkGzWgxQOcfinA", callContext.id) && outVars.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:1VZZea4wfUOqVFpDttf2RA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:0WvTMk9260+MSYZ91htbHw", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", outVars.value.errorMessageOut);
}

});
}).catch(function (ex) {
OS.Logger.trace("UpdateShopper.UpdateShopper", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:X3NV5QUgpE+J12pPjgQ_ZA", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:he0EwnKydUiy2xN08pFTZQ", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:he0EwnKydUiy2xN08pFTZQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorMessageOut = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:FvyNiSxcRkmyyhFn4yRPKA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:jCOzvcsTOkepU2lH2kT8HQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:jCOzvcsTOkepU2lH2kT8HQ", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateShopper$vars", [{
name: "ShopperGuid",
attrName: "shopperGuidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Request",
attrName: "requestInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateShopper$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.updateShopper$Action = function (shopperGuidIn, requestIn) {
shopperGuidIn = (shopperGuidIn === undefined) ? "" : shopperGuidIn;
requestIn = (requestIn === undefined) ? "" : requestIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.updateShopper$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shopperGuidIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(requestIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$UpdateTravelDocument", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller", "ShopperPortalEU_Shopper_IS.controller$Patch_TravelDocuments", "ShopperPortalEU_Shopper_IS.controller$ServerAction.GetShopperSiteProperties"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.updateTravelDocument$Action = function (shopperGuidIn, numberIn, issuedByIn, expirationDateIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateTravelDocument$vars"))());
vars.value.shopperGuidInLocal = shopperGuidIn;
vars.value.numberInLocal = numberIn;
vars.value.issuedByInLocal = issuedByIn;
vars.value.expirationDateInLocal = expirationDateIn;
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getShopperSitePropertiesVar = new OS.DataTypes.VariableHolder();
var patch_TravelDocumentsVar = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateTravelDocument$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getShopperSitePropertiesVar = getShopperSitePropertiesVar;
varBag.patch_TravelDocumentsVar = patch_TravelDocumentsVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("AYTi2rEb1kSv50L_LbN_CA:1ptJTqactEeAyHvpw4rSFQ:/ClientActionFlows.1ptJTqactEeAyHvpw4rSFQ:_qfWMWNnmbQa6fUJHXUDyA", "ShopperPortalEU_Shopper_IS", "UpdateTravelDocument", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:KlAzioeT10q78AF2K1qQpQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:jTEYupmb3UifAmNL97_+wQ", callContext.id);
// Execute Action: GetShopperSiteProperties
return controller.getShopperSiteProperties$ServerAction(callContext).then(function (value) {
getShopperSitePropertiesVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:szDvJj7LekissrvPETuHVg", callContext.id);
// Execute Action: Patch_TravelDocuments
return ShopperPortalEU_Shopper_ISController.default.patch_TravelDocuments$Action(vars.value.shopperGuidInLocal, getShopperSitePropertiesVar.value.shopperServiceAPIAudienceOut, getShopperSitePropertiesVar.value.shopperServiceAPIEndpointOut, OS.BuiltinFunctions.trim(vars.value.numberInLocal), vars.value.issuedByInLocal, ((!(vars.value.expirationDateInLocal.equals(OS.BuiltinFunctions.nullDate()))) ? (OS.BuiltinFunctions.formatDateTime(vars.value.expirationDateInLocal, "yyyy-MM-dd")) : ("")), callContext).then(function (value) {
patch_TravelDocumentsVar.value = value;
});
}).then(function () {
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:G8Z4Vkw9PUyIxbKZr3Ls4Q", callContext.id);
// IsSuccess = Patch_TravelDocuments.IsSuccess
outVars.value.isSuccessOut = patch_TravelDocumentsVar.value.isSuccessOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:G8Z4Vkw9PUyIxbKZr3Ls4Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = Patch_TravelDocuments.ErrorMessage
outVars.value.errorMessageOut = patch_TravelDocumentsVar.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:G8Z4Vkw9PUyIxbKZr3Ls4Q", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorCode = Patch_TravelDocuments.ErrorCode
outVars.value.errorCodeOut = patch_TravelDocumentsVar.value.errorCodeOut;
}).then(function () {
// Success
if((OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:dTaWLpnGFEy60QchsVco4g", callContext.id) && outVars.value.isSuccessOut)) {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:JO8yh7M6m0GnooAuyt2E6g", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:k0k8eWTe1EeSbx2TahStmg", callContext.id);
// Raise Error: ShopperServiceAPIError
throw new OS.Exceptions.Exceptions.UserException("ShopperPortalEU_Shopper_IS.ShopperServiceAPIError", outVars.value.errorMessageOut);
}

});
}).catch(function (ex) {
OS.Logger.trace("UpdateTravelDocument.UpdateTravelDocument", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:FrZ8Rz1TT0ygZ1KMyOh0aw", callContext.id);
// Output
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:M_n8fC0c2kSstQvCJxafgA", callContext.id);
// IsSuccess = False
outVars.value.isSuccessOut = false;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:M_n8fC0c2kSstQvCJxafgA", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = AllExceptions.ExceptionMessage
outVars.value.errorMessageOut = allExceptionsVar.value.exceptionMessageAttr;
OutSystemsDebugger.handleBreakpoint("AYTi2rEb1kSv50L_LbN_CA:bzqpuNmu2kW6gaXHbotnQA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:1ptJTqactEeAyHvpw4rSFQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("AYTi2rEb1kSv50L_LbN_CA:1ptJTqactEeAyHvpw4rSFQ", callContext.id);
throw ex;

});
};
var controller = ShopperPortalEU_Shopper_ISController.default;
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateTravelDocument$vars", [{
name: "ShopperGuid",
attrName: "shopperGuidInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "Number",
attrName: "numberInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IssuedBy",
attrName: "issuedByInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.LongInteger,
defaultValue: function () {
return OS.DataTypes.LongInteger.defaultValue;
}
}, {
name: "ExpirationDate",
attrName: "expirationDateInLocal",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Date,
defaultValue: function () {
return OS.DataTypes.DateTime.defaultValue;
}
}]);
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS.UpdateTravelDocument$outVars", [{
name: "IsSuccess",
attrName: "isSuccessOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorMessage",
attrName: "errorMessageOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
ShopperPortalEU_Shopper_ISController.default.clientActionProxies.updateTravelDocument$Action = function (shopperGuidIn, numberIn, issuedByIn, expirationDateIn) {
shopperGuidIn = (shopperGuidIn === undefined) ? "" : shopperGuidIn;
numberIn = (numberIn === undefined) ? "" : numberIn;
issuedByIn = (issuedByIn === undefined) ? OS.DataTypes.LongInteger.defaultValue : issuedByIn;
expirationDateIn = (expirationDateIn === undefined) ? OS.DataTypes.DateTime.defaultValue : expirationDateIn;
return controller.executeActionInsideJSNode(ShopperPortalEU_Shopper_ISController.default.updateTravelDocument$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(shopperGuidIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(numberIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(issuedByIn, OS.DataTypes.DataTypes.LongInteger), OS.DataConversion.JSNodeParamConverter.from(expirationDateIn, OS.DataTypes.DataTypes.Date)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsSuccess: OS.DataConversion.JSNodeParamConverter.to(actionResults.isSuccessOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text)
};
});
};
});

define("ShopperPortalEU_Shopper_IS.controller$ServerAction.GetCardsSiteProperties", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.getCardsSiteProperties$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("GetCardsSiteProperties", "screenservices/ShopperPortalEU_Shopper_IS/ActionGetCardsSiteProperties", "mtW1J79d2RMNw3NSUI4dCQ", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS$ActionGetCardsSiteProperties"))();
executeServerActionResult.shopperServiceAPIAudienceOut = OS.DataConversion.ServerDataConverter.from(outputs.ShopperServiceAPIAudience, OS.DataTypes.DataTypes.Text);
executeServerActionResult.shopperServiceAPIEndpointOut = OS.DataConversion.ServerDataConverter.from(outputs.ShopperServiceAPIEndpoint, OS.DataTypes.DataTypes.Text);
return executeServerActionResult;
});
};
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS$ActionGetCardsSiteProperties", [{
name: "ShopperServiceAPIAudience",
attrName: "shopperServiceAPIAudienceOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShopperServiceAPIEndpoint",
attrName: "shopperServiceAPIEndpointOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
});
define("ShopperPortalEU_Shopper_IS.controller$ServerAction.GetCreateCardSiteProperties", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.getCreateCardSiteProperties$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("GetCreateCardSiteProperties", "screenservices/ShopperPortalEU_Shopper_IS/ActionGetCreateCardSiteProperties", "+DATERF8Ufxe4wIhKVKCxw", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS$ActionGetCreateCardSiteProperties"))();
executeServerActionResult.tokenServiceAPIAudienceOut = OS.DataConversion.ServerDataConverter.from(outputs.TokenServiceAPIAudience, OS.DataTypes.DataTypes.Text);
executeServerActionResult.tokenServiceAPIEndpointOut = OS.DataConversion.ServerDataConverter.from(outputs.TokenServiceAPIEndpoint, OS.DataTypes.DataTypes.Text);
executeServerActionResult.shopperServiceAPIAudienceOut = OS.DataConversion.ServerDataConverter.from(outputs.ShopperServiceAPIAudience, OS.DataTypes.DataTypes.Text);
executeServerActionResult.shopperServiceAPIEndpointOut = OS.DataConversion.ServerDataConverter.from(outputs.ShopperServiceAPIEndpoint, OS.DataTypes.DataTypes.Text);
return executeServerActionResult;
});
};
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS$ActionGetCreateCardSiteProperties", [{
name: "TokenServiceAPIAudience",
attrName: "tokenServiceAPIAudienceOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "TokenServiceAPIEndpoint",
attrName: "tokenServiceAPIEndpointOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShopperServiceAPIAudience",
attrName: "shopperServiceAPIAudienceOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShopperServiceAPIEndpoint",
attrName: "shopperServiceAPIEndpointOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
});
define("ShopperPortalEU_Shopper_IS.controller$ServerAction.GetShopperSiteProperties", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_ISController) {
var OS = OutSystems.Internal;
ShopperPortalEU_Shopper_ISController.default.getShopperSiteProperties$ServerAction = function (callContext) {
var controller = this.controller;
return controller.callServerAction("GetShopperSiteProperties", "screenservices/ShopperPortalEU_Shopper_IS/ActionGetShopperSiteProperties", "hwUfp8gUcSLontxL63atDQ", {}, controller.callContext(callContext), OutSystemsDebugger.getRequestHeaders(callContext.id), function (json, headers) {
OutSystemsDebugger.processResponseHeaders(callContext.id, headers);
}, false).then(function (outputs) {
var executeServerActionResult = new (controller.constructor.getVariableGroupType("ShopperPortalEU_Shopper_IS$ActionGetShopperSiteProperties"))();
executeServerActionResult.shopperServiceAPIAudienceOut = OS.DataConversion.ServerDataConverter.from(outputs.ShopperServiceAPIAudience, OS.DataTypes.DataTypes.Text);
executeServerActionResult.shopperServiceAPIEndpointOut = OS.DataConversion.ServerDataConverter.from(outputs.ShopperServiceAPIEndpoint, OS.DataTypes.DataTypes.Text);
return executeServerActionResult;
});
};
ShopperPortalEU_Shopper_ISController.default.constructor.registerVariableGroupType("ShopperPortalEU_Shopper_IS$ActionGetShopperSiteProperties", [{
name: "ShopperServiceAPIAudience",
attrName: "shopperServiceAPIAudienceOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ShopperServiceAPIEndpoint",
attrName: "shopperServiceAPIEndpointOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
});
define("ShopperPortalEU_Shopper_IS.controller", ["exports", "OutSystems/ClientRuntime/Main", "ShopperPortalEU_Shopper_IS.model", "ShopperPortalEU_Shopper_IS.controller$debugger"], function (exports, OutSystems, ShopperPortalEU_Shopper_ISModel, ShopperPortalEU_Shopper_IS_Controller_debugger) {
var OS = OutSystems.Internal;
var ShopperPortalEU_Shopper_ISController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return ShopperPortalEU_Shopper_ISController.default.defaultTimeout;
};
Controller.prototype.getClientActionProxies = function (controller) {
var _this = this;
var thisController = controller;
return Object.keys(this.clientActionProxies).reduce(function (acc, actionName) {
acc[actionName] = function () {
if(thisController.isActive()) {
return _this.clientActionProxies[actionName].apply(thisController, arguments);
}

return Promise.resolve();
};
return acc;
}, {});
};
return Controller;
})(OS.Controller.BaseModuleController);
ShopperPortalEU_Shopper_ISController.default = new Controller(null, "ShopperPortalEU_Shopper_IS");
});
define("ShopperPortalEU_Shopper_IS.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"l4lm0uxEDUaKQ21XKVMjnQ": {
getter: function (varBag, idService) {
return varBag.vars.value.shopperGuidInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6fnV3q9pAkq4jBD9MIKs3Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"J4EeLZAP9EGKh5tWuDDBCw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"B+0nbRjGkkmqOgiLjQ184w": {
getter: function (varBag, idService) {
return varBag.outVars.value.cardsOut;
}
},
"TboIbGZcI0uuT2pVC+kTrw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"VTKEX9kvA0SzD5sGf5Z37Q": {
getter: function (varBag, idService) {
return varBag.getCardsSitePropertiesVar.value;
}
},
"RCTKLSmIaEyyhloOekVZ7A": {
getter: function (varBag, idService) {
return varBag.getAccessTokenVar.value;
}
},
"rWMf60OX7UKPp8GKZpW5pQ": {
getter: function (varBag, idService) {
return varBag.jSONToCardsVar.value;
}
},
"9x4A9LqTkUmJJhyBqHHweQ": {
getter: function (varBag, idService) {
return varBag.getCardsJSResult.value;
}
},
"jukHaJVqM0O4FfpnmizPFA": {
getter: function (varBag, idService) {
return varBag.vars.value.shopperGuidInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0hfV2GJ7gEaeJZPIOn+4wA": {
getter: function (varBag, idService) {
return varBag.vars.value.audienceInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1BdXs3CujkeWCYR0ZhvOlA": {
getter: function (varBag, idService) {
return varBag.vars.value.endpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Ib0B+BvOxkS2+KVpiGD5yg": {
getter: function (varBag, idService) {
return varBag.vars.value.numberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pc6opqI_okyCH1EXWG3cjQ": {
getter: function (varBag, idService) {
return varBag.vars.value.issuedByInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"0kpKwYnYiEG5qDOADnm_WQ": {
getter: function (varBag, idService) {
return varBag.vars.value.expirationDateInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"jgMKCKiU70KEmZZBpQc0Dg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"w5DWD9IK5kWXcAzvfoCtQw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"0VpiRegRS0C+aRtMeepXlQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorCodeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2aW_2h849E+IAX1PkP+tgA": {
getter: function (varBag, idService) {
return varBag.getAccessTokenVar.value;
}
},
"+PjNmVDvXUCRJmhWjrUFkA": {
getter: function (varBag, idService) {
return varBag.patchTravelDocumentJSResult.value;
}
},
"Wa5Of2kvt0yYmAogR_n5Jw": {
getter: function (varBag, idService) {
return varBag.vars.value.shopperGuidInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"D0+AEigMRkiWFOr9rIZWVQ": {
getter: function (varBag, idService) {
return varBag.vars.value.audienceInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UE7lI+4SNU6VREroxXMn4A": {
getter: function (varBag, idService) {
return varBag.vars.value.endpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"gaBzfgpdTEmCMQp35RQaew": {
getter: function (varBag, idService) {
return varBag.outVars.value.shopperOut;
}
},
"VmlDfqgnIkeIcx0x6uPjUw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"fj07Kg542EWTMa17KR_lzA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"TRTmLFSA8UyYYje5S2CCQg": {
getter: function (varBag, idService) {
return varBag.getAccessTokenVar.value;
}
},
"+eSwt0hDe0io5cRSQaqHfg": {
getter: function (varBag, idService) {
return varBag.shopperFromJSONVar.value;
}
},
"BWPSAIrGp0a5Lo4C7P_0Yg": {
getter: function (varBag, idService) {
return varBag.getShopperJSResult.value;
}
},
"6tU2gniTEE+jP0tjJ2F0IQ": {
getter: function (varBag, idService) {
return varBag.vars.value.shopperGuidInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"g6u0Ugv1w0WM0dFcqO65AA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"kYEyNeZmSEqTanBRxMHKMA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FAsUQOBHCk67DOLqu6A40A": {
getter: function (varBag, idService) {
return varBag.outVars.value.shopperOut;
}
},
"x9FVZO5S4kyoSZ_vDRg9yg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"uyHhPpRzr0OFLVVjUbS1pw": {
getter: function (varBag, idService) {
return varBag.getShopperSitePropertiesVar.value;
}
},
"oJDeFpZQf0SD8c2mfEERWw": {
getter: function (varBag, idService) {
return varBag.get_ShopperVar.value;
}
},
"oaZPdYu3rEm5JVf2t84lQA": {
getter: function (varBag, idService) {
return varBag.vars.value.shopperGuidInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"7ijnFlNKWkSb2iUVhn_MGg": {
getter: function (varBag, idService) {
return varBag.vars.value.numberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"1SgYD5FnSEGxbADPRrKwAg": {
getter: function (varBag, idService) {
return varBag.vars.value.issuedByInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"JCkJL6tB7UmVF65FtxeyBw": {
getter: function (varBag, idService) {
return varBag.vars.value.expirationDateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"ByVVtseXEEKLbr5rStIaIw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"eKmsW+HvZkKoDw4QrXYufA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"pJIpYvv9yk28Uzty9NEMWQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorCodeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"FrZ8Rz1TT0ygZ1KMyOh0aw": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"jTEYupmb3UifAmNL97_+wQ": {
getter: function (varBag, idService) {
return varBag.getShopperSitePropertiesVar.value;
}
},
"szDvJj7LekissrvPETuHVg": {
getter: function (varBag, idService) {
return varBag.patch_TravelDocumentsVar.value;
}
},
"qG45ncFJ2U6zTIwzHbi9Tg": {
getter: function (varBag, idService) {
return varBag.vars.value.shopperGuidInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"2qsvVU5GAk+tidaZiQH2xw": {
getter: function (varBag, idService) {
return varBag.vars.value.audienceInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"8TPw5ywu806+onvazN+gYg": {
getter: function (varBag, idService) {
return varBag.vars.value.endpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XUx4iwL5pk+hvcyPuaoU6Q": {
getter: function (varBag, idService) {
return varBag.vars.value.numberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ACSQFgBRUkaCbD2G8S3zwg": {
getter: function (varBag, idService) {
return varBag.vars.value.issuedByInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"VTzLead9kUGY869ORQH7fw": {
getter: function (varBag, idService) {
return varBag.vars.value.expirationDateInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"YPMHYXILYk+GVqM+uYgY2w": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Ewec1P9urUuWLp6xfe32dw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"bJmU_brKY0miOJmHR3smrA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorCodeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+rXBLIUQwE6L+DM2uTvu9Q": {
getter: function (varBag, idService) {
return varBag.getAccessTokenVar.value;
}
},
"P7+yDp3+dUayj3nzi4JhfA": {
getter: function (varBag, idService) {
return varBag.postTravelDocumentJSResult.value;
}
},
"xiF5v52AKkOal3iC7tyzsw": {
getter: function (varBag, idService) {
return varBag.vars.value.cardDataInLocal;
}
},
"xkL3fve2_kWJdcub6j5R+A": {
getter: function (varBag, idService) {
return varBag.vars.value.audienceInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Fg5RFBiS9kmgnAlUAFkTxQ": {
getter: function (varBag, idService) {
return varBag.vars.value.endpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ourNcR_QOESTGngYl7wpRg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"TUNK5HINykamMZ2i7P96Wg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"KWJ+orw+fkys6XhOvnsIZA": {
getter: function (varBag, idService) {
return varBag.getAccessTokenVar.value;
}
},
"Ro5eYuYoS0KWw0rz9TM6vQ": {
getter: function (varBag, idService) {
return varBag.jSONSerializeRequestBodyVar.value;
}
},
"oddbWkYCRUezR85MUuzOdA": {
getter: function (varBag, idService) {
return varBag.deleteCardJSResult.value;
}
},
"Ipl14Q+XUkq2veGkbC+hFA": {
getter: function (varBag, idService) {
return varBag.vars.value.transactionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Fc0+3Mwm2UyjNL8+uJ6Bfw": {
getter: function (varBag, idService) {
return varBag.vars.value.audienceInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3a2Tt_FmTUW6YYcMMAwBzQ": {
getter: function (varBag, idService) {
return varBag.vars.value.endpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6R8fjzqQhkWIb73a1K9A7A": {
getter: function (varBag, idService) {
return varBag.outVars.value.cardDataOut;
}
},
"e1qaGRSzOkiFPwbWrOGQAw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"INJEpdlaX0aLsUl9fPw15Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"cXdweMgluU+A4F4_W5h2nw": {
getter: function (varBag, idService) {
return varBag.getAccessTokenVar.value;
}
},
"+FUdgUrV5EWvjM1CzTiI+A": {
getter: function (varBag, idService) {
return varBag.jSONToCardDataVar.value;
}
},
"7_LcYOPdNUWgi11US45fwQ": {
getter: function (varBag, idService) {
return varBag.getDatatransTokenJSResult.value;
}
},
"cbZPbfiweE2bfCLkG2TbCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.shopperGuidInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4z6IYhcS0EaO3cajntI+jg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"BIEvIenKAUGU0TAAcDUE4Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"L4VMVDEuSEmk9RoDqK4Bsg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"DZgDLV9CyU6xvtHL448bsw": {
getter: function (varBag, idService) {
return varBag.getShopperSitePropertiesVar.value;
}
},
"bgmZ2uEZSEiiU+CsJNt+rw": {
getter: function (varBag, idService) {
return varBag.patch_ShopperVar.value;
}
},
"aWwN6hC2OUG5KsQD4OrWFg": {
getter: function (varBag, idService) {
return varBag.setBodyRequestJSResult.value;
}
},
"QOyFxYaVzEe1ZOD9cOm+qg": {
getter: function (varBag, idService) {
return varBag.vars.value.shopperGuidInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"WMCpyWf9xka+ETMS012wmA": {
getter: function (varBag, idService) {
return varBag.vars.value.requestInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JjjeLpfqTkupjBwFDwnIEg": {
getter: function (varBag, idService) {
return varBag.vars.value.audienceInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"aahTlbLOk0eifpraRyNy8Q": {
getter: function (varBag, idService) {
return varBag.vars.value.endpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Q7YC+nWM10e0kp7hOPNvIA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"L+yEAqk4KE6CxhQH5xuy8A": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ToNlqKMMNUig_jC6uHmC4Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorCodeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"ldoLh3wLLkOvs5Tm_NONUg": {
getter: function (varBag, idService) {
return varBag.getAccessTokenVar.value;
}
},
"B+53AE1FMk6G_288jcxFjw": {
getter: function (varBag, idService) {
return varBag.patchShopperJSResult.value;
}
},
"zuxpbhPZv0qI0J99NuE1qA": {
getter: function (varBag, idService) {
return varBag.vars.value.transactionIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"QZhm9zgPsU2CJpaGeSNWqA": {
getter: function (varBag, idService) {
return varBag.outVars.value.datatransTokenFallbackOut;
}
},
"KxpdYJdv+kCJWmsGadD1wg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cWDAHuBjrkGzcQrI_STqUQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"G9btmP+QBUK6Blm8+K12wg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"Qk6CunFhQESlGG+5TuDJ3Q": {
getter: function (varBag, idService) {
return varBag.getCreateCardSitePropertiesVar.value;
}
},
"K6seqxLRskaMPtr_CeOBRA": {
getter: function (varBag, idService) {
return varBag.get_DatatransTokenVar.value;
}
},
"DkcsAQGKz06flJb56fO7Ng": {
getter: function (varBag, idService) {
return varBag.vars.value.shopperGuidInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EaNwALIoHkeywlAL4Au9ng": {
getter: function (varBag, idService) {
return varBag.vars.value.numberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"UbYrvYWwa0OS5D7tlXm5Cw": {
getter: function (varBag, idService) {
return varBag.vars.value.issuedByInLocal;
},
dataType: OS.DataTypes.DataTypes.LongInteger
},
"JlgGZe+pukaYdstxnTb27g": {
getter: function (varBag, idService) {
return varBag.vars.value.expirationDateInLocal;
},
dataType: OS.DataTypes.DataTypes.Date
},
"xCSzGz0t80y+QQxplGwwhw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cjvljYDoCU2lmkpojiIaFw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EmcZ6TRBM02kgqR5Dyg7rw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorCodeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"kSmcZKkbrUOGt2D9GG6jPQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"UM7m36zb002jwaqntX_ZfQ": {
getter: function (varBag, idService) {
return varBag.getShopperSitePropertiesVar.value;
}
},
"y1yx4YGJ0Ua7t9R4GY24sw": {
getter: function (varBag, idService) {
return varBag.post_TravelDocumentsVar.value;
}
},
"A4Yq6BdmQ0y2+23QhvHpBg": {
getter: function (varBag, idService) {
return varBag.vars.value.tokenVar;
}
},
"wTrZ5R+gME2VXJ72abdAjw": {
getter: function (varBag, idService) {
return varBag.vars.value.cardDataInLocal;
}
},
"j2D06TMkRkKoVCSzg+jtIw": {
getter: function (varBag, idService) {
return varBag.vars.value.bypassTokenInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"_TN34alFGUuf+W7Tb0WNZQ": {
getter: function (varBag, idService) {
return varBag.vars.value.datatransTokenInLocal;
}
},
"j01rf1QZnkacXgk_RhUMCA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"T6kntaajeU6oq2+IKqRN6A": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"DvDFyKm4mkyPNytglwpKBw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isGenericErrorOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"tEGRINOSTUaJTq_ALKuAaQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.datatransTokenFallbackOut;
}
},
"vYjsodK2ykW3qUxB6mBPlA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"y376MFF0nUKzLUI8rTvvgA": {
getter: function (varBag, idService) {
return varBag.getCreateCardSitePropertiesVar.value;
}
},
"+7R2CjN7cEulStkSr24W3w": {
getter: function (varBag, idService) {
return varBag.post_CardVar.value;
}
},
"cwAQ3LNLaUSWgIKLUWh96w": {
getter: function (varBag, idService) {
return varBag.get_DatatransTokenVar.value;
}
},
"mamS2b_0iEC2E+RBI+gqtw": {
getter: function (varBag, idService) {
return varBag.vars.value.emailInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Zx1CnMYUfkyNuAS5RMzMTw": {
getter: function (varBag, idService) {
return varBag.vars.value.mobileNumberInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"AKEEeweItEyIFkiBlIYmEw": {
getter: function (varBag, idService) {
return varBag.vars.value.captchaTokenInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"eXxZzdRqTEK0eiFcHxAUig": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"SEgq2B9OFkq4w_Rr1ZMSNw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"Cqvd9D6rbUKHqL1ZsBzbkQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"l9bUwL8FGUa9o3HQY4O5uw": {
getter: function (varBag, idService) {
return varBag.getShopperSitePropertiesVar.value;
}
},
"tfq6+98Xmk+7Ebily8z8mg": {
getter: function (varBag, idService) {
return varBag.post_SignupVar.value;
}
},
"vSupol4B2E+3BJHXmsAONg": {
getter: function (varBag, idService) {
return varBag.vars.value.shopperGuidInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"JKnlFAWY_Ue18As+F7PNUg": {
getter: function (varBag, idService) {
return varBag.vars.value.requestInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"6KGU5ESDuEKj7sMqshiTPg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"kp0m4dCK7EmjoCiIsr7t9A": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"+JfNnWGgjUeLVc2uidFVgA": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorCodeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"X3NV5QUgpE+J12pPjgQ_ZA": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"YS6b6JAQWUOvvit7UIIGmQ": {
getter: function (varBag, idService) {
return varBag.getShopperSitePropertiesVar.value;
}
},
"7unkSdfJ5EqDaw_1hu1fgg": {
getter: function (varBag, idService) {
return varBag.patch_ShopperVar.value;
}
},
"0qw9MAoIcEeYAldcyQLFdA": {
getter: function (varBag, idService) {
return varBag.vars.value.cardInLocal;
}
},
"9YLY6gZeR0uBZs2dJJT+Lg": {
getter: function (varBag, idService) {
return varBag.vars.value.audienceInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"tOiBhgfM2kW9gBebPgLQ3w": {
getter: function (varBag, idService) {
return varBag.vars.value.endpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"EVffS+xSBUCsiRiTh8HNdQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"eT4n0xWg2kiqoszfwNLaeQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mJ0N79Voy0ab5j0dnO6u4w": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"CZ0QZZoPfk2oweCcEyr1nw": {
getter: function (varBag, idService) {
return varBag.getAccessTokenVar.value;
}
},
"LUK0wG1O_kaQEbwegsW2Jw": {
getter: function (varBag, idService) {
return varBag.bodyToJSONVar.value;
}
},
"e_ILAmGqr0e_8pZkgnUC6A": {
getter: function (varBag, idService) {
return varBag.postCardJSResult.value;
}
},
"ytJ_5DEcp0ia+fqbjX+VJg": {
getter: function (varBag, idService) {
return varBag.vars.value.cardDataInLocal;
}
},
"b3Jj+gRfNUaEjvVBnEnSdg": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"VKyMzkMRwUeLBWRg68v_Kw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"E1y1H7y9tEmGLCMmhlRNgg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"f4oRevFw8kCxBMlInzOv_Q": {
getter: function (varBag, idService) {
return varBag.getCreateCardSitePropertiesVar.value;
}
},
"2Pgm2UoptUikIZqj4eqYnQ": {
getter: function (varBag, idService) {
return varBag.put_CardVar.value;
}
},
"pi645Ut6yEyGjmk6nA6CWQ": {
getter: function (varBag, idService) {
return varBag.vars.value.updateCardInLocal;
}
},
"RS6k61WoZ0KNX+Ai7U9Hzg": {
getter: function (varBag, idService) {
return varBag.vars.value.audienceInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"exiKf+cDJECLtvo3yeudCQ": {
getter: function (varBag, idService) {
return varBag.vars.value.endpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"rk68oJNoCEaWOUpxxJUDxw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"Zgola8dXUkmhyo7zc3NC2Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"mRSgSNQ05k+KS5Ib+nMLDg": {
getter: function (varBag, idService) {
return varBag.getAccessTokenVar.value;
}
},
"fKgoHFU_iEePB97BIuzagg": {
getter: function (varBag, idService) {
return varBag.requestToJSONVar.value;
}
},
"VX3Ve7Sslke8eQsWEDe18Q": {
getter: function (varBag, idService) {
return varBag.putCardJSResult.value;
}
},
"CCQ7lVbU50SXAKu5pp3wSg": {
getter: function (varBag, idService) {
return varBag.vars.value.numTriesCheckRequestStatusVar;
},
dataType: OS.DataTypes.DataTypes.Integer
},
"RBdosQ75S0uteBqOepFBew": {
getter: function (varBag, idService) {
return varBag.vars.value.signupRequestInLocal;
}
},
"ZqxrK9yftkukjoobCIiryg": {
getter: function (varBag, idService) {
return varBag.vars.value.endpointInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5A9jJHImNkO492fa5OwYIQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"+plwhuUNqkCXofcD3ZdYAg": {
getter: function (varBag, idService) {
return varBag.bodyToJSONVar.value;
}
},
"lTwGKZnXq0q9fpf91Z5hcQ": {
getter: function (varBag, idService) {
return varBag.backoffLogicJSResult.value;
}
},
"YmmufKN1AE6kTHqoMj4pEw": {
getter: function (varBag, idService) {
return varBag.postSignupJSResult.value;
}
},
"wjhp65FrcE2T_kgGYyGOUg": {
getter: function (varBag, idService) {
return varBag.checkSignupRequestStatusJSResult.value;
}
},
"sErNbV722ki0UcZge5TG1A": {
getter: function (varBag, idService) {
return varBag.vars.value.cardDataInLocal;
}
},
"2O3oxWud30u7lxqxE9cOTw": {
getter: function (varBag, idService) {
return varBag.outVars.value.isSuccessOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"vC6S8AMYM0mcfSlX+4A83Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"5Y8sbyWXGkWJtuibR9MWyQ": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"D2LyBCBqtE6z+dVNKXMx7w": {
getter: function (varBag, idService) {
return varBag.getCardsSitePropertiesVar.value;
}
},
"yVam9H5S5E6RJxHmADO3hQ": {
getter: function (varBag, idService) {
return varBag.delete_CardVar.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
