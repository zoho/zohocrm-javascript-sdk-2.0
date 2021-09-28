/**
 * This module is to make HTTP connections, trigger the requests and receive the response.
 */
class APIHTTPConnector {
    constructor() {
        this._url = null;

        this._requestMethod = null;

        this._headers = new Map();

        this._parameters = new Map();

        this._requestBody = {};

        this._contentType = null;
    }

    /**
     * This is a getter method to get API request ContentType.
     * @returns {String} A String representing the API request ContentType.
     */
    getContentType() {
        return this._contentType;
    }

    /**
     * This is a setter method to set API request ContentType.
     * @param {String} A String containing the API request ContentType.
     */
    setContentType(contentType) {
        this._contentType = contentType;
    }


    /**
     * This is a setter method to set the API URL.
     * @param {String} url A String containing the API Request URL.
     */
    setUrl(url) {
        this._url = url;
    }

    /**
     * This is a setter method to set the API request method.
     * @param {String} httpMethod A String containing the API request method.
     */
    setRequestMethod(httpMethod) {
        this._requestMethod = httpMethod;
    }

    /**
     * This is a getter method to get API request headers.
     * @returns {Map} A Map representing the API request headers.
     */
    getHeaders() {
        return this._headers;
    }

    /**
     * This is a setter method to set API request headers.
     * @param {Map} A Map containing the API request headers.
     */
    setHeaders(headers) {
        this._headers = headers;
    }

    /**
     * This method to add API request header name and value.
     * @param {String} headerName A String containing the API request header name.
     * @param {String} headerValue A String containing the API request header value.
     */
    addHeader(headerName, headerValue) {
        this._headers.set(headerName, headerValue);
    }

    /**
     * This is a getter method to get API request parameters.
     * @returns {Map} A Map representing the API request parameters.
     */
    getParams() {
        return this._parameters;
    }

    /**
     * This is a setter method to set API request parameters.
     * @param Map A Map containing the API request parameters.
     */
    setParams(params) {
        this._parameters = params;
    }

    /**
     * This method to add API request param name and value.
     * @param {String} paramName A String containing the API request param name.
     * @param {String} paramValue A String containing the API request param value.
     */
    addParam(paramName, paramValue) {
        this._parameters.set(paramName, paramValue);
    }

    /**
     * This is a setter method to set the API request body.
     * @param {object} requestBody A Object containing the API request body.
     */
    setRequestBody(requestBody) {
        this._requestBody = requestBody;
    }

    /**
     * This is a setter method to set the API request body.
     */
    getRequestBody() {
        return this._requestBody;
    }

    /**
     * This method makes a Zoho CRM Rest API request.
     * @param {Converter} converterInstance A Converter class instance to call appendToRequest method.
     * @returns JSON A JSON representing the API response.
     */
    async fireRequest(converterInstance) {
        var apiHeaders = {};

        var modifiedRequestBody = "";

        if (this._contentType != null) {
            await this.setContentTypeHeader();
        }

        if (this._headers) {
            this._headers.forEach(function (value, key) {
                apiHeaders[key] = value;
            });
        }

        var baseUrl = this._url;

        if (this._parameters != null && this._parameters.size > 0) {
            baseUrl = await this.setQueryParams(this._parameters);
        }

        if (Array.from(Object.keys(this._requestBody)).length > 0) {
            modifiedRequestBody = await converterInstance.appendToRequest(this, null);
        }

        let proxy = {};

        if (Initializer.requestProxy != null) {
            proxy.host = Initializer.requestProxy.getHost();
            proxy.port = Initializer.requestProxy.getPort();
            SDKLogger.log(Levels.INFO, await this.proxyLog(Initializer.requestProxy));
        }

        var requestObj = {
            uri: baseUrl,
            method: this._requestMethod,
            headers: apiHeaders,
            body: modifiedRequestBody,
            encoding: Constants.ENCODING,
            requestProxy: proxy
        };

        SDKLogger.log(Levels.INFO, await this.toString());

        return await new APIHTTPConnector().makeAPICall(requestObj);
    }

    async makeAPICall(requestDetails) {
        return new Promise(function (resolve, reject) {
            var body, xhr, i;

            xhr = new XMLHttpRequest(requestDetails.requestProxy);

            if (!requestDetails.uri.includes(Constants.CONTENT_API) && !requestDetails.uri.includes(Constants.ZIP)) {
                xhr.withCredentials = true;
            }

            xhr.open(requestDetails.method, requestDetails.uri, true);

            xhr.responseType = Constants.ARRAY_BUFFER;

            for (i in requestDetails.headers) {
                xhr.setRequestHeader(i, requestDetails.headers[i]);
            }

            body = requestDetails.body || null;

            xhr.timeout = Initializer.sdkConfig.getTimeout();

            xhr.send(body);

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    resolve(xhr);
                }
            }

            xhr.ontimeout = function () {
                SDKLogger.log(Levels.ERROR, Constants.TIME_OUT);
            }
        })
    }

    async setQueryParams(parameters) {
        var params;

        parameters.forEach(function (value, key) {
            if (parameters.has(key)) {
                if (params) {
                    params = params + key + '=' + encodeURI(value) + '&';
                }
                else {
                    params = key + '=' + encodeURI(value) + '&';
                }
            }
        });

        return this._url + '?' + params.substring(0, params.length - 1);
    }

    async setContentTypeHeader() {
        let apiURL = this._url;

        let __contentType = this._contentType;

        for (let url of Constants.SET_TO_CONTENT_TYPE) {
            if (apiURL.includes(url)) {
                this.addHeader(Constants.CONTENT_TYPE, __contentType);

                return;
            }
        }
    }

    toString() {
        let headers = new Map(this._headers);

        headers.set(Constants.AUTHORIZATION, Constants.CANT_DISCLOSE);

        let headerMapString = JSON.stringify(headers, (key, value) => (value instanceof Map ? [...value] : value));

        let paramMapString = JSON.stringify(this._parameters, (key, value) => (value instanceof Map ? [...value] : value));

        return this._requestMethod + " - " + Constants.URL_NAME + " = " + this._url + " , " + Constants.HEADERS + " = " + headerMapString + " , " + Constants.PARAMS + " = " + paramMapString + ".";
    }

    async proxyLog(requestProxy) {
        return Constants.PROXY_SETTINGS.concat(Constants.PROXY_HOST).concat(requestProxy.getHost()).concat(" , ").concat(Constants.PROXY_PORT).concat(requestProxy.getPort().toString());;
    }
}