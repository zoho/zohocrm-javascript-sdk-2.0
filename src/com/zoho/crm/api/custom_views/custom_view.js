ZCRM.CustomView = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		SharedDetails : class{
			constructor(){

				this.id=null;
				this.name=null;
				this.type=null;
				this.subordinates=null;
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
			 * The method to get the subordinates
			 * @returns {Boolean} A Boolean representing the subordinates
			 */
			getSubordinates()	{
				return this.subordinates;

			}

			/**
			 * The method to set the value to subordinates
			 * @param {Boolean} subordinates A Boolean
			 */
			setSubordinates(subordinates)	{
				if((subordinates != null) && (!(Object.prototype.toString.call(subordinates) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subordinates EXPECTED TYPE: Boolean", null, null);
				}
				this.subordinates = subordinates;
				this.keyModified.set("subordinates", 1);

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

		Translation : class{
			constructor(){

				this.publicViews=null;
				this.otherUsersViews=null;
				this.sharedWithMe=null;
				this.createdByMe=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the publicViews
			 * @returns {String} A String representing the publicViews
			 */
			getPublicViews()	{
				return this.publicViews;

			}

			/**
			 * The method to set the value to publicViews
			 * @param {String} publicViews A String
			 */
			setPublicViews(publicViews)	{
				if((publicViews != null) && (!(Object.prototype.toString.call(publicViews) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: publicViews EXPECTED TYPE: String", null, null);
				}
				this.publicViews = publicViews;
				this.keyModified.set("public_views", 1);

			}

			/**
			 * The method to get the otherUsersViews
			 * @returns {String} A String representing the otherUsersViews
			 */
			getOtherUsersViews()	{
				return this.otherUsersViews;

			}

			/**
			 * The method to set the value to otherUsersViews
			 * @param {String} otherUsersViews A String
			 */
			setOtherUsersViews(otherUsersViews)	{
				if((otherUsersViews != null) && (!(Object.prototype.toString.call(otherUsersViews) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: otherUsersViews EXPECTED TYPE: String", null, null);
				}
				this.otherUsersViews = otherUsersViews;
				this.keyModified.set("other_users_views", 1);

			}

			/**
			 * The method to get the sharedWithMe
			 * @returns {String} A String representing the sharedWithMe
			 */
			getSharedWithMe()	{
				return this.sharedWithMe;

			}

			/**
			 * The method to set the value to sharedWithMe
			 * @param {String} sharedWithMe A String
			 */
			setSharedWithMe(sharedWithMe)	{
				if((sharedWithMe != null) && (!(Object.prototype.toString.call(sharedWithMe) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedWithMe EXPECTED TYPE: String", null, null);
				}
				this.sharedWithMe = sharedWithMe;
				this.keyModified.set("shared_with_me", 1);

			}

			/**
			 * The method to get the createdByMe
			 * @returns {String} A String representing the createdByMe
			 */
			getCreatedByMe()	{
				return this.createdByMe;

			}

			/**
			 * The method to set the value to createdByMe
			 * @param {String} createdByMe A String
			 */
			setCreatedByMe(createdByMe)	{
				if((createdByMe != null) && (!(Object.prototype.toString.call(createdByMe) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdByMe EXPECTED TYPE: String", null, null);
				}
				this.createdByMe = createdByMe;
				this.keyModified.set("created_by_me", 1);

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

				this.customViews=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the customViews
			 * @returns {List} An Array representing the customViews
			 */
			getCustomViews()	{
				return this.customViews;

			}

			/**
			 * The method to set the value to customViews
			 * @param {List} customViews An Array
			 */
			setCustomViews(customViews)	{
				if((customViews != null) && (!(Object.prototype.toString.call(customViews) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customViews EXPECTED TYPE: Array", null, null);
				}
				this.customViews = customViews;
				this.keyModified.set("custom_views", 1);

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
				if((info != null) && (!(info instanceof ZCRM.CustomView.Model.Info))){
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

		Info : class{
			constructor(){

				this.perPage=null;
				this.default1=null;
				this.count=null;
				this.page=null;
				this.moreRecords=null;
				this.translation=null;
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
			 * The method to get the default
			 * @returns {String} A String representing the default1
			 */
			getDefault()	{
				return this.default1;

			}

			/**
			 * The method to set the value to default
			 * @param {String} default1 A String
			 */
			setDefault(default1)	{
				if((default1 != null) && (!(Object.prototype.toString.call(default1) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: default1 EXPECTED TYPE: String", null, null);
				}
				this.default1 = default1;
				this.keyModified.set("default", 1);

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
			 * The method to get the translation
			 * @returns {Translation} An instance of Translation
			 */
			getTranslation()	{
				return this.translation;

			}

			/**
			 * The method to set the value to translation
			 * @param {Translation} translation An instance of Translation
			 */
			setTranslation(translation)	{
				if((translation != null) && (!(translation instanceof ZCRM.CustomView.Model.Translation))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: translation EXPECTED TYPE: Translation", null, null);
				}
				this.translation = translation;
				this.keyModified.set("translation", 1);

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

		CustomView : class{
			constructor(){

				this.id=null;
				this.name=null;
				this.systemName=null;
				this.displayValue=null;
				this.sharedType=null;
				this.category=null;
				this.sortBy=null;
				this.sortOrder=null;
				this.favorite=null;
				this.offline=null;
				this.default1=null;
				this.systemDefined=null;
				this.criteria=null;
				this.sharedDetails=null;
				this.fields=null;
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
			 * The method to get the systemName
			 * @returns {String} A String representing the systemName
			 */
			getSystemName()	{
				return this.systemName;

			}

			/**
			 * The method to set the value to systemName
			 * @param {String} systemName A String
			 */
			setSystemName(systemName)	{
				if((systemName != null) && (!(Object.prototype.toString.call(systemName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemName EXPECTED TYPE: String", null, null);
				}
				this.systemName = systemName;
				this.keyModified.set("system_name", 1);

			}

			/**
			 * The method to get the displayValue
			 * @returns {String} A String representing the displayValue
			 */
			getDisplayValue()	{
				return this.displayValue;

			}

			/**
			 * The method to set the value to displayValue
			 * @param {String} displayValue A String
			 */
			setDisplayValue(displayValue)	{
				if((displayValue != null) && (!(Object.prototype.toString.call(displayValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayValue EXPECTED TYPE: String", null, null);
				}
				this.displayValue = displayValue;
				this.keyModified.set("display_value", 1);

			}

			/**
			 * The method to get the sharedType
			 * @returns {String} A String representing the sharedType
			 */
			getSharedType()	{
				return this.sharedType;

			}

			/**
			 * The method to set the value to sharedType
			 * @param {String} sharedType A String
			 */
			setSharedType(sharedType)	{
				if((sharedType != null) && (!(Object.prototype.toString.call(sharedType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedType EXPECTED TYPE: String", null, null);
				}
				this.sharedType = sharedType;
				this.keyModified.set("shared_type", 1);

			}

			/**
			 * The method to get the category
			 * @returns {String} A String representing the category
			 */
			getCategory()	{
				return this.category;

			}

			/**
			 * The method to set the value to category
			 * @param {String} category A String
			 */
			setCategory(category)	{
				if((category != null) && (!(Object.prototype.toString.call(category) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: category EXPECTED TYPE: String", null, null);
				}
				this.category = category;
				this.keyModified.set("category", 1);

			}

			/**
			 * The method to get the sortBy
			 * @returns {String} A String representing the sortBy
			 */
			getSortBy()	{
				return this.sortBy;

			}

			/**
			 * The method to set the value to sortBy
			 * @param {String} sortBy A String
			 */
			setSortBy(sortBy)	{
				if((sortBy != null) && (!(Object.prototype.toString.call(sortBy) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortBy EXPECTED TYPE: String", null, null);
				}
				this.sortBy = sortBy;
				this.keyModified.set("sort_by", 1);

			}

			/**
			 * The method to get the sortOrder
			 * @returns {String} A String representing the sortOrder
			 */
			getSortOrder()	{
				return this.sortOrder;

			}

			/**
			 * The method to set the value to sortOrder
			 * @param {String} sortOrder A String
			 */
			setSortOrder(sortOrder)	{
				if((sortOrder != null) && (!(Object.prototype.toString.call(sortOrder) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sortOrder EXPECTED TYPE: String", null, null);
				}
				this.sortOrder = sortOrder;
				this.keyModified.set("sort_order", 1);

			}

			/**
			 * The method to get the favorite
			 * @returns {Integer} An Integer representing the favorite
			 */
			getFavorite()	{
				return this.favorite;

			}

			/**
			 * The method to set the value to favorite
			 * @param {Integer} favorite An Integer
			 */
			setFavorite(favorite)	{
				if((favorite != null) && (!(Object.prototype.toString.call(favorite) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: favorite EXPECTED TYPE: Integer", null, null);
				}
				this.favorite = favorite;
				this.keyModified.set("favorite", 1);

			}

			/**
			 * The method to get the offline
			 * @returns {Boolean} A Boolean representing the offline
			 */
			getOffline()	{
				return this.offline;

			}

			/**
			 * The method to set the value to offline
			 * @param {Boolean} offline A Boolean
			 */
			setOffline(offline)	{
				if((offline != null) && (!(Object.prototype.toString.call(offline) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: offline EXPECTED TYPE: Boolean", null, null);
				}
				this.offline = offline;
				this.keyModified.set("offline", 1);

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
			 * The method to get the systemDefined
			 * @returns {Boolean} A Boolean representing the systemDefined
			 */
			getSystemDefined()	{
				return this.systemDefined;

			}

			/**
			 * The method to set the value to systemDefined
			 * @param {Boolean} systemDefined A Boolean
			 */
			setSystemDefined(systemDefined)	{
				if((systemDefined != null) && (!(Object.prototype.toString.call(systemDefined) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemDefined EXPECTED TYPE: Boolean", null, null);
				}
				this.systemDefined = systemDefined;
				this.keyModified.set("system_defined", 1);

			}

			/**
			 * The method to get the criteria
			 * @returns {Criteria} An instance of Criteria
			 */
			getCriteria()	{
				return this.criteria;

			}

			/**
			 * The method to set the value to criteria
			 * @param {Criteria} criteria An instance of Criteria
			 */
			setCriteria(criteria)	{
				if((criteria != null) && (!(criteria instanceof ZCRM.CustomView.Model.Criteria))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
				}
				this.criteria = criteria;
				this.keyModified.set("criteria", 1);

			}

			/**
			 * The method to get the sharedDetails
			 * @returns {List} An Array representing the sharedDetails
			 */
			getSharedDetails()	{
				return this.sharedDetails;

			}

			/**
			 * The method to set the value to sharedDetails
			 * @param {List} sharedDetails An Array
			 */
			setSharedDetails(sharedDetails)	{
				if((sharedDetails != null) && (!(Object.prototype.toString.call(sharedDetails) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sharedDetails EXPECTED TYPE: Array", null, null);
				}
				this.sharedDetails = sharedDetails;
				this.keyModified.set("shared_details", 1);

			}

			/**
			 * The method to get the fields
			 * @returns {List} An Array representing the fields
			 */
			getFields()	{
				return this.fields;

			}

			/**
			 * The method to set the value to fields
			 * @param {List} fields An Array
			 */
			setFields(fields)	{
				if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
				}
				this.fields = fields;
				this.keyModified.set("fields", 1);

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

		Range : class{
			constructor(){

				this.from=null;
				this.to=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the from
			 * @returns {Integer} An Integer representing the from
			 */
			getFrom()	{
				return this.from;

			}

			/**
			 * The method to set the value to from
			 * @param {Integer} from An Integer
			 */
			setFrom(from)	{
				if((from != null) && (!(Object.prototype.toString.call(from) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: from EXPECTED TYPE: Integer", null, null);
				}
				this.from = from;
				this.keyModified.set("from", 1);

			}

			/**
			 * The method to get the to
			 * @returns {Integer} An Integer representing the to
			 */
			getTo()	{
				return this.to;

			}

			/**
			 * The method to set the value to to
			 * @param {Integer} to An Integer
			 */
			setTo(to)	{
				if((to != null) && (!(Object.prototype.toString.call(to) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: to EXPECTED TYPE: Integer", null, null);
				}
				this.to = to;
				this.keyModified.set("to", 1);

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

		GetCustomViewsParam : {
			PAGE : 	new Param("page", "CustomView.Model.GetCustomViewsParam"),

			PER_PAGE : 	new Param("per_page", "CustomView.Model.GetCustomViewsParam"),


		},

		GetCustomViewParam : {

		}
	},
	Operations : class {


		/**
		 * Creates an instance of CustomViewsOperations with the given parameters
		 * @param {String} module A String
		 */
		constructor(module=null){
			if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
			}
						this.module = module;

		}

		/**
		 * The method to get custom views
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getCustomViews(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/custom_views");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("module", "CustomView.Model.GetCustomViewsParam"), this.module);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("CustomView.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get custom view
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getCustomView(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/custom_views/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("module", "CustomView.Model.GetCustomViewParam"), this.module);
			return handlerInstance.apiCall("CustomView.Model.ResponseHandler", "application/json");

		}

	},

}