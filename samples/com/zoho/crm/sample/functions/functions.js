class Functions {
    /**
     * <h3> Execute Function Using Parameters </h3>
     */
    static async executeFunctionUsingParameters() {
        let functionName = "get_record_lead";
        let authType = "oauth";
        let param = new Map();
        param.set("1221", "2111221");
        param.set("15221", "21113221");
        param.set("12421", "211341221");

        let arg = new Map();
        arg.set("12223322", "iuubnf");

        let arguments1 = new Map();
        arguments1.set("Rjaj", arg);

        //Get instance of FunctionOperations Class that takes functionName, authType and arguments1 as parameter
        let functionOperations = new ZCRM.Function.Operations(functionName, authType, arguments1);

        let paramInstance = new ParameterMap();

        //  Possible parameters of Get Functions Operation
        await paramInstance.add(new Param("JS"), param); 

        //Call executeFunctionUsingParameters method
        let response = await functionOperations.executeFunctionUsingParameters(paramInstance);

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
                //Check if the request is successful
                if (responseObject instanceof ZCRM.Function.Model.SuccessResponse) {
                
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    let details = responseObject.getDetails();

                    //Get the details map
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Function.Model.APIException) {

                    if (responseObject.getCode() != null) {
                        //Get the Code
                        console.log("Code: " + responseObject.getCode().getValue());
                    }

                    console.log("Details");

                    if (responseObject.getDetails() != null) {
                        //Get the details map
                        let details = responseObject.getDetails();

                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Execute Function Using Request Body </h3>
     */
    static async executeFunctionUsingRequestBody() {
        let apiNameOfFunction = "get_record_lead";
        let authType = "oauth";

        let param = new Map();
        param.set("1221", "2111221");
        param.set("15221", "21113221");
        param.set("12421", "211341221");

        let arg = new Map();
        arg.set("12223322", "iuubnf");

        let arguments1 = new Map();
        arguments1.set("sdk", arg);

        //Get instance of FunctionOperations Class that takes apiNameOfFunction, authType and arguments as parameter
        let functionOperations = new ZCRM.Function.Operations(apiNameOfFunction, authType, arguments1);

        let paramInstance = new ParameterMap();

        //  Possible parameters of Get Functions Operation
        await paramInstance.add(new Param("JS"), param);

        let bodyWrapper = new ZCRM.Function.Model.BodyWrapper();

        let requestBody = new Map();
        requestBody.set("name", "JavaScript");
        requestBody.set("version", "4.0.0");

        let sample = new Map();
        sample.set("name", "JAVASCRIPT-2.1");
        sample.set("version", "1.0.0");

        requestBody.set("v2.1", sample);

        bodyWrapper.setBody(requestBody);

        //Call executeFunctionUsingRequestBody method
        let response = await functionOperations.executeFunctionUsingRequestBody(bodyWrapper, paramInstance);

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
                //Check if the request is successful
                if (responseObject instanceof ZCRM.Function.Model.SuccessResponse) {
                
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    let details = responseObject.getDetails();

                    //Get the details map
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Function.Model.APIException) {

                    if (responseObject.getCode() != null) {
                        //Get the Code
                        console.log("Code: " + responseObject.getCode().getValue());
                    }

                    console.log("Details");

                    if (responseObject.getDetails() != null) {
                        //Get the details map
                        let details = responseObject.getDetails();

                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Execute Function Using File </h3>
     */
    static async executeFunctionUsingFile() {
        let apiNameOfFunction = "get_record_lead";
        let authType = "oauth";

        let param = new Map();
        param.set("1221", "2111221");
        param.set("15221", "21113221");
        param.set("12421", "211341221");

        let arg = new Map();
        arg.set("12223322", "iuubnf");

        let arguments1 = new Map();
        arguments1.set("Rjaj", arg);

        //Get instance of FunctionOperations Class that takes apiNameOfFunction, authType and arguments as parameter
        let functionOperations = new ZCRM.Function.Operations(apiNameOfFunction, authType, arguments1);

        let paramInstance = new ParameterMap();

        //  Possible parameters of Get Functions Operation
        await paramInstance.add(new Param("JS"), param);

		//Get instance of FileBodyWrapper class that will contain the request file
		let fileBodyWrapper = new ZCRM.Function.Model.FileBodyWrapper();

		// /** StreamWrapper can be initialized in any of the following ways */

		var filesToLoad = document.getElementById("functions").files;

		var file = filesToLoad[0];

		// /**
		//  * param 1 -> fileName
		//  * param 2 -> Read Stream.
		//  */
		let streamWrapper = new StreamWrapper.Model.StreamWrapper(null, file);

		//Set file to the FileBodyWrapper instance
		fileBodyWrapper.setInputfile(streamWrapper);

        //Call executeFunctionUsingFile method
        let response = await functionOperations.executeFunctionUsingFile(fileBodyWrapper, paramInstance);

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
                //Check if the request is successful
                if (responseObject instanceof ZCRM.Function.Model.SuccessResponse) {
                
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    let details = responseObject.getDetails();

                    //Get the details map
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Function.Model.APIException) {

                    if (responseObject.getCode() != null) {
                        //Get the Code
                        console.log("Code: " + responseObject.getCode().getValue());
                    }

                    console.log("Details");

                    if (responseObject.getDetails() != null) {
                        //Get the details map
                        let details = responseObject.getDetails();

                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}