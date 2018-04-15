<template>
  <section class="error">
    <div class="container">
      <h1 class="error__title">Oooops! Error happened!</h1>
      <router-link to="/">go back to posts list</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ErrorMessage',
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
