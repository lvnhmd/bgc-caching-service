const Store = (function getStore() {
  let store;

  function createInstance() {
    const instance = new Map();
    return instance;
  }

  return {
    getInstance() {
      if (!store) {
        store = createInstance();
      }
      return store;
    },
  };
}());

exports.createEntry = (key, value) => Promise.resolve(Store.getInstance().set(key, value))
  .catch((err) => Promise.reject(err));

exports.getEntryByKey = (key) => Promise.resolve(Store.getInstance().get(key))
  .then((data) => Promise.resolve(data))
  .catch((err) => Promise.reject(err));
