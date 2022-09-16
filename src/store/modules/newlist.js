import axios from 'axios'

export default {
  namespaced: true,
  state: {
    // 铺设 new-list 组件的数据
    newlist: []
  },
  mutations: {
    // 修改 newlist 异步修改
    updataNewList (state, payLoad) {
      state.newlist = payLoad
    }
  },
  actions: {
    async updataNewList ({ commit }, id) {
      try {
        const { data } = await axios({
          url: 'http://toutiao.itheima.net/v1_0/articles',
          params: {
            channel_id: id,
            timestamp: +new Date(),
            with_top: 1
          }
        })
        // 修改newlist
        commit('updataNewList', data.data.results)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
