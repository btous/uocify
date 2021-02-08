<template>
  <section id="songs-shortcut" class="shortcut-section">
    <h3 id="songs-link" class="shortcut-link" @click="goToTab(1)">Canciones</h3>
    <fa-icon icon="chevron-right" class="icon" />
    <div v-if="tracks !== ''&&tracks.total !== 0" id="songs-shortcut-container" class="rows-layout">
      <TracksElement v-for="track in tracks.data.slice(0, 5)" :key="track.id" :track="track" />
    </div>
    <div v-else-if="tracks.total === 0" id="songs-shortcut-container" class="rows-layout not-found">
      No se ha encontrado ninguna canción con estos criterios de búsqueda
    </div>
    <div v-else id="songs-shortcut-container" class="rows-layout loading">
      Cargando listado de canciones...
    </div>
  </section>
</template>

<script>
import TracksElement from './TracksElement.vue';
export default {
  name: "TracksShortcut",
  components: { TracksElement },
  props: [ 'tracks' ],
  computed: {
    // result() {
    //   if(this.tracks === '') {
    //     return 'nothing'
    //   }else if(this.tracks.total === 0) {
    //     return 'empty'
    //   }else {
    //     return 'ok'
    //   }
    // }
  },
  methods: {
      goToTab(idx) {
          this.$emit('goToTab', idx);
      },
  },
};
</script>

<style lang="scss">
</style>