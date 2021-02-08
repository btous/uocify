<template>
  <div id="nav-all">
    <TracksShortcut :tracks="tracks" @goToTab="goToTab" />
    <AlbumsShortcut :albums="albums" @goToTab="goToTab" />
    <ArtistsShortcut :artists="artists" @goToTab="goToTab" />
  </div>
</template>

<script>
import ArtistsShortcut from "./ArtistsShortcut.vue";
import AlbumsShortcut from "./AlbumsShortcut.vue";
import TracksShortcut from "./TracksShortcut.vue";

export default {
  name: "AllList",
  components: {
    ArtistsShortcut,
    AlbumsShortcut,
    TracksShortcut,
  },
  props: ["tracks", "albums", "artists"],
  methods: {
    goToTab(idx) {
      this.$emit("goToTab", idx);
    },
  },
};
</script>

<style lang="scss">
#page-results {
  //pestanya "Todo"
  #nav-all {
    //contenidors dels fragments de les altres pestanyes
    .shortcut-section {
      padding: 0;
      padding-top: 1rem;

      .shortcut-link {
        display: inline;
        color: initial;
        font-size: 1rem;
        font-weight: bold;
        padding: 0.5rem;
        cursor: pointer;
      }

      .shortcut-link:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>