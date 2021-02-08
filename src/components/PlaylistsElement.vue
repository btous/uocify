<template>
  <div class="box playlist-box">
    <img :src="playlist.picture" alt="playlist pic" :title="playlist.title" />
    <h4 :title="playlist.title">{{ playlist.title }}</h4>
    <p :title="playlist.nb_tracks + ' canciones'">
      {{ playlist.nb_tracks }} canciones
    </p>
  </div>
</template>

<script>
export default {
  name: "PlaylistsElement",
  props: ["playlist"],
};
</script>

<style lang="scss">
</style>