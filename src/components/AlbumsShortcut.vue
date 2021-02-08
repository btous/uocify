<template>
  <section id="albums-shortcut" class="shortcut-section">
    <h3 id="albums-link" class="shortcut-link" @click="goToTab(2)">Álbumes</h3>
    <fa-icon icon="chevron-right" class="icon" />
    <div v-if="albums !== ''&&albums.total !== 0" id="albums-shortcut-container" class="one-row-layout">
      <AlbumsElement v-for="album in albums.data" :key="album.id" :album="album" />
    </div>
    <div v-else-if="albums.total === 0" id="albums-shortcut-container" class="rows-layout not-found">
      No se ha encontrado ningun álbum con estos criterios de búsqueda
    </div>
    <div v-else id="albums-shortcut-container" class="rows-layout loading">
      Cargando listado de álbumes...
    </div>
  </section>
</template>

<script>
import AlbumsElement from './AlbumsElement.vue';

export default {
  name: "AlbumsShortcut",
  components: { AlbumsElement },
  props: [ 'albums' ],
  methods: {
      goToTab(idx) {
          this.$emit('goToTab', idx);
      }
  }
};
</script>

<style lang="scss">
</style>