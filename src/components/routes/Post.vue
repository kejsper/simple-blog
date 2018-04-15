<template>
  <div class="hello">
    <single-post v-if="showResults" :post="singlePost"/>
    <error-message v-else/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SinglePost from '../common/SinglePost'
import ErrorMessage from '../common/ErrorMessage'

export default {
  name: 'Post',
  components: {
    SinglePost,
    ErrorMessage
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['showResults', 'singlePost'])
  },
  methods: {
    ...mapActions(['getSinglePost'])
  },
  created () {
    this.getSinglePost(~~this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';

</style>
