class Note{

    /**
     * <h3> Get Notes </h3>
	 * This method is used to get the list of notes and print the response.
     */
    static async getNotes(){

        //Get instance of NotesOperations Class
        let notesOperations = new ZCRM.Note.Operations();

        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();

        /* Possible parameters for Get Notes */

        await paramInstance.add(ZCRM.Note.Model.GetNotesParam.PAGE, 1);

        await paramInstance.add(ZCRM.Note.Model.GetNotesParam.PER_PAGE, 200);

        // await paramInstance.add(ZCRM.Note.Model.GetNotesParam.FIELDS, "id,Modified_Time");

        //Get instance of HeaderMap Class
        let headerInstance = new HeaderMap();

        /* Possible headers for Get Notes */
        await headerInstance.add(ZCRM.Note.Model.GetNotesHeader.IF_MODIFIED_SINCE, new Date("2019-06-01T00:00:00+05:30"));

        //Call getNotes method that takes paramInstance and headerInstance as parameters
        let response = await notesOperations.getNotes(paramInstance, headerInstance);

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

                //Check if expected ResponseWrapper instance is received
                if(responseObject instanceof ZCRM.Note.Model.ResponseWrapper){

                    //Get the array of obtained Note instances
                    let notes = responseObject.getData();

                    notes.forEach(note => {

						//Get the owner User instance of each Note
						let owner = note.getOwner();

						//Check if owner is not null
						if(owner != null){
							//Get the name of the owner User
							console.log("Note Owner User-Name: " + owner.getName());

							//Get the ID of the owner User
							console.log("Note Owner User-ID: " + owner.getId());

							//Get the Email of the owner User
							console.log("Note Owner Email: " + owner.getEmail());
						}

						//Get the ModifiedTime of each Note
						console.log("Note ModifiedTime: " + note.getModifiedTime());

						//Get the list of Attachment instance each Note
						let attachments = note.getAttachments();

						//Check if attachments is not null
						if(attachments != null)
						{
                            attachments.forEach(attachment => {
                                this.printAttachment(attachment);

                            });
						}

						//Get the CreatedTime of each Note
						console.log("Note CreatedTime: " + note.getCreatedTime());

						//Get the parentId Record instance of each Note
						let parentId = note.getParentId();

						//Check if parentId is not null
						if(parentId != null)
						{
							if(parentId.getKeyValue("name") != null)
							{
								//Get the parent record Name of each Note
								console.log("Note parent record Name: " + parentId.getKeyValue("name"));
							}

							//Get the parent record ID of each Note
							console.log("Note parent record ID: " + parentId.getId());
						}

						//Get the Editable of each Note
						console.log("Note Editable: " + note.getEditable());

						//Get the SeModule of each Note
						console.log("Note SeModule: " + note.getSeModule());

						//Get the IsSharedToClient of each Note
						console.log("Note IsSharedToClient: " + note.getIsSharedToClient());

						//Get the modifiedBy User instance of each Note
						let modifiedBy = note.getModifiedBy();

						//Check if modifiedBy is not null
						if(modifiedBy != null){
							//Get the Name of the modifiedBy User
							console.log("Note Modified By User-Name: " + modifiedBy.getName());

							//Get the ID of the modifiedBy User
							console.log("Note Modified By User-ID: " + modifiedBy.getId());

							//Get the Email of the modifiedBy User
							console.log("Note Modified By User-Email: " + modifiedBy.getEmail());
						}

						//Get the Size of each Note
						console.log("Note Size: " + note.getSize());

						//Get the State of each Note
						console.log("Note State: " + note.getState());

						//Get the VoiceNote of each Note
						console.log("Note VoiceNote: " + note.getVoiceNote());

						//Get the Id of each Note
						console.log("Note Id: " + note.getId());

						//Get the createdBy User instance of each Note
						let createdBy = note.getCreatedBy();

						//Check if createdBy is not null
						if(createdBy != null){
							//Get the Name of the createdBy User
							console.log("Note Created By User-Name: " + createdBy.getName());

							//Get the ID of the createdBy User
							console.log("Note Created By User-ID: " + createdBy.getId());

							//Get the Email of the createdBy User
							console.log("Note Created By User-Email: " + createdBy.getEmail());
						}

						//Get the NoteTitle of each Note
						console.log("Note NoteTitle: " + note.getNoteTitle());

						//Get the NoteContent of each Note
						console.log("Note NoteContent: " + note.getNoteContent());
                    });

                    //Get the Info object from object
                    let info = responseObject.getInfo();

                    if(info != null){
                        if(info.getPerPage() != null){
							//Get the PerPage of the Info
							console.log("Note Info PerPage: " + info.getPerPage());
						}

						if(info.getCount() != null){
							//Get the Count of the Info
							console.log("Note Info Count: " + info.getCount());
						}

						if(info.getPage() != null){
							//Get the Page of the Info
							console.log("Note Info Page: " + info.getPage());
						}

						if(info.getMoreRecords() != null){
							//Get the MoreRecords of the Info
							console.log("Note Info MoreRecords: " + info.getMoreRecords());
						}
                    }
                }
            }
            //Check if the request returned an exception
            else if(responseObject instanceof ZCRM.Note.Model.APIException){
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

    /**
     * <h3> Get Note </h3>
	 * This method is used to get the note and print the response.
     * @param {BigInt} noteId The ID of the Note to be obtained
     */
    static async getNote(noteId){

        //example
        //let noteId = 34096430549003n

        //Get instance of NotesOperations Class
        let notesOperations = new ZCRM.Note.Operations();

        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();

        /* Possible parameters for Get Note */
        paramInstance.add(ZCRM.Note.Model.GetNoteParam.FIELDS, "id,Note_Content")

        //Get instance of HeaderMap Class
        let headerInstance = new HeaderMap();

        /* Possible headers for Get Note */
        headerInstance.add(ZCRM.Note.Model.GetNoteHeader.IF_MODIFIED_SINCE, new Date());

        //Call getNote method that takes noteId as parameter
        let response = await notesOperations.getNote(noteId, paramInstance, headerInstance);

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

                //Check if expected ResponseWrapper instance is received
                if(responseObject instanceof ZCRM.Note.Model.ResponseWrapper){

                    //Get the array of obtained Note instances
                    let notes = responseObject.getData();

                    notes.forEach(note => {

						//Get the owner User instance of each Note
						let owner = note.getOwner();

						//Check if owner is not null
						if(owner != null){
							//Get the name of the owner User
							console.log("Note Owner User-Name: " + owner.getName());

							//Get the ID of the owner User
							console.log("Note Owner User-ID: " + owner.getId());

							//Get the Email of the owner User
							console.log("Note Owner Email: " + owner.getEmail());
						}

						//Get the ModifiedTime of each Module
						console.log("Note ModifiedTime: " + note.getModifiedTime());

						//Get the list of Attachment instance each Note
						let attachments = note.getAttachments();

						//Check if attachments is not null
						if(attachments != null)
						{
                            attachments.forEach(attachment => {
                                this.printAttachment(attachment);

                            });
						}

						//Get the CreatedTime of each Note
						console.log("Note CreatedTime: " + note.getCreatedTime());

						//Get the parentId Record instance of each Note
						let parentId = note.getParentId();

						//Check if parentId is not null
						if(parentId != null)
						{
							if(parentId.getKeyValue("name") != null)
							{
								//Get the parent record Name of each Note
								console.log("Note parent record Name: " + parentId.getKeyValue("name"));
							}

							//Get the parent record ID of each Note
							console.log("Note parent record ID: " + parentId.getId());
						}

						//Get the Editable of each Note
						console.log("Note Editable: " + note.getEditable());

						//Get the SeModule of each Note
						console.log("Note SeModule: " + note.getSeModule());

						//Get the IsSharedToClient of each Note
						console.log("Note IsSharedToClient: " + note.getIsSharedToClient());

						//Get the modifiedBy User instance of each Note
						let modifiedBy = note.getModifiedBy();

						//Check if modifiedBy is not null
						if(modifiedBy != null){
							//Get the Name of the modifiedBy User
							console.log("Note Modified By User-Name: " + modifiedBy.getName());

							//Get the ID of the modifiedBy User
							console.log("Note Modified By User-ID: " + modifiedBy.getId());

							//Get the Email of the modifiedBy User
							console.log("Note Modified By User-Email: " + modifiedBy.getEmail());
						}

						//Get the Size of each Note
						console.log("Note Size: " + note.getSize());

						//Get the State of each Note
						console.log("Note State: " + note.getState());

						//Get the VoiceNote of each Note
						console.log("Note VoiceNote: " + note.getVoiceNote());

						//Get the Id of each Note
						console.log("Note Id: " + note.getId());

						//Get the createdBy User instance of each Note
						let createdBy = note.getCreatedBy();

						//Check if createdBy is not null
						if(createdBy != null){
							//Get the Name of the createdBy User
							console.log("Note Created By User-Name: " + createdBy.getName());

							//Get the ID of the createdBy User
							console.log("Note Created By User-ID: " + createdBy.getId());

							//Get the Email of the createdBy User
							console.log("Note Created By User-Email: " + createdBy.getEmail());
						}

						//Get the NoteTitle of each Note
						console.log("Note NoteTitle: " + note.getNoteTitle());

						//Get the NoteContent of each Note
						console.log("Note NoteContent: " + note.getNoteContent());
                    });

                    //Get the Info object from object
                    let info = responseObject.getInfo();

                    if(info != null){
                        if(info.getPerPage() != null){
							//Get the PerPage of the Info
							console.log("Note Info PerPage: " + info.getPerPage());
						}

						if(info.getCount() != null){
							//Get the Count of the Info
							console.log("Note Info Count: " + info.getCount());
						}

						if(info.getPage() != null){
							//Get the Default of the Info
							console.log("Note Info Page: " + info.getPage());
						}

						if(info.getMoreRecords() != null){
							//Get the Default of the Info
							console.log("Note Info MoreRecords: " + info.getMoreRecords());
						}
                    }
                }
            }
            //Check if the request returned an exception
            else if(responseObject instanceof ZCRM.Note.Model.APIException){
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

    static async printAttachment(attachment){

		//Get the Owner User instance of each attachment
		let owner = attachment.getOwner();

		//Check if owner is not null
		if(owner != null){
			//Get the Name of the Owner
			console.log("Note Attachment Owner User-Name: " + owner.getName());

			//Get the ID of the Owner
			console.log("Note Attachment Owner User-ID: " + owner.getId());

			//Get the Email of the Owner
			console.log("Note Attachment Owner User-Email: " + owner.getEmail());
		}

		//Get the modified time of each attachment
		console.log("Note Attachment Modified Time: " + attachment.getModifiedTime());

		//Get the name of the File
		console.log("Note Attachment File Name: " + attachment.getFileName());

		//Get the created time of each attachment
		console.log("Note Attachment Created Time: " + attachment.getCreatedTime());

		//Get the Attachment file size
		console.log("Note Attachment File Size: " + attachment.getSize());

		//Get the parentId Record instance of each attachment
		let parentId = attachment.getParentId();

		//Check if parentId is not null
		if(parentId != null)
		{
			//Get the parent record Name of each attachment
			console.log("Note Attachment parent record Name: " + parentId.getKeyValue("name"));

			//Get the parent record ID of each attachment
			console.log("Note Attachment parent record ID: " + parentId.getId());
		}

		//Get the attachment is Editable
		console.log("Note Attachment is Editable: " + attachment.getEditable());

		//Get the file ID of each attachment
		console.log("Note Attachment File ID: " + attachment.getFileId());

		//Get the type of each attachment
		console.log("Note Attachment File Type: " + attachment.getType());

		//Get the seModule of each attachment
		console.log("Note Attachment seModule: " + attachment.getSeModule());

		//Get the modifiedBy User instance of each attachment
		let modifiedBy = attachment.getModifiedBy();

		//Check if modifiedBy is not null
		if(modifiedBy != null){
			//Get the Name of the modifiedBy User
			console.log("Note Attachment Modified By User-Name: " + modifiedBy.getName());

			//Get the ID of the modifiedBy User
			console.log("Note Attachment Modified By User-ID: " + modifiedBy.getId());

			//Get the Email of the modifiedBy User
			console.log("Note Attachment Modified By User-Email: " + modifiedBy.getEmail());
		}

		//Get the state of each attachment
		console.log("Note Attachment State: " + attachment.getState());

		//Get the ID of each attachment
		console.log("Note Attachment ID: " + attachment.getId());

		//Get the createdBy User instance of each attachment
		let createdBy = attachment.getCreatedBy();

		//Check if createdBy is not null
		if(createdBy != null){
			//Get the name of the createdBy User
			console.log("Note Attachment Created By User-Name: " + createdBy.getName());

			//Get the ID of the createdBy User
			console.log("Note Attachment Created By User-ID: " + createdBy.getId());

			//Get the Email of the createdBy User
			console.log("Note Attachment Created By User-Email: " + createdBy.getEmail());
		}

		//Get the linkUrl of each attachment
		console.log("Note Attachment LinkUrl: " + attachment.getLinkUrl());
    }

    /**
     * <h3> Create Notes </h3>
	 * This method is used to add new notes and print the response.
     */
    static async createNotes(){

        //Get instance of NotesOperations Class
        let notesOperations = new ZCRM.Note.Operations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request = new ZCRM.Note.Model.BodyWrapper();

        //Array to hold Note instances
        let notesArray = [];

        for (let index = 0; index < 5; index++) {

            //Get instance of Note Class
            let note = new ZCRM.Note.Model.Note();

            //Set Note Content of the Note
            note.setNoteContent("Need to do further tracking");

            //Set Note Title of the Note
            note.setNoteTitle("Contacted");

            //Get instance of Record Class
            let parentRecord = new ZCRM.Record.Model.Record();

            //Set ID of the Record
            parentRecord.setId(34770616838058n);

            //Set ParentId of the Note
            note.setParentId(parentRecord);

            //Set SeModule of the Record
            note.setSeModule("Leads");

            //Add Note instance to the array
            notesArray.push(note);
        }

        //Set the array to notes in BodyWrapper instance
        request.setData(notesArray);

        //Call createNotes method that takes BodyWrapper instance as parameter
        let response = await notesOperations.createNotes(request);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if(responseObject != null){

                //Check if expected ActionWrapper instance is received
                if(responseObject instanceof ZCRM.Note.Model.ActionWrapper){

                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getData();

                    actionResponses.forEach(actionResponse => {

                        //Check if the request is successful
                        if(actionResponse instanceof ZCRM.Note.Model.SuccessResponse){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

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

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if(actionResponse instanceof ZCRM.Note.Model.APIException){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if(details != null){
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
                else if(responseObject instanceof ZCRM.Note.Model.APIException){

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
     * <h3> Update Notes</h3>
	 * This method is used to update existing notes with Ids and print the response.
     */
    static async updateNotes(){

        //Get instance of NotesOperations Class
        let notesOperations = new ZCRM.Note.Operations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request = new ZCRM.Note.Model.BodyWrapper();

        //Array to hold Note instances
        let notesArray = [];

        //Get instance of Note Class
        let note = new ZCRM.Note.Model.Note();

        //Set ID to Note
        note.setId(34770616978052n);

        //Set Note_Title of the Note
		note.setNoteTitle("Contacted12");

		//Set NoteContent of the Note
        note.setNoteContent("Need to do further tracking12");

        //Add Note instance to the array
        notesArray.push(note);

        //Get instance of Note Class
        note = new ZCRM.Note.Model.Note();

        //Set ID to Note
        note.setId(34770618854013n);

		//Set Note_Title of the Note
		note.setNoteTitle("Contacted13");

		//Set NoteContent of the Note
		// note.setNoteContent("Need to do further tracking13");

		//Add Note instance to the array
        notesArray.push(note);

        //Set the array to data in BodyWrapper instance
        request.setData(notesArray);

        //Call updateNotes method that takes BodyWrapper instance as parameter
        let response = await notesOperations.updateNotes(request);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if(responseObject != null){

                //Check if expected ActionWrapper instance is received
                if(responseObject instanceof ZCRM.Note.Model.ActionWrapper){

                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getData();

                    actionResponses.forEach(actionResponse => {

                        //Check if the request is successful
                        if(actionResponse instanceof ZCRM.Note.Model.SuccessResponse){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

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

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if(actionResponse instanceof ZCRM.Note.Model.APIException){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if(details != null){
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
                else if(responseObject instanceof ZCRM.Note.Model.APIException){

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
     * <h3> Update Note</h3>
     * This method is used to update an existing note and print the response.
     * @param {BigInt} noteId The ID of the Note to be updated
     */
    static async updateNote(noteId){

        //example
        //let noteId = 34096430549003n

        //Get instance of NotesOperations Class
        let notesOperations = new ZCRM.Note.Operations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request = new ZCRM.Note.Model.BodyWrapper();

        //Array to hold Note instances
        let notesArray = [];

        //Get instance of Note Class
        let note = new ZCRM.Note.Model.Note();

        //Set Note_Title of the Note
		note.setNoteTitle("Contacted12");

		//Set NoteContent of the Note
        note.setNoteContent("Need to do further tracking12");

        //Add Note instance to the list
        notesArray.push(note);

        //Set the array to notes in BodyWrapper instance
        request.setData(notesArray);

        //Call updateNote method that takes BodyWrapper instance and noteId as parameter
        let response = await notesOperations.updateNote(noteId, request);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if(responseObject != null){

                //Check if expected ActionWrapper instance is received
                if(responseObject instanceof ZCRM.Note.Model.ActionWrapper){

                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getData();

                    actionResponses.forEach(actionResponse => {

                        //Check if the request is successful
                        if(actionResponse instanceof ZCRM.Note.Model.SuccessResponse){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

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

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if(actionResponse instanceof ZCRM.Note.Model.APIException){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if(details != null){
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
                else if(responseObject instanceof ZCRM.Note.Model.APIException){

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
     * This method is used to delete notes in bulk and print the response.
     * @param {Array} noteIds The array of Note IDs to be deleted
     */
    static async deleteNotes(noteIds){

        //example
        //let noteIds = [34096430648001n, 34096430648005n];

        //Get instance of NotesOperations Class
        let notesOperations = new ZCRM.Note.Operations();

        //Get instance of ParameterMap Class
        let paramInstance = new ParameterMap();

        //Add the ids to ParameterMap instance'
        for(let noteId of noteIds) {
            await paramInstance.add(ZCRM.Note.Model.DeleteNotesParam.IDS, noteId);
        }

        //Call deleteNotes method that takes paramInstance as parameter
        let response = await notesOperations.deleteNotes(paramInstance);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if(responseObject != null){

                //Check if expected ActionWrapper instance is received
                if(responseObject instanceof ZCRM.Note.Model.ActionWrapper){

                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getData();

                    actionResponses.forEach(actionResponse => {

                        //Check if the request is successful
                        if(actionResponse instanceof ZCRM.Note.Model.SuccessResponse){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if(details != null){
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if(actionResponse instanceof ZCRM.Note.Model.APIException){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if(details != null){
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
                else if(responseObject instanceof ZCRM.Note.Model.APIException){

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
     * This method is used to delete a single note with ID and print the response.
     * @param {BigInt} noteId The ID of the note to be deleted
     */
    static async deleteNote(noteId){

        //example
        //let noteId = 34096430549003n

        //Get instance of NotesOperations Class
        let notesOperations = new ZCRM.Note.Operations();

        //Call deleteNote method that takes noteID as parameter
        let response = await notesOperations.deleteNote(noteId);

        if(response != null){

            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if(responseObject != null){

                //Check if expected ActionWrapper instance is received
                if(responseObject instanceof ZCRM.Note.Model.ActionWrapper){

                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getData();

                    actionResponses.forEach(actionResponse => {

                        //Check if the request is successful
                        if(actionResponse instanceof ZCRM.Note.Model.SuccessResponse){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if(details != null){
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if(actionResponse instanceof ZCRM.Note.Model.APIException){

                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if(details != null){
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
                else if(responseObject instanceof ZCRM.Note.Model.APIException){

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
}