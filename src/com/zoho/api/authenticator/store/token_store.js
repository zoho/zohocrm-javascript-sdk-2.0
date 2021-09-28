var listener = 0;

var Store = class {
    getToken(token) { }
}

class TokenStore extends Store {
    async getToken(token) {

        if (token !== null && token.getAccessToken() !== null && token.getAccessToken() != undefined) {
            token.setAccessToken(token.getAccessToken());

            return token;
        }

        if (listener === 0) {
            window.addEventListener(Constants.STORAGE, function (reponse) {
                if (reponse.key === Constants.ACCESS_TOKEN && (reponse.oldValue !== reponse.newValue || reponse.oldValue === null)) {
                    location.reload();
                }

                if (reponse.key === Constants.ACCESS_TOKEN) {
                    sessionStorage.removeItem(Constants.AUTH_PROCESS);
                }
            }, false);

            listener = 1;

            if (sessionStorage.getItem(Constants.AUTH_PROCESS)) {
                sessionStorage.removeItem(Constants.AUTH_PROCESS);
            }
        }

        Constants.TOKEN_KEYS.forEach(function (k) {
            var isKeyExists = localStorage.hasOwnProperty(k);

            if (isKeyExists) {

                sessionStorage.setItem(k, localStorage[k]);
            }

            localStorage.removeItem(k);
        });

        var valueInStore = sessionStorage.getItem(Constants.ACCESS_TOKEN);

        var tokenInit = sessionStorage.getItem(Constants.TOKEN_INIT);

        if (tokenInit !== null && valueInStore !== null && Date.now() >= parseInt(tokenInit) + 59 * 60 * 1000) { // check after 59th minute

            valueInStore = null;

            sessionStorage.removeItem(Constants.ACCESS_TOKEN);
        }

        var auth_process = sessionStorage.getItem(Constants.AUTH_PROCESS);

        if ((valueInStore === null && auth_process === null) || (valueInStore === 'undefined' && (auth_process === null || auth_process === Constants.TRUE))) {
            var accountsUrl;

            var clientId;

            var scope;

            var redirectUrl;

            if (Initializer.environment !== null) {
                accountsUrl = Initializer.environment.getAccountsUrl();
            }

            if (token !== null && token.getClientId().length > 0) {
                clientId = token.getClientId();

                scope = token.getScope();

                redirectUrl = token.getRedirectUrl();
            }

            if (document.getElementById(Constants.ZES_CLIENT_SCOPE) !== null) {
                let accounts_url = document.getElementById(Constants.ZES_CLIENT_SCOPE).getAttribute(Constants.DATA_ACCOUNTS_URL);

                if (accounts_url !== null) {
                    if (!accounts_url.includes("/oauth/v2/auth")) {

                        accounts_url = accounts_url + "/oauth/v2/auth";
                    }

                    accountsUrl = accounts_url;
                }
            }

            var fullGrant = sessionStorage.getItem(Constants.FULL_GRANT);

            var grantedForSession = sessionStorage.getItem(Constants.GRANTED_FOR_SESSION);

            if (sessionStorage.getItem(Constants.TOKEN_INIT) !== null && ((fullGrant !== null && Constants.TRUE === fullGrant) || (grantedForSession !== null && Constants.TRUE === grantedForSession))) {
                accountsUrl += Constants.REFRESH_URL;
            }

            if (clientId && scope) {
                sessionStorage.setItem(Constants.TOKEN_INIT, Date.now());

                sessionStorage.removeItem(Constants.ACCESS_TOKEN);

                sessionStorage.setItem(Constants.AUTH_PROCESS, Constants.TRUE);

                window.open(accountsUrl + "?" + Constants.SCOPE + "=" + scope + "&" + Constants.CLIENT_ID + "=" + clientId + Constants.ACCOUNTS_URL + redirectUrl);

                Constants.TOKEN_KEYS.forEach(function (k) {
                    var isKeyExists = localStorage.hasOwnProperty(k);

                    if (isKeyExists) {
                        sessionStorage.setItem(k, localStorage[k]);
                    }

                    localStorage.removeItem(k);
                });

                valueInStore = sessionStorage.getItem(Constants.ACCESS_TOKEN);
            }
            else {
                throw new SDKException(Constants.TOKEN_STORE_ERROR, Constants.GET_TOKEN_ERROR, null, null);
            }
        }

        if (token !== null && valueInStore !== 'undefined') {
            token.setAccessToken(valueInStore);
        }

        return token;
    }

    revokeAccess() {
        sessionStorage.removeItem(Constants.CRM_ACCESS_TOKEN);
    }
}