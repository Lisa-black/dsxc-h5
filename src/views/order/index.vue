<template>
  <div class="app-container">
    <div class="warpper">
      <van-form validate-first @submit="onSubmit">
        <van-field
          readonly
          clickable
          name="buildingName"
          :value="buildingName"
          label="写字楼"
          placeholder="点击选择写字楼"
          input-align="right"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="buildingColumns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
          v-model="addressDetail"
          name="addressDetail"
          label="详细地址"
          input-align="right"
          autocomplete="off"
          placeholder="楼层以及门牌号"
          />   
        <van-field
          v-model="userName"
          name="userName"
          label="姓名"
          input-align="right"
          autocomplete="off"
          placeholder="取餐人姓名"
          /> 
        <van-field
          v-model="phoneNum"
          name="phoneNum"
          type="digit"
          label="联系电话"
          maxlength="11"
          input-align="right"
          autocomplete="off"
          placeholder="联系电话"
          />  
          <van-row gutter="20" class="order_content">
            <van-col span="24">{{ isToday <= 10 ? '今日菜谱' : '明日菜谱' }}------{{  '盐煎肉+米饭+靓汤+小菜' }}</van-col>
            <van-col span="24">
              <van-image fit="fill" width="100%" height="180px" :src="`${picUrl}`" />          
            </van-col>
          </van-row>          
          <van-field name="menuCount" label="份数">
            <template #input>
              <van-stepper v-model="stepper" @change="onChange" />
            </template>
          </van-field>  
          <van-field
            v-model="menuMoney"
            name="menuMoney"
            label="价格"
            readonly
            />   
          <van-row class="order_submit" gutter="20">
            <!-- <van-col :span="12">
              <van-button type="default" native-type="button" @click="showPopup">明细</van-button>
            </van-col> -->
            <van-col :span="24">
              <van-button type="info" native-type="submit">支付</van-button>
            </van-col>      
          </van-row>
          <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" />                                     
      </van-form>  
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      buildingName: '',
      addressDetail: '',
      userName: '',
      phoneNum: '',
      stepper: 1,
      menuMoney: 0,
      buildingColumns: ['壹方中心', '锦绣江南', '华为中心', '万象天地'],
      showPicker: false,   
      show: false,
      picUrl: require('static/20200921.jpg'),
      buildingInfo: { 
        buildingId: '',
        buildingName: ''
      },  
      menuInfo: {
        menuId : '',
        menuName : ''  
      }
    };
  },
  computed: {
    isToday() {
      const nowDate = new Date()
      return nowDate.getHours()
    },
    isSendTime(){
      const nowDate = new Date()
      nowDate.setMinutes (nowDate.getMinutes () + 30)
      const SendTime= nowDate.getHours()+":"+ nowDate.getMinutes()
      return SendTime
    }
  },  
  created(){  
    this.onChange(1)
  },
  methods: {  
    showPopup() {
      this.show = true
    },    
    onChange(value){  
      const vm = this
      vm.menuMoney = vm.$bigMathTimesTFDTwo(value,(1999/100))
    },
    onConfirm(value) {
      const vm = this
      vm.buildingName = value
      vm.showPicker = false
    },
    onSubmit() {
      let vm = this
      if(vm.buildingName === ""){
        vm.$toast('请选择写字楼')
        return
      }else if(vm.addressDetail === ""){
        vm.$toast('请填写详细地址')
        return        
      }else if(vm.userName === ""){
        vm.$toast('请填写取餐人姓名')
        return        
      }else if(vm.phoneNum === ""){
        vm.$toast('请填写联系电话')
        return        
      }else if(!vm.$valid.mobile(vm.phoneNum)){
        vm.$toast('手机号格式错误')
        return                
      }else{
        if(vm.isToday >= 10){
          vm.$dialog.confirm({
            message: '亲，超过10点，下单是明天的菜谱哟！',
          }).then(() => {
            const params = {
              userId: 1,
              userName: vm.userName,
              orderId: Date.now(),
              orderStatus: 1,
              menuName: '盐煎肉+米饭+靓汤+小菜',
              buildingName: vm.buildingName,
              addressDetail: vm.addressDetail,
              phoneNum: vm.phoneNum, 
              menuCount: vm.stepper,
              sendTime: vm.isSendTime,
              orderTime: Date.now(),
              menuMoney: vm.$bigMathTimes(vm.menuMoney,100)
            }
            vm.$store.commit('order/SET_ORDER', params)
            vm.$toast('下单成功')
            vm.$router.push('/')
          })

        }else{
          const params = {
            userId: 1,
            userName: vm.userName,
            orderId: Date.now(),
            orderStatus: 1,
            menuName: '盐煎肉+米饭+靓汤+小菜',
            buildingName: vm.buildingName,
            addressDetail: vm.addressDetail,
            phoneNum: vm.phoneNum, 
            menuCount: vm.stepper,
            sendTime: vm.isSendTime,
            orderTime: Date.now(),
            menuMoney: vm.$bigMathTimes(vm.menuMoney,100)
          }
          vm.$store.commit('order/SET_ORDER', params)
          vm.$toast('下单成功')
          vm.$router.push('/')          
        }
      }
    }       
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  .warpper {
    padding: 12px;
    .order_content{
      background: #ffffff;
      text-align: center;
      padding: 10px 0 0 0;
      .van-col{
        &:first-child{
          float: none;
          border: 1px solid #ebedf0;
          border-radius: 10px;
          width: 100%;
          height: 40px;
          font-size: 14px;
          line-height: 40px;
          margin:10px auto;
        }
      }
    }
    .order_submit{
      width: 100% ;
      position: fixed;
      bottom: 0;
      left: 0;
      background: #ffffff;
      button{
        width: 100%;
      }
    }    
  }
}
</style>
