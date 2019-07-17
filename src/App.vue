<template>
  <div id="app">
    <gnb/>
    <router-view/>
  </div>
</template>

<script>
import Gnb from '@/components/Gnb.vue'

export default {
  name: 'App',
  components: {
    Gnb
  }
}
</script>

<style>
@import "./assets/css/index.css";
@import "./assets/css/content.css";
</style>
