//* LIBRARY
import { inject, computed } from 'vue';

//* PROVIDERS
import store from '../providers/store';
import { storeKey } from '../providers/storePlugin';

export const useDispatch = () => store.dispatch;

export const useSelector = (fn) => {
  const rootStore = inject(storeKey);

  return computed(() => fn(rootStore.state));
};
