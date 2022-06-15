import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    'connecting' () {
      console.log('正在连接')
    },
    SOCKET_CONNECT (state) {
      state.connected = '#19be6b'
      console.log('SOCKET_CONNECT')
    }
  },
  actions: {
    'connecting' () {
      console.log('正在连接')
    }
  },
  modules: {
  }
})
