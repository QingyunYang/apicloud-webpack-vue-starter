<template>
  <div id="mine">
    mine
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { } from 'vant'
export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapState({
      loginStatus: state => state.user.loginStatus
    })
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
}
</script>

<style lang='less' scoped>
</style>