ZCRM.ShareRecord = {
	Model : {
		ActionHandler : class{
			constructor(){

			}


		},

		DeleteActionResponse : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		DeleteActionHandler : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

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

		SharedThrough : class{
			constructor(){

				this.module=null;
				this.id=null;
				this.entityName=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the module
			 * @returns {Module} An instance of Module
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {Module} module An instance of Module
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.Module.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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
			 * The method to get the entityName
			 * @returns {String} A String representing the entityName
			 */
			getEntityName()	{
				return this.entityName;

			}

			/**
			 * The method to set the value to entityName
			 * @param {String} entityName A String
			 */
			setEntityName(entityName)	{
				if((entityName != null) && (!(Object.prototype.toString.call(entityName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: entityName EXPECTED TYPE: String", null, null);
				}
				this.entityName = entityName;
				this.keyModified.set("entity_name", 1);

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

		ResponseWrapper : class{
			constructor(){

				this.share=null;
				this.shareableUser=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the share
			 * @returns {List} An Array representing the share
			 */
			getShare()	{
				return this.share;

			}

			/**
			 * The method to set the value to share
			 * @param {List} share An Array
			 */
			setShare(share)	{
				if((share != null) && (!(Object.prototype.toString.call(share) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: share EXPECTED TYPE: Array", null, null);
				}
				this.share = share;
				this.keyModified.set("share", 1);

			}

			/**
			 * The method to get the shareableUser
			 * @returns {List} An Array representing the shareableUser
			 */
			getShareableUser()	{
				return this.shareableUser;

			}

			/**
			 * The method to set the value to shareableUser
			 * @param {List} shareableUser An Array
			 */
			setShareableUser(shareableUser)	{
				if((shareableUser != null) && (!(Object.prototype.toString.call(shareableUser) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shareableUser EXPECTED TYPE: Array", null, null);
				}
				this.shareableUser = shareableUser;
				this.keyModified.set("shareable_user", 1);

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

		ShareRecord : class{
			constructor(){

				this.shareRelatedRecords=null;
				this.sharedThrough=null;
				this.sharedTime=null;
				this.permission=null;
				this.sharedBy=null;
				this.user=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the shareRelatedRecords
			 * @returns {Boolean} A Boolean representing the shareRelatedRecords
			 */
			getShareRelatedRecords()	{
				return this.shareRelatedRecords;

			}

			/**
			 * The method to set the value to shareRelatedRecords
			 * @param {Boolean} shareRelatedRecords A Boolean
			 */
			setShareRelatedRecords(shareRelatedRecords)	{
				if((shareRelatedRecords != null) && (!(Object.prototype.toString.call(shareRelatedRecords) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shareRelatedRecords EXPECTED TYPE: Boolean", null, null);
				}
				this.shareRelatedRecords = shareRelatedRecords;
				this.keyModified.set("share_related_records", 1);

			}

			/**
			 * The method to get the sharedThrough
			 * @returns {SharedThrough} An instance of SharedThrough
			 */
			getSharedThrough()	{
				return this.sharedThrough;

			}

			/**
			 * The method to set the value to sharedThrough
			 * @param {SharedThrough} sharedThrough An instance of SharedThrough
			 */
			setSharedThrough(sharedThrough)	{
				if((sharedThrough != null) && (!(sharedThrough instanceof ZCRM.ShareRecord.Model.SharedThrough))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedThrough EXPECTED TYPE: SharedThrough", null, null);
				}
				this.sharedThrough = sharedThrough;
				this.keyModified.set("shared_through", 1);

			}

			/**
			 * The method to get the sharedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getSharedTime()	{
				return this.sharedTime;

			}

			/**
			 * The method to set the value to sharedTime
			 * @param {OffsetDateTime} sharedTime An instance of OffsetDateTime
			 */
			setSharedTime(sharedTime)	{
				if((sharedTime != null) && (!(sharedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedTime EXPECTED TYPE: Date", null, null);
				}
				this.sharedTime = sharedTime;
				this.keyModified.set("shared_time", 1);

			}

			/**
			 * The method to get the permission
			 * @returns {String} A String representing the permission
			 */
			getPermission()	{
				return this.permission;

			}

			/**
			 * The method to set the value to permission
			 * @param {String} permission A String
			 */
			setPermission(permission)	{
				if((permission != null) && (!(Object.prototype.toString.call(permission) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permission EXPECTED TYPE: String", null, null);
				}
				this.permission = permission;
				this.keyModified.set("permission", 1);

			}

			/**
			 * The method to get the sharedBy
			 * @returns {User} An instance of User
			 */
			getSharedBy()	{
				return this.sharedBy;

			}

			/**
			 * The method to set the value to sharedBy
			 * @param {User} sharedBy An instance of User
			 */
			setSharedBy(sharedBy)	{
				if((sharedBy != null) && (!(sharedBy instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedBy EXPECTED TYPE: User", null, null);
				}
				this.sharedBy = sharedBy;
				this.keyModified.set("shared_by", 1);

			}

			/**
			 * The method to get the user
			 * @returns {User} An instance of User
			 */
			getUser()	{
				return this.user;

			}

			/**
			 * The method to set the value to user
			 * @param {User} user An instance of User
			 */
			setUser(user)	{
				if((user != null) && (!(user instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: user EXPECTED TYPE: User", null, null);
				}
				this.user = user;
				this.keyModified.set("user", 1);

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

		DeleteActionWrapper : class{
			constructor(){

				this.share=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the share
			 * @returns {DeleteActionResponse} An instance of DeleteActionResponse
			 */
			getShare()	{
				return this.share;

			}

			/**
			 * The method to set the value to share
			 * @param {DeleteActionResponse} share An instance of DeleteActionResponse
			 */
			setShare(share)	{
				if((share != null) && (!(share instanceof ZCRM.ShareRecord.Model.DeleteActionResponse))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: share EXPECTED TYPE: DeleteActionResponse", null, null);
				}
				this.share = share;
				this.keyModified.set("share", 1);

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

				this.share=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the share
			 * @returns {List} An Array representing the share
			 */
			getShare()	{
				return this.share;

			}

			/**
			 * The method to set the value to share
			 * @param {List} share An Array
			 */
			setShare(share)	{
				if((share != null) && (!(Object.prototype.toString.call(share) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: share EXPECTED TYPE: Array", null, null);
				}
				this.share = share;
				this.keyModified.set("share", 1);

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

				this.share=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the share
			 * @returns {List} An Array representing the share
			 */
			getShare()	{
				return this.share;

			}

			/**
			 * The method to set the value to share
			 * @param {List} share An Array
			 */
			setShare(share)	{
				if((share != null) && (!(Object.prototype.toString.call(share) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: share EXPECTED TYPE: Array", null, null);
				}
				this.share = share;
				this.keyModified.set("share", 1);

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

		GetSharedRecordDetailsParam : {
			SHAREDTO : 	new Param("sharedTo", "ShareRecord.Model.GetSharedRecordDetailsParam"),

			VIEW : 	new Param("view", "ShareRecord.Model.GetSharedRecordDetailsParam"),


		}
	},
	Operations : class {


		/**
		 * Creates an instance of ShareRecordsOperations with the given parameters
		 * @param {Long} recordId A BigInt
		 * @param {String} moduleAPIName A String
		 */
		constructor(recordId, moduleAPIName){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
						this.recordId = recordId;
						this.moduleAPIName = moduleAPIName;

		}

		/**
		 * The method to get shared record details
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getSharedRecordDetails(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/actions/share");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("ShareRecord.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to share record
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async shareRecord(request){
			if((request != null) && (!(request instanceof ZCRM.ShareRecord.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/actions/share");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("ShareRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update share permissions
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateSharePermissions(request){
			if((request != null) && (!(request instanceof ZCRM.ShareRecord.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/actions/share");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("ShareRecord.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to revoke shared record
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async revokeSharedRecord(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/actions/share");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			return handlerInstance.apiCall("ShareRecord.Model.DeleteActionHandler", "application/json");

		}

	},

}