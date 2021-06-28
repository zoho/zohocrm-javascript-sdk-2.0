var ZCRM = {};

/**
 * The class to initialize Zoho CRM SDK.
 */
var Initializer = {};

/**
 * This method to initialize the SDK.
 * @param {Environment} environment A Environment class instance containing the CRM API base URL and Accounts URL.
 * @param {SDKConfig} sdkConfig A SDKConfig class instance containing the configuration.
 * @param {Token} token A Token class instance containing the OAuth client application information.
 * @param {Logger} logger A Logger class instance containing the log file path and Logger type.
 * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties of the user.
 */
async function initializeSDK(environment, sdkConfig, token = null, logger = null, proxy=null) {

    var detailsJO = {};

    let store = new TokenStore();

    try {

        if (!(environment instanceof Environment)) {

            detailsJO.field = Constants.ENVIRONMENT;

            detailsJO.expected_type = Environment.name;

            throw new SDKException(Constants.INITIALIZATION_ERROR, null, detailsJO, null);
        }

        if(sdkConfig === null) {

            throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.SDK_CONFIG_ERROR_MESSAGE);
        }

        if (!(token instanceof Token) && document.getElementById(Constants.ZES_CLIENT_SCOPE) === null) {

            detailsJO.field = Constants.TOKEN;

            detailsJO.expected_type = Token.name;

            throw new SDKException(Constants.INITIALIZATION_ERROR, null, detailsJO, null);
        }

        if (logger === null) {

            logger = Logger.getInstance(Levels.INFO);
        }

        if(proxy != null && !(proxy instanceof RequestProxy)) {

            detailsJO.field = Constants.USER_PROXY;

            detailsJO.expected_type = RequestProxy.name;

            throw new SDKException(Constants.INITIALIZATION_ERROR, null, detailsJO, null);
        }

        if (token === null && document.getElementById(Constants.ZES_CLIENT_SCOPE) !== null) {

            let clientId = document.getElementById(Constants.ZES_CLIENT_SCOPE).getAttribute(Constants.DATA_CLIENT_ID);

            let scope = document.getElementById(Constants.ZES_CLIENT_SCOPE).getAttribute(Constants.DATA_SCOPE);

            var path = window.location.pathname;

            var redirect_url = window.location.origin;

            var pathSplit = path.split('/');

            var length = pathSplit.length;

            if(length > 0) {

                redirect_url += "/"
            }

            for (var i = 0; i < length - 2; i++) {

                if(pathSplit[i] !== "" && pathSplit[i].trim().length > 0 && !pathSplit[i].endsWith(".html")) {

                    redirect_url += pathSplit[i] + "/";
                }
            }

            if(location.hostname === Constants.HOSTADDRESS || location.hostname === Constants.LOCALHOST || location.hostname === "" ) {

                redirect_url += Constants.APP + "/";
            }

            if(!redirect_url.endsWith("/")){

                redirect_url += "/";
            }

            token = new OAuthToken(clientId, redirect_url + Constants.REDIRECT_FILE, scope);
        }

        SDKLogger.initialize(logger);

        Initializer.environment = environment;

        Initializer.store = store;

        Initializer.sdkConfig = sdkConfig;

        Initializer.token = token;

        Initializer.requestProxy = proxy;

        await Initializer.store.getToken(token);

        SDKLogger.log(Levels.INFO, Constants.INITIALIZATION_SUCCESSFUL.concat(environment.url).concat("."));
    }
    catch (e) {

        if(e instanceof SDKException) {

            throw e;
        }
        else {

            throw new SDKException(Constants.INITIALIZATION_EXCEPTION, e.toString());
        }
    }
}