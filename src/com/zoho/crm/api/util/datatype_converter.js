/**
 * This class converts JSON value to the expected data type.
 */
class DataTypeConverter {

    /**
     * This method is to initialize the PreConverter and PostConverter lambda functions.
     */
    static init() {

        if(DataTypeConverter.preConverterMap.size != 0 && DataTypeConverter.postConverterMap.size != 0) {

            return;
        }

        var string = (obj)=> {

            return obj.toString();
        }

        var integer = (obj)=> {

            return parseInt(obj);
        }

        var long = (obj)=> {

            return obj.toString() != Constants.NULL_VALUE ? BigInt(obj) : null;
        }

        var longToString = (obj) =>{
            return obj.toString()
        }

        var bool = (obj)=> {

            return Boolean(obj);
        }

        var stringToDateTime = (obj)=> {

            return new Date(obj);
        }

        var dateTimeToString = (obj)=> {

            return obj.toISOString().split('.')[0]+"Z";
        }

        var dateToString = (obj)=>{

            return obj.toISOString().split('T')[0];
        }

        var stringToDate = (obj)=>{

            return new Date(obj);
        }

        var double = (obj)=> {

            return parseFloat(obj.toString());
        }

        var preObject = (obj)=>{

            return this.preConvertObjectData(obj);
        }

        var postObject = (obj)=>{

            return this.postConvertObjectData(obj);
        }

        this.addToMap(Constants.STRING_NAMESPACE, string, string);

        this.addToMap(Constants.INTEGER_NAMESPACE, integer, integer);

        this.addToMap(Constants.LONG_NAMESPACE, long, longToString);

        this.addToMap(Constants.BOOLEAN_NAMESPACE, bool, bool);

        this.addToMap(Constants.DATE_NAMESPACE, stringToDate, dateToString);

        this.addToMap(Constants.DATETIME_NAMESPACE, stringToDateTime, dateTimeToString);

        this.addToMap(Constants.DOUBLE_NAMESPACE, double, double);

        this.addToMap(Constants.FLOAT_NAMESPACE, double, double);

        this.addToMap(Constants.OBJECT_NAMESPACE, preObject, postObject);
    }

    static preConvertObjectData(obj) {

        return obj;
    }

    static postConvertObjectData(obj) {

        if(Array.isArray(obj)) {

            let list = [];

            for (let data of obj) {

                if(data instanceof Date) {

                    if(data.getHours() == 0 && data.getMinutes() == 0 && data.getSeconds() == 0) {

                        list.push(this.postConvert(data, "Date"));
                    }
                    else {

                        list.push(this.postConvert(data, "DateTime"));
                    }
                }
                else if(data instanceof Map) {

                    this.postConvertObjectData(data);
                }
                else {

                    list.push(data);
                }
            }

            return list;
        }
        else if(obj instanceof Map) {

            let requestObject = {};

            for (let key of Array.from(obj.keys())){

                let value = obj.get(key);

                if(Array.isArray(value)) {

                    requestObject[key] = this.postConvertObjectData(value);
                }
                else if(value instanceof Date) {

                    if(value.getHours() == 0 && value.getMinutes() == 0 && value.getSeconds() == 0) {

                        requestObject[key] = this.postConvert(value, "Date");
                    }
                    else {

                        requestObject[key] = this.postConvert(value, "DateTime");
                    }
                }
                else if(value instanceof Map) {

                    requestObject[key] = this.postConvertObjectData(value);
                }
                else {
                    requestObject[key] = value;
                }
            }

            return requestObject;
        }
        else if(obj instanceof Date) {

            if(obj.getHours() == 0 && obj.getMinutes() == 0 && obj.getSeconds() == 0) {

                return this.postConvert(obj, "Date");
            }
            else {

                return this.postConvert(obj, "DateTime");
            }
        }
        else {

            return obj;
        }
    }

    /**
     * This method is to add PreConverter and PostConverter instance.
     * @param {string} name A String containing the data type class name.
     * @param {Map} preConverter A PreConverter Map.
     * @param {Map} postConverter A PostConverter Map.
     */
    static addToMap(name, preConverter, postConverter) {

        DataTypeConverter.preConverterMap.set(name, preConverter);

        DataTypeConverter.postConverterMap.set(name, postConverter);
    }

    /**
     * This method is to convert JSON value to expected data value.
     * @param {object} obj A Object containing the JSON value.
     * @param {string} type A String containing the expected method return type.
     */
    static preConvert(obj, type) {

        this.init();

        return DataTypeConverter.preConverterMap.get(type)(obj);
    }

    /**
     * This method to convert Java data to JSON data value.
     * @param {object} obj A Object containing the Java data value.
     * @param {string} type A String containing the expected method return type.
     */
    static postConvert(obj, type) {

        this.init();

        return DataTypeConverter.postConverterMap.get(type)(obj);
    }
}

DataTypeConverter.preConverterMap = new Map();

DataTypeConverter.postConverterMap = new Map();