class Test {

    static async call() {

        await SDKInitializer.initializeSDK();

        await ModuleFieldsHandler.refreshAllModules();

        this.attachment();

        this.bluePrint();

        this.bulkRead();

        this.bulkWrite();

        this.contactRole();

        this.currency();

        this.customView();

        this.field();

        this.file();

        this.layout();

        this.module();

        this.note();

        this.notification();

        this.org();

        this.profile();

        this.query();

        this.record();

        this.relatedList();

        this.relatedRecord();

        this.role();

        this.shareRecord();

        this.tag();

        this.tax();

        this.territory();

        this.user();

        this.variableGroup();

        this.variable();

        // await this.testUpload();
    }

    static async attachment() {

        let moduleAPIName = "Leads";

        let recordId = 34770618982003n;

        let attachmentId = 34770619060031n;

        console.log("-----Calling getAttachments()-----");
        await Attachment.getAttachments(moduleAPIName, recordId);

        console.log("-----Calling uploadAttachments()-----");
        await Attachment.uploadAttachments(moduleAPIName, recordId);

        console.log("-----Calling uploadLinkAttachment()-----");
        await Attachment.uploadLinkAttachment(moduleAPIName , recordId, "https://5.imimg.com/data5/KJ/UP/MY-8655440/zoho-crm-500x500.png");

        console.log("-----Calling deleteAttachments()-----");
        await Attachment.deleteAttachments(moduleAPIName, recordId, [34770619060003n, 34770619060009n])

        console.log("-----Calling deleteAttachment()-----");
        await Attachment.deleteAttachment(moduleAPIName, recordId, attachmentId);

        console.log("-----Calling downloadAttachment()-----");
        await Attachment.downloadAttachment(moduleAPIName, recordId, attachmentId)
    }

    static async bluePrint() {

        let moduleAPIName = "Leads";

        let recordId = 34770616838058n;

        let transitionId = 34770610173093n;

        console.log("-----Calling getBlueprint()-----")
        await BluePrint.getBlueprint(moduleAPIName, recordId);

        console.log("-----Calling updateBlueprint()-----")
        await BluePrint.updateBlueprint(moduleAPIName, recordId, transitionId);
    }

    static async bulkRead() {

        let moduleAPIName = "Leads";

        let jobId = 34770619060052n;

        console.log("-----Calling createBulkReadJob()-----")
        await BulkRead.createBulkReadJob(moduleAPIName);

        console.log("-----Calling getBulkReadJobDetails()-----")
        await  BulkRead.getBulkReadJobDetails(jobId);

        console.log("-----Calling downloadResult()-----")
        await BulkRead.downloadResult(jobId);
    }

    static async bulkWrite() {

        let orgId = "xxxxx";;

        let downloadUrl = "https://download-accl.zoho.com/v2/crm/xxxxxx/bulk-write/34770619060064/34770619060064.zip";

        await BulkWrite.uploadFile(orgId);

        await BulkWrite.createBulkWriteJob("Leads", "34770619075001");

        await BulkWrite.getBulkWriteJobDetails(34770619060064n);

        await BulkWrite.downloadBulkWriteResult(downloadUrl);
    }

    static async contactRole() {

        let contactRoleId = 34770618137074n;

        let contactRoleIds = [34770618858001n, 34770618858002n, 34770617683044n];

        console.log("-----Calling getContactRoles()-----")
        await ContactRole.getContactRoles();

        console.log("-----Calling getContactRole()-----")
        await ContactRole.getContactRole(contactRoleId);

        console.log("-----Calling createContactRoles()-----")
        await ContactRole.createContactRoles();

        console.log("-----Calling updateContactRoles()-----")
        await ContactRole.updateContactRoles();

        console.log("-----Calling updateContactRole()-----")
        await ContactRole.updateContactRole(contactRoleId);

        console.log("-----Calling deleteContactRole()-----")
        await ContactRole.deleteContactRole(contactRoleId);

        console.log("-----Calling deleteContactRoles()-----")
        await ContactRole.deleteContactRoles(contactRoleIds);
    }

    static async currency() {

        let currencyId = 34770617368016n;

        console.log("-----Calling enableMultipleCurrencies()-----")
        await Currency.enableMultipleCurrencies();

        console.log("-----Calling getCurrencies()-----")
        await Currency.getCurrencies();

        console.log("-----Calling getCurrency()-----")
        await Currency.getCurrency(currencyId);

        console.log("-----Calling addCurrencies()-----")
        await Currency.addCurrencies();

        console.log("-----Calling updateCurrencies()-----")
        await Currency.updateCurrencies();

        console.log("-----Calling updateCurrency()-----")
        await Currency.updateCurrency(currencyId);

        console.log("-----Calling updateBaseCurrency()-----")
        await Currency.updateBaseCurrency();
    }

    static async customView() {

        let moduleAPIName = "Leads"

        let customViewId = 34770610087501n;

        // let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes"];

		// for(let name of names) {

        //     await CustomView.getCustomViews(name);
		// }

        await CustomView.getCustomViews(moduleAPIName);

        await CustomView.getCustomView(moduleAPIName, customViewId);
    }

    static async field() {

        let moduleAPIName = "Leads"

        let fieldId = 34770610052001n;

        // let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes"];

		// for(let name of names) {

        //     await Field.getFields(name);
        // }

        console.log("-----Calling getFields()-----")
        await Field.getFields(moduleAPIName);

        console.log("-----Calling getField()-----")
        await Field.getField(moduleAPIName, fieldId);
    }

    static async file() {

        let fileId = "ae9c7cefa41dbc8";

        console.log("-----Calling uploadFiles()-----");
        await File.uploadFiles();

        console.log("-----Calling getFile()-----");
        await File.getFile(fileId);
    }

    static async layout() {

        let moduleAPIName = "Deals";

        let layoutId = 34770610091023n;

        // let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes"];

		// for(let name of names) {

        //     await Layout.getLayouts(name);
        // }

        console.log("-----Calling getLayouts()-----")
        await Layout.getLayouts(moduleAPIName);

        console.log("-----Calling getLayout()-----")
        await Layout.getLayout(moduleAPIName, layoutId);
    }

    static async module() {

        let moduleAPIName = "Test1";

        let moduleId = 34770613905003n;

        console.log("-----Calling getModules()-----")
        await Module.getModules();

        console.log("-----Calling getModule()-----")
        await Module.getModule(moduleAPIName);

        console.log("-----Calling updateModuleByAPIName()-----")
        await Module.updateModuleByAPIName(moduleAPIName);

        console.log("-----Calling updateModuleById()-----")
        await Module.updateModuleById(moduleId);
    }

    static async note() {

        let noteId = 34770618854013n;

        let noteIds = [34770618854015n, 34770618854014n];

        console.log("-----Calling getNotes()-----")
        await Note.getNotes();

        console.log("-----Calling getNote()-----")
        await Note.getNote(noteId);

        console.log("-----Calling createNotes()-----")
        await Note.createNotes();

        console.log("-----Calling updateNotes()-----")
        await Note.updateNotes();

        console.log("-----Calling updateNote()-----")
        await Note.updateNote(noteId);

        console.log("-----Calling deleteNotes()-----")
        await Note.deleteNotes(noteIds);

        console.log("-----Calling deleteNote()-----")
        await Note.deleteNote(noteId);
    }

    static async notification() {

        let channelIds = [1006800211n, 1006800211n];

        console.log("-----Calling enableNotifications()-----")
        await Notification.enableNotifications();

        console.log("-----Calling getNotificationDetails()-----")
        await Notification.getNotificationDetails();

        console.log("-----Calling updateNotifications()-----")
        await Notification.updateNotifications();

        console.log("-----Calling updateNotification()-----")
        await Notification.updateNotification();

        console.log("-----Calling disableNotifications()-----")
        await Notification.disableNotifications(channelIds);

        console.log("-----Calling getNotificationDetails()-----")
        await Notification.disableNotification();
    }

    static async org() {

        console.log("-----Calling getOrganization()-----")
        await Organization.getOrganization();

        console.log("-----Calling uploadOrganizationPhoto()-----")
        await Organization.uploadOrganizationPhoto();
    }

    static async profile() {

        let profileId = 34770610026014n;

        console.log("-----Calling getProfiles()-----");
        await Profile.getProfiles();

        console.log("-----Calling getProfile()-----");
        await Profile.getProfile(profileId);
    }

    static async query() {

        await Query.getRecords();
    }

    static async record() {

        let moduleAPIName = "Leads";

        let recordId = 5255085620031n;

        let recordIds = [34770619080126n, 34770618218003n, 34096430729009n];

        let jobId = "34770616916059";

        // let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes"];

		// for(let name of names) {

        //     await Record.getRecords(name);
        // }

        console.log("-----Calling getRecord()-----")
        await Record.getRecord(moduleAPIName, recordId);

        await Record.updateRecord(moduleAPIName, recordId);

        await Record.deleteRecord(moduleAPIName, recordId);

        console.log("-----Calling getRecords()-----")
        await Record.getRecords(moduleAPIName);

        console.log("-----Calling createRecords()-----");
        await Record.createRecords(moduleAPIName);

        await Record.updateRecords(moduleAPIName);

        await Record.deleteRecords(moduleAPIName, recordIds);

        await Record.upsertRecords(moduleAPIName);

        await Record.getDeletedRecords(moduleAPIName);

        await Record.searchRecords(moduleAPIName);

        await Record.convertLead(34770618938001n);

        console.log("-----Calling uploadPhoto()-----");
        await Record.uploadPhoto(moduleAPIName, recordId);

        console.log("-----Calling getPhoto()-----");
        await Record.getPhoto(moduleAPIName, recordId);

        await Record.deletePhoto(moduleAPIName, recordId);

        await Record.massUpdateRecords(moduleAPIName);

        await Record.getMassUpdateStatus(moduleAPIName, jobId);
    }

    static async relatedList() {

        let moduleAPIName = "Contacts";

        let relatedListId = 34770610236007n;

        // let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events", "Purchase_Orders", "Accounts", "Cases", "Notes"];

		// for(let name of names) {

        //     await RelatedList.getRelatedLists(name);
        // }

        console.log("-----Calling getRelatedLists()-----")
        await RelatedList.getRelatedLists(moduleAPIName);

        console.log("-----Calling getRelatedList()-----")
        await RelatedList.getRelatedList(moduleAPIName, relatedListId)
    }

    static async relatedRecord() {

        let moduleAPIName = "Products";

        let recordId = 34770617606020n;

        let relatedModuleAPIName = "Price_Books";

        let relatedId = 34770615917001n;

        let relatedIds = [34770615917011n, 34770610307010n];

        console.log("-----Calling getRelatedRecords()-----")
        await RelatedRecord.getRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling getRelatedRecord()-----")
        await RelatedRecord.getRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId)

        console.log("-----Calling updateRelatedRecord()-----")
        await RelatedRecord.updateRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);

        console.log("-----Calling updateRelatedRecords()-----")
        await RelatedRecord.updateRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling deLinkRecords()-----")
        await RelatedRecord.deLinkRecords(moduleAPIName, recordId, relatedModuleAPIName, relatedIds);

        console.log("-----Calling deLinkRecord()-----")
        await RelatedRecord.deLinkRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);
    }

    static async role() {

        let roleId = 34770610026005n;

        console.log("-----Calling getRoles()-----")
        await Role.getRoles();

        console.log("-----Calling getRole()-----")
        await Role.getRole(roleId);
    }

    static async shareRecord() {

        let moduleAPIName = "Leads";

        let recordId = 34770618863009n;

        console.log("-----Calling shareRecord()-----")
        await ShareRecord.shareRecord(moduleAPIName, recordId);

        console.log("-----Calling updateSharePermissions()-----")
        await ShareRecord.updateSharePermissions(moduleAPIName, recordId);

        console.log("-----Calling getSharedRecordDetails()-----")
        await ShareRecord.getSharedRecordDetails(moduleAPIName, recordId);

        console.log("-----Calling revokeSharedRecord()-----")
        await ShareRecord.revokeSharedRecord(moduleAPIName, recordId);
    }

    static async tag() {

        let moduleAPIName = "Leads";

        let tagId = 34770619080322n;

        let recordId = 34770616917047n;

        let tagNames = ["addtag1,addtag12"];

        let recordIds = [34770616917047n, 34770616917006n, 34096430394028n];

        let conflictId = "34770619080322";

        console.log("-----Calling getTags()-----")
        await Tag.getTags(moduleAPIName);

        console.log("-----Calling createTags()-----")
        await Tag.createTags(moduleAPIName);

        console.log("-----Calling updateTags()-----")
        await Tag.updateTags(moduleAPIName);

        console.log("-----Calling updateTag()-----")
        await Tag.updateTag(moduleAPIName, tagId);

        console.log("-----Calling mergeTags()-----")
        await Tag.mergeTags(tagId, conflictId);

        console.log("-----Calling addTagsToRecord()-----")
        await Tag.addTagsToRecord(moduleAPIName, recordId, tagNames);

        console.log("-----Calling removeTagsFromRecord()-----")
        await Tag.removeTagsFromRecord(moduleAPIName, recordId, tagNames);

        console.log("-----Calling addTagsToMultipleRecords()-----")
        await Tag.addTagsToMultipleRecords(moduleAPIName, recordIds, tagNames);

        console.log("-----Calling removeTagsFromMultipleRecords()-----")
        await Tag.removeTagsFromMultipleRecords(moduleAPIName, recordIds, tagNames);

        console.log("-----Calling getRecordCountForTag()-----")
        await Tag.getRecordCountForTag(moduleAPIName, tagId);

        console.log("-----Calling deleteTag()-----")
        await Tag.deleteTag(tagId);
    }

    static async tax() {

        let taxId = 34770618866126n;

        console.log("-----Calling getTaxes()-----")
        await Tax.getTaxes();

        console.log("-----Calling getTax()-----")
        await Tax.getTax(taxId);

        console.log("-----Calling createTaxes()-----")
        await Tax.createTaxes();

        console.log("-----Calling updateTaxes()-----")
        await Tax.updateTaxes();

        console.log("-----Calling deleteTaxes()-----")
        await Tax.deleteTaxes([34770610339001n, 34770617942036n])

        console.log("-----Calling deleteTax()-----")
        await Tax.deleteTax(taxId)
    }

    static async territory() {

        let territoryId = 34770613051357n;

        console.log("-----Calling getTerritories()-----")
        await Territory.getTerritories();

        console.log("-----Calling getTerritory()-----")
        await Territory.getTerritory(territoryId);
    }

    static async user() {

        let userId = 34770619080412n;

        console.log("-----Calling getUsers()-----")
        await User.getUsers();

        console.log("-----Calling getUser()-----")
        await User.getUser(userId);

        console.log("-----Calling updateUsers()-----")
        await User.updateUsers();

        console.log("-----Calling updateUser()-----")
        await User.updateUser(userId);

        console.log("-----Calling deleteUser()-----")
        await User.deleteUser(userId);

        console.log("-----Calling createUser()-----")
        await User.createUser(userId);
    }

    static async variableGroup() {

        let variableGroupId = 34770613089001n;

        let variableGroupAPIName = "General";

        console.log("-----Calling getVariableGroups()-----")
        await VariableGroup.getVariableGroups();

        console.log("-----Calling getVariableGroupById()-----")
        await VariableGroup.getVariableGroupById(variableGroupId);

        console.log("-----Calling getVariableGroupByAPIName()-----")
        await VariableGroup.getVariableGroupByAPIName(variableGroupAPIName);
    }

    static async variable() {

        let variableIds = [34770619080456n, 34770619080458n];

        console.log("-----Calling createVariables()-----")
        await Variable.createVariables();

        console.log("-----Calling getVariables()-----")
        await Variable.getVariables();

        console.log("-----Calling getVariableById()-----")
        await Variable.getVariableById(34770618236134n);

        console.log("-----Calling getVariableForAPIName()-----")
        await Variable.getVariableForAPIName("Variable551");

        console.log("-----Calling updateVariableByAPIName()-----")
        await Variable.updateVariableByAPIName("Variable551");

        console.log("-----Calling updateVariableById()-----")
        await Variable.updateVariableById(34770618236134n);

        console.log("-----Calling updateVariables()-----")
        await Variable.updateVariables();

        console.log("-----Calling deleteVariables()-----")
        await Variable.deleteVariables(variableIds);

        console.log("-----Calling deleteVariable()-----")
        await Variable.deleteVariable(34770619080456n)
    }

    static async testUpload() {

        var url = "https://www.zohoapis.com/crm/v2/Leads";

        var headers = new Map();

        headers.set("Authorization", "Zoho-oauthtoken 1000.xxxxxxx.xxxxx");

        var requestMethod = "GET";

        var apiHeaders = {};

        if(headers) {

            headers.forEach(function(value, key) {
                apiHeaders[key] = value;
            });
        }

        var requestDetails = {

            uri : url,

            method : requestMethod,

            headers : apiHeaders,

            body : null,

            encoding: "utf8"
        };

        var body, xhr, i;

        xhr = new XMLHttpRequest();

        xhr.open(requestDetails.method, requestDetails.uri, true);

        for (i in requestDetails.headers) {

            xhr.setRequestHeader(i, requestDetails.headers[i]);
        }

        body = requestDetails.body || null;

        xhr.send(body);

        xhr.onreadystatechange = function() {

            if(xhr.readyState == 4) {

                console.log(xhr);
            }
        }
    }
}