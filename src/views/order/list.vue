<template>
  <div class="app-container">
    <div class="warpper">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"  
          :finished="finished"
          finished-text="-  没有更多了  -"
          @load="onLoad"           
        >
          <van-cell-group>
            <van-cell v-for="item in myList" :key="item.id">
              <van-row gutter="20" @click.native="hanldeOrderDetail(item)">
                <van-col span="12" class="oderlistTitle">{{ item.menuName }}</van-col>
                <van-col span="12" align="right">{{ `￥` + item.menuMoney }}</van-col>          
                <van-col span="12">预计送达时间</van-col>
                <van-col span="12" align="right">{{ item.creatTime }}</van-col>            
              </van-row>
              <van-row gutter="20">
                <van-col span="24" v-if="item.orderStatus === -1">
                  <van-button size="small" plain type="info">已取消</van-button>
                </van-col>
                <van-col span="24" v-else-if="item.orderStatus === 0">
                  <van-button size="small" type="info" native-type="button">待支付</van-button>
                </van-col>  
                <van-col span="24" v-else-if="item.orderStatus === 3">
                  <van-button size="small" plain type="info">已退款</van-button>
                </van-col>              
                <van-col span="12"  v-if="item.orderStatus === 1">
                  <van-button size="small" type="info">退款</van-button>
                </van-col>              
                <van-col span="12"  v-if="item.orderStatus === 1">
                  <van-button size="small" plain type="info">已支付</van-button>
                </van-col> 
              </van-row>                                  
            </van-cell>
          </van-cell-group>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      orderList: state => state.order.orderList
    })
  },  
  data() {
    return {
      myList: [],
      loading: false,
      finished: false,
      page: 1,
      isLoading:false // 下拉的加载图案
    }
  },
  created() {
    this.myList = this.orderList ? this.orderList : []
  },
  methods: {
    hanldeOrderDetail(row){
      const vm = this
      if(row.orderStatus !== 0){
        vm.$router.push({
          path: '/orderDetail',
          query: { orderId: row.orderId }
        })
      }
    },
    onLoad() {
      const vm = this
      // 异步更新数据  
      vm.myList = vm.orderList ? vm.orderList : []
      vm.loading = false
    },
    onRefresh () {
      const vm = this
      // 重新初始化这些属性
      vm.isLoading = false
      vm.myList = vm.orderList ? vm.orderList : []
      vm.page = 1
      vm.loading = false
      vm.finished = false
    }     
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .warpper {
    padding: 12px;
    .van-cell{
      min-height: 120px;
      padding-bottom: 15px;
      .van-col button{
        width:100%;
        margin-top: 15px;
      }
      .van-col.oderlistTitle{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;      
      }
    }
  }  
}
</style>
