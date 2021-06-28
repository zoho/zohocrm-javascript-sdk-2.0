ZCRM.Profile = {
	Model : {
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

		Category : class{
			constructor(){

				this.displayLabel=null;
				this.permissionsDetails=null;
				this.name=null;
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
			 * The method to get the permissionsDetails
			 * @returns {List} An Array representing the permissionsDetails
			 */
			getPermissionsDetails()	{
				return this.permissionsDetails;

			}

			/**
			 * The method to set the value to permissionsDetails
			 * @param {List} permissionsDetails An Array
			 */
			setPermissionsDetails(permissionsDetails)	{
				if((permissionsDetails != null) && (!(Object.prototype.toString.call(permissionsDetails) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permissionsDetails EXPECTED TYPE: Array", null, null);
				}
				this.permissionsDetails = permissionsDetails;
				this.keyModified.set("permissions_details", 1);

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

		Profile : class{
			constructor(){

				this.displayLabel=null;
				this.createdTime=null;
				this.modifiedTime=null;
				this.permissionsDetails=null;
				this.name=null;
				this.modifiedBy=null;
				this.default1=null;
				this.description=null;
				this.id=null;
				this.category=null;
				this.createdBy=null;
				this.sections=null;
				this.delete1=null;
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
			 * The method to get the modifiedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getModifiedTime()	{
				return this.modifiedTime;

			}

			/**
			 * The method to set the value to modifiedTime
			 * @param {OffsetDateTime} modifiedTime An instance of OffsetDateTime
			 */
			setModifiedTime(modifiedTime)	{
				if((modifiedTime != null) && (!(modifiedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
				}
				this.modifiedTime = modifiedTime;
				this.keyModified.set("modified_time", 1);

			}

			/**
			 * The method to get the permissionsDetails
			 * @returns {List} An Array representing the permissionsDetails
			 */
			getPermissionsDetails()	{
				return this.permissionsDetails;

			}

			/**
			 * The method to set the value to permissionsDetails
			 * @param {List} permissionsDetails An Array
			 */
			setPermissionsDetails(permissionsDetails)	{
				if((permissionsDetails != null) && (!(Object.prototype.toString.call(permissionsDetails) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: permissionsDetails EXPECTED TYPE: Array", null, null);
				}
				this.permissionsDetails = permissionsDetails;
				this.keyModified.set("permissions_details", 1);

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
			 * The method to get the modifiedBy
			 * @returns {User} An instance of User
			 */
			getModifiedBy()	{
				return this.modifiedBy;

			}

			/**
			 * The method to set the value to modifiedBy
			 * @param {User} modifiedBy An instance of User
			 */
			setModifiedBy(modifiedBy)	{
				if((modifiedBy != null) && (!(modifiedBy instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: User", null, null);
				}
				this.modifiedBy = modifiedBy;
				this.keyModified.set("modified_by", 1);

			}

			/**
			 * The method to get the default
			 * @returns {Boolean} A Boolean representing the default1
			 */
			getDefault()	{
				return this.default1;

			}

			/**
			 * The method to set the value to default
			 * @param {Boolean} default1 A Boolean
			 */
			setDefault(default1)	{
				if((default1 != null) && (!(Object.prototype.toString.call(default1) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: default1 EXPECTED TYPE: Boolean", null, null);
				}
				this.default1 = default1;
				this.keyModified.set("default", 1);

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
			 * The method to get the category
			 * @returns {Boolean} A Boolean representing the category
			 */
			getCategory()	{
				return this.category;

			}

			/**
			 * The method to set the value to category
			 * @param {Boolean} category A Boolean
			 */
			setCategory(category)	{
				if((category != null) && (!(Object.prototype.toString.call(category) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: Boolean", null, null);
				}
				this.category = category;
				this.keyModified.set("category", 1);

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
			 * The method to get the sections
			 * @returns {List} An Array representing the sections
			 */
			getSections()	{
				return this.sections;

			}

			/**
			 * The method to set the value to sections
			 * @param {List} sections An Array
			 */
			setSections(sections)	{
				if((sections != null) && (!(Object.prototype.toString.call(sections) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sections EXPECTED TYPE: Array", null, null);
				}
				this.sections = sections;
				this.keyModified.set("sections", 1);

			}

			/**
			 * The method to get the delete
			 * @returns {Boolean} A Boolean representing the delete1
			 */
			getDelete()	{
				return this.delete1;

			}

			/**
			 * The method to set the value to delete
			 * @param {Boolean} delete1 A Boolean
			 */
			setDelete(delete1)	{
				if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: Boolean", null, null);
				}
				this.delete1 = delete1;
				this.keyModified.set("_delete", 1);

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

		PermissionDetail : class{
			constructor(){

				this.displayLabel=null;
				this.module=null;
				this.name=null;
				this.id=null;
				this.enabled=null;
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
			 * The method to get the enabled
			 * @returns {Boolean} A Boolean representing the enabled
			 */
			getEnabled()	{
				return this.enabled;

			}

			/**
			 * The method to set the value to enabled
			 * @param {Boolean} enabled A Boolean
			 */
			setEnabled(enabled)	{
				if((enabled != null) && (!(Object.prototype.toString.call(enabled) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: enabled EXPECTED TYPE: Boolean", null, null);
				}
				this.enabled = enabled;
				this.keyModified.set("enabled", 1);

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

		Section : class{
			constructor(){

				this.name=null;
				this.categories=null;
				this.keyModified=new Map();
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
			 * The method to get the categories
			 * @returns {List} An Array representing the categories
			 */
			getCategories()	{
				return this.categories;

			}

			/**
			 * The method to set the value to categories
			 * @param {List} categories An Array
			 */
			setCategories(categories)	{
				if((categories != null) && (!(Object.prototype.toString.call(categories) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: categories EXPECTED TYPE: Array", null, null);
				}
				this.categories = categories;
				this.keyModified.set("categories", 1);

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

				this.profiles=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the profiles
			 * @returns {List} An Array representing the profiles
			 */
			getProfiles()	{
				return this.profiles;

			}

			/**
			 * The method to set the value to profiles
			 * @param {List} profiles An Array
			 */
			setProfiles(profiles)	{
				if((profiles != null) && (!(Object.prototype.toString.call(profiles) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: profiles EXPECTED TYPE: Array", null, null);
				}
				this.profiles = profiles;
				this.keyModified.set("profiles", 1);

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

		GetProfilesHeader : {

		},

		GetProfileHeader : {

		}
	},
	Operations : class {


		/**
		 * Creates an instance of ProfilesOperations with the given parameters
		 * @param {OffsetDateTime} ifModifiedSince An instance of OffsetDateTime
		 */
		constructor(ifModifiedSince=null){
			if((ifModifiedSince != null) && (!(ifModifiedSince instanceof Date))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ifModifiedSince EXPECTED TYPE: Date", null, null);
			}
						this.ifModifiedSince = ifModifiedSince;

		}

		/**
		 * The method to get profiles
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getProfiles(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/profiles");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addHeader(new Header("If-Modified-Since", "Profile.Model.GetProfilesHeader"), this.ifModifiedSince);
			return handlerInstance.apiCall("Profile.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get profile
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getProfile(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/profiles/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addHeader(new Header("If-Modified-Since", "Profile.Model.GetProfileHeader"), this.ifModifiedSince);
			return handlerInstance.apiCall("Profile.Model.ResponseHandler", "application/json");

		}

	},

}