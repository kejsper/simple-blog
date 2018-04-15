<template>
  <ul class="posts">
    <post-item li v-for="(post, key) in allPosts" :key="key" :post="post" />
  </ul>
</template>
<script>
import { mapGetters } from 'vuex'
import PostItem from './PostItem'

export default {
  name: 'PostList',
  components: {
    PostItem
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['allPosts'])
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';

.posts {
  list-style-type: none;
}

</style>
