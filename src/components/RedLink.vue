<template>
  <a :href="url" target="new">
    <slot>더보기</slot>
  </a>
</template>
<script>
export default {
  props: {
    url: String
  }
};
</script>
<style scoped>
a {
  font-size: 20px;
  font-weight: bold;
  color: lightcoral;
}
</style>
