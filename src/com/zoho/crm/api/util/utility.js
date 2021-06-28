/**
 * This class handles module field details.
 */
class Utility {

    static moduleAPIName = null;

    static isEmpty(obj) {

        return Object.keys(obj).length === 0;
    }

    static async getFields(moduleAPIName) {
        this.moduleAPIName = moduleAPIName;

        await this.getFieldsInfo(this.moduleAPIName);
    }

    /**
     * This method to fetch field details of the current module for the current user and store the result in a JSON file.
     * @param {string} moduleAPIName A String containing the CRM module API name.
     */
    static async getFieldsInfo(moduleAPIName) {

        let lastModifiedTime = null;

        let encodedName = null;

        await fillDataType();

        try {

            if (moduleAPIName != null && await Utility.searchJSONDetails(moduleAPIName) != null) {

				return;
            }

            if(Initializer.sdkConfig.getCacheStore()) {

                encodedName = new Converter().getEncodedFileName();

                if (await LocalCache.exist()) {

                    let recordFieldDetailsJson = await LocalCache.get(encodedName);

                    if(Initializer.sdkConfig.getAutoRefreshFields() == true && !Utility.getModifiedModules && (!(recordFieldDetailsJson.hasOwnProperty(Constants.FIELDS_LAST_MODIFIED_TIME)) || Utility.forceRefresh || (new Date().getTime() - recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME]) > 3600000)) {

                        Utility.getModifiedModules = true;

                        lastModifiedTime = recordFieldDetailsJson.hasOwnProperty(Constants.FIELDS_LAST_MODIFIED_TIME) ? recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] : null;

                        await Utility.modifyFields(lastModifiedTime);

                        Utility.getModifiedModules = false;
                    }
                    else if(Initializer.sdkConfig.getAutoRefreshFields() == false && Utility.forceRefresh && !Utility.getModifiedModules) {

                        this.getModifiedModules = true;

                        await Utility.modifyFields(lastModifiedTime);

                        this.getModifiedModules = false;
                    }

                    recordFieldDetailsJson = await LocalCache.get(encodedName);

                    if(moduleAPIName == null || recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase())) {

                        return;
                    }
                    else {

                        recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};

                        await LocalCache.set(encodedName, recordFieldDetailsJson);

                        let fieldsDetails = await Utility.getFieldsDetails(moduleAPIName.toLowerCase());

                        recordFieldDetailsJson = await LocalCache.get(encodedName);

                        recordFieldDetailsJson[moduleAPIName.toLowerCase()] = fieldsDetails;

                        await LocalCache.set(encodedName, recordFieldDetailsJson);
                    }
                }
                else if(Initializer.sdkConfig.getAutoRefreshFields() == true) {

                    await fillDataType();

                    this.apiSupportedModule = this.apiSupportedModule.size > 0 ? this.apiSupportedModule : await this.getAllModules(null);

                    let recordFieldDetailsJson = {};

                    recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = new Date().getTime();

                    for(let module of this.apiSupportedModule.keys()) {

                        if(!recordFieldDetailsJson.hasOwnProperty(module)) {

                            recordFieldDetailsJson[module] = {};

                            await LocalCache.set(encodedName, recordFieldDetailsJson);

                            let fieldsDetails = await Utility.getFieldsDetails(module);

                            recordFieldDetailsJson = await LocalCache.get(encodedName);

                            recordFieldDetailsJson[module] = fieldsDetails;

                            await LocalCache.set(encodedName, recordFieldDetailsJson);
                        }
                    }
                }
                else if(Utility.forceRefresh && !Utility.getModifiedModules) {

                    Utility.getModifiedModules = true;

                    let recordFieldDetailsJson = {};

                    await LocalCache.set(encodedName, recordFieldDetailsJson);

                    await Utility.modifyFields(lastModifiedTime);

                    Utility.getModifiedModules = false;
                }
                else {

                    await fillDataType();

                    let recordFieldDetailsJson = {};

                    recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};

                    await LocalCache.set(encodedName, recordFieldDetailsJson);

                    let fieldsDetails = await Utility.getFieldsDetails(moduleAPIName.toLowerCase());

                    recordFieldDetailsJson = await LocalCache.get(encodedName);

                    recordFieldDetailsJson[moduleAPIName.toLowerCase()] = fieldsDetails;

                    await LocalCache.set(encodedName, recordFieldDetailsJson);
                }
            }
            else {

                if (CommonAPIHandler.recordFieldDetails.has(moduleAPIName.toLowerCase())) {

                    return;
                }

                CommonAPIHandler.recordFieldDetails.set(moduleAPIName.toLowerCase(), {});

                let fieldDetails = await Utility.getFieldsDetails(moduleAPIName.toLowerCase());

                CommonAPIHandler.recordFieldDetails.set(moduleAPIName.toLowerCase(), fieldDetails);
            }
        }
        catch(error) {

            if(Initializer.sdkConfig.getCacheStore()) {

                if (await LocalCache.exist()) {

                    let recordFieldDetailsJson = await LocalCache.get(encodedName);

                    if(recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase())){

                        delete recordFieldDetailsJson[moduleAPIName.toLowerCase()];
                    }

                    if(Utility.forceRefresh || Utility.getModifiedModules) {

                        Utility.getModifiedModules = false;

                        Utility.forceRefresh = false;

                        if(lastModifiedTime != null){

                            recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = lastModifiedTime;
                        }
                    }

                    await LocalCache.set(encodedName, recordFieldDetailsJson);
                }
            }

            if(!(error instanceof SDKException)) {

                error = new SDKException(null, null, null, error);
            }

            SDKLogger.log(Levels.ERROR, Constants.EXCEPTION + error.toString());

            throw error;
        }
    }

    static async modifyFields(modifiedTime) {

        var encodedName = new Converter().getEncodedFileName();

        let modifiedModules = await this.getAllModules(modifiedTime);

        let recordFieldDetailsJson = await LocalCache.get(encodedName);

        recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = new Date().getTime();

        await LocalCache.set(encodedName, recordFieldDetailsJson);

        if(modifiedModules.size > 0) {

            for(let module of modifiedModules.keys()) {

                if(recordFieldDetailsJson.hasOwnProperty(module)) {

                    await this.deleteFields(recordFieldDetailsJson, module);
                }
            }

            await LocalCache.set(encodedName, recordFieldDetailsJson);

            for(let module of modifiedModules.keys()) {

                await Utility.getFieldsInfo(module);
            }
        }
    }

    static async deleteFields(recordFieldDetailsJson, module) {

        let subformModules = [];

        let fieldsJSON = recordFieldDetailsJson[module.toLowerCase()];

        for (let keyName of Object.keys(fieldsJSON)) {

            if(fieldsJSON[keyName].hasOwnProperty(Constants.SUBFORM) && fieldsJSON[keyName][Constants.SUBFORM] == true) {

                subformModules.push(fieldsJSON[keyName][Constants.MODULE.toLowerCase()]);
            }
        }

        delete recordFieldDetailsJson[module.toLowerCase()];

        if(subformModules.length > 0) {

            for(let subformModule of subformModules) {

                await this.deleteFields(recordFieldDetailsJson, subformModule);
            }
        }
    }

    static async getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler) {

		try {

            let isnewData = false;

			let key = (moduleAPIName + Constants.UNDERSCORE + Constants.RELATED_LISTS).toLowerCase();

            await fillDataType();

            if(Initializer.sdkConfig.getCacheStore()) {

                var encodedName = new Converter().getEncodedFileName();

                if (! await LocalCache.exist()) {

                    await LocalCache.set(encodedName, {});
                }

                let JSONDetails = await LocalCache.get(encodedName);

                if(!JSONDetails.hasOwnProperty(key)) {

                    isnewData = true;

                    let relatedListValues1 = await Utility.getRelatedListDetails(moduleAPIName);

                    let recordFieldDetailsJSON1 = await LocalCache.get(encodedName);

                    recordFieldDetailsJSON1[key] = relatedListValues1;

                    await LocalCache.set(encodedName, recordFieldDetailsJSON1);
                }

                let recordFieldDetailsJSON = await LocalCache.get(encodedName);

                let moduleRelatedList = recordFieldDetailsJSON[key];

                if(!(await Utility.checkRelatedListExists(relatedModuleName, moduleRelatedList, commonAPIHandler)) && !isnewData) {

                    delete recordFieldDetailsJSON[key];

                    await LocalCache.set(encodedName, recordFieldDetailsJSON);

                    await Utility.getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler);
                }
            }
            else if (CommonAPIHandler.recordFieldDetails.has(key)) {

                let moduleRelatedList = CommonAPIHandler.recordFieldDetails.get(key);

                if (! await Utility.checkRelatedListExists(relatedModuleName, moduleRelatedList, commonAPIHandler)) {

                    await Utility.getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler);
                }
            }
            else {

                CommonAPIHandler.recordFieldDetails.set(key, {});

                let relatedListValues = await Utility.getRelatedListDetails(moduleAPIName);

                CommonAPIHandler.recordFieldDetails.set(key, relatedListValues);

                await Utility.getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler);
            }
        }
        catch(error) {

            if(!(error instanceof SDKException)) {

                error = new SDKException(null, null, null, error);
            }

            SDKLogger.log(Levels.ERROR, Constants.EXCEPTION + error.toString());

            throw error;
        }
    }

    static async checkRelatedListExists(relatedModuleName, modulerelatedListJA, commonAPIHandler) {

		for (let index = 0; index < modulerelatedListJA.length; index++) {

			let relatedListJO = modulerelatedListJA[index];

			if (relatedListJO[Constants.API_NAME] != null && relatedListJO[Constants.API_NAME].toLowerCase() == relatedModuleName.toLowerCase()) {

                if(relatedListJO[Constants.HREF].toString().toLowerCase() == Constants.NULL_VALUE) {

					throw new SDKException(Constants.UNSUPPORTED_IN_API, commonAPIHandler.getHttpMethod() + " " + commonAPIHandler.getAPIPath() + Constants.UNSUPPORTED_IN_API_MESSAGE);
				}

				if(relatedListJO[Constants.MODULE.toLowerCase()].toString().toLowerCase() != Constants.NULL_VALUE)
				{
					commonAPIHandler.setModuleAPIName(relatedListJO[Constants.MODULE.toLowerCase()]);

				    await Utility.getFieldsInfo(relatedListJO[Constants.MODULE.toLowerCase()]);
                }

				return true;
			}
		}

		return false;
	}

    static async getRelatedListDetails(moduleAPIName) {

        var relatedListJA = [];

        var response = await new ZCRM.RelatedList.Operations(moduleAPIName).getRelatedLists();

		if (response != null) {

			if (response.getStatusCode() == Constants.NO_CONTENT_STATUS_CODE) {

				return relatedListJA;
            }

            let responseObject = await response.getObject();

            if(responseObject != null) {

                if (responseObject instanceof ZCRM.RelatedList.Model.ResponseWrapper) {

                    let relatedLists = await responseObject.getRelatedLists();

                    for (let relatedList in relatedLists) {

                        let relatedListDetail = {};

                        relatedListDetail[Constants.API_NAME] = await relatedLists[relatedList].getAPIName();

                        relatedListDetail[Constants.MODULE.toLowerCase()] = await relatedLists[relatedList].getModule() != null ?relatedLists[relatedList].getModule() : Constants.NULL_VALUE;

                        relatedListDetail[Constants.NAME] = await relatedLists[relatedList].getName();

                        relatedListDetail[Constants.HREF] = await relatedLists[relatedList].getHref() != null ? relatedLists[relatedList].getHref() : Constants.NULL_VALUE ;

                        relatedListJA.push(relatedListDetail);
                    }
                }
                else if (responseObject instanceof ZCRM.RelatedList.Model.APIException)
                {
                    let errorResponse = {};

                    errorResponse.code = await responseObject.getCode().getValue();

                    errorResponse.status = await responseObject.getStatus().getValue();

                    errorResponse.message = await responseObject.getMessage().getValue();

                    throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
                }
            }
            else {

                let errorResponse = {};

                errorResponse[Constants.CODE] = response.getStatusCode();

                throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
            }
		}

		return relatedListJA;
    }

    /**
     * This method to get module field data from Zoho CRM.
     * @param {string} moduleAPIName A String containing the CRM module API name.
     * @returns {object} A Object representing the Zoho CRM module field details.
     */
    static async getFieldsDetails(moduleAPIName) {

        var fields = {};

        var fieldsDetails = {};

        var fieldOperation = new ZCRM.Field.Operations(moduleAPIName);

        var response = await fieldOperation.getFields(null);

        if(response != null) {

            if (response.getStatusCode() == Constants.NO_CONTENT_STATUS_CODE) {

				return fieldsDetails;
            }

            let responseObject = await response.getObject();

            if(responseObject != null) {

                if(responseObject instanceof ZCRM.Field.Model.ResponseWrapper) {

                    fields = await responseObject.getFields();

                    for(let field of fields) {

                        let keyName = await field.getAPIName();

                        if(Constants.KEYS_TO_SKIP.includes(keyName)){

                            continue;
                        }

                        let fieldDetail = {};

                        await Utility.setDataType(fieldDetail, field, moduleAPIName);

                        fieldsDetails[field.getAPIName()] = fieldDetail;
                    }

                    if (Constants.INVENTORY_MODULES.includes(moduleAPIName.toLowerCase())) {

                        let fieldDetail = {};

                        fieldDetail.name = Constants.LINE_TAX;

                        fieldDetail.type = Constants.LIST_NAMESPACE;

                        fieldDetail.structure_name = Constants.LINE_TAX_NAMESPACE;

                        fieldsDetails[Constants.LOOKUP] = true;

                        fieldsDetails[Constants.LINE_TAX] = fieldDetail;
                    }
                    if (Constants.NOTES.toLowerCase() == moduleAPIName.toLowerCase()) {

                        let fieldDetail = {};

                        fieldDetail.name =  Constants.ATTACHMENTS;

                        fieldDetail.type = Constants.LIST_NAMESPACE;

                        fieldDetail.structure_name =  Constants.ATTACHMENTS_NAMESPACE;

                        fieldsDetails[Constants.ATTACHMENTS] = fieldDetail;
                    }
                }
                else if (responseObject instanceof ZCRM.Field.Model.APIException) {
                    let errorResponse = {};

                    errorResponse.code = await responseObject.getCode().getValue();

                    errorResponse.status = await responseObject.getStatus().getValue();

                    errorResponse.message = await responseObject.getMessage().getValue();

                    let exception = new SDKException(Constants.API_EXCEPTION, null, errorResponse);

                    if(this.moduleAPIName.toLowerCase() == moduleAPIName.toLowerCase()) {
                        throw exception;
                    }

                    SDKLogger.log(Levels.ERROR, exception.toString());
                }
            }
            else {

                let errorResponse = {};

                errorResponse[Constants.CODE] = response.getStatusCode();

                throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
            }
        }

        return fieldsDetails;
    }

    static async verifyPhotoSupport(moduleAPIName) {
        return;
    }

    static async getAllModules(header) {

        let apiNames = new Map();

        let headerMap = new HeaderMap();

        if(header !== null) {

            await headerMap.add(ZCRM.Module.Model.GetModulesHeader.IF_MODIFIED_SINCE, new Date(header))
        }

        let response = await new ZCRM.Module.Operations().getModules(headerMap);

        if(response !== null) {

            if([Constants.NO_CONTENT_STATUS_CODE, Constants.NOT_MODIFIED_STATUS_CODE].includes(response.getStatusCode())) {

                return apiNames;
            }

            let responseObject = await response.getObject();

            if(responseObject !== null) {

                if(responseObject instanceof ZCRM.Module.Model.ResponseWrapper) {

                    let modules = responseObject.getModules();

                    for(let module of modules) {

                        if(module.getAPISupported() === true){

                            apiNames.set(module.getAPIName().toLowerCase(), module.getGeneratedType().getValue());
                        }
                    }
                }
                else if(responseObject instanceof ZCRM.Module.Model.APIException) {

                    let errorResponse = {};

                    errorResponse[Constants.CODE] = responseObject.getCode().getValue();

                    errorResponse[Constants.STATUS] = responseObject.getStatus().getValue();

                    errorResponse[Constants.MESSAGE] = responseObject.getMessage().getValue();

                    throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
                }
            }
            else {

                let errorResponse = {};

                errorResponse[Constants.CODE] = response.getStatusCode();

                throw new SDKException(Constants.API_EXCEPTION, null, errorResponse, null);
            }
        }

        return apiNames;
    }

    static async searchJSONDetails(key) {

        key =  Constants.PACKAGE_NAMESPACE + key;

        for(let keyInJSON in classDetailMap) {

            if(keyInJSON.toLowerCase() === key.toLowerCase()) {

                let returnJSON = {};

                returnJSON[Constants.MODULEPACKAGENAME] = keyInJSON;

                returnJSON[Constants.MODULEDETAILS] = classDetailMap[keyInJSON];

                return returnJSON;
            }
        }

        return null;
    }

    static async refreshModules() {

        Utility.forceRefresh = true;

        await Utility.getFieldsInfo(null);

        Utility.forceRefresh = false;
    }

    static async getJSONObject(json, key) {

        if(json.has(key)) {

            return json.get(key);
        }

        return null;
    }

    static async setDataType(fieldDetail, field, moduleAPIName){

            var apiType = field.getDataType();

            var keyName = field.getAPIName();

            var module = "";

            if(field.getSystemMandatory() !== null && field.getSystemMandatory() === true && !(moduleAPIName.toLowerCase() === Constants.CALLS.toLowerCase() && keyName.toLowerCase() === Constants.CALL_DURATION.toLowerCase())) {

                fieldDetail[Constants.REQUIRED] = true;
            }

            if(keyName.toLowerCase() === Constants.PRODUCT_DETAILS.toLowerCase() && Constants.INVENTORY_MODULES.includes(moduleAPIName.toLowerCase())) {

                fieldDetail.name = keyName;

                fieldDetail.type = Constants.LIST_NAMESPACE;

                fieldDetail.structure_name = Constants.INVENTORY_LINE_ITEMS;

                fieldDetail[Constants.SKIP_MANDATORY] = true;

                return;
            }
            else if(keyName.toLowerCase() === Constants.PRICING_DETAILS.toLowerCase() && moduleAPIName.toLowerCase() == Constants.PRICE_BOOKS.toLowerCase()) {

                fieldDetail.name = keyName;

                fieldDetail.type = Constants.LIST_NAMESPACE;

                fieldDetail.structure_name = Constants.PRICINGDETAILS;

                fieldDetail[Constants.SKIP_MANDATORY] = true;

                return;
            }
            else if(keyName.toLowerCase() === Constants.PARTICIPANT_API_NAME.toLowerCase() && (moduleAPIName.toLowerCase() === Constants.EVENTS.toLowerCase() || moduleAPIName.toLowerCase() === Constants.ACTIVITIES.toLowerCase())) {

                fieldDetail.name = keyName;

                fieldDetail.type = Constants.LIST_NAMESPACE;

                fieldDetail.structure_name = Constants.PARTICIPANTS;

                fieldDetail[Constants.SKIP_MANDATORY] = true;

                return;
            }
            else if (keyName.toLowerCase() === Constants.COMMENTS.toLowerCase() && (moduleAPIName.toLowerCase() === Constants.SOLUTIONS.toLowerCase() || moduleAPIName.toLowerCase() === Constants.CASES.toLowerCase())) {

                fieldDetail.name = keyName;

                fieldDetail.type = Constants.LIST_NAMESPACE;

                fieldDetail.structure_name = Constants.COMMENT_NAMESPACE;

                fieldDetail[Constants.LOOKUP] = true;

                return;
            }
            else if(keyName.toLowerCase() === Constants.LAYOUT.toLowerCase()) {

                fieldDetail.name = keyName;

                fieldDetail.type = Constants.LAYOUT_NAMESPACE;

                fieldDetail.structure_name = Constants.LAYOUT_NAMESPACE;

                fieldDetail[Constants.LOOKUP] = true;

                return;
            }
            else if(Utility.apiTypeVsdataType.has(apiType)) {

                fieldDetail.type = Utility.apiTypeVsdataType.get(apiType);
            }
            else if(apiType.toLowerCase() === Constants.FORMULA.toLowerCase())
            {
                if(field.getFormula() !== null)
                {
                    let returnType = field.getFormula().getReturnType();

                    if(Utility.apiTypeVsdataType.get(returnType) !== null)
                    {
                        fieldDetail.type = Utility.apiTypeVsdataType.get(returnType);
                    }
                }

                fieldDetail[Constants.READ_ONLY] = true;
            }
            else {

                return;
            }

            if(apiType.toLowerCase().includes(Constants.LOOKUP)) {

                fieldDetail[Constants.LOOKUP] = true;
            }

            if(apiType.toLowerCase() === Constants.CONSENT_LOOKUP) {

                fieldDetail.skip_mandatory = true;
            }

            if(Utility.apiTypeVsStructureName.has(apiType)) {

                fieldDetail.structure_name = Utility.apiTypeVsStructureName.get(apiType);
            }

            if(apiType.toLowerCase() === Constants.PICKLIST && field.getPickListValues() !== null && field.getPickListValues().length > 0) {

                let values = [];

                fieldDetail[Constants.PICKLIST] = true;

                field.getPickListValues().every(x => values.push(x.getDisplayValue()));

                fieldDetail.values = values;
            }

            if(apiType.toLowerCase() === Constants.SUBFORM.toLowerCase()) {

                if(field.getSubform() !== null) {

                    module = field.getSubform().getModule();

                    fieldDetail[Constants.MODULE.toLowerCase()] = module;

                    fieldDetail[Constants.SKIP_MANDATORY] = true;

                    fieldDetail[Constants.SUBFORM] = true;
                }
            }

            if(apiType === Constants.LOOKUP) {

                if(field.getLookup() !== null)
                {
                    module = field.getLookup().getModule();

                    if(module !== null && module !== Constants.SE_MODULE) {

                        fieldDetail[Constants.MODULE.toLowerCase()] = module;

                        if(module.toLowerCase() === Constants.ACCOUNTS.toLowerCase() && !field.getCustomField()) {

                            fieldDetail[Constants.SKIP_MANDATORY] = true;
                        }
                    }
                    else {

                        module = "";
                    }
                }

                fieldDetail[Constants.LOOKUP] = true;
            }

            if(module.length > 0) {

                await Utility.getFieldsInfo(module);
            }

            fieldDetail.name = keyName;
    }

    static checkInteger(value) {

        return (parseInt(value) === value) ? true : false;
    }
}

Utility.apiTypeVsdataType = new Map();

Utility.apiTypeVsStructureName = new Map();

Utility.getModifiedModules = false;

Utility.forceRefresh = false;

Utility.apiSupportedModule = new Map();

async function fillDataType() {

    if(Utility.apiTypeVsdataType.size > 0 && Utility.apiTypeVsStructureName.size > 0){

        return;
    }

    let fieldAPINamesString = ["textarea", "text", "website", "email", "phone", "mediumtext", "multiselectlookup","profileimage", "autonumber"];

    let fieldAPINamesInteger = [ "integer"];

    let fieldAPINamesBoolean = ["boolean"];

    let fieldAPINamesLong = ["long", "bigint"];

    let fieldAPINamesDouble = ["double", "percent", "lookup", "currency"];

    let fieldAPINamesFile = ["imageupload"];

    let fieldAPINamesFieldFile = ["fileupload"];

    let fieldAPINamesDateTime = ["datetime", "event_reminder"];

    let fieldAPINamesDate = ["date"];

    let fieldAPINamesLookup = ["lookup"];

    let fieldAPINamesPickList = ["picklist"];

    let fieldAPINamesMultiSelectPickList = ["multiselectpicklist"];

    let fieldAPINamesSubForm = ["subform"];

    let fieldAPINamesOwnerLookUp = ["ownerlookup", "userlookup"];

    let fieldAPINamesMultiUserLookUp = ["multiuserlookup"];

    let fieldAPINamesMultiModuleLookUp = ["multimodulelookup"];

    let fieldAPINameTaskRemindAt = ["ALARM"];

    let fieldAPINameRecurringActivity = ["RRULE"];

    let fieldAPINameReminder = ["multireminder"];

    let fieldAPINameConsentLookUp = ["consent_lookup"];

    for(let fieldAPIName of fieldAPINamesString) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.STRING_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesInteger) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.INTEGER_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesBoolean) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.BOOLEAN_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesLong) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LONG_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesDouble) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.DOUBLE_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesFile) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.FILE_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesDateTime) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.DATETIME_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesDate) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.DATE_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesLookup) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.RECORD_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECORD_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesPickList) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.CHOICE_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesMultiSelectPickList) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.CHOICE_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesSubForm) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECORD_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesOwnerLookUp) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.USER_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.USER_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesMultiUserLookUp) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.USER_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesMultiModuleLookUp) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.MODULE_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINamesFieldFile) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.FIELD_FILE_NAMESPACE);
    }

    for(let fieldAPIName of fieldAPINameTaskRemindAt) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.REMINDAT_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.REMINDAT_NAMESPACE);
    }
    for (let fieldAPIName of fieldAPINameRecurringActivity) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.RECURRING_ACTIVITY_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECURRING_ACTIVITY_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINameReminder) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.REMINDER_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINameConsentLookUp) {

        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.CONSENT_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.CONSENT_NAMESPACE);
    }
}