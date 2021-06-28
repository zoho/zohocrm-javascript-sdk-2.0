class SDKInitializer {

    static async initializeSDK() {

        /*
		 * Create an instance of Logger Class that takes parameter
		 * 1 -> Level of the log messages to be logged. Can be configured by typing Levels "." and choose any level from the list displayed.
		 */
        let logger = Logger.getInstance(Levels.ALL);

        /*
		 * Configure the environment
		 * which is of the pattern Domain.Environment
		 * Available Domains: US, EU, IN, CN, AU
		 * Available Environments: PRODUCTION(), DEVELOPER(), SANDBOX()
		 */
        let environment = DataCenter.US.PRODUCTION();

        /*
		 * Create a Token instance
		 * 1 -> OAuth client id.
         * 2 -> OAuth redirect URL.
		 * 3 -> OAuth scope.
		 */
        let token = new OAuthToken("clientId", "http://127.0.0.1:5501/redirect.html", "ZohoCRM.users.ALL,ZohoCRM.bulk.read,ZohoCRM.bulk.ALL,ZohoCRM.settings.currencies.READ,ZohoCRM.settings.currencies.CREATE,ZohoCRM.settings.currencies.UPDATE,ZohoCRM.share.Leads.ALL,Aaaserver.profile.Read,ZohoCRM.modules.ALL,ZohoCRM.settings.ALL,ZohoCRM.org.ALL,profile.userphoto.READ,ZohoFiles.files.ALL,ZohoCRM.files.READ,ZohoCRM.files.CREATE,ZohoCRM.mass_update.Leads.UPDATE,ZohoCRM.mass_update.Leads.READ,ZohoCRM.settings.currencies.read,ZohoCRM.settings.currencies.create,ZohoCRM.settings.currencies.update,ZohoCRM.coql.READ,ZohoCRM.notifications.ALL");
        /*
        * autoRefreshFields
        * if true - all the modules' fields will be auto-refreshed in the background, every hour.
        * if false - the fields will not be auto-refreshed in the background. The user can manually delete the cache or refresh the fields using methods from ModuleFieldsHandler
        *
        * cacheStore
        * A boolean field that allows or disallows the storage of module field information in cache.
        * True - the SDK stores all the modules' field information in cache, and refreshes every hour, if autoRefreshFields is true.
        * False - the SDK temporarily stores the modules' field information in a Map.
        *
        * if cacheStore true
        * pickListValidation
        * A boolean field that validates user input for a pick list field and allows or disallows the addition of a new value to the list.
        * True - the SDK validates the input. If the value does not exist in the pick list, the SDK throws an error.
        * False - the SDK does not validate the input and makes the API request with the user’s input to the pick list
        *
        * timeout
        * representing the number of milliseconds a request can take before automatically being terminated.
        */
        let sdkConfig = new SDKConfigBuilder().setAutoRefreshFields(true).setCacheStore(true).setPickListValidation(false).build();

        let proxy  = new RequestProxy("127.0.0.1", 3128);
        /*
         * Call the static initialize method of Initializer class that takes the following arguments
         * 1 -> Environment instance
         * 2 -> SDKConfig instance
         * 3 -> Token instance
         * 4 -> Logger instance
         */
        await initializeSDK(environment, sdkConfig, token, logger, proxy);
    }
}