<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import { io } from 'socket.io-client'
// const socket = io('ws://localhost:5000')
// socket.on('hello', (arg) => {
//   console.log(arg)
// })
// socket.emit('my event', 'aaaaaaa')
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
