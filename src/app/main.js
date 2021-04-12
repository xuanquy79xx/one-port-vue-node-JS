import Vue from 'vue'
import App from './app.vue'

import router from './router/index'
import store from './_store/index'
import registerModule from './_store/registerModule'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/vi'
import './styles/index.scss'; // global css
import axios from 'axios'
require('dotenv').config()

Vue.use(ElementUI, { size: 'medium', locale })

registerModule().then(() => {
  Vue.config.productionTip = false

  new Vue({ render: h => h(App), store, router }).$mount('#app')

  Vue.mixin({
    methods: {
      storeVue: function (STORE_KEY) {
        let s = {}
        if ([STORE_KEY] in store._modules.root._children) s = store._modules.root._children[STORE_KEY].context;
        return {
          dispatch: (action, dataInput) => (Object.getOwnPropertyNames(s).length) ? s.dispatch(action, dataInput) : '',
          getters: s.getters || {}
        }
      },
      postJSON: (url, dataInput, callback) => axios.post(url, dataInput, { headers: { Authorization: '' } }).then(res => callback(res.data)),
    },
    computed: {
      lang(){
        const STORE_KEY = '_LANGUAGES'
        if ([STORE_KEY] in store._modules.root._children) return store._modules.root._children[STORE_KEY].context.getters.lang || {};
      }
    }
  })
  
})