/**
Copyright (c) 2021, ZOHO CORPORATION PRIVATE LIMITED 
All rights reserved. 
 
   Licensed under the Apache License, Version 2.0 (the "License"); 
   you may not use this file except in compliance with the License. 
   You may obtain a copy of the License at 
 
       http://www.apache.org/licenses/LICENSE-2.0 
 
   Unless required by applicable law or agreed to in writing, software 
   distributed under the License is distributed on an "AS IS" BASIS, 
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
   See the License for the specific language governing permissions and 
   limitations under the License.
*/

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
async function initializeSDK(environment, sdkConfig, token = null, logger = null, proxy = null) {
    let store = new TokenStore();

    try {
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

            token = new OAuthBuilder()
            .clientId(clientId)
            .scope(scope)
            .redirectURL(redirect_url + Constants.REDIRECT_FILE)
            .build();
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