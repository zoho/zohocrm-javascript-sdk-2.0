/**
 * This abstract class is to construct API request and response.
 */
var Converter = class {

	/**
	 * This abstract method is to process the API response.
	 * @param {object} response A Object containing the API response contents or response.
	 * @param {string} pack A String containing the expected method return type.
	 * @returns A Object representing the POJO class instance.
	 */
	getResponse(response, pack) {}

	/**
	 * This abstract method is to construct the API request.
	 * @param {object} requestObject A Object containing the POJO class instance.
	 * @param {string} pack A String containing the expected method return type.
	 * @param {number} instanceNumber An Integer containing the POJO class instance list number.
	 * @param {Map} memberDetail An Map containing the member properties
	 */
	formRequest(requestObject, pack, instanceNumber, memberDetail) {}

	/**
	 * This abstract method is to construct the API request body.
	 * @param {APIHTTPConnector} requestBase A APIHTTPConnector class instance.
	 */
	appendToRequest(requestBase) {}

	/**
	 * This abstract method is to process the API response.
	 * @param {object} response A Object containing the HttpResponse class instance.
	 * @param {string} pack A String containing the expected method return type.
	 */
	getWrappedResponse(response, pack) {}

	/**
	 * Creates a Converter class instance with the CommonAPIHandler class instance.
	 * @param {CommonAPIHandler} commonAPIHandler A CommonAPIHandler class instance.
	 */
	constructor(commonAPIHandler) {

		this.commonAPIHandler = commonAPIHandler;
	}

	/**
	 * This method is to validate if the input values satisfy the constraints for the respective fields.
	 * @param {string} className A String containing the class name.
	 * @param {string} memberName A String containing the member name.
	 * @param {JSON} keyDetails A JSON containing the key JSON details.
	 * @param {object} value A Object containing the key value.
	 * @param {Map} uniqueValuesMap A Map containing the construct objects.
	 * @param {Number} instanceNumber An Integer containing the POJO class instance list number.
	 */
	valueChecker(className, memberName, keyDetails, value, uniqueValuesMap, instanceNumber) {

		var detailsJO = {};

		var name = keyDetails[Constants.NAME];

		var type = keyDetails[Constants.TYPE];

		var valueType = Object.prototype.toString.call(value);

		let check = true;

		let givenType = null;

		if(Constants.TYPE_VS_DATATYPE.has(type.toLowerCase())) {

			if(Array.isArray(value) && value.length > 0 && keyDetails.hasOwnProperty(Constants.STRUCTURE_NAME)) {

				let expectedStructure = keyDetails[Constants.STRUCTURE_NAME];

				let index = 0;

				for(let data of value) {

					className = Object.prototype.toString.call(data);

					if(className == Constants.OBJECT_TYPE)
					{
						className = data.constructor.name;

						check = expectedStructure.includes(className);
					}
					else {

						check = className === expectedStructure ? true : false;
					}

					if(!check) {

						instanceNumber = index;

						type = Constants.ARRAY_NAME + "(" + expectedStructure + ")";

						givenType = Constants.ARRAY_NAME + "(" + className + ")";

						break;
					}

					index = index + 1;
				}
			}
			else if(value != null) {

				check = (valueType != Constants.TYPE_VS_DATATYPE.get(type.toLowerCase()) ? false : true);

				if(check && type == Constants.INTEGER_NAMESPACE){

					check = Utility.checkInteger(value);
				}

				givenType = Object.getPrototypeOf(value).constructor.name;
			}
		}
		else if(value != null && type.toLowerCase() !== Constants.OBJECT_KEY) {

			let expectedStructure = keyDetails[Constants.TYPE];

			className = Object.prototype.toString.call(value);

			if(className == Constants.OBJECT_TYPE)
			{
				className = value.constructor.name;

				check = expectedStructure.includes(className);
			}
			else {

				check = className === expectedStructure ? true : false;
			}

			if(!check) {

				type = expectedStructure;

				givenType = value.constructor.name;
			}
		}

		if(!check && value !== null) {

			detailsJO.field = memberName;

			detailsJO.class = className;

			detailsJO.expected_type = Constants.SPECIAL_TYPES.has(type) ? Constants.SPECIAL_TYPES.get(type) : type;

			detailsJO.given_type = givenType;

			if(instanceNumber != null) {

				detailsJO.index = instanceNumber;
			}

			throw new SDKException(Constants.TYPE_ERROR, null, detailsJO);
		}

		if (keyDetails.hasOwnProperty(Constants.VALUES) && (!keyDetails.hasOwnProperty(Constants.PICKLIST)) || (keyDetails[Constants.PICKLIST] && Initializer.sdkConfig.getPickListValidation() == true)) {

			let valuesJA = keyDetails[Constants.VALUES];

			if(value instanceof Choice) {

				value = value.getValue();
			}

			if (!valuesJA.includes(value)) {

				detailsJO.field = memberName;

				detailsJO.class = className;

				if(instanceNumber != null) {

					detailsJO.index = instanceNumber;
				}

				detailsJO.given_value =  value;

				detailsJO.accepted_values = valuesJA;

				throw new SDKException(Constants.UNACCEPTED_VALUES_ERROR, null, detailsJO);
			}
		}

		if (keyDetails.hasOwnProperty(Constants.UNIQUE)) {

			let valuesArray = uniqueValuesMap[name];

			if (valuesArray != null && valuesArray.includes(value)) {

				detailsJO.field = memberName;

				detailsJO.class = className;

				detailsJO.first_index = valuesArray.indexOf(value);

				detailsJO.next_index = instanceNumber;

				throw new SDKException(Constants.UNIQUE_KEY_ERROR, null, detailsJO);
			}
			else {

				if(valuesArray == null) {

					valuesArray = [];
				}

				valuesArray.push(value);

				uniqueValuesMap[name] = valuesArray;
			}
		}

		if (keyDetails.hasOwnProperty(Constants.MIN_LENGTH) || keyDetails.hasOwnProperty(Constants.MAX_LENGTH)) {

			let count = value.toString().length;

			if(Array.isArray(value)) {

				count = value.length;
			}

			if (keyDetails.hasOwnProperty(Constants.MAX_LENGTH) &&  count > keyDetails[Constants.MAX_LENGTH]) {

				detailsJO.field = memberName;

				detailsJO.class = className;

				detailsJO.given_length = count;

				detailsJO.maximum_length = keyDetails[Constants.MAX_LENGTH];

				throw new SDKException(Constants.MAXIMUM_LENGTH_ERROR, null, detailsJO);
			}

			if (keyDetails.hasOwnProperty(Constants.MIN_LENGTH) && count < keyDetails[Constants.MIN_LENGTH]) {

				detailsJO.field = memberName;

				detailsJO.class = className;

				detailsJO.given_length = count;

				detailsJO.minimum_length = keyDetails[Constants.MIN_LENGTH];

				throw new SDKException(Constants.MINIMUM_LENGTH_ERROR, null,  detailsJO);
			}
		}

		if (keyDetails.hasOwnProperty(Constants.REGEX)) {

			if (!keyDetails[Constants.REGEX].match(value)) {

				detailsJO.field = memberName;

				detailsJO.class = className;

				if(instanceNumber != null) {

					detailsJO.index = instanceNumber;
				}

				throw new SDKException(Constants.REGEX_MISMATCH_ERROR, null,  detailsJO);
			}
		}

		return true;
	}

	getEncodedFileName() {

		let clientId = "";

		let url = Initializer.environment.getUrl();

		if(Initializer.token !== null && Initializer.token.getClientId().length > 0) {

			clientId = Initializer.token.getClientId();
		}

		if(document.getElementById(Constants.ZES_CLIENT_SCOPE) !== null) {

			clientId = document.getElementById(Constants.ZES_CLIENT_SCOPE).getAttribute(Constants.DATA_CLIENT_ID);
		}

		return btoa(clientId + url);
	}
}

/**
 * This class processes the API response object to the POJO object and POJO object to a JSON object.
 */
class JSONConverter extends Converter {

	constructor(commonAPIHandler) {

		super(commonAPIHandler);

		this.uniqueValuesMap = {};
	}

	appendToRequest(request) {

		super.appendToRequest(request);

		return JSON.stringify(request.getRequestBody()) || null;

	}

	async formRequest(requestInstance, pack, instanceNumber, classMemberDetail) { // if structure

		super.formRequest(requestInstance, pack, instanceNumber, classMemberDetail);

		var classDetail = classDetailMap[pack];

		if(classDetail.hasOwnProperty(Constants.INTERFACE) && classDetail[Constants.INTERFACE]) { // useless

			var classes = classDetail[Constants.CLASSES];

			var baseName = pack.split('/').slice(0, -1);

			let className = await this.getFileName(requestInstance.constructor.name);

			baseName.push(className);

			let requestObjectClassName = baseName.join('/');

			for (let className of classes) {

				if(className.toLowerCase() === requestObjectClassName.toLowerCase()){

					classDetail = classDetailMap[requestObjectClassName];

					break;
				}
			}
		}

		if (requestInstance instanceof ZCRM.Record.Model.Record) {

			let moduleAPIName = this.commonAPIHandler.getModuleAPIName();

			let returnJSON = await this.isRecordRequest(requestInstance, classDetail, instanceNumber, classMemberDetail);

			this.commonAPIHandler.setModuleAPIName(moduleAPIName);

			return returnJSON;
		}
		else {

			return await this.isNotRecordRequest(requestInstance, classDetail, instanceNumber, classMemberDetail);
		}
	}

	async isNotRecordRequest(requestInstance, classDetail, instanceNumber, classMemberDetail) {

		let requestJSON = {};

		let requiredKeys = new Map();

		let primaryKeys = new Map();

		let requiredInUpdateKeys = new Map();

		let lookUp = false;

		let skipMandatory = false;

		let classMemberName = null;

		if (classMemberDetail != null){

			lookUp = (classMemberDetail.hasOwnProperty(Constants.LOOKUP) ? classMemberDetail[Constants.LOOKUP] : false);

			skipMandatory = (classMemberDetail.hasOwnProperty(Constants.SKIP_MANDATORY) ? classMemberDetail[Constants.SKIP_MANDATORY] : false);

			classMemberName = this.buildName(classMemberDetail[Constants.NAME]);
		}

		for(let memberName in classDetail) {

			var modification = null;

			var memberDetail = classDetail[memberName];

			if ((memberDetail.hasOwnProperty(Constants.READ_ONLY) && memberDetail[Constants.READ_ONLY] === 'true') || !memberDetail.hasOwnProperty(Constants.NAME)) { // read only or no keyName

				continue;
			}

			var keyName = memberDetail[Constants.NAME];

			try {

				modification = requestInstance.isKeyModified(memberDetail[Constants.NAME]);
			}
			catch(ex) {

				throw new SDKException(Constants.EXCEPTION_IS_KEY_MODIFIED, null, null, ex);
			}

			if (memberDetail.hasOwnProperty(Constants.REQUIRED) && memberDetail[Constants.REQUIRED] == true) {

				requiredKeys.set(keyName, true);
			}

			if (memberDetail.hasOwnProperty(Constants.REQUIRED_IN_UPDATE) && memberDetail[Constants.REQUIRED_IN_UPDATE] == true) {

				requiredInUpdateKeys.set(keyName, true);
			}

			if (memberDetail.hasOwnProperty(Constants.PRIMARY) && memberDetail[Constants.PRIMARY] == true && (!memberDetail.hasOwnProperty(Constants.REQUIRED_IN_UPDATE) || memberDetail[Constants.REQUIRED_IN_UPDATE] == true)) {

				primaryKeys.set(keyName, true);
			}

			var fieldValue = null;

			if (modification != null && parseInt(modification) != 0) {

				fieldValue = Reflect.get(requestInstance, memberName);

			 	if (await this.valueChecker(requestInstance.constructor.name, memberName, memberDetail, fieldValue, this.uniqueValuesMap, instanceNumber)) {

					if(fieldValue != null) {

						requiredKeys.delete(keyName);

						primaryKeys.delete(keyName);

						requiredInUpdateKeys.delete(keyName);
					}

					if (requestInstance instanceof ZCRM.Record.Model.FileDetails) {

						requestJSON[keyName.toLowerCase()] =  fieldValue;
					}
					else {

						requestJSON[keyName] = await this.setData(memberDetail, fieldValue);
					}
				}
			}
		}

		if (skipMandatory || await this.checkException(classMemberName, requestInstance, instanceNumber, lookUp, requiredKeys, primaryKeys, requiredInUpdateKeys)) {

			return requestJSON;
		}
	}

	async checkException(memberName, requestInstance, instanceNumber, lookUp, requiredKeys, primaryKeys, requiredInUpdateKeys) {

		if(requiredInUpdateKeys.size > 0 && this.commonAPIHandler.getCategoryMethod().toLowerCase() == Constants.REQUEST_CATEGORY_UPDATE.toLowerCase()) {

			let error = {};

			error.field = memberName;

			error.type =  requestInstance.constructor.name;

			error.keys = Array.from(requiredInUpdateKeys.keys()).toString();

			if(instanceNumber != null) {

				error.instance_number = instanceNumber;
			}

			throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR, error, null);
		}

		if(this.commonAPIHandler.getMandatoryChecker() != null && this.commonAPIHandler.getMandatoryChecker()) {

			if(this.commonAPIHandler.getCategoryMethod().toLowerCase() == Constants.REQUEST_CATEGORY_CREATE.toLowerCase()) {

				if(lookUp) {

					if(primaryKeys.size > 0) {

						let error = {};

						error.field = memberName;

						error.type = requestInstance.constructor.name;

						error.keys = Array.from(primaryKeys.keys()).toString();

						if(instanceNumber != null) {

							error.instance_number = instanceNumber;
						}

						throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.PRIMARY_KEY_ERROR, error, null);
					}
				}
				else if(requiredKeys.size > 0) {

					let error = {};

					error.field = memberName;

					error.type = requestInstance.constructor.name;

					error.keys = Array.from(requiredKeys.keys()).toString();

					if(instanceNumber != null) {

						error.instance_number = instanceNumber;
					}

					throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR, error, null);
				}
			}

			if(this.commonAPIHandler.getCategoryMethod().toUpperCase() == Constants.REQUEST_CATEGORY_UPDATE && primaryKeys.size > 0) {

				let error = {};

				error.field = memberName;

				error.type = requestInstance.constructor.name;

				error.keys = Array.from(primaryKeys.keys()).toString();

				if(instanceNumber != null) {

					error.instance_number = instanceNumber;
				}

				throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.PRIMARY_KEY_ERROR, error, null);
			}
		}

		else if (lookUp && this.commonAPIHandler.getCategoryMethod().toLowerCase() == Constants.REQUEST_CATEGORY_UPDATE.toLowerCase()) {

			if (primaryKeys.size > 0) {

				let error = {};

				error.field = memberName;

				error.type = requestInstance.constructor.name;

				error.keys = Array.from(primaryKeys.keys()).toString();

				if(instanceNumber != null) {

					error.instance_number = instanceNumber;
				}

				throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.PRIMARY_KEY_ERROR, error, null);
			}
		}

		return true;
	}

	async isRecordRequest(recordInstance, classDetail, instanceNumber, classMemberDetail) {

		var requestJSON = {};

		var moduleDetail = {};

		var lookUp = false;

		var skipMandatory = false;

		var classMemberName = null;

		if (classMemberDetail != null) {

			lookUp = (classMemberDetail.hasOwnProperty(Constants.LOOKUP) ? classMemberDetail[Constants.LOOKUP] : false);

			skipMandatory = (classMemberDetail.hasOwnProperty(Constants.SKIP_MANDATORY) ? classMemberDetail[Constants.SKIP_MANDATORY] : false);

			classMemberName = classMemberDetail[Constants.NAME];
		}

		var moduleAPIName = this.commonAPIHandler.getModuleAPIName();

		if(moduleAPIName != null) { // entry

			this.commonAPIHandler.setModuleAPIName(null);

			let fullDetail = await Utility.searchJSONDetails(moduleAPIName);// to get correct moduleapiname in proper format

			if(fullDetail != null) { // from Jsondetails

				moduleDetail = fullDetail[Constants.MODULEDETAILS];
			}
			else { // from user spec

				moduleDetail = await this.getModuleDetailFromUserSpecJSON(moduleAPIName);
			}
		}
		else {

			moduleDetail = classDetail;

			classDetail = classDetailMap[Constants.RECORD_NAMESPACE];
		} // class detail must contain record structure at this point

		//Super Class
		if(Object.getPrototypeOf(Object.getPrototypeOf(recordInstance)).constructor.name === "Record") {

			Object.setPrototypeOf(recordInstance, ZCRM.Record.Model.Record.prototype);
		}

		if(moduleDetail == null) {

			moduleDetail = {};
		}

		var keyValues = new Map();

		keyValues = Reflect.get(recordInstance, Constants.KEY_VALUES);

		var keyModified = new Map();

		keyModified = Reflect.get(recordInstance, Constants.KEY_MODIFIED);

		var requiredKeys = new Map();

		var primaryKeys = new Map();

		if (!skipMandatory) {

			for(let keyName of Object.keys(moduleDetail)) {

				let keyDetail = moduleDetail[keyName];

				let name = keyDetail[Constants.NAME];

				if (keyDetail.hasOwnProperty(Constants.REQUIRED) && keyDetail[Constants.REQUIRED] == true) {

					requiredKeys.set(name, true);
				}

				if (keyDetail.hasOwnProperty(Constants.PRIMARY) && keyDetail[Constants.PRIMARY] == true) {

					primaryKeys.set(name, true);
				}
			}

			for (let keyName of Object.keys(classDetail)) {

				let keyDetail = classDetail[keyName];

				let name = keyDetail[Constants.NAME];

				if (keyDetail.hasOwnProperty(Constants.REQUIRED) && keyDetail[Constants.REQUIRED] == true) {

					requiredKeys.set(name, true);
				}

				if (keyDetail.hasOwnProperty(Constants.PRIMARY) && keyDetail[Constants.PRIMARY] == true) {

					primaryKeys.set(name, true);
				}
			}
		}

		for (let keyName of Array.from(keyModified.keys())) {

			if(keyModified.get(keyName) != 1) {

				continue;
			}

			let keyDetail = {};

			let keyValue = keyValues.has(keyName) ? keyValues.get(keyName) : null;

			let jsonValue = null;

			let memberName = this.buildName(keyName);

			if(Object.keys(moduleDetail).length > 0 && (moduleDetail.hasOwnProperty(keyName) || moduleDetail.hasOwnProperty(memberName))) {

				if(moduleDetail.hasOwnProperty(keyName)) {

					keyDetail = moduleDetail[keyName]; // incase of user spec json
				}
				else {

					keyDetail = moduleDetail[memberName]; // json details
				}
			}
			else if(classDetail.hasOwnProperty(memberName)) {

				keyDetail = classDetail[memberName];
			}

			if(Object.keys(keyDetail).length > 0) {

				if ((keyDetail.hasOwnProperty(Constants.READ_ONLY) && keyDetail[Constants.READ_ONLY] === 'true') || !keyDetail.hasOwnProperty(Constants.NAME)) { // read only or no keyName

					continue;
				}
				if (await this.valueChecker(recordInstance.constructor.name, keyName, keyDetail, keyValue, this.uniqueValuesMap, instanceNumber)) {

					jsonValue = await this.setData(keyDetail, keyValue);
				}
			}
			else {

				jsonValue = await this.redirectorForObjectToJSON(keyValue);
			}

			if(keyValue != null) {

				requiredKeys.delete(keyName);

				primaryKeys.delete(keyName);
			}

			requestJSON[keyName] = jsonValue;
		}

		if (skipMandatory || await this.checkException(classMemberName, recordInstance, instanceNumber, lookUp, requiredKeys, primaryKeys, new Map())) {

			return requestJSON;
		}
	}

	async setData(memberDetail, fieldValue) {

		if(fieldValue != null) {

			let type = memberDetail[Constants.TYPE].toString();

			if(type.toLowerCase() === Constants.LIST_NAMESPACE.toLowerCase()) {

				return await this.setJSONArray(fieldValue, memberDetail);
			}
			else if(type.toLowerCase() === Constants.MAP_NAMESPACE.toLowerCase()) {

				return await this.setJSONObject(fieldValue, memberDetail);
			}
			else if(type.toLowerCase() === Constants.CHOICE_NAMESPACE.toLowerCase() || (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail[Constants.STRUCTURE_NAME].toLowerCase() == Constants.CHOICE_NAMESPACE.toLowerCase())) {

				return fieldValue.getValue();
			}
			else if(memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail.hasOwnProperty(Constants.MODULE.toLowerCase())) {

				return await this.isRecordRequest(fieldValue, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE.toLowerCase()]), null, memberDetail);
			}
			else if(memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {

				return await this.formRequest(fieldValue, memberDetail[Constants.STRUCTURE_NAME], null, memberDetail);
			}
			else {

				return await DataTypeConverter.postConvert(fieldValue, type);
			}
		}

		return null;
	}

	async setJSONObject(fieldValue, memberDetail) {

		var jsonObject = {};

		var requestObject = fieldValue;

		if(Array.from(requestObject.keys()).length > 0) {

			if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.KEYS))) {

				for (let key of Array.from(requestObject.keys())){

					jsonObject[key] = await this.redirectorForObjectToJSON(requestObject.get(key));
				}
			}
			else if(memberDetail.hasOwnProperty(Constants.KEYS)) {

				var keysDetail = memberDetail[Constants.KEYS];

				for (let keyIndex = 0; keyIndex < keysDetail.length; keyIndex++) {

					let keyDetail = keysDetail[keyIndex];

					let keyName = keyDetail[Constants.NAME];

					let keyValue = null;

					if (requestObject.has(keyName) && requestObject.get(keyName) != null) {

						keyValue = await this.setData(keyDetail, requestObject.get(keyName));

						jsonObject[keyName] = keyValue;
					}
				}
			}
		}

		return jsonObject;
	}

	async setJSONArray(fieldValue, memberDetail) {

		var jsonArray = [];

		var requestObjects = fieldValue;

		if(requestObjects.length > 0) {

			if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME))) {

				for (let request of requestObjects) {

					jsonArray.push(await this.redirectorForObjectToJSON(request));
				}
			}
			else {

				let pack = memberDetail[Constants.STRUCTURE_NAME].toString();

				if(pack == Constants.CHOICE_NAMESPACE) {

					for(let request of requestObjects) {

						jsonArray.push(request.getValue());
					}
				}
				else if(memberDetail.hasOwnProperty(Constants.MODULE.toLowerCase()) && memberDetail[Constants.MODULE.toLowerCase()] != null) {

					let instanceCount = 0;

					for(let request of requestObjects) {

						jsonArray.push(await this.isRecordRequest(request, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE.toLowerCase()]), instanceCount, memberDetail));

						instanceCount++;
					}
				}
				else {

					let instanceCount = 0;

					for (let request of requestObjects) {

						jsonArray.push(await this.formRequest(request, pack, instanceCount, memberDetail));

						instanceCount++;
					}
				}
			}
		}

		return jsonArray;
	}

	async redirectorForObjectToJSON(request) {

		if (Array.isArray(request)) {

			return await this.setJSONArray(request, null);
		}
		else if (request instanceof Map) {

			return await this.setJSONObject(request, null);
		}
		else{

			return request;
		}
	}

	async getWrappedResponse(response, pack) {

		super.getWrappedResponse(response, pack);

		if(response.response != null) {

			let responseObject = response.response;

			if(responseObject.valueOf() instanceof ArrayBuffer) {

				let binary = '';

				let bytes = new Uint8Array( responseObject );

				let len = bytes.byteLength;

				for (var i = 0; i < len; i++) {

					binary += await String.fromCharCode(bytes[ i ] );
				}

				responseObject = binary;
			}

			if (responseObject != null && responseObject.toString() != "" && Object.keys(responseObject).length > 0) {

				return await this.getResponse(JSON.parse(responseObject), pack);
			}
		}

		return null;
	}

	async getResponse(response, pack) {

		super.getResponse(response, pack);

		if (response == null || response == "" || Object.keys(response).length === 0) {

			return null;
		}

		var responseJson = response;

		var classDetail = classDetailMap[pack];

		var instance = null;

		if (classDetail.hasOwnProperty(Constants.INTERFACE) && classDetail[Constants.INTERFACE]) { // if interface

			let classes = classDetail[Constants.CLASSES];

			instance = await this.findMatch(classes, responseJson);
		}
		else {

			var ClassName = this.stringToFunction(pack);

			instance = new ClassName();

			if(instance instanceof ZCRM.Record.Model.Record) { // if record -> based on response json data will be assigned to field Values

				let moduleAPIName = this.commonAPIHandler.getModuleAPIName();

				instance = await this.isRecordResponse(responseJson, classDetail, pack);

				this.commonAPIHandler.setModuleAPIName(moduleAPIName);
			}
			else {

				instance = await this.notRecordResponse(instance, responseJson, classDetail);// based on json details data will be assigned
			}
		}

		return instance;
	}

	async notRecordResponse(instance, responseJson, classDetail) {

		for(let memberName in classDetail) {

			let keyDetail = classDetail[memberName];

			let keyName = keyDetail.hasOwnProperty(Constants.NAME) ? keyDetail[Constants.NAME] : null;

			if(keyName != null && responseJson.hasOwnProperty(keyName)) {

				let keyData = responseJson[keyName];

				let memberValue = await this.getData(keyData, keyDetail);

				Reflect.set(instance, memberName, memberValue);
			}
		}

		return instance;
	}

	async isRecordResponse(responseJson, classDetail, pack) {

		let className = this.stringToFunction(pack);

		let recordInstance = new className();

		let moduleAPIName = this.commonAPIHandler.getModuleAPIName();

		let moduleDetail = {};

		if(moduleAPIName != null) { // entry

			this.commonAPIHandler.setModuleAPIName(null);

			let fullDetail = await Utility.searchJSONDetails(moduleAPIName);// to get correct moduleapiname in proper format

			if(fullDetail != null) { // from Jsondetails

				moduleDetail = fullDetail[Constants.MODULEDETAILS];

				let moduleClassName = this.stringToFunction(fullDetail[Constants.MODULEPACKAGENAME]);

				recordInstance = new moduleClassName();
			}
			else { // from user spec

				moduleDetail = await this.getModuleDetailFromUserSpecJSON(moduleAPIName);
			}
		}

		if(moduleDetail == null) {

			moduleDetail = {};
		}

		for(let key in classDetail) {

			moduleDetail[key] = classDetail[key];
		}

		let recordDetail = classDetailMap[Constants.RECORD_NAMESPACE];

		// after above steps, recordDetail must always contain record structure detail,module detail could be any,entry case pack detail is record

		var keyValues = new Map();

		for(let keyName in responseJson) {

			let memberName = this.buildName(keyName);

			let keyDetail = {};

			if(Object.keys(moduleDetail).length > 0 && (moduleDetail.hasOwnProperty(keyName) || moduleDetail.hasOwnProperty(memberName))) {

				if(moduleDetail.hasOwnProperty(keyName)) {

					keyDetail = moduleDetail[keyName];// incase of user spec json
				}
				else {

					keyDetail = moduleDetail[memberName];// json details
				}
			}
			else if(recordDetail.hasOwnProperty(memberName)) {

				keyDetail = recordDetail[memberName];
			}

			let keyValue = null;

			let keyData = responseJson[keyName];

			if(Object.keys(keyDetail).length > 0) {

				keyName = keyDetail[Constants.NAME];

				keyValue = await this.getData(keyData, keyDetail);
			}
			else {// if not key detail

				keyValue = await this.redirectorForJSONToObject(keyData);
			}

			keyValues.set(keyName, keyValue);
		}

		Reflect.set(recordInstance, Constants.KEY_VALUES, keyValues);

		return recordInstance;
	}

	async getData(keyData, memberDetail) {

		let memberValue = null;

		if(keyData != null) {

			let type = memberDetail[Constants.TYPE].toString();

			if(type.toLowerCase() === Constants.LIST_NAMESPACE.toLowerCase()) {

				memberValue = await this.getCollectionsData(keyData, memberDetail);
			}
			else if(type.toLowerCase() === Constants.MAP_NAMESPACE.toLowerCase()) {

				memberValue = await this.getMapData(keyData, memberDetail);
			}
			else if(type === Constants.CHOICE_NAMESPACE || (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail[Constants.STRUCTURE_NAME].toLowerCase() === Constants.CHOICE_NAMESPACE.toLowerCase())) {

				memberValue = new Choice(keyData);
			}
			else if(memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail.hasOwnProperty(Constants.MODULE.toLowerCase())) {

				memberValue = await this.isRecordResponse(keyData, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE.toLowerCase()]), memberDetail[Constants.STRUCTURE_NAME]);
			}
			else if(memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {

				memberValue = await this.getResponse(keyData, memberDetail[Constants.STRUCTURE_NAME]);
			}
			else {

				memberValue = await DataTypeConverter.preConvert(keyData, type);
			}
		}

		return memberValue;
	}

	async getMapData(response, memberDetail) {

		var mapInstance = new Map();

		if(Object.keys(response).length > 0) {

			if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.KEYS))) {

				for (let key in response) {

					mapInstance.set(key, await this.redirectorForJSONToObject(response[key]));
				}
			}
			else if(memberDetail.hasOwnProperty(Constants.KEYS)) { // member must have keys

				var keysDetail = memberDetail[Constants.KEYS];

				for (let keyIndex = 0; keyIndex < keysDetail.length; keyIndex++) {

					var keyDetail = keysDetail[keyIndex];

					var keyName = keyDetail[Constants.NAME];

					var keyValue = null;

					if (response.hasOwnProperty(keyName) && response[keyName] != null) {

						keyValue = await this.getData(response[keyName], keyDetail);

						mapInstance.set(keyName, keyValue);
					}
				}
			}
		}

		return mapInstance;
	}

	async getCollectionsData(responses, memberDetail) {

		var values = new Array();

		if(responses.length > 0) {

			if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME))) {

				for (let response of responses) {

					values.push(await this.redirectorForJSONToObject(response));
				}
			}
			else { // need to have structure Name in memberDetail

				let pack = memberDetail[Constants.STRUCTURE_NAME];

				if(pack == Constants.CHOICE_NAMESPACE) {

					for (let response of responses) {

						values.push(new Choice(response));
					}
				}
				else if(memberDetail.hasOwnProperty(Constants.MODULE.toLowerCase()) && memberDetail[Constants.MODULE.toLowerCase()] != null){

					for(let response of responses) {

						values.push(await this.isRecordResponse(response, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE.toLowerCase()]), pack));
					}
				}
				else {

					for(let response of responses) {

						values.push(await this.getResponse(response, pack));
					}
				}
			}
		}

		return values;
	}

	async getModuleDetailFromUserSpecJSON(module) {

		let moduleDetail = {};

		if(Initializer.sdkConfig.getCacheStore()) {

			var converterInstance = new Converter();

			var encodedName = await converterInstance.getEncodedFileName();

			if (await LocalCache.exist()) {

				let recordFieldDetailsJson = await LocalCache.get(encodedName);

				if(recordFieldDetailsJson.hasOwnProperty(module.toLowerCase())) {

					moduleDetail = recordFieldDetailsJson[module.toLowerCase()];
				}
			}
		}
		else {

			let json = CommonAPIHandler.recordFieldDetails;

			moduleDetail = await Utility.getJSONObject(json, module.toLowerCase());
		}

		return moduleDetail;
	}

	async redirectorForJSONToObject(keyData){

		let type = Object.prototype.toString.call(keyData);

		if (type === Constants.OBJECT_TYPE) {

			return await this.getMapData(keyData, null);
		}
		else if (type === Constants.ARRAY_KEY) {

			return await this.getCollectionsData(keyData, null);
		}
		else {

			return keyData;
		}
	}

	async findMatch(classes, responseJson){

		let pack = "";

		let ratio = 0;

		for(let className of classes) {

			var matchRatio = await this.findRatio(className, responseJson);

			if(matchRatio === 1.0) {

				pack = className;

				ratio = 1;

				break;
			}
			else if(matchRatio > ratio) {

				pack = className;

				ratio = matchRatio;
			}
		}

		return await this.getResponse(responseJson, pack);
	}

	findRatio(className, responseJson) {

		var classDetail = classDetailMap[className];

		var totalPoints = Array.from(Object.keys(classDetail)).length;

		var matches = 0;

		if (totalPoints == 0) {

			return 0;
		}
		else {

			for (let memberName in classDetail) {

				var memberDetail = classDetail[memberName];

				var keyName = memberDetail.hasOwnProperty(Constants.NAME) ? memberDetail[Constants.NAME] : null;

				if (keyName != null && responseJson.hasOwnProperty(keyName) && responseJson[keyName] != null) {// key not empty

					var keyData = responseJson[keyName];

					let type = Object.prototype.toString.call(keyData);

					let structureName = memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) ? memberDetail[Constants.STRUCTURE_NAME] : null;

					if (type.toLowerCase() == Constants.OBJECT_TYPE.toLowerCase()) {

						type = Constants.MAP_KEY;
					}

					if(Constants.TYPE_VS_DATATYPE.has(memberDetail[Constants.TYPE].toLowerCase()) && Constants.TYPE_VS_DATATYPE.get(memberDetail[Constants.TYPE].toLowerCase()) == type){

						matches++;
					}
					else if(memberDetail[Constants.TYPE].toLowerCase() == Constants.CHOICE_NAMESPACE.toLowerCase()) {

						let values = memberDetail[Constants.VALUES];

						for(let value of values) {

							if(keyData == value) {

								matches++;

								break;
							}
						}
					}

					if(structureName != null && structureName == memberDetail[Constants.TYPE]) {

						if(memberDetail.hasOwnProperty(Constants.VALUES)) {

							let values = memberDetail[Constants.VALUES];

							for(let value of values) {

								if(keyData == value) {

									matches++;

									break;
								}
							}
						}
						else {

							matches++;
						}
					}
				}
			}
		}

		return matches / totalPoints;
	}

	buildName(memberName){

		let name = memberName.split("_");

		var index = 0;

		if (name.length == 0)
		{
			index = 1;
		}

		var sdkName = name[0];

		sdkName = sdkName[0].toLowerCase() +  sdkName.slice(1);

		index = 1;

		for (var nameIndex = index; nameIndex < name.length; nameIndex++) {

			var fieldName = name[nameIndex];

			var firstLetterUppercase = "";

			if(fieldName.length > 0)
			{
				firstLetterUppercase = fieldName[0].toUpperCase() +  fieldName.slice(1);
			}

			sdkName = sdkName.concat(firstLetterUppercase);
		}

		return sdkName;
	}

	stringToFunction(str) {

		str = "ZCRM." + str;

		var arr = str.split(".");

		var fn = (window || this);

		for (var i = 0, len = arr.length; i < len; i++) {

			fn = fn[arr[i]];
		}

		if (typeof fn !== Constants.FUNCTION) {

			throw new SDKException(Constants.CLASS_NOT_FOUND, null, null, null);
		}

		return  fn;
	}

	getFileName(name) {

		let fileName = [];

		let nameParts = name.split(/([A-Z][a-z]+)/).filter(function(e){return e});

		fileName.push(nameParts[0].toLowerCase());

		for(let i = 1; i < nameParts.length; i++) {

			fileName.push(nameParts[i].toLowerCase());
		}

		return fileName.join("_");
	}
}

/**
 * This class processes the API response object to the POJO object and POJO object to an XML object.
 */
class XMLConverter extends Converter {

	constructor(commonAPIHandler) {

		super(commonAPIHandler);

		this.uniqueValuesMap = {};
	}

	formRequest(requestObject, pack, instanceNumber) {

		super.formRequest(requestObject, pack, instanceNumber);
	}

	appendToRequest(request) {

		super.appendToRequest(request);
	}

	getWrappedResponse(response, pack) {

		super.getWrappedResponse(response, pack);
	}

	getResponse(response, pack) {

		super.getResponse(response, pack);
	}

}

/**
 * This class is to process the download file and stream response.
 */
class Downloader extends Converter {

	constructor(commonApiHandler) {

		super(commonApiHandler);

		this.uniqueValuesMap = {};
	}

	formRequest(requestObject, pack, instanceNumber) {

		super.formRequest(requestObject, pack, instanceNumber);
	}

	appendToRequest(request) {

		super.appendToRequest(request);
	}

	async getWrappedResponse(response, pack) {

		super.getWrappedResponse(response,pack);

		return await this.getResponse(response, pack);
	}

	async getResponse(response, pack) {

		super.getResponse(response, pack);

		var instance = null;

		var classDetail = classDetailMap[pack];

		if (classDetail.hasOwnProperty(Constants.INTERFACE) && classDetail[Constants.INTERFACE]) { // if interface

			let classes = classDetail[Constants.CLASSES];

			for (let index = 0; index < classes.length; index++) {

				let eachClass = classes[index];

                if(eachClass.toString().toLowerCase().includes(Constants.FILE_BODY_WRAPPER.toLowerCase())){

					return await this.getResponse(response, eachClass);
                }
            }
		}
		else {

			let className = await this.stringToFunction(pack);

			instance = new className();

			for (let memberName in classDetail) {

				var memberDetail = classDetail[memberName];

				var type = memberDetail[Constants.TYPE];

				var instanceValue = null;

				if(type === Constants.STREAM_WRAPPER_CLASS) {

					var filename;

					if (response.getAllResponseHeaders().indexOf(Constants.CONTENT_DISPOSITION) >= 0) {

                        var disposition = response.getResponseHeader(Constants.CONTENT_DISPOSITION);//No I18N

                        if (disposition && disposition.indexOf('attachment') !== -1) {

                            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;

                            var matches = filenameRegex.exec(disposition);

                            if (matches != null && matches[1]) {

                                filename = matches[1].replace(/['"]/g, '');

                                filename = filename.replace('UTF-8','');
                            }
                        }
					}

					var mimeType = response.getResponseHeader(Constants.CONTENT_TYPE_HEADER.toLowerCase());//No I18N

                    if(mimeType != undefined && mimeType != null) {

                        if(mimeType.includes(";")) {

                            mimeType = mimeType.split(";")[0];
                        }
                    }
                    else {

                        mimeType = "text/plain";
                    }

                    let blob = new Blob([response.response], {type: mimeType.toString()});

					var fileInstance = new StreamWrapper.Model.StreamWrapper(filename, blob);

					instanceValue = fileInstance;
				}

				Reflect.set(instance, memberName, instanceValue);
			}
		}

		return instance;
	}

	stringToFunction(str) {

		str = "ZCRM." + str;

		var arr = str.split(".");

		var fn = (window || this);

		for (var i = 0, len = arr.length; i < len; i++) {

			fn = fn[arr[i]];
		}

		if (typeof fn !== Constants.FUNCTION) {

			throw new SDKException(Constants.CLASS_NOT_FOUND, null, null, null);
		}

		return  fn;
	};
}

/**
 * This class is to process the upload file and stream.
 */
class FormDataConverter extends Converter {

	constructor(commonApiHandler) {

		super(commonApiHandler);

		this.uniqueValuesMap = {};
	}

	async appendToRequest(requestBase) {

		super.appendToRequest(requestBase);

		var formDataRequestBody = new FormData();

        await this.addFileBody(requestBase.getRequestBody(), formDataRequestBody);

        return formDataRequestBody;
	}

	async addFileBody(requestObject, formData) {

		let requestKeys = Object.keys(requestObject);

        for(let key of requestKeys) {

			let value = requestObject[key];

            if (Array.isArray(value)) {

                for(let fileObject of value) {

					if(fileObject instanceof StreamWrapper.Model.StreamWrapper) {

                        formData.append(key, new Blob([fileObject.getStream()]), fileObject.getName());
                    }
                    else {

                        formData.append(key, fileObject);
                    }
                }
            }
            else if(value instanceof StreamWrapper.Model.StreamWrapper) {

				formData.append(key, new Blob([value.getStream()]), value.getName());
            }
            else {

				formData.append(key, value);
            }
        }
    }

	async formRequest(requestInstance, pack, instanceNumber, classMemberDetail) {

		super.formRequest(requestInstance, pack, instanceNumber);

		var classDetail = classDetailMap[pack];

		var request = {};

		if(classDetail.hasOwnProperty(Constants.INTERFACE) && classDetail[Constants.INTERFACE]) {

			var classes = classDetail[Constants.CLASSES];

            var baseName = pack.split('/').slice(0, -1);

            let className = await this.getFileName(requestInstance.constructor.name);

            baseName.push(className);

            let requestObjectClassName = baseName.join('/');

            for (let classname of classes) {

				if(classname.toLowerCase() == requestObjectClassName.toLowerCase()) {

					classDetail = classDetailMap[requestObjectClassName];

                    break;
                }
            }
		}

		for (let memberName in classDetail) {

			var modification = null;

			var memberDetail = classDetail[memberName];

			// check and neglect read_only
			if ((memberDetail.hasOwnProperty(Constants.READ_ONLY) && memberDetail[Constants.READ_ONLY] == Constants.TRUE) || !memberDetail.hasOwnProperty(Constants.NAME)) {

				continue;
            }

            try {

                modification = requestInstance.isKeyModified(memberDetail[Constants.NAME]);
            }
            catch(e) {

                throw new SDKException(Constants.EXCEPTION_IS_KEY_MODIFIED, null, null, e);
            }

			// check required
			if (modification == null || modification === 0 && memberDetail.hasOwnProperty(Constants.REQUIRED) && memberDetail[Constants.REQUIRED] == Constants.TRUE) {

				throw new SDKException(Constants.MANDATORY_VALUE_MISSING_ERROR, Constants.MANDATORY_KEY_MISSING_ERROR + memberName);
			}

			var fieldValue = Reflect.get(requestInstance, memberName);

			if (modification != null && modification !== 0 && await this.valueChecker(requestInstance.constructor.name, memberName, memberDetail, fieldValue, this.uniqueValuesMap, instanceNumber) === true) {

				var keyName = memberDetail[Constants.NAME];

				var type = memberDetail[Constants.TYPE];

				if (type.toLowerCase() == Constants.LIST_NAMESPACE.toLowerCase()) {

					request[keyName] = await this.setJSONArray(fieldValue, memberDetail);
				}
				else if (type.toLowerCase() == Constants.MAP_NAMESPACE.toLowerCase()) {

					request[keyName] = await this.setJSONObject(fieldValue, memberDetail);
				}
				else if (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {

					request[keyName] = await this.formRequest(fieldValue, memberDetail[Constants.STRUCTURE_NAME], 0, memberDetail);
				}
				else {

					request[keyName] = fieldValue;
				}
			}
		}

		return request;
	}

	async setJSONObject(fieldValue, memberDetail) {

		var jsonObject = {};

		var requestObject = fieldValue;

		if (memberDetail == null) {

			for (let key of Array.from(requestObject.keys())) {

				jsonObject[key] = await this.redirectorForObjectToJSON(requestObject.get(key));
            }
		}
		else {

			var keysDetail = memberDetail[Constants.KEYS];

			for (let keyIndex = 0; keyIndex < keysDetail.length; keyIndex++) {

				let keyDetail = keysDetail[keyIndex];

				let keyName = keyDetail[Constants.NAME];

				let keyValue = null;

				if (requestObject.hasOwnProperty(keyName) && requestObject[keyName] != null) {

					if (keyDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {

						keyValue = await this.formRequest(requestObject[keyName], keyDetail[Constants.STRUCTURE_NAME], 0, memberDetail);

						jsonObject[keyName] = keyValue;
					}
					else {

						keyValue = requestObject[keyName];

						jsonObject[keyName] = await this.redirectorForObjectToJSON(keyValue);
					}
				}
			}
		}

		return jsonObject;
	}

	async setJSONArray(fieldValue, memberDetail) {

		var jsonArray = [];

		var requestObjects = fieldValue;

		if (memberDetail == null) {

			for (let request of requestObjects) {

				jsonArray.push(await this.redirectorForObjectToJSON(request));
			}
		}
		else if (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {

			let instanceCount = 0;

			let pack = memberDetail[Constants.STRUCTURE_NAME];

			for (let request of requestObjects) {

				jsonArray.push(await this.formRequest(request, pack, instanceCount++, memberDetail));
			}
		}
		else {

			for (let request of requestObjects) {

				jsonArray.push(await this.redirectorForObjectToJSON(request));
			}
		}

		return jsonArray;
	}

	redirectorForObjectToJSON(request) {

		let type = Object.prototype.toString.call(request)

		if (type.toLowerCase() == Constants.ARRAY_KEY.toLowerCase()) {

			return this.setJSONArray(request, null);
		}
		else if (type.toLowerCase() == Constants.MAP_KEY.toLowerCase()) {

			return this.setJSONObject(request, null);
		}
		else {

			return request;
		}
	}

	getWrappedResponse(response, pack) {

		super.getWrappedResponse(response, pack);
	}

	getResponse(responseJson, pack) {

		super.getResponse(responseJson, pack);
	}

	getFileName(name) {

		let fileName = [];

		let nameParts = name.split(/([A-Z][a-z]+)/).filter(function (e) {

			return e;
		});

		fileName.push(nameParts[0].toLowerCase());

		for (let i = 1; i < nameParts.length; i++) {

			fileName.push(nameParts[i].toLowerCase());
		}

		return fileName.join("_");
	}
}