class BulkWrite{

    /**
     * <h3> Upload File</h3>
     * This method is used to upload a CSV file in ZIP format for bulk write API. The response contains the file_id.
     * Use this ID while making the bulk write request.
     * @param {String} orgID The unique ID (zgid) of your organization obtained through the Organization API.
     */
    static async uploadFile(orgID){

        //example
        //let orgID = "xxxxxx";

        //Get instance of BulkWriteOperations Class
        let bulkWriteOperations = new ZCRM.BulkWrite.Operations();

        //Get instance of FileBodyWrapper class that will contain the request file
        let fileBodyWrapper = new ZCRM.BulkWrite.Model.FileBodyWrapper();

        /** StreamWrapper can be initialized in any of the following ways */

        var filesToLoad  = document.getElementById("bulk_write").files;

        var file = filesToLoad[0];

        /**
         * param 1 -> fileName
         * param 2 -> Read Stream
         */
        let streamWrapper = new StreamWrapper.Model.StreamWrapper(null, file);

        //Set file to the FileBodyWrapper instance
        fileBodyWrapper.setFile(streamWrapper);

        //Get instance of HeaderMap Class
        let headerInstance = new HeaderMap();

        //To indicate that this a bulk write operation
        await headerInstance.add(ZCRM.BulkWrite.Model.UploadFileHeader.FEATURE, "bulk-write");

        await headerInstance.add(ZCRM.BulkWrite.Model.UploadFileHeader.X_CRM_ORG, orgID);

        //Call uploadFile method that takes FileBodyWrapper instance and headerInstance as parameter
        let response = await bulkWriteOperations.uploadFile(fileBodyWrapper, headerInstance);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if(responseObject != null){

                //Check if the request is successful
                if(responseObject instanceof ZCRM.BulkWrite.Model.SuccessResponse){

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    let details = responseObject.getDetails();

                    //Get the details map
                    if(details != null){
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
                //Check if the request returned an exception
                else if(responseObject instanceof ZCRM.BulkWrite.Model.APIException){

                    if(responseObject.getStatus() != null) {
                        //Get the Status
                        console.log("Status: " + responseObject.getStatus().getValue());
                    }

                    if(responseObject.getCode() != null) {
                        //Get the Code
                        console.log("Code: " + responseObject.getCode().getValue());
                    }

                    console.log("Details");

                    if(responseObject.getDetails() != null) {
                        //Get the details map
                        let details = responseObject.getDetails();

                        if(details != null){
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }
                    }

                    if(responseObject.getErrorMessage() != null) {
                        //Get the Error Message
                        console.log("Error Message: " + responseObject.getErrorMessage().getValue());
                    }

                    //Get the ErrorCode
					console.log("ErrorCode: " + responseObject.getErrorCode());

					if(responseObject.getXError() != null) {
						//Get the XError
						console.log("XError: " + responseObject.getXError().getValue());
					}

					if(responseObject.getInfo() != null) {
						//Get the Info
						console.log("Info: " + responseObject.getInfo().getValue());
					}

					if(responseObject.getXInfo() != null) {
						//Get the XInfo
						console.log("XInfo: " + responseObject.getXInfo().getValue());
					}

					//Get the HttpStatus
					console.log("HttpStatus: " + responseObject.getHttpStatus());

                }
            }
        }
    }

    /**
     * <h3> Create BulkWrite Job</h3>
     * This method is used to create bulk write job with the uploaded file ID
     * @param {String} moduleAPIName The API Name of the module.
     * @param {String} fileId The ID of the uploaded file to create BulkWrite Job.
     */
    static async createBulkWriteJob(moduleAPIName, fileId){

        //example
		//let moduleAPIName = "Leads";
        //let fileId  = "34770616121001";

        //Get instance of BulkWriteOperations Class
        let bulkWriteOperations = new ZCRM.BulkWrite.Operations();

        //Get instance of RequestWrapper Class that will contain the request body
        let requestWrapper = new ZCRM.BulkWrite.Model.RequestWrapper();

        //Get instance of CallBack Class
        let callBack = new ZCRM.BulkWrite.Model.CallBack();

        //Set valid callback URL.
        callBack.setUrl("https://www.example.com/callback");

        //Set the HTTP method of the callback URL. The allowed value is post.
        callBack.setMethod(new Choice("post"));

        //The Bulk Write Job's details are posted to this URL on successful completion / failure of the job.
        requestWrapper.setCallback(callBack);

        //Set the charset of the uploaded file
        requestWrapper.setCharacterEncoding("UTF-8");

        //To set the type of operation you want to perform on the bulk write job.
        requestWrapper.setOperation(new Choice("insert"));

        let resources = [];

        //Get instance of Resource Class
        let resource = new ZCRM.BulkWrite.Model.Resource();

        // To set the type of module that you want to import. The value is data.
        resource.setType(new Choice("data"));

        //To set API name of the module that you select for bulk write job.
        resource.setModule(moduleAPIName);

        //To set the fileId obtained from file upload API.
        resource.setFileId(fileId);

        //True - Ignores the empty values.The default value is false.
        resource.setIgnoreEmpty(true);

        // To set a field as a unique field or ID of a record.
        // resource.setFindBy("Email");

        let fieldMappings = [];

        //Get instance of FieldMapping Class
        let fieldMapping = new ZCRM.BulkWrite.Model.FieldMapping();

        //To set API name of the field present in Zoho module object that you want to import.
        fieldMapping.setAPIName("Last_Name");

        //To set the column index of the field you want to map to the CRM field.
        fieldMapping.setIndex(0);

        fieldMappings.push(fieldMapping);

        fieldMapping = new ZCRM.BulkWrite.Model.FieldMapping();

        fieldMapping.setAPIName("Email");

        fieldMapping.setIndex(1);

        fieldMappings.push(fieldMapping);

        fieldMapping = new ZCRM.BulkWrite.Model.FieldMapping();

        fieldMapping.setAPIName("Company");

        fieldMapping.setIndex(2);

        fieldMappings.push(fieldMapping);

        fieldMapping = new ZCRM.BulkWrite.Model.FieldMapping();

        fieldMapping.setAPIName("Phone");

        fieldMapping.setIndex(3);

        fieldMappings.push(fieldMapping);

        let defaultValue = new Map();

        fieldMapping = new ZCRM.BulkWrite.Model.FieldMapping();

        fieldMapping.setAPIName("Website");

        defaultValue.set("value", "www.zohoapis.com");

        //To set the default value for an empty column in the uploaded file.
        fieldMapping.setDefaultValue(defaultValue);

        fieldMappings.push(fieldMapping);

        resource.setFieldMappings(fieldMappings);

        resources.push(resource);

        //Set the array of resources to RequestWrapper instance
        requestWrapper.setResource(resources);

        //Call createBulkWriteJob method that takes RequestWrapper instance as parameter
        let response = await bulkWriteOperations.createBulkWriteJob(requestWrapper);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if(responseObject != null){

                //Check if the request is successful
                if(responseObject instanceof ZCRM.BulkWrite.Model.SuccessResponse){

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    let details = responseObject.getDetails();

                    //Get the details map
                    if(details != null){
                        Array.from(details.keys()).forEach(key => {

                            if(details.get(key) instanceof ZCRM.User.Model.User) {

                                console.log(key + ": ");

                                console.log("User ID : " + details.get(key).getId());

                                console.log("User Name : " + details.get(key).getName());
                            }
                            else {
                                console.log(key + ": " + details.get(key));
                            }
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
                //Check if the request returned an exception
                else if(responseObject instanceof ZCRM.BulkWrite.Model.APIException){

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if(details != null){
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
     * <h3> Get BulkWriteJob Details</h3>
     * This method is used to get the details of a bulk write job performed previously.
     * @param {BigInt} jobId The unique ID of the bulk write job.
     */
    static async getBulkWriteJobDetails(jobId){

        //example
        //let jobId = 34770615615003n;

        //Get instance of BulkWriteOperations Class
        let bulkWriteOperations = new ZCRM.BulkWrite.Operations();

        //Call getBulkWriteJobDetails method that takes jobId as parameter
        let response = await bulkWriteOperations.getBulkWriteJobDetails(jobId);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if([204, 304].includes(response.getStatusCode())){
                console.log(response.getStatusCode() ==  204? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject = response.getObject();

            if(responseObject != null){

                //Check if expected BulkWriteResponse instance is received.
                if(responseObject instanceof ZCRM.BulkWrite.Model.BulkWriteResponse){
					//Get the Job Status of each bulkWriteResponse
					console.log("Bulk write Job Status: " + responseObject.getStatus());

					//Get the CharacterEncoding of each bulkWriteResponse
					console.log(responseObject.getCharacterEncoding());

					let resources = responseObject.getResource();

					if(resources != null){
                        resources.forEach(resource => {
							//Get the Status of each Resource
							console.log("Bulk write Resource Status: " + resource.getStatus().getValue());

							//Get the Type of each Resource
							console.log("Bulk write Resource Type: " + resource.getType().getValue());

							//Get the Module of each Resource
							console.log("Bulk write Resource Module: " + resource.getModule());

							let fieldMappings = resource.getFieldMappings();

							if(fieldMappings != null){
                                fieldMappings.forEach(fieldMapping => {
									//Get the APIName of each FieldMapping
									console.log("Bulk write Resource FieldMapping Module: " + fieldMapping.getAPIName());

									if(fieldMapping.getIndex() != null){
										//Get the Index of each FieldMapping
										console.log("Bulk write Resource FieldMapping Inded: " +fieldMapping.getIndex().toString());
									}

									if(fieldMapping.getFormat() != null){
										//Get the Format of each FieldMapping
										console.log("Bulk write Resource FieldMapping Format: " + fieldMapping.getFormat());
									}

									if(fieldMapping.getFindBy() != null){
										//Get the FindBy of each FieldMapping
										console.log("Bulk write Resource FieldMapping FindBy: " + fieldMapping.getFindBy());
									}

									if(fieldMapping.getDefaultValue() != null){
                                        Array.from(fieldMapping.getDefaultValue().keys()).forEach(key => {
                                            console.log(key + ": " + fieldMapping.getDefaultValue().get(key));
                                        });
									}
                                });
							}

							let file = resource.getFile();

							if(file != null){
								//Get the Status of the File
								console.log("Bulk write Resource File Status: " + file.getStatus().getValue());

								//Get the Name of the File
								console.log("Bulk write Resource File Name: " + file.getName());

								//Get the AddedCount of the File
								console.log("Bulk write Resource File AddedCount: " + file.getAddedCount().toString());

								//Get the SkippedCount of the File
								console.log("Bulk write Resource File SkippedCount: " + file.getSkippedCount().toString());

								//Get the UpdatedCount of the File
								console.log("Bulk write Resource File UpdatedCount: " + file.getUpdatedCount().toString());

								//Get the TotalCount of the File
								console.log("Bulk write Resource File TotalCount: " + file.getTotalCount().toString());
							}
                        });
                    }

                    let callback = responseObject.getCallback();

					if(callback != null) {
						//Get the CallBack Url
						console.log("Bulk write CallBack Url: " + callback.getUrl());

						//Get the CallBack Method
						console.log("Bulk write CallBack Method: " + callback.getMethod().getValue());
					}

					//Get the ID of each BulkWriteResponse
					console.log("Bulk write ID: " + responseObject.getId().toString());

					let result = responseObject.getResult();

					if(result != null){
						//Get the DownloadUrl of the Result
						console.log("Bulk write DownloadUrl: " + result.getDownloadUrl());
                    }

					//Get the CreatedBy User instance of each BulkWriteResponse
					let createdBy = responseObject.getCreatedBy();

					//Check if createdBy is not null
					if(createdBy != null){
						//Get the ID of the CreatedBy User
						console.log("Bulkwrite Created By User-ID: " + createdBy.getId());

						//Get the Name of the CreatedBy User
						console.log("Bulkwrite Created By user-Name: " + createdBy.getName());
					}

					//Get the Operation of each BulkWriteResponse
					console.log("Bulk write Operation: " + responseObject.getOperation());

					//Get the CreatedTime of each BulkWriteResponse
					console.log("Bulk write File CreatedTime: " + responseObject.getCreatedTime().toString());
                }
                //Check if the request returned an exception
                else if(responseObject instanceof ZCRM.BulkWrite.Model.APIException){

                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if(details != null){
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
     * <h3> Download BulkWrite Result</h3>
     * This method is used to download the result of bulk write job.
     * @param {String} downloadUrl The URL present in the download_url key in the response of Get Bulk Write Job Details.
     */
    static async downloadBulkWriteResult(downloadUrl){

        //example
		//let downloadUrl = "https://download-accl.zoho.com/v2/crm/xxxx/bulk-write/347706122009/347706122009.zip";

        //Get instance of BulkWriteOperations Class
        let bulkWriteOperations = new ZCRM.BulkWrite.Operations();

        //Call downloadBulkWriteResult method that takes downloadUrl as parameter
        let response = await bulkWriteOperations.downloadBulkWriteResult(downloadUrl);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if([204, 304].includes(response.getStatusCode())){
                console.log(response.getStatusCode() ==  204? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject = response.getObject();

            if(responseObject != null){

                //Check if expected FileBodyWrapper instance is received
                if(responseObject instanceof ZCRM.BulkWrite.Model.FileBodyWrapper){

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
                else if(responseObject instanceof ZCRM.BulkWrite.Model.APIException){

                    //Get the ErrorMessage
                    console.log("ErrorMessage: " + responseObject.getErrorMessage().getValue());

                     //Get the ErrorCode
                    console.log("ErrorCode: " + responseObject.getErrorCode());
                }
            }
        }
    }
}