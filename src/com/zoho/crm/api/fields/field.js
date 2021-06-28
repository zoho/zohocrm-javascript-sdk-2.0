ZCRM.Field = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		RelatedDetails : class{
			constructor(){

				this.displayLabel=null;
				this.apiName=null;
				this.module=null;
				this.id=null;
				this.type=null;
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
			 * @returns {Module} An instance of Module
			 */
			getModule()	{
				return this.module;

			}

			/**
			 * The method to set the value to module
			 * @param {Module} module An instance of Module
			 */
			setModule(module)	{
				if((module != null) && (!(module instanceof ZCRM.Field.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: Module", null, null);
				}
				this.module = module;
				this.keyModified.set("module", 1);

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
				this.keyModified.set("_type", 1);

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
			constructor(){

				this.systemMandatory=null;
				this.webhook=null;
				this.private1=null;
				this.layouts=null;
				this.content=null;
				this.columnName=null;
				this.type=null;
				this.transitionSequence=null;
				this.personalityName=null;
				this.message=null;
				this.mandatory=null;
				this.criteria=null;
				this.relatedDetails=null;
				this.jsonType=null;
				this.crypt=null;
				this.fieldLabel=null;
				this.tooltip=null;
				this.createdSource=null;
				this.fieldReadOnly=null;
				this.displayLabel=null;
				this.readOnly=null;
				this.associationDetails=null;
				this.quickSequenceNumber=null;
				this.businesscardSupported=null;
				this.multiModuleLookup=null;
				this.currency=null;
				this.id=null;
				this.customField=null;
				this.lookup=null;
				this.visible=null;
				this.length=null;
				this.viewType=null;
				this.subform=null;
				this.apiName=null;
				this.unique=null;
				this.historyTracking=null;
				this.dataType=null;
				this.formula=null;
				this.decimalPlace=null;
				this.massUpdate=null;
				this.blueprintSupported=null;
				this.multiselectlookup=null;
				this.pickListValues=null;
				this.autoNumber=null;
				this.defaultValue=null;
				this.sectionId=null;
				this.validationRule=null;
				this.convertMapping=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the systemMandatory
			 * @returns {Boolean} A Boolean representing the systemMandatory
			 */
			getSystemMandatory()	{
				return this.systemMandatory;

			}

			/**
			 * The method to set the value to systemMandatory
			 * @param {Boolean} systemMandatory A Boolean
			 */
			setSystemMandatory(systemMandatory)	{
				if((systemMandatory != null) && (!(Object.prototype.toString.call(systemMandatory) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemMandatory EXPECTED TYPE: Boolean", null, null);
				}
				this.systemMandatory = systemMandatory;
				this.keyModified.set("system_mandatory", 1);

			}

			/**
			 * The method to get the webhook
			 * @returns {Boolean} A Boolean representing the webhook
			 */
			getWebhook()	{
				return this.webhook;

			}

			/**
			 * The method to set the value to webhook
			 * @param {Boolean} webhook A Boolean
			 */
			setWebhook(webhook)	{
				if((webhook != null) && (!(Object.prototype.toString.call(webhook) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webhook EXPECTED TYPE: Boolean", null, null);
				}
				this.webhook = webhook;
				this.keyModified.set("webhook", 1);

			}

			/**
			 * The method to get the private
			 * @returns {Private} An instance of Private
			 */
			getPrivate()	{
				return this.private1;

			}

			/**
			 * The method to set the value to private
			 * @param {Private} private1 An instance of Private
			 */
			setPrivate(private1)	{
				if((private1 != null) && (!(private1 instanceof ZCRM.Field.Model.Private))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: private1 EXPECTED TYPE: Private", null, null);
				}
				this.private1 = private1;
				this.keyModified.set("private", 1);

			}

			/**
			 * The method to get the layouts
			 * @returns {Layout} An instance of Layout
			 */
			getLayouts()	{
				return this.layouts;

			}

			/**
			 * The method to set the value to layouts
			 * @param {Layout} layouts An instance of Layout
			 */
			setLayouts(layouts)	{
				if((layouts != null) && (!(layouts instanceof ZCRM.Layout.Model.Layout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layouts EXPECTED TYPE: Layout", null, null);
				}
				this.layouts = layouts;
				this.keyModified.set("layouts", 1);

			}

			/**
			 * The method to get the content
			 * @returns {String} A String representing the content
			 */
			getContent()	{
				return this.content;

			}

			/**
			 * The method to set the value to content
			 * @param {String} content A String
			 */
			setContent(content)	{
				if((content != null) && (!(Object.prototype.toString.call(content) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: content EXPECTED TYPE: String", null, null);
				}
				this.content = content;
				this.keyModified.set("content", 1);

			}

			/**
			 * The method to get the columnName
			 * @returns {String} A String representing the columnName
			 */
			getColumnName()	{
				return this.columnName;

			}

			/**
			 * The method to set the value to columnName
			 * @param {String} columnName A String
			 */
			setColumnName(columnName)	{
				if((columnName != null) && (!(Object.prototype.toString.call(columnName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnName EXPECTED TYPE: String", null, null);
				}
				this.columnName = columnName;
				this.keyModified.set("column_name", 1);

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
				this.keyModified.set("_type", 1);

			}

			/**
			 * The method to get the transitionSequence
			 * @returns {Integer} An Integer representing the transitionSequence
			 */
			getTransitionSequence()	{
				return this.transitionSequence;

			}

			/**
			 * The method to set the value to transitionSequence
			 * @param {Integer} transitionSequence An Integer
			 */
			setTransitionSequence(transitionSequence)	{
				if((transitionSequence != null) && (!(Object.prototype.toString.call(transitionSequence) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitionSequence EXPECTED TYPE: Integer", null, null);
				}
				this.transitionSequence = transitionSequence;
				this.keyModified.set("transition_sequence", 1);

			}

			/**
			 * The method to get the personalityName
			 * @returns {String} A String representing the personalityName
			 */
			getPersonalityName()	{
				return this.personalityName;

			}

			/**
			 * The method to set the value to personalityName
			 * @param {String} personalityName A String
			 */
			setPersonalityName(personalityName)	{
				if((personalityName != null) && (!(Object.prototype.toString.call(personalityName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: personalityName EXPECTED TYPE: String", null, null);
				}
				this.personalityName = personalityName;
				this.keyModified.set("personality_name", 1);

			}

			/**
			 * The method to get the message
			 * @returns {String} A String representing the message
			 */
			getMessage()	{
				return this.message;

			}

			/**
			 * The method to set the value to message
			 * @param {String} message A String
			 */
			setMessage(message)	{
				if((message != null) && (!(Object.prototype.toString.call(message) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: String", null, null);
				}
				this.message = message;
				this.keyModified.set("message", 1);

			}

			/**
			 * The method to get the mandatory
			 * @returns {Boolean} A Boolean representing the mandatory
			 */
			getMandatory()	{
				return this.mandatory;

			}

			/**
			 * The method to set the value to mandatory
			 * @param {Boolean} mandatory A Boolean
			 */
			setMandatory(mandatory)	{
				if((mandatory != null) && (!(Object.prototype.toString.call(mandatory) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mandatory EXPECTED TYPE: Boolean", null, null);
				}
				this.mandatory = mandatory;
				this.keyModified.set("mandatory", 1);

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
			 * The method to get the relatedDetails
			 * @returns {RelatedDetails} An instance of RelatedDetails
			 */
			getRelatedDetails()	{
				return this.relatedDetails;

			}

			/**
			 * The method to set the value to relatedDetails
			 * @param {RelatedDetails} relatedDetails An instance of RelatedDetails
			 */
			setRelatedDetails(relatedDetails)	{
				if((relatedDetails != null) && (!(relatedDetails instanceof ZCRM.Field.Model.RelatedDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedDetails EXPECTED TYPE: RelatedDetails", null, null);
				}
				this.relatedDetails = relatedDetails;
				this.keyModified.set("related_details", 1);

			}

			/**
			 * The method to get the jsonType
			 * @returns {String} A String representing the jsonType
			 */
			getJsonType()	{
				return this.jsonType;

			}

			/**
			 * The method to set the value to jsonType
			 * @param {String} jsonType A String
			 */
			setJsonType(jsonType)	{
				if((jsonType != null) && (!(Object.prototype.toString.call(jsonType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jsonType EXPECTED TYPE: String", null, null);
				}
				this.jsonType = jsonType;
				this.keyModified.set("json_type", 1);

			}

			/**
			 * The method to get the crypt
			 * @returns {Crypt} An instance of Crypt
			 */
			getCrypt()	{
				return this.crypt;

			}

			/**
			 * The method to set the value to crypt
			 * @param {Crypt} crypt An instance of Crypt
			 */
			setCrypt(crypt)	{
				if((crypt != null) && (!(crypt instanceof ZCRM.Field.Model.Crypt))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: crypt EXPECTED TYPE: Crypt", null, null);
				}
				this.crypt = crypt;
				this.keyModified.set("crypt", 1);

			}

			/**
			 * The method to get the fieldLabel
			 * @returns {String} A String representing the fieldLabel
			 */
			getFieldLabel()	{
				return this.fieldLabel;

			}

			/**
			 * The method to set the value to fieldLabel
			 * @param {String} fieldLabel A String
			 */
			setFieldLabel(fieldLabel)	{
				if((fieldLabel != null) && (!(Object.prototype.toString.call(fieldLabel) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldLabel EXPECTED TYPE: String", null, null);
				}
				this.fieldLabel = fieldLabel;
				this.keyModified.set("field_label", 1);

			}

			/**
			 * The method to get the tooltip
			 * @returns {ToolTip} An instance of ToolTip
			 */
			getTooltip()	{
				return this.tooltip;

			}

			/**
			 * The method to set the value to tooltip
			 * @param {ToolTip} tooltip An instance of ToolTip
			 */
			setTooltip(tooltip)	{
				if((tooltip != null) && (!(tooltip instanceof ZCRM.Field.Model.ToolTip))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: ToolTip", null, null);
				}
				this.tooltip = tooltip;
				this.keyModified.set("tooltip", 1);

			}

			/**
			 * The method to get the createdSource
			 * @returns {String} A String representing the createdSource
			 */
			getCreatedSource()	{
				return this.createdSource;

			}

			/**
			 * The method to set the value to createdSource
			 * @param {String} createdSource A String
			 */
			setCreatedSource(createdSource)	{
				if((createdSource != null) && (!(Object.prototype.toString.call(createdSource) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdSource EXPECTED TYPE: String", null, null);
				}
				this.createdSource = createdSource;
				this.keyModified.set("created_source", 1);

			}

			/**
			 * The method to get the fieldReadOnly
			 * @returns {Boolean} A Boolean representing the fieldReadOnly
			 */
			getFieldReadOnly()	{
				return this.fieldReadOnly;

			}

			/**
			 * The method to set the value to fieldReadOnly
			 * @param {Boolean} fieldReadOnly A Boolean
			 */
			setFieldReadOnly(fieldReadOnly)	{
				if((fieldReadOnly != null) && (!(Object.prototype.toString.call(fieldReadOnly) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldReadOnly EXPECTED TYPE: Boolean", null, null);
				}
				this.fieldReadOnly = fieldReadOnly;
				this.keyModified.set("field_read_only", 1);

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
			 * The method to get the readOnly
			 * @returns {Boolean} A Boolean representing the readOnly
			 */
			getReadOnly()	{
				return this.readOnly;

			}

			/**
			 * The method to set the value to readOnly
			 * @param {Boolean} readOnly A Boolean
			 */
			setReadOnly(readOnly)	{
				if((readOnly != null) && (!(Object.prototype.toString.call(readOnly) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: readOnly EXPECTED TYPE: Boolean", null, null);
				}
				this.readOnly = readOnly;
				this.keyModified.set("read_only", 1);

			}

			/**
			 * The method to get the associationDetails
			 * @returns {AssociationDetails} An instance of AssociationDetails
			 */
			getAssociationDetails()	{
				return this.associationDetails;

			}

			/**
			 * The method to set the value to associationDetails
			 * @param {AssociationDetails} associationDetails An instance of AssociationDetails
			 */
			setAssociationDetails(associationDetails)	{
				if((associationDetails != null) && (!(associationDetails instanceof ZCRM.Field.Model.AssociationDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associationDetails EXPECTED TYPE: AssociationDetails", null, null);
				}
				this.associationDetails = associationDetails;
				this.keyModified.set("association_details", 1);

			}

			/**
			 * The method to get the quickSequenceNumber
			 * @returns {Integer} An Integer representing the quickSequenceNumber
			 */
			getQuickSequenceNumber()	{
				return this.quickSequenceNumber;

			}

			/**
			 * The method to set the value to quickSequenceNumber
			 * @param {Integer} quickSequenceNumber An Integer
			 */
			setQuickSequenceNumber(quickSequenceNumber)	{
				if((quickSequenceNumber != null) && (!(Object.prototype.toString.call(quickSequenceNumber) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quickSequenceNumber EXPECTED TYPE: Integer", null, null);
				}
				this.quickSequenceNumber = quickSequenceNumber;
				this.keyModified.set("quick_sequence_number", 1);

			}

			/**
			 * The method to get the businesscardSupported
			 * @returns {Boolean} A Boolean representing the businesscardSupported
			 */
			getBusinesscardSupported()	{
				return this.businesscardSupported;

			}

			/**
			 * The method to set the value to businesscardSupported
			 * @param {Boolean} businesscardSupported A Boolean
			 */
			setBusinesscardSupported(businesscardSupported)	{
				if((businesscardSupported != null) && (!(Object.prototype.toString.call(businesscardSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businesscardSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.businesscardSupported = businesscardSupported;
				this.keyModified.set("businesscard_supported", 1);

			}

			/**
			 * The method to get the multiModuleLookup
			 * @returns {Map} A Map representing the multiModuleLookup
			 */
			getMultiModuleLookup()	{
				return this.multiModuleLookup;

			}

			/**
			 * The method to set the value to multiModuleLookup
			 * @param {Map} multiModuleLookup A Map
			 */
			setMultiModuleLookup(multiModuleLookup)	{
				if((multiModuleLookup != null) && (!(Object.prototype.toString.call(multiModuleLookup) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiModuleLookup EXPECTED TYPE: Map", null, null);
				}
				this.multiModuleLookup = multiModuleLookup;
				this.keyModified.set("multi_module_lookup", 1);

			}

			/**
			 * The method to get the currency
			 * @returns {Currency} An instance of Currency
			 */
			getCurrency()	{
				return this.currency;

			}

			/**
			 * The method to set the value to currency
			 * @param {Currency} currency An instance of Currency
			 */
			setCurrency(currency)	{
				if((currency != null) && (!(currency instanceof ZCRM.Field.Model.Currency))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: Currency", null, null);
				}
				this.currency = currency;
				this.keyModified.set("currency", 1);

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
			 * The method to get the customField
			 * @returns {Boolean} A Boolean representing the customField
			 */
			getCustomField()	{
				return this.customField;

			}

			/**
			 * The method to set the value to customField
			 * @param {Boolean} customField A Boolean
			 */
			setCustomField(customField)	{
				if((customField != null) && (!(Object.prototype.toString.call(customField) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customField EXPECTED TYPE: Boolean", null, null);
				}
				this.customField = customField;
				this.keyModified.set("custom_field", 1);

			}

			/**
			 * The method to get the lookup
			 * @returns {Module} An instance of Module
			 */
			getLookup()	{
				return this.lookup;

			}

			/**
			 * The method to set the value to lookup
			 * @param {Module} lookup An instance of Module
			 */
			setLookup(lookup)	{
				if((lookup != null) && (!(lookup instanceof ZCRM.Field.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookup EXPECTED TYPE: Module", null, null);
				}
				this.lookup = lookup;
				this.keyModified.set("lookup", 1);

			}

			/**
			 * The method to get the visible
			 * @returns {Boolean} A Boolean representing the visible
			 */
			getVisible()	{
				return this.visible;

			}

			/**
			 * The method to set the value to visible
			 * @param {Boolean} visible A Boolean
			 */
			setVisible(visible)	{
				if((visible != null) && (!(Object.prototype.toString.call(visible) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visible EXPECTED TYPE: Boolean", null, null);
				}
				this.visible = visible;
				this.keyModified.set("visible", 1);

			}

			/**
			 * The method to get the length
			 * @returns {Integer} An Integer representing the length
			 */
			getLength()	{
				return this.length;

			}

			/**
			 * The method to set the value to length
			 * @param {Integer} length An Integer
			 */
			setLength(length)	{
				if((length != null) && (!(Object.prototype.toString.call(length) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: length EXPECTED TYPE: Integer", null, null);
				}
				this.length = length;
				this.keyModified.set("length", 1);

			}

			/**
			 * The method to get the viewType
			 * @returns {ViewType} An instance of ViewType
			 */
			getViewType()	{
				return this.viewType;

			}

			/**
			 * The method to set the value to viewType
			 * @param {ViewType} viewType An instance of ViewType
			 */
			setViewType(viewType)	{
				if((viewType != null) && (!(viewType instanceof ZCRM.Field.Model.ViewType))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewType EXPECTED TYPE: ViewType", null, null);
				}
				this.viewType = viewType;
				this.keyModified.set("view_type", 1);

			}

			/**
			 * The method to get the subform
			 * @returns {Module} An instance of Module
			 */
			getSubform()	{
				return this.subform;

			}

			/**
			 * The method to set the value to subform
			 * @param {Module} subform An instance of Module
			 */
			setSubform(subform)	{
				if((subform != null) && (!(subform instanceof ZCRM.Field.Model.Module))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subform EXPECTED TYPE: Module", null, null);
				}
				this.subform = subform;
				this.keyModified.set("subform", 1);

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
			 * The method to get the unique
			 * @returns {Unique} An instance of Unique
			 */
			getUnique()	{
				return this.unique;

			}

			/**
			 * The method to set the value to unique
			 * @param {Unique} unique An instance of Unique
			 */
			setUnique(unique)	{
				if((unique != null) && (!(unique instanceof ZCRM.Field.Model.Unique))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unique EXPECTED TYPE: Unique", null, null);
				}
				this.unique = unique;
				this.keyModified.set("unique", 1);

			}

			/**
			 * The method to get the historyTracking
			 * @returns {Boolean} A Boolean representing the historyTracking
			 */
			getHistoryTracking()	{
				return this.historyTracking;

			}

			/**
			 * The method to set the value to historyTracking
			 * @param {Boolean} historyTracking A Boolean
			 */
			setHistoryTracking(historyTracking)	{
				if((historyTracking != null) && (!(Object.prototype.toString.call(historyTracking) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: historyTracking EXPECTED TYPE: Boolean", null, null);
				}
				this.historyTracking = historyTracking;
				this.keyModified.set("history_tracking", 1);

			}

			/**
			 * The method to get the dataType
			 * @returns {String} A String representing the dataType
			 */
			getDataType()	{
				return this.dataType;

			}

			/**
			 * The method to set the value to dataType
			 * @param {String} dataType A String
			 */
			setDataType(dataType)	{
				if((dataType != null) && (!(Object.prototype.toString.call(dataType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataType EXPECTED TYPE: String", null, null);
				}
				this.dataType = dataType;
				this.keyModified.set("data_type", 1);

			}

			/**
			 * The method to get the formula
			 * @returns {Formula} An instance of Formula
			 */
			getFormula()	{
				return this.formula;

			}

			/**
			 * The method to set the value to formula
			 * @param {Formula} formula An instance of Formula
			 */
			setFormula(formula)	{
				if((formula != null) && (!(formula instanceof ZCRM.Field.Model.Formula))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formula EXPECTED TYPE: Formula", null, null);
				}
				this.formula = formula;
				this.keyModified.set("formula", 1);

			}

			/**
			 * The method to get the decimalPlace
			 * @returns {Integer} An Integer representing the decimalPlace
			 */
			getDecimalPlace()	{
				return this.decimalPlace;

			}

			/**
			 * The method to set the value to decimalPlace
			 * @param {Integer} decimalPlace An Integer
			 */
			setDecimalPlace(decimalPlace)	{
				if((decimalPlace != null) && (!(Object.prototype.toString.call(decimalPlace) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalPlace EXPECTED TYPE: Integer", null, null);
				}
				this.decimalPlace = decimalPlace;
				this.keyModified.set("decimal_place", 1);

			}

			/**
			 * The method to get the massUpdate
			 * @returns {Boolean} A Boolean representing the massUpdate
			 */
			getMassUpdate()	{
				return this.massUpdate;

			}

			/**
			 * The method to set the value to massUpdate
			 * @param {Boolean} massUpdate A Boolean
			 */
			setMassUpdate(massUpdate)	{
				if((massUpdate != null) && (!(Object.prototype.toString.call(massUpdate) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: massUpdate EXPECTED TYPE: Boolean", null, null);
				}
				this.massUpdate = massUpdate;
				this.keyModified.set("mass_update", 1);

			}

			/**
			 * The method to get the blueprintSupported
			 * @returns {Boolean} A Boolean representing the blueprintSupported
			 */
			getBlueprintSupported()	{
				return this.blueprintSupported;

			}

			/**
			 * The method to set the value to blueprintSupported
			 * @param {Boolean} blueprintSupported A Boolean
			 */
			setBlueprintSupported(blueprintSupported)	{
				if((blueprintSupported != null) && (!(Object.prototype.toString.call(blueprintSupported) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blueprintSupported EXPECTED TYPE: Boolean", null, null);
				}
				this.blueprintSupported = blueprintSupported;
				this.keyModified.set("blueprint_supported", 1);

			}

			/**
			 * The method to get the multiselectlookup
			 * @returns {MultiSelectLookup} An instance of MultiSelectLookup
			 */
			getMultiselectlookup()	{
				return this.multiselectlookup;

			}

			/**
			 * The method to set the value to multiselectlookup
			 * @param {MultiSelectLookup} multiselectlookup An instance of MultiSelectLookup
			 */
			setMultiselectlookup(multiselectlookup)	{
				if((multiselectlookup != null) && (!(multiselectlookup instanceof ZCRM.Field.Model.MultiSelectLookup))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiselectlookup EXPECTED TYPE: MultiSelectLookup", null, null);
				}
				this.multiselectlookup = multiselectlookup;
				this.keyModified.set("multiselectlookup", 1);

			}

			/**
			 * The method to get the pickListValues
			 * @returns {List} An Array representing the pickListValues
			 */
			getPickListValues()	{
				return this.pickListValues;

			}

			/**
			 * The method to set the value to pickListValues
			 * @param {List} pickListValues An Array
			 */
			setPickListValues(pickListValues)	{
				if((pickListValues != null) && (!(Object.prototype.toString.call(pickListValues) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pickListValues EXPECTED TYPE: Array", null, null);
				}
				this.pickListValues = pickListValues;
				this.keyModified.set("pick_list_values", 1);

			}

			/**
			 * The method to get the autoNumber
			 * @returns {AutoNumber} An instance of AutoNumber
			 */
			getAutoNumber()	{
				return this.autoNumber;

			}

			/**
			 * The method to set the value to autoNumber
			 * @param {AutoNumber} autoNumber An instance of AutoNumber
			 */
			setAutoNumber(autoNumber)	{
				if((autoNumber != null) && (!(autoNumber instanceof ZCRM.Field.Model.AutoNumber))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autoNumber EXPECTED TYPE: AutoNumber", null, null);
				}
				this.autoNumber = autoNumber;
				this.keyModified.set("auto_number", 1);

			}

			/**
			 * The method to get the defaultValue
			 * @returns {String} A String representing the defaultValue
			 */
			getDefaultValue()	{
				return this.defaultValue;

			}

			/**
			 * The method to set the value to defaultValue
			 * @param {String} defaultValue A String
			 */
			setDefaultValue(defaultValue)	{
				if((defaultValue != null) && (!(Object.prototype.toString.call(defaultValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultValue EXPECTED TYPE: String", null, null);
				}
				this.defaultValue = defaultValue;
				this.keyModified.set("default_value", 1);

			}

			/**
			 * The method to get the sectionId
			 * @returns {Integer} An Integer representing the sectionId
			 */
			getSectionId()	{
				return this.sectionId;

			}

			/**
			 * The method to set the value to sectionId
			 * @param {Integer} sectionId An Integer
			 */
			setSectionId(sectionId)	{
				if((sectionId != null) && (!(Object.prototype.toString.call(sectionId) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sectionId EXPECTED TYPE: Integer", null, null);
				}
				this.sectionId = sectionId;
				this.keyModified.set("section_id", 1);

			}

			/**
			 * The method to get the validationRule
			 * @returns {Map} A Map representing the validationRule
			 */
			getValidationRule()	{
				return this.validationRule;

			}

			/**
			 * The method to set the value to validationRule
			 * @param {Map} validationRule A Map
			 */
			setValidationRule(validationRule)	{
				if((validationRule != null) && (!(Object.prototype.toString.call(validationRule) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: validationRule EXPECTED TYPE: Map", null, null);
				}
				this.validationRule = validationRule;
				this.keyModified.set("validation_rule", 1);

			}

			/**
			 * The method to get the convertMapping
			 * @returns {Map} A Map representing the convertMapping
			 */
			getConvertMapping()	{
				return this.convertMapping;

			}

			/**
			 * The method to set the value to convertMapping
			 * @param {Map} convertMapping A Map
			 */
			setConvertMapping(convertMapping)	{
				if((convertMapping != null) && (!(Object.prototype.toString.call(convertMapping) == "[object Map]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertMapping EXPECTED TYPE: Map", null, null);
				}
				this.convertMapping = convertMapping;
				this.keyModified.set("convert_mapping", 1);

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

		Unique : class{
			constructor(){

				this.casesensitive=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the casesensitive
			 * @returns {String} A String representing the casesensitive
			 */
			getCasesensitive()	{
				return this.casesensitive;

			}

			/**
			 * The method to set the value to casesensitive
			 * @param {String} casesensitive A String
			 */
			setCasesensitive(casesensitive)	{
				if((casesensitive != null) && (!(Object.prototype.toString.call(casesensitive) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: casesensitive EXPECTED TYPE: String", null, null);
				}
				this.casesensitive = casesensitive;
				this.keyModified.set("casesensitive", 1);

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

		Crypt : class{
			constructor(){

				this.mode=null;
				this.column=null;
				this.encfldids=null;
				this.notify=null;
				this.table=null;
				this.status=null;
				this.keyModified=new Map();
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
			 * The method to get the column
			 * @returns {String} A String representing the column
			 */
			getColumn()	{
				return this.column;

			}

			/**
			 * The method to set the value to column
			 * @param {String} column A String
			 */
			setColumn(column)	{
				if((column != null) && (!(Object.prototype.toString.call(column) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: column EXPECTED TYPE: String", null, null);
				}
				this.column = column;
				this.keyModified.set("column", 1);

			}

			/**
			 * The method to get the encfldids
			 * @returns {List} An Array representing the encfldids
			 */
			getEncfldids()	{
				return this.encfldids;

			}

			/**
			 * The method to set the value to encfldids
			 * @param {List} encfldids An Array
			 */
			setEncfldids(encfldids)	{
				if((encfldids != null) && (!(Object.prototype.toString.call(encfldids) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: encfldids EXPECTED TYPE: Array", null, null);
				}
				this.encfldids = encfldids;
				this.keyModified.set("encFldIds", 1);

			}

			/**
			 * The method to get the notify
			 * @returns {String} A String representing the notify
			 */
			getNotify()	{
				return this.notify;

			}

			/**
			 * The method to set the value to notify
			 * @param {String} notify A String
			 */
			setNotify(notify)	{
				if((notify != null) && (!(Object.prototype.toString.call(notify) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notify EXPECTED TYPE: String", null, null);
				}
				this.notify = notify;
				this.keyModified.set("notify", 1);

			}

			/**
			 * The method to get the table
			 * @returns {String} A String representing the table
			 */
			getTable()	{
				return this.table;

			}

			/**
			 * The method to set the value to table
			 * @param {String} table A String
			 */
			setTable(table)	{
				if((table != null) && (!(Object.prototype.toString.call(table) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: table EXPECTED TYPE: String", null, null);
				}
				this.table = table;
				this.keyModified.set("table", 1);

			}

			/**
			 * The method to get the status
			 * @returns {Integer} An Integer representing the status
			 */
			getStatus()	{
				return this.status;

			}

			/**
			 * The method to set the value to status
			 * @param {Integer} status An Integer
			 */
			setStatus(status)	{
				if((status != null) && (!(Object.prototype.toString.call(status) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Integer", null, null);
				}
				this.status = status;
				this.keyModified.set("status", 1);

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

		ViewType : class{
			constructor(){

				this.view=null;
				this.edit=null;
				this.create=null;
				this.quickCreate=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the view
			 * @returns {Boolean} A Boolean representing the view
			 */
			getView()	{
				return this.view;

			}

			/**
			 * The method to set the value to view
			 * @param {Boolean} view A Boolean
			 */
			setView(view)	{
				if((view != null) && (!(Object.prototype.toString.call(view) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: view EXPECTED TYPE: Boolean", null, null);
				}
				this.view = view;
				this.keyModified.set("view", 1);

			}

			/**
			 * The method to get the edit
			 * @returns {Boolean} A Boolean representing the edit
			 */
			getEdit()	{
				return this.edit;

			}

			/**
			 * The method to set the value to edit
			 * @param {Boolean} edit A Boolean
			 */
			setEdit(edit)	{
				if((edit != null) && (!(Object.prototype.toString.call(edit) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: edit EXPECTED TYPE: Boolean", null, null);
				}
				this.edit = edit;
				this.keyModified.set("edit", 1);

			}

			/**
			 * The method to get the create
			 * @returns {Boolean} A Boolean representing the create
			 */
			getCreate()	{
				return this.create;

			}

			/**
			 * The method to set the value to create
			 * @param {Boolean} create A Boolean
			 */
			setCreate(create)	{
				if((create != null) && (!(Object.prototype.toString.call(create) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: create EXPECTED TYPE: Boolean", null, null);
				}
				this.create = create;
				this.keyModified.set("create", 1);

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

		AutoNumber : class{
			constructor(){

				this.prefix=null;
				this.suffix=null;
				this.startNumber=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the prefix
			 * @returns {String} A String representing the prefix
			 */
			getPrefix()	{
				return this.prefix;

			}

			/**
			 * The method to set the value to prefix
			 * @param {String} prefix A String
			 */
			setPrefix(prefix)	{
				if((prefix != null) && (!(Object.prototype.toString.call(prefix) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: prefix EXPECTED TYPE: String", null, null);
				}
				this.prefix = prefix;
				this.keyModified.set("prefix", 1);

			}

			/**
			 * The method to get the suffix
			 * @returns {String} A String representing the suffix
			 */
			getSuffix()	{
				return this.suffix;

			}

			/**
			 * The method to set the value to suffix
			 * @param {String} suffix A String
			 */
			setSuffix(suffix)	{
				if((suffix != null) && (!(Object.prototype.toString.call(suffix) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: suffix EXPECTED TYPE: String", null, null);
				}
				this.suffix = suffix;
				this.keyModified.set("suffix", 1);

			}

			/**
			 * The method to get the startNumber
			 * @returns {Integer} An Integer representing the startNumber
			 */
			getStartNumber()	{
				return this.startNumber;

			}

			/**
			 * The method to set the value to startNumber
			 * @param {Integer} startNumber An Integer
			 */
			setStartNumber(startNumber)	{
				if((startNumber != null) && (!(Object.prototype.toString.call(startNumber) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: startNumber EXPECTED TYPE: Integer", null, null);
				}
				this.startNumber = startNumber;
				this.keyModified.set("start_number", 1);

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

		MultiSelectLookup : class{
			constructor(){

				this.displayLabel=null;
				this.linkingModule=null;
				this.lookupApiname=null;
				this.apiName=null;
				this.connectedlookupApiname=null;
				this.id=null;
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
			 * The method to get the linkingModule
			 * @returns {String} A String representing the linkingModule
			 */
			getLinkingModule()	{
				return this.linkingModule;

			}

			/**
			 * The method to set the value to linkingModule
			 * @param {String} linkingModule A String
			 */
			setLinkingModule(linkingModule)	{
				if((linkingModule != null) && (!(Object.prototype.toString.call(linkingModule) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkingModule EXPECTED TYPE: String", null, null);
				}
				this.linkingModule = linkingModule;
				this.keyModified.set("linking_module", 1);

			}

			/**
			 * The method to get the lookupApiname
			 * @returns {String} A String representing the lookupApiname
			 */
			getLookupApiname()	{
				return this.lookupApiname;

			}

			/**
			 * The method to set the value to lookupApiname
			 * @param {String} lookupApiname A String
			 */
			setLookupApiname(lookupApiname)	{
				if((lookupApiname != null) && (!(Object.prototype.toString.call(lookupApiname) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookupApiname EXPECTED TYPE: String", null, null);
				}
				this.lookupApiname = lookupApiname;
				this.keyModified.set("lookup_apiname", 1);

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
			 * The method to get the connectedlookupApiname
			 * @returns {String} A String representing the connectedlookupApiname
			 */
			getConnectedlookupApiname()	{
				return this.connectedlookupApiname;

			}

			/**
			 * The method to set the value to connectedlookupApiname
			 * @param {String} connectedlookupApiname A String
			 */
			setConnectedlookupApiname(connectedlookupApiname)	{
				if((connectedlookupApiname != null) && (!(Object.prototype.toString.call(connectedlookupApiname) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: connectedlookupApiname EXPECTED TYPE: String", null, null);
				}
				this.connectedlookupApiname = connectedlookupApiname;
				this.keyModified.set("connectedlookup_apiname", 1);

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

		PickListValue : class{
			constructor(){

				this.displayValue=null;
				this.sequenceNumber=null;
				this.expectedDataType=null;
				this.maps=null;
				this.actualValue=null;
				this.sysRefName=null;
				this.type=null;
				this.keyModified=new Map();
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
			 * The method to get the expectedDataType
			 * @returns {String} A String representing the expectedDataType
			 */
			getExpectedDataType()	{
				return this.expectedDataType;

			}

			/**
			 * The method to set the value to expectedDataType
			 * @param {String} expectedDataType A String
			 */
			setExpectedDataType(expectedDataType)	{
				if((expectedDataType != null) && (!(Object.prototype.toString.call(expectedDataType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expectedDataType EXPECTED TYPE: String", null, null);
				}
				this.expectedDataType = expectedDataType;
				this.keyModified.set("expected_data_type", 1);

			}

			/**
			 * The method to get the maps
			 * @returns {List} An Array representing the maps
			 */
			getMaps()	{
				return this.maps;

			}

			/**
			 * The method to set the value to maps
			 * @param {List} maps An Array
			 */
			setMaps(maps)	{
				if((maps != null) && (!(Object.prototype.toString.call(maps) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: maps EXPECTED TYPE: Array", null, null);
				}
				this.maps = maps;
				this.keyModified.set("maps", 1);

			}

			/**
			 * The method to get the actualValue
			 * @returns {String} A String representing the actualValue
			 */
			getActualValue()	{
				return this.actualValue;

			}

			/**
			 * The method to set the value to actualValue
			 * @param {String} actualValue A String
			 */
			setActualValue(actualValue)	{
				if((actualValue != null) && (!(Object.prototype.toString.call(actualValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: actualValue EXPECTED TYPE: String", null, null);
				}
				this.actualValue = actualValue;
				this.keyModified.set("actual_value", 1);

			}

			/**
			 * The method to get the sysRefName
			 * @returns {String} A String representing the sysRefName
			 */
			getSysRefName()	{
				return this.sysRefName;

			}

			/**
			 * The method to set the value to sysRefName
			 * @param {String} sysRefName A String
			 */
			setSysRefName(sysRefName)	{
				if((sysRefName != null) && (!(Object.prototype.toString.call(sysRefName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sysRefName EXPECTED TYPE: String", null, null);
				}
				this.sysRefName = sysRefName;
				this.keyModified.set("sys_ref_name", 1);

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

		ResponseWrapper : class{
			constructor(){

				this.fields=null;
				this.keyModified=new Map();
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

		ToolTip : class{
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

		Currency : class{
			constructor(){

				this.roundingOption=null;
				this.precision=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the roundingOption
			 * @returns {String} A String representing the roundingOption
			 */
			getRoundingOption()	{
				return this.roundingOption;

			}

			/**
			 * The method to set the value to roundingOption
			 * @param {String} roundingOption A String
			 */
			setRoundingOption(roundingOption)	{
				if((roundingOption != null) && (!(Object.prototype.toString.call(roundingOption) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: roundingOption EXPECTED TYPE: String", null, null);
				}
				this.roundingOption = roundingOption;
				this.keyModified.set("rounding_option", 1);

			}

			/**
			 * The method to get the precision
			 * @returns {Integer} An Integer representing the precision
			 */
			getPrecision()	{
				return this.precision;

			}

			/**
			 * The method to set the value to precision
			 * @param {Integer} precision An Integer
			 */
			setPrecision(precision)	{
				if((precision != null) && (!(Object.prototype.toString.call(precision) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: precision EXPECTED TYPE: Integer", null, null);
				}
				this.precision = precision;
				this.keyModified.set("precision", 1);

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

		Formula : class{
			constructor(){

				this.returnType=null;
				this.expression=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the returnType
			 * @returns {String} A String representing the returnType
			 */
			getReturnType()	{
				return this.returnType;

			}

			/**
			 * The method to set the value to returnType
			 * @param {String} returnType A String
			 */
			setReturnType(returnType)	{
				if((returnType != null) && (!(Object.prototype.toString.call(returnType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: returnType EXPECTED TYPE: String", null, null);
				}
				this.returnType = returnType;
				this.keyModified.set("return_type", 1);

			}

			/**
			 * The method to get the expression
			 * @returns {String} A String representing the expression
			 */
			getExpression()	{
				return this.expression;

			}

			/**
			 * The method to set the value to expression
			 * @param {String} expression A String
			 */
			setExpression(expression)	{
				if((expression != null) && (!(Object.prototype.toString.call(expression) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: expression EXPECTED TYPE: String", null, null);
				}
				this.expression = expression;
				this.keyModified.set("expression", 1);

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

		Private : class{
			constructor(){

				this.restricted=null;
				this.export1=null;
				this.type=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the restricted
			 * @returns {Boolean} A Boolean representing the restricted
			 */
			getRestricted()	{
				return this.restricted;

			}

			/**
			 * The method to set the value to restricted
			 * @param {Boolean} restricted A Boolean
			 */
			setRestricted(restricted)	{
				if((restricted != null) && (!(Object.prototype.toString.call(restricted) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: restricted EXPECTED TYPE: Boolean", null, null);
				}
				this.restricted = restricted;
				this.keyModified.set("restricted", 1);

			}

			/**
			 * The method to get the export
			 * @returns {Boolean} A Boolean representing the export1
			 */
			getExport()	{
				return this.export1;

			}

			/**
			 * The method to set the value to export
			 * @param {Boolean} export1 A Boolean
			 */
			setExport(export1)	{
				if((export1 != null) && (!(Object.prototype.toString.call(export1) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: export1 EXPECTED TYPE: Boolean", null, null);
				}
				this.export1 = export1;
				this.keyModified.set("export", 1);

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

		LookupField : class{
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

		Module : class{
			constructor(){

				this.layout=null;
				this.displayLabel=null;
				this.apiName=null;
				this.module=null;
				this.id=null;
				this.moduleName=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the layout
			 * @returns {Layout} An instance of Layout
			 */
			getLayout()	{
				return this.layout;

			}

			/**
			 * The method to set the value to layout
			 * @param {Layout} layout An instance of Layout
			 */
			setLayout(layout)	{
				if((layout != null) && (!(layout instanceof ZCRM.Layout.Model.Layout))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layout EXPECTED TYPE: Layout", null, null);
				}
				this.layout = layout;
				this.keyModified.set("layout", 1);

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

		AssociationDetails : class{
			constructor(){

				this.lookupField=null;
				this.relatedField=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the lookupField
			 * @returns {LookupField} An instance of LookupField
			 */
			getLookupField()	{
				return this.lookupField;

			}

			/**
			 * The method to set the value to lookupField
			 * @param {LookupField} lookupField An instance of LookupField
			 */
			setLookupField(lookupField)	{
				if((lookupField != null) && (!(lookupField instanceof ZCRM.Field.Model.LookupField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookupField EXPECTED TYPE: LookupField", null, null);
				}
				this.lookupField = lookupField;
				this.keyModified.set("lookup_field", 1);

			}

			/**
			 * The method to get the relatedField
			 * @returns {LookupField} An instance of LookupField
			 */
			getRelatedField()	{
				return this.relatedField;

			}

			/**
			 * The method to set the value to relatedField
			 * @param {LookupField} relatedField An instance of LookupField
			 */
			setRelatedField(relatedField)	{
				if((relatedField != null) && (!(relatedField instanceof ZCRM.Field.Model.LookupField))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedField EXPECTED TYPE: LookupField", null, null);
				}
				this.relatedField = relatedField;
				this.keyModified.set("related_field", 1);

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

		GetFieldsParam : {
			TYPE : 	new Param("type", "Field.Model.GetFieldsParam"),


		},

		GetFieldParam : {

		}
	},
	Operations : class {


		/**
		 * Creates an instance of FieldsOperations with the given parameters
		 * @param {String} module A String
		 */
		constructor(module=null){
			if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
			}
						this.module = module;

		}

		/**
		 * The method to get fields
		 * @param {ParameterMap} paramInstance An instance of ParameterMap
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getFields(paramInstance=null){
			if((paramInstance != null) && (!(paramInstance instanceof ParameterMap))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/fields");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("module", "Field.Model.GetFieldsParam"), this.module);
			handlerInstance.setParam(paramInstance);
			return handlerInstance.apiCall("Field.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to get field
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getField(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/settings/fields/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			await handlerInstance.addParam(new Param("module", "Field.Model.GetFieldParam"), this.module);
			return handlerInstance.apiCall("Field.Model.ResponseHandler", "application/json");

		}

	},

}