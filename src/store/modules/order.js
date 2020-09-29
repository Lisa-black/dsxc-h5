import {
  setOrderList,
  getOrderList,
  removeOrderList
} from '@/utils/cache'

const state = {
  orderList: getOrderList()
}

const mutations = {
  SET_ORDER(state, orderList){
    state.orderList.push(orderList)
    setOrderList(state.orderList)
  }
}

const actions = {
  fedLogOut({ commit, context }) {
    removeOrderList()
  }   
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
