ZCRM.Notification = {
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

		BodyWrapper : class{
			constructor(){

				this.watch=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the watch
			 * @returns {List} An Array representing the watch
			 */
			getWatch()	{
				return this.watch;

			}

			/**
			 * The method to set the value to watch
			 * @param {List} watch An Array
			 */
			setWatch(watch)	{
				if((watch != null) && (!(Object.prototype.toString.call(watch) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: watch EXPECTED TYPE: Array", null, null);
				}
				this.watch = watch;
				this.keyModified.set("watch", 1);

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

		ActionWrapper : class{
			constructor(){

				this.watch=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the watch
			 * @returns {List} An Array representing the watch
			 */
			getWatch()	{
				return this.watch;

			}

			/**
			 * The method to set the value to watch
			 * @param {List} watch An Array
			 */
			setWatch(watch)	{
				if((watch != null) && (!(Object.prototype.toString.call(watch) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: watch EXPECTED TYPE: Array", null, null);
				}
				this.watch = watch;
				this.keyModified.set("watch", 1);

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

				this.watch=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the watch
			 * @returns {List} An Array representing the watch
			 */
			getWatch()	{
				return this.watch;

			}

			/**
			 * The method to set the value to watch
			 * @param {List} watch An Array
			 */
			setWatch(watch)	{
				if((watch != null) && (!(Object.prototype.toString.call(watch) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: watch EXPECTED TYPE: Array", null, null);
				}
				this.watch = watch;
				this.keyModified.set("watch", 1);

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
				if((info != null) && (!(info instanceof ZCRM.Notification.Model.Info))){
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

		Notification : class{
			constructor(){

				this.channelExpiry=null;
				this.resourceUri=null;
				this.resourceId=null;
				this.notifyUrl=null;
				this.resourceName=null;
				this.channelId=null;
				this.events=null;
				this.token=null;
				this.notifyOnRelatedAction=null;
				this.fields=null;
				this.deleteevents=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the channelExpiry
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getChannelExpiry()	{
				return this.channelExpiry;

			}

			/**
			 * The method to set the value to channelExpiry
			 * @param {OffsetDateTime} channelExpiry An instance of OffsetDateTime
			 */
			setChannelExpiry(channelExpiry)	{
				if((channelExpiry != null) && (!(channelExpiry instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: channelExpiry EXPECTED TYPE: Date", null, null);
				}
				this.channelExpiry = channelExpiry;
				this.keyModified.set("channel_expiry", 1);

			}

			/**
			 * The method to get the resourceUri
			 * @returns {String} A String representing the resourceUri
			 */
			getResourceUri()	{
				return this.resourceUri;

			}

			/**
			 * The method to set the value to resourceUri
			 * @param {String} resourceUri A String
			 */
			setResourceUri(resourceUri)	{
				if((resourceUri != null) && (!(Object.prototype.toString.call(resourceUri) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resourceUri EXPECTED TYPE: String", null, null);
				}
				this.resourceUri = resourceUri;
				this.keyModified.set("resource_uri", 1);

			}

			/**
			 * The method to get the resourceId
			 * @returns {String} A String representing the resourceId
			 */
			getResourceId()	{
				return this.resourceId;

			}

			/**
			 * The method to set the value to resourceId
			 * @param {String} resourceId A String
			 */
			setResourceId(resourceId)	{
				if((resourceId != null) && (!(Object.prototype.toString.call(resourceId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resourceId EXPECTED TYPE: String", null, null);
				}
				this.resourceId = resourceId;
				this.keyModified.set("resource_id", 1);

			}

			/**
			 * The method to get the notifyUrl
			 * @returns {String} A String representing the notifyUrl
			 */
			getNotifyUrl()	{
				return this.notifyUrl;

			}

			/**
			 * The method to set the value to notifyUrl
			 * @param {String} notifyUrl A String
			 */
			setNotifyUrl(notifyUrl)	{
				if((notifyUrl != null) && (!(Object.prototype.toString.call(notifyUrl) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyUrl EXPECTED TYPE: String", null, null);
				}
				this.notifyUrl = notifyUrl;
				this.keyModified.set("notify_url", 1);

			}

			/**
			 * The method to get the resourceName
			 * @returns {String} A String representing the resourceName
			 */
			getResourceName()	{
				return this.resourceName;

			}

			/**
			 * The method to set the value to resourceName
			 * @param {String} resourceName A String
			 */
			setResourceName(resourceName)	{
				if((resourceName != null) && (!(Object.prototype.toString.call(resourceName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: resourceName EXPECTED TYPE: String", null, null);
				}
				this.resourceName = resourceName;
				this.keyModified.set("resource_name", 1);

			}

			/**
			 * The method to get the channelId
			 * @returns {Long} A BigInt representing the channelId
			 */
			getChannelId()	{
				return this.channelId;

			}

			/**
			 * The method to set the value to channelId
			 * @param {Long} channelId A BigInt
			 */
			setChannelId(channelId)	{
				if((channelId != null) && (!(Object.prototype.toString.call(channelId) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: channelId EXPECTED TYPE: BigInt", null, null);
				}
				this.channelId = channelId;
				this.keyModified.set("channel_id", 1);

			}

			/**
			 * The method to get the events
			 * @returns {List} An Array representing the events
			 */
			getEvents()	{
				return this.events;

			}

			/**
			 * The method to set the value to events
			 * @param {List} events An Array
			 */
			setEvents(events)	{
				if((events != null) && (!(Object.prototype.toString.call(events) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: events EXPECTED TYPE: Array", null, null);
				}
				this.events = events;
				this.keyModified.set("events", 1);

			}

			/**
			 * The method to get the token
			 * @returns {String} A String representing the token
			 */
			getToken()	{
				return this.token;

			}

			/**
			 * The method to set the value to token
			 * @param {String} token A String
			 */
			setToken(token)	{
				if((token != null) && (!(Object.prototype.toString.call(token) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: token EXPECTED TYPE: String", null, null);
				}
				this.token = token;
				this.keyModified.set("token", 1);

			}

			/**
			 * The method to get the notifyOnRelatedAction
			 * @returns {Boolean} A Boolean representing the notifyOnRelatedAction
			 */
			getNotifyOnRelatedAction()	{
				return this.notifyOnRelatedAction;

			}

			/**
			 * The method to set the value to notifyOnRelatedAction
			 * @param {Boolean} notifyOnRelatedAction A Boolean
			 */
			setNotifyOnRelatedAction(notifyOnRelatedAction)	{
				if((notifyOnRelatedAction != null) && (!(Object.prototype.toString.call(notifyOnRelatedAction) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyOnRelatedAction EXPECTED TYPE: Boolean", null, null);
				}
				this.notifyOnRelatedAction = notifyOnRelatedAction;
				this.keyModified.set("notify_on_related_action", 1);

			}

			/**
			 * The method to get the fields
			 * @returns {Map} A Map representing the fields
			 */
			getFields()	{
				return this.fields;

			}

			/**
			 * The method to set the value to fields
			 * @param {Map} fields A Map
			 */
			setFields(fields)	{
				if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Map", null, null);
				}
				this.fields = fields;
				this.keyModified.set("fields", 1);

			}

			/**
			 * The method to get the deleteevents
			 * @returns {Boolean} A Boolean representing the deleteevents
			 */
			getDeleteevents()	{
				return this.deleteevents;

			}

			/**
			 * The method to set the value to deleteevents
			 * @param {Boolean} deleteevents A Boolean
			 */
			setDeleteevents(deleteevents)	{
				if((deleteevents != null) && (!(Object.prototype.toString.call(deleteevents) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deleteevents EXPECTED TYPE: Boolean", null, null);
				}
				this.deleteevents = deleteevents;
				this.keyModified.set("_delete_events", 1);

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

		GetNotificationDetailsParam : {
			PAGE : 	new Param("page", "Notification.Model.GetNotificationDetailsParam"),

			PER_PAGE : 	new Param("per_page", "Notification.Model.GetNotificationDetailsParam"),

			CHANNEL_ID : 	new Param("channel_id", "Notification.Model.GetNotificationDetailsParam"),

			MODULE : 	new Param("module", "Notification.Model.GetNotificationDetailsParam"),


		},

		DisableNotificationsParam : {
			CHANNEL_IDS : 	new Param("channel_ids", "Notification.Model.DisableNotificationsParam"),


		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to enable notifications
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async enableNotifications(request){
			if((request != null) && (!(request instanceof ZCRM.Notification.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/actions/watch");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Notification.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get notification details
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getNotificationDetails(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/actions/watch");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Notification.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update notifications
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateNotifications(request){
			if((request != null) && (!(request instanceof ZCRM.Notification.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/actions/watch");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Notification.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update notification
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateNotification(request){
			if((request != null) && (!(request instanceof ZCRM.Notification.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/actions/watch");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PATCH);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Notification.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to disable notifications
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async disableNotifications(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/actions/watch");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Notification.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to disable notification
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async disableNotification(request){
			if((request != null) && (!(request instanceof ZCRM.Notification.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/actions/watch");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PATCH);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Notification.Model.ActionHandler", "application/json");

		}
	},

}