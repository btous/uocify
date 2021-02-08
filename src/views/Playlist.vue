<template>
  <main id="page-playlist">
    <div id="playlist-header" v-if="playlist!==''">
      <img id="playlist-image" :src="playlist.picture" alt="Imagen de portada de la playlist">
      <div id="playlist-info">
        <h2 id="playlist-title">
          {{ playlist.title }}
          </h2>
          <p id="playlist-description">
            {{ playlist.description }}
          </p>
      </div>
    </div>
    <section id="playlist-container">
      <TracksList :passedTracks="playlist.tracks" :playlist="playlist" />
    </section>
  </main>
</template>

<script>
import api from '@/api'
import TracksList from "@/components/TracksList.vue";

export default {
  name: "Playlist",
  components: { TracksList },
  data() {
    return {
      playlist: ''
    }
  },
  computed: {
    playlistId() {
      return this.$route.params.id
    }
  },
  methods: {
    loadPlaylist() {
      api.getPlaylist(this.playlistId)
      .then(data => {
          this.playlist = data
        }
      ).catch(error => console.log(error))
    }
  },
  created() {
    this.loadPlaylist()
  }
};
</script>

<style lang="scss" >
#page-playlist {
  margin: 6rem auto 0 auto;
  max-width: 95%;

  //estils del títol i del contenidor dels resultats
  #playlist-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1.25rem 0;

    #playlist-image {
      align-self: center;
      margin: 0 0.9rem 0 0.9rem;
      border-radius: 4px;
    }

    #playlist-title {
      margin: 0.9em 0.9rem 0 0.9rem;
    }

    #playlist-description {
      margin: 0.9em 0.9rem 0 0.9rem;
      text-align: left;
    }
  }

  #playlist-container {
    background-color: white;
    border-radius: 7px 7px 0 0;
  }

  //estils del contingut del contenidor de cançons
  #nav-songs {
    padding: 0 1.125rem 0.7rem 1.125rem;

    .content-title {
      margin-bottom: 0;
      padding: 1rem 0.5rem;
      text-align: center;
      //border-bottom: 1px solid gray;
    }
    .loading, .not-found {
      text-align: center;
    }
  }
  
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  #page-playlist {
    //estils del títol i del contenidor dels resultats
    
    #playlist-header {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      text-align: left;

      #playlist-image {
        margin: 0 0.5rem 0 0.9rem;
      }
    }
    
    //alinear títol del contenidor a l'esquerra
    #nav-songs {
      .content-title {
        text-align: left;
      }
      .loading, .not-found {
        text-align: left;
      }
    }
    
    //mostrar capçalera del contingut de la pestanya canciones
    //redissenyar grid per mostrar elements (cancó, artista...) en fila
    .rows-layout {
      #songs-header,
      .songs-row {
        display: grid;
        grid-template-columns: 3rem 4fr 3fr 2fr;
        grid-template-rows: 2.2rem;
        align-items: center;
      }

      .song-thumbnail {
        grid-column: 1 / 2;
      }

      .song-name {
        grid-column: 2 / 3;
        font-weight: inherit;
      }

      .artist-name {
        grid-column: 3 / 4;
        font-size: inherit;
      }

      .album-name {
        grid-column: 4 / 5;
        font-size: inherit;
      }
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  #page-playlist {
    //afegir columna durada cançó a la pestanya "Canciones"
    .rows-layout {
      #songs-header,
      .songs-row {
        grid-template-columns: 3rem 4fr 2fr 2fr 1fr;
      }

      .song-duration {
        display: initial;
        grid-column: 5 / 6;
      }
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  #page-playlist {
    max-width: 85%;
  }
}
</style>