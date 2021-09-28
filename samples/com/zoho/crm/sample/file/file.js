class File {
    /**
     * <h3> Upload Files</h3>
     * This method is used to upload a file and print the response.
     * @param {String} absoluteFilePath The absolute file path of the file to be attached
     */
    static async uploadFiles() {
        //example
        //let absoluteFilePath = "/Users/user_name/Desktop/download.png";

        //Get instance of FileOperations Class
        let fileOperations = new ZCRM.File.Operations();

        //Get instance of FileBodyWrapper Class that will contain the request body
        let request = new ZCRM.File.Model.BodyWrapper();

        let paramInstance = new ParameterMap();

        await paramInstance.add(ZCRM.File.Model.UploadFilesParam.TYPE, "inline");

        /** StreamWrapper can be initialized in any of the following ways */

        var filesToLoad = document.getElementById("file_api").files;

        var files = [];

        for (var fileData of filesToLoad) {
            /**
             * param 1 -> fileName
             * param 2 -> Read Stream.
             */
            let streamWrapper = new StreamWrapper.Model.StreamWrapper(null, fileData);

            files.push(streamWrapper);
        }

        request.setFile(files);

        //Call uploadFile method that takes BodyWrapper instance as parameter.
        let response = await fileOperations.uploadFiles(request, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received.
                if (responseObject instanceof ZCRM.File.Model.ActionWrapper) {
                    //Get the array of obtained action responses
                    let actionResponses = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZCRM.File.Model.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZCRM.File.Model.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.File.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Get File</h3>
     * This method is used to download the file with ID
     * @param {String} id The ID of the uploaded File.
     */
    static async getFile(id) {
        //example
        //let id = "ae9c7cefd5e00a54b7563c0dd42b";

        //Get instance of FileOperations Class
        let fileOperations = new ZCRM.File.Operations();

        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();

        //Add the id to ParameterMap instance
        await paramInstance.add(ZCRM.File.Model.GetFileParam.ID, id);

        //Call getFile method that takes ParameterMap instance as parameter
        let response = await fileOperations.getFile(paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected FileBodyWrapper instance is received
                if (responseObject instanceof ZCRM.File.Model.FileBodyWrapper) {
                    //Get StreamWrapper instance from the returned FileBodyWrapper instance
                    let streamWrapper = responseObject.getFile();

                    //Get name from StreamWrapper instance
                    let fileName = streamWrapper.getName();

                    //Get the stream from StreamWrapper instance
                    let readStream = streamWrapper.getStream();

                    var url = URL.createObjectURL(readStream);

                    var ttt = document.createElement('a');

                    ttt.href = url;

                    ttt.download = fileName;

                    ttt.click();
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.File.Model.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}