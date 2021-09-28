class InitializeBuilder {
    constructor() {
        this._environment = null;

        this._token = null;

        this._requestProxy = null;

        this._sdkConfig = null;

        this._logger = null;

        this.errorMessage = null;

        this.initializer = null;
    }

    initialize() {
        Utility.assertNotNull(this._environment, this.errorMessage, Constants.ENVIRONMENT_ERROR_MESSAGE);

        if (this._sdkConfig == null) {
            this._sdkConfig = new SDKConfigBuilder().autoRefreshFields(true).pickListValidation(false).build();
        }

        if (this._logger == null) {
            this._logger = Logger.getInstance(Levels.INFO);
        }

        initializeSDK(this._environment, this._sdkConfig, this._token, this._logger, this._requestProxy);
    }

    logger(logger) {
        this._logger = logger;

        return this;
    }

    token(token) {
        Utility.assertNotNull(token, this.errorMessage, Constants.TOKEN_ERROR_MESSAGE);

        if (!(token instanceof Token) && document.getElementById(Constants.ZES_CLIENT_SCOPE) === null) {

            detailsJO.field = Constants.TOKEN;

            detailsJO.expected_type = Token.name;

            throw new SDKException(Constants.INITIALIZATION_ERROR, null, detailsJO, null);
        }

        this._token = token;

        return this;
    }

    SDKConfig(sdkConfig) {
        Utility.assertNotNull(sdkConfig, this.errorMessage, Constants.SDK_CONFIG_ERROR_MESSAGE);

        if (!(sdkConfig instanceof SDKConfig)) {
            detailsJO.field = Constants.SDK_CONFIG;

            detailsJO.expected_type = SDKConfig.name;

            throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.INITIALIZATION_EXCEPTION, error);
        }

        this._sdkConfig = sdkConfig;

        return this;
    }

    requestProxy(requestProxy) {
        if (proxy != null && !(proxy instanceof RequestProxy)) {
            detailsJO.field = Constants.USER_PROXY;

            detailsJO.expected_type = RequestProxy.name;

            throw new SDKException(Constants.INITIALIZATION_ERROR, null, detailsJO, null);
        }

        this._requestProxy = requestProxy;

        return this;
    }

    environment(environment) {
        Utility.assertNotNull(environment, this.errorMessage, Constants.ENVIRONMENT_ERROR_MESSAGE);

        if (!(environment instanceof Environment)) {
            detailsJO.field = Constants.ENVIRONMENT;

            detailsJO.expected_type = Environment.name;

            throw new SDKException(Constants.INITIALIZATION_ERROR, null, detailsJO, null);
        }

        this._environment = environment;

        return this;
    }
}