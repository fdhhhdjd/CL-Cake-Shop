//* LIBRARY
import { createApp } from 'vue';

//* IMPORT CSS GLOBAL
import './index.css';

//* IMPORT FILE MAIN VUE
import App from './App.vue';

//* STORE REDUX
import { createRedux } from './providers/storePlugin';
import store from './providers/store';

createApp(App).use(createRedux(store)).mount('#app');
