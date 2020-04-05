<template>
  <div id="home">
    <van-panel title="登录状态">
      <span v-if="loginStatus" class="status">已登录</span>
      <span v-else class="status">未登录</span>
      <template #footer>
        <van-button
          size="small"
          type="primary"
          @click="goLogin"
        >打开登录页</van-button>
      </template>
    </van-panel>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Panel, Button } from 'vant'
export default {
  name: 'Home',
  components: {
    vanPanel: Panel,
    vanButton: Button,
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
@import '../assets/less/var.less';

#home {

  .van-panel__content {
    padding: @padding-md;
    text-align: center;

    .status {
      font-size: @font-size-md;
    }
  }
  
  .van-panel__footer {
    text-align: right;

    .van-button {
      margin-left: @margin-xs;
    }
  }
}
</style>