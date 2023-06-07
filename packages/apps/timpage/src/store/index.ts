import { createStore } from 'vuex'
import dataSerchStore from './dataSerchStore/index'
// 创建一个新的 store 实例
const store = createStore({
  modules: {
    dataSerchStore: dataSerchStore
  }
})

export default store
