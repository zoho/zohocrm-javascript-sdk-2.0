/**
 * This class verifies and sets token to APIHTTPConnector instance.
 */
var Token = class {
    /**
     * This method to set authentication token to APIHTTPConnector instance.
     * @param {APIHTTPConnector} urlConnection A APIHTTPConnector class instance.
     */
    authenticate(urlConnection) { }
}

class OAuthBuilder {
    constructor() {
        this._clientId = null;

        this._redirectUrl = null;
    
        this._scope = null;
    
        this._accessToken = null;
    }

    clientId(clientID) {
        Utility.assertNotNull(clientID, Constants.TOKEN_ERROR, Constants.CLIENT_ID_NULL_ERROR_MESSAGE);

        var error = {};

        if (typeof clientID !== Constants.STRING) {

            error[Constants.FIELD] = Constants.CLIENT_ID;

            error[Constants.EXPECTED_TYPE] = Constants.STRING;

            error[Constants.CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        this._clientId = clientID;

        return this;
    }

    redirectURL(redirectURL) {
        Utility.assertNotNull(redirectURL, Constants.TOKEN_ERROR, Constants.REDIRECT_URL_NULL_ERROR_MESSAGE);

        var error = {};

        if (redirectURL != null && typeof redirectURL !== Constants.STRING) {

            error[Constants.FIELD] = Constants.REDIRECT_URL;

            error[Constants.EXPECTED_TYPE] = Constants.STRING;

            error[Constants.CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        this._redirectURL = redirectURL;

        return this;
    }

    scope(scope) {
        Utility.assertNotNull(scope, Constants.TOKEN_ERROR, Constants.SCOPE_NULL_ERROR_MESSAGE);

        var error = {};

        if (typeof scope !== Constants.STRING) {

            error[Constants.FIELD] = Constants.SCOPE;

            error[Constants.EXPECTED_TYPE] = Constants.STRING;

            error[Constants.CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        this._scope = scope;

        return this;
    }

    accessToken(accessToken) {
        var error = {};
        
        if (typeof accessToken !== Constants.STRING) {

            error[Constants.FIELD] = Constants.ACCESS_TOKEN;

            error[Constants.EXPECTED_TYPE] = Constants.STRING;

            error[Constants.CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        this._accessToken = accessToken;

        return this;
    }

    build() {
        if (this._clientId == null && this._redirectUrl == null && this._scope == null && this._accessToken == null) {
            throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR, Constants.OAUTH_MANDATORY_KEYS);
        }

        return new OAuthToken(this._clientId, this._redirectURL, this._scope, this._accessToken);
    }
}


/**
 * This class gets the tokens and checks the expiry time.
 */
class OAuthToken extends Token {
    /**
     * Creates an OAuthToken class instance with the specified parameters.
     * @param {String} clientid A String containing the OAuth client id.
     * @param {String} redirecturl A String containing the OAuth redirect URL.
     * @param {String} scope A String containing the OAuth scope.
     * @param {String} accessToken A String containing the OAuth access token.
     */
    constructor(clientid, redirecturl, scope, accessToken = null) {
        super();

        this._clientId = clientid;

        this._redirectUrl = redirecturl;

        this._accessToken = accessToken;

        this._scope = scope;
    }

    /**
     * This is a getter method to get OAuth client id.
     * @returns A String representing the OAuth client id.
     */
    getClientId() {
        return this._clientId;
    }

    /**
     * This is a getter method to get OAuth redirect URL.
     * @returns A String representing the OAuth redirect URL.
     */
    getRedirectUrl() {
        return this._redirectUrl;
    }

    /**
     * This is a getter method to get access token.
     * @returns A String representing the access token.
     */
    getAccessToken() {
        return this._accessToken;
    }

    /**
     * This is a setter method to set access token.
     * @returns A String containing the access token.
     */
    setAccessToken(accessToken) {
        this._accessToken = accessToken;
    }

    /**
     * This is a getter method to get oauth scope.
     * @returns A String representing the oauth scope.
     */
    getScope() {
        return this._scope;
    }

    async authenticate(urlConnection) {
        try {
            super.authenticate(urlConnection);

            var token = this._accessToken;

            if(token == null || token == undefined) {
                var oauth_token = await Initializer.store.getToken(this);

                if (oauth_token.getAccessToken() === null) {
                    throw Constants.INVALID_CLIENT_ERROR;
                }

                token = oauth_token.getAccessToken();
            }

            urlConnection.addHeader(Constants.AUTHORIZATION, Constants.OAUTH_HEADER_PREFIX + token);
        }
        catch (err) {
            throw new SDKException(Constants.TOKEN_ERROR, Constants.GET_TOKEN_ERROR, null, err);
        }
    }
}