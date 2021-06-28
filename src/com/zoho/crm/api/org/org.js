ZCRM.Org = {
	Model : {
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

		ResponseWrapper : class{
			constructor(){

				this.org=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the org
			 * @returns {List} An Array representing the org
			 */
			getOrg()	{
				return this.org;

			}

			/**
			 * The method to set the value to org
			 * @param {List} org An Array
			 */
			setOrg(org)	{
				if((org != null) && (!(Object.prototype.toString.call(org) == "[object Array]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: org EXPECTED TYPE: Array", null, null);
				}
				this.org = org;
				this.keyModified.set("org", 1);

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

		Org : class{
			constructor(){

				this.country=null;
				this.photoId=null;
				this.city=null;
				this.description=null;
				this.mcStatus=null;
				this.gappsEnabled=null;
				this.domainName=null;
				this.translationEnabled=null;
				this.street=null;
				this.alias=null;
				this.currency=null;
				this.id=null;
				this.state=null;
				this.fax=null;
				this.employeeCount=null;
				this.zip=null;
				this.website=null;
				this.currencySymbol=null;
				this.mobile=null;
				this.currencyLocale=null;
				this.primaryZuid=null;
				this.ziaPortalId=null;
				this.timeZone=null;
				this.zgid=null;
				this.countryCode=null;
				this.licenseDetails=null;
				this.phone=null;
				this.companyName=null;
				this.privacySettings=null;
				this.primaryEmail=null;
				this.isoCode=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the country
			 * @returns {String} A String representing the country
			 */
			getCountry()	{
				return this.country;

			}

			/**
			 * The method to set the value to country
			 * @param {String} country A String
			 */
			setCountry(country)	{
				if((country != null) && (!(Object.prototype.toString.call(country) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: country EXPECTED TYPE: String", null, null);
				}
				this.country = country;
				this.keyModified.set("country", 1);

			}

			/**
			 * The method to get the photoId
			 * @returns {String} A String representing the photoId
			 */
			getPhotoId()	{
				return this.photoId;

			}

			/**
			 * The method to set the value to photoId
			 * @param {String} photoId A String
			 */
			setPhotoId(photoId)	{
				if((photoId != null) && (!(Object.prototype.toString.call(photoId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: photoId EXPECTED TYPE: String", null, null);
				}
				this.photoId = photoId;
				this.keyModified.set("photo_id", 1);

			}

			/**
			 * The method to get the city
			 * @returns {String} A String representing the city
			 */
			getCity()	{
				return this.city;

			}

			/**
			 * The method to set the value to city
			 * @param {String} city A String
			 */
			setCity(city)	{
				if((city != null) && (!(Object.prototype.toString.call(city) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: city EXPECTED TYPE: String", null, null);
				}
				this.city = city;
				this.keyModified.set("city", 1);

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
			 * The method to get the mcStatus
			 * @returns {Boolean} A Boolean representing the mcStatus
			 */
			getMcStatus()	{
				return this.mcStatus;

			}

			/**
			 * The method to set the value to mcStatus
			 * @param {Boolean} mcStatus A Boolean
			 */
			setMcStatus(mcStatus)	{
				if((mcStatus != null) && (!(Object.prototype.toString.call(mcStatus) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mcStatus EXPECTED TYPE: Boolean", null, null);
				}
				this.mcStatus = mcStatus;
				this.keyModified.set("mc_status", 1);

			}

			/**
			 * The method to get the gappsEnabled
			 * @returns {Boolean} A Boolean representing the gappsEnabled
			 */
			getGappsEnabled()	{
				return this.gappsEnabled;

			}

			/**
			 * The method to set the value to gappsEnabled
			 * @param {Boolean} gappsEnabled A Boolean
			 */
			setGappsEnabled(gappsEnabled)	{
				if((gappsEnabled != null) && (!(Object.prototype.toString.call(gappsEnabled) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: gappsEnabled EXPECTED TYPE: Boolean", null, null);
				}
				this.gappsEnabled = gappsEnabled;
				this.keyModified.set("gapps_enabled", 1);

			}

			/**
			 * The method to get the domainName
			 * @returns {String} A String representing the domainName
			 */
			getDomainName()	{
				return this.domainName;

			}

			/**
			 * The method to set the value to domainName
			 * @param {String} domainName A String
			 */
			setDomainName(domainName)	{
				if((domainName != null) && (!(Object.prototype.toString.call(domainName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: domainName EXPECTED TYPE: String", null, null);
				}
				this.domainName = domainName;
				this.keyModified.set("domain_name", 1);

			}

			/**
			 * The method to get the translationEnabled
			 * @returns {Boolean} A Boolean representing the translationEnabled
			 */
			getTranslationEnabled()	{
				return this.translationEnabled;

			}

			/**
			 * The method to set the value to translationEnabled
			 * @param {Boolean} translationEnabled A Boolean
			 */
			setTranslationEnabled(translationEnabled)	{
				if((translationEnabled != null) && (!(Object.prototype.toString.call(translationEnabled) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: translationEnabled EXPECTED TYPE: Boolean", null, null);
				}
				this.translationEnabled = translationEnabled;
				this.keyModified.set("translation_enabled", 1);

			}

			/**
			 * The method to get the street
			 * @returns {String} A String representing the street
			 */
			getStreet()	{
				return this.street;

			}

			/**
			 * The method to set the value to street
			 * @param {String} street A String
			 */
			setStreet(street)	{
				if((street != null) && (!(Object.prototype.toString.call(street) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: street EXPECTED TYPE: String", null, null);
				}
				this.street = street;
				this.keyModified.set("street", 1);

			}

			/**
			 * The method to get the alias
			 * @returns {String} A String representing the alias
			 */
			getAlias()	{
				return this.alias;

			}

			/**
			 * The method to set the value to alias
			 * @param {String} alias A String
			 */
			setAlias(alias)	{
				if((alias != null) && (!(Object.prototype.toString.call(alias) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: alias EXPECTED TYPE: String", null, null);
				}
				this.alias = alias;
				this.keyModified.set("alias", 1);

			}

			/**
			 * The method to get the currency
			 * @returns {String} A String representing the currency
			 */
			getCurrency()	{
				return this.currency;

			}

			/**
			 * The method to set the value to currency
			 * @param {String} currency A String
			 */
			setCurrency(currency)	{
				if((currency != null) && (!(Object.prototype.toString.call(currency) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: String", null, null);
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
				this.keyModified.set("state", 1);

			}

			/**
			 * The method to get the fax
			 * @returns {String} A String representing the fax
			 */
			getFax()	{
				return this.fax;

			}

			/**
			 * The method to set the value to fax
			 * @param {String} fax A String
			 */
			setFax(fax)	{
				if((fax != null) && (!(Object.prototype.toString.call(fax) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fax EXPECTED TYPE: String", null, null);
				}
				this.fax = fax;
				this.keyModified.set("fax", 1);

			}

			/**
			 * The method to get the employeeCount
			 * @returns {String} A String representing the employeeCount
			 */
			getEmployeeCount()	{
				return this.employeeCount;

			}

			/**
			 * The method to set the value to employeeCount
			 * @param {String} employeeCount A String
			 */
			setEmployeeCount(employeeCount)	{
				if((employeeCount != null) && (!(Object.prototype.toString.call(employeeCount) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: employeeCount EXPECTED TYPE: String", null, null);
				}
				this.employeeCount = employeeCount;
				this.keyModified.set("employee_count", 1);

			}

			/**
			 * The method to get the zip
			 * @returns {String} A String representing the zip
			 */
			getZip()	{
				return this.zip;

			}

			/**
			 * The method to set the value to zip
			 * @param {String} zip A String
			 */
			setZip(zip)	{
				if((zip != null) && (!(Object.prototype.toString.call(zip) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zip EXPECTED TYPE: String", null, null);
				}
				this.zip = zip;
				this.keyModified.set("zip", 1);

			}

			/**
			 * The method to get the website
			 * @returns {String} A String representing the website
			 */
			getWebsite()	{
				return this.website;

			}

			/**
			 * The method to set the value to website
			 * @param {String} website A String
			 */
			setWebsite(website)	{
				if((website != null) && (!(Object.prototype.toString.call(website) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: website EXPECTED TYPE: String", null, null);
				}
				this.website = website;
				this.keyModified.set("website", 1);

			}

			/**
			 * The method to get the currencySymbol
			 * @returns {String} A String representing the currencySymbol
			 */
			getCurrencySymbol()	{
				return this.currencySymbol;

			}

			/**
			 * The method to set the value to currencySymbol
			 * @param {String} currencySymbol A String
			 */
			setCurrencySymbol(currencySymbol)	{
				if((currencySymbol != null) && (!(Object.prototype.toString.call(currencySymbol) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currencySymbol EXPECTED TYPE: String", null, null);
				}
				this.currencySymbol = currencySymbol;
				this.keyModified.set("currency_symbol", 1);

			}

			/**
			 * The method to get the mobile
			 * @returns {String} A String representing the mobile
			 */
			getMobile()	{
				return this.mobile;

			}

			/**
			 * The method to set the value to mobile
			 * @param {String} mobile A String
			 */
			setMobile(mobile)	{
				if((mobile != null) && (!(Object.prototype.toString.call(mobile) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mobile EXPECTED TYPE: String", null, null);
				}
				this.mobile = mobile;
				this.keyModified.set("mobile", 1);

			}

			/**
			 * The method to get the currencyLocale
			 * @returns {String} A String representing the currencyLocale
			 */
			getCurrencyLocale()	{
				return this.currencyLocale;

			}

			/**
			 * The method to set the value to currencyLocale
			 * @param {String} currencyLocale A String
			 */
			setCurrencyLocale(currencyLocale)	{
				if((currencyLocale != null) && (!(Object.prototype.toString.call(currencyLocale) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currencyLocale EXPECTED TYPE: String", null, null);
				}
				this.currencyLocale = currencyLocale;
				this.keyModified.set("currency_locale", 1);

			}

			/**
			 * The method to get the primaryZuid
			 * @returns {String} A String representing the primaryZuid
			 */
			getPrimaryZuid()	{
				return this.primaryZuid;

			}

			/**
			 * The method to set the value to primaryZuid
			 * @param {String} primaryZuid A String
			 */
			setPrimaryZuid(primaryZuid)	{
				if((primaryZuid != null) && (!(Object.prototype.toString.call(primaryZuid) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primaryZuid EXPECTED TYPE: String", null, null);
				}
				this.primaryZuid = primaryZuid;
				this.keyModified.set("primary_zuid", 1);

			}

			/**
			 * The method to get the ziaPortalId
			 * @returns {String} A String representing the ziaPortalId
			 */
			getZiaPortalId()	{
				return this.ziaPortalId;

			}

			/**
			 * The method to set the value to ziaPortalId
			 * @param {String} ziaPortalId A String
			 */
			setZiaPortalId(ziaPortalId)	{
				if((ziaPortalId != null) && (!(Object.prototype.toString.call(ziaPortalId) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaPortalId EXPECTED TYPE: String", null, null);
				}
				this.ziaPortalId = ziaPortalId;
				this.keyModified.set("zia_portal_id", 1);

			}

			/**
			 * The method to get the timeZone
			 * @returns {String} A String representing the timeZone
			 */
			getTimeZone()	{
				return this.timeZone;

			}

			/**
			 * The method to set the value to timeZone
			 * @param {String} timeZone A String
			 */
			setTimeZone(timeZone)	{
				if((timeZone != null) && (!(Object.prototype.toString.call(timeZone) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timeZone EXPECTED TYPE: String", null, null);
				}
				this.timeZone = timeZone;
				this.keyModified.set("time_zone", 1);

			}

			/**
			 * The method to get the zgid
			 * @returns {String} A String representing the zgid
			 */
			getZgid()	{
				return this.zgid;

			}

			/**
			 * The method to set the value to zgid
			 * @param {String} zgid A String
			 */
			setZgid(zgid)	{
				if((zgid != null) && (!(Object.prototype.toString.call(zgid) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zgid EXPECTED TYPE: String", null, null);
				}
				this.zgid = zgid;
				this.keyModified.set("zgid", 1);

			}

			/**
			 * The method to get the countryCode
			 * @returns {String} A String representing the countryCode
			 */
			getCountryCode()	{
				return this.countryCode;

			}

			/**
			 * The method to set the value to countryCode
			 * @param {String} countryCode A String
			 */
			setCountryCode(countryCode)	{
				if((countryCode != null) && (!(Object.prototype.toString.call(countryCode) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: countryCode EXPECTED TYPE: String", null, null);
				}
				this.countryCode = countryCode;
				this.keyModified.set("country_code", 1);

			}

			/**
			 * The method to get the licenseDetails
			 * @returns {LicenseDetails} An instance of LicenseDetails
			 */
			getLicenseDetails()	{
				return this.licenseDetails;

			}

			/**
			 * The method to set the value to licenseDetails
			 * @param {LicenseDetails} licenseDetails An instance of LicenseDetails
			 */
			setLicenseDetails(licenseDetails)	{
				if((licenseDetails != null) && (!(licenseDetails instanceof ZCRM.Org.Model.LicenseDetails))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: licenseDetails EXPECTED TYPE: LicenseDetails", null, null);
				}
				this.licenseDetails = licenseDetails;
				this.keyModified.set("license_details", 1);

			}

			/**
			 * The method to get the phone
			 * @returns {String} A String representing the phone
			 */
			getPhone()	{
				return this.phone;

			}

			/**
			 * The method to set the value to phone
			 * @param {String} phone A String
			 */
			setPhone(phone)	{
				if((phone != null) && (!(Object.prototype.toString.call(phone) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: phone EXPECTED TYPE: String", null, null);
				}
				this.phone = phone;
				this.keyModified.set("phone", 1);

			}

			/**
			 * The method to get the companyName
			 * @returns {String} A String representing the companyName
			 */
			getCompanyName()	{
				return this.companyName;

			}

			/**
			 * The method to set the value to companyName
			 * @param {String} companyName A String
			 */
			setCompanyName(companyName)	{
				if((companyName != null) && (!(Object.prototype.toString.call(companyName) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: companyName EXPECTED TYPE: String", null, null);
				}
				this.companyName = companyName;
				this.keyModified.set("company_name", 1);

			}

			/**
			 * The method to get the privacySettings
			 * @returns {Boolean} A Boolean representing the privacySettings
			 */
			getPrivacySettings()	{
				return this.privacySettings;

			}

			/**
			 * The method to set the value to privacySettings
			 * @param {Boolean} privacySettings A Boolean
			 */
			setPrivacySettings(privacySettings)	{
				if((privacySettings != null) && (!(Object.prototype.toString.call(privacySettings) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: privacySettings EXPECTED TYPE: Boolean", null, null);
				}
				this.privacySettings = privacySettings;
				this.keyModified.set("privacy_settings", 1);

			}

			/**
			 * The method to get the primaryEmail
			 * @returns {String} A String representing the primaryEmail
			 */
			getPrimaryEmail()	{
				return this.primaryEmail;

			}

			/**
			 * The method to set the value to primaryEmail
			 * @param {String} primaryEmail A String
			 */
			setPrimaryEmail(primaryEmail)	{
				if((primaryEmail != null) && (!(Object.prototype.toString.call(primaryEmail) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primaryEmail EXPECTED TYPE: String", null, null);
				}
				this.primaryEmail = primaryEmail;
				this.keyModified.set("primary_email", 1);

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

		LicenseDetails : class{
			constructor(){

				this.paidExpiry=null;
				this.usersLicensePurchased=null;
				this.trialType=null;
				this.trialExpiry=null;
				this.paid=null;
				this.paidType=null;
				this.keyModified=new Map();
			}



			/**
			 * The method to get the paidExpiry
			 * @returns {OffsetDateTime} An instance of OffsetDateTime
			 */
			getPaidExpiry()	{
				return this.paidExpiry;

			}

			/**
			 * The method to set the value to paidExpiry
			 * @param {OffsetDateTime} paidExpiry An instance of OffsetDateTime
			 */
			setPaidExpiry(paidExpiry)	{
				if((paidExpiry != null) && (!(paidExpiry instanceof Date))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paidExpiry EXPECTED TYPE: Date", null, null);
				}
				this.paidExpiry = paidExpiry;
				this.keyModified.set("paid_expiry", 1);

			}

			/**
			 * The method to get the usersLicensePurchased
			 * @returns {Long} A BigInt representing the usersLicensePurchased
			 */
			getUsersLicensePurchased()	{
				return this.usersLicensePurchased;

			}

			/**
			 * The method to set the value to usersLicensePurchased
			 * @param {Long} usersLicensePurchased A BigInt
			 */
			setUsersLicensePurchased(usersLicensePurchased)	{
				if((usersLicensePurchased != null) && (!(Object.prototype.toString.call(usersLicensePurchased) == "[object BigInt]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: usersLicensePurchased EXPECTED TYPE: BigInt", null, null);
				}
				this.usersLicensePurchased = usersLicensePurchased;
				this.keyModified.set("users_license_purchased", 1);

			}

			/**
			 * The method to get the trialType
			 * @returns {String} A String representing the trialType
			 */
			getTrialType()	{
				return this.trialType;

			}

			/**
			 * The method to set the value to trialType
			 * @param {String} trialType A String
			 */
			setTrialType(trialType)	{
				if((trialType != null) && (!(Object.prototype.toString.call(trialType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trialType EXPECTED TYPE: String", null, null);
				}
				this.trialType = trialType;
				this.keyModified.set("trial_type", 1);

			}

			/**
			 * The method to get the trialExpiry
			 * @returns {String} A String representing the trialExpiry
			 */
			getTrialExpiry()	{
				return this.trialExpiry;

			}

			/**
			 * The method to set the value to trialExpiry
			 * @param {String} trialExpiry A String
			 */
			setTrialExpiry(trialExpiry)	{
				if((trialExpiry != null) && (!(Object.prototype.toString.call(trialExpiry) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trialExpiry EXPECTED TYPE: String", null, null);
				}
				this.trialExpiry = trialExpiry;
				this.keyModified.set("trial_expiry", 1);

			}

			/**
			 * The method to get the paid
			 * @returns {Boolean} A Boolean representing the paid
			 */
			getPaid()	{
				return this.paid;

			}

			/**
			 * The method to set the value to paid
			 * @param {Boolean} paid A Boolean
			 */
			setPaid(paid)	{
				if((paid != null) && (!(Object.prototype.toString.call(paid) == "[object Boolean]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paid EXPECTED TYPE: Boolean", null, null);
				}
				this.paid = paid;
				this.keyModified.set("paid", 1);

			}

			/**
			 * The method to get the paidType
			 * @returns {String} A String representing the paidType
			 */
			getPaidType()	{
				return this.paidType;

			}

			/**
			 * The method to set the value to paidType
			 * @param {String} paidType A String
			 */
			setPaidType(paidType)	{
				if((paidType != null) && (!(Object.prototype.toString.call(paidType) == "[object String]"))){
					throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paidType EXPECTED TYPE: String", null, null);
				}
				this.paidType = paidType;
				this.keyModified.set("paid_type", 1);

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
		}
	},
	Operations : class {
		constructor(){

		}

		/**
		 * The method to get organization
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async getOrganization(){
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/org");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
			return handlerInstance.apiCall("Org.Model.ResponseHandler", "application/json");

		}

		/**
		 * The method to upload organization photo
		 * @param {FileBodyWrapper} request An instance of FileBodyWrapper
		 * @returns {APIResponse} An instance of APIResponse
		 * @throws {SDKException}
		 */
		async uploadOrganizationPhoto(request){
			if((request != null) && (!(request instanceof ZCRM.Org.Model.FileBodyWrapper))){
				throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: FileBodyWrapper", null, null);
			}
			var handlerInstance = new CommonAPIHandler();
			var apiPath = '';
			apiPath = apiPath.concat("/crm/v2/org/photo");
			handlerInstance.setAPIPath(apiPath);
			handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
			handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
			handlerInstance.setContentType("multipart/form-data");
			handlerInstance.setRequest(request);
			handlerInstance.setMandatoryChecker(true);
			return handlerInstance.apiCall("Org.Model.ActionResponse", "application/json");

		}
	},

}