<template>
  <div class="songs-row">
    <div class="song-thumbnail">
      <img
        :src="track.album.cover_small"
        alt="Miniatura"
        :title="track.title"
      />
    </div>
    <div class="song-name" :title="track.title">
      {{ track.title }}
    </div>
    <div class="artist-name" :title="track.artist.name">
      {{ track.artist.name }}
    </div>
    <div class="album-name" :title="track.album.title">
      {{ track.album.title }}
    </div>
    <div class="song-duration" :title="track.duration | duration">
      {{ track.duration | duration }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TracksElement",
  props: [ 'track' ],
  computed: {}
};
</script>

<style lang="scss">
</style>