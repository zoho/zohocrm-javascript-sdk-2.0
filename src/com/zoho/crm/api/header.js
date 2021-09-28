/**
 * This class represents the HTTP header.
 */
class Header {
	/**
	 * Creates an Header class instance with the specified header name.
	 * @param {string} name A String containing the header name.
	 * @param {string} className A String containing the header class name.
	 */
	constructor(name, className = null) {
		this._name = name;

		this._className = className;
	}

	/**
	 * This is a getter method to get header name.
	 * @returns {string} A String representing the header name.
	 */
	getName() {
		return this._name;
	}

	/**
	 * This is a getter method to get header class name.
	 * @returns {string} A String representing the header class name.
	 */
	getClassName() {
		return this._className;
	}
}