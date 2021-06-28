/**
 * This class uses the SDK constants name reference.
 */
 var Constants = {

   TYPE_VS_DATATYPE : new Map([
      ["map","[object Map]"],
      ["hashmap", "[object Map]"],
      ["string", "[object String]"],
      ["list", "[object Array]"],
      ["long", "[object BigInt]"],
      ["integer", "[object Number]"],
      ["float", "[object Number]"],
      ["double", "[object Number]"],
      ["boolean", "[object Boolean]"],
      ["datetime", "[object Date]"],
      ["date", "[object Date]"]
  ]),

   SPECIAL_TYPES : new Map([
      ["DateTime", "Date"],
      ["Date", "Date"],
      ["Long", "BigInt"]
   ]),

   OAUTH_HEADER_PREFIX : "Zoho-oauthtoken ",

   AUTHORIZATION : "Authorization",

   ZOHO_SDK : "X-ZOHO-SDK",

   SDK_VERSION : "1.0.0",

   GRANT_TYPE : "grant_type",

   GRANT_TYPE_AUTH_CODE : "authorization_code",

   ACCESS_TOKEN : "access_token",

   EXPIRES_IN : "expires_in",

   EXPIRES_IN_SEC : "expires_in_sec",

   REFRESH_TOKEN : "refresh_token",

   REFRESH_TOKEN_PARAMETER : "refreshToken",

   CLIENT_ID : "client_id",

   CLIENT_SECRET : "client_secret",

   REDIRECT_URL : "redirect_uri",

   CODE : "code",

   REQUEST_METHOD_PUT : "PUT",

   REQUEST_METHOD_DELETE : "DELETE",

   REQUEST_METHOD_GET : "GET",

   REQUEST_METHOD_PATCH : "PATCH",

   REQUEST_METHOD_POST : "POST",

   REQUEST_CATEGORY_READ : "READ",

   REQUEST_CATEGORY_ACTION : "ACTION",

   REQUEST_CATEGORY_UPDATE : "UPDATE",

   REQUEST_CATEGORY_CREATE : "CREATE",

   STORAGE : 'storage',

   AUTH_PROCESS : "__auth_process",

   TOKEN_INIT : "__token_init",

   ZES_CLIENT_SCOPE : "zes_client_scope",

   DATA_ACCOUNTS_URL : "data-accounts-url",

   DATA_CLIENT_ID : "data-clientid",

   DATA_SCOPE : "data-scope",

   FULL_GRANT : "full_grant",

   TRUE : 'true',

   GRANTED_FOR_SESSION : "granted_for_session",

   REFRESH_URL : '/refresh',

   REDIRECT_FILE : "redirect.html",

   ACCOUNTS_URL : "&response_type=token&state=zohocrmclient&redirect_uri=",

   TOKEN_STORE_ERROR : "TOKEN STORE ERROR",

   GET_TOKEN_ERROR_MISSING_PARAMS : "missing auth params[clientId, redirectUri, scope]",

   CRM_ACCESS_TOKEN : "crm_access_token",

   GRANT : 'GRANT',

   REFRESH : 'REFRESH',

   STRING : "string",

   FIELD : "field",

   EXPECTED_TYPE : 'expected-type',

   CLASS : "class",

   TOKEN_ERROR : "TOKEN ERROR",

   STRING_NAMESPACE : "String",

   SCOPE : "scope",

   GET_TOKEN_ERROR : "Exception in getting tokens - OAuthToken ",

   INVALID_CLIENT_ERROR : "INVALID CLIENT ERROR",

   ALL : "all",

   INFO : 'info',

   DEBUG : 'debug',

   WARN : 'warn',

   ERROR : 'error',

   OFF : 'off',

   ENCODING : "utf8",

   NAME : "name",

   TYPE : "type",

   TYPE_ERROR : "TYPE ERROR",

   VALUES : "values",

   ACCEPTED_VALUES : "accepted-values",

   GIVEN_VALUE : "given-value",

   UNACCEPTED_VALUES_ERROR : "UNACCEPTED VALUES ERROR",

   UNIQUE : "unique",

   UNIQUE_KEY_ERROR : "UNIQUE KEY ERROR",

   MIN_LENGTH: "min-length",

   MAX_LENGTH: "max-length",

   MAXIMUM_LENGTH : "maximum-length",

   MINIMUM_LENGTH : "minimum-length",

   MINIMUM_LENGTH_ERROR : "MINIMUM LENGTH ERROR",

   REGEX : "regex",

   INSTANCE_NUMBER : "instance-number",

   REGEX_MISMATCH_ERROR : "REGEX MISMATCH ERROR",

   ACCEPTED_TYPE : "accepted_type",

   MAXIMUM_LENGTH_ERROR : "MAXIMUM LENGTH ERROR",

   INTERFACE : "interface",

   CLASSES : "classes",

   READ_ONLY : "read-only",

   REQUIRED : "required",

   MANDATORY_VALUE_MISSING_ERROR : "MANDATORY VALUE MISSING ERROR",

   MANDATORY_KEY_MISSING_ERROR : "Value missing for mandatory key: ",

   EXCEPTION_SET_KEY_MODIFIED : "Exception in calling setKeyModified",

   LIST_NAMESPACE : "list",

   MAP_NAMESPACE : "map",

   STRUCTURE_NAME : "structure_name",

   RECORD_NAMESPACE : "Record.Model.Record",

   REMINDAT_NAMESPACE : "Record.Model.RemindAt",

   FIELD_FILE_NAMESPACE : "Record.Model.FileDetails",

   USER_NAMESPACE : "User.Model.User",

   MODULE_NAMESPACE : "Module.Model.Module",

   LAYOUT_NAMESPACE : "Layout.Model.Layout",

   PARTICIPANTS : "Record.Model.Participants",

   KEY_VALUES : "keyValues",

   KEY_MODIFIED : "keyModified",

   KEYS : "keys",

   ARRAY_KEY : "[object Array]",

   MAP_KEY : "[object Map]",

   FUNCTION : "function",

   CLASS_NOT_FOUND : "CLASS NOT FOUND",

   OBJECT_TYPE : "[object Object]",

   OBJECT_KEY : "object",

   STRING_OBJECT_NAME : "[object String]",

   INTEGER_KEY : "[object Integer]",

   INTEGER_NAMESPACE : "Integer",

   CONTENT_DISPOSITION : 'content-disposition',

   LONG_NAMESPACE : "Long",

   BOOLEAN_NAMESPACE : "Boolean",

   DATE_NAMESPACE : "Date",

   DATETIME_NAMESPACE : "DateTime",

   FILE_NAMESPACE : "util.StreamWrapper",

   DOUBLE_NAMESPACE : "Double",

   FLOAT_NAMESPACE : "Float",

   OBJECT_NAMESPACE : "Object",

   USER : "user",

   ENVIRONMENT : "environment",

   TOKEN : "token",

   STORE : "store",

   EMAIL_PATTERN : /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,

   EMAIL : "email",

   CHOICE_NAMESPACE : "util.Model.Choice",

   MODULE : "Module",

   MODULEPACKAGENAME : "modulePackageName",

   MODULEDETAILS : "moduleDetails",

   PRODUCT_DETAILS : "Product_Details",

   PRICING_DETAILS : "Pricing_Details",

   PARTICIPANT_API_NAME : "Participants",

   INVENTORY_MODULES : ["invoices", "sales_orders","purchase_orders","quotes"],

   PRICE_BOOKS : "Price_Books",

   EVENTS : "Events",

   LAYOUT : "Layout",

   SUBFORM : "subform",

   LOOKUP : "lookup",

   SE_MODULE : "se_module",

   INVENTORY_LINE_ITEMS : "Record.Model.InventoryLineItems",

   KEYS_TO_SKIP : ["Created_Time", "Modified_Time", "Created_By", "Modified_By", "Tag"],

   STATE : "state",

   LOCATION : "location",

   API_DOMAIN : "api_domain",

   TOKEN_KEYS : ["granted_for_session", "access_token","expires_in","expires_in_sec","location","api_domain","state","__token_init","__auth_process"],

   INITIALIZATION_ERROR : "Exception in initialization : ",

   CONTENT_TYPE : "Content-Type",

   SET_TO_CONTENT_TYPE : ["/crm/bulk/v2/read", "/crm/bulk/v2/write"],

   SET_API_URL_EXCEPTION : "Exception in setting API URL : ",

   AUTHENTICATION_EXCEPTION : "Exception in authenticating current request : ",

   FORM_REQUEST_EXCEPTION : "Exception in forming request body : ",

   API_CALL_EXCEPTION : "Exception in current API call execution : ",

   HTTP : "http",

   CONTENT_API_URL : "content.zohoapis.com",

   INVALID_URL_ERROR : "Invalid URL Error",

   ARRAY_NAME : "Array",

   NO_CONTENT_STATUS_CODE : 204,

   NOT_MODIFIED_STATUS_CODE : 304,

   LINE_TAX : "$line_tax",

   LINE_TAX_NAMESPACE : "Record.Model.LineTax",

   UNDERSCORE : "_",

   RELATED_LISTS : "Related_Lists",

   API_NAME : "api_name",

   HREF : "href",

   CALLS : "Calls",

   CALL_DURATION : "Call_Duration",

   ACTIVITIES : "Activities",

   COMMENT_NAMESPACE : "Record.Model.Comment",

   SKIP_MANDATORY : "skip_mandatory",

   CANT_DISCLOSE : " ## can't disclose ## ",

   URL_NAME : "URL",

   HEADERS : "HEADERS",

   PARAMS : "PARAMS",

   PROXY_SETTINGS : "Proxy settings - ",

   PROXY_HOST : "Host: ",

   PROXY_PORT : "Port: ",

   PROXY_USER : "User: ",

   SDK_UNINITIALIZATION_MESSAGE : "SDK is UnInitialized",

   SDK_UNINITIALIZATION_ERROR : "SDK UNINITIALIZED ERROR",

   REQUIRED_IN_UPDATE : "required_in_update",

   PRIMARY : "primary",

   FILEBODYWRAPPER : "FileBodyWrapper",

   EXCEPTION_IS_KEY_MODIFIED : "Exception in calling isKeyModified : ",

   FILE_ERROR : "file_error",

   FILE_DOES_NOT_EXISTS : "file does not exists",

   UNSUPPORTED_IN_API : "API UNSUPPORTED OPERATION",

   UNSUPPORTED_IN_API_MESSAGE : " Operation is not supported by API",

   NULL_VALUE : "null",

   NOTES : "Notes",

   ATTACHMENTS : "$attachments",

   ATTACHMENTS_NAMESPACE : "Attachment.Model.Attachment",

   PICKLIST : "picklist",

   CONSENT_NAMESPACE : "Record.Model.Consent",

   HEADER_NULL_ERROR : "NULL HEADER ERROR",

   HEADER_INSTANCE_NULL_ERROR : "Header Instance MUST NOT be null",

   HEADER_NAME_NULL_ERROR : "NULL HEADER NAME ERROR",

   HEADER_NAME_NULL_ERROR_MESSAGE : "Header Name MUST NOT be null",

   NULL_VALUE_ERROR_MESSAGE : " MUST NOT be null",

   SDK_CONFIG_ERROR_MESSAGE : "sdkConfig MUST NOT be null.",

   HEADER_OR_PARAM_NAME : "HEADER OR PARAM",

   CLASS_KEY : "class",

   OBJECT : "Object",

   INITIALIZATION_SUCCESSFUL : "Initialization successful ",

   PACKAGE_NAMESPACE : "Record.Model.",

   COMMENTS : "Comments",

   SOLUTIONS : "Solutions",

   CASES : "Cases",

   FORMULA : "formula",

   ACCOUNTS : "Accounts",

   CRMSDK : "ZohoCRMJSSDK",

   FIELDS_LAST_MODIFIED_TIME : "FIELDS-LAST-MODIFIED-TIME",

   API_EXCEPTION : "API_EXCEPTION",

   DELETE_FIELD_FILE_ERROR : "Exception in deleting Current User Fields file : ",

   REFRESH_SINGLE_MODULE_FIELDS_ERROR : "Exception in refreshing fields of module : ",

   REFRESH_ALL_MODULE_FIELDS_ERROR : "Exception in refreshing fields of all modules : ",

   STREAM_WRAPPER_CLASS : "StreamWrapper.Model.StreamWrapper",

   API_ERROR_RESPONSE : "Error response : ",

   CONTENT_TYPE_HEADER : "content-type",

   FILE_BODY_WRAPPER : "FileBodyWrapper",

   MANDATORY_KEY_ERROR : "Value missing or null for mandatory key(s) :",

   MANDATORY_VALUE_ERROR : "MANDATORY VALUE ERROR",

   PRIMARY_KEY_ERROR : "Value missing or null for required key(s) : ",

   RECURRING_ACTIVITY_NAMESPACE : "Record.Model.RecurringActivity",

   CONSENT_LOOKUP : "consent_lookup",

   PRICINGDETAILS : "Record.Model.PricingDetails",

   HOSTADDRESS : "127.0.0.1",

   LOCALHOST : "localhost",

   APP : "app",

   CONTENT_API : "content.zohoapis",

   ARRAY_BUFFER : "arraybuffer",

   ZIP : "zip",

   EXCEPTION : "EXCEPTION : ",

   IS_GENERATE_REQUEST_BODY : ["PATCH", "POST", "PUT"],

   PHOTO : "photo",

   CRM : "crm",

   API_VERSION : "v2",

   PHOTO_SUPPORTED_MODULES : ["leads", "contacts", "accounts", "products", "vendors"],

   PHOTO_UPLOAD_ERROR_MESSAGE  : "The given module is not supported in API.",

   INVALID_MODULE  : "INVALID_MODULE",

   TIME_OUT : "Timed out!!!",

   USER_PROXY : "proxy"
  };