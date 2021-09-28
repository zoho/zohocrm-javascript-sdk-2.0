/**
 * The class contains methods to manipulate the module fields only when autoRefreshFields is set to false in Initializer.
 */
class ModuleFieldsHandler {
    /**
     * The method to delete fields JSON File of the current user.
     * @throws {SDKException}
     */
    static async deleteFieldsFile() {
        try {
            let encodedFileName = await new Converter().getEncodedFileName();

            await LocalCache.removeKey(encodedFileName);

        } catch (error) {
            let exception = new SDKException(null, null, null, error);

            SDKLogger.log(Levels.ERROR, Constants.DELETE_FIELD_FILE_ERROR, exception);

            throw exception;
        }
    }

    /**
     * The method to delete fields of the given module from the current user's fields JSON.
     * @param {String} module A string representing the module.
     * @throws {SDKException}
     */
    static async deleteFields(module) {
        try {
            let encodedFileName = await new Converter().getEncodedFileName();

            let recordFieldDetailsJson = await LocalCache.get(encodedFileName);

            if (recordFieldDetailsJson.hasOwnProperty(module.toLowerCase())) {
                await Utility.deleteFields(recordFieldDetailsJson, module);

                await LocalCache.set(encodedFileName, recordFieldDetailsJson);
            }
        }
        catch (error) {
            let exception = new SDKException(null, null, null, error);

            throw exception;
        }
    }

    /**
     * The method to force-refresh fields of a module.
     * @param {String} module A string representing the module.
     * @throws {SDKException}
     */
    static async refreshFields(module) {
        try {
            await ModuleFieldsHandler.deleteFields(module);

            await Utility.getFieldsInfo(module);
        }
        catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }

            SDKLogger.log(Levels.ERROR, Constants.REFRESH_SINGLE_MODULE_FIELDS_ERROR + module, error);

            throw error;
        }
    }

    /**
     * The method to force-refresh fields of all the available modules.
     * @throws {SDKException}
     */
    static async refreshAllModules() {
        try {
            await Utility.refreshModules();
        }
        catch (error) {
            if (!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }

            SDKLogger.log(Levels.ERROR, Constants.REFRESH_ALL_MODULE_FIELDS_ERROR, error);

            throw error;
        }
    }
}