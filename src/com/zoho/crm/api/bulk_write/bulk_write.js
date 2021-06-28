ZCRM.BulkWrite = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		ResponseWrapper : class{
			constructor(){

			}


		},

		CallBack : class{
			constructor(){

				this.url=null;
				this.method=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the url
			 * @returns {String} A String representing the url
			 */
			getUrl()	{
				return this.url;

			}

			/**
			 * The method to set the value to url
			 * @param {String} url A String
			 */
			setUrl(url)	{
				if((url != null) && (!(Object.prototype.toString.call(url) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: url EXPECTED TYPE: String", null, null);
				}
				this.url = url;
				this.keyModified.set("url", 1);

			}

			/**
			 * The method to get the method
			 * @returns {Choice} An instance of Choice
			 */
			getMethod()	{
				return this.method;

			}

			/**
			 * The method to set the value to method
			 * @param {Choice} method An instance of Choice
			 */
			setMethod(method)	{
				if((method != null) && (!(method instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: method EXPECTED TYPE: Choice", null, null);
				}
				this.method = method;
				this.keyModified.set("method", 1);

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

		RequestWrapper : class{
			constructor(){

				this.characterEncoding=null;
				this.operation=null;
				this.callback=null;
				this.resource=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the characterEncoding
			 * @returns {String} A String representing the characterEncoding
			 */
			getCharacterEncoding()	{
				return this.characterEncoding;

			}

			/**
			 * The method to set the value to characterEncoding
			 * @param {String} characterEncoding A String
			 */
			setCharacterEncoding(characterEncoding)	{
				if((characterEncoding != null) && (!(Object.prototype.toString.call(characterEncoding) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: characterEncoding EXPECTED TYPE: String", null, null);
				}
				this.characterEncoding = characterEncoding;
				this.keyModified.set("character_encoding", 1);

			}

			/**
			 * The method to get the operation
			 * @returns {Choice} An instance of Choice
			 */
			getOperation()	{
				return this.operation;

			}

			/**
			 * The method to set the value to operation
			 * @param {Choice} operation An instance of Choice
			 */
			setOperation(operation)	{
				if((operation != null) && (!(operation instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: operation EXPECTED TYPE: Choice", null, null);
				}
				this.operation = operation;
				this.keyModified.set("operation", 1);

			}

			/**
			 * The method to get the callback
			 * @returns {CallBack} An instance of CallBack
			 */
			getCallback()	{
				return this.callback;

			}

			/**
			 * The method to set the value to callback
			 * @param {CallBack} callback An instance of CallBack
			 */
			setCallback(callback)	{
				if((callback != null) && (!(callback instanceof ZCRM.BulkWrite.Model.CallBack))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: callback EXPECTED TYPE: CallBack", null, null);
				}
				this.callback = callback;
				this.keyModified.set("callback", 1);

			}

			/**
			 * The method to get the resource
			 * @returns {List} An Array representing the resource
			 */
			getResource()	{
				return this.resource;

			}

			/**
			 * The method to set the value to resource
			 * @param {List} resource An Array
			 */
			setResource(resource)	{
				if((resource != null) && (!(Object.prototype.toString.call(resource) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resource EXPECTED TYPE: Array", null, null);
				}
				this.resource = resource;
				this.keyModified.set("resource", 1);

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

		APIException : class{
			constructor(){

				this.code=null;
				this.message=null;
				this.status=null;
				this.details=null;
				this.errorMessage=null;
				this.errorCode=null;
				this.xError=null;
				this.info=null;
				this.xInfo=null;
				this.httpStatus=null;
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
			 * The method to get the errorMessage
			 * @returns {Choice} An instance of Choice
			 */
			getErrorMessage()	{
				return this.errorMessage;

			}

			/**
			 * The method to set the value to errorMessage
			 * @param {Choice} errorMessage An instance of Choice
			 */
			setErrorMessage(errorMessage)	{
				if((errorMessage != null) && (!(errorMessage instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: errorMessage EXPECTED TYPE: Choice", null, null);
				}
				this.errorMessage = errorMessage;
				this.keyModified.set("ERROR_MESSAGE", 1);

			}

			/**
			 * The method to get the errorCode
			 * @returns {Integer} An Integer representing the errorCode
			 */
			getErrorCode()	{
				return this.errorCode;

			}

			/**
			 * The method to set the value to errorCode
			 * @param {Integer} errorCode An Integer
			 */
			setErrorCode(errorCode)	{
				if((errorCode != null) && (!(Object.prototype.toString.call(errorCode) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: errorCode EXPECTED TYPE: Integer", null, null);
				}
				this.errorCode = errorCode;
				this.keyModified.set("ERROR_CODE", 1);

			}

			/**
			 * The method to get the xError
			 * @returns {Choice} An instance of Choice
			 */
			getXError()	{
				return this.xError;

			}

			/**
			 * The method to set the value to xError
			 * @param {Choice} xError An instance of Choice
			 */
			setXError(xError)	{
				if((xError != null) && (!(xError instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: xError EXPECTED TYPE: Choice", null, null);
				}
				this.xError = xError;
				this.keyModified.set("x-error", 1);

			}

			/**
			 * The method to get the info
			 * @returns {Choice} An instance of Choice
			 */
			getInfo()	{
				return this.info;

			}

			/**
			 * The method to set the value to info
			 * @param {Choice} info An instance of Choice
			 */
			setInfo(info)	{
				if((info != null) && (!(info instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: info EXPECTED TYPE: Choice", null, null);
				}
				this.info = info;
				this.keyModified.set("info", 1);

			}

			/**
			 * The method to get the xInfo
			 * @returns {Choice} An instance of Choice
			 */
			getXInfo()	{
				return this.xInfo;

			}

			/**
			 * The method to set the value to xInfo
			 * @param {Choice} xInfo An instance of Choice
			 */
			setXInfo(xInfo)	{
				if((xInfo != null) && (!(xInfo instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: xInfo EXPECTED TYPE: Choice", null, null);
				}
				this.xInfo = xInfo;
				this.keyModified.set("x-info", 1);

			}

			/**
			 * The method to get the httpStatus
			 * @returns {String} A String representing the httpStatus
			 */
			getHttpStatus()	{
				return this.httpStatus;

			}

			/**
			 * The method to set the value to httpStatus
			 * @param {String} httpStatus A String
			 */
			setHttpStatus(httpStatus)	{
				if((httpStatus != null) && (!(Object.prototype.toString.call(httpStatus) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: httpStatus EXPECTED TYPE: String", null, null);
				}
				this.httpStatus = httpStatus;
				this.keyModified.set("http_status", 1);

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

		BulkWriteResponse : class{
			constructor(){

				this.status=null;
				this.characterEncoding=null;
				this.resource=null;
				this.id=null;
				this.callback=null;
				this.result=null;
				this.createdBy=null;
				this.operation=null;
				this.createdTime=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the status
			 * @returns {String} A String representing the status
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {String} status A String
			 */
			setStatus(status)	{
				if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

			}

			/**
			 * The method to get the characterEncoding
			 * @returns {String} A String representing the characterEncoding
			 */
			getCharacterEncoding()	{
				return this.characterEncoding;

			}

			/**
			 * The method to set the value to characterEncoding
			 * @param {String} characterEncoding A String
			 */
			setCharacterEncoding(characterEncoding)	{
				if((characterEncoding != null) && (!(Object.prototype.toString.call(characterEncoding) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: characterEncoding EXPECTED TYPE: String", null, null);
				}
				this.characterEncoding = characterEncoding;
				this.keyModified.set("character_encoding", 1);

			}

			/**
			 * The method to get the resource
			 * @returns {List} An Array representing the resource
			 */
			getResource()	{
				return this.resource;

			}

			/**
			 * The method to set the value to resource
			 * @param {List} resource An Array
			 */
			setResource(resource)	{
				if((resource != null) && (!(Object.prototype.toString.call(resource) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resource EXPECTED TYPE: Array", null, null);
				}
				this.resource = resource;
				this.keyModified.set("resource", 1);

			}

			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.id;

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.id = id;
				this.keyModified.set("id", 1);

			}

			/**
			 * The method to get the callback
			 * @returns {CallBack} An instance of CallBack
			 */
			getCallback()	{
				return this.callback;

			}

			/**
			 * The method to set the value to callback
			 * @param {CallBack} callback An instance of CallBack
			 */
			setCallback(callback)	{
				if((callback != null) && (!(callback instanceof ZCRM.BulkWrite.Model.CallBack))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: callback EXPECTED TYPE: CallBack", null, null);
				}
				this.callback = callback;
				this.keyModified.set("callback", 1);

			}

			/**
			 * The method to get the result
			 * @returns {Result} An instance of Result
			 */
			getResult()	{
				return this.result;

			}

			/**
			 * The method to set the value to result
			 * @param {Result} result An instance of Result
			 */
			setResult(result)	{
				if((result != null) && (!(result instanceof ZCRM.BulkWrite.Model.Result))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: result EXPECTED TYPE: Result", null, null);
				}
				this.result = result;
				this.keyModified.set("result", 1);

			}

			/**
			 * The method to get the createdBy
			 * @returns {User} An instance of User
			 */
			getCreatedBy()	{
				return this.createdBy;

			}

			/**
			 * The method to set the value to createdBy
			 * @param {User} createdBy An instance of User
			 */
			setCreatedBy(createdBy)	{
				if((createdBy != null) && (!(createdBy instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: User", null, null);
				}
				this.createdBy = createdBy;
				this.keyModified.set("created_by", 1);

			}

			/**
			 * The method to get the operation
			 * @returns {String} A String representing the operation
			 */
			getOperation()	{
				return this.operation;

			}

			/**
			 * The method to set the value to operation
			 * @param {String} operation A String
			 */
			setOperation(operation)	{
				if((operation != null) && (!(Object.prototype.toString.call(operation) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: operation EXPECTED TYPE: String", null, null);
				}
				this.operation = operation;
				this.keyModified.set("operation", 1);

			}

			/**
			 * The method to get the createdTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getCreatedTime()	{
				return this.createdTime;

			}

			/**
			 * The method to set the value to createdTime
			 * @param {OffsetDateTime} createdTime An instance of OffsetDateTime
			 */
			setCreatedTime(createdTime)	{
				if((createdTime != null) && (!(createdTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
				}
				this.createdTime = createdTime;
				this.keyModified.set("created_time", 1);

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

		File : class{
			constructor(){

				this.status=null;
				this.name=null;
				this.addedCount=null;
				this.skippedCount=null;
				this.updatedCount=null;
				this.totalCount=null;
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
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.name;

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.name = name;
				this.keyModified.set("name", 1);

			}

			/**
			 * The method to get the addedCount
			 * @returns {Integer} An Integer representing the addedCount
			 */
			getAddedCount()	{
				return this.addedCount;

			}

			/**
			 * The method to set the value to addedCount
			 * @param {Integer} addedCount An Integer
			 */
			setAddedCount(addedCount)	{
				if((addedCount != null) && (!(Object.prototype.toString.call(addedCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: addedCount EXPECTED TYPE: Integer", null, null);
				}
				this.addedCount = addedCount;
				this.keyModified.set("added_count", 1);

			}

			/**
			 * The method to get the skippedCount
			 * @returns {Integer} An Integer representing the skippedCount
			 */
			getSkippedCount()	{
				return this.skippedCount;

			}

			/**
			 * The method to set the value to skippedCount
			 * @param {Integer} skippedCount An Integer
			 */
			setSkippedCount(skippedCount)	{
				if((skippedCount != null) && (!(Object.prototype.toString.call(skippedCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: skippedCount EXPECTED TYPE: Integer", null, null);
				}
				this.skippedCount = skippedCount;
				this.keyModified.set("skipped_count", 1);

			}

			/**
			 * The method to get the updatedCount
			 * @returns {Integer} An Integer representing the updatedCount
			 */
			getUpdatedCount()	{
				return this.updatedCount;

			}

			/**
			 * The method to set the value to updatedCount
			 * @param {Integer} updatedCount An Integer
			 */
			setUpdatedCount(updatedCount)	{
				if((updatedCount != null) && (!(Object.prototype.toString.call(updatedCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: updatedCount EXPECTED TYPE: Integer", null, null);
				}
				this.updatedCount = updatedCount;
				this.keyModified.set("updated_count", 1);

			}

			/**
			 * The method to get the totalCount
			 * @returns {Integer} An Integer representing the totalCount
			 */
			getTotalCount()	{
				return this.totalCount;

			}

			/**
			 * The method to set the value to totalCount
			 * @param {Integer} totalCount An Integer
			 */
			setTotalCount(totalCount)	{
				if((totalCount != null) && (!(Object.prototype.toString.call(totalCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: totalCount EXPECTED TYPE: Integer", null, null);
				}
				this.totalCount = totalCount;
				this.keyModified.set("total_count", 1);

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

		Resource : class{
			constructor(){

				this.status=null;
				this.type=null;
				this.module=null;
				this.fileId=null;
				this.ignoreEmpty=null;
				this.findBy=null;
				this.fieldMappings=null;
				this.file=null;
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
			 * The method to get the type
			 * @returns {Choice} An instance of Choice
			 */
			getType()	{
				return this.type;

			}

			/**
			 * The method to set the value to type
			 * @param {Choice} type An instance of Choice
			 */
			setType(type)	{
				if((type != null) && (!(type instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: Choice", null, null);
				}
				this.type = type;
				this.keyModified.set("type", 1);

			}

			/**
			 * The method to get the module
			 * @returns {String} A String representing the module
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {String} module A String
			 */
			setModule(module)	{
				if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

			}

			/**
			 * The method to get the fileId
			 * @returns {String} A String representing the fileId
			 */
			getFileId()	{
				return this.fileId;

			}

			/**
			 * The method to set the value to fileId
			 * @param {String} fileId A String
			 */
			setFileId(fileId)	{
				if((fileId != null) && (!(Object.prototype.toString.call(fileId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileId EXPECTED TYPE: String", null, null);
				}
				this.fileId = fileId;
				this.keyModified.set("file_id", 1);

			}

			/**
			 * The method to get the ignoreEmpty
			 * @returns {Boolean} A Boolean representing the ignoreEmpty
			 */
			getIgnoreEmpty()	{
				return this.ignoreEmpty;

			}

			/**
			 * The method to set the value to ignoreEmpty
			 * @param {Boolean} ignoreEmpty A Boolean
			 */
			setIgnoreEmpty(ignoreEmpty)	{
				if((ignoreEmpty != null) && (!(Object.prototype.toString.call(ignoreEmpty) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ignoreEmpty EXPECTED TYPE: Boolean", null, null);
				}
				this.ignoreEmpty = ignoreEmpty;
				this.keyModified.set("ignore_empty", 1);

			}

			/**
			 * The method to get the findBy
			 * @returns {String} A String representing the findBy
			 */
			getFindBy()	{
				return this.findBy;

			}

			/**
			 * The method to set the value to findBy
			 * @param {String} findBy A String
			 */
			setFindBy(findBy)	{
				if((findBy != null) && (!(Object.prototype.toString.call(findBy) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: findBy EXPECTED TYPE: String", null, null);
				}
				this.findBy = findBy;
				this.keyModified.set("find_by", 1);

			}

			/**
			 * The method to get the fieldMappings
			 * @returns {List} An Array representing the fieldMappings
			 */
			getFieldMappings()	{
				return this.fieldMappings;

			}

			/**
			 * The method to set the value to fieldMappings
			 * @param {List} fieldMappings An Array
			 */
			setFieldMappings(fieldMappings)	{
				if((fieldMappings != null) && (!(Object.prototype.toString.call(fieldMappings) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldMappings EXPECTED TYPE: Array", null, null);
				}
				this.fieldMappings = fieldMappings;
				this.keyModified.set("field_mappings", 1);

			}

			/**
			 * The method to get the file
			 * @returns {File} An instance of File
			 */
			getFile()	{
				return this.file;

			}

			/**
			 * The method to set the value to file
			 * @param {File} file An instance of File
			 */
			setFile(file)	{
				if((file != null) && (!(file instanceof ZCRM.BulkWrite.Model.File))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: file EXPECTED TYPE: File", null, null);
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

		FieldMapping : class{
			constructor(){

				this.apiName=null;
				this.index=null;
				this.format=null;
				this.findBy=null;
				this.defaultValue=null;
				this.module=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the apiName
			 * @returns {String} A String representing the apiName
			 */
			getAPIName()	{
				return this.apiName;

			}

			/**
			 * The method to set the value to apiName
			 * @param {String} apiName A String
			 */
			setAPIName(apiName)	{
				if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
				}
				this.apiName = apiName;
				this.keyModified.set("api_name", 1);

			}

			/**
			 * The method to get the index
			 * @returns {Integer} An Integer representing the index
			 */
			getIndex()	{
				return this.index;

			}

			/**
			 * The method to set the value to index
			 * @param {Integer} index An Integer
			 */
			setIndex(index)	{
				if((index != null) && (!(Object.prototype.toString.call(index) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: index EXPECTED TYPE: Integer", null, null);
				}
				this.index = index;
				this.keyModified.set("index", 1);

			}

			/**
			 * The method to get the format
			 * @returns {String} A String representing the format
			 */
			getFormat()	{
				return this.format;

			}

			/**
			 * The method to set the value to format
			 * @param {String} format A String
			 */
			setFormat(format)	{
				if((format != null) && (!(Object.prototype.toString.call(format) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: format EXPECTED TYPE: String", null, null);
				}
				this.format = format;
				this.keyModified.set("format", 1);

			}

			/**
			 * The method to get the findBy
			 * @returns {String} A String representing the findBy
			 */
			getFindBy()	{
				return this.findBy;

			}

			/**
			 * The method to set the value to findBy
			 * @param {String} findBy A String
			 */
			setFindBy(findBy)	{
				if((findBy != null) && (!(Object.prototype.toString.call(findBy) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: findBy EXPECTED TYPE: String", null, null);
				}
				this.findBy = findBy;
				this.keyModified.set("find_by", 1);

			}

			/**
			 * The method to get the defaultValue
			 * @returns {Map} A Map representing the defaultValue
			 */
			getDefaultValue()	{
				return this.defaultValue;

			}

			/**
			 * The method to set the value to defaultValue
			 * @param {Map} defaultValue A Map
			 */
			setDefaultValue(defaultValue)	{
				if((defaultValue != null) && (!(Object.prototype.toString.call(defaultValue) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultValue EXPECTED TYPE: Map", null, null);
				}
				this.defaultValue = defaultValue;
				this.keyModified.set("default_value", 1);

			}

			/**
			 * The method to get the module
			 * @returns {String} A String representing the module
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {String} module A String
			 */
			setModule(module)	{
				if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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

		Result : class{
			constructor(){

				this.downloadUrl=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the downloadUrl
			 * @returns {String} A String representing the downloadUrl
			 */
			getDownloadUrl()	{
				return this.downloadUrl;

			}

			/**
			 * The method to set the value to downloadUrl
			 * @param {String} downloadUrl A String
			 */
			setDownloadUrl(downloadUrl)	{
				if((downloadUrl != null) && (!(Object.prototype.toString.call(downloadUrl) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: downloadUrl EXPECTED TYPE: String", null, null);
				}
				this.downloadUrl = downloadUrl;
				this.keyModified.set("download_url", 1);

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

		UploadFileHeader : {
			FEATURE : 	new Header("feature", "BulkWrite.Model.UploadFileHeader"),

			X_CRM_ORG : 	new Header("X-CRM-ORG", "BulkWrite.Model.UploadFileHeader"),


		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to upload file
		 * @param {FileBodyWrapper} request An instance of FileBodyWrapper
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async uploadFile(request, headerInstance=null){
			if((request != null) && (!(request instanceof ZCRM.BulkWrite.Model.FileBodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FileBodyWrapper", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("https://content.zohoapis.com/crm/v2/upload");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("multipart/form-data");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setHeader(headerInstance);
			return handlerInstance.apiCall("BulkWrite.Model.ActionResponse", "application/json");

		}

		/**
		 * The method to create bulk write job
		 * @param {RequestWrapper} request An instance of RequestWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createBulkWriteJob(request){
			if((request != null) && (!(request instanceof ZCRM.BulkWrite.Model.RequestWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: RequestWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/bulk/v2/write");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("BulkWrite.Model.ActionResponse", "application/json");

		}

		/**
		 * The method to get bulk write job details
		 * @param {Long} jobId A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getBulkWriteJobDetails(jobId){
			if((!(Object.prototype.toString.call(jobId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jobId EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/bulk/v2/write/");
			apiPath = apiPath.concat(jobId.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("BulkWrite.Model.ResponseWrapper", "application/json");

		}

		/**
		 * The method to download bulk write result
		 * @param {String} downloadUrl A String
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async downloadBulkWriteResult(downloadUrl){
			if((!(Object.prototype.toString.call(downloadUrl) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: downloadUrl EXPECTED TYPE: String", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(downloadUrl.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("BulkWrite.Model.ResponseHandler", "application/octet-stream");

		}
	},

}