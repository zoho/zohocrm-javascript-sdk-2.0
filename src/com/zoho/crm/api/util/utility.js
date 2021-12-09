/**
 * This class handles module field details.
 */
class Utility {
    static async assertNotNull(value, errorCode, errorMessage) {
        if (value == null) {
            throw new SDKException(errorCode, errorMessage);
        }
    }

    static isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    static async fileExistsFlow(moduleAPIName, encodedName, lastModifiedTime) {
        let recordFieldDetailsJson = await LocalCache.get(encodedName);

        if (Initializer.sdkConfig.getAutoRefreshFields() == true && !Utility.getModifiedModules && (!(recordFieldDetailsJson.hasOwnProperty(Constants.FIELDS_LAST_MODIFIED_TIME)) || Utility.forceRefresh || (new Date().getTime() - recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME]) > 3600000)) {
            Utility.getModifiedModules = true;

            lastModifiedTime = !this.forceRefresh && recordFieldDetailsJson.hasOwnProperty(Constants.FIELDS_LAST_MODIFIED_TIME) ? recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] : null;
            
            await Utility.modifyFields(encodedName, lastModifiedTime);

            Utility.getModifiedModules = false;
        }
        else if (Initializer.sdkConfig.getAutoRefreshFields() == false && Utility.forceRefresh && !Utility.getModifiedModules) {
            this.getModifiedModules = true;

            await Utility.modifyFields(encodedName, lastModifiedTime);

            this.getModifiedModules = false;
        }

        recordFieldDetailsJson = await LocalCache.get(encodedName);

        if (moduleAPIName == null || (recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase()) && recordFieldDetailsJson[moduleAPIName.toLowerCase()] != null)) {
            return;
        }
        else {
            await fillDataType();
            
            recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};

            await LocalCache.set(encodedName, recordFieldDetailsJson);

            let fieldsDetails = await Utility.getFieldsDetails(moduleAPIName);

            recordFieldDetailsJson = await LocalCache.get(encodedName);

            recordFieldDetailsJson[moduleAPIName.toLowerCase()] = fieldsDetails;

            await LocalCache.set(encodedName, recordFieldDetailsJson);
        }
    }

    static async verifyModuleAPIName(moduleName) {
        if (moduleName != null && Constants.DEFAULT_MODULENAME_VS_APINAME.has(moduleName.toLowerCase()) && Constants.DEFAULT_MODULENAME_VS_APINAME.get(moduleName.toLowerCase()) != null) {
            return Constants.DEFAULT_MODULENAME_VS_APINAME.get(moduleName.toLowerCase());
        }

        if (Initializer.sdkConfig.getCacheStore()) {
            let encodedName = new Converter().getEncodedFileName();

            if (await LocalCache.exist()) {
                let fieldsJSON = await LocalCache.get(encodedName);

                if (fieldsJSON.hasOwnProperty(Constants.SDK_MODULE_METADATA) && fieldsJSON[Constants.SDK_MODULE_METADATA].hasOwnProperty(moduleName.toLowerCase())) {
                    let moduleMeta = fieldsJSON[Constants.SDK_MODULE_METADATA];

                    return moduleMeta[moduleName.toLowerCase()][Constants.API_NAME];
                }
            }
        }
        else {
            if (CommonAPIHandler.recordFieldDetails.has(moduleName.toLowerCase())) {
                return;
            }

            if (CommonAPIHandler.recordFieldDetails.has(Constants.SDK_MODULE_METADATA)) {
                let fieldsJSON = CommonAPIHandler.recordFieldDetails.get(Constants.SDK_MODULE_METADATA);
                if (fieldsJSON.hasOwnProperty(moduleName.toLowerCase())) {
                    let moduleMeta = fieldsJSON[Constants.SDK_MODULE_METADATA];

                    return moduleMeta[moduleName.toLowerCase()][Constants.API_NAME];
                }
            }
        }

        return moduleName;
    }

    static async setHandlerAPIPath(moduleAPIName, handlerInstance) {
        if (handlerInstance == null) {
            return;
        }

        let apiPath = handlerInstance.getAPIPath();

        if (apiPath.toLowerCase().includes(moduleAPIName.toLowerCase())) {
            let apiPathSplit = apiPath.split("/");

            for (var i = 0; i < apiPathSplit.length; i++) {
                if (apiPathSplit[i].toLowerCase() == moduleAPIName.toLowerCase()) {
                    apiPathSplit[i] = moduleAPIName;
                }
                else if (Constants.DEFAULT_MODULENAME_VS_APINAME.has(apiPathSplit[i].toLowerCase()) && Constants.DEFAULT_MODULENAME_VS_APINAME.get(apiPathSplit[i].toLowerCase()) != null) {
                    apiPathSplit[i] = Constants.DEFAULT_MODULENAME_VS_APINAME.get(apiPathSplit[i].toLowerCase());
                }
            }

            apiPath = apiPathSplit.join("/");

            handlerInstance.setAPIPath(apiPath);
        }
    }

    /**
     * This method to fetch field details of the current module for the current user and store the result in a JSON file.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
     * @param {CommonAPIHandler} handlerInstance - A String containing CommonAPIHandler Instance.
     */
    static async getFields(moduleAPIName, handlerInstance = null) {
        this.moduleAPIName = moduleAPIName;

        await this.getFieldsInfo(this.moduleAPIName, handlerInstance);
    }

    /**
     * This method to fetch field details of the current module for the current user and store the result in a JSON file.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
     * @param {CommonAPIHandler} handlerInstance - A String containing CommonAPIHandler Instance.
     */
    static async getFieldsInfo(moduleAPIName, handlerInstance = null) {
        let lastModifiedTime = null;

        let encodedName = null;

        await fillDataType();

        try {
            if (moduleAPIName != null && await Utility.searchJSONDetails(moduleAPIName) != null) {
                return;
            }

            if(moduleAPIName != null && moduleAPIName != undefined) {
                moduleAPIName = await Utility.verifyModuleAPIName(moduleAPIName);

                await Utility.setHandlerAPIPath(moduleAPIName, handlerInstance);

                if (handlerInstance != null && handlerInstance.getModuleAPIName() == null && !Constants.SKIP_MODULES.includes(moduleAPIName.toLowerCase())) {
                    return;
                }
            }

            if (Initializer.sdkConfig.getCacheStore()) {
                encodedName = new Converter().getEncodedFileName();

                if (await LocalCache.exist()) {
                    await Utility.fileExistsFlow(moduleAPIName, encodedName, lastModifiedTime);
                }
                else if (Initializer.sdkConfig.getAutoRefreshFields() == true) {
                    await fillDataType();

                    this.apiSupportedModule = this.apiSupportedModule.size > 0 ? this.apiSupportedModule : await this.getModules(null);

                    let recordFieldDetailsJson = await LocalCache.exist() ? await LocalCache.get(encodedName) : {};

                    recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = new Date().getTime();

                    if (Object.keys(this.apiSupportedModule).length > 0) {
                        for (let module in this.apiSupportedModule) {
                            if (!recordFieldDetailsJson.hasOwnProperty(module)) {
                                let moduleData = this.apiSupportedModule[module];

                                recordFieldDetailsJson[module] = {};

                                await LocalCache.set(encodedName, recordFieldDetailsJson);

                                let fieldsDetails = await Utility.getFieldsDetails(moduleData[Constants.API_NAME]);

                                recordFieldDetailsJson = await LocalCache.get(encodedName);

                                recordFieldDetailsJson[module] = fieldsDetails;

                                await LocalCache.set(encodedName, recordFieldDetailsJson);
                            }
                        }
                    }
                }
                else if (Utility.forceRefresh && !Utility.getModifiedModules) {
                    //New file - and force refresh by Users
                    Utility.getModifiedModules = true;

                    let recordFieldDetailsJson = {};

                    await LocalCache.set(encodedName, recordFieldDetailsJson);

                    await Utility.modifyFields(encodedName, lastModifiedTime);

                    Utility.getModifiedModules = false;
                }
                else {
                    await fillDataType();

                    let recordFieldDetailsJson = {};

                    recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};

                    await LocalCache.set(encodedName, recordFieldDetailsJson);

                    let fieldsDetails = await Utility.getFieldsDetails(moduleAPIName);

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

                let fieldDetails = await Utility.getFieldsDetails(moduleAPIName);

                CommonAPIHandler.recordFieldDetails.set(moduleAPIName.toLowerCase(), fieldDetails);
            }
        }
        catch (error) {
            if (Initializer.sdkConfig.getCacheStore()) {
                if (await LocalCache.exist()) {
                    let recordFieldDetailsJson = await LocalCache.get(encodedName);

                    if (recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase())) {
                        delete recordFieldDetailsJson[moduleAPIName.toLowerCase()];
                    }

                    if (Utility.forceRefresh || Utility.getModifiedModules) {
                        Utility.getModifiedModules = false;

                        Utility.forceRefresh = false;

                        if (lastModifiedTime != null) {
                            recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = lastModifiedTime;
                        }
                    }

                    await LocalCache.set(encodedName, recordFieldDetailsJson);
                }
            }

            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }

            SDKLogger.log(Levels.ERROR, Constants.EXCEPTION + error.toString());

            throw error;
        }
    }

    static async modifyFields(encodedName, modifiedTime) {
        let modifiedModules = await this.getModules(modifiedTime);

        let recordFieldDetailsJson = await LocalCache.get(encodedName);

        recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = new Date().getTime();

        await LocalCache.set(encodedName, recordFieldDetailsJson);

        if (Object.keys(modifiedModules).length > 0) {
            for (let module in modifiedModules) {
                if (recordFieldDetailsJson.hasOwnProperty(module)) {
                    await this.deleteFields(recordFieldDetailsJson, module);
                }
            }

            await LocalCache.set(encodedName, recordFieldDetailsJson);

            for (let module in modifiedModules) {
                let moduleMeta = modifiedModules[module];

                await Utility.getFieldsInfo(moduleMeta[Constants.API_NAME]);
            }
        }
    }

    static async deleteFields(recordFieldDetailsJson, module) {
        let subformModules = [];

        let fieldsJSON = recordFieldDetailsJson[module.toLowerCase()];

        for (let keyName of Object.keys(fieldsJSON)) {
            if (fieldsJSON[keyName].hasOwnProperty(Constants.SUBFORM) && fieldsJSON[keyName][Constants.SUBFORM] == true && recordFieldDetailsJson.hasOwnProperty((fieldsJSON[keyName][Constants.MODULE]).toLowerCase())) {
                subformModules.push(fieldsJSON[keyName][Constants.MODULE]);
            }
        }

        delete recordFieldDetailsJson[module.toLowerCase()];

        if (subformModules.length > 0) {
            for (let subformModule of subformModules) {
                await this.deleteFields(recordFieldDetailsJson, subformModule);
            }
        }
    }

    static async getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler) {
        try {
            let isnewData = false;

            let key = (moduleAPIName + Constants.UNDERSCORE + Constants.RELATED_LISTS).toLowerCase();

            await fillDataType();

            if (Initializer.sdkConfig.getCacheStore()) {
                var encodedName = new Converter().getEncodedFileName();

                let recordFieldDetailsJSON = null;

                if ( !await LocalCache.exist() || (await LocalCache.exist() && (!(await LocalCache.get(encodedName)).hasOwnProperty(key) || (await LocalCache.get(encodedName))[key] == null || (await LocalCache.get(encodedName))[key].length <= 0 ))) {
                    isnewData = true;

                    moduleAPIName = await Utility.verifyModuleAPIName(moduleAPIName);

                    let relatedListValues = await Utility.getRelatedListDetails(moduleAPIName);

                    recordFieldDetailsJSON = await LocalCache.exist() ? await LocalCache.get(encodedName) : {};

                    recordFieldDetailsJSON[key] = relatedListValues;

                    await LocalCache.set(encodedName, recordFieldDetailsJSON);
                }

                recordFieldDetailsJSON = await LocalCache.get(encodedName);

                let moduleRelatedList = recordFieldDetailsJSON.hasOwnProperty(key) ? recordFieldDetailsJSON[key] : {};

                if (!(await Utility.checkRelatedListExists(relatedModuleName, moduleRelatedList, commonAPIHandler)) && !isnewData) {
                    delete recordFieldDetailsJSON[key];

                    await LocalCache.set(encodedName, recordFieldDetailsJSON);

                    await Utility.getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler);
                }
            }
            else {
                if (CommonAPIHandler.recordFieldDetails.size <= 0 || (CommonAPIHandler.recordFieldDetails.size > 0 && (!CommonAPIHandler.recordFieldDetails.has(key) || CommonAPIHandler.recordFieldDetails.get(key) == null || CommonAPIHandler.recordFieldDetails.get(key).length <= 0 ))) {
                    isnewData = true;

                    moduleAPIName = await Utility.verifyModuleAPIName(moduleAPIName);

                    let relatedListValues = await Utility.getRelatedListDetails(moduleAPIName);

                    CommonAPIHandler.recordFieldDetails.set(key, relatedListValues);
                }

                let moduleRelatedList = CommonAPIHandler.recordFieldDetails.has(key) ? CommonAPIHandler.recordFieldDetails.get(key) : {};

                if (! (await Utility.checkRelatedListExists(relatedModuleName, moduleRelatedList, commonAPIHandler)) && !isnewData) {
                    CommonAPIHandler.recordFieldDetails.delete(key);

                    await Utility.getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler);
                }
            }
        }
        catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }

            SDKLogger.log(Levels.ERROR, Constants.EXCEPTION + error.toString());

            throw error;
        }
    }

    static async checkRelatedListExists(relatedModuleName, modulerelatedListArray, commonAPIHandler) {
        for (let index = 0; index < modulerelatedListArray.length; index++) {
            let relatedListObject = modulerelatedListArray[index];

            if (relatedListObject[Constants.API_NAME] != null && relatedListObject[Constants.API_NAME].toLowerCase() == relatedModuleName.toLowerCase()) {
                if (relatedListObject[Constants.HREF].toString().toLowerCase() == Constants.NULL_VALUE) {
                    throw new SDKException(Constants.UNSUPPORTED_IN_API, commonAPIHandler.getHttpMethod() + " " + commonAPIHandler.getAPIPath() + Constants.UNSUPPORTED_IN_API_MESSAGE);
                }

                if (relatedListObject[Constants.MODULE].toString().toLowerCase() != Constants.NULL_VALUE) {
                    commonAPIHandler.setModuleAPIName(relatedListObject[Constants.MODULE]);

                    await Utility.getFieldsInfo(relatedListObject[Constants.MODULE], commonAPIHandler);
                }

                return true;
            }
        }

        return false;
    }

    static async getRelatedListDetails(moduleAPIName) {
        var relatedListArray = [];

        var response = await new ZCRM.RelatedList.Operations(moduleAPIName).getRelatedLists();

        if (response != null) {
            if (response.getStatusCode() == Constants.NO_CONTENT_STATUS_CODE) {
                return relatedListArray;
            }

            let responseObject = await response.getObject();

            if (responseObject != null) {
                if (responseObject instanceof ZCRM.RelatedList.Model.ResponseWrapper) {
                    let relatedLists = await responseObject.getRelatedLists();

                    for (let relatedList of relatedLists) {
                        let relatedListDetail = {};

                        relatedListDetail[Constants.API_NAME] = await relatedList.getAPIName();

                        relatedListDetail[Constants.MODULE] = await relatedList.getModule() != null ? relatedList.getModule() : Constants.NULL_VALUE;

                        relatedListDetail[Constants.NAME] = await relatedList.getName();

                        relatedListDetail[Constants.HREF] = await relatedList.getHref() != null ? relatedList.getHref() : Constants.NULL_VALUE;

                        relatedListArray.push(relatedListDetail);
                    }
                }
                else if (responseObject instanceof ZCRM.RelatedList.Model.APIException) {
                    let errorResponse = {};

                    errorResponse.code = await responseObject.getCode().getValue();

                    errorResponse.status = await responseObject.getStatus().getValue();

                    errorResponse.message = await responseObject.getMessage().getValue();

                    throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
                }
            }
            else {
                let errorResponse = {};

                errorResponse.code = response.getStatusCode();

                throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
            }
        }

        return relatedListArray;
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

        if (response != null) {
            if (response.getStatusCode() == Constants.NO_CONTENT_STATUS_CODE) {
                return fieldsDetails;
            }

            let responseObject = await response.getObject();

            if (responseObject != null) {
                if (responseObject instanceof ZCRM.Field.Model.ResponseWrapper) {
                    fields = await responseObject.getFields();

                    for(let field of fields) {
                        let keyName = await field.getAPIName();

                        if (Constants.KEYS_TO_SKIP.includes(keyName)) {
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

                        fieldsDetails[Constants.LINE_TAX] = fieldDetail;
                    }
                    if (Constants.NOTES.toLowerCase() == moduleAPIName.toLowerCase()) {
                        let fieldDetail = {};

                        fieldDetail.name = Constants.ATTACHMENTS;

                        fieldDetail.type = Constants.LIST_NAMESPACE;

                        fieldDetail.structure_name = Constants.ATTACHMENTS_NAMESPACE;

                        fieldsDetails[Constants.ATTACHMENTS] = fieldDetail;
                    }
                }
                else if (responseObject instanceof ZCRM.Field.Model.APIException) {
                    let errorResponse = {};

                    errorResponse.code = await responseObject.getCode().getValue();

                    errorResponse.status = await responseObject.getStatus().getValue();

                    errorResponse.message = await responseObject.getMessage().getValue();

                    let exception = new SDKException(Constants.API_EXCEPTION, null, errorResponse);

                    if (this.moduleAPIname != null && this.moduleAPIName.toLowerCase() == moduleAPIName.toLowerCase()) {
                        throw exception;
                    }

                    SDKLogger.log(Levels.ERROR, exception.toString());
                }
            }
            else {
                let errorResponse = {};

                errorResponse.code = response.getStatusCode();

                throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
            }
        }

        return fieldsDetails;
    }

    static async searchJSONDetails(key) {
        key = Constants.PACKAGE_NAMESPACE + key;

        for (let keyInJSON in classDetailMap) {
            if (keyInJSON.toLowerCase() === key.toLowerCase()) {
                let returnJSON = {};

                returnJSON[Constants.MODULEPACKAGENAME] = keyInJSON;

                returnJSON[Constants.MODULEDETAILS] = classDetailMap[keyInJSON];

                return returnJSON;
            }
        }

        return null;
    }

    static async verifyPhotoSupport(moduleAPIName) {
        try {
            moduleAPIName = await Utility.verifyModuleAPIName(moduleAPIName);

            if (Constants.PHOTO_SUPPORTED_MODULES.includes(moduleAPIName.toLowerCase())) {
                return true;
            }

            let modules = await Utility.getModuleNames();

            if (modules.hasOwnProperty(moduleAPIName.toLowerCase()) && modules[moduleAPIName.toLowerCase()] != null) {
                let moduleMetaData = modules[moduleAPIName.toLowerCase()];

                if (moduleMetaData.hasOwnProperty(Constants.GENERATED_TYPE) && moduleMetaData[Constants.GENERATED_TYPE] != Constants.GENERATED_TYPE_CUSTOM) {
                    throw new SDKException(Constants.UPLOAD_PHOTO_UNSUPPORTED_ERROR, Constants.UPLOAD_PHOTO_UNSUPPORTED_MESSAGE + moduleAPIName);
                }
            }
        }
        catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }

            Logger.error(Constants.EXCEPTION, error);

            throw error;
        }

        return true;
    }

    static async getModuleNames() {
        let moduleData = {};

        if (Initializer.sdkConfig.getCacheStore()) {
            let encodedName = new Converter().getEncodedFileName();

            if (!await LocalCache.exist()) {
                moduleData = await Utility.getModules(null);

                await Utility.writeModuleMetaData(encodedName, moduleData);

                return moduleData;
            }
            else if (await LocalCache.exist()) {
                let recordFieldDetailsJson = await LocalCache.get(encodedName);

                if (!recordFieldDetailsJson.hasOwnProperty(Constants.SDK_MODULE_METADATA) || (recordFieldDetailsJson.hasOwnProperty(Constants.SDK_MODULE_METADATA) && (recordFieldDetailsJson[Constants.SDK_MODULE_METADATA] == null || Object.keys(recordFieldDetailsJson[Constants.SDK_MODULE_METADATA]).length <= 0))) {
                    moduleData = await Utility.getModules(null);

                    await Utility.writeModuleMetaData(encodedName, moduleData);

                    return moduleData;
                }
            }

            let recordFieldDetailsJson = await LocalCache.get(encodedName);

            return recordFieldDetailsJson[Constants.SDK_MODULE_METADATA];
        }
        else {
            if (CommonAPIHandler.recordFieldDetails.size <= 0) {
                return moduleData;
            }

            if (!CommonAPIHandler.recordFieldDetails.has(Constants.SDK_MODULE_METADATA) || (CommonAPIHandler.recordFieldDetails.has(Constants.SDK_MODULE_METADATA) && (CommonAPIHandler.recordFieldDetails.get(Constants.SDK_MODULE_METADATA) == null || Object.keys(CommonAPIHandler.recordFieldDetails.get(Constants.SDK_MODULE_METADATA)).length <= 0))) {
                moduleData = await Utility.getModules(null);

                CommonAPIHandler.recordFieldDetails.set(Constants.SDK_MODULE_METADATA, moduleData);

                return moduleData;
            }

            return CommonAPIHandler.recordFieldDetails.get(Constants.SDK_MODULE_METADATA);
        }
    }

    static async writeModuleMetaData(encodedName, moduleData) {
        let fieldDetailsJSON = await LocalCache.exist() ? await LocalCache.get(encodedName) : {};

        fieldDetailsJSON[Constants.SDK_MODULE_METADATA] = moduleData;

        await LocalCache.set(encodedName, fieldDetailsJSON);
    }

    static async getModules(header) {
        let apiNames = {};

        let headerMap = new HeaderMap();

        if (header !== null) {
            await headerMap.add(ZCRM.Module.Model.GetModulesHeader.IF_MODIFIED_SINCE, new Date(header))
        }

        let response = await new ZCRM.Module.Operations().getModules(headerMap);

        if (response !== null) {
            if ([Constants.NO_CONTENT_STATUS_CODE, Constants.NOT_MODIFIED_STATUS_CODE].includes(response.getStatusCode())) {
                return apiNames;
            }

            let responseObject = await response.getObject();

            if (responseObject !== null) {
                if (responseObject instanceof ZCRM.Module.Model.ResponseWrapper) {
                    let modules = responseObject.getModules();

                    modules.forEach(async module => {
                        if (module.getAPISupported() == true) {
                            let moduleDetails = {};

                            moduleDetails[Constants.API_NAME] = await module.getAPIName();

                            moduleDetails[Constants.GENERATED_TYPE] = await module.getGeneratedType().getValue();

                            apiNames[await module.getAPIName().toLowerCase()] = moduleDetails;
                        }
                    });
                }
                else if (responseObject instanceof ZCRM.Module.Model.APIException) {
                    let errorResponse = {};

                    errorResponse.code = responseObject.getCode().getValue();

                    errorResponse.status = responseObject.getStatus().getValue();

                    errorResponse.message = responseObject.getMessage().getValue();

                    throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
                }
            }
            else {
                let errorResponse = {};

                errorResponse.code = response.getStatusCode();

                throw new SDKException(Constants.API_EXCEPTION, null, errorResponse, null);
            }
        }

        if (header == null) {
            try {
                if (Initializer.sdkConfig.getCacheStore()) {
                    let encodedName = new Converter().getEncodedFileName();

                    await Utility.writeModuleMetaData(encodedName, apiNames);
                }
                else {
                    CommonAPIHandler.recordFieldDetails.set(Constants.SDK_MODULE_METADATA, apiNames);
                }
            }
            catch (error) {
                if (!(error instanceof SDKException)) {
                    error = new SDKException(null, null, null, error);
                }

                Logger.error(Constants.EXCEPTION, error);

                throw error;
            }
        }

        return apiNames;
    }

    static async refreshModules() {
        Utility.forceRefresh = true;

        await Utility.getFieldsInfo(null);

        Utility.forceRefresh = false;
    }

    static async getJSONObject(json, key) {
        if (json.has(key)) {
            return json.get(key);
        }

        return null;
    }

    static async setDataType(fieldDetail, field, moduleAPIName) {
        var apiType = field.getDataType();

        var keyName = field.getAPIName();

        var module = "";

        if (field.getSystemMandatory() !== null && field.getSystemMandatory() === true && !(moduleAPIName.toLowerCase() === Constants.CALLS && keyName.toLowerCase() === Constants.CALL_DURATION)) {
            fieldDetail.required = true;
        }

        if (keyName.toLowerCase() === Constants.PRODUCT_DETAILS.toLowerCase() && Constants.INVENTORY_MODULES.includes(moduleAPIName.toLowerCase())) {
            fieldDetail.name = keyName;

            fieldDetail.type = Constants.LIST_NAMESPACE;

            fieldDetail.structure_name = Constants.INVENTORY_LINE_ITEMS;

            fieldDetail[Constants.SKIP_MANDATORY] = true;

            return;
        }
        else if (keyName.toLowerCase() === Constants.PRICING_DETAILS.toLowerCase() && moduleAPIName.toLowerCase() == Constants.PRICE_BOOKS.toLowerCase()) {
            fieldDetail.name = keyName;

            fieldDetail.type = Constants.LIST_NAMESPACE;

            fieldDetail.structure_name = Constants.PRICINGDETAILS;

            fieldDetail[Constants.SKIP_MANDATORY] = true;

            return;
        }
        else if (keyName.toLowerCase() === Constants.PARTICIPANT_API_NAME.toLowerCase() && (moduleAPIName.toLowerCase() === Constants.EVENTS.toLowerCase() || moduleAPIName.toLowerCase() === Constants.ACTIVITIES.toLowerCase())) {
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
        else if (keyName.toLowerCase() === Constants.LAYOUT.toLowerCase()) {
            fieldDetail.name = keyName;

            fieldDetail.type = Constants.LAYOUT_NAMESPACE;

            fieldDetail.structure_name = Constants.LAYOUT_NAMESPACE;

            fieldDetail[Constants.LOOKUP] = true;

            return;
        }
        else if (Utility.apiTypeVsdataType.has(apiType)) {
            fieldDetail.type = Utility.apiTypeVsdataType.get(apiType);
        }
        else if (apiType.toLowerCase() === Constants.FORMULA.toLowerCase()) {
            if (field.getFormula() !== null) {
                let returnType = field.getFormula().getReturnType();

                if (Utility.apiTypeVsdataType.has(returnType) && Utility.apiTypeVsdataType.get(returnType) !== null) {
                    fieldDetail.type = Utility.apiTypeVsdataType.get(returnType);
                }
            }

            fieldDetail[Constants.READ_ONLY] = true;
        }
        else {
            return;
        }

        if (apiType.toLowerCase().includes(Constants.LOOKUP)) {
            fieldDetail[Constants.LOOKUP] = true;
        }

        if (apiType.toLowerCase() === Constants.CONSENT_LOOKUP) {
            fieldDetail[Constants.SKIP_MANDATORY] = true;
        }

        if (Utility.apiTypeVsStructureName.has(apiType)) {
            fieldDetail.structure_name = Utility.apiTypeVsStructureName.get(apiType);
        }

        if (apiType.toLowerCase() === Constants.PICKLIST && field.getPickListValues() !== null && field.getPickListValues().length > 0) {
            let values = [];

            fieldDetail[Constants.PICKLIST] = true;

            field.getPickListValues().every(x => values.push(x.getDisplayValue()));

            fieldDetail.values = values;
        }

        if (apiType.toLowerCase() === Constants.SUBFORM.toLowerCase()) {
            if (field.getSubform() !== null) {
                module = field.getSubform().getModule();

                fieldDetail[Constants.MODULE] = module;

                fieldDetail[Constants.SKIP_MANDATORY] = true;

                fieldDetail[Constants.SUBFORM] = true;
            }
        }

        if (apiType === Constants.LOOKUP) {
            if (field.getLookup() !== null) {
                module = field.getLookup().getModule();

                if (module !== null && module !== Constants.SE_MODULE) {

                    fieldDetail.module = module;

                    if (module.toLowerCase() === Constants.ACCOUNTS.toLowerCase() && !field.getCustomField()) {
                        fieldDetail[Constants.SKIP_MANDATORY] = true;
                    }
                }
                else {
                    module = "";
                }
            }

            fieldDetail.lookup = true;
        }

        if (module.length > 0) {
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

Utility.moduleAPIName = null;

async function fillDataType() {
    if (Utility.apiTypeVsdataType.size > 0 && Utility.apiTypeVsStructureName.size > 0) {
        return;
    }

    let fieldAPINamesString = ["textarea", "text", "website", "email", "phone", "mediumtext", "multiselectlookup", "profileimage", "autonumber"];

    let fieldAPINamesInteger = ["integer"];

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

    for (let fieldAPIName of fieldAPINamesString) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.STRING_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesInteger) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.INTEGER_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesBoolean) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.BOOLEAN_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesLong) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LONG_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesDouble) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.DOUBLE_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesFile) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.FILE_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesDateTime) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.DATETIME_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesDate) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.DATE_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesLookup) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.RECORD_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECORD_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesPickList) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.CHOICE_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesMultiSelectPickList) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.CHOICE_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesSubForm) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECORD_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesOwnerLookUp) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.USER_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.USER_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesMultiUserLookUp) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.USER_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesMultiModuleLookUp) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.MODULE_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINamesFieldFile) {
        Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);

        Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.FIELD_FILE_NAMESPACE);
    }

    for (let fieldAPIName of fieldAPINameTaskRemindAt) {
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