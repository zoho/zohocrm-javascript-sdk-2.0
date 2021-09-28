var StreamWrapper = {
    Model: {
        /**
         * This class handles the file stream and name.
         */
        StreamWrapper: class {
            /**
             * Creates a StreamWrapper class instance with the specified parameters.
             * @param {string} name A String containing the file name.
             * @param {stream} Stream A object containing the file stream
             */
            constructor(name = null, stream = null) {
                this._name = null;

                this._stream = null;

                try {
                    (async () => {
                        this._name = name !== null ? name : stream.name;

                        this._stream = stream;
                    })()
                }
                catch (e) {
                    throw new SDKException(Constants.FILE_ERROR, Constants.FILE_DOES_NOT_EXISTS);
                }
            }

            /**
             * This is a getter method to get the file name.
             * @returns {string} A String representing the file name.
             */
            getName() {
                return this._name;
            }

            /**
             * This is a setter method to set the file name.
             * @returns {string} A String representing the file name.
             */
            setName(name) {
                this._name = name;
            }

            /**
             * This is a getter method to get the file input stream.
             */
            getStream() {
                return this._stream;
            }

            /**
             * This is a setter method to set the file input stream.
             */
            setStream(stream) {
                this._stream = stream;
            }
        }
    }
}
