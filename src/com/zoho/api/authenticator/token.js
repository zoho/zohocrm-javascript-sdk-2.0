/**
 * This class verifies and sets token to APIHTTPConnector instance.
 */
var Token = class {

    /**
     * This method to set authentication token to APIHTTPConnector instance.
     * @param {APIHTTPConnector} urlConnection A APIHTTPConnector class instance.
     */
    authenticate(urlConnection) {}
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
     */
    constructor(clientid, redirecturl, scope) {

        super();

        var error = {};

        if (typeof clientid !== Constants.STRING) {

            error[Constants.FIELD] = Constants.CLIENT_ID;

            error[Constants.EXPECTED_TYPE] = Constants.STRING;

            error[Constants.CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        if (typeof redirecturl !== Constants.STRING) {

            error[Constants.FIELD] = Constants.REDIRECT_URL;

            error[Constants.EXPECTED_TYPE] = Constants.STRING;

            error[Constants.CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        if (typeof scope !== Constants.STRING) {

            error[Constants.FIELD] = Constants.SCOPE;

            error[Constants.EXPECTED_TYPE] = Constants.STRING;

            error[Constants.CLASS] = OAuthToken.name;

            throw new SDKException(Constants.TOKEN_ERROR, null, error, null);
        }

        this._clientId = clientid;

        this._redirectUrl = redirecturl;

        this._accessToken = null;

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

            var oauth_token = await Initializer.store.getToken(this);

            if (oauth_token.getAccessToken() === null) {

                throw Constants.INVALID_CLIENT_ERROR;
            }

            var token = Constants.OAUTH_HEADER_PREFIX + oauth_token.getAccessToken();

            urlConnection.addHeader(Constants.AUTHORIZATION, token);
        }
        catch(err) {

            throw new SDKException(Constants.TOKEN_ERROR, Constants.GET_TOKEN_ERROR, null, err);
        }
    }
}