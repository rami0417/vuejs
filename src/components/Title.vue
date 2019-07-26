<template>
	<div id="title">
    <h2>{{titleName}}</h2>
  </div>
</template>

<script>
import {mapState} from 'vuex'

 export default {
  name: "Title",
  data() {
    return {
      titleName: ""
    };
  },
  mounted() {
    for (let row of this.menus) {
      if (row.idx == this.titleIdx) {
        this.titleName = row.name;
        break;
      }
    }
    this.check();
  },
  computed: {
    ...mapState(['menus'])
  },
  props: {
    titleIdx: Number
  }
};
</script>
