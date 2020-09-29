<template>
  <div class="app-container">
    <div class="warpper">
      <van-list>
        <van-cell-group>
          <van-cell>
            <van-row gutter="20">
              <van-col span="6">预约时间</van-col>
              <van-col span="18" align="right">尽快送达(预计12点15前)</van-col> 
            </van-row>    
            <van-row gutter="20">           
              <van-col span="6">收货信息</van-col>
              <van-col span="18" align="right">{{ orderDetailInfo.addressDetail }}</van-col>
            </van-row>
            <van-row gutter="20">  
              <van-col span="6"></van-col>
              <van-col span="18" align="right">{{ orderDetailInfo.userName }}（先生）：{{ orderDetailInfo.phoneNum }}</van-col>        
            </van-row>
          </van-cell>
        </van-cell-group>
      </van-list>
      <van-list>
        <van-cell-group>
          <van-cell>
            <van-row gutter="20">
              <van-col span="6" align="center">
                <van-image
                  width="40"
                  height="40"
                  :src="`${picUrl}`"
                />
              </van-col>
              <van-col span="12">
                <p class="detail_list_content">{{ orderDetailInfo.menuName }}</p>
                <p class="detail_list_content">x{{ orderDetailInfo.menuCount }}</p>
              </van-col>
              <van-col span="6" align="right"><span>¥{{ menuMoney }}</span></van-col>    
            </van-row>
          </van-cell>
          <van-cell>
            <van-row gutter="20">
              <van-col span="6">商品金额</van-col>
              <van-col span="18" align="right">￥{{ menuMoney }}</van-col> 
            </van-row>
            <van-row gutter="20">
              <van-col span="6">配送费</van-col>
              <van-col span="18" align="right">￥{{ sendMoney }}</van-col> 
            </van-row> 
            <van-row gutter="20">
              <van-col span="6">实付金额</van-col>
              <van-col span="18" align="right">￥{{ actMoney }}</van-col> 
            </van-row>                    
          </van-cell>
        </van-cell-group>
      </van-list> 
      <van-list>
        <van-cell-group>
          <van-cell>
            <van-row gutter="20" >
              <van-col span="6">订单编号</van-col>
              <van-col span="18" align="right" class="order_id" @click="handleCopy" :data-clipboard-text="`${ orderDetailInfo.orderId }`">{{ orderDetailInfo.orderId }}</van-col>  
            </van-row>  
            <van-row gutter="20">            
              <van-col span="6">下单时间</van-col>
              <van-col span="18" align="right">{{ $moment(orderDetailInfo.orderTime).format('YYYY-DD-MM HH:mm:ss') }}</van-col>
            </van-row>  
            <van-row gutter="20">  
              <van-col span="6">送达时间</van-col>
              <van-col span="18" align="right">{{ orderDetailInfo.sendTime }}</van-col> 
            </van-row>  
            <van-row gutter="20">  
              <van-col span="6">支付方式</van-col>
              <van-col span="18" align="right">{{ payMethod }}</van-col>                   
            </van-row>
          </van-cell>
        </van-cell-group>
      </van-list>
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
      picUrl: require('static/20200921.jpg'),
      orderDetailInfo: {},
      menuMoney: 0,
      sendMoney: 3,
      actMoney: 0,
      payMethod: '微信',
      orderTime: null,
      sendTime: null
    }
  },
  created(){
    const vm = this
    vm.orderList.map(item => {
      if(item.orderId == vm.$route.query.orderId){
        vm.orderDetailInfo = item
      }
    })
    vm.menuMoney = vm.$bigMathDivTFDTwo(vm.orderDetailInfo.menuMoney,100)
    vm.actMoney = vm.$bigMathAddTFDTwo(vm.menuMoney, vm.sendMoney)
  },
  methods: {
    handleCopy(){
      let clipboard = new this.$clipboard('.order_id')
      clipboard.on('success', () => {
        this.$toast('复制成功')
            
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        this.$toast('手机权限不支持复制功能')
        clipboard.destroy()
      })      
    }   
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .warpper {
    padding: 12px;
    .van-list{
      margin-bottom: 20px;
      .van-row{
        padding: 5px 0;
      }
    }
    .order_id{
      color: #1989fa;
    }
    .detail_list_content{
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>
