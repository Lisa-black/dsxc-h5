// 按需全局引入 vant组件
import Vue from 'vue'
import validate from '@/utils/validate'
import Big from '@/utils/bigUtils/index'
import moment from 'moment'
import FastClick from 'fastclick'
import Clipboard from 'clipboard'

import { Button, List, Cell, CellGroup, PullRefresh, Tabbar, TabbarItem, Image, Form, Popup, Field, Picker, Stepper, Row, Col, Sku, Toast, Dialog } from 'vant'

Vue.use(Big)
Vue.use(Tabbar)
.use(TabbarItem)
.use(Image)
.use(List)
.use(Cell)
.use(Button)
.use(Form)
.use(Popup)
.use(Field)
.use(Picker)
.use(Stepper)
.use(Row)
.use(Col)
.use(Sku)
.use(CellGroup)
.use(PullRefresh)

FastClick.attach(document.body)

Vue.use({
  install: Vue => {
    Vue.prototype.$toast = Toast
    Vue.prototype.$valid = validate
    Vue.prototype.$dialog = Dialog
    Vue.prototype.$clipboard = Clipboard
    Object.defineProperty(Vue.prototype, '$moment', { value: moment })
  }
})