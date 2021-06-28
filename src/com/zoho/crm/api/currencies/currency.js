ZCRM.Currency = {
	Model : {
		ActionHandler : class{
			constructor(){

			}


		},

		ActionResponse : class{
			constructor(){

			}


		},

		BaseCurrencyActionHandler : class{
			constructor(){

			}


		},

		ResponseHandler : class{
			constructor(){

			}


		},

		Currency : class{
			constructor(){

				this.symbol=null;
				this.createdTime=null;
				this.isActive=null;
				this.exchangeRate=null;
				this.format=null;
				this.createdBy=null;
				this.prefixSymbol=null;
				this.isBase=null;
				this.modifiedTime=null;
				this.name=null;
				this.modifiedBy=null;
				this.id=null;
				this.isoCode=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the symbol
			 * @returns {String} A String representing the symbol
			 */
			getSymbol()	{
				return this.symbol;

			}

			/**
			 * The method to set the value to symbol
			 * @param {String} symbol A String
			 */
			setSymbol(symbol)	{
				if((symbol != null) && (!(Object.prototype.toString.call(symbol) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: symbol EXPECTED TYPE: String", null, null);
				}
				this.symbol = symbol;
				this.keyModified.set("symbol", 1);

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
			 * The method to get the isActive
			 * @returns {Boolean} A Boolean representing the isActive
			 */
			getIsActive()	{
				return this.isActive;

			}

			/**
			 * The method to set the value to isActive
			 * @param {Boolean} isActive A Boolean
			 */
			setIsActive(isActive)	{
				if((isActive != null) && (!(Object.prototype.toString.call(isActive) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isActive EXPECTED TYPE: Boolean", null, null);
				}
				this.isActive = isActive;
				this.keyModified.set("is_active", 1);

			}

			/**
			 * The method to get the exchangeRate
			 * @returns {String} A String representing the exchangeRate
			 */
			getExchangeRate()	{
				return this.exchangeRate;

			}

			/**
			 * The method to set the value to exchangeRate
			 * @param {String} exchangeRate A String
			 */
			setExchangeRate(exchangeRate)	{
				if((exchangeRate != null) && (!(Object.prototype.toString.call(exchangeRate) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: exchangeRate EXPECTED TYPE: String", null, null);
				}
				this.exchangeRate = exchangeRate;
				this.keyModified.set("exchange_rate", 1);

			}

			/**
			 * The method to get the format
			 * @returns {Format} An instance of Format
			 */
			getFormat()	{
				return this.format;

			}

			/**
			 * The method to set the value to format
			 * @param {Format} format An instance of Format
			 */
			setFormat(format)	{
				if((format != null) && (!(format instanceof ZCRM.Currency.Model.Format))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: format EXPECTED TYPE: Format", null, null);
				}
				this.format = format;
				this.keyModified.set("format", 1);

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
			 * The method to get the prefixSymbol
			 * @returns {Boolean} A Boolean representing the prefixSymbol
			 */
			getPrefixSymbol()	{
				return this.prefixSymbol;

			}

			/**
			 * The method to set the value to prefixSymbol
			 * @param {Boolean} prefixSymbol A Boolean
			 */
			setPrefixSymbol(prefixSymbol)	{
				if((prefixSymbol != null) && (!(Object.prototype.toString.call(prefixSymbol) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: prefixSymbol EXPECTED TYPE: Boolean", null, null);
				}
				this.prefixSymbol = prefixSymbol;
				this.keyModified.set("prefix_symbol", 1);

			}

			/**
			 * The method to get the isBase
			 * @returns {Boolean} A Boolean representing the isBase
			 */
			getIsBase()	{
				return this.isBase;

			}

			/**
			 * The method to set the value to isBase
			 * @param {Boolean} isBase A Boolean
			 */
			setIsBase(isBase)	{
				if((isBase != null) && (!(Object.prototype.toString.call(isBase) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isBase EXPECTED TYPE: Boolean", null, null);
				}
				this.isBase = isBase;
				this.keyModified.set("is_base", 1);

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
			 * The method to get the isoCode
			 * @returns {String} A String representing the isoCode
			 */
			getIsoCode()	{
				return this.isoCode;

			}

			/**
			 * The method to set the value to isoCode
			 * @param {String} isoCode A String
			 */
			setIsoCode(isoCode)	{
				if((isoCode != null) && (!(Object.prototype.toString.call(isoCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isoCode EXPECTED TYPE: String", null, null);
				}
				this.isoCode = isoCode;
				this.keyModified.set("iso_code", 1);

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

				this.currencies=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the currencies
			 * @returns {List} An Array representing the currencies
			 */
			getCurrencies()	{
				return this.currencies;

			}

			/**
			 * The method to set the value to currencies
			 * @param {List} currencies An Array
			 */
			setCurrencies(currencies)	{
				if((currencies != null) && (!(Object.prototype.toString.call(currencies) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currencies EXPECTED TYPE: Array", null, null);
				}
				this.currencies = currencies;
				this.keyModified.set("currencies", 1);

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

		BaseCurrencyWrapper : class{
			constructor(){

				this.baseCurrency=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the baseCurrency
			 * @returns {Currency} An instance of Currency
			 */
			getBaseCurrency()	{
				return this.baseCurrency;

			}

			/**
			 * The method to set the value to baseCurrency
			 * @param {Currency} baseCurrency An instance of Currency
			 */
			setBaseCurrency(baseCurrency)	{
				if((baseCurrency != null) && (!(baseCurrency instanceof ZCRM.Currency.Model.Currency))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: baseCurrency EXPECTED TYPE: Currency", null, null);
				}
				this.baseCurrency = baseCurrency;
				this.keyModified.set("base_currency", 1);

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

				this.currencies=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the currencies
			 * @returns {List} An Array representing the currencies
			 */
			getCurrencies()	{
				return this.currencies;

			}

			/**
			 * The method to set the value to currencies
			 * @param {List} currencies An Array
			 */
			setCurrencies(currencies)	{
				if((currencies != null) && (!(Object.prototype.toString.call(currencies) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currencies EXPECTED TYPE: Array", null, null);
				}
				this.currencies = currencies;
				this.keyModified.set("currencies", 1);

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

		BodyWrapper : class{
			constructor(){

				this.currencies=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the currencies
			 * @returns {List} An Array representing the currencies
			 */
			getCurrencies()	{
				return this.currencies;

			}

			/**
			 * The method to set the value to currencies
			 * @param {List} currencies An Array
			 */
			setCurrencies(currencies)	{
				if((currencies != null) && (!(Object.prototype.toString.call(currencies) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currencies EXPECTED TYPE: Array", null, null);
				}
				this.currencies = currencies;
				this.keyModified.set("currencies", 1);

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

		Format : class{
			constructor(){

				this.decimalSeparator=null;
				this.thousandSeparator=null;
				this.decimalPlaces=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the decimalSeparator
			 * @returns {Choice} An instance of Choice
			 */
			getDecimalSeparator()	{
				return this.decimalSeparator;

			}

			/**
			 * The method to set the value to decimalSeparator
			 * @param {Choice} decimalSeparator An instance of Choice
			 */
			setDecimalSeparator(decimalSeparator)	{
				if((decimalSeparator != null) && (!(decimalSeparator instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalSeparator EXPECTED TYPE: Choice", null, null);
				}
				this.decimalSeparator = decimalSeparator;
				this.keyModified.set("decimal_separator", 1);

			}

			/**
			 * The method to get the thousandSeparator
			 * @returns {Choice} An instance of Choice
			 */
			getThousandSeparator()	{
				return this.thousandSeparator;

			}

			/**
			 * The method to set the value to thousandSeparator
			 * @param {Choice} thousandSeparator An instance of Choice
			 */
			setThousandSeparator(thousandSeparator)	{
				if((thousandSeparator != null) && (!(thousandSeparator instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: thousandSeparator EXPECTED TYPE: Choice", null, null);
				}
				this.thousandSeparator = thousandSeparator;
				this.keyModified.set("thousand_separator", 1);

			}

			/**
			 * The method to get the decimalPlaces
			 * @returns {Choice} An instance of Choice
			 */
			getDecimalPlaces()	{
				return this.decimalPlaces;

			}

			/**
			 * The method to set the value to decimalPlaces
			 * @param {Choice} decimalPlaces An instance of Choice
			 */
			setDecimalPlaces(decimalPlaces)	{
				if((decimalPlaces != null) && (!(decimalPlaces instanceof Choice))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalPlaces EXPECTED TYPE: Choice", null, null);
				}
				this.decimalPlaces = decimalPlaces;
				this.keyModified.set("decimal_places", 1);

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

		BaseCurrencyActionWrapper : class{
			constructor(){

				this.baseCurrency=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the baseCurrency
			 * @returns {ActionResponse} An instance of ActionResponse
			 */
			getBaseCurrency()	{
				return this.baseCurrency;

			}

			/**
			 * The method to set the value to baseCurrency
			 * @param {ActionResponse} baseCurrency An instance of ActionResponse
			 */
			setBaseCurrency(baseCurrency)	{
				if((baseCurrency != null) && (!(baseCurrency instanceof ZCRM.Currency.Model.ActionResponse))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: baseCurrency EXPECTED TYPE: ActionResponse", null, null);
				}
				this.baseCurrency = baseCurrency;
				this.keyModified.set("base_currency", 1);

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
		constructor(){

		}

		/**
		 * The method to get currencies
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getCurrencies(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/org/currencies");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Currency.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to add currencies
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async addCurrencies(request){
			if((request != null) && (!(request instanceof ZCRM.Currency.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/org/currencies");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Currency.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to update currencies
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateCurrencies(request){
			if((request != null) && (!(request instanceof ZCRM.Currency.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/org/currencies");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Currency.Model.ActionHandler", "application/json");

		}

		/**
		 * The method to enable multiple currencies
		 * @param {BaseCurrencyWrapper} request An instance of BaseCurrencyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async enableMultipleCurrencies(request){
			if((request != null) && (!(request instanceof ZCRM.Currency.Model.BaseCurrencyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BaseCurrencyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/org/currencies/actions/enable");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Currency.Model.BaseCurrencyActionHandler", "application/json");

		}

		/**
		 * The method to update base currency
		 * @param {BaseCurrencyWrapper} request An instance of BaseCurrencyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateBaseCurrency(request){
			if((request != null) && (!(request instanceof ZCRM.Currency.Model.BaseCurrencyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BaseCurrencyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/org/currencies/actions/enable");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Currency.Model.BaseCurrencyActionHandler", "application/json");

		}

		/**
		 * The method to get currency
		 * @param {Long} id A BigInt
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getCurrency(id){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/org/currencies/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Currency.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to update currency
		 * @param {Long} id A BigInt
		 * @param {BodyWrapper} request An instance of BodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async updateCurrency(id, request){
			if((!(Object.prototype.toString.call(id) == "[object BigInt]"))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
			}
			if((request != null) && (!(request instanceof ZCRM.Currency.Model.BodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/org/currencies/");
			apiPath = apiPath.concat(id.toString());
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
			handlerInstance.setContentType("application/json");
			handlerInstance.setRequest(request);
			return handlerInstance.apiCall("Currency.Model.ActionHandler", "application/json");

		}
	},

}