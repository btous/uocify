<template>
  <div>
    <div id="nav-albums" v-if="albums !== ''&&albums.total !== 0">
      <h3 class="tab-title">{{ albumsTotal }} álbumes</h3>
      <div id="albums-container" class="grid-layout">
        <AlbumsElement v-for="album in albums.data" :key="album.id" :album="album" />
      </div>
    </div>
    <div v-else-if="albums.total === 0">
      <h3 class="tab-title not-found">No se ha encontrado ningun álbum con estos criterios de búsqueda</h3>
    </div>
    <div v-else>
      <h3 class="tab-title loading">Cargando listado de álbumes...</h3>
    </div>
  </div>
</template>

<script>
import AlbumsElement from './AlbumsElement.vue';

export default {
  name: "AlbumsList",
  components: { AlbumsElement },
  props: [ 'albums' ],
  data() {
    return {}
  },
  computed: {
    albumsTotal() {
      return this.albums.total
    }
  }
};
</script>

<style lang="scss">
</style>