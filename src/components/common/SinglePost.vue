<template>
  <article class="post">
    <div class="container">
      <h1 class="post__title">{{post.title}}</h1>
      <p>{{post.body}}</p>
      <router-link to="/">go back to posts list</router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'SingleArticle',
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

</style>
