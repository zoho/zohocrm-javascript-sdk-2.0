ZCRM.Record = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ConvertActionResponse : class{
			constructor(){

			}


		},

		ConvertActionHandler : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		DownloadHandler : class{
			constructor(){

			}


		},

		MassUpdateResponseHandler : class{
			constructor(){

			}


		},

		MassUpdateResponse : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

			}


		},

		MassUpdateActionHandler : class{
			constructor(){

			}


		},

		MassUpdateActionResponse : class{
			constructor(){

			}


		},

		FileHandler : class{
			constructor(){

			}


		},

		DeletedRecordsHandler : class{
			constructor(){

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

		SuccessResponse : class{
			constructor(){

				this.status=null;
				this.code=null;
				this.duplicateField=null;
				this.action=null;
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
			 * The method to get the duplicateField
			 * @returns {String} A String representing the duplicateField
			 */
			getDuplicateField()	{
				return this.duplicateField;

			}

			/**
			 * The method to set the value to duplicateField
			 * @param {String} duplicateField A String
			 */
			setDuplicateField(duplicateField)	{
				if((duplicateField != null) && (!(Object.prototype.toString.call(duplicateField) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: duplicateField EXPECTED TYPE: String", null, null);
				}
				this.duplicateField = duplicateField;
				this.keyModified.set("duplicate_field", 1);

			}

			/**
			 * The method to get the action
			 * @returns {Choice} An instance of Choice
			 */
			getAction()	{
				return this.action;

			}

			/**
			 * The method to set the value to action
			 * @param {Choice} action An instance of Choice
			 */
			setAction(action)	{
				if((action != null) && (!(action instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: action EXPECTED TYPE: Choice", null, null);
				}
				this.action = action;
				this.keyModified.set("action", 1);

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

		ConvertActionWrapper : class{
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

		MassUpdateBodyWrapper : class{
			constructor(){

				this.data=null;
				this.cvid=null;
				this.ids=null;
				this.territory=null;
				this.overWrite=null;
				this.criteria=null;
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
			 * The method to get the cvid
			 * @returns {String} A String representing the cvid
			 */
			getCvid()	{
				return this.cvid;

			}

			/**
			 * The method to set the value to cvid
			 * @param {String} cvid A String
			 */
			setCvid(cvid)	{
				if((cvid != null) && (!(Object.prototype.toString.call(cvid) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: cvid EXPECTED TYPE: String", null, null);
				}
				this.cvid = cvid;
				this.keyModified.set("cvid", 1);

			}

			/**
			 * The method to get the ids
			 * @returns {List} An Array representing the ids
			 */
			getIds()	{
				return this.ids;

			}

			/**
			 * The method to set the value to ids
			 * @param {List} ids An Array
			 */
			setIds(ids)	{
				if((ids != null) && (!(Object.prototype.toString.call(ids) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ids EXPECTED TYPE: Array", null, null);
				}
				this.ids = ids;
				this.keyModified.set("ids", 1);

			}

			/**
			 * The method to get the territory
			 * @returns {Territory} An instance of Territory
			 */
			getTerritory()	{
				return this.territory;

			}

			/**
			 * The method to set the value to territory
			 * @param {Territory} territory An instance of Territory
			 */
			setTerritory(territory)	{
				if((territory != null) && (!(territory instanceof ZCRM.Record.Model.Territory))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: Territory", null, null);
				}
				this.territory = territory;
				this.keyModified.set("territory", 1);

			}

			/**
			 * The method to get the overWrite
			 * @returns {Boolean} A Boolean representing the overWrite
			 */
			getOverWrite()	{
				return this.overWrite;

			}

			/**
			 * The method to set the value to overWrite
			 * @param {Boolean} overWrite A Boolean
			 */
			setOverWrite(overWrite)	{
				if((overWrite != null) && (!(Object.prototype.toString.call(overWrite) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: overWrite EXPECTED TYPE: Boolean", null, null);
				}
				this.overWrite = overWrite;
				this.keyModified.set("over_write", 1);

			}

			/**
			 * The method to get the criteria
			 * @returns {List} An Array representing the criteria
			 */
			getCriteria()	{
				return this.criteria;

			}

			/**
			 * The method to set the value to criteria
			 * @param {List} criteria An Array
			 */
			setCriteria(criteria)	{
				if((criteria != null) && (!(Object.prototype.toString.call(criteria) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Array", null, null);
				}
				this.criteria = criteria;
				this.keyModified.set("criteria", 1);

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

		Territory : class{
			constructor(){

				this.id=null;
				this.includeChild=null;
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
			 * The method to get the includeChild
			 * @returns {Boolean} A Boolean representing the includeChild
			 */
			getIncludeChild()	{
				return this.includeChild;

			}

			/**
			 * The method to set the value to includeChild
			 * @param {Boolean} includeChild A Boolean
			 */
			setIncludeChild(includeChild)	{
				if((includeChild != null) && (!(Object.prototype.toString.call(includeChild) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: includeChild EXPECTED TYPE: Boolean", null, null);
				}
				this.includeChild = includeChild;
				this.keyModified.set("include_child", 1);

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

		SuccessfulConvert : class{
			constructor(){

				this.contacts=null;
				this.deals=null;
				this.accounts=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the contacts
			 * @returns {String} A String representing the contacts
			 */
			getContacts()	{
				return this.contacts;

			}

			/**
			 * The method to set the value to contacts
			 * @param {String} contacts A String
			 */
			setContacts(contacts)	{
				if((contacts != null) && (!(Object.prototype.toString.call(contacts) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: String", null, null);
				}
				this.contacts = contacts;
				this.keyModified.set("Contacts", 1);

			}

			/**
			 * The method to get the deals
			 * @returns {String} A String representing the deals
			 */
			getDeals()	{
				return this.deals;

			}

			/**
			 * The method to set the value to deals
			 * @param {String} deals A String
			 */
			setDeals(deals)	{
				if((deals != null) && (!(Object.prototype.toString.call(deals) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: String", null, null);
				}
				this.deals = deals;
				this.keyModified.set("Deals", 1);

			}

			/**
			 * The method to get the accounts
			 * @returns {String} A String representing the accounts
			 */
			getAccounts()	{
				return this.accounts;

			}

			/**
			 * The method to set the value to accounts
			 * @param {String} accounts A String
			 */
			setAccounts(accounts)	{
				if((accounts != null) && (!(Object.prototype.toString.call(accounts) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: String", null, null);
				}
				this.accounts = accounts;
				this.keyModified.set("Accounts", 1);

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

		LeadConverter : class{
			constructor(){

				this.overwrite=null;
				this.notifyLeadOwner=null;
				this.notifyNewEntityOwner=null;
				this.accounts=null;
				this.contacts=null;
				this.assignTo=null;
				this.deals=null;
				this.carryOverTags=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the overwrite
			 * @returns {Boolean} A Boolean representing the overwrite
			 */
			getOverwrite()	{
				return this.overwrite;

			}

			/**
			 * The method to set the value to overwrite
			 * @param {Boolean} overwrite A Boolean
			 */
			setOverwrite(overwrite)	{
				if((overwrite != null) && (!(Object.prototype.toString.call(overwrite) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: overwrite EXPECTED TYPE: Boolean", null, null);
				}
				this.overwrite = overwrite;
				this.keyModified.set("overwrite", 1);

			}

			/**
			 * The method to get the notifyLeadOwner
			 * @returns {Boolean} A Boolean representing the notifyLeadOwner
			 */
			getNotifyLeadOwner()	{
				return this.notifyLeadOwner;

			}

			/**
			 * The method to set the value to notifyLeadOwner
			 * @param {Boolean} notifyLeadOwner A Boolean
			 */
			setNotifyLeadOwner(notifyLeadOwner)	{
				if((notifyLeadOwner != null) && (!(Object.prototype.toString.call(notifyLeadOwner) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyLeadOwner EXPECTED TYPE: Boolean", null, null);
				}
				this.notifyLeadOwner = notifyLeadOwner;
				this.keyModified.set("notify_lead_owner", 1);

			}

			/**
			 * The method to get the notifyNewEntityOwner
			 * @returns {Boolean} A Boolean representing the notifyNewEntityOwner
			 */
			getNotifyNewEntityOwner()	{
				return this.notifyNewEntityOwner;

			}

			/**
			 * The method to set the value to notifyNewEntityOwner
			 * @param {Boolean} notifyNewEntityOwner A Boolean
			 */
			setNotifyNewEntityOwner(notifyNewEntityOwner)	{
				if((notifyNewEntityOwner != null) && (!(Object.prototype.toString.call(notifyNewEntityOwner) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyNewEntityOwner EXPECTED TYPE: Boolean", null, null);
				}
				this.notifyNewEntityOwner = notifyNewEntityOwner;
				this.keyModified.set("notify_new_entity_owner", 1);

			}

			/**
			 * The method to get the accounts
			 * @returns {String} A String representing the accounts
			 */
			getAccounts()	{
				return this.accounts;

			}

			/**
			 * The method to set the value to accounts
			 * @param {String} accounts A String
			 */
			setAccounts(accounts)	{
				if((accounts != null) && (!(Object.prototype.toString.call(accounts) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: String", null, null);
				}
				this.accounts = accounts;
				this.keyModified.set("Accounts", 1);

			}

			/**
			 * The method to get the contacts
			 * @returns {String} A String representing the contacts
			 */
			getContacts()	{
				return this.contacts;

			}

			/**
			 * The method to set the value to contacts
			 * @param {String} contacts A String
			 */
			setContacts(contacts)	{
				if((contacts != null) && (!(Object.prototype.toString.call(contacts) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: String", null, null);
				}
				this.contacts = contacts;
				this.keyModified.set("Contacts", 1);

			}

			/**
			 * The method to get the assignTo
			 * @returns {String} A String representing the assignTo
			 */
			getAssignTo()	{
				return this.assignTo;

			}

			/**
			 * The method to set the value to assignTo
			 * @param {String} assignTo A String
			 */
			setAssignTo(assignTo)	{
				if((assignTo != null) && (!(Object.prototype.toString.call(assignTo) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignTo EXPECTED TYPE: String", null, null);
				}
				this.assignTo = assignTo;
				this.keyModified.set("assign_to", 1);

			}

			/**
			 * The method to get the deals
			 * @returns {Record} An instance of Record
			 */
			getDeals()	{
				return this.deals;

			}

			/**
			 * The method to set the value to deals
			 * @param {Record} deals An instance of Record
			 */
			setDeals(deals)	{
				if((deals != null) && (!(deals instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: Record", null, null);
				}
				this.deals = deals;
				this.keyModified.set("Deals", 1);

			}

			/**
			 * The method to get the carryOverTags
			 * @returns {CarryOverTags} An instance of CarryOverTags
			 */
			getCarryOverTags()	{
				return this.carryOverTags;

			}

			/**
			 * The method to set the value to carryOverTags
			 * @param {CarryOverTags} carryOverTags An instance of CarryOverTags
			 */
			setCarryOverTags(carryOverTags)	{
				if((carryOverTags != null) && (!(carryOverTags instanceof ZCRM.Record.Model.CarryOverTags))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: carryOverTags EXPECTED TYPE: CarryOverTags", null, null);
				}
				this.carryOverTags = carryOverTags;
				this.keyModified.set("carry_over_tags", 1);

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
				this.trigger=null;
				this.process=null;
				this.duplicateCheckFields=null;
				this.wfTrigger=null;
				this.larId=null;
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
			 * The method to get the trigger
			 * @returns {List} An Array representing the trigger
			 */
			getTrigger()	{
				return this.trigger;

			}

			/**
			 * The method to set the value to trigger
			 * @param {List} trigger An Array
			 */
			setTrigger(trigger)	{
				if((trigger != null) && (!(Object.prototype.toString.call(trigger) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trigger EXPECTED TYPE: Array", null, null);
				}
				this.trigger = trigger;
				this.keyModified.set("trigger", 1);

			}

			/**
			 * The method to get the process
			 * @returns {List} An Array representing the process
			 */
			getProcess()	{
				return this.process;

			}

			/**
			 * The method to set the value to process
			 * @param {List} process An Array
			 */
			setProcess(process)	{
				if((process != null) && (!(Object.prototype.toString.call(process) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: process EXPECTED TYPE: Array", null, null);
				}
				this.process = process;
				this.keyModified.set("process", 1);

			}

			/**
			 * The method to get the duplicateCheckFields
			 * @returns {List} An Array representing the duplicateCheckFields
			 */
			getDuplicateCheckFields()	{
				return this.duplicateCheckFields;

			}

			/**
			 * The method to set the value to duplicateCheckFields
			 * @param {List} duplicateCheckFields An Array
			 */
			setDuplicateCheckFields(duplicateCheckFields)	{
				if((duplicateCheckFields != null) && (!(Object.prototype.toString.call(duplicateCheckFields) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: duplicateCheckFields EXPECTED TYPE: Array", null, null);
				}
				this.duplicateCheckFields = duplicateCheckFields;
				this.keyModified.set("duplicate_check_fields", 1);

			}

			/**
			 * The method to get the wfTrigger
			 * @returns {String} A String representing the wfTrigger
			 */
			getWfTrigger()	{
				return this.wfTrigger;

			}

			/**
			 * The method to set the value to wfTrigger
			 * @param {String} wfTrigger A String
			 */
			setWfTrigger(wfTrigger)	{
				if((wfTrigger != null) && (!(Object.prototype.toString.call(wfTrigger) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: wfTrigger EXPECTED TYPE: String", null, null);
				}
				this.wfTrigger = wfTrigger;
				this.keyModified.set("wf_trigger", 1);

			}

			/**
			 * The method to get the larId
			 * @returns {String} A String representing the larId
			 */
			getLarId()	{
				return this.larId;

			}

			/**
			 * The method to set the value to larId
			 * @param {String} larId A String
			 */
			setLarId(larId)	{
				if((larId != null) && (!(Object.prototype.toString.call(larId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: larId EXPECTED TYPE: String", null, null);
				}
				this.larId = larId;
				this.keyModified.set("lar_id", 1);

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

		Criteria : class{
			constructor(){

				this.comparator=null;
				this.field=null;
				this.value=null;
				this.groupOperator=null;
				this.group=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the comparator
			 * @returns {Choice} An instance of Choice
			 */
			getComparator()	{
				return this.comparator;

			}

			/**
			 * The method to set the value to comparator
			 * @param {Choice} comparator An instance of Choice
			 */
			setComparator(comparator)	{
				if((comparator != null) && (!(comparator instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: comparator EXPECTED TYPE: Choice", null, null);
				}
				this.comparator = comparator;
				this.keyModified.set("comparator", 1);

			}

			/**
			 * The method to get the field
			 * @returns {String} A String representing the field
			 */
			getField()	{
				return this.field;

			}

			/**
			 * The method to set the value to field
			 * @param {String} field A String
			 */
			setField(field)	{
				if((field != null) && (!(Object.prototype.toString.call(field) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: String", null, null);
				}
				this.field = field;
				this.keyModified.set("field", 1);

			}

			/**
			 * The method to get the value
			 * @returns {Object} An Object representing the value
			 */
			getValue()	{
				return this.value;

			}

			/**
			 * The method to set the value to value
			 * @param {Object} value An Object
			 */
			setValue(value)	{
				this.value = value;
				this.keyModified.set("value", 1);

			}

			/**
			 * The method to get the groupOperator
			 * @returns {Choice} An instance of Choice
			 */
			getGroupOperator()	{
				return this.groupOperator;

			}

			/**
			 * The method to set the value to groupOperator
			 * @param {Choice} groupOperator An instance of Choice
			 */
			setGroupOperator(groupOperator)	{
				if((groupOperator != null) && (!(groupOperator instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: groupOperator EXPECTED TYPE: Choice", null, null);
				}
				this.groupOperator = groupOperator;
				this.keyModified.set("group_operator", 1);

			}

			/**
			 * The method to get the group
			 * @returns {List} An Array representing the group
			 */
			getGroup()	{
				return this.group;

			}

			/**
			 * The method to set the value to group
			 * @param {List} group An Array
			 */
			setGroup(group)	{
				if((group != null) && (!(Object.prototype.toString.call(group) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: group EXPECTED TYPE: Array", null, null);
				}
				this.group = group;
				this.keyModified.set("group", 1);

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

		MassUpdateActionWrapper : class{
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

		Info : class{
			constructor(){

				this.perPage=null;
				this.count=null;
				this.page=null;
				this.moreRecords=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the perPage
			 * @returns {Integer} An Integer representing the perPage
			 */
			getPerPage()	{
				return this.perPage;

			}

			/**
			 * The method to set the value to perPage
			 * @param {Integer} perPage An Integer
			 */
			setPerPage(perPage)	{
				if((perPage != null) && (!(Object.prototype.toString.call(perPage) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: perPage EXPECTED TYPE: Integer", null, null);
				}
				this.perPage = perPage;
				this.keyModified.set("per_page", 1);

			}

			/**
			 * The method to get the count
			 * @returns {Integer} An Integer representing the count
			 */
			getCount()	{
				return this.count;

			}

			/**
			 * The method to set the value to count
			 * @param {Integer} count An Integer
			 */
			setCount(count)	{
				if((count != null) && (!(Object.prototype.toString.call(count) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: count EXPECTED TYPE: Integer", null, null);
				}
				this.count = count;
				this.keyModified.set("count", 1);

			}

			/**
			 * The method to get the page
			 * @returns {Integer} An Integer representing the page
			 */
			getPage()	{
				return this.page;

			}

			/**
			 * The method to set the value to page
			 * @param {Integer} page An Integer
			 */
			setPage(page)	{
				if((page != null) && (!(Object.prototype.toString.call(page) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: page EXPECTED TYPE: Integer", null, null);
				}
				this.page = page;
				this.keyModified.set("page", 1);

			}

			/**
			 * The method to get the moreRecords
			 * @returns {Boolean} A Boolean representing the moreRecords
			 */
			getMoreRecords()	{
				return this.moreRecords;

			}

			/**
			 * The method to set the value to moreRecords
			 * @param {Boolean} moreRecords A Boolean
			 */
			setMoreRecords(moreRecords)	{
				if((moreRecords != null) && (!(Object.prototype.toString.call(moreRecords) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moreRecords EXPECTED TYPE: Boolean", null, null);
				}
				this.moreRecords = moreRecords;
				this.keyModified.set("more_records", 1);

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

		MassUpdate : class{
			constructor(){

				this.status=null;
				this.failedCount=null;
				this.updatedCount=null;
				this.notUpdatedCount=null;
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
				this.keyModified.set("Status", 1);

			}

			/**
			 * The method to get the failedCount
			 * @returns {Integer} An Integer representing the failedCount
			 */
			getFailedCount()	{
				return this.failedCount;

			}

			/**
			 * The method to set the value to failedCount
			 * @param {Integer} failedCount An Integer
			 */
			setFailedCount(failedCount)	{
				if((failedCount != null) && (!(Object.prototype.toString.call(failedCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: failedCount EXPECTED TYPE: Integer", null, null);
				}
				this.failedCount = failedCount;
				this.keyModified.set("Failed_Count", 1);

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
				this.keyModified.set("Updated_Count", 1);

			}

			/**
			 * The method to get the notUpdatedCount
			 * @returns {Integer} An Integer representing the notUpdatedCount
			 */
			getNotUpdatedCount()	{
				return this.notUpdatedCount;

			}

			/**
			 * The method to set the value to notUpdatedCount
			 * @param {Integer} notUpdatedCount An Integer
			 */
			setNotUpdatedCount(notUpdatedCount)	{
				if((notUpdatedCount != null) && (!(Object.prototype.toString.call(notUpdatedCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notUpdatedCount EXPECTED TYPE: Integer", null, null);
				}
				this.notUpdatedCount = notUpdatedCount;
				this.keyModified.set("Not_Updated_Count", 1);

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
				this.keyModified.set("Total_Count", 1);

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

		Field : class{


			/**
			 * Creates an instance of Field with the given parameters
			 * @param {String} apiName A String
			 */
			constructor(apiName){
				if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
				}
								this.apiName = apiName;

			}

			/**
			 * The method to get the apiName
			 * @returns {String} A String representing the apiName
			 */
			getAPIName()	{
				return this.apiName;

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

		Record : class{
			constructor(){

				this.keyValues=new Map();
				this.keyModified=new Map();
			}



			/**
			 * The method to get the id
			 * @returns {Long} A BigInt representing the id
			 */
			getId()	{
				return this.getKeyValue("id");

			}

			/**
			 * The method to set the value to id
			 * @param {Long} id A BigInt
			 */
			setId(id)	{
				if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
				}
				this.addKeyValue("id", id);

			}

			/**
			 * The method to get the createdBy
			 * @returns {User} An instance of User
			 */
			getCreatedBy()	{
				return this.getKeyValue("Created_By");

			}

			/**
			 * The method to set the value to createdBy
			 * @param {User} createdBy An instance of User
			 */
			setCreatedBy(createdBy)	{
				if((createdBy != null) && (!(createdBy instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdBy EXPECTED TYPE: User", null, null);
				}
				this.addKeyValue("Created_By", createdBy);

			}

			/**
			 * The method to get the createdTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getCreatedTime()	{
				return this.getKeyValue("Created_Time");

			}

			/**
			 * The method to set the value to createdTime
			 * @param {OffsetDateTime} createdTime An instance of OffsetDateTime
			 */
			setCreatedTime(createdTime)	{
				if((createdTime != null) && (!(createdTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdTime EXPECTED TYPE: Date", null, null);
				}
				this.addKeyValue("Created_Time", createdTime);

			}

			/**
			 * The method to get the modifiedBy
			 * @returns {User} An instance of User
			 */
			getModifiedBy()	{
				return this.getKeyValue("Modified_By");

			}

			/**
			 * The method to set the value to modifiedBy
			 * @param {User} modifiedBy An instance of User
			 */
			setModifiedBy(modifiedBy)	{
				if((modifiedBy != null) && (!(modifiedBy instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedBy EXPECTED TYPE: User", null, null);
				}
				this.addKeyValue("Modified_By", modifiedBy);

			}

			/**
			 * The method to get the modifiedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getModifiedTime()	{
				return this.getKeyValue("Modified_Time");

			}

			/**
			 * The method to set the value to modifiedTime
			 * @param {OffsetDateTime} modifiedTime An instance of OffsetDateTime
			 */
			setModifiedTime(modifiedTime)	{
				if((modifiedTime != null) && (!(modifiedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modifiedTime EXPECTED TYPE: Date", null, null);
				}
				this.addKeyValue("Modified_Time", modifiedTime);

			}

			/**
			 * The method to get the tag
			 * @returns {List} An Array representing the tag
			 */
			getTag()	{
				return this.getKeyValue("Tag");

			}

			/**
			 * The method to set the value to tag
			 * @param {List} tag An Array
			 */
			setTag(tag)	{
				if((tag != null) && (!(Object.prototype.toString.call(tag) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tag EXPECTED TYPE: Array", null, null);
				}
				this.addKeyValue("Tag", tag);

			}

			/**
			 * The method to add field value
			 * @param {Field} field An instance of Field
			 * @param {*} value An object
			 */
			addFieldValue(field, value)	{
				if((field != null) && (!(field instanceof ZCRM.Record.Model.Field))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: field EXPECTED TYPE: Field", null, null);
				}
				this.addKeyValue(field.getAPIName(), value);

			}

			/**
			 * The method to add key value
			 * @param {String} apiName A String
			 * @param {Object} value An Object
			 */
			addKeyValue(apiName, value)	{
				if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
				}
				this.keyValues.set(apiName, value);
				this.keyModified.set(apiName, 1);

			}

			/**
			 * The method to get key value
			 * @param {String} apiName A String
			 * @returns {Object} An Object representing the keyValue
			 */
			getKeyValue(apiName)	{
				if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
				}
				if(this.keyValues.has(apiName)){
					return this.keyValues.get(apiName);
				}
				return null;

			}

			/**
			 * The method to get key values
			 * @returns {HashMap} A Map representing the keyValues
			 */
			getKeyValues()	{
				return this.keyValues;

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

		RemindAt : class{
			constructor(){

				this.alarm=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the alarm
			 * @returns {String} A String representing the alarm
			 */
			getAlarm()	{
				return this.alarm;

			}

			/**
			 * The method to set the value to alarm
			 * @param {String} alarm A String
			 */
			setAlarm(alarm)	{
				if((alarm != null) && (!(Object.prototype.toString.call(alarm) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: alarm EXPECTED TYPE: String", null, null);
				}
				this.alarm = alarm;
				this.keyModified.set("ALARM", 1);

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

		ConvertBodyWrapper : class{
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

		MassUpdateResponseWrapper : class{
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

		FileDetails : class{
			constructor(){

				this.extn=null;
				this.isPreviewAvailable=null;
				this.downloadUrl=null;
				this.deleteUrl=null;
				this.entityId=null;
				this.mode=null;
				this.originalSizeByte=null;
				this.previewUrl=null;
				this.fileName=null;
				this.fileId=null;
				this.attachmentId=null;
				this.fileSize=null;
				this.creatorId=null;
				this.linkDocs=null;
				this.delete1=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the extn
			 * @returns {String} A String representing the extn
			 */
			getExtn()	{
				return this.extn;

			}

			/**
			 * The method to set the value to extn
			 * @param {String} extn A String
			 */
			setExtn(extn)	{
				if((extn != null) && (!(Object.prototype.toString.call(extn) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: extn EXPECTED TYPE: String", null, null);
				}
				this.extn = extn;
				this.keyModified.set("extn", 1);

			}

			/**
			 * The method to get the isPreviewAvailable
			 * @returns {Boolean} A Boolean representing the isPreviewAvailable
			 */
			getIsPreviewAvailable()	{
				return this.isPreviewAvailable;

			}

			/**
			 * The method to set the value to isPreviewAvailable
			 * @param {Boolean} isPreviewAvailable A Boolean
			 */
			setIsPreviewAvailable(isPreviewAvailable)	{
				if((isPreviewAvailable != null) && (!(Object.prototype.toString.call(isPreviewAvailable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isPreviewAvailable EXPECTED TYPE: Boolean", null, null);
				}
				this.isPreviewAvailable = isPreviewAvailable;
				this.keyModified.set("is_Preview_Available", 1);

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
				this.keyModified.set("download_Url", 1);

			}

			/**
			 * The method to get the deleteUrl
			 * @returns {String} A String representing the deleteUrl
			 */
			getDeleteUrl()	{
				return this.deleteUrl;

			}

			/**
			 * The method to set the value to deleteUrl
			 * @param {String} deleteUrl A String
			 */
			setDeleteUrl(deleteUrl)	{
				if((deleteUrl != null) && (!(Object.prototype.toString.call(deleteUrl) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deleteUrl EXPECTED TYPE: String", null, null);
				}
				this.deleteUrl = deleteUrl;
				this.keyModified.set("delete_Url", 1);

			}

			/**
			 * The method to get the entityId
			 * @returns {String} A String representing the entityId
			 */
			getEntityId()	{
				return this.entityId;

			}

			/**
			 * The method to set the value to entityId
			 * @param {String} entityId A String
			 */
			setEntityId(entityId)	{
				if((entityId != null) && (!(Object.prototype.toString.call(entityId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: entityId EXPECTED TYPE: String", null, null);
				}
				this.entityId = entityId;
				this.keyModified.set("entity_Id", 1);

			}

			/**
			 * The method to get the mode
			 * @returns {String} A String representing the mode
			 */
			getMode()	{
				return this.mode;

			}

			/**
			 * The method to set the value to mode
			 * @param {String} mode A String
			 */
			setMode(mode)	{
				if((mode != null) && (!(Object.prototype.toString.call(mode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mode EXPECTED TYPE: String", null, null);
				}
				this.mode = mode;
				this.keyModified.set("mode", 1);

			}

			/**
			 * The method to get the originalSizeByte
			 * @returns {String} A String representing the originalSizeByte
			 */
			getOriginalSizeByte()	{
				return this.originalSizeByte;

			}

			/**
			 * The method to set the value to originalSizeByte
			 * @param {String} originalSizeByte A String
			 */
			setOriginalSizeByte(originalSizeByte)	{
				if((originalSizeByte != null) && (!(Object.prototype.toString.call(originalSizeByte) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: originalSizeByte EXPECTED TYPE: String", null, null);
				}
				this.originalSizeByte = originalSizeByte;
				this.keyModified.set("original_Size_Byte", 1);

			}

			/**
			 * The method to get the previewUrl
			 * @returns {String} A String representing the previewUrl
			 */
			getPreviewUrl()	{
				return this.previewUrl;

			}

			/**
			 * The method to set the value to previewUrl
			 * @param {String} previewUrl A String
			 */
			setPreviewUrl(previewUrl)	{
				if((previewUrl != null) && (!(Object.prototype.toString.call(previewUrl) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: previewUrl EXPECTED TYPE: String", null, null);
				}
				this.previewUrl = previewUrl;
				this.keyModified.set("preview_Url", 1);

			}

			/**
			 * The method to get the fileName
			 * @returns {String} A String representing the fileName
			 */
			getFileName()	{
				return this.fileName;

			}

			/**
			 * The method to set the value to fileName
			 * @param {String} fileName A String
			 */
			setFileName(fileName)	{
				if((fileName != null) && (!(Object.prototype.toString.call(fileName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileName EXPECTED TYPE: String", null, null);
				}
				this.fileName = fileName;
				this.keyModified.set("file_Name", 1);

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
				this.keyModified.set("file_Id", 1);

			}

			/**
			 * The method to get the attachmentId
			 * @returns {String} A String representing the attachmentId
			 */
			getAttachmentId()	{
				return this.attachmentId;

			}

			/**
			 * The method to set the value to attachmentId
			 * @param {String} attachmentId A String
			 */
			setAttachmentId(attachmentId)	{
				if((attachmentId != null) && (!(Object.prototype.toString.call(attachmentId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachmentId EXPECTED TYPE: String", null, null);
				}
				this.attachmentId = attachmentId;
				this.keyModified.set("attachment_Id", 1);

			}

			/**
			 * The method to get the fileSize
			 * @returns {String} A String representing the fileSize
			 */
			getFileSize()	{
				return this.fileSize;

			}

			/**
			 * The method to set the value to fileSize
			 * @param {String} fileSize A String
			 */
			setFileSize(fileSize)	{
				if((fileSize != null) && (!(Object.prototype.toString.call(fileSize) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileSize EXPECTED TYPE: String", null, null);
				}
				this.fileSize = fileSize;
				this.keyModified.set("file_Size", 1);

			}

			/**
			 * The method to get the creatorId
			 * @returns {String} A String representing the creatorId
			 */
			getCreatorId()	{
				return this.creatorId;

			}

			/**
			 * The method to set the value to creatorId
			 * @param {String} creatorId A String
			 */
			setCreatorId(creatorId)	{
				if((creatorId != null) && (!(Object.prototype.toString.call(creatorId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: creatorId EXPECTED TYPE: String", null, null);
				}
				this.creatorId = creatorId;
				this.keyModified.set("creator_Id", 1);

			}

			/**
			 * The method to get the linkDocs
			 * @returns {Integer} An Integer representing the linkDocs
			 */
			getLinkDocs()	{
				return this.linkDocs;

			}

			/**
			 * The method to set the value to linkDocs
			 * @param {Integer} linkDocs An Integer
			 */
			setLinkDocs(linkDocs)	{
				if((linkDocs != null) && (!(Object.prototype.toString.call(linkDocs) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkDocs EXPECTED TYPE: Integer", null, null);
				}
				this.linkDocs = linkDocs;
				this.keyModified.set("link_Docs", 1);

			}

			/**
			 * The method to get the delete
			 * @returns {String} A String representing the delete1
			 */
			getDelete()	{
				return this.delete1;

			}

			/**
			 * The method to set the value to delete
			 * @param {String} delete1 A String
			 */
			setDelete(delete1)	{
				if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: String", null, null);
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

		Options : class{
			constructor(){

			}



		},

		Reminder : class{
			constructor(){

				this.period=null;
				this.unit=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the period
			 * @returns {String} A String representing the period
			 */
			getPeriod()	{
				return this.period;

			}

			/**
			 * The method to set the value to period
			 * @param {String} period A String
			 */
			setPeriod(period)	{
				if((period != null) && (!(Object.prototype.toString.call(period) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: period EXPECTED TYPE: String", null, null);
				}
				this.period = period;
				this.keyModified.set("period", 1);

			}

			/**
			 * The method to get the unit
			 * @returns {String} A String representing the unit
			 */
			getUnit()	{
				return this.unit;

			}

			/**
			 * The method to set the value to unit
			 * @param {String} unit A String
			 */
			setUnit(unit)	{
				if((unit != null) && (!(Object.prototype.toString.call(unit) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unit EXPECTED TYPE: String", null, null);
				}
				this.unit = unit;
				this.keyModified.set("unit", 1);

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

		DeletedRecordsWrapper : class{
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

		DeletedRecord : class{
			constructor(){

				this.deletedBy=null;
				this.id=null;
				this.displayName=null;
				this.type=null;
				this.createdBy=null;
				this.deletedTime=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the deletedBy
			 * @returns {User} An instance of User
			 */
			getDeletedBy()	{
				return this.deletedBy;

			}

			/**
			 * The method to set the value to deletedBy
			 * @param {User} deletedBy An instance of User
			 */
			setDeletedBy(deletedBy)	{
				if((deletedBy != null) && (!(deletedBy instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deletedBy EXPECTED TYPE: User", null, null);
				}
				this.deletedBy = deletedBy;
				this.keyModified.set("deleted_by", 1);

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
			 * The method to get the displayName
			 * @returns {String} A String representing the displayName
			 */
			getDisplayName()	{
				return this.displayName;

			}

			/**
			 * The method to set the value to displayName
			 * @param {String} displayName A String
			 */
			setDisplayName(displayName)	{
				if((displayName != null) && (!(Object.prototype.toString.call(displayName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayName EXPECTED TYPE: String", null, null);
				}
				this.displayName = displayName;
				this.keyModified.set("display_name", 1);

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
			 * The method to get the deletedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getDeletedTime()	{
				return this.deletedTime;

			}

			/**
			 * The method to set the value to deletedTime
			 * @param {OffsetDateTime} deletedTime An instance of OffsetDateTime
			 */
			setDeletedTime(deletedTime)	{
				if((deletedTime != null) && (!(deletedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deletedTime EXPECTED TYPE: Date", null, null);
				}
				this.deletedTime = deletedTime;
				this.keyModified.set("deleted_time", 1);

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

		LineTax : class{
			constructor(){

				this.percentage=null;
				this.name=null;
				this.id=null;
				this.value=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the percentage
			 * @returns {Double} A Float representing the percentage
			 */
			getPercentage()	{
				return this.percentage;

			}

			/**
			 * The method to set the value to percentage
			 * @param {Double} percentage A Float
			 */
			setPercentage(percentage)	{
				if((percentage != null) && (!(Object.prototype.toString.call(percentage) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: percentage EXPECTED TYPE: Float", null, null);
				}
				this.percentage = percentage;
				this.keyModified.set("percentage", 1);

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
			 * The method to get the value
			 * @returns {Double} A Float representing the value
			 */
			getValue()	{
				return this.value;

			}

			/**
			 * The method to set the value to value
			 * @param {Double} value A Float
			 */
			setValue(value)	{
				if((value != null) && (!(Object.prototype.toString.call(value) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: value EXPECTED TYPE: Float", null, null);
				}
				this.value = value;
				this.keyModified.set("value", 1);

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

		RecurringActivity : class{
			constructor(){

				this.rrule=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the rrule
			 * @returns {String} A String representing the rrule
			 */
			getRrule()	{
				return this.rrule;

			}

			/**
			 * The method to set the value to rrule
			 * @param {String} rrule A String
			 */
			setRrule(rrule)	{
				if((rrule != null) && (!(Object.prototype.toString.call(rrule) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: rrule EXPECTED TYPE: String", null, null);
				}
				this.rrule = rrule;
				this.keyModified.set("RRULE", 1);

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

		Comment : class{
			constructor(){

				this.commentedBy=null;
				this.commentedTime=null;
				this.commentContent=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the commentedBy
			 * @returns {String} A String representing the commentedBy
			 */
			getCommentedBy()	{
				return this.commentedBy;

			}

			/**
			 * The method to set the value to commentedBy
			 * @param {String} commentedBy A String
			 */
			setCommentedBy(commentedBy)	{
				if((commentedBy != null) && (!(Object.prototype.toString.call(commentedBy) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: commentedBy EXPECTED TYPE: String", null, null);
				}
				this.commentedBy = commentedBy;
				this.keyModified.set("commented_by", 1);

			}

			/**
			 * The method to get the commentedTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getCommentedTime()	{
				return this.commentedTime;

			}

			/**
			 * The method to set the value to commentedTime
			 * @param {OffsetDateTime} commentedTime An instance of OffsetDateTime
			 */
			setCommentedTime(commentedTime)	{
				if((commentedTime != null) && (!(commentedTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: commentedTime EXPECTED TYPE: Date", null, null);
				}
				this.commentedTime = commentedTime;
				this.keyModified.set("commented_time", 1);

			}

			/**
			 * The method to get the commentContent
			 * @returns {String} A String representing the commentContent
			 */
			getCommentContent()	{
				return this.commentContent;

			}

			/**
			 * The method to set the value to commentContent
			 * @param {String} commentContent A String
			 */
			setCommentContent(commentContent)	{
				if((commentContent != null) && (!(Object.prototype.toString.call(commentContent) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: commentContent EXPECTED TYPE: String", null, null);
				}
				this.commentContent = commentContent;
				this.keyModified.set("comment_content", 1);

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

		CarryOverTags : class{
			constructor(){

				this.contacts=null;
				this.accounts=null;
				this.deals=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the contacts
			 * @returns {List} An Array representing the contacts
			 */
			getContacts()	{
				return this.contacts;

			}

			/**
			 * The method to set the value to contacts
			 * @param {List} contacts An Array
			 */
			setContacts(contacts)	{
				if((contacts != null) && (!(Object.prototype.toString.call(contacts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: Array", null, null);
				}
				this.contacts = contacts;
				this.keyModified.set("Contacts", 1);

			}

			/**
			 * The method to get the accounts
			 * @returns {List} An Array representing the accounts
			 */
			getAccounts()	{
				return this.accounts;

			}

			/**
			 * The method to set the value to accounts
			 * @param {List} accounts An Array
			 */
			setAccounts(accounts)	{
				if((accounts != null) && (!(Object.prototype.toString.call(accounts) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: Array", null, null);
				}
				this.accounts = accounts;
				this.keyModified.set("Accounts", 1);

			}

			/**
			 * The method to get the deals
			 * @returns {List} An Array representing the deals
			 */
			getDeals()	{
				return this.deals;

			}

			/**
			 * The method to set the value to deals
			 * @param {List} deals An Array
			 */
			setDeals(deals)	{
				if((deals != null) && (!(Object.prototype.toString.call(deals) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: Array", null, null);
				}
				this.deals = deals;
				this.keyModified.set("Deals", 1);

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

		MassUpdateSuccessResponse : class{
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

		GetRecordParam : {
			APPROVED : 	new Param("approved", "Record.Model.GetRecordParam"),

			CONVERTED : 	new Param("converted", "Record.Model.GetRecordParam"),

			CVID : 	new Param("cvid", "Record.Model.GetRecordParam"),

			UID : 	new Param("uid", "Record.Model.GetRecordParam"),

			FIELDS : 	new Param("fields", "Record.Model.GetRecordParam"),

			STARTDATETIME : 	new Param("startDateTime", "Record.Model.GetRecordParam"),

			ENDDATETIME : 	new Param("endDateTime", "Record.Model.GetRecordParam"),

			TERRITORY_ID : 	new Param("territory_id", "Record.Model.GetRecordParam"),

			INCLUDE_CHILD : 	new Param("include_child", "Record.Model.GetRecordParam"),


		},

		UpsertRecordsHeader : {
			X_EXTERNAL : 	new Header("X-EXTERNAL", "Record.Model.UpsertRecordsHeader"),


		},

		GetRecordsHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "Record.Model.GetRecordsHeader"),

			X_EXTERNAL : 	new Header("X-EXTERNAL", "Record.Model.GetRecordsHeader"),


		},

		GetRecordHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "Record.Model.GetRecordHeader"),

			X_EXTERNAL : 	new Header("X-EXTERNAL", "Record.Model.GetRecordHeader"),


		},

		GetDeletedRecordsParam : {
			TYPE : 	new Param("type", "Record.Model.GetDeletedRecordsParam"),

			PAGE : 	new Param("page", "Record.Model.GetDeletedRecordsParam"),

			PER_PAGE : 	new Param("per_page", "Record.Model.GetDeletedRecordsParam"),


		},

		GetMassUpdateStatusParam : {
			JOB_ID : 	new Param("job_id", "Record.Model.GetMassUpdateStatusParam"),


		},

		UpdateRecordHeader : {
			X_EXTERNAL : 	new Header("X-EXTERNAL", "Record.Model.UpdateRecordHeader"),


		},

		GetRecordsParam : {
			APPROVED : 	new Param("approved", "Record.Model.GetRecordsParam"),

			CONVERTED : 	new Param("converted", "Record.Model.GetRecordsParam"),

			CVID : 	new Param("cvid", "Record.Model.GetRecordsParam"),

			IDS : 	new Param("ids", "Record.Model.GetRecordsParam"),

			UID : 	new Param("uid", "Record.Model.GetRecordsParam"),

			FIELDS : 	new Param("fields", "Record.Model.GetRecordsParam"),

			SORT_BY : 	new Param("sort_by", "Record.Model.GetRecordsParam"),

			SORT_ORDER : 	new Param("sort_order", "Record.Model.GetRecordsParam"),

			PAGE : 	new Param("page", "Record.Model.GetRecordsParam"),

			PER_PAGE : 	new Param("per_page", "Record.Model.GetRecordsParam"),

			STARTDATETIME : 	new Param("startDateTime", "Record.Model.GetRecordsParam"),

			ENDDATETIME : 	new Param("endDateTime", "Record.Model.GetRecordsParam"),

			TERRITORY_ID : 	new Param("territory_id", "Record.Model.GetRecordsParam"),

			INCLUDE_CHILD : 	new Param("include_child", "Record.Model.GetRecordsParam"),


		},

		SearchRecordsParam : {
			CRITERIA : 	new Param("criteria", "Record.Model.SearchRecordsParam"),

			EMAIL : 	new Param("email", "Record.Model.SearchRecordsParam"),

			PHONE : 	new Param("phone", "Record.Model.SearchRecordsParam"),

			WORD : 	new Param("word", "Record.Model.SearchRecordsParam"),

			CONVERTED : 	new Param("converted", "Record.Model.SearchRecordsParam"),

			APPROVED : 	new Param("approved", "Record.Model.SearchRecordsParam"),

			PAGE : 	new Param("page", "Record.Model.SearchRecordsParam"),

			PER_PAGE : 	new Param("per_page", "Record.Model.SearchRecordsParam"),


		},

		DeleteRecordParam : {
			WF_TRIGGER : 	new Param("wf_trigger", "Record.Model.DeleteRecordParam"),


		},

		UpdateRecordsHeader : {
			X_EXTERNAL : 	new Header("X-EXTERNAL", "Record.Model.UpdateRecordsHeader"),


		},

		SearchRecordsHeader : {
			X_EXTERNAL : 	new Header("X-EXTERNAL", "Record.Model.SearchRecordsHeader"),


		},

		DeleteRecordHeader : {
			X_EXTERNAL : 	new Header("X-EXTERNAL", "Record.Model.DeleteRecordHeader"),


		},

		DeleteRecordsParam : {
			IDS : 	new Param("ids", "Record.Model.DeleteRecordsParam"),

			WF_TRIGGER : 	new Param("wf_trigger", "Record.Model.DeleteRecordsParam"),


		},

		DeleteRecordsHeader : {
			X_EXTERNAL : 	new Header("X-EXTERNAL", "Record.Model.DeleteRecordsHeader"),


		},

		GetDeletedRecordsHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "Record.Model.GetDeletedRecordsHeader"),


		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get record
		 * @param {Long} id A BigInt
		 * @param {String} moduleAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRecord(id, moduleAPIName, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
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
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			await Utility.getFields(moduleAPIName);
			handlerInstance.setModuleAPIName(moduleAPIName);
			return handlerInstance.apiCall("Record.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update record
		 * @param {Long} id A BigInt
		 * @param {String} moduleAPIName A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateRecord(id, moduleAPIName, request, headerInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setHeader(headerInstance);
			await Utility.getFields(moduleAPIName);
			handlerInstance.setModuleAPIName(moduleAPIName);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete record
		 * @param {Long} id A BigInt
		 * @param {String} moduleAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteRecord(id, moduleAPIName, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
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
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get records
		 * @param {String} moduleAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRecords(moduleAPIName, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
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
			apiPath = apiPath.concat(moduleAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			await Utility.getFields(moduleAPIName);
			handlerInstance.setModuleAPIName(moduleAPIName);
			return handlerInstance.apiCall("Record.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to create records
		 * @param {String} moduleAPIName A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createRecords(moduleAPIName, request){
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(moduleAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await Utility.getFields(moduleAPIName);
			handlerInstance.setModuleAPIName(moduleAPIName);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update records
		 * @param {String} moduleAPIName A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateRecords(moduleAPIName, request, headerInstance=null){
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(moduleAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setHeader(headerInstance);
			await Utility.getFields(moduleAPIName);
			handlerInstance.setModuleAPIName(moduleAPIName);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete records
		 * @param {String} moduleAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteRecords(moduleAPIName, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
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
			apiPath = apiPath.concat(moduleAPIName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to upsert records
		 * @param {String} moduleAPIName A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async upsertRecords(moduleAPIName, request, headerInstance=null){
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/upsert");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setHeader(headerInstance);
			await Utility.getFields(moduleAPIName);
			handlerInstance.setModuleAPIName(moduleAPIName);
			return handlerInstance.apiCall("Record.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get deleted records
		 * @param {String} moduleAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getDeletedRecords(moduleAPIName, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
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
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/deleted");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			return handlerInstance.apiCall("Record.Model.DeletedRecordsHandler", "application/json");

		}

		/**
		 * The method to search records
		 * @param {String} moduleAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async searchRecords(moduleAPIName, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
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
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/search");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			await Utility.getFields(moduleAPIName);
			handlerInstance.setModuleAPIName(moduleAPIName);
			return handlerInstance.apiCall("Record.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to convert lead
		 * @param {Long} id A BigInt
		 * @param {ConvertBodyWrapper} request An instance of ConvertBodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async convertLead(id, request){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.ConvertBodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: ConvertBodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/Leads/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/actions/convert");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await Utility.getFields("Deals");
			return handlerInstance.apiCall("Record.Model.ConvertActionHandler", "application/json");

		}

		/**
		 * The method to get photo
		 * @param {Long} id A BigInt
		 * @param {String} moduleAPIName A String
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getPhoto(id, moduleAPIName){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/photo");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Record.Model.DownloadHandler", "application/x-download");

		}

		/**
		 * The method to upload photo
		 * @param {Long} id A BigInt
		 * @param {String} moduleAPIName A String
		 * @param {FileBodyWrapper} request An instance of FileBodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async uploadPhoto(id, moduleAPIName, request){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.FileBodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FileBodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/photo");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("multipart/form-data");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await Utility.verifyPhotoSupport(moduleAPIName);
			return handlerInstance.apiCall("Record.Model.FileHandler", "application/json");

		}

		/**
		 * The method to delete photo
		 * @param {Long} id A BigInt
		 * @param {String} moduleAPIName A String
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deletePhoto(id, moduleAPIName){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/photo");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			return handlerInstance.apiCall("Record.Model.FileHandler", "application/json");

		}

		/**
		 * The method to mass update records
		 * @param {String} moduleAPIName A String
		 * @param {MassUpdateBodyWrapper} request An instance of MassUpdateBodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async massUpdateRecords(moduleAPIName, request){
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Record.Model.MassUpdateBodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: MassUpdateBodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/actions/mass_update");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			await Utility.getFields(moduleAPIName);
			handlerInstance.setModuleAPIName(moduleAPIName);
			return handlerInstance.apiCall("Record.Model.MassUpdateActionHandler", "application/json");

		}

		/**
		 * The method to get mass update status
		 * @param {String} moduleAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getMassUpdateStatus(moduleAPIName, paramInstance=null){
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(moduleAPIName.toString());
			apiPath = apiPath.concat("/actions/mass_update");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Record.Model.MassUpdateResponseHandler", "application/json");

		}
	},

}
ZCRM.Record.Model.InventoryLineItems = class extends ZCRM.Record.Model.Record{
	constructor(){
		super();

	}



	/**
	 * The method to get the product
	 * @returns {LineItemProduct} An instance of LineItemProduct
	 */
	getProduct(){
		return this.getKeyValue("product");

	}

	/**
	 * The method to set the value to product
	 * @param {LineItemProduct} product An instance of LineItemProduct
	 */
	setProduct(product){
		if((product != null) && (!(product instanceof ZCRM.Record.Model.LineItemProduct))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: product EXPECTED TYPE: LineItemProduct", null, null);
		}
		this.addKeyValue("product", product);

	}

	/**
	 * The method to get the quantity
	 * @returns {Double} A Float representing the quantity
	 */
	getQuantity(){
		return this.getKeyValue("quantity");

	}

	/**
	 * The method to set the value to quantity
	 * @param {Double} quantity A Float
	 */
	setQuantity(quantity){
		if((quantity != null) && (!(Object.prototype.toString.call(quantity) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quantity EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("quantity", quantity);

	}

	/**
	 * The method to get the discount
	 * @returns {String} A String representing the discount
	 */
	getDiscount(){
		return this.getKeyValue("Discount");

	}

	/**
	 * The method to set the value to discount
	 * @param {String} discount A String
	 */
	setDiscount(discount){
		if((discount != null) && (!(Object.prototype.toString.call(discount) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: discount EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Discount", discount);

	}

	/**
	 * The method to get the totalAfterDiscount
	 * @returns {Double} A Float representing the totalAfterDiscount
	 */
	getTotalAfterDiscount(){
		return this.getKeyValue("total_after_discount");

	}

	/**
	 * The method to set the value to totalAfterDiscount
	 * @param {Double} totalAfterDiscount A Float
	 */
	setTotalAfterDiscount(totalAfterDiscount){
		if((totalAfterDiscount != null) && (!(Object.prototype.toString.call(totalAfterDiscount) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: totalAfterDiscount EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("total_after_discount", totalAfterDiscount);

	}

	/**
	 * The method to get the netTotal
	 * @returns {Double} A Float representing the netTotal
	 */
	getNetTotal(){
		return this.getKeyValue("net_total");

	}

	/**
	 * The method to set the value to netTotal
	 * @param {Double} netTotal A Float
	 */
	setNetTotal(netTotal){
		if((netTotal != null) && (!(Object.prototype.toString.call(netTotal) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: netTotal EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("net_total", netTotal);

	}

	/**
	 * The method to get the book
	 * @returns {Double} A Float representing the book
	 */
	getBook(){
		return this.getKeyValue("book");

	}

	/**
	 * The method to set the value to book
	 * @param {Double} book A Float
	 */
	setBook(book){
		if((book != null) && (!(Object.prototype.toString.call(book) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: book EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("book", book);

	}

	/**
	 * The method to get the tax
	 * @returns {Double} A Float representing the tax
	 */
	getTax(){
		return this.getKeyValue("Tax");

	}

	/**
	 * The method to set the value to tax
	 * @param {Double} tax A Float
	 */
	setTax(tax){
		if((tax != null) && (!(Object.prototype.toString.call(tax) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tax EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("Tax", tax);

	}

	/**
	 * The method to get the listPrice
	 * @returns {Double} A Float representing the listPrice
	 */
	getListPrice(){
		return this.getKeyValue("list_price");

	}

	/**
	 * The method to set the value to listPrice
	 * @param {Double} listPrice A Float
	 */
	setListPrice(listPrice){
		if((listPrice != null) && (!(Object.prototype.toString.call(listPrice) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: listPrice EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("list_price", listPrice);

	}

	/**
	 * The method to get the unitPrice
	 * @returns {Double} A Float representing the unitPrice
	 */
	getUnitPrice(){
		return this.getKeyValue("unit_price");

	}

	/**
	 * The method to set the value to unitPrice
	 * @param {Double} unitPrice A Float
	 */
	setUnitPrice(unitPrice){
		if((unitPrice != null) && (!(Object.prototype.toString.call(unitPrice) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unitPrice EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("unit_price", unitPrice);

	}

	/**
	 * The method to get the quantityInStock
	 * @returns {Double} A Float representing the quantityInStock
	 */
	getQuantityInStock(){
		return this.getKeyValue("quantity_in_stock");

	}

	/**
	 * The method to set the value to quantityInStock
	 * @param {Double} quantityInStock A Float
	 */
	setQuantityInStock(quantityInStock){
		if((quantityInStock != null) && (!(Object.prototype.toString.call(quantityInStock) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quantityInStock EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("quantity_in_stock", quantityInStock);

	}

	/**
	 * The method to get the total
	 * @returns {Double} A Float representing the total
	 */
	getTotal(){
		return this.getKeyValue("total");

	}

	/**
	 * The method to set the value to total
	 * @param {Double} total A Float
	 */
	setTotal(total){
		if((total != null) && (!(Object.prototype.toString.call(total) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: total EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("total", total);

	}

	/**
	 * The method to get the productDescription
	 * @returns {String} A String representing the productDescription
	 */
	getProductDescription(){
		return this.getKeyValue("product_description");

	}

	/**
	 * The method to set the value to productDescription
	 * @param {String} productDescription A String
	 */
	setProductDescription(productDescription){
		if((productDescription != null) && (!(Object.prototype.toString.call(productDescription) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: productDescription EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("product_description", productDescription);

	}

	/**
	 * The method to get the lineTax
	 * @returns {List} An Array representing the lineTax
	 */
	getLineTax(){
		return this.getKeyValue("line_tax");

	}

	/**
	 * The method to set the value to lineTax
	 * @param {List} lineTax An Array
	 */
	setLineTax(lineTax){
		if((lineTax != null) && (!(Object.prototype.toString.call(lineTax) == "[object Array]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lineTax EXPECTED TYPE: Array", null, null);
		}
		this.addKeyValue("line_tax", lineTax);

	}
}

ZCRM.Record.Model.Field.Quotes = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	DISCOUNT : new ZCRM.Record.Model.Field("Discount"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	SHIPPING_STATE : new ZCRM.Record.Model.Field("Shipping_State"),
	TAX : new ZCRM.Record.Model.Field("Tax"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	DEAL_NAME : new ZCRM.Record.Model.Field("Deal_Name"),
	VALID_TILL : new ZCRM.Record.Model.Field("Valid_Till"),
	BILLING_COUNTRY : new ZCRM.Record.Model.Field("Billing_Country"),
	ACCOUNT_NAME : new ZCRM.Record.Model.Field("Account_Name"),
	TEAM : new ZCRM.Record.Model.Field("Team"),
	ID : new ZCRM.Record.Model.Field("id"),
	CARRIER : new ZCRM.Record.Model.Field("Carrier"),
	QUOTE_STAGE : new ZCRM.Record.Model.Field("Quote_Stage"),
	GRAND_TOTAL : new ZCRM.Record.Model.Field("Grand_Total"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	BILLING_STREET : new ZCRM.Record.Model.Field("Billing_Street"),
	ADJUSTMENT : new ZCRM.Record.Model.Field("Adjustment"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	TERMS_AND_CONDITIONS : new ZCRM.Record.Model.Field("Terms_and_Conditions"),
	SUB_TOTAL : new ZCRM.Record.Model.Field("Sub_Total"),
	BILLING_CODE : new ZCRM.Record.Model.Field("Billing_Code"),
	PRODUCT_DETAILS : new ZCRM.Record.Model.Field("Product_Details"),
	SUBJECT : new ZCRM.Record.Model.Field("Subject"),
	CONTACT_NAME : new ZCRM.Record.Model.Field("Contact_Name"),
	SHIPPING_CITY : new ZCRM.Record.Model.Field("Shipping_City"),
	SHIPPING_COUNTRY : new ZCRM.Record.Model.Field("Shipping_Country"),
	SHIPPING_CODE : new ZCRM.Record.Model.Field("Shipping_Code"),
	BILLING_CITY : new ZCRM.Record.Model.Field("Billing_City"),
	QUOTE_NUMBER : new ZCRM.Record.Model.Field("Quote_Number"),
	BILLING_STATE : new ZCRM.Record.Model.Field("Billing_State"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	SHIPPING_STREET : new ZCRM.Record.Model.Field("Shipping_Street"),
}
ZCRM.Record.Model.Field.Price_Books = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	ACTIVE : new ZCRM.Record.Model.Field("Active"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	PRICING_DETAILS : new ZCRM.Record.Model.Field("Pricing_Details"),
	PRICING_MODEL : new ZCRM.Record.Model.Field("Pricing_Model"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	PRICE_BOOK_NAME : new ZCRM.Record.Model.Field("Price_Book_Name"),
	ID : new ZCRM.Record.Model.Field("id"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
}
ZCRM.Record.Model.Field.Contacts = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	EMAIL : new ZCRM.Record.Model.Field("Email"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	VENDOR_NAME : new ZCRM.Record.Model.Field("Vendor_Name"),
	MAILING_ZIP : new ZCRM.Record.Model.Field("Mailing_Zip"),
	REPORTS_TO : new ZCRM.Record.Model.Field("Reports_To"),
	OTHER_PHONE : new ZCRM.Record.Model.Field("Other_Phone"),
	MAILING_STATE : new ZCRM.Record.Model.Field("Mailing_State"),
	TWITTER : new ZCRM.Record.Model.Field("Twitter"),
	OTHER_ZIP : new ZCRM.Record.Model.Field("Other_Zip"),
	MAILING_STREET : new ZCRM.Record.Model.Field("Mailing_Street"),
	OTHER_STATE : new ZCRM.Record.Model.Field("Other_State"),
	SALUTATION : new ZCRM.Record.Model.Field("Salutation"),
	OTHER_COUNTRY : new ZCRM.Record.Model.Field("Other_Country"),
	LAST_ACTIVITY_TIME : new ZCRM.Record.Model.Field("Last_Activity_Time"),
	FIRST_NAME : new ZCRM.Record.Model.Field("First_Name"),
	FULL_NAME : new ZCRM.Record.Model.Field("Full_Name"),
	ASST_PHONE : new ZCRM.Record.Model.Field("Asst_Phone"),
	RECORD_IMAGE : new ZCRM.Record.Model.Field("Record_Image"),
	DEPARTMENT : new ZCRM.Record.Model.Field("Department"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	SKYPE_ID : new ZCRM.Record.Model.Field("Skype_ID"),
	ASSISTANT : new ZCRM.Record.Model.Field("Assistant"),
	PHONE : new ZCRM.Record.Model.Field("Phone"),
	MAILING_COUNTRY : new ZCRM.Record.Model.Field("Mailing_Country"),
	ACCOUNT_NAME : new ZCRM.Record.Model.Field("Account_Name"),
	ID : new ZCRM.Record.Model.Field("id"),
	EMAIL_OPT_OUT : new ZCRM.Record.Model.Field("Email_Opt_Out"),
	REPORTING_TO : new ZCRM.Record.Model.Field("Reporting_To"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	DATE_OF_BIRTH : new ZCRM.Record.Model.Field("Date_of_Birth"),
	MAILING_CITY : new ZCRM.Record.Model.Field("Mailing_City"),
	OTHER_CITY : new ZCRM.Record.Model.Field("Other_City"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	TITLE : new ZCRM.Record.Model.Field("Title"),
	OTHER_STREET : new ZCRM.Record.Model.Field("Other_Street"),
	MOBILE : new ZCRM.Record.Model.Field("Mobile"),
	TERRITORIES : new ZCRM.Record.Model.Field("Territories"),
	HOME_PHONE : new ZCRM.Record.Model.Field("Home_Phone"),
	LAST_NAME : new ZCRM.Record.Model.Field("Last_Name"),
	LEAD_SOURCE : new ZCRM.Record.Model.Field("Lead_Source"),
	IS_RECORD_DUPLICATE : new ZCRM.Record.Model.Field("Is_Record_Duplicate"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	FAX : new ZCRM.Record.Model.Field("Fax"),
	SECONDARY_EMAIL : new ZCRM.Record.Model.Field("Secondary_Email"),
}
ZCRM.Record.Model.Field.Accounts = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	OWNERSHIP : new ZCRM.Record.Model.Field("Ownership"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	ACCOUNT_TYPE : new ZCRM.Record.Model.Field("Account_Type"),
	RATING : new ZCRM.Record.Model.Field("Rating"),
	SIC_CODE : new ZCRM.Record.Model.Field("SIC_Code"),
	SHIPPING_STATE : new ZCRM.Record.Model.Field("Shipping_State"),
	WEBSITE : new ZCRM.Record.Model.Field("Website"),
	EMPLOYEES : new ZCRM.Record.Model.Field("Employees"),
	LAST_ACTIVITY_TIME : new ZCRM.Record.Model.Field("Last_Activity_Time"),
	INDUSTRY : new ZCRM.Record.Model.Field("Industry"),
	RECORD_IMAGE : new ZCRM.Record.Model.Field("Record_Image"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	ACCOUNT_SITE : new ZCRM.Record.Model.Field("Account_Site"),
	PHONE : new ZCRM.Record.Model.Field("Phone"),
	BILLING_COUNTRY : new ZCRM.Record.Model.Field("Billing_Country"),
	ACCOUNT_NAME : new ZCRM.Record.Model.Field("Account_Name"),
	ID : new ZCRM.Record.Model.Field("id"),
	ACCOUNT_NUMBER : new ZCRM.Record.Model.Field("Account_Number"),
	TICKER_SYMBOL : new ZCRM.Record.Model.Field("Ticker_Symbol"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	BILLING_STREET : new ZCRM.Record.Model.Field("Billing_Street"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	BILLING_CODE : new ZCRM.Record.Model.Field("Billing_Code"),
	TERRITORIES : new ZCRM.Record.Model.Field("Territories"),
	PARENT_ACCOUNT : new ZCRM.Record.Model.Field("Parent_Account"),
	SHIPPING_CITY : new ZCRM.Record.Model.Field("Shipping_City"),
	SHIPPING_COUNTRY : new ZCRM.Record.Model.Field("Shipping_Country"),
	SHIPPING_CODE : new ZCRM.Record.Model.Field("Shipping_Code"),
	BILLING_CITY : new ZCRM.Record.Model.Field("Billing_City"),
	BILLING_STATE : new ZCRM.Record.Model.Field("Billing_State"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	FAX : new ZCRM.Record.Model.Field("Fax"),
	ANNUAL_REVENUE : new ZCRM.Record.Model.Field("Annual_Revenue"),
	SHIPPING_STREET : new ZCRM.Record.Model.Field("Shipping_Street"),
}
ZCRM.Record.Model.Field.Sales_Orders = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	DISCOUNT : new ZCRM.Record.Model.Field("Discount"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	CUSTOMER_NO : new ZCRM.Record.Model.Field("Customer_No"),
	SHIPPING_STATE : new ZCRM.Record.Model.Field("Shipping_State"),
	TAX : new ZCRM.Record.Model.Field("Tax"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	DEAL_NAME : new ZCRM.Record.Model.Field("Deal_Name"),
	BILLING_COUNTRY : new ZCRM.Record.Model.Field("Billing_Country"),
	ACCOUNT_NAME : new ZCRM.Record.Model.Field("Account_Name"),
	ID : new ZCRM.Record.Model.Field("id"),
	CARRIER : new ZCRM.Record.Model.Field("Carrier"),
	QUOTE_NAME : new ZCRM.Record.Model.Field("Quote_Name"),
	STATUS : new ZCRM.Record.Model.Field("Status"),
	SALES_COMMISSION : new ZCRM.Record.Model.Field("Sales_Commission"),
	GRAND_TOTAL : new ZCRM.Record.Model.Field("Grand_Total"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	DUE_DATE : new ZCRM.Record.Model.Field("Due_Date"),
	BILLING_STREET : new ZCRM.Record.Model.Field("Billing_Street"),
	ADJUSTMENT : new ZCRM.Record.Model.Field("Adjustment"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	TERMS_AND_CONDITIONS : new ZCRM.Record.Model.Field("Terms_and_Conditions"),
	SUB_TOTAL : new ZCRM.Record.Model.Field("Sub_Total"),
	BILLING_CODE : new ZCRM.Record.Model.Field("Billing_Code"),
	PRODUCT_DETAILS : new ZCRM.Record.Model.Field("Product_Details"),
	SUBJECT : new ZCRM.Record.Model.Field("Subject"),
	CONTACT_NAME : new ZCRM.Record.Model.Field("Contact_Name"),
	EXCISE_DUTY : new ZCRM.Record.Model.Field("Excise_Duty"),
	SHIPPING_CITY : new ZCRM.Record.Model.Field("Shipping_City"),
	SHIPPING_COUNTRY : new ZCRM.Record.Model.Field("Shipping_Country"),
	SHIPPING_CODE : new ZCRM.Record.Model.Field("Shipping_Code"),
	BILLING_CITY : new ZCRM.Record.Model.Field("Billing_City"),
	SO_NUMBER : new ZCRM.Record.Model.Field("SO_Number"),
	PURCHASE_ORDER : new ZCRM.Record.Model.Field("Purchase_Order"),
	BILLING_STATE : new ZCRM.Record.Model.Field("Billing_State"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	PENDING : new ZCRM.Record.Model.Field("Pending"),
	SHIPPING_STREET : new ZCRM.Record.Model.Field("Shipping_Street"),
}
ZCRM.Record.Model.Field.Notes = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	PARENT_ID : new ZCRM.Record.Model.Field("Parent_Id"),
	ID : new ZCRM.Record.Model.Field("id"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	NOTE_TITLE : new ZCRM.Record.Model.Field("Note_Title"),
	NOTE_CONTENT : new ZCRM.Record.Model.Field("Note_Content"),
}
ZCRM.Record.Model.Field.Products = {
	PRODUCT_CATEGORY : new ZCRM.Record.Model.Field("Product_Category"),
	QTY_IN_DEMAND : new ZCRM.Record.Model.Field("Qty_in_Demand"),
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	VENDOR_NAME : new ZCRM.Record.Model.Field("Vendor_Name"),
	TAX : new ZCRM.Record.Model.Field("Tax"),
	SALES_START_DATE : new ZCRM.Record.Model.Field("Sales_Start_Date"),
	PRODUCT_ACTIVE : new ZCRM.Record.Model.Field("Product_Active"),
	RECORD_IMAGE : new ZCRM.Record.Model.Field("Record_Image"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	PRODUCT_CODE : new ZCRM.Record.Model.Field("Product_Code"),
	MANUFACTURER : new ZCRM.Record.Model.Field("Manufacturer"),
	ID : new ZCRM.Record.Model.Field("id"),
	SUPPORT_EXPIRY_DATE : new ZCRM.Record.Model.Field("Support_Expiry_Date"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	COMMISSION_RATE : new ZCRM.Record.Model.Field("Commission_Rate"),
	PRODUCT_NAME : new ZCRM.Record.Model.Field("Product_Name"),
	HANDLER : new ZCRM.Record.Model.Field("Handler"),
	SUPPORT_START_DATE : new ZCRM.Record.Model.Field("Support_Start_Date"),
	USAGE_UNIT : new ZCRM.Record.Model.Field("Usage_Unit"),
	QTY_ORDERED : new ZCRM.Record.Model.Field("Qty_Ordered"),
	QTY_IN_STOCK : new ZCRM.Record.Model.Field("Qty_in_Stock"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	SALES_END_DATE : new ZCRM.Record.Model.Field("Sales_End_Date"),
	UNIT_PRICE : new ZCRM.Record.Model.Field("Unit_Price"),
	TAXABLE : new ZCRM.Record.Model.Field("Taxable"),
	REORDER_LEVEL : new ZCRM.Record.Model.Field("Reorder_Level"),
}
ZCRM.Record.Model.Field.Cases = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	EMAIL : new ZCRM.Record.Model.Field("Email"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	INTERNAL_COMMENTS : new ZCRM.Record.Model.Field("Internal_Comments"),
	NO_OF_COMMENTS : new ZCRM.Record.Model.Field("No_of_comments"),
	REPORTED_BY : new ZCRM.Record.Model.Field("Reported_By"),
	CASE_NUMBER : new ZCRM.Record.Model.Field("Case_Number"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	DEAL_NAME : new ZCRM.Record.Model.Field("Deal_Name"),
	PHONE : new ZCRM.Record.Model.Field("Phone"),
	ACCOUNT_NAME : new ZCRM.Record.Model.Field("Account_Name"),
	ID : new ZCRM.Record.Model.Field("id"),
	SOLUTION : new ZCRM.Record.Model.Field("Solution"),
	STATUS : new ZCRM.Record.Model.Field("Status"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	PRIORITY : new ZCRM.Record.Model.Field("Priority"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	COMMENTS : new ZCRM.Record.Model.Field("Comments"),
	PRODUCT_NAME : new ZCRM.Record.Model.Field("Product_Name"),
	ADD_COMMENT : new ZCRM.Record.Model.Field("Add_Comment"),
	CASE_ORIGIN : new ZCRM.Record.Model.Field("Case_Origin"),
	SUBJECT : new ZCRM.Record.Model.Field("Subject"),
	CASE_REASON : new ZCRM.Record.Model.Field("Case_Reason"),
	TYPE : new ZCRM.Record.Model.Field("Type"),
	IS_RECORD_DUPLICATE : new ZCRM.Record.Model.Field("Is_Record_Duplicate"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	RELATED_TO : new ZCRM.Record.Model.Field("Related_To"),
}
ZCRM.Record.Model.LineItemProduct = class extends ZCRM.Record.Model.Record{
	constructor(){
		super();

	}



	/**
	 * The method to get the productCode
	 * @returns {String} A String representing the productCode
	 */
	getProductCode(){
		return this.getKeyValue("Product_Code");

	}

	/**
	 * The method to set the value to productCode
	 * @param {String} productCode A String
	 */
	setProductCode(productCode){
		if((productCode != null) && (!(Object.prototype.toString.call(productCode) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: productCode EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Product_Code", productCode);

	}

	/**
	 * The method to get the currency
	 * @returns {String} A String representing the currency
	 */
	getCurrency(){
		return this.getKeyValue("Currency");

	}

	/**
	 * The method to set the value to currency
	 * @param {String} currency A String
	 */
	setCurrency(currency){
		if((currency != null) && (!(Object.prototype.toString.call(currency) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Currency", currency);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName(){
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String
	 */
	setName(name){
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("name", name);

	}
}

ZCRM.Record.Model.Field.Deals = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	CAMPAIGN_SOURCE : new ZCRM.Record.Model.Field("Campaign_Source"),
	CLOSING_DATE : new ZCRM.Record.Model.Field("Closing_Date"),
	LAST_ACTIVITY_TIME : new ZCRM.Record.Model.Field("Last_Activity_Time"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	LEAD_CONVERSION_TIME : new ZCRM.Record.Model.Field("Lead_Conversion_Time"),
	DEAL_NAME : new ZCRM.Record.Model.Field("Deal_Name"),
	EXPECTED_REVENUE : new ZCRM.Record.Model.Field("Expected_Revenue"),
	OVERALL_SALES_DURATION : new ZCRM.Record.Model.Field("Overall_Sales_Duration"),
	STAGE : new ZCRM.Record.Model.Field("Stage"),
	ID : new ZCRM.Record.Model.Field("id"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	TERRITORY : new ZCRM.Record.Model.Field("Territory"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	AMOUNT : new ZCRM.Record.Model.Field("Amount"),
	PROBABILITY : new ZCRM.Record.Model.Field("Probability"),
	NEXT_STEP : new ZCRM.Record.Model.Field("Next_Step"),
	CONTACT_NAME : new ZCRM.Record.Model.Field("Contact_Name"),
	SALES_CYCLE_DURATION : new ZCRM.Record.Model.Field("Sales_Cycle_Duration"),
	TYPE : new ZCRM.Record.Model.Field("Type"),
	DEAL_CATEGORY_STATUS : new ZCRM.Record.Model.Field("Deal_Category_Status"),
	LEAD_SOURCE : new ZCRM.Record.Model.Field("Lead_Source"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
}
ZCRM.Record.Model.Field.Events = {
	ALL_DAY : new ZCRM.Record.Model.Field("All_day"),
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	CHECK_IN_STATE : new ZCRM.Record.Model.Field("Check_In_State"),
	CHECK_IN_ADDRESS : new ZCRM.Record.Model.Field("Check_In_Address"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	START_DATETIME : new ZCRM.Record.Model.Field("Start_DateTime"),
	LATITUDE : new ZCRM.Record.Model.Field("Latitude"),
	PARTICIPANTS : new ZCRM.Record.Model.Field("Participants"),
	EVENT_TITLE : new ZCRM.Record.Model.Field("Event_Title"),
	END_DATETIME : new ZCRM.Record.Model.Field("End_DateTime"),
	CHECK_IN_BY : new ZCRM.Record.Model.Field("Check_In_By"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	CHECK_IN_CITY : new ZCRM.Record.Model.Field("Check_In_City"),
	ID : new ZCRM.Record.Model.Field("id"),
	CHECK_IN_COMMENT : new ZCRM.Record.Model.Field("Check_In_Comment"),
	REMIND_AT : new ZCRM.Record.Model.Field("Remind_At"),
	WHO_ID : new ZCRM.Record.Model.Field("Who_Id"),
	CHECK_IN_STATUS : new ZCRM.Record.Model.Field("Check_In_Status"),
	CHECK_IN_COUNTRY : new ZCRM.Record.Model.Field("Check_In_Country"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	VENUE : new ZCRM.Record.Model.Field("Venue"),
	ZIP_CODE : new ZCRM.Record.Model.Field("ZIP_Code"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	LONGITUDE : new ZCRM.Record.Model.Field("Longitude"),
	CHECK_IN_TIME : new ZCRM.Record.Model.Field("Check_In_Time"),
	RECURRING_ACTIVITY : new ZCRM.Record.Model.Field("Recurring_Activity"),
	WHAT_ID : new ZCRM.Record.Model.Field("What_Id"),
	CHECK_IN_SUB_LOCALITY : new ZCRM.Record.Model.Field("Check_In_Sub_Locality"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
}
ZCRM.Record.Model.Participants = class extends ZCRM.Record.Model.Record{
	constructor(){
		super();

	}



	/**
	 * The method to get the name
	 * @returns {String} A String representing the name
	 */
	getName(){
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String
	 */
	setName(name){
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("name", name);

	}

	/**
	 * The method to get the email
	 * @returns {String} A String representing the email
	 */
	getEmail(){
		return this.getKeyValue("Email");

	}

	/**
	 * The method to set the value to email
	 * @param {String} email A String
	 */
	setEmail(email){
		if((email != null) && (!(Object.prototype.toString.call(email) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: email EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Email", email);

	}

	/**
	 * The method to get the invited
	 * @returns {Boolean} A Boolean representing the invited
	 */
	getInvited(){
		return this.getKeyValue("invited");

	}

	/**
	 * The method to set the value to invited
	 * @param {Boolean} invited A Boolean
	 */
	setInvited(invited){
		if((invited != null) && (!(Object.prototype.toString.call(invited) == "[object Boolean]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: invited EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("invited", invited);

	}

	/**
	 * The method to get the type
	 * @returns {String} A String representing the type
	 */
	getType(){
		return this.getKeyValue("type");

	}

	/**
	 * The method to set the value to type
	 * @param {String} type A String
	 */
	setType(type){
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("type", type);

	}

	/**
	 * The method to get the participant
	 * @returns {String} A String representing the participant
	 */
	getParticipant(){
		return this.getKeyValue("participant");

	}

	/**
	 * The method to set the value to participant
	 * @param {String} participant A String
	 */
	setParticipant(participant){
		if((participant != null) && (!(Object.prototype.toString.call(participant) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: participant EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("participant", participant);

	}

	/**
	 * The method to get the status
	 * @returns {String} A String representing the status
	 */
	getStatus(){
		return this.getKeyValue("status");

	}

	/**
	 * The method to set the value to status
	 * @param {String} status A String
	 */
	setStatus(status){
		if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("status", status);

	}
}

ZCRM.Record.Model.Field.Invoices = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	DISCOUNT : new ZCRM.Record.Model.Field("Discount"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	SHIPPING_STATE : new ZCRM.Record.Model.Field("Shipping_State"),
	TAX : new ZCRM.Record.Model.Field("Tax"),
	INVOICE_DATE : new ZCRM.Record.Model.Field("Invoice_Date"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	BILLING_COUNTRY : new ZCRM.Record.Model.Field("Billing_Country"),
	ACCOUNT_NAME : new ZCRM.Record.Model.Field("Account_Name"),
	ID : new ZCRM.Record.Model.Field("id"),
	SALES_ORDER : new ZCRM.Record.Model.Field("Sales_Order"),
	STATUS : new ZCRM.Record.Model.Field("Status"),
	GRAND_TOTAL : new ZCRM.Record.Model.Field("Grand_Total"),
	SALES_COMMISSION : new ZCRM.Record.Model.Field("Sales_Commission"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	DUE_DATE : new ZCRM.Record.Model.Field("Due_Date"),
	BILLING_STREET : new ZCRM.Record.Model.Field("Billing_Street"),
	ADJUSTMENT : new ZCRM.Record.Model.Field("Adjustment"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	TERMS_AND_CONDITIONS : new ZCRM.Record.Model.Field("Terms_and_Conditions"),
	SUB_TOTAL : new ZCRM.Record.Model.Field("Sub_Total"),
	INVOICE_NUMBER : new ZCRM.Record.Model.Field("Invoice_Number"),
	BILLING_CODE : new ZCRM.Record.Model.Field("Billing_Code"),
	PRODUCT_DETAILS : new ZCRM.Record.Model.Field("Product_Details"),
	SUBJECT : new ZCRM.Record.Model.Field("Subject"),
	CONTACT_NAME : new ZCRM.Record.Model.Field("Contact_Name"),
	EXCISE_DUTY : new ZCRM.Record.Model.Field("Excise_Duty"),
	SHIPPING_CITY : new ZCRM.Record.Model.Field("Shipping_City"),
	SHIPPING_COUNTRY : new ZCRM.Record.Model.Field("Shipping_Country"),
	SHIPPING_CODE : new ZCRM.Record.Model.Field("Shipping_Code"),
	BILLING_CITY : new ZCRM.Record.Model.Field("Billing_City"),
	PURCHASE_ORDER : new ZCRM.Record.Model.Field("Purchase_Order"),
	BILLING_STATE : new ZCRM.Record.Model.Field("Billing_State"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	SHIPPING_STREET : new ZCRM.Record.Model.Field("Shipping_Street"),
}
ZCRM.Record.Model.PricingDetails = class extends ZCRM.Record.Model.Record{
	constructor(){
		super();

	}



	/**
	 * The method to get the toRange
	 * @returns {Double} A Float representing the toRange
	 */
	getToRange(){
		return this.getKeyValue("to_range");

	}

	/**
	 * The method to set the value to toRange
	 * @param {Double} toRange A Float
	 */
	setToRange(toRange){
		if((toRange != null) && (!(Object.prototype.toString.call(toRange) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: toRange EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("to_range", toRange);

	}

	/**
	 * The method to get the discount
	 * @returns {Double} A Float representing the discount
	 */
	getDiscount(){
		return this.getKeyValue("discount");

	}

	/**
	 * The method to set the value to discount
	 * @param {Double} discount A Float
	 */
	setDiscount(discount){
		if((discount != null) && (!(Object.prototype.toString.call(discount) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: discount EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("discount", discount);

	}

	/**
	 * The method to get the fromRange
	 * @returns {Double} A Float representing the fromRange
	 */
	getFromRange(){
		return this.getKeyValue("from_range");

	}

	/**
	 * The method to set the value to fromRange
	 * @param {Double} fromRange A Float
	 */
	setFromRange(fromRange){
		if((fromRange != null) && (!(Object.prototype.toString.call(fromRange) == "[object Number]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fromRange EXPECTED TYPE: Float", null, null);
		}
		this.addKeyValue("from_range", fromRange);

	}
}

ZCRM.Record.Model.Field.Tasks = {
	STATUS : new ZCRM.Record.Model.Field("Status"),
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	DUE_DATE : new ZCRM.Record.Model.Field("Due_Date"),
	PRIORITY : new ZCRM.Record.Model.Field("Priority"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	CLOSED_TIME : new ZCRM.Record.Model.Field("Closed_Time"),
	SUBJECT : new ZCRM.Record.Model.Field("Subject"),
	SEND_NOTIFICATION_EMAIL : new ZCRM.Record.Model.Field("Send_Notification_Email"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	RECURRING_ACTIVITY : new ZCRM.Record.Model.Field("Recurring_Activity"),
	WHAT_ID : new ZCRM.Record.Model.Field("What_Id"),
	ID : new ZCRM.Record.Model.Field("id"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	REMIND_AT : new ZCRM.Record.Model.Field("Remind_At"),
	WHO_ID : new ZCRM.Record.Model.Field("Who_Id"),
}
ZCRM.Record.Model.Consent = class extends ZCRM.Record.Model.Record{
	constructor(){
		super();

	}



	/**
	 * The method to get the owner
	 * @returns {User} An instance of User
	 */
	getOwner(){
		return this.getKeyValue("Owner");

	}

	/**
	 * The method to set the value to owner
	 * @param {User} owner An instance of User
	 */
	setOwner(owner){
		if((owner != null) && (!(owner instanceof ZCRM.User.Model.User))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: User", null, null);
		}
		this.addKeyValue("Owner", owner);

	}

	/**
	 * The method to get the contactThroughEmail
	 * @returns {Boolean} A Boolean representing the contactThroughEmail
	 */
	getContactThroughEmail(){
		return this.getKeyValue("Contact_Through_Email");

	}

	/**
	 * The method to set the value to contactThroughEmail
	 * @param {Boolean} contactThroughEmail A Boolean
	 */
	setContactThroughEmail(contactThroughEmail){
		if((contactThroughEmail != null) && (!(Object.prototype.toString.call(contactThroughEmail) == "[object Boolean]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughEmail EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Email", contactThroughEmail);

	}

	/**
	 * The method to get the contactThroughSocial
	 * @returns {Boolean} A Boolean representing the contactThroughSocial
	 */
	getContactThroughSocial(){
		return this.getKeyValue("Contact_Through_Social");

	}

	/**
	 * The method to set the value to contactThroughSocial
	 * @param {Boolean} contactThroughSocial A Boolean
	 */
	setContactThroughSocial(contactThroughSocial){
		if((contactThroughSocial != null) && (!(Object.prototype.toString.call(contactThroughSocial) == "[object Boolean]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughSocial EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Social", contactThroughSocial);

	}

	/**
	 * The method to get the contactThroughSurvey
	 * @returns {Boolean} A Boolean representing the contactThroughSurvey
	 */
	getContactThroughSurvey(){
		return this.getKeyValue("Contact_Through_Survey");

	}

	/**
	 * The method to set the value to contactThroughSurvey
	 * @param {Boolean} contactThroughSurvey A Boolean
	 */
	setContactThroughSurvey(contactThroughSurvey){
		if((contactThroughSurvey != null) && (!(Object.prototype.toString.call(contactThroughSurvey) == "[object Boolean]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughSurvey EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Survey", contactThroughSurvey);

	}

	/**
	 * The method to get the contactThroughPhone
	 * @returns {Boolean} A Boolean representing the contactThroughPhone
	 */
	getContactThroughPhone(){
		return this.getKeyValue("Contact_Through_Phone");

	}

	/**
	 * The method to set the value to contactThroughPhone
	 * @param {Boolean} contactThroughPhone A Boolean
	 */
	setContactThroughPhone(contactThroughPhone){
		if((contactThroughPhone != null) && (!(Object.prototype.toString.call(contactThroughPhone) == "[object Boolean]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughPhone EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Phone", contactThroughPhone);

	}

	/**
	 * The method to get the mailSentTime
	 * @returns {OffsetDateTime} An instance of OffsetDateTime
	 */
	getMailSentTime(){
		return this.getKeyValue("Mail_Sent_Time");

	}

	/**
	 * The method to set the value to mailSentTime
	 * @param {OffsetDateTime} mailSentTime An instance of OffsetDateTime
	 */
	setMailSentTime(mailSentTime){
		if((mailSentTime != null) && (!(mailSentTime instanceof Date))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailSentTime EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Mail_Sent_Time", mailSentTime);

	}

	/**
	 * The method to get the consentDate
	 * @returns {LocalDate} An instance of LocalDate
	 */
	getConsentDate(){
		return this.getKeyValue("Consent_Date");

	}

	/**
	 * The method to set the value to consentDate
	 * @param {LocalDate} consentDate An instance of LocalDate
	 */
	setConsentDate(consentDate){
		if((consentDate != null) && (!(consentDate instanceof Date))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentDate EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Consent_Date", consentDate);

	}

	/**
	 * The method to get the consentRemarks
	 * @returns {String} A String representing the consentRemarks
	 */
	getConsentRemarks(){
		return this.getKeyValue("Consent_Remarks");

	}

	/**
	 * The method to set the value to consentRemarks
	 * @param {String} consentRemarks A String
	 */
	setConsentRemarks(consentRemarks){
		if((consentRemarks != null) && (!(Object.prototype.toString.call(consentRemarks) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentRemarks EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Consent_Remarks", consentRemarks);

	}

	/**
	 * The method to get the consentThrough
	 * @returns {String} A String representing the consentThrough
	 */
	getConsentThrough(){
		return this.getKeyValue("Consent_Through");

	}

	/**
	 * The method to set the value to consentThrough
	 * @param {String} consentThrough A String
	 */
	setConsentThrough(consentThrough){
		if((consentThrough != null) && (!(Object.prototype.toString.call(consentThrough) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentThrough EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Consent_Through", consentThrough);

	}

	/**
	 * The method to get the dataProcessingBasis
	 * @returns {String} A String representing the dataProcessingBasis
	 */
	getDataProcessingBasis(){
		return this.getKeyValue("Data_Processing_Basis");

	}

	/**
	 * The method to set the value to dataProcessingBasis
	 * @param {String} dataProcessingBasis A String
	 */
	setDataProcessingBasis(dataProcessingBasis){
		if((dataProcessingBasis != null) && (!(Object.prototype.toString.call(dataProcessingBasis) == "[object String]"))){
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataProcessingBasis EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Data_Processing_Basis", dataProcessingBasis);

	}
}

ZCRM.Record.Model.Field.Calls = {
	CALL_DURATION : new ZCRM.Record.Model.Field("Call_Duration"),
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	REMINDER : new ZCRM.Record.Model.Field("Reminder"),
	CALLER_ID : new ZCRM.Record.Model.Field("Caller_ID"),
	CTI_ENTRY : new ZCRM.Record.Model.Field("CTI_Entry"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	CALL_START_TIME : new ZCRM.Record.Model.Field("Call_Start_Time"),
	SUBJECT : new ZCRM.Record.Model.Field("Subject"),
	CALL_AGENDA : new ZCRM.Record.Model.Field("Call_Agenda"),
	CALL_RESULT : new ZCRM.Record.Model.Field("Call_Result"),
	CALL_TYPE : new ZCRM.Record.Model.Field("Call_Type"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	WHAT_ID : new ZCRM.Record.Model.Field("What_Id"),
	CALL_DURATION_IN_SECONDS : new ZCRM.Record.Model.Field("Call_Duration_in_seconds"),
	CALL_PURPOSE : new ZCRM.Record.Model.Field("Call_Purpose"),
	ID : new ZCRM.Record.Model.Field("id"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	DIALLED_NUMBER : new ZCRM.Record.Model.Field("Dialled_Number"),
	CALL_STATUS : new ZCRM.Record.Model.Field("Call_Status"),
	WHO_ID : new ZCRM.Record.Model.Field("Who_Id"),
}
ZCRM.Record.Model.Field.Attachments = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	FILE_NAME : new ZCRM.Record.Model.Field("File_Name"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	SIZE : new ZCRM.Record.Model.Field("Size"),
	PARENT_ID : new ZCRM.Record.Model.Field("Parent_Id"),
	ID : new ZCRM.Record.Model.Field("id"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
}
ZCRM.Record.Model.Field.Purchase_Orders = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	DISCOUNT : new ZCRM.Record.Model.Field("Discount"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	VENDOR_NAME : new ZCRM.Record.Model.Field("Vendor_Name"),
	SHIPPING_STATE : new ZCRM.Record.Model.Field("Shipping_State"),
	TAX : new ZCRM.Record.Model.Field("Tax"),
	PO_DATE : new ZCRM.Record.Model.Field("PO_Date"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	BILLING_COUNTRY : new ZCRM.Record.Model.Field("Billing_Country"),
	ID : new ZCRM.Record.Model.Field("id"),
	CARRIER : new ZCRM.Record.Model.Field("Carrier"),
	STATUS : new ZCRM.Record.Model.Field("Status"),
	GRAND_TOTAL : new ZCRM.Record.Model.Field("Grand_Total"),
	SALES_COMMISSION : new ZCRM.Record.Model.Field("Sales_Commission"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	PO_NUMBER : new ZCRM.Record.Model.Field("PO_Number"),
	DUE_DATE : new ZCRM.Record.Model.Field("Due_Date"),
	BILLING_STREET : new ZCRM.Record.Model.Field("Billing_Street"),
	ADJUSTMENT : new ZCRM.Record.Model.Field("Adjustment"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	TERMS_AND_CONDITIONS : new ZCRM.Record.Model.Field("Terms_and_Conditions"),
	SUB_TOTAL : new ZCRM.Record.Model.Field("Sub_Total"),
	BILLING_CODE : new ZCRM.Record.Model.Field("Billing_Code"),
	PRODUCT_DETAILS : new ZCRM.Record.Model.Field("Product_Details"),
	SUBJECT : new ZCRM.Record.Model.Field("Subject"),
	TRACKING_NUMBER : new ZCRM.Record.Model.Field("Tracking_Number"),
	CONTACT_NAME : new ZCRM.Record.Model.Field("Contact_Name"),
	EXCISE_DUTY : new ZCRM.Record.Model.Field("Excise_Duty"),
	SHIPPING_CITY : new ZCRM.Record.Model.Field("Shipping_City"),
	SHIPPING_COUNTRY : new ZCRM.Record.Model.Field("Shipping_Country"),
	SHIPPING_CODE : new ZCRM.Record.Model.Field("Shipping_Code"),
	BILLING_CITY : new ZCRM.Record.Model.Field("Billing_City"),
	REQUISITION_NO : new ZCRM.Record.Model.Field("Requisition_No"),
	BILLING_STATE : new ZCRM.Record.Model.Field("Billing_State"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	SHIPPING_STREET : new ZCRM.Record.Model.Field("Shipping_Street"),
}
ZCRM.Record.Model.Field.Vendors = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	EMAIL : new ZCRM.Record.Model.Field("Email"),
	CATEGORY : new ZCRM.Record.Model.Field("Category"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	VENDOR_NAME : new ZCRM.Record.Model.Field("Vendor_Name"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	WEBSITE : new ZCRM.Record.Model.Field("Website"),
	CITY : new ZCRM.Record.Model.Field("City"),
	RECORD_IMAGE : new ZCRM.Record.Model.Field("Record_Image"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	PHONE : new ZCRM.Record.Model.Field("Phone"),
	STATE : new ZCRM.Record.Model.Field("State"),
	GL_ACCOUNT : new ZCRM.Record.Model.Field("GL_Account"),
	STREET : new ZCRM.Record.Model.Field("Street"),
	COUNTRY : new ZCRM.Record.Model.Field("Country"),
	ZIP_CODE : new ZCRM.Record.Model.Field("Zip_Code"),
	ID : new ZCRM.Record.Model.Field("id"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
}
ZCRM.Record.Model.Field.Campaigns = {
	STATUS : new ZCRM.Record.Model.Field("Status"),
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	CAMPAIGN_NAME : new ZCRM.Record.Model.Field("Campaign_Name"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	END_DATE : new ZCRM.Record.Model.Field("End_Date"),
	TYPE : new ZCRM.Record.Model.Field("Type"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	NUM_SENT : new ZCRM.Record.Model.Field("Num_sent"),
	EXPECTED_REVENUE : new ZCRM.Record.Model.Field("Expected_Revenue"),
	ACTUAL_COST : new ZCRM.Record.Model.Field("Actual_Cost"),
	ID : new ZCRM.Record.Model.Field("id"),
	EXPECTED_RESPONSE : new ZCRM.Record.Model.Field("Expected_Response"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	PARENT_CAMPAIGN : new ZCRM.Record.Model.Field("Parent_Campaign"),
	START_DATE : new ZCRM.Record.Model.Field("Start_Date"),
	BUDGETED_COST : new ZCRM.Record.Model.Field("Budgeted_Cost"),
}
ZCRM.Record.Model.Field.Solutions = {
	STATUS : new ZCRM.Record.Model.Field("Status"),
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	COMMENTS : new ZCRM.Record.Model.Field("Comments"),
	NO_OF_COMMENTS : new ZCRM.Record.Model.Field("No_of_comments"),
	PRODUCT_NAME : new ZCRM.Record.Model.Field("Product_Name"),
	ADD_COMMENT : new ZCRM.Record.Model.Field("Add_Comment"),
	SOLUTION_NUMBER : new ZCRM.Record.Model.Field("Solution_Number"),
	ANSWER : new ZCRM.Record.Model.Field("Answer"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	SOLUTION_TITLE : new ZCRM.Record.Model.Field("Solution_Title"),
	PUBLISHED : new ZCRM.Record.Model.Field("Published"),
	QUESTION : new ZCRM.Record.Model.Field("Question"),
	ID : new ZCRM.Record.Model.Field("id"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
}
ZCRM.Record.Model.Field.Leads = {
	OWNER : new ZCRM.Record.Model.Field("Owner"),
	COMPANY : new ZCRM.Record.Model.Field("Company"),
	EMAIL : new ZCRM.Record.Model.Field("Email"),
	DESCRIPTION : new ZCRM.Record.Model.Field("Description"),
	RATING : new ZCRM.Record.Model.Field("Rating"),
	WEBSITE : new ZCRM.Record.Model.Field("Website"),
	TWITTER : new ZCRM.Record.Model.Field("Twitter"),
	SALUTATION : new ZCRM.Record.Model.Field("Salutation"),
	LAST_ACTIVITY_TIME : new ZCRM.Record.Model.Field("Last_Activity_Time"),
	FIRST_NAME : new ZCRM.Record.Model.Field("First_Name"),
	FULL_NAME : new ZCRM.Record.Model.Field("Full_Name"),
	LEAD_STATUS : new ZCRM.Record.Model.Field("Lead_Status"),
	INDUSTRY : new ZCRM.Record.Model.Field("Industry"),
	RECORD_IMAGE : new ZCRM.Record.Model.Field("Record_Image"),
	MODIFIED_BY : new ZCRM.Record.Model.Field("Modified_By"),
	SKYPE_ID : new ZCRM.Record.Model.Field("Skype_ID"),
	PHONE : new ZCRM.Record.Model.Field("Phone"),
	STREET : new ZCRM.Record.Model.Field("Street"),
	ZIP_CODE : new ZCRM.Record.Model.Field("Zip_Code"),
	ID : new ZCRM.Record.Model.Field("id"),
	EMAIL_OPT_OUT : new ZCRM.Record.Model.Field("Email_Opt_Out"),
	DESIGNATION : new ZCRM.Record.Model.Field("Designation"),
	MODIFIED_TIME : new ZCRM.Record.Model.Field("Modified_Time"),
	CREATED_TIME : new ZCRM.Record.Model.Field("Created_Time"),
	CITY : new ZCRM.Record.Model.Field("City"),
	NO_OF_EMPLOYEES : new ZCRM.Record.Model.Field("No_of_Employees"),
	MOBILE : new ZCRM.Record.Model.Field("Mobile"),
	CONVERTED_DATE_TIME : new ZCRM.Record.Model.Field("Converted_Date_Time"),
	LAST_NAME : new ZCRM.Record.Model.Field("Last_Name"),
	LAYOUT : new ZCRM.Record.Model.Field("Layout"),
	STATE : new ZCRM.Record.Model.Field("State"),
	LEAD_SOURCE : new ZCRM.Record.Model.Field("Lead_Source"),
	IS_RECORD_DUPLICATE : new ZCRM.Record.Model.Field("Is_Record_Duplicate"),
	TAG : new ZCRM.Record.Model.Field("Tag"),
	CREATED_BY : new ZCRM.Record.Model.Field("Created_By"),
	FAX : new ZCRM.Record.Model.Field("Fax"),
	ANNUAL_REVENUE : new ZCRM.Record.Model.Field("Annual_Revenue"),
	SECONDARY_EMAIL : new ZCRM.Record.Model.Field("Secondary_Email"),
}