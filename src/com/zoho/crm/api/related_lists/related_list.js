ZCRM.RelatedList = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ResponseWrapper : class{
			constructor(){

				this.relatedLists=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the relatedLists
			 * @returns {List} An Array representing the relatedLists
			 */
			getRelatedLists()	{
				return this.relatedLists;

			}

			/**
			 * The method to set the value to relatedLists
			 * @param {List} relatedLists An Array
			 */
			setRelatedLists(relatedLists)	{
				if((relatedLists != null) && (!(Object.prototype.toString.call(relatedLists) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedLists EXPECTED TYPE: Array", null, null);
				}
				this.relatedLists = relatedLists;
				this.keyModified.set("related_lists", 1);

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

		RelatedList : class{
			constructor(){

				this.id=null;
				this.sequenceNumber=null;
				this.displayLabel=null;
				this.apiName=null;
				this.module=null;
				this.name=null;
				this.action=null;
				this.href=null;
				this.type=null;
				this.connectedmodule=null;
				this.linkingmodule=null;
				this.keyModified=new Map();
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
			 * The method to get the sequenceNumber
			 * @returns {String} A String representing the sequenceNumber
			 */
			getSequenceNumber()	{
				return this.sequenceNumber;

			}

			/**
			 * The method to set the value to sequenceNumber
			 * @param {String} sequenceNumber A String
			 */
			setSequenceNumber(sequenceNumber)	{
				if((sequenceNumber != null) && (!(Object.prototype.toString.call(sequenceNumber) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumber EXPECTED TYPE: String", null, null);
				}
				this.sequenceNumber = sequenceNumber;
				this.keyModified.set("sequence_number", 1);

			}

			/**
			 * The method to get the displayLabel
			 * @returns {String} A String representing the displayLabel
			 */
			getDisplayLabel()	{
				return this.displayLabel;

			}

			/**
			 * The method to set the value to displayLabel
			 * @param {String} displayLabel A String
			 */
			setDisplayLabel(displayLabel)	{
				if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
				}
				this.displayLabel = displayLabel;
				this.keyModified.set("display_label", 1);

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
			 * The method to get the action
			 * @returns {String} A String representing the action
			 */
			getAction()	{
				return this.action;

			}

			/**
			 * The method to set the value to action
			 * @param {String} action A String
			 */
			setAction(action)	{
				if((action != null) && (!(Object.prototype.toString.call(action) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: action EXPECTED TYPE: String", null, null);
				}
				this.action = action;
				this.keyModified.set("action", 1);

			}

			/**
			 * The method to get the href
			 * @returns {String} A String representing the href
			 */
			getHref()	{
				return this.href;

			}

			/**
			 * The method to set the value to href
			 * @param {String} href A String
			 */
			setHref(href)	{
				if((href != null) && (!(Object.prototype.toString.call(href) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: href EXPECTED TYPE: String", null, null);
				}
				this.href = href;
				this.keyModified.set("href", 1);

			}

			/**
			 * The method to get the type
			 * @returns {String} A String representing the type
			 */
			getType()	{
				return this.type;

			}

			/**
			 * The method to set the value to type
			 * @param {String} type A String
			 */
			setType(type)	{
				if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
				}
				this.type = type;
				this.keyModified.set("type", 1);

			}

			/**
			 * The method to get the connectedmodule
			 * @returns {String} A String representing the connectedmodule
			 */
			getConnectedmodule()	{
				return this.connectedmodule;

			}

			/**
			 * The method to set the value to connectedmodule
			 * @param {String} connectedmodule A String
			 */
			setConnectedmodule(connectedmodule)	{
				if((connectedmodule != null) && (!(Object.prototype.toString.call(connectedmodule) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connectedmodule EXPECTED TYPE: String", null, null);
				}
				this.connectedmodule = connectedmodule;
				this.keyModified.set("connectedmodule", 1);

			}

			/**
			 * The method to get the linkingmodule
			 * @returns {String} A String representing the linkingmodule
			 */
			getLinkingmodule()	{
				return this.linkingmodule;

			}

			/**
			 * The method to set the value to linkingmodule
			 * @param {String} linkingmodule A String
			 */
			setLinkingmodule(linkingmodule)	{
				if((linkingmodule != null) && (!(Object.prototype.toString.call(linkingmodule) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkingmodule EXPECTED TYPE: String", null, null);
				}
				this.linkingmodule = linkingmodule;
				this.keyModified.set("linkingmodule", 1);

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

		GetRelatedListsParam : {

		},

		GetRelatedListParam : {

		}
	},
	Operations : class {


		/**
		 * Creates an instance of RelatedListsOperations with the given parameters
		 * @param {String} module A String
		 */
		constructor(module=null){
			if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
			}
						this.module = module;

		}

		/**
		 * The method to get related lists
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRelatedLists(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/related_lists");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("module", "RelatedList.Model.GetRelatedListsParam"), this.module);
			return handlerInstance.apiCall("RelatedList.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get related list
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRelatedList(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/related_lists/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("module", "RelatedList.Model.GetRelatedListParam"), this.module);
			return handlerInstance.apiCall("RelatedList.Model.ResponseHandler", "application/json");

		}

	},

}