var LocalCache = {
    data: {},
    remove: async function () {
        if ('caches' in window) {
            await caches.delete(Constants.CRMSDK);
        }
    },
    exist: async function () {
        if ('caches' in window) {
            return await caches.has(Constants.CRMSDK);
        }
    },
    get: async function (userKey) {
        let request = '/' + userKey + '.json';

        let response = await caches.match(request);

        if (response != undefined) {
            return await response.json();
        }

        return {};
    },
    set: async function (userKey, value) {
        if ('caches' in window) {
            let cache = await caches.open(Constants.CRMSDK);

            let request = '/' + userKey + '.json';

            await cache.put(request, new Response(JSON.stringify(value)));
        }
    },
    removeKey: async function (userKey) {
        if ('caches' in window) {
            let cache = await caches.open(Constants.CRMSDK);

            let request = '/' + userKey + '.json';

            await cache.delete(request);
        }
    }
};