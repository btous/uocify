<template>
  <div>
    <div id="nav-artists" v-if="artists !== ''&&artists.total !== 0">
      <h3 class="tab-title">{{ artistsTotal }} artistas</h3>
      <div id="artists-container" class="grid-layout">
        <ArtistsElement v-for="artist in artists.data" :key="artist.id" :artist="artist" />
      </div>
    </div>
    <div v-else-if="artists.total === 0">
      <h3 class="tab-title not-found">No se ha encontrado ningun artista con estos criterios de búsqueda</h3>
    </div>
    <div v-else>
      <h3 class="tab-title loading">Cargando listado de artistas...</h3>
    </div>
  </div>
</template>

<script>
import ArtistsElement from './ArtistsElement.vue';

export default {
  name: "ArtistsList",
  components: { ArtistsElement },
  props: [ 'artists' ],
  data() {
    return {}
  },
  computed: {
    artistsTotal() {
      return this.artists.total
    }
  }
};
</script>

<style lang="scss">

</style>