<template>
  <li class="post-item">
    <router-link :to="'/' + post.id" class="post-item__link">
      [{{ post.id }}] {{ post.title }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'PostItem',
  props: ['post'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';
.post-item {
  padding: 10px 0;

  &__link {
    color: $color-purple;
    font-weight: 500;
  }
}

</style>
