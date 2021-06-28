ZCRM.Module = {
	Model : {
		ActionResponse : class{
			constructor(){

			}


		},

		ActionHandler : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		Module : class{
			constructor(){

				this.name=null;
				this.globalSearchSupported=null;
				this.kanbanView=null;
				this.deletable=null;
				this.description=null;
				this.creatable=null;
				this.filterStatus=null;
				this.inventoryTemplateSupported=null;
				this.modifiedTime=null;
				this.pluralLabel=null;
				this.presenceSubMenu=null;
				this.triggersSupported=null;
				this.id=null;
				this.relatedListProperties=null;
				this.properties=null;
				this.perPage=null;
				this.visibility=null;
				this.convertable=null;
				this.editable=null;
				this.emailtemplateSupport=null;
				this.profiles=null;
				this.filterSupported=null;
				this.displayField=null;
				this.searchLayoutFields=null;
				this.kanbanViewSupported=null;
				this.showAsTab=null;
				this.webLink=null;
				this.sequenceNumber=null;
				this.singularLabel=null;
				this.viewable=null;
				this.apiSupported=null;
				this.apiName=null;
				this.quickCreate=null;
				this.modifiedBy=null;
				this.generatedType=null;
				this.feedsRequired=null;
				this.scoringSupported=null;
				this.webformSupported=null;
				this.arguments1=null;
				this.moduleName=null;
				this.businessCardFieldLimit=null;
				this.customView=null;
				this.parentModule=null;
				this.territory=null;
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
			 * The method to get the globalSearchSupported
			 * @returns {Boolean} A Boolean representing the globalSearchSupported
			 */
			getGlobalSearchSupported()	{
				return this.globalSearchSupported;

			}

			/**
			 * The method to set the value to globalSearchSupported
			 * @param {Boolean} globalSearchSupported A Boolean
			 */
			setGlobalSearchSupported(globalSearchSupported)	{
				if((globalSearchSupported != null) && (!(Object.prototype.toString.call(globalSearchSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: globalSearchSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.globalSearchSupported = globalSearchSupported;
				this.keyModified.set("global_search_supported", 1);

			}

			/**
			 * The method to get the kanbanView
			 * @returns {Boolean} A Boolean representing the kanbanView
			 */
			getKanbanView()	{
				return this.kanbanView;

			}

			/**
			 * The method to set the value to kanbanView
			 * @param {Boolean} kanbanView A Boolean
			 */
			setKanbanView(kanbanView)	{
				if((kanbanView != null) && (!(Object.prototype.toString.call(kanbanView) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: kanbanView EXPECTED TYPE: Boolean", null, null);
				}
				this.kanbanView = kanbanView;
				this.keyModified.set("kanban_view", 1);

			}

			/**
			 * The method to get the deletable
			 * @returns {Boolean} A Boolean representing the deletable
			 */
			getDeletable()	{
				return this.deletable;

			}

			/**
			 * The method to set the value to deletable
			 * @param {Boolean} deletable A Boolean
			 */
			setDeletable(deletable)	{
				if((deletable != null) && (!(Object.prototype.toString.call(deletable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deletable EXPECTED TYPE: Boolean", null, null);
				}
				this.deletable = deletable;
				this.keyModified.set("deletable", 1);

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
			 * The method to get the creatable
			 * @returns {Boolean} A Boolean representing the creatable
			 */
			getCreatable()	{
				return this.creatable;

			}

			/**
			 * The method to set the value to creatable
			 * @param {Boolean} creatable A Boolean
			 */
			setCreatable(creatable)	{
				if((creatable != null) && (!(Object.prototype.toString.call(creatable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: creatable EXPECTED TYPE: Boolean", null, null);
				}
				this.creatable = creatable;
				this.keyModified.set("creatable", 1);

			}

			/**
			 * The method to get the filterStatus
			 * @returns {Boolean} A Boolean representing the filterStatus
			 */
			getFilterStatus()	{
				return this.filterStatus;

			}

			/**
			 * The method to set the value to filterStatus
			 * @param {Boolean} filterStatus A Boolean
			 */
			setFilterStatus(filterStatus)	{
				if((filterStatus != null) && (!(Object.prototype.toString.call(filterStatus) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filterStatus EXPECTED TYPE: Boolean", null, null);
				}
				this.filterStatus = filterStatus;
				this.keyModified.set("filter_status", 1);

			}

			/**
			 * The method to get the inventoryTemplateSupported
			 * @returns {Boolean} A Boolean representing the inventoryTemplateSupported
			 */
			getInventoryTemplateSupported()	{
				return this.inventoryTemplateSupported;

			}

			/**
			 * The method to set the value to inventoryTemplateSupported
			 * @param {Boolean} inventoryTemplateSupported A Boolean
			 */
			setInventoryTemplateSupported(inventoryTemplateSupported)	{
				if((inventoryTemplateSupported != null) && (!(Object.prototype.toString.call(inventoryTemplateSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: inventoryTemplateSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.inventoryTemplateSupported = inventoryTemplateSupported;
				this.keyModified.set("inventory_template_supported", 1);

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
			 * The method to get the pluralLabel
			 * @returns {String} A String representing the pluralLabel
			 */
			getPluralLabel()	{
				return this.pluralLabel;

			}

			/**
			 * The method to set the value to pluralLabel
			 * @param {String} pluralLabel A String
			 */
			setPluralLabel(pluralLabel)	{
				if((pluralLabel != null) && (!(Object.prototype.toString.call(pluralLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pluralLabel EXPECTED TYPE: String", null, null);
				}
				this.pluralLabel = pluralLabel;
				this.keyModified.set("plural_label", 1);

			}

			/**
			 * The method to get the presenceSubMenu
			 * @returns {Boolean} A Boolean representing the presenceSubMenu
			 */
			getPresenceSubMenu()	{
				return this.presenceSubMenu;

			}

			/**
			 * The method to set the value to presenceSubMenu
			 * @param {Boolean} presenceSubMenu A Boolean
			 */
			setPresenceSubMenu(presenceSubMenu)	{
				if((presenceSubMenu != null) && (!(Object.prototype.toString.call(presenceSubMenu) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: presenceSubMenu EXPECTED TYPE: Boolean", null, null);
				}
				this.presenceSubMenu = presenceSubMenu;
				this.keyModified.set("presence_sub_menu", 1);

			}

			/**
			 * The method to get the triggersSupported
			 * @returns {Boolean} A Boolean representing the triggersSupported
			 */
			getTriggersSupported()	{
				return this.triggersSupported;

			}

			/**
			 * The method to set the value to triggersSupported
			 * @param {Boolean} triggersSupported A Boolean
			 */
			setTriggersSupported(triggersSupported)	{
				if((triggersSupported != null) && (!(Object.prototype.toString.call(triggersSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: triggersSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.triggersSupported = triggersSupported;
				this.keyModified.set("triggers_supported", 1);

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
			 * The method to get the relatedListProperties
			 * @returns {RelatedListProperties} An instance of RelatedListProperties
			 */
			getRelatedListProperties()	{
				return this.relatedListProperties;

			}

			/**
			 * The method to set the value to relatedListProperties
			 * @param {RelatedListProperties} relatedListProperties An instance of RelatedListProperties
			 */
			setRelatedListProperties(relatedListProperties)	{
				if((relatedListProperties != null) && (!(relatedListProperties instanceof ZCRM.Module.Model.RelatedListProperties))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedListProperties EXPECTED TYPE: RelatedListProperties", null, null);
				}
				this.relatedListProperties = relatedListProperties;
				this.keyModified.set("related_list_properties", 1);

			}

			/**
			 * The method to get the properties
			 * @returns {List} An Array representing the properties
			 */
			getProperties()	{
				return this.properties;

			}

			/**
			 * The method to set the value to properties
			 * @param {List} properties An Array
			 */
			setProperties(properties)	{
				if((properties != null) && (!(Object.prototype.toString.call(properties) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: properties EXPECTED TYPE: Array", null, null);
				}
				this.properties = properties;
				this.keyModified.set("$properties", 1);

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
			 * The method to get the visibility
			 * @returns {Integer} An Integer representing the visibility
			 */
			getVisibility()	{
				return this.visibility;

			}

			/**
			 * The method to set the value to visibility
			 * @param {Integer} visibility An Integer
			 */
			setVisibility(visibility)	{
				if((visibility != null) && (!(Object.prototype.toString.call(visibility) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visibility EXPECTED TYPE: Integer", null, null);
				}
				this.visibility = visibility;
				this.keyModified.set("visibility", 1);

			}

			/**
			 * The method to get the convertable
			 * @returns {Boolean} A Boolean representing the convertable
			 */
			getConvertable()	{
				return this.convertable;

			}

			/**
			 * The method to set the value to convertable
			 * @param {Boolean} convertable A Boolean
			 */
			setConvertable(convertable)	{
				if((convertable != null) && (!(Object.prototype.toString.call(convertable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertable EXPECTED TYPE: Boolean", null, null);
				}
				this.convertable = convertable;
				this.keyModified.set("convertable", 1);

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
				this.keyModified.set("editable", 1);

			}

			/**
			 * The method to get the emailtemplateSupport
			 * @returns {Boolean} A Boolean representing the emailtemplateSupport
			 */
			getEmailtemplateSupport()	{
				return this.emailtemplateSupport;

			}

			/**
			 * The method to set the value to emailtemplateSupport
			 * @param {Boolean} emailtemplateSupport A Boolean
			 */
			setEmailtemplateSupport(emailtemplateSupport)	{
				if((emailtemplateSupport != null) && (!(Object.prototype.toString.call(emailtemplateSupport) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: emailtemplateSupport EXPECTED TYPE: Boolean", null, null);
				}
				this.emailtemplateSupport = emailtemplateSupport;
				this.keyModified.set("emailTemplate_support", 1);

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
			 * The method to get the filterSupported
			 * @returns {Boolean} A Boolean representing the filterSupported
			 */
			getFilterSupported()	{
				return this.filterSupported;

			}

			/**
			 * The method to set the value to filterSupported
			 * @param {Boolean} filterSupported A Boolean
			 */
			setFilterSupported(filterSupported)	{
				if((filterSupported != null) && (!(Object.prototype.toString.call(filterSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: filterSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.filterSupported = filterSupported;
				this.keyModified.set("filter_supported", 1);

			}

			/**
			 * The method to get the displayField
			 * @returns {String} A String representing the displayField
			 */
			getDisplayField()	{
				return this.displayField;

			}

			/**
			 * The method to set the value to displayField
			 * @param {String} displayField A String
			 */
			setDisplayField(displayField)	{
				if((displayField != null) && (!(Object.prototype.toString.call(displayField) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayField EXPECTED TYPE: String", null, null);
				}
				this.displayField = displayField;
				this.keyModified.set("display_field", 1);

			}

			/**
			 * The method to get the searchLayoutFields
			 * @returns {List} An Array representing the searchLayoutFields
			 */
			getSearchLayoutFields()	{
				return this.searchLayoutFields;

			}

			/**
			 * The method to set the value to searchLayoutFields
			 * @param {List} searchLayoutFields An Array
			 */
			setSearchLayoutFields(searchLayoutFields)	{
				if((searchLayoutFields != null) && (!(Object.prototype.toString.call(searchLayoutFields) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: searchLayoutFields EXPECTED TYPE: Array", null, null);
				}
				this.searchLayoutFields = searchLayoutFields;
				this.keyModified.set("search_layout_fields", 1);

			}

			/**
			 * The method to get the kanbanViewSupported
			 * @returns {Boolean} A Boolean representing the kanbanViewSupported
			 */
			getKanbanViewSupported()	{
				return this.kanbanViewSupported;

			}

			/**
			 * The method to set the value to kanbanViewSupported
			 * @param {Boolean} kanbanViewSupported A Boolean
			 */
			setKanbanViewSupported(kanbanViewSupported)	{
				if((kanbanViewSupported != null) && (!(Object.prototype.toString.call(kanbanViewSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: kanbanViewSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.kanbanViewSupported = kanbanViewSupported;
				this.keyModified.set("kanban_view_supported", 1);

			}

			/**
			 * The method to get the showAsTab
			 * @returns {Boolean} A Boolean representing the showAsTab
			 */
			getShowAsTab()	{
				return this.showAsTab;

			}

			/**
			 * The method to set the value to showAsTab
			 * @param {Boolean} showAsTab A Boolean
			 */
			setShowAsTab(showAsTab)	{
				if((showAsTab != null) && (!(Object.prototype.toString.call(showAsTab) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showAsTab EXPECTED TYPE: Boolean", null, null);
				}
				this.showAsTab = showAsTab;
				this.keyModified.set("show_as_tab", 1);

			}

			/**
			 * The method to get the webLink
			 * @returns {String} A String representing the webLink
			 */
			getWebLink()	{
				return this.webLink;

			}

			/**
			 * The method to set the value to webLink
			 * @param {String} webLink A String
			 */
			setWebLink(webLink)	{
				if((webLink != null) && (!(Object.prototype.toString.call(webLink) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webLink EXPECTED TYPE: String", null, null);
				}
				this.webLink = webLink;
				this.keyModified.set("web_link", 1);

			}

			/**
			 * The method to get the sequenceNumber
			 * @returns {Integer} An Integer representing the sequenceNumber
			 */
			getSequenceNumber()	{
				return this.sequenceNumber;

			}

			/**
			 * The method to set the value to sequenceNumber
			 * @param {Integer} sequenceNumber An Integer
			 */
			setSequenceNumber(sequenceNumber)	{
				if((sequenceNumber != null) && (!(Object.prototype.toString.call(sequenceNumber) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumber EXPECTED TYPE: Integer", null, null);
				}
				this.sequenceNumber = sequenceNumber;
				this.keyModified.set("sequence_number", 1);

			}

			/**
			 * The method to get the singularLabel
			 * @returns {String} A String representing the singularLabel
			 */
			getSingularLabel()	{
				return this.singularLabel;

			}

			/**
			 * The method to set the value to singularLabel
			 * @param {String} singularLabel A String
			 */
			setSingularLabel(singularLabel)	{
				if((singularLabel != null) && (!(Object.prototype.toString.call(singularLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: singularLabel EXPECTED TYPE: String", null, null);
				}
				this.singularLabel = singularLabel;
				this.keyModified.set("singular_label", 1);

			}

			/**
			 * The method to get the viewable
			 * @returns {Boolean} A Boolean representing the viewable
			 */
			getViewable()	{
				return this.viewable;

			}

			/**
			 * The method to set the value to viewable
			 * @param {Boolean} viewable A Boolean
			 */
			setViewable(viewable)	{
				if((viewable != null) && (!(Object.prototype.toString.call(viewable) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewable EXPECTED TYPE: Boolean", null, null);
				}
				this.viewable = viewable;
				this.keyModified.set("viewable", 1);

			}

			/**
			 * The method to get the apiSupported
			 * @returns {Boolean} A Boolean representing the apiSupported
			 */
			getAPISupported()	{
				return this.apiSupported;

			}

			/**
			 * The method to set the value to apiSupported
			 * @param {Boolean} apiSupported A Boolean
			 */
			setAPISupported(apiSupported)	{
				if((apiSupported != null) && (!(Object.prototype.toString.call(apiSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.apiSupported = apiSupported;
				this.keyModified.set("api_supported", 1);

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
			 * The method to get the quickCreate
			 * @returns {Boolean} A Boolean representing the quickCreate
			 */
			getQuickCreate()	{
				return this.quickCreate;

			}

			/**
			 * The method to set the value to quickCreate
			 * @param {Boolean} quickCreate A Boolean
			 */
			setQuickCreate(quickCreate)	{
				if((quickCreate != null) && (!(Object.prototype.toString.call(quickCreate) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quickCreate EXPECTED TYPE: Boolean", null, null);
				}
				this.quickCreate = quickCreate;
				this.keyModified.set("quick_create", 1);

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
			 * The method to get the generatedType
			 * @returns {Choice} An instance of Choice
			 */
			getGeneratedType()	{
				return this.generatedType;

			}

			/**
			 * The method to set the value to generatedType
			 * @param {Choice} generatedType An instance of Choice
			 */
			setGeneratedType(generatedType)	{
				if((generatedType != null) && (!(generatedType instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: generatedType EXPECTED TYPE: Choice", null, null);
				}
				this.generatedType = generatedType;
				this.keyModified.set("generated_type", 1);

			}

			/**
			 * The method to get the feedsRequired
			 * @returns {Boolean} A Boolean representing the feedsRequired
			 */
			getFeedsRequired()	{
				return this.feedsRequired;

			}

			/**
			 * The method to set the value to feedsRequired
			 * @param {Boolean} feedsRequired A Boolean
			 */
			setFeedsRequired(feedsRequired)	{
				if((feedsRequired != null) && (!(Object.prototype.toString.call(feedsRequired) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: feedsRequired EXPECTED TYPE: Boolean", null, null);
				}
				this.feedsRequired = feedsRequired;
				this.keyModified.set("feeds_required", 1);

			}

			/**
			 * The method to get the scoringSupported
			 * @returns {Boolean} A Boolean representing the scoringSupported
			 */
			getScoringSupported()	{
				return this.scoringSupported;

			}

			/**
			 * The method to set the value to scoringSupported
			 * @param {Boolean} scoringSupported A Boolean
			 */
			setScoringSupported(scoringSupported)	{
				if((scoringSupported != null) && (!(Object.prototype.toString.call(scoringSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: scoringSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.scoringSupported = scoringSupported;
				this.keyModified.set("scoring_supported", 1);

			}

			/**
			 * The method to get the webformSupported
			 * @returns {Boolean} A Boolean representing the webformSupported
			 */
			getWebformSupported()	{
				return this.webformSupported;

			}

			/**
			 * The method to set the value to webformSupported
			 * @param {Boolean} webformSupported A Boolean
			 */
			setWebformSupported(webformSupported)	{
				if((webformSupported != null) && (!(Object.prototype.toString.call(webformSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webformSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.webformSupported = webformSupported;
				this.keyModified.set("webform_supported", 1);

			}

			/**
			 * The method to get the arguments
			 * @returns {List} An Array representing the arguments1
			 */
			getArguments()	{
				return this.arguments1;

			}

			/**
			 * The method to set the value to arguments
			 * @param {List} arguments1 An Array
			 */
			setArguments(arguments1)	{
				if((arguments1 != null) && (!(Object.prototype.toString.call(arguments1) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: arguments1 EXPECTED TYPE: Array", null, null);
				}
				this.arguments1 = arguments1;
				this.keyModified.set("arguments", 1);

			}

			/**
			 * The method to get the moduleName
			 * @returns {String} A String representing the moduleName
			 */
			getModuleName()	{
				return this.moduleName;

			}

			/**
			 * The method to set the value to moduleName
			 * @param {String} moduleName A String
			 */
			setModuleName(moduleName)	{
				if((moduleName != null) && (!(Object.prototype.toString.call(moduleName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleName EXPECTED TYPE: String", null, null);
				}
				this.moduleName = moduleName;
				this.keyModified.set("module_name", 1);

			}

			/**
			 * The method to get the businessCardFieldLimit
			 * @returns {Integer} An Integer representing the businessCardFieldLimit
			 */
			getBusinessCardFieldLimit()	{
				return this.businessCardFieldLimit;

			}

			/**
			 * The method to set the value to businessCardFieldLimit
			 * @param {Integer} businessCardFieldLimit An Integer
			 */
			setBusinessCardFieldLimit(businessCardFieldLimit)	{
				if((businessCardFieldLimit != null) && (!(Object.prototype.toString.call(businessCardFieldLimit) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businessCardFieldLimit EXPECTED TYPE: Integer", null, null);
				}
				this.businessCardFieldLimit = businessCardFieldLimit;
				this.keyModified.set("business_card_field_limit", 1);

			}

			/**
			 * The method to get the customView
			 * @returns {CustomView} An instance of CustomView
			 */
			getCustomView()	{
				return this.customView;

			}

			/**
			 * The method to set the value to customView
			 * @param {CustomView} customView An instance of CustomView
			 */
			setCustomView(customView)	{
				if((customView != null) && (!(customView instanceof ZCRM.CustomView.Model.CustomView))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customView EXPECTED TYPE: CustomView", null, null);
				}
				this.customView = customView;
				this.keyModified.set("custom_view", 1);

			}

			/**
			 * The method to get the parentModule
			 * @returns {Module} An instance of Module
			 */
			getParentModule()	{
				return this.parentModule;

			}

			/**
			 * The method to set the value to parentModule
			 * @param {Module} parentModule An instance of Module
			 */
			setParentModule(parentModule)	{
				if((parentModule != null) && (!(parentModule instanceof ZCRM.Module.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: parentModule EXPECTED TYPE: Module", null, null);
				}
				this.parentModule = parentModule;
				this.keyModified.set("parent_module", 1);

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
				if((territory != null) && (!(territory instanceof ZCRM.Module.Model.Territory))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territory EXPECTED TYPE: Territory", null, null);
				}
				this.territory = territory;
				this.keyModified.set("territory", 1);

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
				this.name=null;
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

		ActionWrapper : class{
			constructor(){

				this.modules=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the modules
			 * @returns {List} An Array representing the modules
			 */
			getModules()	{
				return this.modules;

			}

			/**
			 * The method to set the value to modules
			 * @param {List} modules An Array
			 */
			setModules(modules)	{
				if((modules != null) && (!(Object.prototype.toString.call(modules) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modules EXPECTED TYPE: Array", null, null);
				}
				this.modules = modules;
				this.keyModified.set("modules", 1);

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

				this.modules=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the modules
			 * @returns {List} An Array representing the modules
			 */
			getModules()	{
				return this.modules;

			}

			/**
			 * The method to set the value to modules
			 * @param {List} modules An Array
			 */
			setModules(modules)	{
				if((modules != null) && (!(Object.prototype.toString.call(modules) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modules EXPECTED TYPE: Array", null, null);
				}
				this.modules = modules;
				this.keyModified.set("modules", 1);

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

		Argument : class{
			constructor(){

				this.name=null;
				this.value=null;
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
			 * The method to get the value
			 * @returns {String} A String representing the value
			 */
			getValue()	{
				return this.value;

			}

			/**
			 * The method to set the value to value
			 * @param {String} value A String
			 */
			setValue(value)	{
				if((value != null) && (!(Object.prototype.toString.call(value) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: value EXPECTED TYPE: String", null, null);
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

		RelatedListProperties : class{
			constructor(){

				this.sortBy=null;
				this.fields=null;
				this.sortOrder=null;
				this.keyModified=new Map();
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

				this.modules=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the modules
			 * @returns {List} An Array representing the modules
			 */
			getModules()	{
				return this.modules;

			}

			/**
			 * The method to set the value to modules
			 * @param {List} modules An Array
			 */
			setModules(modules)	{
				if((modules != null) && (!(Object.prototype.toString.call(modules) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modules EXPECTED TYPE: Array", null, null);
				}
				this.modules = modules;
				this.keyModified.set("modules", 1);

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

		GetModulesHeader : {
			IF_MODIFIED_SINCE : 	new Header("If-Modified-Since", "Module.Model.GetModulesHeader"),


		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get modules
		 * @param {HeaderMap} headerInstance An instance of HeaderMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getModules(headerInstance=null){
			if((headerInstance != null) && (!(headerInstance instanceof HeaderMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/modules");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			handlerInstance.setHeader(headerInstance);
			return handlerInstance.apiCall("Module.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get module
		 * @param {String} apiName A String
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getModule(apiName){
			if((!(Object.prototype.toString.call(apiName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/modules/");
			apiPath = apiPath.concat(apiName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Module.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update module by api name
		 * @param {String} apiName A String
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateModuleByAPIName(apiName, request){
			if((!(Object.prototype.toString.call(apiName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Module.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/modules/");
			apiPath = apiPath.concat(apiName.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			return handlerInstance.apiCall("Module.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update module by id
		 * @param {Long} id A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateModuleById(id, request){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Module.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/modules/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			return handlerInstance.apiCall("Module.Model.ActionHandler", "application/json");

		}
	},

}