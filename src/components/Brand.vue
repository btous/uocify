<template>
  <div id="brand">
    <router-link id="brand-link" to="/">
      <img
        id="logo"
        v-if="logo"
        alt="logotip de uocify"
        src="../assets/logos/logo.svg"
      />
      <img
        id="icon"
        v-else
        alt="icona de uocify"
        src="../assets/logos/icon.svg"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Brand",
  props: ["logo"],
};
</script>

<style lang="scss">
#brand {
  flex-shrink: 0; //evitar deformació icona uocify

  img {
    height: 2.5rem;
    width: auto;
  }
}
</style>