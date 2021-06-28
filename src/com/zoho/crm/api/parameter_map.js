/**
 * This class representing the HTTP parameter name and value.
 */
class ParameterMap {

    constructor() {

        this._parameterMap = new Map();
    }

    /**
     * This is a getter method to get parameter map.
     * @returns {Map} A Map representing the API response parameters.
     */
    getParameterMap() {

        return this._parameterMap;
    }

    /**
     * This is a setter method to set parameter map.
     * @returns {Map} An Map representing the API request parameters.
     */
    setParameterMap(parameterMap) {

        this._parameterMap = parameterMap;
    }

    /**
     * This method to add parameter name and value.
     * @param {Param} param A Param class instance.
     * @param {object} value A Object containing the parameter value.
     */
    async add(param, value) {

        if(param === null) {

            throw new SDKException(Constants.HEADER_NULL_ERROR, Constants.HEADER_INSTANCE_NULL_ERROR);
        }

        let paramName = param.getName();

        if(paramName === null)
        {
            throw new SDKException(Constants.HEADER_NAME_NULL_ERROR, Constants.HEADER_NAME_NULL_ERROR_MESSAGE);
        }

        if(value === null) {

            throw new SDKException(Constants.HEADER_NULL_ERROR, paramName + Constants.NULL_VALUE_ERROR_MESSAGE);
        }

        let paramClassName = param.getClassName();

        let parsedParamValue = null;

        if(paramClassName !== null) {

            let headerParamValidator = new HeaderParamValidator();

            parsedParamValue = await headerParamValidator.validate(param, value);
        }
        else {

            try {

                parsedParamValue = await DataTypeConverter.postConvert(value, value.constructor.name);
            }
            catch(ex) {

                parsedParamValue = value;
            }
        }

        if(this._parameterMap.has(paramName) && this._parameterMap.get(paramName) !== null) {

            let paramValue = this._parameterMap.get(paramName);

            paramValue = paramValue.concat(",", parsedParamValue.toString());

            this._parameterMap.set(paramName, paramValue);
        }
        else {

            this._parameterMap.set(paramName, parsedParamValue.toString());
        }
    }
}