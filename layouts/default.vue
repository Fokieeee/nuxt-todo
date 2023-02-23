<template>
  <div class="hero is-fullheight has-background-light">
    <div class="hero-head">
      <h1 class="title has-text-centered mt-6">TODO list</h1>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  async mounted() {
    await this.$store.dispatch("fetch");
  },
};
</script>

<style>
/* *:not(path):not(g) {
  color: hsla(210, 100%, 100%, 0.9) !important;
  background: hsla(210, 100%, 50%, 0.5) !important;
  outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
  box-shadow: none !important;
} */
</style>
