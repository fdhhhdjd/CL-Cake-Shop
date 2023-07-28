import { reactive } from 'vue';

export const storeKey = Symbol('Redux-Store');

export const createRedux = store => {
  const rootStore = reactive({
    state: store.getState(),
  });

  return {
    install: app => {
      app.provide(storeKey, rootStore);

      store.subscribe(() => {
        rootStore.state = store.getState();
      });
    },
  };
};
