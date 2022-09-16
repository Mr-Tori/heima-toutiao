<template>
  <div class="list">
    <div class="article_item" v-for="item in newlist" :key="item.art_id">
      <h3 class="van-ellipsis">{{ item.title }}</h3>
      <div class="img_box" v-if="item.cover.type !== 0">
        <div
          class="flex"
          v-for="(img, index) in item.cover.images"
          :key="index"
        >
          <img :src="img" class="w100" />
        </div>
      </div>
      <div class="info_box">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NewList',
  data () {
    return {}
  },
  computed: {
    ...mapState('newlist', ['newlist'])
  }
}
</script>

<style>
</style>
