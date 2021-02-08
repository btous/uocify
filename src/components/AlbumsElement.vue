<template>
  <div class="box album-box">
    <img :src="album.cover" alt="Cover" :title="album.title" />
    <h4 :title="album.title">{{ album.title }}</h4>
    <p :title="album.artist.name">{{ album.artist.name }}</p>
  </div>
</template>

<script>
export default {
    name: 'AlbumsElement',
    props: [ 'album' ]
}
</script>

<style lang="scss">

</style>