<template>
  <ul class="channel">
    <li
      :class="{ select: item.id === current }"
      v-for="item in channel"
      :key="item.id"
      @click="changeCurrent(item.id)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'ChannelPage',
  data () {
    return {}
  },
  created () {
    this.updataChannel()
  },
  computed: {
    ...mapGetters(['channel']),
    ...mapState('channel', ['current'])
  },
  methods: {
    changeCurrent (id) {
      // 切换 id 显示高亮
      this.updataCurrent(id)
      // 通过拿到新的 id 发送请求获取数据，铺设 new-list 组件页面
      this.updataNewList(id)
    },
    ...mapActions('channel', ['updataChannel']),
    ...mapMutations('channel', ['updataCurrent']),
    ...mapActions('newlist', ['updataNewList'])
  }
}
</script>

<style>
</style>
