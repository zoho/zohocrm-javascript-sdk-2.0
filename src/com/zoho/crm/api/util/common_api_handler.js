/**
 * This class is to process the API request and its response.
 * Construct the objects that are to be sent as parameters or in the request body with the API.
 * The Request parameter, header and body objects are constructed here.
 * Process the response JSON and converts it to relevant objects in the library.
 */
class CommonAPIHandler {
    constructor() {
        this._apiPath = null;

        this._param = new ParameterMap();

        this._header = new HeaderMap();

        this._request = null;

        this._httpMethod = null;

        this._moduleAPIName = null;

        this._contentType = null;

        this._categoryMethod = null;

        this._mandatoryChecker = null;
    }

    /**
     * This is a setter method to set an API request content type.
     * @param {String} contentType A String containing the API request content type.
     */
    setContentType(contentType) {
        this._contentType = contentType;
    }

    /**
     * This is a setter method to set the API request URL.
     * @param {String} apiPath A String containing the API request URL.
     */
    setAPIPath(apiPath) {
        this._apiPath = apiPath;
    }

    /**
     * This method is to add an API request parameter.
     * @param {Param} paramInstance A Param instance containing the API request parameter.
     * @param {object} paramValue A object containing the API request parameter value.
     */
    async addParam(paramInstance, paramValue) {
        if (paramValue == null) {
            return;
        }

        if (this._param == null) {
            this._param = new ParameterMap();
        }

        await this._param.add(paramInstance, paramValue);
    }

    /**
     * This method to add an API request header.
     * @param {Header} headerInstance A Header instance the API request header.
     * @param {object} headerValue A object containing the API request header value.
     */
    async addHeader(headerInstance, headerValue) {
        if (headerValue == null) {
            return;
        }

        if (this._header == null) {
            this._header = new HeaderMap();
        }

        await this._header.add(headerInstance, headerValue);
    }

    /**
     * This is a setter method to set the API request parameter map.
     * @param {ParameterMap} param A ParameterMap class instance containing the API request parameter.
     */
    setParam(param) {
        if (param == null) {
            return;
        }

        if (this._param.getParameterMap() != null && this._param.getParameterMap().size > 0) {
            for (let key of param.getParameterMap().keys()) {
                this._param.getParameterMap().set(key, param.getParameterMap().get(key));
            }
        }
        else {
            this._param = param;
        }
    }

    /**
     * This is a getter method to get the Zoho CRM module API name.
     * @returns {String} A String representing the Zoho CRM module API name.
     */
    getModuleAPIName() {
        return this._moduleAPIName;
    }

    /**
     * This is a setter method to set the Zoho CRM module API name.
     * @param {String} moduleAPIName A String containing the Zoho CRM module API name.
     */
    setModuleAPIName(moduleAPIName) {
        this._moduleAPIName = moduleAPIName;
    }

    /**
     * This is a setter method to set the API request header map.
     * @param {HeaderMap} header A HeaderMap class instance containing the API request header.
     */
    setHeader(header) {
        if (header == null) {
            return;
        }

        if (this._header.getHeaderMap() != null && this._header.getHeaderMap().size > 0) {
            for (let key of header.getHeaderMap().keys()) {
                this._header.getHeaderMap().set(key, header.getHeaderMap().get(key));
            }
        }
        else {
            this._header = header;
        }
    }

    /**
     * This is a setter method to set the API request body object.
     * @param {object} request A Object containing the API request body object.
     */
    setRequest(request) {
        this._request = request;
    }

    /**
     * This is a setter method to set the HTTP API request method.
     * @param {String} httpMethod A String containing the HTTP API request method.
     */
    setHttpMethod(httpMethod) {
        this._httpMethod = httpMethod;
    }

    /**
     * This is a getter method to get mandatoryChecker
     * @returns {Boolean} - A Boolean value representing mandatoryChecker
     */
    isMandatoryChecker() {
        return this._mandatoryChecker;
    }

    /**
     * This is a setter method to set mandatoryChecker
     * @param {Bool} mandatoryChecker - A Boolean value
     */
    setMandatoryChecker(mandatoryChecker) {
        this._mandatoryChecker = mandatoryChecker;
    }

    /**
     * This is a getter method to get the HTTP API request method.
     * @returns {String} A String representing the HTTP API request method.
     */
    getHttpMethod() {
        return this._httpMethod;
    }

    /**
     * This is a getter method to get categoryMethod
     * @returns {String} - A String value representing categoryMethod
     */
    getCategoryMethod() {
        return this._categoryMethod;
    }

    /**
     * This is a setter method to set categoryMethod
     * @param {String} categoryMethod - A String value representing categoryMethod
     */
    setCategoryMethod(category) {
        this._categoryMethod = category;
    }

    /** 
     * This is a getter method to get the API request URL.
     * @returns {String} A String containing the API request URL.
     */
    getAPIPath() {
        return this._apiPath;
    }

    /**
     * This method is used in constructing API request and response details. To make the Zoho CRM API calls.
     * @param {String} className A String containing the method return type.
     * @param {String} encodeType A String containing the expected API response content type.
     * @returns {APIResponse} A APIResponse representing the Zoho CRM API response instance or null.
     */
    async apiCall(className, encodeType) {
        if (Initializer == null) {
            throw new SDKException(Constants.SDK_UNINITIALIZATION_ERROR, Constants.SDK_UNINITIALIZATION_MESSAGE);
        }

        var connector = new APIHTTPConnector();

        try {
            await this.setAPIUrl(connector);
        }
        catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }

            SDKLogger.log(Levels.ERROR, Constants.SET_API_URL_EXCEPTION + error.toString());

            throw error;
        }

        connector.setRequestMethod(this._httpMethod);

        connector.setContentType(this._contentType);

        if (this._header != null && this._header.getHeaderMap().size > 0) {
            connector.setHeaders(this._header.getHeaderMap());
        }

        if (this._param != null && this._param.getParameterMap().size > 0) {
            connector.setParams(this._param.getParameterMap());
        }

        try {
            await Initializer.token.authenticate(connector);
        }
        catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }

            SDKLogger.log(Levels.ERROR, Constants.AUTHENTICATION_EXCEPTION + error.toString());

            throw error;
        }

        var returnObject = null;

        var convertInstance = null;

        if (this._contentType != null && Constants.IS_GENERATE_REQUEST_BODY.includes(this._httpMethod.toUpperCase())) {
            let request = null;

            var requestClassName = className.split(".");

            requestClassName[requestClassName.length - 1] = this._request.constructor.name;

            try {
                convertInstance = await this.getConverterClassInstance(this._contentType.toLowerCase());

                request = await convertInstance.formRequest(this._request, requestClassName.join("."), null, null);
            }
            catch (error) {
                if (!(error instanceof SDKException)) {
                    error = new SDKException(null, null, null, error);
                }

                SDKLogger.log(Levels.ERROR, Constants.FORM_REQUEST_EXCEPTION + error.toString());

                throw error;
            }

            connector.setRequestBody(request);
        }

        try {
            // let zoho_sdk_value = navigator.appCodeName + "/" + parseFloat(navigator.appVersion) + "javascript-2.0/" + ":" + Constants.SDK_VERSION;
            // connector.addHeader(Constants.ZOHO_SDK, zoho_sdk_value);

            let response = await connector.fireRequest(convertInstance);

            var statusCode = response.status;

            var headerMap = await this.getHeaders(await response.getAllResponseHeaders());

            if (headerMap.hasOwnProperty(Constants.CONTENT_TYPE_HEADER.toLowerCase())) {
                var mimeType = headerMap[Constants.CONTENT_TYPE_HEADER];

                if (mimeType != undefined && mimeType != null) {
                    if (mimeType.includes(";")) {

                        mimeType = mimeType.split(";")[0];
                    }

                    convertInstance = await this.getConverterClassInstance(mimeType.toLowerCase());

                    returnObject = await convertInstance.getWrappedResponse(response, className);
                }
            }
            else {
                SDKLogger.log(Levels.ERROR, Constants.API_ERROR_RESPONSE + statusCode.toString());
            }

            return new APIResponse(headerMap, statusCode, returnObject);
        }
        catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }

            SDKLogger.log(Levels.ERROR, Constants.API_CALL_EXCEPTION + error.toString());

            throw error;
        }
    }

    /**
     * This method to get API response headers.
     * @param {ByteString} headers A ByteString containing the API response headers.
     * @return {Map} A Map&lt;String,String&gt; representing the API response headers.
     */
    async getHeaders(headers) {
        // Convert the header string into an array
        // of individual headers
        var arr = headers.trim().split(/[\r\n]+/);

        // Create a map of header names to values
        var headerMap = new Map();

        arr.forEach(function (line) {
            var parts = line.split(': ');

            var header = parts.shift();

            var value = parts.join(': ');

            headerMap[header] = value;
        });

        return headerMap;
    }

    /**
     * This method is used to get a Converter class instance.
     * @param {String} encodeType A String containing the API response content type.
     * @return A Converter class instance.
     */
    async getConverterClassInstance(encodeType) {
        switch (encodeType) {
            case "application/json":
            case "text/plain":
            case "application/ld+json":
                return new JSONConverter(this);
            case "application/xml":
            case "text/xml":
                return new XMLConverter(this);
            case "multipart/form-data":
                return new FormDataConverter(this);
            case "image/png":
            case "image/jpeg":
            case "image/gif":
            case "image/tiff":
            case "image/svg+xml":
            case "image/bmp":
            case "image/webp":
            case "text/csv":
            case "text/html":
            case "text/css":
            case "text/javascript":
            case "text/calendar":
            case "application/x-download":
            case "application/zip":
            case "application/pdf":
            case "application/java-archive":
            case "application/javascript":
            case "application/octet-stream":
            case "application/xhtml+xml":
            case "application/x-bzip":
            case "application/msword":
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            case "application/gzip":
            case "application/x-httpd-php":
            case "application/vnd.ms-powerpoint":
            case "application/vnd.rar":
            case "application/x-sh":
            case "application/x-tar":
            case "application/vnd.ms-excel":
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            case "application/x-7z-compressed":
            case "audio/mpeg":
            case "audio/x-ms-wma":
            case "audio/vnd.rn-realaudio":
            case "audio/x-wav":
            case "audio/3gpp":
            case "audio/3gpp2":
            case "video/mpeg":
            case "video/mp4":
            case "video/webm":
            case "video/3gpp":
            case "video/3gpp2":
            case "font/ttf":
                return new Downloader(this);
        }

        return null;
    }

    async setAPIUrl(connector) {
        var apiPath = "";

        if (this._apiPath.toString().includes(Constants.HTTP)) {
            if (this._apiPath.includes(Constants.CONTENT_API_URL)) {
                apiPath = apiPath.concat(Initializer.environment.getFileUploadUrl())

                try {
                    const myURL = new URL(this._apiPath);

                    apiPath = apiPath.concat(myURL.pathname);
                }
                catch (error) {
                    throw new SDKException(Constants.INVALID_URL_ERROR, null, null, error);
                }
            }
            else {

                if (this._apiPath.substring(0, 1) == "/") {
                    this._apiPath = this._apiPath.substring(1);
                }

                apiPath = apiPath.concat(this._apiPath);
            }
        }
        else {
            apiPath = Initializer.environment.getUrl();

            apiPath = apiPath.concat(this._apiPath);
        }

        connector.setUrl(apiPath);
    }
}

CommonAPIHandler.recordFieldDetails = new Map();