<template>
  <main class="page-home">
    <div class="container">
      <div class="home-title">
        <img class="logo" src="@/assets/logos/icon.svg" alt="logo" />
        <h2 class="main-title">¿En busca de música?</h2>
      </div>
      
      <!-- <p class="lorem-textum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus
        arcu, feugiat eu molestie in, finibus sit amet lorem. Phasellus
        consectetur ipsum in imperdiet ultrices.
      </p> -->
      <PlaylistsList :playlists="playlists" />
    </div>
  </main>
</template>

<script>
import api from '@/api'
import PlaylistsList from '../components/PlaylistsList.vue'

export default {
  name: "Home",
  components: { PlaylistsList },
  data() {
    return {
      playlists: ''
    }
  },
  methods: {
    loadPlaylists() {
      api.getPlaylists()
      .then(data => {
          this.playlists = data
        }
      ).catch(error => console.log(error))
    }
  },
  created() {
    this.loadPlaylists()
  }
};
</script>


<style lang="scss">
.page-home {
  margin-top: 6.25rem;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  
  .home-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 6.25rem;
    margin: 2rem 0.625rem;
  }
}
</style>