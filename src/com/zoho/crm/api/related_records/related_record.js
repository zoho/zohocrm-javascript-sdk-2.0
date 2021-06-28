ZCRM.RelatedRecord = {
	Model : {
		ActionHandler : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		APIException : class{
			constructor(){

				this.status=null;
				this.code=null;
				this.message=null;
				this.details=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the status
			 * @returns {Choice} An instance of Choice
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {Choice} status An instance of Choice
			 */
			setStatus(status)	{
				if((status != null) && (!(status instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Choice", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

			}

			/**
			 * The method to get the code
			 * @returns {Choice} An instance of Choice
			 */
			getCode()	{
				return this.code;

			}

			/**
			 * The method to set the value to code
			 * @param {Choice} code An instance of Choice
			 */
			setCode(code)	{
				if((code != null) && (!(code instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: code EXPECTED TYPE: Choice", null, null);
				}
				this.code = code;
				this.keyModified.set("code", 1);

			}

			/**
			 * The method to get the message
			 * @returns {Choice} An instance of Choice
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {Choice} message An instance of Choice
			 */
			setMessage(message)	{
				if((message != null) && (!(message instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: Choice", null, null);
				}
				this.message = message;
				this.keyModified.set("message", 1);

			}

			/**
			 * The method to get the details
			 * @returns {Map} A Map representing the details
			 */
			getDetails()	{
				return this.details;

			}

			/**
			 * The method to set the value to details
			 * @param {Map} details A Map
			 */
			setDetails(details)	{
				if((details != null) && (!(Object.prototype.toString.call(details) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Map", null, null);
				}
				this.details = details;
				this.keyModified.set("details", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		SuccessResponse : class{
			constructor(){

				this.code=null;
				this.details=null;
				this.message=null;
				this.status=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the code
			 * @returns {Choice} An instance of Choice
			 */
			getCode()	{
				return this.code;

			}

			/**
			 * The method to set the value to code
			 * @param {Choice} code An instance of Choice
			 */
			setCode(code)	{
				if((code != null) && (!(code instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: code EXPECTED TYPE: Choice", null, null);
				}
				this.code = code;
				this.keyModified.set("code", 1);

			}

			/**
			 * The method to get the details
			 * @returns {Map} A Map representing the details
			 */
			getDetails()	{
				return this.details;

			}

			/**
			 * The method to set the value to details
			 * @param {Map} details A Map
			 */
			setDetails(details)	{
				if((details != null) && (!(Object.prototype.toString.call(details) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Map", null, null);
				}
				this.details = details;
				this.keyModified.set("details", 1);

			}

			/**
			 * The method to get the message
			 * @returns {Choice} An instance of Choice
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {Choice} message An instance of Choice
			 */
			setMessage(message)	{
				if((message != null) && (!(message instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: Choice", null, null);
				}
				this.message = message;
				this.keyModified.set("message", 1);

			}

			/**
			 * The method to get the status
			 * @returns {Choice} An instance of Choice
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {Choice} status An instance of Choice
			 */
			setStatus(status)	{
				if((status != null) && (!(status instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Choice", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		ActionWrapper : class{
			constructor(){

				this.data=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the data
			 * @returns {List} An Array representing the data
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {List} data An Array
			 */
			setData(data)	{
				if((data != null) && (!(Object.prototype.toString.call(data) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Array", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		ResponseWrapper : class{
			constructor(){

				this.data=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the data
			 * @returns {List} An Array representing the data
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {List} data An Array
			 */
			setData(data)	{
				if((data != null) && (!(Object.prototype.toString.call(data) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Array", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

			}

			/**
			 * The method to get the info
			 * @returns {Info} An instance of Info
			 */
			getInfo()	{
				return this.info;

			}

			/**
			 * The method to set the value to info
			 * @param {Info} info An instance of Info
			 */
			setInfo(info)	{
				if((info != null) && (!(info instanceof ZCRM.Record.Model.Info))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: info EXPECTED TYPE: Info", null, null);
				}
				this.info = info;
				this.keyModified.set("info", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		FileBodyWrapper : class{
			constructor(){

				this.file=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the file
			 * @returns {StreamWrapper} An instance of StreamWrapper
			 */
			getFile()	{
				return this.file;

			}

			/**
			 * The method to set the value to file
			 * @param {StreamWrapper} file An instance of StreamWrapper
			 */
			setFile(file)	{
				if((file != null) && (!(file instanceof StreamWrapper.Model.StreamWrapper))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: file EXPECTED TYPE: StreamWrapper", null, null);
				}
				this.file = file;
				this.keyModified.set("file", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		BodyWrapper : class{
			constructor(){

				this.data=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the data
			 * @returns {List} An Array representing the data
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {List} data An Array
			 */
			setData(data)	{
				if((data != null) && (!(Object.prototype.toString.call(data) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Array", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

			}

			/**
			 * The method to check if the user has modified the given key
			 * @param {String} key A String
			 * @returns {Integer} An Integer representing the modification
			 */
			isKeyModified(key)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if(this.keyModified.has(key)){
					return this.keyModified.get(key);
				}
				return null;

			}

			/**
			 * The method to mark the given key as modified
			 * @param {String} key A String
			 * @param {Integer} modification An Integer
			 */
			setKeyModified(key, modification)	{
				if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
				}
				if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
				}
				this.keyModified.set(key, modification);

			}
		},

		GetRelatedRecordHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "RelatedRecord.Model.GetRelatedRecordHeader"),


		},

		DelinkRecordHeader : {
			X_EXTERNAL : 	new Header("X-EXTERNAL", "RelatedRecord.Model.DelinkRecordHeader"),


		},

		UpdateRelatedRecordHeader : {
			X_EXTERNAL : 	new Header("X-EXTERNAL", "RelatedRecord.Model.UpdateRelatedRecordHeader"),


		},

		GetRelatedRecordsParam : {
			PAGE : 	new Param("page", "RelatedRecord.Model.GetRelatedRecordsParam"),

			PER_PAGE : 	new Param("per_page", "RelatedRecord.Model.GetRelatedRecordsParam"),


		},

		GetRelatedRecordsHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "RelatedRecord.Model.GetRelatedRecordsHeader"),

			X_EXTERNAL : 	new Header("X-EXTERNAL", "RelatedRecord.Model.GetRelatedRecordsHeader"),


		},

		DelinkRecordsParam : {
			IDS : 	new Param("ids", "RelatedRecord.Model.DelinkRecordsParam"),


		}
	},
	Operations : class {


		/**
		 * Creates an instance of RelatedRecordsOperations with the given parameters
		 * @param {String} relatedListAPIName A String
		 * @param {Long} recordId A BigInt
		 * @param {String} moduleAPIName A String
		 */
		constructor(relatedListAPIName, recordId, moduleAPIName){
			if((!(Object.prototype.toString.call(relatedListAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedListAPIName EXPECTED TYPE: String", null, null);
			}
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
						this.relatedListAPIName = relatedListAPIName;
						this.recordId = recordId;
						this.moduleAPIName = moduleAPIName;

		}

		/**
		 * The method to get related records
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRelatedRecords(paramInstance=null, headerInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update related records
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateRelatedRecords(request){
			if((request != null) && (!(request instanceof ZCRM.RelatedRecord.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delink records
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async delinkRecords(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get related record
		 * @param {Long} relatedRecordId A BigInt
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRelatedRecord(relatedRecordId, headerInstance=null){
			if((!(Object.prototype.toString.call(relatedRecordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedRecordId EXPECTED TYPE: BigInt", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(relatedRecordId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setHeader(headerInstance);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update related record
		 * @param {Long} relatedRecordId A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateRelatedRecord(relatedRecordId, request, headerInstance=null){
			if((!(Object.prototype.toString.call(relatedRecordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedRecordId EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.RelatedRecord.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(relatedRecordId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setHeader(headerInstance);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delink record
		 * @param {Long} relatedRecordId A BigInt
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async delinkRecord(relatedRecordId, headerInstance=null){
			if((!(Object.prototype.toString.call(relatedRecordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedRecordId EXPECTED TYPE: BigInt", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(relatedRecordId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setHeader(headerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

	},

}