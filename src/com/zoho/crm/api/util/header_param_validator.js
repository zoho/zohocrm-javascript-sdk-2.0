/**
 * This class is to validate API headers and parameters.
 */
class HeaderParamValidator {
    async validate(headerparam, value) {
        let name = headerparam.getName();

        let className = headerparam.getClassName();

        let typeDetail = null;

        if (classDetailMap.hasOwnProperty(className)) {
            typeDetail = await this.getKeyJSONDetails(name, classDetailMap[className]);
        }

        if (typeDetail != null) {
            if (!await this.checkDataType(typeDetail, value)) {
                let type = className != null && className.endsWith("param") ? "PARAMETER" : "HEADER";

                let detailsJO = {};

                detailsJO[type] = name;

                detailsJO[Constants.CLASS_KEY] = className;

                detailsJO[Constants.ACCEPTED_TYPE] = Constants.SPECIAL_TYPES.hasOwnProperty(typeDetail[Constants.TYPE]) ? Constants.SPECIAL_TYPES.get(typeDetail[Constants.TYPE]) : typeDetail[Constants.TYPE];

                throw new SDKException(Constants.TYPE_ERROR, null, detailsJO);
            }
            else {
                value = await DataTypeConverter.postConvert(value, typeDetail[Constants.TYPE]);
            }
        }

        return value;
    }

    async getKeyJSONDetails(name, jsonDetails) {
        let keyArray = Array.from(Object.keys(jsonDetails));

        for (let index = 0; index < keyArray.length; index++) {
            const key = keyArray[index];

            let detail = await jsonDetails[key];

            if (detail.hasOwnProperty(Constants.NAME) && name.toLowerCase() === detail[Constants.NAME].toLowerCase()) {
                return detail;
            }
        }

        return {};
    }

    checkDataType(keyDetail, value) {
        let type = keyDetail[Constants.TYPE];

        let dataType = Constants.SPECIAL_TYPES.has(type) ? Constants.SPECIAL_TYPES.get(type) : type;

        if (dataType !== null && Constants.TYPE_VS_DATATYPE.has(dataType.toLowerCase())) {
            if (type === Constants.INTEGER_NAMESPACE) {
                return Utility.checkInteger(value);
            }

            if (Object.prototype.toString.call(value) !== Constants.TYPE_VS_DATATYPE.get(type.toLowerCase())) {
                return false;
            }
        }

        return true;
    }
}