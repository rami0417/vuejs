import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [],
    userInfo: {
      name: "서보람",
      cartNum: "3"
    }
  },
  mutations: {
    setMenus(state, menus) {
      state.menus = menus
    }
  }
  /*,
  getters: {
    getMenus: state => state.menus
  },
  mutations: {
    setMenus(state, menus) {
      state.menus = menus;
    }
  },
  actions: {
  }*/
})