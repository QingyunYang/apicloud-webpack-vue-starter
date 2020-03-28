<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <span v-if="loginStatus">已登录</span>
    <span v-else>未登录</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      loginStatus: state => state.user.loginStatus
    })
  },
  created() {
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
