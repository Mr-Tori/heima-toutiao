import axios from 'axios'

export default {
  namespaced: true,
  state: {
    channel: [],
    current: ''
  },
  mutations: {
    updataChannel (state, newChannel) {
      state.channel = newChannel
    },
    updataCurrent (state, newCurrent) {
      state.current = newCurrent
    }
  },
  actions: {
    // 发送请求，触发 mutations 中的 updataChannel 方法
    async updataChannel ({ commit, dispatch }) {
      try {
        const { data } = await axios({
          url: 'http://toutiao.itheima.net/v1_0/channels'
        })
        // 触发 mutations 中的 updataChannel 方法
        commit('updataChannel', data.data.channels)
        // 触发 mutations 中的 updataCurrent 方法
        commit('updataCurrent', data.data.channels[0].id)
        // 发 newlist 内的请求，实现一打开页面就有内容
        dispatch('newlist/updataNewList', data.data.channels[0].id, { root: true })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
