/**
 * This class represents the HTTP parameter.
 */
class Param {
    /**
     * Creates an Param class instance with the specified parameter name.
     * @param {string} name A String containing the parameter name.
     * @param {string} className A String containing the parameter class name.
     */
    constructor(name, className = null) {
        this._name = name;

        this._className = className;
    }

    /**
     * This is a getter method to get parameter name.
     * @returns {string} A String representing the parameter name.
     */
    getName() {
        return this._name;
    }

    /**
     * This is a getter method to get parameter class name.
     * @returns {string} A String representing the parameter class name.
     */
    getClassName() {
        return this._className;
    }
}