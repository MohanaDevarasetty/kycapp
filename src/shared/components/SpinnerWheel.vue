<template>
  <div class="spinner" v-if="getStateLoading">
    <div class="spinner-in">
      <div class="spinner-border text-light"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpinnerWheel",
  computed: {
    getStateLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>

<style scoped>
.spinner {
  width: 100%;
  height: 100vh;
  display: table;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.4);
}

.spinner-in {
  width: 100%;
  height: 100vh;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}

.spinner-in > div {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: inline-block;
}
</style>
