class ProxyBuilder {
    constructor() {
        this._host = null;

        this._port = null;
    }

    host(host) {
        Utility.assertNotNull(host, Constants.USER_PROXY_ERROR, Constants.HOST_ERROR_MESSAGE);

        this._host = host;

        return this;
    }

    port(port) {
        Utility.assertNotNull(port, Constants.USER_PROXY_ERROR, Constants.PORT_ERROR_MESSAGE);

        this._port = port;

        return this;
    }

    build() {
        Utility.assertNotNull(this._host, Constants.REQUEST_PROXY_ERROR, Constants.HOST_ERROR_MESSAGE);

        Utility.assertNotNull(this._port, Constants.REQUEST_PROXY_ERROR, Constants.PORT_ERROR_MESSAGE);

        return new RequestProxy(this._host, this._port);
    }
}