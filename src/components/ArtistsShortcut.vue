<template>
  <section id="artists-shortcut" class="shortcut-section">
    <h3 id="artists-link" class="shortcut-link" @click="goToTab(3)">Artistas</h3>
    <fa-icon icon="chevron-right" class="icon" />
    <div v-if="artists !== ''&&artists.total !== 0" id="artists-shortcut-container" class="one-row-layout">
      <ArtistsElement v-for="artist in artists.data" :key="artist.id" :artist="artist" />
    </div>
    <div v-else-if="artists.total === 0" id="artists-shortcut-container" class="rows-layout not-found">
      No se ha encontrado ningun artista con estos criterios de búsqueda
    </div>
    <div v-else id="artists-shortcut-container" class="rows-layout loading">
      Cargando listado de artistas...
    </div>
  </section>
</template>

<script>
import ArtistsElement from './ArtistsElement.vue';

export default {
  name: "ArtistsShortcut",
  components: { ArtistsElement },
  props: [ 'artists' ],
  methods: {
      goToTab(idx) {
          this.$emit('goToTab', idx);
      }
  },
};
</script>

<style lang="scss">
</style>