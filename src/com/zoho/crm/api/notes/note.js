ZCRM.Note = {
	Model : {
		ActionHandler : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

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
				if((info != null) && (!(info instanceof ZCRM.Note.Model.Info))){
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

		Note : class{
			constructor(){

				this.owner=null;
				this.modifiedTime=null;
				this.attachments=null;
				this.createdTime=null;
				this.parentId=null;
				this.editable=null;
				this.seModule=null;
				this.isSharedToClient=null;
				this.modifiedBy=null;
				this.size=null;
				this.state=null;
				this.voiceNote=null;
				this.id=null;
				this.createdBy=null;
				this.noteTitle=null;
				this.noteContent=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the owner
			 * @returns {User} An instance of User
			 */
			getOwner()	{
				return this.owner;

			}

			/**
			 * The method to set the value to owner
			 * @param {User} owner An instance of User
			 */
			setOwner(owner)	{
				if((owner != null) && (!(owner instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: User", null, null);
				}
				this.owner = owner;
				this.keyModified.set("Owner", 1);

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
				this.keyModified.set("Modified_Time", 1);

			}

			/**
			 * The method to get the attachments
			 * @returns {List} An Array representing the attachments
			 */
			getAttachments()	{
				return this.attachments;

			}

			/**
			 * The method to set the value to attachments
			 * @param {List} attachments An Array
			 */
			setAttachments(attachments)	{
				if((attachments != null) && (!(Object.prototype.toString.call(attachments) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachments EXPECTED TYPE: Array", null, null);
				}
				this.attachments = attachments;
				this.keyModified.set("$attachments", 1);

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
				this.keyModified.set("Created_Time", 1);

			}

			/**
			 * The method to get the parentId
			 * @returns {Record} An instance of Record
			 */
			getParentId()	{
				return this.parentId;

			}

			/**
			 * The method to set the value to parentId
			 * @param {Record} parentId An instance of Record
			 */
			setParentId(parentId)	{
				if((parentId != null) && (!(parentId instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentId EXPECTED TYPE: Record", null, null);
				}
				this.parentId = parentId;
				this.keyModified.set("Parent_Id", 1);

			}

			/**
			 * The method to get the editable
			 * @returns {Boolean} A Boolean representing the editable
			 */
			getEditable()	{
				return this.editable;

			}

			/**
			 * The method to set the value to editable
			 * @param {Boolean} editable A Boolean
			 */
			setEditable(editable)	{
				if((editable != null) && (!(Object.prototype.toString.call(editable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: editable EXPECTED TYPE: Boolean", null, null);
				}
				this.editable = editable;
				this.keyModified.set("$editable", 1);

			}

			/**
			 * The method to get the seModule
			 * @returns {String} A String representing the seModule
			 */
			getSeModule()	{
				return this.seModule;

			}

			/**
			 * The method to set the value to seModule
			 * @param {String} seModule A String
			 */
			setSeModule(seModule)	{
				if((seModule != null) && (!(Object.prototype.toString.call(seModule) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: seModule EXPECTED TYPE: String", null, null);
				}
				this.seModule = seModule;
				this.keyModified.set("$se_module", 1);

			}

			/**
			 * The method to get the isSharedToClient
			 * @returns {Boolean} A Boolean representing the isSharedToClient
			 */
			getIsSharedToClient()	{
				return this.isSharedToClient;

			}

			/**
			 * The method to set the value to isSharedToClient
			 * @param {Boolean} isSharedToClient A Boolean
			 */
			setIsSharedToClient(isSharedToClient)	{
				if((isSharedToClient != null) && (!(Object.prototype.toString.call(isSharedToClient) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isSharedToClient EXPECTED TYPE: Boolean", null, null);
				}
				this.isSharedToClient = isSharedToClient;
				this.keyModified.set("$is_shared_to_client", 1);

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
				this.keyModified.set("Modified_By", 1);

			}

			/**
			 * The method to get the size
			 * @returns {String} A String representing the size
			 */
			getSize()	{
				return this.size;

			}

			/**
			 * The method to set the value to size
			 * @param {String} size A String
			 */
			setSize(size)	{
				if((size != null) && (!(Object.prototype.toString.call(size) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: size EXPECTED TYPE: String", null, null);
				}
				this.size = size;
				this.keyModified.set("$size", 1);

			}

			/**
			 * The method to get the state
			 * @returns {String} A String representing the state
			 */
			getState()	{
				return this.state;

			}

			/**
			 * The method to set the value to state
			 * @param {String} state A String
			 */
			setState(state)	{
				if((state != null) && (!(Object.prototype.toString.call(state) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: String", null, null);
				}
				this.state = state;
				this.keyModified.set("$state", 1);

			}

			/**
			 * The method to get the voiceNote
			 * @returns {Boolean} A Boolean representing the voiceNote
			 */
			getVoiceNote()	{
				return this.voiceNote;

			}

			/**
			 * The method to set the value to voiceNote
			 * @param {Boolean} voiceNote A Boolean
			 */
			setVoiceNote(voiceNote)	{
				if((voiceNote != null) && (!(Object.prototype.toString.call(voiceNote) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: voiceNote EXPECTED TYPE: Boolean", null, null);
				}
				this.voiceNote = voiceNote;
				this.keyModified.set("$voice_note", 1);

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
				this.keyModified.set("Created_By", 1);

			}

			/**
			 * The method to get the noteTitle
			 * @returns {String} A String representing the noteTitle
			 */
			getNoteTitle()	{
				return this.noteTitle;

			}

			/**
			 * The method to set the value to noteTitle
			 * @param {String} noteTitle A String
			 */
			setNoteTitle(noteTitle)	{
				if((noteTitle != null) && (!(Object.prototype.toString.call(noteTitle) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: noteTitle EXPECTED TYPE: String", null, null);
				}
				this.noteTitle = noteTitle;
				this.keyModified.set("Note_Title", 1);

			}

			/**
			 * The method to get the noteContent
			 * @returns {String} A String representing the noteContent
			 */
			getNoteContent()	{
				return this.noteContent;

			}

			/**
			 * The method to set the value to noteContent
			 * @param {String} noteContent A String
			 */
			setNoteContent(noteContent)	{
				if((noteContent != null) && (!(Object.prototype.toString.call(noteContent) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: noteContent EXPECTED TYPE: String", null, null);
				}
				this.noteContent = noteContent;
				this.keyModified.set("Note_Content", 1);

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

		GetNotesHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "Note.Model.GetNotesHeader"),


		},

		GetNoteParam : {
			FIELDS : 	new Param("fields", "Note.Model.GetNoteParam"),


		},

		GetNoteHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "Note.Model.GetNoteHeader"),


		},

		GetNotesParam : {
			PAGE : 	new Param("page", "Note.Model.GetNotesParam"),

			PER_PAGE : 	new Param("per_page", "Note.Model.GetNotesParam"),

			FIELDS : 	new Param("fields", "Note.Model.GetNotesParam"),


		},

		DeleteNotesParam : {
			IDS : 	new Param("ids", "Note.Model.DeleteNotesParam"),


		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get notes
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getNotes(paramInstance=null, headerInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/Notes");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			return handlerInstance.apiCall("Note.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to create notes
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createNotes(request){
			if((request != null) && (!(request instanceof ZCRM.Note.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/Notes");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Note.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update notes
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateNotes(request){
			if((request != null) && (!(request instanceof ZCRM.Note.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/Notes");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Note.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete notes
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteNotes(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/Notes");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Note.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get note
		 * @param {Long} id A BigInt
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getNote(id, paramInstance=null, headerInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/Notes/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			return handlerInstance.apiCall("Note.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update note
		 * @param {Long} id A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateNote(id, request){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Note.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/Notes/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			return handlerInstance.apiCall("Note.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete note
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteNote(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/Notes/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			return handlerInstance.apiCall("Note.Model.ActionHandler", "application/json");

		}
	},

}