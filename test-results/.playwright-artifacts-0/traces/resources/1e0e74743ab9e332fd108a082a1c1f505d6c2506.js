define("Auth_Europe.controller$Auth0Logout", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$Auth0Logout.JavaScriptJS", "Auth_Europe.controller$GetWebAuth"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_Auth0Logout_JavaScriptJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.auth0Logout$Action = function (returnToUrlIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.Auth0Logout$vars"))());
vars.value.returnToUrlInLocal = returnToUrlIn;
var getWebAuthVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getWebAuthVar = getWebAuthVar;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:w4lOPa5yeke26DWsQZ0uoQ:/ClientActionFlows.w4lOPa5yeke26DWsQZ0uoQ:Hep6l6YmXXM+ffYxF8Oung", "Auth_Europe", "Auth0Logout", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:u8wQs_iziUW_5S2egxzerQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:omgUZkvt_U6t1Jq1Z4KQYg", callContext.id);
// Execute Action: GetWebAuth
return Auth_EuropeController.default.getWebAuth$Action(callContext).then(function (value) {
getWebAuthVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:HrBAtyPvr0a6XRontYkbFQ", callContext.id);
controller.safeExecuteJSNode(Auth_Europe_controller_Auth0Logout_JavaScriptJS, "JavaScript", "Auth0Logout", {
LoginUrl: OS.DataConversion.JSNodeParamConverter.to(vars.value.returnToUrlInLocal, OS.DataTypes.DataTypes.Text),
webAuth: OS.DataConversion.JSNodeParamConverter.to(getWebAuthVar.value.webAuthOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:Gfp97aWA1EyCb47z0kJRXg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:w4lOPa5yeke26DWsQZ0uoQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:w4lOPa5yeke26DWsQZ0uoQ", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.Auth0Logout$vars", [{
name: "ReturnToUrl",
attrName: "returnToUrlInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.clientActionProxies.auth0Logout$Action = function (returnToUrlIn) {
returnToUrlIn = (returnToUrlIn === undefined) ? "" : returnToUrlIn;
return controller.executeActionInsideJSNode(Auth_EuropeController.default.auth0Logout$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(returnToUrlIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Auth_Europe.controller$Auth0Logout.JavaScriptJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
window.webAuth = null;
$parameters.webAuth.logout({
  returnTo: $parameters.LoginUrl,
  //TODO double check this
  clientID: ''
});


};
});

define("Auth_Europe.controller$CheckAutentication", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.model$AccessInfoRec", "Auth_Europe.controller$IsAuthenticated"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.checkAutentication$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var isAuthenticatedVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.isAuthenticatedVar = isAuthenticatedVar;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:bVCJ83M23EqR30Mh5xR3xw:/ClientActionFlows.bVCJ83M23EqR30Mh5xR3xw:CPyFDeTboyW88DQEmzHzAw", "Auth_Europe", "CheckAutentication", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:r7U5M5dy1kGY3jqVO1TeFw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:GoiRnw6yWk2yTXKLkLX7qw", callContext.id);
// Execute Action: IsAuthenticated
return Auth_EuropeController.default.isAuthenticated$Action(callContext).then(function (value) {
isAuthenticatedVar.value = value;
}).then(function () {
// IsAuthenticated?
if((OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:BYTQ+nVj_ki_b_S2UXs4Vw", callContext.id) && isAuthenticatedVar.value.isAuthenticatedOut)) {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:Uk3qzlR5GkCS_V7pKCfGAw", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:UFEdZJBfhU6RIDoRMjMsPA", callContext.id);
// Raise Error: NotRegistered
throw new OS.Exceptions.Exceptions.NotRegisteredException("NotRegistered", "Login need it");
}

});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:bVCJ83M23EqR30Mh5xR3xw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:bVCJ83M23EqR30Mh5xR3xw", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.clientActionProxies.checkAutentication$Action = function () {
return controller.executeActionInsideJSNode(Auth_EuropeController.default.checkAutentication$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});

define("Auth_Europe.controller$GetAccessToken", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$GetAccessToken.GetAccessTokenJS", "Auth_Europe.controller$GetWebAuth", "Auth_Europe.controller$GetAccessTokenCache", "Auth_Europe.controller$GetParseJwtJSFunction"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_GetAccessToken_GetAccessTokenJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.getAccessToken$Action = function (audienceIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.GetAccessToken$vars"))());
vars.value.audienceInLocal = audienceIn;
var getWebAuthVar = new OS.DataTypes.VariableHolder();
var getAccessTokenCacheVar = new OS.DataTypes.VariableHolder();
var getParseJwtJSFunctionVar = new OS.DataTypes.VariableHolder();
var getAccessTokenJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.GetAccessToken$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getWebAuthVar = getWebAuthVar;
varBag.getAccessTokenCacheVar = getAccessTokenCacheVar;
varBag.getParseJwtJSFunctionVar = getParseJwtJSFunctionVar;
varBag.getAccessTokenJSResult = getAccessTokenJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:XzBR2RE0xUyY8qtFOyP2Kw:/ClientActionFlows.XzBR2RE0xUyY8qtFOyP2Kw:jB+4sRfgfgWFgI1BxCbizQ", "Auth_Europe", "GetAccessToken", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:kw9Zbax110qLezUAkwB9xw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:D5QnKXCKzkudN49vZRo7Qw", callContext.id);
// Execute Action: GetWebAuth
return Auth_EuropeController.default.getWebAuth$Action(callContext).then(function (value) {
getWebAuthVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:6FYHOdGrV027V+ovn3afoQ", callContext.id);
// Execute Action: GetAccessTokenCache
return Auth_EuropeController.default.getAccessTokenCache$Action(callContext).then(function (value) {
getAccessTokenCacheVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:78d1hUjL0UqIZclFJ1X9Zw", callContext.id);
// Execute Action: GetParseJwtJSFunction
return Auth_EuropeController.default.getParseJwtJSFunction$Action(callContext).then(function (value) {
getParseJwtJSFunctionVar.value = value;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:xWiWP8Oqz0+3KxA_VQUOvQ", callContext.id);
return controller.safeExecuteAsyncJSNode(Auth_Europe_controller_GetAccessToken_GetAccessTokenJS, "GetAccessToken", "GetAccessToken", {
audience: OS.DataConversion.JSNodeParamConverter.to(vars.value.audienceInLocal, OS.DataTypes.DataTypes.Text),
webAuth: OS.DataConversion.JSNodeParamConverter.to(getWebAuthVar.value.webAuthOut, OS.DataTypes.DataTypes.Object),
parseJwtJSFunction: OS.DataConversion.JSNodeParamConverter.to(getParseJwtJSFunctionVar.value.partseJwtJSFunctionOut, OS.DataTypes.DataTypes.Object),
accessTokenCache: OS.DataConversion.JSNodeParamConverter.to(getAccessTokenCacheVar.value.accessTokenCacheOut, OS.DataTypes.DataTypes.Object),
accessToken: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
hasError: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
errorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Auth_Europe.GetAccessToken$getAccessTokenJSResult"))();
jsNodeResult.accessTokenOut = OS.DataConversion.JSNodeParamConverter.from($parameters.accessToken, OS.DataTypes.DataTypes.Text);
jsNodeResult.hasErrorOut = OS.DataConversion.JSNodeParamConverter.from($parameters.hasError, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.errorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
getAccessTokenJSResult.value = results;
});
}).then(function () {
if((OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:6O+GBqcdP0qFfDcdbTQHmA", callContext.id) && getAccessTokenJSResult.value.hasErrorOut)) {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:R2wLI_YPnk2tVSGt9NG2Mg", callContext.id);
// Raise Error: OAuth2Exception
throw new OS.Exceptions.Exceptions.UserException("Auth_Europe.OAuth2Exception", getAccessTokenJSResult.value.errorMessageOut);
} else {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:bongPi3cCkOP7zxJLn_22w", callContext.id);
// AccessToken = GetAccessToken.accessToken
outVars.value.accessTokenOut = getAccessTokenJSResult.value.accessTokenOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:iwV9q6U_lkWzPWISy8QrGw", callContext.id);
}

});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:XzBR2RE0xUyY8qtFOyP2Kw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:XzBR2RE0xUyY8qtFOyP2Kw", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.GetAccessToken$vars", [{
name: "Audience",
attrName: "audienceInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.GetAccessToken$getAccessTokenJSResult", [{
name: "accessToken",
attrName: "accessTokenOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "hasError",
attrName: "hasErrorOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "errorMessage",
attrName: "errorMessageOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.GetAccessToken$outVars", [{
name: "AccessToken",
attrName: "accessTokenOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.clientActionProxies.getAccessToken$Action = function (audienceIn) {
audienceIn = (audienceIn === undefined) ? "" : audienceIn;
return controller.executeActionInsideJSNode(Auth_EuropeController.default.getAccessToken$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(audienceIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AccessToken: OS.DataConversion.JSNodeParamConverter.to(actionResults.accessTokenOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Auth_Europe.controller$GetAccessToken.GetAccessTokenJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
if ($parameters.audience in $parameters.accessTokenCache) {
    var accessTokenFromCache = $parameters.accessTokenCache[$parameters.audience];
    var jwt = $parameters.parseJwtJSFunction(accessTokenFromCache)
    var jwtExpiryDate = new Date(jwt.exp * 1000);
    // tokenValidity = jwtExpirtyDate - 1 minute
    var tokenValidity = new Date( jwtExpiryDate.getTime() - 1000 * 60 )
    if(Date.now() < tokenValidity) {
        $parameters.accessToken = accessTokenFromCache;
        $resolve();    
        return;
    }
}
// didn't find accessToken in cache or it is about to expire. get a new token
$parameters.webAuth.checkSession({
    audience: $parameters.audience,
    scope: 'openid profile email'
}, function (err, authResult) {
    if(err) {
        $parameters.hasError = true;
        $parameters.errorMessage = err.description;
    } else {
        $parameters.accessTokenCache[$parameters.audience] = authResult.accessToken;
        $parameters.accessToken = authResult.accessToken;
    }
    $resolve();
}); 


});
};
});

define("Auth_Europe.controller$GetAccessTokenCache", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$GetAccessTokenCache.GetAccessTokenCacheJS"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_GetAccessTokenCache_GetAccessTokenCacheJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.getAccessTokenCache$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getAccessTokenCacheJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.GetAccessTokenCache$outVars"))());
varBag.callContext = callContext;
varBag.getAccessTokenCacheJSResult = getAccessTokenCacheJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:FWd2+MAG_Ui7gtqc82e7bw:/ClientActionFlows.FWd2+MAG_Ui7gtqc82e7bw:V4+t+GWSN1yF6LzD2fpkFg", "Auth_Europe", "GetAccessTokenCache", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:DfbGuAElVE+vBcVydjdwmg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:YGqY2pKzFka2zEcP9HyRBQ", callContext.id);
return controller.safeExecuteAsyncJSNode(Auth_Europe_controller_GetAccessTokenCache_GetAccessTokenCacheJS, "GetAccessTokenCache", "GetAccessTokenCache", {
AccessTokenCache: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Auth_Europe.GetAccessTokenCache$getAccessTokenCacheJSResult"))();
jsNodeResult.accessTokenCacheOut = OS.DataConversion.JSNodeParamConverter.from($parameters.AccessTokenCache, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {}).then(function (results) {
getAccessTokenCacheJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:_JJLOMdvuUWBywa+lcRR0Q", callContext.id);
// AccessTokenCache = GetAccessTokenCache.AccessTokenCache
outVars.value.accessTokenCacheOut = getAccessTokenCacheJSResult.value.accessTokenCacheOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:TnuvhP6jr0eM8Mn34guNvw", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:FWd2+MAG_Ui7gtqc82e7bw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:FWd2+MAG_Ui7gtqc82e7bw", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.GetAccessTokenCache$getAccessTokenCacheJSResult", [{
name: "AccessTokenCache",
attrName: "accessTokenCacheOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.GetAccessTokenCache$outVars", [{
name: "AccessTokenCache",
attrName: "accessTokenCacheOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Auth_EuropeController.default.clientActionProxies.getAccessTokenCache$Action = function () {
return controller.executeActionInsideJSNode(Auth_EuropeController.default.getAccessTokenCache$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
AccessTokenCache: OS.DataConversion.JSNodeParamConverter.to(actionResults.accessTokenCacheOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Auth_Europe.controller$GetAccessTokenCache.GetAccessTokenCacheJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var accessTokenCache = window.accessTokenCache;
if(accessTokenCache == null) {
    accessTokenCache = {};
    window.accessTokenCache = accessTokenCache;
}
$parameters.AccessTokenCache = accessTokenCache;
$resolve(); 
});
};
});

define("Auth_Europe.controller$GetParseJwtJSFunction", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$GetParseJwtJSFunction.GetParseJwtFunctionJS"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_GetParseJwtJSFunction_GetParseJwtFunctionJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.getParseJwtJSFunction$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getParseJwtFunctionJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.GetParseJwtJSFunction$outVars"))());
varBag.callContext = callContext;
varBag.getParseJwtFunctionJSResult = getParseJwtFunctionJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:22fAAjIK+EelD1Iq0UxGkw:/ClientActionFlows.22fAAjIK+EelD1Iq0UxGkw:6I2k64zEu4HjuhtFagsZJw", "Auth_Europe", "GetParseJwtJSFunction", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:U9M5QEe5REeQuprtF1vhzw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:W_ZJhSm7I0y5pEPWaSAq0w", callContext.id);
// Returns a javascript function that accepts one parameter (jwt token) and return the JSON representation of the JWT token
return controller.safeExecuteAsyncJSNode(Auth_Europe_controller_GetParseJwtJSFunction_GetParseJwtFunctionJS, "GetParseJwtFunction", "GetParseJwtJSFunction", {
ParseJwtFunction: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Auth_Europe.GetParseJwtJSFunction$getParseJwtFunctionJSResult"))();
jsNodeResult.parseJwtFunctionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ParseJwtFunction, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {}).then(function (results) {
getParseJwtFunctionJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:uRjsf6Z4okKkYgNjriP2hA", callContext.id);
// PartseJwtJSFunction = GetParseJwtFunction.ParseJwtFunction
outVars.value.partseJwtJSFunctionOut = getParseJwtFunctionJSResult.value.parseJwtFunctionOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:9PL8O7s4QE2A7EHDfwjt8Q", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:22fAAjIK+EelD1Iq0UxGkw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:22fAAjIK+EelD1Iq0UxGkw", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.GetParseJwtJSFunction$getParseJwtFunctionJSResult", [{
name: "ParseJwtFunction",
attrName: "parseJwtFunctionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.GetParseJwtJSFunction$outVars", [{
name: "PartseJwtJSFunction",
attrName: "partseJwtJSFunctionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Auth_EuropeController.default.clientActionProxies.getParseJwtJSFunction$Action = function () {
return controller.executeActionInsideJSNode(Auth_EuropeController.default.getParseJwtJSFunction$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
PartseJwtJSFunction: OS.DataConversion.JSNodeParamConverter.to(actionResults.partseJwtJSFunctionOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Auth_Europe.controller$GetParseJwtJSFunction.GetParseJwtFunctionJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.ParseJwtFunction = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
$resolve();
});
};
});

define("Auth_Europe.controller$GetWebAuth", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$GetWebAuth.CreateAuth0ClientJS"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_GetWebAuth_CreateAuth0ClientJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.getWebAuth$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var createAuth0ClientJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.GetWebAuth$outVars"))());
varBag.callContext = callContext;
varBag.createAuth0ClientJSResult = createAuth0ClientJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:YmsN2sPIIU2atPnEUwRe9w:/ClientActionFlows.YmsN2sPIIU2atPnEUwRe9w:a7Cqgui8Ku52v8h9XEt0qQ", "Auth_Europe", "GetWebAuth", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:IF1KtoJ9jki6KivXnRlsBA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:Ek2i13g19k2uKaKDdtUAjw", callContext.id);
return controller.safeExecuteAsyncJSNode(Auth_Europe_controller_GetWebAuth_CreateAuth0ClientJS, "CreateAuth0Client", "GetWebAuth", {
webAuth: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Auth_Europe.GetWebAuth$createAuth0ClientJSResult"))();
jsNodeResult.webAuthOut = OS.DataConversion.JSNodeParamConverter.from($parameters.webAuth, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {}).then(function (results) {
createAuth0ClientJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:jH_0+r6sS0is2g_Xx1Walw", callContext.id);
// WebAuth = CreateAuth0Client.webAuth
outVars.value.webAuthOut = createAuth0ClientJSResult.value.webAuthOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:yy_o6spepkqmkcj7OIfSXw", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:YmsN2sPIIU2atPnEUwRe9w", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:YmsN2sPIIU2atPnEUwRe9w", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.GetWebAuth$createAuth0ClientJSResult", [{
name: "webAuth",
attrName: "webAuthOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.GetWebAuth$outVars", [{
name: "WebAuth",
attrName: "webAuthOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Auth_EuropeController.default.clientActionProxies.getWebAuth$Action = function () {
return controller.executeActionInsideJSNode(Auth_EuropeController.default.getWebAuth$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
WebAuth: OS.DataConversion.JSNodeParamConverter.to(actionResults.webAuthOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Auth_Europe.controller$GetWebAuth.CreateAuth0ClientJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var webAuth = window.webAuth;
$parameters.webAuth = webAuth;   
$resolve();
});
};
});

define("Auth_Europe.controller$HandleAuthCallback", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$HandleAuthCallback.AuthenticationHandlerJS", "Auth_Europe.controller$GetWebAuth"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_HandleAuthCallback_AuthenticationHandlerJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.handleAuthCallback$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getWebAuthVar = new OS.DataTypes.VariableHolder();
var authenticationHandlerJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.HandleAuthCallback$outVars"))());
varBag.callContext = callContext;
varBag.getWebAuthVar = getWebAuthVar;
varBag.authenticationHandlerJSResult = authenticationHandlerJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:RzVwrr68UkKEKIu5e1wFsQ:/ClientActionFlows.RzVwrr68UkKEKIu5e1wFsQ:3MAeIQZL+L9wYvdOkmPN6Q", "Auth_Europe", "HandleAuthCallback", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:sM_lsfWAYUWQ+FL8RGyp+A", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:wPzvlNolT0C7pcDMTW0XZA", callContext.id);
// Execute Action: GetWebAuth
return Auth_EuropeController.default.getWebAuth$Action(callContext).then(function (value) {
getWebAuthVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:7jkLco6QU0ujGv22m3WDZw", callContext.id);
return controller.safeExecuteAsyncJSNode(Auth_Europe_controller_HandleAuthCallback_AuthenticationHandlerJS, "AuthenticationHandler", "HandleAuthCallback", {
webAuth: OS.DataConversion.JSNodeParamConverter.to(getWebAuthVar.value.webAuthOut, OS.DataTypes.DataTypes.Object),
isAuthenticated: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
fullName: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Auth_Europe.HandleAuthCallback$authenticationHandlerJSResult"))();
jsNodeResult.isAuthenticatedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isAuthenticated, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.fullNameOut = OS.DataConversion.JSNodeParamConverter.from($parameters.fullName, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
authenticationHandlerJSResult.value = results;
});
}).then(function () {
// Output Variables
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:MjGQCFIecU2iaXoaWGxetQ", callContext.id);
// IsAuthenticated = AuthenticationHandler.isAuthenticated
outVars.value.isAuthenticatedOut = authenticationHandlerJSResult.value.isAuthenticatedOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:MjGQCFIecU2iaXoaWGxetQ", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// UserFullName = AuthenticationHandler.fullName
outVars.value.userFullNameOut = authenticationHandlerJSResult.value.fullNameOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:plgrWEV+mE2H9OPqTrun6g", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:RzVwrr68UkKEKIu5e1wFsQ", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:RzVwrr68UkKEKIu5e1wFsQ", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.HandleAuthCallback$authenticationHandlerJSResult", [{
name: "isAuthenticated",
attrName: "isAuthenticatedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "fullName",
attrName: "fullNameOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.HandleAuthCallback$outVars", [{
name: "IsAuthenticated",
attrName: "isAuthenticatedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "UserFullName",
attrName: "userFullNameOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.clientActionProxies.handleAuthCallback$Action = function () {
return controller.executeActionInsideJSNode(Auth_EuropeController.default.handleAuthCallback$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAuthenticated: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAuthenticatedOut, OS.DataTypes.DataTypes.Boolean),
UserFullName: OS.DataConversion.JSNodeParamConverter.to(actionResults.userFullNameOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Auth_Europe.controller$HandleAuthCallback.AuthenticationHandlerJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.webAuth.parseHash({ hash: window.location.hash }, function(err, authResult) {
  if (err) {
    console.log(err);
    $parameters.isAuthenticated = false;
    $resolve();
  } else {
    $parameters.webAuth.client.userInfo(authResult.accessToken, function(err, user) {
        $parameters.fullName = user.given_name + " " + user.family_name;
        $parameters.isAuthenticated = true;
        $resolve();
    });
  }
});
});
};
});

define("Auth_Europe.controller$InitWebAuth", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$InitWebAuth.CreateAuth0ClientJS"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_InitWebAuth_CreateAuth0ClientJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.initWebAuth$Action = function (domainIn, clientIdIn, redirectUriIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.InitWebAuth$vars"))());
vars.value.domainInLocal = domainIn;
vars.value.clientIdInLocal = clientIdIn;
vars.value.redirectUriInLocal = redirectUriIn;
var createAuth0ClientJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.InitWebAuth$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.createAuth0ClientJSResult = createAuth0ClientJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:z3JOgXqWGU+LJStlfb9kFA:/ClientActionFlows.z3JOgXqWGU+LJStlfb9kFA:TQkvyFULfPiMM0m_ut7jhw", "Auth_Europe", "InitWebAuth", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:AR3hPnKdI0CVVoaNR3vVQg", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:Z5KwPWsvdUOqwOo08izVTw", callContext.id);
return controller.safeExecuteAsyncJSNode(Auth_Europe_controller_InitWebAuth_CreateAuth0ClientJS, "CreateAuth0Client", "InitWebAuth", {
domain: OS.DataConversion.JSNodeParamConverter.to(vars.value.domainInLocal, OS.DataTypes.DataTypes.Text),
clientId: OS.DataConversion.JSNodeParamConverter.to(vars.value.clientIdInLocal, OS.DataTypes.DataTypes.Text),
redirectUri: OS.DataConversion.JSNodeParamConverter.to(vars.value.redirectUriInLocal, OS.DataTypes.DataTypes.Text),
webAuth: OS.DataConversion.JSNodeParamConverter.to(null, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Auth_Europe.InitWebAuth$createAuth0ClientJSResult"))();
jsNodeResult.webAuthOut = OS.DataConversion.JSNodeParamConverter.from($parameters.webAuth, OS.DataTypes.DataTypes.Object);
return jsNodeResult;
}, {}, {}).then(function (results) {
createAuth0ClientJSResult.value = results;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:geKzqOPi8kOyOKqXkteTVw", callContext.id);
// WebAuth = CreateAuth0Client.webAuth
outVars.value.webAuthOut = createAuth0ClientJSResult.value.webAuthOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:aDi3znUBQ0mTTvZR7AJU5Q", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:z3JOgXqWGU+LJStlfb9kFA", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:z3JOgXqWGU+LJStlfb9kFA", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.InitWebAuth$vars", [{
name: "Domain",
attrName: "domainInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ClientId",
attrName: "clientIdInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "RedirectUri",
attrName: "redirectUriInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.InitWebAuth$createAuth0ClientJSResult", [{
name: "webAuth",
attrName: "webAuthOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.InitWebAuth$outVars", [{
name: "WebAuth",
attrName: "webAuthOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Object,
defaultValue: function () {
return null;
}
}]);
Auth_EuropeController.default.clientActionProxies.initWebAuth$Action = function (domainIn, clientIdIn, redirectUriIn) {
domainIn = (domainIn === undefined) ? "" : domainIn;
clientIdIn = (clientIdIn === undefined) ? "" : clientIdIn;
redirectUriIn = (redirectUriIn === undefined) ? "" : redirectUriIn;
return controller.executeActionInsideJSNode(Auth_EuropeController.default.initWebAuth$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(domainIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(clientIdIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(redirectUriIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
WebAuth: OS.DataConversion.JSNodeParamConverter.to(actionResults.webAuthOut, OS.DataTypes.DataTypes.Object)
};
});
};
});
define("Auth_Europe.controller$InitWebAuth.CreateAuth0ClientJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
var webAuth = window.webAuth;
if(webAuth == null) {
    webAuth = new auth0.WebAuth({
        clientID: $parameters.clientId,
        domain: $parameters.domain,
        redirectUri: $parameters.redirectUri,
        responseType: 'token id_token'
    });
    window.webAuth = webAuth;
    $parameters.webAuth = webAuth;
    $resolve();
} else {
    $parameters.webAuth = webAuth;   
    $resolve();
}
});
};
});

define("Auth_Europe.controller$IsAuthenticated", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$IsAuthenticated.CheckIfAuthenticatedJS", "Auth_Europe.controller$GetWebAuth", "Auth_Europe.model$AccessInfoRec"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_IsAuthenticated_CheckIfAuthenticatedJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.isAuthenticated$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var allExceptionsVar = new OS.DataTypes.VariableHolder(new OS.DataTypes.ErrorHandlerOutputType());
var getWebAuthVar = new OS.DataTypes.VariableHolder();
var checkIfAuthenticatedJSResult = new OS.DataTypes.VariableHolder();
var accessInfoJSONVar = new OS.DataTypes.VariableHolder(new (OS.Controller.BaseController.getJSONDeserializeOutputType(Auth_EuropeModel.AccessInfoRec))());
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.IsAuthenticated$outVars"))());
varBag.callContext = callContext;
varBag.allExceptionsVar = allExceptionsVar;
varBag.getWebAuthVar = getWebAuthVar;
varBag.checkIfAuthenticatedJSResult = checkIfAuthenticatedJSResult;
varBag.accessInfoJSONVar = accessInfoJSONVar;
varBag.outVars = outVars;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:_MPOhmTtnE6rL+EILmtXYw:/ClientActionFlows._MPOhmTtnE6rL+EILmtXYw:iv55rZMggS1D+FHeOKajog", "Auth_Europe", "IsAuthenticated", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:uCH8Goo9c06JQvgFSoClyQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:2jml+axBC0247yPETxe70g", callContext.id);
// Execute Action: GetWebAuth
return Auth_EuropeController.default.getWebAuth$Action(callContext).then(function (value) {
getWebAuthVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:ParF78BM90KqW1bGg2rPsA", callContext.id);
return controller.safeExecuteAsyncJSNode(Auth_Europe_controller_IsAuthenticated_CheckIfAuthenticatedJS, "CheckIfAuthenticated", "IsAuthenticated", {
webAuth: OS.DataConversion.JSNodeParamConverter.to(getWebAuthVar.value.webAuthOut, OS.DataTypes.DataTypes.Object),
isAuthenticated: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
accessInfo: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Auth_Europe.IsAuthenticated$checkIfAuthenticatedJSResult"))();
jsNodeResult.isAuthenticatedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isAuthenticated, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.accessInfoOut = OS.DataConversion.JSNodeParamConverter.from($parameters.accessInfo, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
checkIfAuthenticatedJSResult.value = results;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:yDHQ_aGUg0iQ3y9haMiweQ", callContext.id);
// IsAuthenticated = CheckIfAuthenticated.isAuthenticated
outVars.value.isAuthenticatedOut = checkIfAuthenticatedJSResult.value.isAuthenticatedOut;
}).then(function () {
// HasAccessInfo
if((OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:+jdJZ9UJ9kuDWiXMGtNAXg", callContext.id) && (outVars.value.isAuthenticatedOut && ((checkIfAuthenticatedJSResult.value.accessInfoOut) !== (""))))) {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:PsaDGMlzzE2XvXA+btqhDg", callContext.id);
// JSON Deserialize: AccessInfoJSON
accessInfoJSONVar.value.dataOut = OS.JSONUtils.deserializeFromJSON(checkIfAuthenticatedJSResult.value.accessInfoOut, Auth_EuropeModel.AccessInfoRec, false);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:Pine_Q8adk6TLDs1WMpYpg", callContext.id);
// AccessInfo = AccessInfoJSON.Data
outVars.value.accessInfoOut = accessInfoJSONVar.value.dataOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:NoHDuObf+0+VMFRRrwvuqA", callContext.id);
} else {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:NoHDuObf+0+VMFRRrwvuqA", callContext.id);
}

});
}).catch(function (ex) {
OS.Logger.trace("IsAuthenticated.IsAuthenticated", OS.Exceptions.getMessage(ex), ex.name);
// Handle Error: AllExceptions
if(!(OS.Exceptions.isSystem(ex))) {
OS.Logger.error(null, ex);
allExceptionsVar.value.exceptionMessageAttr = OS.Exceptions.getMessage(ex);
OutSystemsDebugger.handleException(allExceptionsVar.value.exceptionMessageAttr, callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:xe+JEwEGHEGIMjbF1mFNwg", callContext.id);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:PZmGBLjVt0GqJSmEfGxgDQ", callContext.id);
// IsAuthenticated = False
outVars.value.isAuthenticatedOut = false;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:1Yo5Q3DjGkewApY6QTJSJA", callContext.id);
return OS.Flow.returnAsync(outVars.value);

});
}

throw ex;
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:_MPOhmTtnE6rL+EILmtXYw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:_MPOhmTtnE6rL+EILmtXYw", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.IsAuthenticated$checkIfAuthenticatedJSResult", [{
name: "isAuthenticated",
attrName: "isAuthenticatedOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "accessInfo",
attrName: "accessInfoOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.IsAuthenticated$outVars", [{
name: "IsAuthenticated",
attrName: "isAuthenticatedOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "AccessInfo",
attrName: "accessInfoOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Record,
defaultValue: function () {
return new Auth_EuropeModel.AccessInfoRec();
},
complexType: Auth_EuropeModel.AccessInfoRec
}]);
Auth_EuropeController.default.clientActionProxies.isAuthenticated$Action = function () {
return controller.executeActionInsideJSNode(Auth_EuropeController.default.isAuthenticated$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAuthenticated: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAuthenticatedOut, OS.DataTypes.DataTypes.Boolean),
AccessInfo: actionResults.accessInfoOut
};
});
};
});
define("Auth_Europe.controller$IsAuthenticated.CheckIfAuthenticatedJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
if ($parameters.webAuth == null) {
    $parameters.isAuthenticated = false;
    $resolve();
} else {
    $parameters.webAuth.checkSession({}, function(err, authResult) {
        if (!err) {
            $parameters.isAuthenticated = true;
            if (authResult.idTokenPayload) {
                let accessInfo = Object.fromEntries(Object.entries(authResult.idTokenPayload).map(([key, value]) => [key.replace('https://taxfree.planetpayment.com/', ''), value]));
                if (accessInfo) {
                    $parameters.accessInfo = JSON.stringify(accessInfo);
                }
            }
        } else {
            $parameters.isAuthenticated = false;
        }
        $resolve();
    });
}
});
};
});

define("Auth_Europe.controller$JwtToJson", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$JwtToJson.JwtToJsonJS", "Auth_Europe.controller$GetParseJwtJSFunction"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_JwtToJson_JwtToJsonJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.jwtToJson$Action = function (tokenIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.JwtToJson$vars"))());
vars.value.tokenInLocal = tokenIn;
var getParseJwtJSFunctionVar = new OS.DataTypes.VariableHolder();
var jwtToJsonJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.JwtToJson$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getParseJwtJSFunctionVar = getParseJwtJSFunctionVar;
varBag.jwtToJsonJSResult = jwtToJsonJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:ww_ZFsqogEKB8RpCy8Ckzg:/ClientActionFlows.ww_ZFsqogEKB8RpCy8Ckzg:wsKcriVUR6dzsYQuzScndw", "Auth_Europe", "JwtToJson", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:OUAqmHK34ECBF433a4RrdQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:qPyqEfZ95UiemULQsmdUlw", callContext.id);
// Execute Action: GetParseJwtJSFunction
return Auth_EuropeController.default.getParseJwtJSFunction$Action(callContext).then(function (value) {
getParseJwtJSFunctionVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:ZUO2u092RUORTz3O44_7Mg", callContext.id);
return controller.safeExecuteAsyncJSNode(Auth_Europe_controller_JwtToJson_JwtToJsonJS, "JwtToJson", "JwtToJson", {
token: OS.DataConversion.JSNodeParamConverter.to(vars.value.tokenInLocal, OS.DataTypes.DataTypes.Text),
parseJwtJSFunction: OS.DataConversion.JSNodeParamConverter.to(getParseJwtJSFunctionVar.value.partseJwtJSFunctionOut, OS.DataTypes.DataTypes.Object),
json: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Auth_Europe.JwtToJson$jwtToJsonJSResult"))();
jsNodeResult.jsonOut = OS.DataConversion.JSNodeParamConverter.from($parameters.json, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
jwtToJsonJSResult.value = results;
});
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:5yqyFHo9vkGfvC8DZYfXxg", callContext.id);
// Json = JwtToJson.json
outVars.value.jsonOut = jwtToJsonJSResult.value.jsonOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:5utSczK5bk2cH_gpLa_9xA", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:ww_ZFsqogEKB8RpCy8Ckzg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:ww_ZFsqogEKB8RpCy8Ckzg", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.JwtToJson$vars", [{
name: "Token",
attrName: "tokenInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.JwtToJson$jwtToJsonJSResult", [{
name: "json",
attrName: "jsonOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.JwtToJson$outVars", [{
name: "Json",
attrName: "jsonOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.clientActionProxies.jwtToJson$Action = function (tokenIn) {
tokenIn = (tokenIn === undefined) ? "" : tokenIn;
return controller.executeActionInsideJSNode(Auth_EuropeController.default.jwtToJson$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(tokenIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Json: OS.DataConversion.JSNodeParamConverter.to(actionResults.jsonOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Auth_Europe.controller$JwtToJson.JwtToJsonJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
$parameters.json = $parameters.parseJwtJSFunction($parameters.token);
$resolve();
});
};
});

define("Auth_Europe.controller$Login", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$Login.LoginJS", "Auth_Europe.controller$GetWebAuth"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_Login_LoginJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.login$Action = function (callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var getWebAuthVar = new OS.DataTypes.VariableHolder();
varBag.callContext = callContext;
varBag.getWebAuthVar = getWebAuthVar;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:UGaSpw98XEezr94cs3M5lg:/ClientActionFlows.UGaSpw98XEezr94cs3M5lg:BQjnKeRQRudyKWstzrsI+w", "Auth_Europe", "Login", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:mbxK2RettkKKy+2qTtjUiQ", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:j5TsfHN93EKNEqrebFiMlQ", callContext.id);
// Execute Action: GetWebAuth
return Auth_EuropeController.default.getWebAuth$Action(callContext).then(function (value) {
getWebAuthVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:Biv42mXMn0Se8FBGM_WeUQ", callContext.id);
controller.safeExecuteJSNode(Auth_Europe_controller_Login_LoginJS, "Login", "Login", {
webAuth: OS.DataConversion.JSNodeParamConverter.to(getWebAuthVar.value.webAuthOut, OS.DataTypes.DataTypes.Object)
}, function ($parameters) {
}, {}, {});
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:Vtm6yyfhk0eqnTC_c+4eWg", callContext.id);
});
}).then(function () {
return ;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:UGaSpw98XEezr94cs3M5lg", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:UGaSpw98XEezr94cs3M5lg", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.clientActionProxies.login$Action = function () {
return controller.executeActionInsideJSNode(Auth_EuropeController.default.login$Action.bind(controller), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {};
});
};
});
define("Auth_Europe.controller$Login.LoginJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
$parameters.webAuth.authorize({
    authorizationParams: {
      redirect_uri: window.location.origin,
      scope: 'openid profile email'
    }
});
};
});

define("Auth_Europe.controller$SendCode", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$SendCode.SendCodeJS", "Auth_Europe.controller$GetWebAuth"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_SendCode_SendCodeJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.sendCode$Action = function (usernameIn, isEmailIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.SendCode$vars"))());
vars.value.usernameInLocal = usernameIn;
vars.value.isEmailInLocal = isEmailIn;
var getWebAuthVar = new OS.DataTypes.VariableHolder();
var sendCodeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.SendCode$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getWebAuthVar = getWebAuthVar;
varBag.sendCodeJSResult = sendCodeJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:ck31FylIsk6fsvihR4Xg7A:/ClientActionFlows.ck31FylIsk6fsvihR4Xg7A:+twlCe7+7ziuX48AuzNXHQ", "Auth_Europe", "SendCode", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:5eWBmcq9DUGLR17J8isCBA", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:qjB4IBS5_ECpYF_2mNYikg", callContext.id);
// Execute Action: GetWebAuth
return Auth_EuropeController.default.getWebAuth$Action(callContext).then(function (value) {
getWebAuthVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:K8bNoQTaS02z290YNxtGUw", callContext.id);
return controller.safeExecuteAsyncJSNode(Auth_Europe_controller_SendCode_SendCodeJS, "SendCode", "SendCode", {
webAuth: OS.DataConversion.JSNodeParamConverter.to(getWebAuthVar.value.webAuthOut, OS.DataTypes.DataTypes.Object),
username: OS.DataConversion.JSNodeParamConverter.to(vars.value.usernameInLocal, OS.DataTypes.DataTypes.Text),
isEmail: OS.DataConversion.JSNodeParamConverter.to(vars.value.isEmailInLocal, OS.DataTypes.DataTypes.Boolean),
Success: OS.DataConversion.JSNodeParamConverter.to(true, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text),
ErrorDescription: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Auth_Europe.SendCode$sendCodeJSResult"))();
jsNodeResult.successOut = OS.DataConversion.JSNodeParamConverter.from($parameters.Success, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorCodeOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorCode, OS.DataTypes.DataTypes.Text);
jsNodeResult.errorDescriptionOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorDescription, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
sendCodeJSResult.value = results;
});
}).then(function () {
// Output
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:W9p_QmuvVU2fmlTrsagdmw", callContext.id);
// Success = SendCode.Success
outVars.value.successOut = sendCodeJSResult.value.successOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:W9p_QmuvVU2fmlTrsagdmw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorCode = SendCode.ErrorCode
outVars.value.errorCodeOut = sendCodeJSResult.value.errorCodeOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:W9p_QmuvVU2fmlTrsagdmw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "3");
// ErrorDescription = SendCode.ErrorDescription
outVars.value.errorDescriptionOut = sendCodeJSResult.value.errorDescriptionOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:4dBxCBDIBUGz_UFM5wcxzw", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:ck31FylIsk6fsvihR4Xg7A", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:ck31FylIsk6fsvihR4Xg7A", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.SendCode$vars", [{
name: "Username",
attrName: "usernameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsEmail",
attrName: "isEmailInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.SendCode$sendCodeJSResult", [{
name: "Success",
attrName: "successOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return true;
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorDescription",
attrName: "errorDescriptionOut",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.SendCode$outVars", [{
name: "Success",
attrName: "successOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "ErrorCode",
attrName: "errorCodeOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "ErrorDescription",
attrName: "errorDescriptionOut",
mandatory: false,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.clientActionProxies.sendCode$Action = function (usernameIn, isEmailIn) {
usernameIn = (usernameIn === undefined) ? "" : usernameIn;
isEmailIn = (isEmailIn === undefined) ? false : isEmailIn;
return controller.executeActionInsideJSNode(Auth_EuropeController.default.sendCode$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(usernameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isEmailIn, OS.DataTypes.DataTypes.Boolean)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
Success: OS.DataConversion.JSNodeParamConverter.to(actionResults.successOut, OS.DataTypes.DataTypes.Boolean),
ErrorCode: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorCodeOut, OS.DataTypes.DataTypes.Text),
ErrorDescription: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorDescriptionOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Auth_Europe.controller$SendCode.SendCodeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
if ($parameters.isEmail) {
    $parameters.webAuth.passwordlessStart({
        connection: 'email',
        send: 'code',
        email: $parameters.username,
    }, function (err, res) {
        // handle errors or continue
        if (err) {
            // Store error message in output parameter
            $parameters.ErrorCode = err.code; 
            $parameters.ErrorDescription = err.description; 
            $parameters.Success = false; // Set success flag to false
        } else {
            $parameters.Success = true; // Set success flag to true
        }
        $resolve();
    });
} else {
    $parameters.webAuth.passwordlessStart({
        connection: 'sms',
        send: 'code',
        phoneNumber: $parameters.username,
    }, function (err, res) {
        // handle errors or continue
        if (err) {
            // Store error message in output parameter
            $parameters.ErrorCode = err.code; 
            $parameters.ErrorDescription = err.description; 
            $parameters.Success = false; // Set success flag to false
        } else {
            $parameters.Success = true; // Set success flag to true
        }
        $resolve();
    });
}
});
};
});

define("Auth_Europe.controller$VerifyCode", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller", "Auth_Europe.controller$VerifyCode.SendCodeJS", "Auth_Europe.controller$GetWebAuth"], function (exports, OutSystems, Auth_EuropeModel, Auth_EuropeController, Auth_Europe_controller_VerifyCode_SendCodeJS) {
var OS = OutSystems.Internal;
Auth_EuropeController.default.verifyCode$Action = function (usernameIn, isEmailIn, codeIn, callContext) {
var varBag = {};
callContext = controller.callContext(callContext);
var vars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.VerifyCode$vars"))());
vars.value.usernameInLocal = usernameIn;
vars.value.isEmailInLocal = isEmailIn;
vars.value.codeInLocal = codeIn;
var getWebAuthVar = new OS.DataTypes.VariableHolder();
var sendCodeJSResult = new OS.DataTypes.VariableHolder();
var outVars = new OS.DataTypes.VariableHolder(new (controller.constructor.getVariableGroupType("Auth_Europe.VerifyCode$outVars"))());
varBag.callContext = callContext;
varBag.vars = vars;
varBag.getWebAuthVar = getWebAuthVar;
varBag.sendCodeJSResult = sendCodeJSResult;
varBag.outVars = outVars;
OutSystemsDebugger.push("4Ze9supo_kSeSyO4uk3GiQ:sinjZFp5_0SzGfnxRtEZiw:/ClientActionFlows.sinjZFp5_0SzGfnxRtEZiw:pxiBJWC9Sr0ATPb4CJXgiA", "Auth_Europe", "VerifyCode", "NRFlows.ClientActionFlow", callContext.id, varBag);
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:1liDzvtSbEuLpLWcMPDzVw", callContext.id);
return OS.Flow.executeAsyncFlow(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:vB11RAAYqkecQd_NheLgwg", callContext.id);
// Execute Action: GetWebAuth
return Auth_EuropeController.default.getWebAuth$Action(callContext).then(function (value) {
getWebAuthVar.value = value;
}).then(function () {
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:hgVDzw9EVkGvVLs07hNLfQ", callContext.id);
return controller.safeExecuteAsyncJSNode(Auth_Europe_controller_VerifyCode_SendCodeJS, "SendCode", "VerifyCode", {
webAuth: OS.DataConversion.JSNodeParamConverter.to(getWebAuthVar.value.webAuthOut, OS.DataTypes.DataTypes.Object),
username: OS.DataConversion.JSNodeParamConverter.to(vars.value.usernameInLocal, OS.DataTypes.DataTypes.Text),
code: OS.DataConversion.JSNodeParamConverter.to(vars.value.codeInLocal, OS.DataTypes.DataTypes.Text),
isEmail: OS.DataConversion.JSNodeParamConverter.to(vars.value.isEmailInLocal, OS.DataTypes.DataTypes.Boolean),
isAuthenticated: OS.DataConversion.JSNodeParamConverter.to(false, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to("", OS.DataTypes.DataTypes.Text)
}, function ($parameters) {
var jsNodeResult = new (controller.constructor.getVariableGroupType("Auth_Europe.VerifyCode$sendCodeJSResult"))();
jsNodeResult.isAuthenticatedOut = OS.DataConversion.JSNodeParamConverter.from($parameters.isAuthenticated, OS.DataTypes.DataTypes.Boolean);
jsNodeResult.errorMessageOut = OS.DataConversion.JSNodeParamConverter.from($parameters.ErrorMessage, OS.DataTypes.DataTypes.Text);
return jsNodeResult;
}, {}, {}).then(function (results) {
sendCodeJSResult.value = results;
});
}).then(function () {
// SetOutputs
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:vhlF9LLeqEaU0XY6LwQgnw", callContext.id);
// IsAuthenticated = SendCode.isAuthenticated
outVars.value.isAuthenticatedOut = sendCodeJSResult.value.isAuthenticatedOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:vhlF9LLeqEaU0XY6LwQgnw", callContext.id, OutSystemsDebugger.BreakpointType.BetweenAssignments, "2");
// ErrorMessage = SendCode.ErrorMessage
outVars.value.errorMessageOut = sendCodeJSResult.value.errorMessageOut;
OutSystemsDebugger.handleBreakpoint("4Ze9supo_kSeSyO4uk3GiQ:KwNFeQgycUWxuX9sBH2MWg", callContext.id);
});
}).then(function () {
return outVars.value;
}).then(function (res) {
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:sinjZFp5_0SzGfnxRtEZiw", callContext.id);
return res;

}).catch(function (ex) {
OutSystemsDebugger.handleException(ex, callContext.id);
OutSystemsDebugger.pop("4Ze9supo_kSeSyO4uk3GiQ:sinjZFp5_0SzGfnxRtEZiw", callContext.id);
throw ex;

});
};
var controller = Auth_EuropeController.default;
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.VerifyCode$vars", [{
name: "Username",
attrName: "usernameInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}, {
name: "IsEmail",
attrName: "isEmailInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Boolean,
defaultValue: function () {
return false;
}
}, {
name: "Code",
attrName: "codeInLocal",
mandatory: true,
dataType: OS.DataTypes.DataTypes.Text,
defaultValue: function () {
return "";
}
}]);
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.VerifyCode$sendCodeJSResult", [{
name: "isAuthenticated",
attrName: "isAuthenticatedOut",
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
Auth_EuropeController.default.constructor.registerVariableGroupType("Auth_Europe.VerifyCode$outVars", [{
name: "IsAuthenticated",
attrName: "isAuthenticatedOut",
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
Auth_EuropeController.default.clientActionProxies.verifyCode$Action = function (usernameIn, isEmailIn, codeIn) {
usernameIn = (usernameIn === undefined) ? "" : usernameIn;
isEmailIn = (isEmailIn === undefined) ? false : isEmailIn;
codeIn = (codeIn === undefined) ? "" : codeIn;
return controller.executeActionInsideJSNode(Auth_EuropeController.default.verifyCode$Action.bind(controller, OS.DataConversion.JSNodeParamConverter.from(usernameIn, OS.DataTypes.DataTypes.Text), OS.DataConversion.JSNodeParamConverter.from(isEmailIn, OS.DataTypes.DataTypes.Boolean), OS.DataConversion.JSNodeParamConverter.from(codeIn, OS.DataTypes.DataTypes.Text)), OS.Controller.BaseViewController.activeScreen ? OS.Controller.BaseViewController.activeScreen.callContext() : undefined, function (actionResults) {
return {
IsAuthenticated: OS.DataConversion.JSNodeParamConverter.to(actionResults.isAuthenticatedOut, OS.DataTypes.DataTypes.Boolean),
ErrorMessage: OS.DataConversion.JSNodeParamConverter.to(actionResults.errorMessageOut, OS.DataTypes.DataTypes.Text)
};
});
};
});
define("Auth_Europe.controller$VerifyCode.SendCodeJS", [], function () {
return function ($parameters, $actions, $roles, $public) {
return new Promise(function ($resolve, $reject) {
if($parameters.isEmail) {
    $parameters.webAuth.passwordlessLogin({
        connection: 'email',
        email: $parameters.username,
        verificationCode: $parameters.code
    }, function (err,res) {
        if (err)
        {
            $parameters.ErrorMessage = err.error_description
            $parameters.isAuthenticated = false;
            $resolve();
        }
        else
        {
            $parameters.isAuthenticated = true;
            $resolve();
        }    
    });
} else {
    $parameters.webAuth.passwordlessLogin({
        connection: 'sms',
        phoneNumber: $parameters.username,
        verificationCode: $parameters.code
    }, function (err,res) {
        if (err)
        {
            $parameters.ErrorMessage = err.error_description
            $parameters.isAuthenticated = false;
            $resolve();
        }
        else
        {
            $parameters.isAuthenticated = true;
            $resolve();
        }    
    });
}
});
};
});

define("Auth_Europe.controller", ["exports", "OutSystems/ClientRuntime/Main", "Auth_Europe.model", "Auth_Europe.controller$debugger"], function (exports, OutSystems, Auth_EuropeModel, Auth_Europe_Controller_debugger) {
var OS = OutSystems.Internal;
var Auth_EuropeController = exports;
var Controller = (function (_super) {
__extends(Controller, _super);
function Controller() {
_super.apply(this, arguments);
}
Controller.prototype.clientActionProxies = {};
Controller.prototype.roles = {};
Controller.prototype.defaultTimeout = 10;
Controller.prototype.getDefaultTimeout = function () {
return Auth_EuropeController.default.defaultTimeout;
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
Auth_EuropeController.default = new Controller(null, "Auth_Europe");
});
define("Auth_Europe.controller$debugger", ["exports", "OutSystems/ClientRuntime/Debugger", "OutSystems/ClientRuntime/Main"], function (exports, Debugger, OutSystems) {
var OS = OutSystems.Internal;
var metaInfo = {
"5Mw0U+r4Ek+ruHjrKjf3sA": {
getter: function (varBag, idService) {
return varBag.outVars.value.partseJwtJSFunctionOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"W_ZJhSm7I0y5pEPWaSAq0w": {
getter: function (varBag, idService) {
return varBag.getParseJwtFunctionJSResult.value;
}
},
"wRy2vOqlSE+WkvJxW_aK5w": {
getter: function (varBag, idService) {
return varBag.vars.value.tokenInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"XJ8g2UvS_UWv+2Np_O+npw": {
getter: function (varBag, idService) {
return varBag.outVars.value.jsonOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qPyqEfZ95UiemULQsmdUlw": {
getter: function (varBag, idService) {
return varBag.getParseJwtJSFunctionVar.value;
}
},
"ZUO2u092RUORTz3O44_7Mg": {
getter: function (varBag, idService) {
return varBag.jwtToJsonJSResult.value;
}
},
"LFrMwXkiHEiyXWbr0xvMPg": {
getter: function (varBag, idService) {
return varBag.vars.value.usernameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"taWvJA5_tUeCOhXxo43FyA": {
getter: function (varBag, idService) {
return varBag.vars.value.isEmailInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"IwdSC+UMikebesc7tbNyog": {
getter: function (varBag, idService) {
return varBag.outVars.value.successOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"cndZ50tBAkqtxgf93xBGgw": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorCodeOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"w8fulKhBvU+i1ssXYdjDSg": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorDescriptionOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"qjB4IBS5_ECpYF_2mNYikg": {
getter: function (varBag, idService) {
return varBag.getWebAuthVar.value;
}
},
"K8bNoQTaS02z290YNxtGUw": {
getter: function (varBag, idService) {
return varBag.sendCodeJSResult.value;
}
},
"VFCHwKX8DkKYDTAAwuXDcg": {
getter: function (varBag, idService) {
return varBag.vars.value.returnToUrlInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"omgUZkvt_U6t1Jq1Z4KQYg": {
getter: function (varBag, idService) {
return varBag.getWebAuthVar.value;
}
},
"HrBAtyPvr0a6XRontYkbFQ": {
getter: function (varBag, idService) {
return varBag.javaScriptJSResult.value;
}
},
"b4dV+Pw6G0aIdXu+sTY5Tg": {
getter: function (varBag, idService) {
return varBag.vars.value.usernameInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"4_n_+QTrgUiSMJiM8_xsAQ": {
getter: function (varBag, idService) {
return varBag.vars.value.isEmailInLocal;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"jyN7hGnOf0u9rasxHDS1gA": {
getter: function (varBag, idService) {
return varBag.vars.value.codeInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"3idQbr_zuEer87NCJ_FYJA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAuthenticatedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"qxRy67dQHkSEGDX_xN5Z9w": {
getter: function (varBag, idService) {
return varBag.outVars.value.errorMessageOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"vB11RAAYqkecQd_NheLgwg": {
getter: function (varBag, idService) {
return varBag.getWebAuthVar.value;
}
},
"hgVDzw9EVkGvVLs07hNLfQ": {
getter: function (varBag, idService) {
return varBag.sendCodeJSResult.value;
}
},
"SwKoNEguH0a793ZKW5GO0A": {
getter: function (varBag, idService) {
return varBag.vars.value.domainInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"h2dqf_vrlk2s5WJgF0XV8w": {
getter: function (varBag, idService) {
return varBag.vars.value.clientIdInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"h35ozlybr0qHdsEYjRWDeg": {
getter: function (varBag, idService) {
return varBag.vars.value.redirectUriInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"uzERgKfQv0OBr3CNBi4brg": {
getter: function (varBag, idService) {
return varBag.outVars.value.webAuthOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Z5KwPWsvdUOqwOo08izVTw": {
getter: function (varBag, idService) {
return varBag.createAuth0ClientJSResult.value;
}
},
"doDb4+QLVU2vfi73BbMjqQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAuthenticatedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"KwWMm5r7MUmfh7TeSjxQaA": {
getter: function (varBag, idService) {
return varBag.outVars.value.accessInfoOut;
}
},
"xe+JEwEGHEGIMjbF1mFNwg": {
getter: function (varBag, idService) {
return varBag.allExceptionsVar.value;
}
},
"2jml+axBC0247yPETxe70g": {
getter: function (varBag, idService) {
return varBag.getWebAuthVar.value;
}
},
"PsaDGMlzzE2XvXA+btqhDg": {
getter: function (varBag, idService) {
return varBag.accessInfoJSONVar.value;
}
},
"ParF78BM90KqW1bGg2rPsA": {
getter: function (varBag, idService) {
return varBag.checkIfAuthenticatedJSResult.value;
}
},
"j5TsfHN93EKNEqrebFiMlQ": {
getter: function (varBag, idService) {
return varBag.getWebAuthVar.value;
}
},
"Biv42mXMn0Se8FBGM_WeUQ": {
getter: function (varBag, idService) {
return varBag.loginJSResult.value;
}
},
"9pQZTLv9R0SzXJeKm2HmRA": {
getter: function (varBag, idService) {
return varBag.outVars.value.isAuthenticatedOut;
},
dataType: OS.DataTypes.DataTypes.Boolean
},
"zHPrMqDgXEqQfhxN4uwU5Q": {
getter: function (varBag, idService) {
return varBag.outVars.value.userFullNameOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"wPzvlNolT0C7pcDMTW0XZA": {
getter: function (varBag, idService) {
return varBag.getWebAuthVar.value;
}
},
"7jkLco6QU0ujGv22m3WDZw": {
getter: function (varBag, idService) {
return varBag.authenticationHandlerJSResult.value;
}
},
"6SjZwLBgXE+nazo13I3wOQ": {
getter: function (varBag, idService) {
return varBag.vars.value.audienceInLocal;
},
dataType: OS.DataTypes.DataTypes.Text
},
"c7A83njnskq1FE76S7d7xA": {
getter: function (varBag, idService) {
return varBag.outVars.value.accessTokenOut;
},
dataType: OS.DataTypes.DataTypes.Text
},
"D5QnKXCKzkudN49vZRo7Qw": {
getter: function (varBag, idService) {
return varBag.getWebAuthVar.value;
}
},
"6FYHOdGrV027V+ovn3afoQ": {
getter: function (varBag, idService) {
return varBag.getAccessTokenCacheVar.value;
}
},
"78d1hUjL0UqIZclFJ1X9Zw": {
getter: function (varBag, idService) {
return varBag.getParseJwtJSFunctionVar.value;
}
},
"xWiWP8Oqz0+3KxA_VQUOvQ": {
getter: function (varBag, idService) {
return varBag.getAccessTokenJSResult.value;
}
},
"5ennYR3tFEOFgOBqO1iEjQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.webAuthOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"Ek2i13g19k2uKaKDdtUAjw": {
getter: function (varBag, idService) {
return varBag.createAuth0ClientJSResult.value;
}
},
"GoiRnw6yWk2yTXKLkLX7qw": {
getter: function (varBag, idService) {
return varBag.isAuthenticatedVar.value;
}
},
"XQPnp7SGLUiygqW278y5rQ": {
getter: function (varBag, idService) {
return varBag.outVars.value.accessTokenCacheOut;
},
dataType: OS.DataTypes.DataTypes.Object
},
"YGqY2pKzFka2zEcP9HyRBQ": {
getter: function (varBag, idService) {
return varBag.getAccessTokenCacheJSResult.value;
}
}
};
OutSystemsDebugger.registerMetaInfo(metaInfo);
});
