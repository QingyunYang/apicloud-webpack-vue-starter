<template>
  <div id="login">
    <span v-if="loginStatus">已登录</span>
    <span v-else>未登录</span>
    <button @click="login">登录</button>
    <button @click="logout">退出</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',
  components: {},
  created() {
  },
  computed: {
    ...mapState({
      loginStatus: state => state.user.loginStatus
    })
  },
  methods: {
    login() {
      this.$store.dispatch('user/login')
    },
    logout() {
      this.$store.dispatch('user/logout')
    }
  }
}
</script>

<style>
#login {

}
</style>
