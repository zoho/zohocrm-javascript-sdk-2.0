/**
 * This class is the common SDKException object. This stands as a POJO for the SDKException thrown.
 */
class SDKException extends Error {
    /**
     * Creates an SDKException class instance with the specified parameters.
     * @param {String} code A String containing the Exception error code.
     * @param {String} message A String containing the Exception error message.
     * @param {JSON} details A JSON containing the error response.
     * @param {object} cause A Exception class instance.
     */
    constructor(code, message, details = null, cause = null) {
        super();

        this.code = code;

        this.message = (message === null) ? "" : message;

        this.details = details;

        this.cause = cause;

        if (this.details != null) {
            this.message = this.message + JSON.stringify(this.details);
        }

        if (this.cause != null) {
            this.message = this.message.concat(this.cause.toString());
        }
    }
}