class RequestProxy {

    /**
     * Creates a RequestProxy class instance with the specified parameters.
     * @param {String} host A String containing the hostname or address of the proxy server
     * @param {Number} port An Integer containing The port number of the proxy server
     * @param {String} user A String containing the user name of the proxy server
     * @param {String} password A String containing the password of the proxy server
     */
    constructor(host, port) {

        if(host == null) {
            throw new SDKException(Constants.USER_PROXY_ERROR, Constants.HOST_ERROR_MESSAGE);
        }

        if(port == null) {
            throw new SDKException(Constants.USER_PROXY_ERROR, Constants.PORT_ERROR_MESSAGE);
        }

        this._host = host;

        this._port = port;
    }

    /**
     * This is a getter method to get Proxy host.
     * @returns {String}
     */
    getHost() {
        return this._host;
    }

    /**
     * This is a getter method to get the Proxy port.
     * @returns {Number}
     */
    getPort() {
        return this._port;
    }
}