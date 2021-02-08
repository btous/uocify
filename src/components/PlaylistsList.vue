<template>
  <div>
    <div id="playlists" v-if="playlists !== ''">
      <h3 class="tab-title">Empieza por estas {{ playlistsTotal }} playlists</h3>
      <div id="playlists-container" class="grid-layout">
        <PlaylistsElement
          v-for="playlist in playlists.data"
          :key="playlist.id"
          :playlist="playlist"
          @click.native="goToPlaylist(playlist.id)"
        />
      </div>
    </div>
    <div v-else>
      <h3 class="tab-title">Cargando playlists...</h3>
    </div>
  </div>
</template>

<script>
import PlaylistsElement from './PlaylistsElement.vue'

export default {
  title: "Playlists",
  components: { PlaylistsElement },
  props: [ "playlists" ],
  computed: {
    playlistsTotal() {
      return this.playlists.total;
    },
  },
  methods: {
    goToPlaylist(playlistId) {
      this.$router.push({ name: 'playlist', params: { id: playlistId }}).catch(() => {});
    }
  },
};
</script>

<style lang="scss">
#playlists-container {
  max-width: 8.7rem * 6;
  margin: 0 auto;
}
</style>