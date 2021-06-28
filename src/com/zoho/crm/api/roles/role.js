ZCRM.Role = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		Role : class{
			constructor(){

				this.displayLabel=null;
				this.forecastManager=null;
				this.shareWithPeers=null;
				this.name=null;
				this.description=null;
				this.id=null;
				this.reportingTo=null;
				this.adminUser=null;
				this.keyModified=new Map();
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
			 * The method to get the forecastManager
			 * @returns {User} An instance of User
			 */
			getForecastManager()	{
				return this.forecastManager;

			}

			/**
			 * The method to set the value to forecastManager
			 * @param {User} forecastManager An instance of User
			 */
			setForecastManager(forecastManager)	{
				if((forecastManager != null) && (!(forecastManager instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: forecastManager EXPECTED TYPE: User", null, null);
				}
				this.forecastManager = forecastManager;
				this.keyModified.set("forecast_manager", 1);

			}

			/**
			 * The method to get the shareWithPeers
			 * @returns {Boolean} A Boolean representing the shareWithPeers
			 */
			getShareWithPeers()	{
				return this.shareWithPeers;

			}

			/**
			 * The method to set the value to shareWithPeers
			 * @param {Boolean} shareWithPeers A Boolean
			 */
			setShareWithPeers(shareWithPeers)	{
				if((shareWithPeers != null) && (!(Object.prototype.toString.call(shareWithPeers) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: shareWithPeers EXPECTED TYPE: Boolean", null, null);
				}
				this.shareWithPeers = shareWithPeers;
				this.keyModified.set("share_with_peers", 1);

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
			 * The method to get the description
			 * @returns {String} A String representing the description
			 */
			getDescription()	{
				return this.description;

			}

			/**
			 * The method to set the value to description
			 * @param {String} description A String
			 */
			setDescription(description)	{
				if((description != null) && (!(Object.prototype.toString.call(description) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: description EXPECTED TYPE: String", null, null);
				}
				this.description = description;
				this.keyModified.set("description", 1);

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
			 * The method to get the reportingTo
			 * @returns {User} An instance of User
			 */
			getReportingTo()	{
				return this.reportingTo;

			}

			/**
			 * The method to set the value to reportingTo
			 * @param {User} reportingTo An instance of User
			 */
			setReportingTo(reportingTo)	{
				if((reportingTo != null) && (!(reportingTo instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reportingTo EXPECTED TYPE: User", null, null);
				}
				this.reportingTo = reportingTo;
				this.keyModified.set("reporting_to", 1);

			}

			/**
			 * The method to get the adminUser
			 * @returns {Boolean} A Boolean representing the adminUser
			 */
			getAdminUser()	{
				return this.adminUser;

			}

			/**
			 * The method to set the value to adminUser
			 * @param {Boolean} adminUser A Boolean
			 */
			setAdminUser(adminUser)	{
				if((adminUser != null) && (!(Object.prototype.toString.call(adminUser) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: adminUser EXPECTED TYPE: Boolean", null, null);
				}
				this.adminUser = adminUser;
				this.keyModified.set("admin_user", 1);

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

				this.roles=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the roles
			 * @returns {List} An Array representing the roles
			 */
			getRoles()	{
				return this.roles;

			}

			/**
			 * The method to set the value to roles
			 * @param {List} roles An Array
			 */
			setRoles(roles)	{
				if((roles != null) && (!(Object.prototype.toString.call(roles) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: roles EXPECTED TYPE: Array", null, null);
				}
				this.roles = roles;
				this.keyModified.set("roles", 1);

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
		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get roles
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRoles(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/roles");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Role.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get role
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRole(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/roles/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Role.Model.ResponseHandler", "application/json");

		}
	},

}