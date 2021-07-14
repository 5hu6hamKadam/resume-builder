import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/themes/md-dark-deeppurple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Button from 'primevue/button';
import Tooltip from 'primevue/tooltip';
import VueLogger from 'vuejs-logger';
import i18n from './i18n';

const isProduction = process.env.NODE_ENV === 'production';

import 'primevue/resources/themes/md-light-indigo/theme.css';

const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true,
};
Vue.use(i18n);
Vue.use(VueLogger, options);
Vue.directive('tooltip', Tooltip);
Vue.config.productionTip = false;
Vue.use(PrimeVue, { ripple: true });
Vue.component('Button', Button);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
