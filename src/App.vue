<template>
  <div id="app">
    <gnb/>
    <router-view/>
    <foot />
  </div>
</template>

<script>
import Gnb from '@/components/Gnb.vue'
import Foot from '@/components/Foot.vue'

export default {
  name: 'App',
  components: {
    Gnb,
    Foot
  }
}
</script>

<style>
@import "./assets/css/index.css";
@import "./assets/css/content.css";
</style>
