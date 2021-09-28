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

		GetRelatedRecordHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "RelatedRecord.Model.GetRelatedRecordHeader"),


		},

		DelinkRecordsHeader : {

		},

		DeleteRelatedRecordUsingExternalIDHeader : {

		},

		GetRelatedRecordsParam : {
			PAGE : 	new Param("page", "RelatedRecord.Model.GetRelatedRecordsParam"),

			PER_PAGE : 	new Param("per_page", "RelatedRecord.Model.GetRelatedRecordsParam"),


		},

		UpdateRelatedRecordUsingExternalIDHeader : {

		},

		GetRelatedRecordsUsingExternalIDParam : {
			PAGE : 	new Param("page", "RelatedRecord.Model.GetRelatedRecordsUsingExternalIDParam"),

			PER_PAGE : 	new Param("per_page", "RelatedRecord.Model.GetRelatedRecordsUsingExternalIDParam"),


		},

		DeleteRelatedRecordsUsingExternalIDHeader : {

		},

		GetRelatedRecordUsingExternalIDHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "RelatedRecord.Model.GetRelatedRecordUsingExternalIDHeader"),


		},

		UpdateRelatedRecordsUsingExternalIDHeader : {

		},

		GetRelatedRecordsUsingExternalIDHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "RelatedRecord.Model.GetRelatedRecordsUsingExternalIDHeader"),


		},

		DeleteRelatedRecordsUsingExternalIDParam : {
			IDS : 	new Param("ids", "RelatedRecord.Model.DeleteRelatedRecordsUsingExternalIDParam"),


		},

		DelinkRecordHeader : {

		},

		UpdateRelatedRecordHeader : {

		},

		GetRelatedRecordsHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "RelatedRecord.Model.GetRelatedRecordsHeader"),


		},

		UpdateRelatedRecordsHeader : {

		},

		DelinkRecordsParam : {
			IDS : 	new Param("ids", "RelatedRecord.Model.DelinkRecordsParam"),


		}
	},
	Operations : class {


		/**
		 * Creates an instance of RelatedRecordsOperations with the given parameters
		 * @param {String} relatedListAPIName A String
		 * @param {String} moduleAPIName A String
		 * @param {String} xExternal A String
		 */
		constructor(relatedListAPIName, moduleAPIName, xExternal=null){
			if((!(Object.prototype.toString.call(relatedListAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedListAPIName EXPECTED TYPE: String", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
			if((xExternal != null) && (!(Object.prototype.toString.call(xExternal) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: xExternal EXPECTED TYPE: String", null, null);
			}
						this.relatedListAPIName = relatedListAPIName;
						this.moduleAPIName = moduleAPIName;
						this.xExternal = xExternal;

		}

		/**
		 * The method to get related records
		 * @param {Long} recordId A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRelatedRecords(recordId, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
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
			apiPath = apiPath.concat(recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.GetRelatedRecordsHeader"), this.xExternal);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update related records
		 * @param {Long} recordId A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateRelatedRecords(recordId, request){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.RelatedRecord.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.UpdateRelatedRecordsHeader"), this.xExternal);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delink records
		 * @param {Long} recordId A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async delinkRecords(recordId, paramInstance=null){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.DelinkRecordsHeader"), this.xExternal);
			handlerInstance.setParam(paramInstance);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get related records using external id
		 * @param {String} externalValue A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRelatedRecordsUsingExternalId(externalValue, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(externalValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
			}
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
			apiPath = apiPath.concat(externalValue.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.GetRelatedRecordsUsingExternalIDHeader"), this.xExternal);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update related records using external id
		 * @param {String} externalValue A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateRelatedRecordsUsingExternalId(externalValue, request){
			if((!(Object.prototype.toString.call(externalValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.RelatedRecord.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(externalValue.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.UpdateRelatedRecordsUsingExternalIDHeader"), this.xExternal);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete related records using external id
		 * @param {String} externalValue A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteRelatedRecordsUsingExternalId(externalValue, paramInstance=null){
			if((!(Object.prototype.toString.call(externalValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(externalValue.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.DeleteRelatedRecordsUsingExternalIDHeader"), this.xExternal);
			handlerInstance.setParam(paramInstance);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get related record
		 * @param {Long} relatedRecordId A BigInt
		 * @param {Long} recordId A BigInt
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRelatedRecord(relatedRecordId, recordId, headerInstance=null){
			if((!(Object.prototype.toString.call(relatedRecordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedRecordId EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(relatedRecordId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.GetRelatedRecordHeader"), this.xExternal);
			handlerInstance.setHeader(headerInstance);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update related record
		 * @param {Long} relatedRecordId A BigInt
		 * @param {Long} recordId A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateRelatedRecord(relatedRecordId, recordId, request){
			if((!(Object.prototype.toString.call(relatedRecordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedRecordId EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.RelatedRecord.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(relatedRecordId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.UpdateRelatedRecordHeader"), this.xExternal);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delink record
		 * @param {Long} relatedRecordId A BigInt
		 * @param {Long} recordId A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async delinkRecord(relatedRecordId, recordId){
			if((!(Object.prototype.toString.call(relatedRecordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedRecordId EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(recordId.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(relatedRecordId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.DelinkRecordHeader"), this.xExternal);
			await Utility.getFields(this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get related record using external id
		 * @param {String} externalFieldValue A String
		 * @param {String} externalValue A String
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRelatedRecordUsingExternalId(externalFieldValue, externalValue, headerInstance=null){
			if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
			}
			if((!(Object.prototype.toString.call(externalValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(externalValue.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(externalFieldValue.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.GetRelatedRecordUsingExternalIDHeader"), this.xExternal);
			handlerInstance.setHeader(headerInstance);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update related record using external id
		 * @param {String} externalFieldValue A String
		 * @param {String} externalValue A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateRelatedRecordUsingExternalId(externalFieldValue, externalValue, request){
			if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
			}
			if((!(Object.prototype.toString.call(externalValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.RelatedRecord.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(externalValue.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(externalFieldValue.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.UpdateRelatedRecordUsingExternalIDHeader"), this.xExternal);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete related record using external id
		 * @param {String} externalFieldValue A String
		 * @param {String} externalValue A String
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteRelatedRecordUsingExternalId(externalFieldValue, externalValue){
			if((!(Object.prototype.toString.call(externalFieldValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalFieldValue EXPECTED TYPE: String", null, null);
			}
			if((!(Object.prototype.toString.call(externalValue) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: externalValue EXPECTED TYPE: String", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(externalValue.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.relatedListAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(externalFieldValue.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			await handlerInstance.addHeader(new Header("X-EXTERNAL", "RelatedRecord.Model.DeleteRelatedRecordUsingExternalIDHeader"), this.xExternal);
			await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
			return handlerInstance.apiCall("RelatedRecord.Model.ActionHandler", "application/json");

		}

	},

}