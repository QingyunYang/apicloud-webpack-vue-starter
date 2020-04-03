<template>
  <div id="app">
    <span v-if="loginStatus">已登录</span>
    <span v-else>未登录</span>
    <button @click="goLogin">去登录</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "App",
  components: {
  },
  computed: {
    ...mapState({
      loginStatus: state => state.user.loginStatus
    })
  },
  created() {
  },
  methods: {
    goLogin() {
      const params = {
        name: 'login',
        url: 'login.html'
      }
      this.api.openWin(params)
    }
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
