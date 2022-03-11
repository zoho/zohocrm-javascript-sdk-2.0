class Records {
    static async updateRecord(moduleAPIName, recordId, input) {
        //Get instance of RecordOperations Class
        let recordOperations = new ZCRM.Record.Operations();
        //Get instance of BodyWrapper Class that will contain the request body
        let request = new ZCRM.Record.Model.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        //Get instance of Record Class
        let record = new ZCRM.Record.Model.Record();
        if (input != null) {
            for (var key in input) {
                record.addKeyValue(key, input[key]);
            }
        }
        //Add Record instance to the array
        recordsArray.push(record);
        //Set the array to Records in BodyWrapper instance
        request.setData(recordsArray);
        //Get instance of HeaderMap Class
        let headerInstance = new HeaderMap();
        let response = await recordOperations.updateRecord(BigInt(recordId), moduleAPIName, request, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZCRM.Record.Model.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZCRM.Record.Model.SuccessResponse) {
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
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZCRM.Record.Model.APIException) {
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
                else if (responseObject instanceof ZCRM.Record.Model.APIException) {
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

    static async deleteRecord(moduleAPIName, recordId) {
        //Get instance of RecordOperations Class
        let recordOperations = new ZCRM.Record.Operations();
        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();
        //Possible parameters for Delete Record operation
        await paramInstance.add(ZCRM.Record.Model.DeleteRecordParam.WF_TRIGGER, true);
        //Get instance of HeaderMap Class
        let headerInstance = new HeaderMap();
        let response = await recordOperations.deleteRecord(BigInt(recordId), moduleAPIName, paramInstance, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZCRM.Record.Model.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZCRM.Record.Model.SuccessResponse) {
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
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZCRM.Record.Model.APIException) {
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
                else if (responseObject instanceof ZCRM.Record.Model.APIException) {
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

    static async getRecords(moduleAPIName) {
        let html = "";
        //Get instance of RecordOperations Class
        let recordOperations = new ZCRM.Record.Operations();
        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();
        let fieldNames = ["Last_Name", "Company", "Designation", "Email", "Mobile"];
        await paramInstance.add(ZCRM.Record.Model.GetRecordsParam.FIELDS, fieldNames.toString());
        await paramInstance.add(ZCRM.Record.Model.GetRecordsParam.PER_PAGE, 10);
        //Get instance of HeaderMap Class
        let headerInstance = new HeaderMap();
        let response = await recordOperations.getRecords(moduleAPIName, paramInstance, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get the object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ZCRM.Record.Model.ResponseWrapper) {
                    //Get the array of obtained Record instances
                    let records = responseObject.getData();
                    for (let index = 0; index < records.length; index++) {
                        let record = records[index];
                        html += "<tr data-id=" + record.getId() + "><td><button onclick='edit(\"" + record.getId() + "\")'>Edit</button>&nbsp;<button onclick='deleteR(\"" + record.getId() + "\")'>Delete</button></td><td>" + record.getKeyValue("Last_Name") + "</td><td>" + record.getKeyValue("Company") + "</td><td>" + record.getKeyValue("Designation") + "</td><td>" + (record.getKeyValue("Email") == null ? "" : record.getKeyValue("Email")) + "</td><td>" + (record.getKeyValue("Mobile") == null ? "" : record.getKeyValue("Mobile")) + "</td><td></tr>";
                    }
                    return html;
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZCRM.Record.Model.APIException) {
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

    static async createRecords(moduleAPIName, input) {
        //Get instance of RecordOperations Class
        let recordOperations = new ZCRM.Record.Operations();
        //Get instance of BodyWrapper Class that will contain the request body
        let request = new ZCRM.Record.Model.BodyWrapper();
        //Array to hold Record instances
        let recordsArray = [];
        //Get instance of Record Class
        let record = new ZCRM.Record.Model.Record();
        if (input != null) {
            for (var key in input) {
                if (key == "Lead_Source") {
                    record.addKeyValue(key, new Choice(input[key]));
                }
                else {
                    record.addKeyValue(key, input[key]);
                }
            }
        }
        //Add Record instance to the array
        recordsArray.push(record);
        //Set the array to data in BodyWrapper instance
        request.setData(recordsArray);
        //Get instance of HeaderMap Class
        let headerInstance = new HeaderMap();
        let response = await recordOperations.createRecords(moduleAPIName, request, headerInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZCRM.Record.Model.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getData();
                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZCRM.Record.Model.SuccessResponse) {
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
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZCRM.Record.Model.APIException) {
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
                else if (responseObject instanceof ZCRM.Record.Model.APIException) {
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