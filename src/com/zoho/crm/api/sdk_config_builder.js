/**
 * The Builder class to build SDKConfig
 */
class SDKConfigBuilder {
    constructor() {
        this._autoRefreshFields = false;

        this._pickListValidation = true;

        this._cacheStore = false;

        this._timeout = 0;
    }

    /**
     * This is a setter method to set autoRefreshFields.
     * @param {Boolean} autoRefreshFields
     */
    autoRefreshFields(autoRefreshFields) {
        this._autoRefreshFields = autoRefreshFields;

        return this;
    }

    /**
     * This is a setter method to set pickListValidation.
     * @param {Boolean} pickListValidation
     */
    pickListValidation(pickListValidation) {
        this._pickListValidation = pickListValidation;

        return this;
    }

    /**
     * This is a setter method to set cacheStore.
     * @param {Boolean} cacheStore
     */
    cacheStore(cacheStore) {
        this._cacheStore = cacheStore;

        return this;
    }

    /**
     * This is a setter method to set API timeout.
     * @param {Integer} timeout
     */
    timeout(timeout) {
        this._timeout = timeout > 0 ? timeout : 0;

        return this;
    }

    /**
     * The method to build the SDKConfig instance
     * @returns An instance of SDKConfig
     */
    build() {
        return new SDKConfig(this._autoRefreshFields, this._pickListValidation, this._cacheStore, this._timeout);
    }
}

/**
 * The class to configure the SDK.
 */
class SDKConfig {
    /**
     * Creates an instance of SDKConfig with the given parameters
     * @param {Boolean} autoRefreshFields A boolean representing autoRefreshFields
     * @param {Boolean} pickListValidation A boolean representing pickListValidation
     * @param {Boolean} cacheStore A boolean representing cacheStore
     * @param {Integer} timeout A Integer representing timeout
     */
    constructor(autoRefreshFields, pickListValidation, cacheStore, timeout) {
        this._autoRefreshFields = autoRefreshFields;

        this._pickListValidation = pickListValidation;

        this._cacheStore = cacheStore;

        this._timeout = timeout;
    }

    /**
     * This is a getter method to get autoRefreshFields.
     * @returns A Boolean representing autoRefreshFields
     */
    getAutoRefreshFields() {
        return this._autoRefreshFields;
    }

    /**
     * This is a getter method to get pickListValidation.
     * @returns A Boolean representing pickListValidation
     */
    getPickListValidation() {
        return this._pickListValidation;
    }

    /**
     * This is a getter method to get cacheStore.
     * @returns A Boolean representing cacheStore
     */
    getCacheStore() {
        return this._cacheStore;
    }

    /**
     * This is a getter method to get timeout.
     * @returns A Integer representing API timeout
     */
    getTimeout() {
        return this._timeout;
    }
}