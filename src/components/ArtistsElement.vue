<template>
  <div class="box artist-box">
    <img
      :src="artist.picture"
      alt="Artist pic"
      :title="artist.name"
    />
    <h4 :title="artist.name">{{ artist.name }}</h4>
    <p :title="artist.nb_fan | numFormatted | fans">{{ artist.nb_fan | numFormatted }} fans</p>
  </div>
</template>

<script>
export default {
    name: 'ArtistsElement',
    props: [ 'artist' ],
}
</script>

<style lang="scss">

</style>