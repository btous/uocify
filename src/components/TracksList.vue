<template>
  <div>
    <div id="nav-songs" v-if="tracks !== ''&&tracksTotal !== 0">
      <h3 class="tab-title content-title">{{ tracksTotal }} canciones</h3>
      <div id="songs-container" class="rows-layout">
        <header id="songs-header" class="songs-row">
          <div class="song-name">
            <h4>CANCIÓN</h4>
          </div>
          <div class="artist-name">
            <h4>ARTISTA</h4>
          </div>
          <div class="album-name">
            <h4>ALBUM</h4>
          </div>
          <div class="song-duration">
            <h4>D.</h4>
          </div>
        </header>
        <TracksElement v-for="track in tracks.data" :key="track.id" :track="track"
        />
      </div>
    </div>
    <div id="nav-songs" v-else-if="tracksTotal === 0">
      <h3 class="tab-title content-title not-found">No se ha encontrado ninguna canción con estos criterios de búsqueda</h3>
    </div>
    <div id="nav-songs" v-else>
      <h3 class="tab-title content-title loading">Cargando listado de canciones...</h3>
    </div>
  </div>
</template>

<script>
import TracksElement from "./TracksElement.vue";

export default {
  name: "TracksList",
  components: { TracksElement },
  props: [ "passedTracks", "playlist" ],
  data() {
    return {};
  },
  computed: {
    tracks() {
      if(this.passedTracks!==''&&this.passedTracks!==undefined) {
        return this.passedTracks;
      } else {
        return '';
      }
    },
    tracksTotal() {
      if(this.tracks!==''&&this.tracks.total) {
        return this.tracks.total;
      } else if (this.tracks!=='') {
        return this.playlist.nb_tracks;
      } else {
        return '';
      }
    },
  },
  methods: {},
};
</script>

<style lang="scss">
#songs-container {
  .songs-row:first-child {
    cursor: default;
  }
}
</style>