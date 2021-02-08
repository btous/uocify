<template>
  <main id="page-results">
    <h2 id="results-title">
      Resultados de <span id="text-serached">{{ querySearched }}</span>
    </h2>

    <section id="results-container">
      <b-tabs v-model="tabIndex">
        <b-tab title="Todo">
          <AllList
            :tracks="tracks"
            :albums="albums"
            :artists="artists"
            @goToTab="goToTab"
          />
        </b-tab>
        <b-tab title="Canciones">
          <TracksList :passedTracks="tracks" />
        </b-tab>
        <b-tab title="Álbumes">
          <AlbumsList :albums="albums" />
        </b-tab>
        <b-tab title="Artistas">
          <ArtistsList :artists="artists" />
        </b-tab>
      </b-tabs>
    </section>
  </main>
</template>

<script>
import api from '@/api'
import AlbumsList from "@/components/AlbumsList.vue";
import AllList from "@/components/AllList.vue";
import ArtistsList from "@/components/ArtistsList.vue";
import TracksList from "@/components/TracksList.vue";
// import tracks from "../json/tracks.json";
// import albums from "../json/albums.json";
// import artists from "../json/artists.json";

export default {
  name: "SearchResults",
  components: {
    TracksList,
    AlbumsList,
    ArtistsList,
    AllList,
  },
  data() {
    return {
      tracks: '',
      albums: '',
      artists: '',
      tabIndex: 0,
    };
  },
  computed: {
    querySearched() {
      return this.$route.params.query;
    } 
  },
  watch: {
    querySearched() {
      this.tracks = '',
      this.albums = '',
      this.artists = '',
      this.search(this.querySearched);
    }
  },
  methods: {
    goToTab(idx) {
      this.tabIndex = idx;
    },
    search(query) {
      this.updateTracks(query);
      this.updateAlbums(query);
      this.updateArtists(query);
    },
    updateTracks(query) {
      api.getTracks(query)
      .then(data => {
          this.tracks = data
        }
      ).catch(error => console.log(error))
    },
    updateAlbums(query) {
      api.getAlbums(query)
      .then(data => {
          this.albums = data
        }
      ).catch(error => console.log(error))
    },
    updateArtists(query) {
      api.getArtists(query)
      .then(data => {
          this.artists = data
        }
      ).catch(error => console.log(error))
    }
  },
  created() {
    this.search(this.querySearched)
  }
};
</script>

<style lang="scss" >
#page-results {
  margin: 6rem auto 0 auto;
  max-width: 95%;

  //estils del títol i del contenidor dels resultats
  #results-title {
    margin: 0.9em 0rem 0.4em 0rem;

    span {
      color: grey;
    }
  }

  #results-container {
    background-color: white;
    border-radius: 7px 7px 0 0;
  }

  //estils del menú de navegació
  .nav-tabs {
    .nav-link {
      padding: 0.5rem 0.6rem;
      border: none;
      text-align: center;
      flex-grow: 1;
      color: initial;
    }

    .nav-link:hover {
      border-bottom: 2px solid $uocify-color;
    }

    .active {
      font-weight: 600;
      border-bottom: 2px solid $uocify-color;
    }
  }

  //estils del contenidor de les pestanyes
  .tab-content {
    padding: 0 1.125rem 0.7rem 1.125rem;
  }

  //estils del contingut de les pestanyes
  .tab-pane {
    .tab-title {
      margin-bottom: 0;
      padding: 1rem 0.5rem;
      text-align: center;
      //border-bottom: 1px solid gray;
    }
    .loading, .not-found {
      font-size: $normal-font-size;
      font-weight: normal;
      padding: 1rem 0.5rem;
    }
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  #page-results {
    //alinear elements del menú i títol de cada pestanya a l'esquerra
    .nav-tabs {
      .nav-link {
        text-align: left;
        flex-grow: 0;
      }
    }

    .tab-pane {
      .tab-title {
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
  #page-results {
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
  #page-results {
    max-width: 85%;
  }
}
</style>