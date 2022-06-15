import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIO from 'vue-socket.io'

createApp(App).use(new VueSocketIO({
  debug: true,
  connection: 'http://127.0.0.1',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  },
  options: { path: '' } // Optional options
})).use(store).use(router).mount('#app')
