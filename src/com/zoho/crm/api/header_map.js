/**
 * This class represents the HTTP header name and value.
 */
class HeaderMap {
    constructor() {
        this._headerMap = new Map();
    }

    /**
     * This is a getter method to get header map.
     * @return A Map representing the API request headers.
     */
    getHeaderMap() {
        return this._headerMap;
    }

    /**
     * This is a setter method to set header map.
     * @param {Map} headerMap  An Map representing the API request headers.
     */
    setHeaderMap(headerMap) {
        this._headerMap = headerMap;
    }

    /**
     * This method is to add header name and value.
     * @param {Header} header A Header class instance.
     * @param {object} value A object containing the header value.
     */
    async add(header, value) {
        if (header === null) {
            throw new SDKException(Constants.HEADER_NULL_ERROR, Constants.HEADER_INSTANCE_NULL_ERROR);
        }

        let headerName = header.getName();

        if (headerName === null) {
            throw new SDKException(Constants.HEADER_NAME_NULL_ERROR, Constants.HEADER_NAME_NULL_ERROR_MESSAGE);
        }

        if (value === null) {
            throw new SDKException(Constants.HEADER_NULL_ERROR, headerName + Constants.NULL_VALUE_ERROR_MESSAGE);
        }

        let headerClassName = header.getClassName();

        let parsedHeaderValue = null;

        if (headerClassName !== null) {
            let headerParamValidator = new HeaderParamValidator();

            parsedHeaderValue = await headerParamValidator.validate(header, value);
        }
        else {
            try {
                parsedHeaderValue = await DataTypeConverter.postConvert(value, value.constructor.name);
            }
            catch (ex) {

                parsedHeaderValue = value;
            }
        }

        if (parsedHeaderValue instanceof Map || Array.isArray(parsedHeaderValue)) {
            let coverterInstance = new JSONConverter(null);

            parsedHeaderValue = JSON.stringify(await coverterInstance.redirectorForObjectToJSON(parsedHeaderValue));
        }

        if (this._headerMap.has(headerName) && this._headerMap.get(headerName) !== null) {
            let headerValue = this._headerMap.get(headerName);

            headerValue = headerValue.concat(",", parsedHeaderValue.toString());

            this._headerMap.set(headerName, headerValue);
        }
        else {

            this._headerMap.set(headerName, parsedHeaderValue.toString());
        }
    }
}