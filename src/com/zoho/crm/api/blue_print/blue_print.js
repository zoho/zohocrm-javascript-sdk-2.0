ZCRM.BluePrint = {
	Model : {
		ResponseHandler : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

			}


		},

		Transition : class{
			constructor(){

				this.nextTransitions=null;
				this.percentPartialSave=null;
				this.data=null;
				this.nextFieldValue=null;
				this.name=null;
				this.criteriaMatched=null;
				this.id=null;
				this.fields=null;
				this.criteriaMessage=null;
				this.type=null;
				this.executionTime=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the nextTransitions
			 * @returns {List} An Array representing the nextTransitions
			 */
			getNextTransitions()	{
				return this.nextTransitions;

			}

			/**
			 * The method to set the value to nextTransitions
			 * @param {List} nextTransitions An Array
			 */
			setNextTransitions(nextTransitions)	{
				if((nextTransitions != null) && (!(Object.prototype.toString.call(nextTransitions) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextTransitions EXPECTED TYPE: Array", null, null);
				}
				this.nextTransitions = nextTransitions;
				this.keyModified.set("next_transitions", 1);

			}

			/**
			 * The method to get the percentPartialSave
			 * @returns {Double} A Float representing the percentPartialSave
			 */
			getPercentPartialSave()	{
				return this.percentPartialSave;

			}

			/**
			 * The method to set the value to percentPartialSave
			 * @param {Double} percentPartialSave A Float
			 */
			setPercentPartialSave(percentPartialSave)	{
				if((percentPartialSave != null) && (!(Object.prototype.toString.call(percentPartialSave) == "[object Number]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: percentPartialSave EXPECTED TYPE: Float", null, null);
				}
				this.percentPartialSave = percentPartialSave;
				this.keyModified.set("percent_partial_save", 1);

			}

			/**
			 * The method to get the data
			 * @returns {Record} An instance of Record
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {Record} data An instance of Record
			 */
			setData(data)	{
				if((data != null) && (!(data instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Record", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

			}

			/**
			 * The method to get the nextFieldValue
			 * @returns {String} A String representing the nextFieldValue
			 */
			getNextFieldValue()	{
				return this.nextFieldValue;

			}

			/**
			 * The method to set the value to nextFieldValue
			 * @param {String} nextFieldValue A String
			 */
			setNextFieldValue(nextFieldValue)	{
				if((nextFieldValue != null) && (!(Object.prototype.toString.call(nextFieldValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nextFieldValue EXPECTED TYPE: String", null, null);
				}
				this.nextFieldValue = nextFieldValue;
				this.keyModified.set("next_field_value", 1);

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
			 * The method to get the criteriaMatched
			 * @returns {Boolean} A Boolean representing the criteriaMatched
			 */
			getCriteriaMatched()	{
				return this.criteriaMatched;

			}

			/**
			 * The method to set the value to criteriaMatched
			 * @param {Boolean} criteriaMatched A Boolean
			 */
			setCriteriaMatched(criteriaMatched)	{
				if((criteriaMatched != null) && (!(Object.prototype.toString.call(criteriaMatched) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteriaMatched EXPECTED TYPE: Boolean", null, null);
				}
				this.criteriaMatched = criteriaMatched;
				this.keyModified.set("criteria_matched", 1);

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
			 * The method to get the criteriaMessage
			 * @returns {String} A String representing the criteriaMessage
			 */
			getCriteriaMessage()	{
				return this.criteriaMessage;

			}

			/**
			 * The method to set the value to criteriaMessage
			 * @param {String} criteriaMessage A String
			 */
			setCriteriaMessage(criteriaMessage)	{
				if((criteriaMessage != null) && (!(Object.prototype.toString.call(criteriaMessage) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteriaMessage EXPECTED TYPE: String", null, null);
				}
				this.criteriaMessage = criteriaMessage;
				this.keyModified.set("criteria_message", 1);

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
			 * The method to get the executionTime
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getExecutionTime()	{
				return this.executionTime;

			}

			/**
			 * The method to set the value to executionTime
			 * @param {OffsetDateTime} executionTime An instance of OffsetDateTime
			 */
			setExecutionTime(executionTime)	{
				if((executionTime != null) && (!(executionTime instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: executionTime EXPECTED TYPE: Date", null, null);
				}
				this.executionTime = executionTime;
				this.keyModified.set("execution_time", 1);

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

		BluePrint : class{
			constructor(){

				this.transitionId=null;
				this.data=null;
				this.processInfo=null;
				this.transitions=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the transitionId
			 * @returns {Long} A BigInt representing the transitionId
			 */
			getTransitionId()	{
				return this.transitionId;

			}

			/**
			 * The method to set the value to transitionId
			 * @param {Long} transitionId A BigInt
			 */
			setTransitionId(transitionId)	{
				if((transitionId != null) && (!(Object.prototype.toString.call(transitionId) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitionId EXPECTED TYPE: BigInt", null, null);
				}
				this.transitionId = transitionId;
				this.keyModified.set("transition_id", 1);

			}

			/**
			 * The method to get the data
			 * @returns {Record} An instance of Record
			 */
			getData()	{
				return this.data;

			}

			/**
			 * The method to set the value to data
			 * @param {Record} data An instance of Record
			 */
			setData(data)	{
				if((data != null) && (!(data instanceof ZCRM.Record.Model.Record))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Record", null, null);
				}
				this.data = data;
				this.keyModified.set("data", 1);

			}

			/**
			 * The method to get the processInfo
			 * @returns {ProcessInfo} An instance of ProcessInfo
			 */
			getProcessInfo()	{
				return this.processInfo;

			}

			/**
			 * The method to set the value to processInfo
			 * @param {ProcessInfo} processInfo An instance of ProcessInfo
			 */
			setProcessInfo(processInfo)	{
				if((processInfo != null) && (!(processInfo instanceof ZCRM.BluePrint.Model.ProcessInfo))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: processInfo EXPECTED TYPE: ProcessInfo", null, null);
				}
				this.processInfo = processInfo;
				this.keyModified.set("process_info", 1);

			}

			/**
			 * The method to get the transitions
			 * @returns {List} An Array representing the transitions
			 */
			getTransitions()	{
				return this.transitions;

			}

			/**
			 * The method to set the value to transitions
			 * @param {List} transitions An Array
			 */
			setTransitions(transitions)	{
				if((transitions != null) && (!(Object.prototype.toString.call(transitions) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitions EXPECTED TYPE: Array", null, null);
				}
				this.transitions = transitions;
				this.keyModified.set("transitions", 1);

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

		BodyWrapper : class{
			constructor(){

				this.blueprint=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the blueprint
			 * @returns {List} An Array representing the blueprint
			 */
			getBlueprint()	{
				return this.blueprint;

			}

			/**
			 * The method to set the value to blueprint
			 * @param {List} blueprint An Array
			 */
			setBlueprint(blueprint)	{
				if((blueprint != null) && (!(Object.prototype.toString.call(blueprint) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blueprint EXPECTED TYPE: Array", null, null);
				}
				this.blueprint = blueprint;
				this.keyModified.set("blueprint", 1);

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

		NextTransition : class{
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

		ProcessInfo : class{
			constructor(){

				this.fieldId=null;
				this.isContinuous=null;
				this.apiName=null;
				this.continuous=null;
				this.fieldLabel=null;
				this.name=null;
				this.columnName=null;
				this.fieldValue=null;
				this.id=null;
				this.fieldName=null;
				this.escalation=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the fieldId
			 * @returns {String} A String representing the fieldId
			 */
			getFieldId()	{
				return this.fieldId;

			}

			/**
			 * The method to set the value to fieldId
			 * @param {String} fieldId A String
			 */
			setFieldId(fieldId)	{
				if((fieldId != null) && (!(Object.prototype.toString.call(fieldId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldId EXPECTED TYPE: String", null, null);
				}
				this.fieldId = fieldId;
				this.keyModified.set("field_id", 1);

			}

			/**
			 * The method to get the isContinuous
			 * @returns {Boolean} A Boolean representing the isContinuous
			 */
			getIsContinuous()	{
				return this.isContinuous;

			}

			/**
			 * The method to set the value to isContinuous
			 * @param {Boolean} isContinuous A Boolean
			 */
			setIsContinuous(isContinuous)	{
				if((isContinuous != null) && (!(Object.prototype.toString.call(isContinuous) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isContinuous EXPECTED TYPE: Boolean", null, null);
				}
				this.isContinuous = isContinuous;
				this.keyModified.set("is_continuous", 1);

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
			 * The method to get the continuous
			 * @returns {Boolean} A Boolean representing the continuous
			 */
			getContinuous()	{
				return this.continuous;

			}

			/**
			 * The method to set the value to continuous
			 * @param {Boolean} continuous A Boolean
			 */
			setContinuous(continuous)	{
				if((continuous != null) && (!(Object.prototype.toString.call(continuous) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: continuous EXPECTED TYPE: Boolean", null, null);
				}
				this.continuous = continuous;
				this.keyModified.set("continuous", 1);

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
			 * The method to get the fieldValue
			 * @returns {String} A String representing the fieldValue
			 */
			getFieldValue()	{
				return this.fieldValue;

			}

			/**
			 * The method to set the value to fieldValue
			 * @param {String} fieldValue A String
			 */
			setFieldValue(fieldValue)	{
				if((fieldValue != null) && (!(Object.prototype.toString.call(fieldValue) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldValue EXPECTED TYPE: String", null, null);
				}
				this.fieldValue = fieldValue;
				this.keyModified.set("field_value", 1);

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
			 * The method to get the fieldName
			 * @returns {String} A String representing the fieldName
			 */
			getFieldName()	{
				return this.fieldName;

			}

			/**
			 * The method to set the value to fieldName
			 * @param {String} fieldName A String
			 */
			setFieldName(fieldName)	{
				if((fieldName != null) && (!(Object.prototype.toString.call(fieldName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldName EXPECTED TYPE: String", null, null);
				}
				this.fieldName = fieldName;
				this.keyModified.set("field_name", 1);

			}

			/**
			 * The method to get the escalation
			 * @returns {String} A String representing the escalation
			 */
			getEscalation()	{
				return this.escalation;

			}

			/**
			 * The method to set the value to escalation
			 * @param {String} escalation A String
			 */
			setEscalation(escalation)	{
				if((escalation != null) && (!(Object.prototype.toString.call(escalation) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: escalation EXPECTED TYPE: String", null, null);
				}
				this.escalation = escalation;
				this.keyModified.set("escalation", 1);

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

				this.blueprint=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the blueprint
			 * @returns {BluePrint} An instance of BluePrint
			 */
			getBlueprint()	{
				return this.blueprint;

			}

			/**
			 * The method to set the value to blueprint
			 * @param {BluePrint} blueprint An instance of BluePrint
			 */
			setBlueprint(blueprint)	{
				if((blueprint != null) && (!(blueprint instanceof ZCRM.BluePrint.Model.BluePrint))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blueprint EXPECTED TYPE: BluePrint", null, null);
				}
				this.blueprint = blueprint;
				this.keyModified.set("blueprint", 1);

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

		ValidationError : class{
			constructor(){

				this.apiName=null;
				this.message=null;
				this.keyModified=new Map();
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


		/**
		 * Creates an instance of BluePrintOperations with the given parameters
		 * @param {Long} recordId A BigInt
		 * @param {String} moduleAPIName A String
		 */
		constructor(recordId, moduleAPIName){
			if((!(Object.prototype.toString.call(recordId) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: recordId EXPECTED TYPE: BigInt", null, null);
			}
			if((!(Object.prototype.toString.call(moduleAPIName) == "[object String]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: moduleAPIName EXPECTED TYPE: String", null, null);
			}
						this.recordId = recordId;
						this.moduleAPIName = moduleAPIName;

		}

		/**
		 * The method to get blueprint
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getBlueprint(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/actions/blueprint");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("BluePrint.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update blueprint
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateBlueprint(request){
			if((request != null) && (!(request instanceof ZCRM.BluePrint.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/");
			apiPath = apiPath.concat(this.moduleAPIName.toString());
			apiPath = apiPath.concat("/");
			apiPath = apiPath.concat(this.recordId.toString());
			apiPath = apiPath.concat("/actions/blueprint");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("BluePrint.Model.ActionResponse", "application/json");

		}

	},

}