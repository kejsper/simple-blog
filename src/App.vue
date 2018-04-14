<template>
  <div id="app">
    <navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/common/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
