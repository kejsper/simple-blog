<template>
  <nav class="navbar">
    <div class="container navbar__wrapper">
      <h1 class="navbar__title">NEOBLOG</h1>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';
@import '../../assets/scss/mixins';
.navbar {
  @include flex(row, center, center);
  width: 100%;
  background-color: $color-red;
  margin-bottom: 20px;
  font-size: 14px;

  &__title {
    color: $color-white;
    font-weight: 800;
    font-size: 2.5em;
  }
}
</style>
