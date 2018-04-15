<template>
  <post-list />
</template>

<script>
import { mapActions } from 'vuex'
import PostList from '../common/PostList'

export default {
  name: 'Posts',
  components: {
    PostList
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['getPosts'])
  },
  mounted () {
    this.getPosts()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';

</style>
