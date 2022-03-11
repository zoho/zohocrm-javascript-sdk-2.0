function lead() {
   return {
      create: async function (module_api_name, input) {
         return await Records.createRecords(module_api_name, input);
      },
      update: async function (module_api_name, id, input) {
         return await Records.updateRecord(module_api_name, id, input);
      },
      get: async function (module_api_name) {
         return await Records.getRecords(module_api_name);
      },
      delete_0: async function (module_api_name, id) {
         return await Records.deleteRecord(module_api_name, id);
      }
   }
}

const initialize = async () => {
   await SDKInitializer.initializeSDK();
}

var ZCRMSample = (function () {
   return {
      Lead: new lead(),
      init: function () {
         initialize()
      }
   }
})(this)