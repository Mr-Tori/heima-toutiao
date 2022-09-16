<template>
  <!-- 只能有一个根标签 -->
  <div>
    <Channel></Channel>
    <NewList></NewList>
  </div>
</template>

<script>
import Channel from '@/components/channel.vue'
import NewList from '@/components/new-list.vue'
export default {
  // 组件的名字，用大写开头
  name: 'App',
  // 选项是API，不同的功能有特定的选项位置
  data () {
    return {}
  },
  created () {},
  mounted () {},
  components: {
    Channel,
    NewList
  },
  props: {},
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style scoped>
</style>
