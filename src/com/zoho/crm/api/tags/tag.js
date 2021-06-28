ZCRM.Tag = {
	Model : {
		ActionHandler : class{
			constructor(){

			}


		},

		RecordActionResponse : class{
			constructor(){

			}


		},

		CountHandler : class{
			constructor(){

			}


		},

		RecordActionHandler : class{
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

		MergeWrapper : class{
			constructor(){

				this.tags=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the tags
			 * @returns {List} An Array representing the tags
			 */
			getTags()	{
				return this.tags;

			}

			/**
			 * The method to set the value to tags
			 * @param {List} tags An Array
			 */
			setTags(tags)	{
				if((tags != null) && (!(Object.prototype.toString.call(tags) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tags EXPECTED TYPE: Array", null, null);
				}
				this.tags = tags;
				this.keyModified.set("tags", 1);

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

				this.tags=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the tags
			 * @returns {List} An Array representing the tags
			 */
			getTags()	{
				return this.tags;

			}

			/**
			 * The method to set the value to tags
			 * @param {List} tags An Array
			 */
			setTags(tags)	{
				if((tags != null) && (!(Object.prototype.toString.call(tags) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tags EXPECTED TYPE: Array", null, null);
				}
				this.tags = tags;
				this.keyModified.set("tags", 1);

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

				this.tags=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the tags
			 * @returns {List} An Array representing the tags
			 */
			getTags()	{
				return this.tags;

			}

			/**
			 * The method to set the value to tags
			 * @param {List} tags An Array
			 */
			setTags(tags)	{
				if((tags != null) && (!(Object.prototype.toString.call(tags) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tags EXPECTED TYPE: Array", null, null);
				}
				this.tags = tags;
				this.keyModified.set("tags", 1);

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

				this.tags=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the tags
			 * @returns {List} An Array representing the tags
			 */
			getTags()	{
				return this.tags;

			}

			/**
			 * The method to set the value to tags
			 * @param {List} tags An Array
			 */
			setTags(tags)	{
				if((tags != null) && (!(Object.prototype.toString.call(tags) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tags EXPECTED TYPE: Array", null, null);
				}
				this.tags = tags;
				this.keyModified.set("tags", 1);

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
				if((info != null) && (!(info instanceof ZCRM.Tag.Model.Info))){
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

		Tag : class{
			constructor(){

				this.createdTime=null;
				this.modifiedTime=null;
				this.name=null;
				this.modifiedBy=null;
				this.id=null;
				this.createdBy=null;
				this.keyModified=new Map();
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

				this.count=null;
				this.allowedCount=null;
				this.keyModified=new Map();
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
			 * The method to get the allowedCount
			 * @returns {Integer} An Integer representing the allowedCount
			 */
			getAllowedCount()	{
				return this.allowedCount;

			}

			/**
			 * The method to set the value to allowedCount
			 * @param {Integer} allowedCount An Integer
			 */
			setAllowedCount(allowedCount)	{
				if((allowedCount != null) && (!(Object.prototype.toString.call(allowedCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: allowedCount EXPECTED TYPE: Integer", null, null);
				}
				this.allowedCount = allowedCount;
				this.keyModified.set("allowed_count", 1);

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
				this.status=null;
				this.message=null;
				this.details=null;
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

		RecordActionWrapper : class{
			constructor(){

				this.data=null;
				this.wfScheduler=null;
				this.successCount=null;
				this.lockedCount=null;
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
			 * The method to get the wfScheduler
			 * @returns {Boolean} A Boolean representing the wfScheduler
			 */
			getWfScheduler()	{
				return this.wfScheduler;

			}

			/**
			 * The method to set the value to wfScheduler
			 * @param {Boolean} wfScheduler A Boolean
			 */
			setWfScheduler(wfScheduler)	{
				if((wfScheduler != null) && (!(Object.prototype.toString.call(wfScheduler) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: wfScheduler EXPECTED TYPE: Boolean", null, null);
				}
				this.wfScheduler = wfScheduler;
				this.keyModified.set("wf_scheduler", 1);

			}

			/**
			 * The method to get the successCount
			 * @returns {String} A String representing the successCount
			 */
			getSuccessCount()	{
				return this.successCount;

			}

			/**
			 * The method to set the value to successCount
			 * @param {String} successCount A String
			 */
			setSuccessCount(successCount)	{
				if((successCount != null) && (!(Object.prototype.toString.call(successCount) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: successCount EXPECTED TYPE: String", null, null);
				}
				this.successCount = successCount;
				this.keyModified.set("success_count", 1);

			}

			/**
			 * The method to get the lockedCount
			 * @returns {Integer} An Integer representing the lockedCount
			 */
			getLockedCount()	{
				return this.lockedCount;

			}

			/**
			 * The method to set the value to lockedCount
			 * @param {Integer} lockedCount An Integer
			 */
			setLockedCount(lockedCount)	{
				if((lockedCount != null) && (!(Object.prototype.toString.call(lockedCount) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lockedCount EXPECTED TYPE: Integer", null, null);
				}
				this.lockedCount = lockedCount;
				this.keyModified.set("locked_count", 1);

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

		CountWrapper : class{
			constructor(){

				this.count=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the count
			 * @returns {String} A String representing the count
			 */
			getCount()	{
				return this.count;

			}

			/**
			 * The method to set the value to count
			 * @param {String} count A String
			 */
			setCount(count)	{
				if((count != null) && (!(Object.prototype.toString.call(count) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: count EXPECTED TYPE: String", null, null);
				}
				this.count = count;
				this.keyModified.set("count", 1);

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

		ConflictWrapper : class{
			constructor(){

				this.conflictId=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the conflictId
			 * @returns {String} A String representing the conflictId
			 */
			getConflictId()	{
				return this.conflictId;

			}

			/**
			 * The method to set the value to conflictId
			 * @param {String} conflictId A String
			 */
			setConflictId(conflictId)	{
				if((conflictId != null) && (!(Object.prototype.toString.call(conflictId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: conflictId EXPECTED TYPE: String", null, null);
				}
				this.conflictId = conflictId;
				this.keyModified.set("conflict_id", 1);

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

		RemoveTagsFromMultipleRecordsParam : {
			TAG_NAMES : 	new Param("tag_names", "Tag.Model.RemoveTagsFromMultipleRecordsParam"),

			IDS : 	new Param("ids", "Tag.Model.RemoveTagsFromMultipleRecordsParam"),


		},

		AddTagsToRecordParam : {
			TAG_NAMES : 	new Param("tag_names", "Tag.Model.AddTagsToRecordParam"),

			OVER_WRITE : 	new Param("over_write", "Tag.Model.AddTagsToRecordParam"),


		},

		AddTagsToMultipleRecordsParam : {
			TAG_NAMES : 	new Param("tag_names", "Tag.Model.AddTagsToMultipleRecordsParam"),

			IDS : 	new Param("ids", "Tag.Model.AddTagsToMultipleRecordsParam"),

			OVER_WRITE : 	new Param("over_write", "Tag.Model.AddTagsToMultipleRecordsParam"),


		},

		RemoveTagsFromRecordParam : {
			TAG_NAMES : 	new Param("tag_names", "Tag.Model.RemoveTagsFromRecordParam"),


		},

		GetRecordCountForTagParam : {
			MODULE : 	new Param("module", "Tag.Model.GetRecordCountForTagParam"),


		},

		UpdateTagsParam : {
			MODULE : 	new Param("module", "Tag.Model.UpdateTagsParam"),


		},

		UpdateTagParam : {
			MODULE : 	new Param("module", "Tag.Model.UpdateTagParam"),


		},

		GetTagsParam : {
			MODULE : 	new Param("module", "Tag.Model.GetTagsParam"),

			MY_TAGS : 	new Param("my_tags", "Tag.Model.GetTagsParam"),


		},

		CreateTagsParam : {
			MODULE : 	new Param("module", "Tag.Model.CreateTagsParam"),


		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get tags
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getTags(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/tags");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Tag.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to create tags
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createTags(request, paramInstance=null){
			if((request != null) && (!(request instanceof ZCRM.Tag.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/tags");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Tag.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update tags
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateTags(request, paramInstance=null){
			if((request != null) && (!(request instanceof ZCRM.Tag.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/tags");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Tag.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update tag
		 * @param {Long} id A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateTag(id, request, paramInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Tag.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/tags/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Tag.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete tag
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteTag(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/tags/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			return handlerInstance.apiCall("Tag.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to merge tags
		 * @param {Long} id A BigInt
		 * @param {MergeWrapper} request An instance of MergeWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async mergeTags(id, request){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Tag.Model.MergeWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: MergeWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/tags/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/actions/merge");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Tag.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to add tags to record
		 * @param {Long} recordId A BigInt
		 * @param {String} moduleAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async addTagsToRecord(recordId, moduleAPIName, paramInstance=null){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
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
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(recordId.toString());
			apiPath = apiPath.concat("/actions/add_tags");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Tag.Model.RecordActionHandler", "application/json");

		}

		/**
		 * The method to remove tags from record
		 * @param {Long} recordId A BigInt
		 * @param {String} moduleAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async removeTagsFromRecord(recordId, moduleAPIName, paramInstance=null){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
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
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(recordId.toString());
			apiPath = apiPath.concat("/actions/remove_tags");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Tag.Model.RecordActionHandler", "application/json");

		}

		/**
		 * The method to add tags to multiple records
		 * @param {String} moduleAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async addTagsToMultipleRecords(moduleAPIName, paramInstance=null){
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
			apiPath = apiPath.concat("/actions/add_tags");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Tag.Model.RecordActionHandler", "application/json");

		}

		/**
		 * The method to remove tags from multiple records
		 * @param {String} moduleAPIName A String
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async removeTagsFromMultipleRecords(moduleAPIName, paramInstance=null){
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
			apiPath = apiPath.concat("/actions/remove_tags");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setMandatoryChecker(true);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Tag.Model.RecordActionHandler", "application/json");

		}

		/**
		 * The method to get record count for tag
		 * @param {Long} id A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getRecordCountForTag(id, paramInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/tags/");
			apiPath = apiPath.concat(id.toString());
			apiPath = apiPath.concat("/actions/records_count");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Tag.Model.CountHandler", "application/json");

		}
	},

}