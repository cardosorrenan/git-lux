<template>
  <div class="row">
    <p :style="`font-size: ${this.fontSize}`" class="github">GitHub</p>
    <p :style="`font-size: ${this.fontSize}`" class="search">Search</p>
  </div>
</template>
<script>
export default {
  props: {
    size: String,
  },
  computed: {
    fontSize() {
      return this.size === 'sm' ? '30pt' : '40pt';
    },
  },
};
</script>
<style scoped lang="scss">
  .row {
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding: 0px;
  }
  .github {
    font-family: "RobotoMono-Bold";
    margin-right: 15px;
  }
  .search {
    font-family: "RobotoMono-ItalicLight";
  }
</style>
