<!-- home -->
<template>
  <div class="app-container">
    <div class="warpper">
      <h1 class="home_title">{{ isToday <= 10 ? '今日菜谱' : '明日菜谱' }}</h1>
      <div class="home_banner">
        <van-image fit="fill" width="100%" height="180px" :src="`${picUrl}`" />
      </div>  
      <div class="operation_button">
        <van-button type="info" to="/order">我要下单</van-button>
        <van-button type="info" to="/orderList">我的订单</van-button>
      </div>          
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      picUrl: require('static/20200921.jpg')
    }
  },

  computed: {
    isToday() {
      const nowDate = new Date()
      return  nowDate.getHours()
    }
  },

  mounted() {},

  methods: {
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  .warpper {
    padding: 12px;
    .home_title {
      text-align: center;
      height: 40px;
      line-height: 40px;
    }
    .home_banner{
      width: 100%;
      height: auto;
    }
    .operation_button{
      width: 100%;
      height: auto;
      button{
        width:100%!important;
        margin-bottom: 15px;
        &:first-child{
          margin-top: 50px;
        }
      }
    }    
  }
}
</style>
