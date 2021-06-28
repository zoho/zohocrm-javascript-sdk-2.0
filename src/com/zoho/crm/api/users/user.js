ZCRM.User = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		ActionWrapper : class{
			constructor(){

				this.users=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the users
			 * @returns {List} An Array representing the users
			 */
			getUsers()	{
				return this.users;

			}

			/**
			 * The method to set the value to users
			 * @param {List} users An Array
			 */
			setUsers(users)	{
				if((users != null) && (!(Object.prototype.toString.call(users) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: users EXPECTED TYPE: Array", null, null);
				}
				this.users = users;
				this.keyModified.set("users", 1);

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

		ResponseWrapper : class{
			constructor(){

				this.users=null;
				this.info=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the users
			 * @returns {List} An Array representing the users
			 */
			getUsers()	{
				return this.users;

			}

			/**
			 * The method to set the value to users
			 * @param {List} users An Array
			 */
			setUsers(users)	{
				if((users != null) && (!(Object.prototype.toString.call(users) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: users EXPECTED TYPE: Array", null, null);
				}
				this.users = users;
				this.keyModified.set("users", 1);

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
				if((info != null) && (!(info instanceof ZCRM.User.Model.Info))){
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

		Territory : class{
			constructor(){

				this.manager=null;
				this.name=null;
				this.id=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the manager
			 * @returns {Boolean} A Boolean representing the manager
			 */
			getManager()	{
				return this.manager;

			}

			/**
			 * The method to set the value to manager
			 * @param {Boolean} manager A Boolean
			 */
			setManager(manager)	{
				if((manager != null) && (!(Object.prototype.toString.call(manager) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: manager EXPECTED TYPE: Boolean", null, null);
				}
				this.manager = manager;
				this.keyModified.set("manager", 1);

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

		CustomizeInfo : class{
			constructor(){

				this.notesDesc=null;
				this.showRightPanel=null;
				this.bcView=null;
				this.showHome=null;
				this.showDetailView=null;
				this.unpinRecentItem=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the notesDesc
			 * @returns {Boolean} A Boolean representing the notesDesc
			 */
			getNotesDesc()	{
				return this.notesDesc;

			}

			/**
			 * The method to set the value to notesDesc
			 * @param {Boolean} notesDesc A Boolean
			 */
			setNotesDesc(notesDesc)	{
				if((notesDesc != null) && (!(Object.prototype.toString.call(notesDesc) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notesDesc EXPECTED TYPE: Boolean", null, null);
				}
				this.notesDesc = notesDesc;
				this.keyModified.set("notes_desc", 1);

			}

			/**
			 * The method to get the showRightPanel
			 * @returns {String} A String representing the showRightPanel
			 */
			getShowRightPanel()	{
				return this.showRightPanel;

			}

			/**
			 * The method to set the value to showRightPanel
			 * @param {String} showRightPanel A String
			 */
			setShowRightPanel(showRightPanel)	{
				if((showRightPanel != null) && (!(Object.prototype.toString.call(showRightPanel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showRightPanel EXPECTED TYPE: String", null, null);
				}
				this.showRightPanel = showRightPanel;
				this.keyModified.set("show_right_panel", 1);

			}

			/**
			 * The method to get the bcView
			 * @returns {String} A String representing the bcView
			 */
			getBcView()	{
				return this.bcView;

			}

			/**
			 * The method to set the value to bcView
			 * @param {String} bcView A String
			 */
			setBcView(bcView)	{
				if((bcView != null) && (!(Object.prototype.toString.call(bcView) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bcView EXPECTED TYPE: String", null, null);
				}
				this.bcView = bcView;
				this.keyModified.set("bc_view", 1);

			}

			/**
			 * The method to get the showHome
			 * @returns {Boolean} A Boolean representing the showHome
			 */
			getShowHome()	{
				return this.showHome;

			}

			/**
			 * The method to set the value to showHome
			 * @param {Boolean} showHome A Boolean
			 */
			setShowHome(showHome)	{
				if((showHome != null) && (!(Object.prototype.toString.call(showHome) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showHome EXPECTED TYPE: Boolean", null, null);
				}
				this.showHome = showHome;
				this.keyModified.set("show_home", 1);

			}

			/**
			 * The method to get the showDetailView
			 * @returns {Boolean} A Boolean representing the showDetailView
			 */
			getShowDetailView()	{
				return this.showDetailView;

			}

			/**
			 * The method to set the value to showDetailView
			 * @param {Boolean} showDetailView A Boolean
			 */
			setShowDetailView(showDetailView)	{
				if((showDetailView != null) && (!(Object.prototype.toString.call(showDetailView) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showDetailView EXPECTED TYPE: Boolean", null, null);
				}
				this.showDetailView = showDetailView;
				this.keyModified.set("show_detail_view", 1);

			}

			/**
			 * The method to get the unpinRecentItem
			 * @returns {String} A String representing the unpinRecentItem
			 */
			getUnpinRecentItem()	{
				return this.unpinRecentItem;

			}

			/**
			 * The method to set the value to unpinRecentItem
			 * @param {String} unpinRecentItem A String
			 */
			setUnpinRecentItem(unpinRecentItem)	{
				if((unpinRecentItem != null) && (!(Object.prototype.toString.call(unpinRecentItem) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unpinRecentItem EXPECTED TYPE: String", null, null);
				}
				this.unpinRecentItem = unpinRecentItem;
				this.keyModified.set("unpin_recent_item", 1);

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

		Theme : class{
			constructor(){

				this.normalTab=null;
				this.selectedTab=null;
				this.newBackground=null;
				this.background=null;
				this.screen=null;
				this.type=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the normalTab
			 * @returns {TabTheme} An instance of TabTheme
			 */
			getNormalTab()	{
				return this.normalTab;

			}

			/**
			 * The method to set the value to normalTab
			 * @param {TabTheme} normalTab An instance of TabTheme
			 */
			setNormalTab(normalTab)	{
				if((normalTab != null) && (!(normalTab instanceof ZCRM.User.Model.TabTheme))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: normalTab EXPECTED TYPE: TabTheme", null, null);
				}
				this.normalTab = normalTab;
				this.keyModified.set("normal_tab", 1);

			}

			/**
			 * The method to get the selectedTab
			 * @returns {TabTheme} An instance of TabTheme
			 */
			getSelectedTab()	{
				return this.selectedTab;

			}

			/**
			 * The method to set the value to selectedTab
			 * @param {TabTheme} selectedTab An instance of TabTheme
			 */
			setSelectedTab(selectedTab)	{
				if((selectedTab != null) && (!(selectedTab instanceof ZCRM.User.Model.TabTheme))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: selectedTab EXPECTED TYPE: TabTheme", null, null);
				}
				this.selectedTab = selectedTab;
				this.keyModified.set("selected_tab", 1);

			}

			/**
			 * The method to get the newBackground
			 * @returns {String} A String representing the newBackground
			 */
			getNewBackground()	{
				return this.newBackground;

			}

			/**
			 * The method to set the value to newBackground
			 * @param {String} newBackground A String
			 */
			setNewBackground(newBackground)	{
				if((newBackground != null) && (!(Object.prototype.toString.call(newBackground) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: newBackground EXPECTED TYPE: String", null, null);
				}
				this.newBackground = newBackground;
				this.keyModified.set("new_background", 1);

			}

			/**
			 * The method to get the background
			 * @returns {String} A String representing the background
			 */
			getBackground()	{
				return this.background;

			}

			/**
			 * The method to set the value to background
			 * @param {String} background A String
			 */
			setBackground(background)	{
				if((background != null) && (!(Object.prototype.toString.call(background) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: background EXPECTED TYPE: String", null, null);
				}
				this.background = background;
				this.keyModified.set("background", 1);

			}

			/**
			 * The method to get the screen
			 * @returns {String} A String representing the screen
			 */
			getScreen()	{
				return this.screen;

			}

			/**
			 * The method to set the value to screen
			 * @param {String} screen A String
			 */
			setScreen(screen)	{
				if((screen != null) && (!(Object.prototype.toString.call(screen) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: screen EXPECTED TYPE: String", null, null);
				}
				this.screen = screen;
				this.keyModified.set("screen", 1);

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

				this.users=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the users
			 * @returns {List} An Array representing the users
			 */
			getUsers()	{
				return this.users;

			}

			/**
			 * The method to set the value to users
			 * @param {List} users An Array
			 */
			setUsers(users)	{
				if((users != null) && (!(Object.prototype.toString.call(users) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: users EXPECTED TYPE: Array", null, null);
				}
				this.users = users;
				this.keyModified.set("users", 1);

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

		Shift : class{
			constructor(){

				this.id=null;
				this.name=null;
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

				this.users=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the users
			 * @returns {List} An Array representing the users
			 */
			getUsers()	{
				return this.users;

			}

			/**
			 * The method to set the value to users
			 * @param {List} users An Array
			 */
			setUsers(users)	{
				if((users != null) && (!(Object.prototype.toString.call(users) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: users EXPECTED TYPE: Array", null, null);
				}
				this.users = users;
				this.keyModified.set("users", 1);

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

		User : class extends ZCRM.Record.Model.Record{
			constructor(){
				super();

			}



			/**
			 * The method to get the country
			 * @returns {String} A String representing the country
			 */
			getCountry()	{
				return this.getKeyValue("country");

			}

			/**
			 * The method to set the value to country
			 * @param {String} country A String
			 */
			setCountry(country)	{
				if((country != null) && (!(Object.prototype.toString.call(country) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: country EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("country", country);

			}

			/**
			 * The method to get the customizeInfo
			 * @returns {CustomizeInfo} An instance of CustomizeInfo
			 */
			getCustomizeInfo()	{
				return this.getKeyValue("customize_info");

			}

			/**
			 * The method to set the value to customizeInfo
			 * @param {CustomizeInfo} customizeInfo An instance of CustomizeInfo
			 */
			setCustomizeInfo(customizeInfo)	{
				if((customizeInfo != null) && (!(customizeInfo instanceof ZCRM.User.Model.CustomizeInfo))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customizeInfo EXPECTED TYPE: CustomizeInfo", null, null);
				}
				this.addKeyValue("customize_info", customizeInfo);

			}

			/**
			 * The method to get the role
			 * @returns {Role} An instance of Role
			 */
			getRole()	{
				return this.getKeyValue("role");

			}

			/**
			 * The method to set the value to role
			 * @param {Role} role An instance of Role
			 */
			setRole(role)	{
				if((role != null) && (!(role instanceof ZCRM.Role.Model.Role))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: role EXPECTED TYPE: Role", null, null);
				}
				this.addKeyValue("role", role);

			}

			/**
			 * The method to get the signature
			 * @returns {String} A String representing the signature
			 */
			getSignature()	{
				return this.getKeyValue("signature");

			}

			/**
			 * The method to set the value to signature
			 * @param {String} signature A String
			 */
			setSignature(signature)	{
				if((signature != null) && (!(Object.prototype.toString.call(signature) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signature EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("signature", signature);

			}

			/**
			 * The method to get the city
			 * @returns {String} A String representing the city
			 */
			getCity()	{
				return this.getKeyValue("city");

			}

			/**
			 * The method to set the value to city
			 * @param {String} city A String
			 */
			setCity(city)	{
				if((city != null) && (!(Object.prototype.toString.call(city) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: city EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("city", city);

			}

			/**
			 * The method to get the nameFormat
			 * @returns {String} A String representing the nameFormat
			 */
			getNameFormat()	{
				return this.getKeyValue("name_format");

			}

			/**
			 * The method to set the value to nameFormat
			 * @param {String} nameFormat A String
			 */
			setNameFormat(nameFormat)	{
				if((nameFormat != null) && (!(Object.prototype.toString.call(nameFormat) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nameFormat EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("name_format", nameFormat);

			}

			/**
			 * The method to get the personalAccount
			 * @returns {Boolean} A Boolean representing the personalAccount
			 */
			getPersonalAccount()	{
				return this.getKeyValue("personal_account");

			}

			/**
			 * The method to set the value to personalAccount
			 * @param {Boolean} personalAccount A Boolean
			 */
			setPersonalAccount(personalAccount)	{
				if((personalAccount != null) && (!(Object.prototype.toString.call(personalAccount) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: personalAccount EXPECTED TYPE: Boolean", null, null);
				}
				this.addKeyValue("personal_account", personalAccount);

			}

			/**
			 * The method to get the defaultTabGroup
			 * @returns {String} A String representing the defaultTabGroup
			 */
			getDefaultTabGroup()	{
				return this.getKeyValue("default_tab_group");

			}

			/**
			 * The method to set the value to defaultTabGroup
			 * @param {String} defaultTabGroup A String
			 */
			setDefaultTabGroup(defaultTabGroup)	{
				if((defaultTabGroup != null) && (!(Object.prototype.toString.call(defaultTabGroup) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultTabGroup EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("default_tab_group", defaultTabGroup);

			}

			/**
			 * The method to get the language
			 * @returns {String} A String representing the language
			 */
			getLanguage()	{
				return this.getKeyValue("language");

			}

			/**
			 * The method to set the value to language
			 * @param {String} language A String
			 */
			setLanguage(language)	{
				if((language != null) && (!(Object.prototype.toString.call(language) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: language EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("language", language);

			}

			/**
			 * The method to get the locale
			 * @returns {String} A String representing the locale
			 */
			getLocale()	{
				return this.getKeyValue("locale");

			}

			/**
			 * The method to set the value to locale
			 * @param {String} locale A String
			 */
			setLocale(locale)	{
				if((locale != null) && (!(Object.prototype.toString.call(locale) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: locale EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("locale", locale);

			}

			/**
			 * The method to get the microsoft
			 * @returns {Boolean} A Boolean representing the microsoft
			 */
			getMicrosoft()	{
				return this.getKeyValue("microsoft");

			}

			/**
			 * The method to set the value to microsoft
			 * @param {Boolean} microsoft A Boolean
			 */
			setMicrosoft(microsoft)	{
				if((microsoft != null) && (!(Object.prototype.toString.call(microsoft) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: microsoft EXPECTED TYPE: Boolean", null, null);
				}
				this.addKeyValue("microsoft", microsoft);

			}

			/**
			 * The method to get the isonline
			 * @returns {Boolean} A Boolean representing the isonline
			 */
			getIsonline()	{
				return this.getKeyValue("Isonline");

			}

			/**
			 * The method to set the value to isonline
			 * @param {Boolean} isonline A Boolean
			 */
			setIsonline(isonline)	{
				if((isonline != null) && (!(Object.prototype.toString.call(isonline) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isonline EXPECTED TYPE: Boolean", null, null);
				}
				this.addKeyValue("Isonline", isonline);

			}

			/**
			 * The method to get the street
			 * @returns {String} A String representing the street
			 */
			getStreet()	{
				return this.getKeyValue("street");

			}

			/**
			 * The method to set the value to street
			 * @param {String} street A String
			 */
			setStreet(street)	{
				if((street != null) && (!(Object.prototype.toString.call(street) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: street EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("street", street);

			}

			/**
			 * The method to get the currency
			 * @returns {String} A String representing the currency
			 */
			getCurrency()	{
				return this.getKeyValue("Currency");

			}

			/**
			 * The method to set the value to currency
			 * @param {String} currency A String
			 */
			setCurrency(currency)	{
				if((currency != null) && (!(Object.prototype.toString.call(currency) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("Currency", currency);

			}

			/**
			 * The method to get the alias
			 * @returns {String} A String representing the alias
			 */
			getAlias()	{
				return this.getKeyValue("alias");

			}

			/**
			 * The method to set the value to alias
			 * @param {String} alias A String
			 */
			setAlias(alias)	{
				if((alias != null) && (!(Object.prototype.toString.call(alias) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: alias EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("alias", alias);

			}

			/**
			 * The method to get the theme
			 * @returns {Theme} An instance of Theme
			 */
			getTheme()	{
				return this.getKeyValue("theme");

			}

			/**
			 * The method to set the value to theme
			 * @param {Theme} theme An instance of Theme
			 */
			setTheme(theme)	{
				if((theme != null) && (!(theme instanceof ZCRM.User.Model.Theme))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: theme EXPECTED TYPE: Theme", null, null);
				}
				this.addKeyValue("theme", theme);

			}

			/**
			 * The method to get the state
			 * @returns {String} A String representing the state
			 */
			getState()	{
				return this.getKeyValue("state");

			}

			/**
			 * The method to set the value to state
			 * @param {String} state A String
			 */
			setState(state)	{
				if((state != null) && (!(Object.prototype.toString.call(state) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("state", state);

			}

			/**
			 * The method to get the fax
			 * @returns {String} A String representing the fax
			 */
			getFax()	{
				return this.getKeyValue("fax");

			}

			/**
			 * The method to set the value to fax
			 * @param {String} fax A String
			 */
			setFax(fax)	{
				if((fax != null) && (!(Object.prototype.toString.call(fax) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fax EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("fax", fax);

			}

			/**
			 * The method to get the countryLocale
			 * @returns {String} A String representing the countryLocale
			 */
			getCountryLocale()	{
				return this.getKeyValue("country_locale");

			}

			/**
			 * The method to set the value to countryLocale
			 * @param {String} countryLocale A String
			 */
			setCountryLocale(countryLocale)	{
				if((countryLocale != null) && (!(Object.prototype.toString.call(countryLocale) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: countryLocale EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("country_locale", countryLocale);

			}

			/**
			 * The method to get the firstName
			 * @returns {String} A String representing the firstName
			 */
			getFirstName()	{
				return this.getKeyValue("first_name");

			}

			/**
			 * The method to set the value to firstName
			 * @param {String} firstName A String
			 */
			setFirstName(firstName)	{
				if((firstName != null) && (!(Object.prototype.toString.call(firstName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: firstName EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("first_name", firstName);

			}

			/**
			 * The method to get the email
			 * @returns {String} A String representing the email
			 */
			getEmail()	{
				return this.getKeyValue("email");

			}

			/**
			 * The method to set the value to email
			 * @param {String} email A String
			 */
			setEmail(email)	{
				if((email != null) && (!(Object.prototype.toString.call(email) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: email EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("email", email);

			}

			/**
			 * The method to get the reportingTo
			 * @returns {User} An instance of User
			 */
			getReportingTo()	{
				return this.getKeyValue("Reporting_To");

			}

			/**
			 * The method to set the value to reportingTo
			 * @param {User} reportingTo An instance of User
			 */
			setReportingTo(reportingTo)	{
				if((reportingTo != null) && (!(reportingTo instanceof ZCRM.User.Model.User))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reportingTo EXPECTED TYPE: User", null, null);
				}
				this.addKeyValue("Reporting_To", reportingTo);

			}

			/**
			 * The method to get the decimalSeparator
			 * @returns {String} A String representing the decimalSeparator
			 */
			getDecimalSeparator()	{
				return this.getKeyValue("decimal_separator");

			}

			/**
			 * The method to set the value to decimalSeparator
			 * @param {String} decimalSeparator A String
			 */
			setDecimalSeparator(decimalSeparator)	{
				if((decimalSeparator != null) && (!(Object.prototype.toString.call(decimalSeparator) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalSeparator EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("decimal_separator", decimalSeparator);

			}

			/**
			 * The method to get the zip
			 * @returns {String} A String representing the zip
			 */
			getZip()	{
				return this.getKeyValue("zip");

			}

			/**
			 * The method to set the value to zip
			 * @param {String} zip A String
			 */
			setZip(zip)	{
				if((zip != null) && (!(Object.prototype.toString.call(zip) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zip EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("zip", zip);

			}

			/**
			 * The method to get the website
			 * @returns {String} A String representing the website
			 */
			getWebsite()	{
				return this.getKeyValue("website");

			}

			/**
			 * The method to set the value to website
			 * @param {String} website A String
			 */
			setWebsite(website)	{
				if((website != null) && (!(Object.prototype.toString.call(website) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: website EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("website", website);

			}

			/**
			 * The method to get the timeFormat
			 * @returns {String} A String representing the timeFormat
			 */
			getTimeFormat()	{
				return this.getKeyValue("time_format");

			}

			/**
			 * The method to set the value to timeFormat
			 * @param {String} timeFormat A String
			 */
			setTimeFormat(timeFormat)	{
				if((timeFormat != null) && (!(Object.prototype.toString.call(timeFormat) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timeFormat EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("time_format", timeFormat);

			}

			/**
			 * The method to get the offset
			 * @returns {Long} A BigInt representing the offset
			 */
			getOffset()	{
				return this.getKeyValue("offset");

			}

			/**
			 * The method to set the value to offset
			 * @param {Long} offset A BigInt
			 */
			setOffset(offset)	{
				if((offset != null) && (!(Object.prototype.toString.call(offset) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: offset EXPECTED TYPE: BigInt", null, null);
				}
				this.addKeyValue("offset", offset);

			}

			/**
			 * The method to get the profile
			 * @returns {Profile} An instance of Profile
			 */
			getProfile()	{
				return this.getKeyValue("profile");

			}

			/**
			 * The method to set the value to profile
			 * @param {Profile} profile An instance of Profile
			 */
			setProfile(profile)	{
				if((profile != null) && (!(profile instanceof ZCRM.Profile.Model.Profile))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: profile EXPECTED TYPE: Profile", null, null);
				}
				this.addKeyValue("profile", profile);

			}

			/**
			 * The method to get the mobile
			 * @returns {String} A String representing the mobile
			 */
			getMobile()	{
				return this.getKeyValue("mobile");

			}

			/**
			 * The method to set the value to mobile
			 * @param {String} mobile A String
			 */
			setMobile(mobile)	{
				if((mobile != null) && (!(Object.prototype.toString.call(mobile) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mobile EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("mobile", mobile);

			}

			/**
			 * The method to get the lastName
			 * @returns {String} A String representing the lastName
			 */
			getLastName()	{
				return this.getKeyValue("last_name");

			}

			/**
			 * The method to set the value to lastName
			 * @param {String} lastName A String
			 */
			setLastName(lastName)	{
				if((lastName != null) && (!(Object.prototype.toString.call(lastName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastName EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("last_name", lastName);

			}

			/**
			 * The method to get the timeZone
			 * @returns {String} A String representing the timeZone
			 */
			getTimeZone()	{
				return this.getKeyValue("time_zone");

			}

			/**
			 * The method to set the value to timeZone
			 * @param {String} timeZone A String
			 */
			setTimeZone(timeZone)	{
				if((timeZone != null) && (!(Object.prototype.toString.call(timeZone) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timeZone EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("time_zone", timeZone);

			}

			/**
			 * The method to get the zuid
			 * @returns {String} A String representing the zuid
			 */
			getZuid()	{
				return this.getKeyValue("zuid");

			}

			/**
			 * The method to set the value to zuid
			 * @param {String} zuid A String
			 */
			setZuid(zuid)	{
				if((zuid != null) && (!(Object.prototype.toString.call(zuid) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zuid EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("zuid", zuid);

			}

			/**
			 * The method to get the confirm
			 * @returns {Boolean} A Boolean representing the confirm
			 */
			getConfirm()	{
				return this.getKeyValue("confirm");

			}

			/**
			 * The method to set the value to confirm
			 * @param {Boolean} confirm A Boolean
			 */
			setConfirm(confirm)	{
				if((confirm != null) && (!(Object.prototype.toString.call(confirm) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: confirm EXPECTED TYPE: Boolean", null, null);
				}
				this.addKeyValue("confirm", confirm);

			}

			/**
			 * The method to get the fullName
			 * @returns {String} A String representing the fullName
			 */
			getFullName()	{
				return this.getKeyValue("full_name");

			}

			/**
			 * The method to set the value to fullName
			 * @param {String} fullName A String
			 */
			setFullName(fullName)	{
				if((fullName != null) && (!(Object.prototype.toString.call(fullName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fullName EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("full_name", fullName);

			}

			/**
			 * The method to get the territories
			 * @returns {List} An Array representing the territories
			 */
			getTerritories()	{
				return this.getKeyValue("territories");

			}

			/**
			 * The method to set the value to territories
			 * @param {List} territories An Array
			 */
			setTerritories(territories)	{
				if((territories != null) && (!(Object.prototype.toString.call(territories) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territories EXPECTED TYPE: Array", null, null);
				}
				this.addKeyValue("territories", territories);

			}

			/**
			 * The method to get the phone
			 * @returns {String} A String representing the phone
			 */
			getPhone()	{
				return this.getKeyValue("phone");

			}

			/**
			 * The method to set the value to phone
			 * @param {String} phone A String
			 */
			setPhone(phone)	{
				if((phone != null) && (!(Object.prototype.toString.call(phone) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: phone EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("phone", phone);

			}

			/**
			 * The method to get the dob
			 * @returns {String} A String representing the dob
			 */
			getDob()	{
				return this.getKeyValue("dob");

			}

			/**
			 * The method to set the value to dob
			 * @param {String} dob A String
			 */
			setDob(dob)	{
				if((dob != null) && (!(Object.prototype.toString.call(dob) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dob EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("dob", dob);

			}

			/**
			 * The method to get the dateFormat
			 * @returns {String} A String representing the dateFormat
			 */
			getDateFormat()	{
				return this.getKeyValue("date_format");

			}

			/**
			 * The method to set the value to dateFormat
			 * @param {String} dateFormat A String
			 */
			setDateFormat(dateFormat)	{
				if((dateFormat != null) && (!(Object.prototype.toString.call(dateFormat) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dateFormat EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("date_format", dateFormat);

			}

			/**
			 * The method to get the status
			 * @returns {String} A String representing the status
			 */
			getStatus()	{
				return this.getKeyValue("status");

			}

			/**
			 * The method to set the value to status
			 * @param {String} status A String
			 */
			setStatus(status)	{
				if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("status", status);

			}

			/**
			 * The method to get the name
			 * @returns {String} A String representing the name
			 */
			getName()	{
				return this.getKeyValue("name");

			}

			/**
			 * The method to set the value to name
			 * @param {String} name A String
			 */
			setName(name)	{
				if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
				}
				this.addKeyValue("name", name);

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

		TabTheme : class{
			constructor(){

				this.fontColor=null;
				this.background=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the fontColor
			 * @returns {String} A String representing the fontColor
			 */
			getFontColor()	{
				return this.fontColor;

			}

			/**
			 * The method to set the value to fontColor
			 * @param {String} fontColor A String
			 */
			setFontColor(fontColor)	{
				if((fontColor != null) && (!(Object.prototype.toString.call(fontColor) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fontColor EXPECTED TYPE: String", null, null);
				}
				this.fontColor = fontColor;
				this.keyModified.set("font_color", 1);

			}

			/**
			 * The method to get the background
			 * @returns {String} A String representing the background
			 */
			getBackground()	{
				return this.background;

			}

			/**
			 * The method to set the value to background
			 * @param {String} background A String
			 */
			setBackground(background)	{
				if((background != null) && (!(Object.prototype.toString.call(background) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: background EXPECTED TYPE: String", null, null);
				}
				this.background = background;
				this.keyModified.set("background", 1);

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

		GetUsersHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "User.Model.GetUsersHeader"),


		},

		GetUsersParam : {
			TYPE : 	new Param("type", "User.Model.GetUsersParam"),

			PAGE : 	new Param("page", "User.Model.GetUsersParam"),

			PER_PAGE : 	new Param("per_page", "User.Model.GetUsersParam"),


		},

		GetUserHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "User.Model.GetUserHeader"),


		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get users
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getUsers(paramInstance=null, headerInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/users");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setParam(paramInstance);
			handlerInstance.setHeader(headerInstance);
			return handlerInstance.apiCall("User.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to create user
		 * @param {RequestWrapper} request An instance of RequestWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async createUser(request){
			if((request != null) && (!(request instanceof ZCRM.User.Model.RequestWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: RequestWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/users");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("User.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update users
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateUsers(request){
			if((request != null) && (!(request instanceof ZCRM.User.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/users");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("User.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to get user
		 * @param {Long} id A BigInt
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getUser(id, headerInstance=null){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/users/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setHeader(headerInstance);
			return handlerInstance.apiCall("User.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update user
		 * @param {Long} id A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateUser(id, request){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.User.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/users/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			return handlerInstance.apiCall("User.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to delete user
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async deleteUser(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/users/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
			handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
			return handlerInstance.apiCall("User.Model.ActionHandler", "application/json");

		}
	},

}