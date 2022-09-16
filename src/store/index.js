import Vue from 'vue'
import Vuex from 'vuex'
import channel from '@/store/modules/channel'
import newlist from '@/store/modules/newlist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    // channel做快捷访问
    channel: state => state.channel.channel
    // current不做快捷访问
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    channel,
    newlist
  }
})
