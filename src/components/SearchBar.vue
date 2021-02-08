<template>
  <div id="search">
    <button
      id="search-button"
      @click.prevent="searchButton"
      form="search-form"
      type="submit"
      aria-label="Search"
    >
      <fa-icon icon="search" class="big-icon" />
    </button>
    <form id="search-form" v-show="input">
      <input
        id="search-input"
        ref="searchInput"
        type="text"
        placeholder="Search"
        aria-label="Type your search"
        v-model="query"
        @click="setFocus"
        @blur="removeFocus"
      />
    </form>
  </div>
</template>


<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
      logo: "",
      input: "",
      inputFocus: false,
      width: window.innerWidth,
    };
  },
  computed: {
    screen() {
      if (this.width >= 768) {
        return "big";
      } else {
        return "small";
      }
    },
  },
  watch: {
    screen() {
      this.updateView();
    },
    inputFocus() {
      this.updateView();
    },
    logo() {
      this.$emit("setLogo", this.logo);
    },
  },
  methods: {
    searchButton() {
      if (this.screen === "big") {
        this.submitSearch();
      } else if (this.input === false) {
        this.input = true;
        this.logo = false;
        this.focusInput();
      } else {
        this.submitSearch();
      }
    },
    submitSearch() {
      if (!(this.query === "")) {
        this.$refs.searchInput.blur();
        this.$router.push({ name: 'search', params: { query: this.query }}).catch(() => {});
        this.query = "";
      } 
    },
    updateView() {
      if (this.screen === "big") {
        this.logo = true;
        this.input = true;
      } else if (this.inputFocus === true) {
        this.logo = false;
        this.input = true; // ja ha de ser true si hi ha el focus
      } else {
        this.logo = true;
        this.input = false;
      }
    },
    focusInput() {
      setTimeout(() => {
        this.$refs.searchInput.focus();
      }, 0);
      this.inputFocus = true;
    },
    setFocus() {
      this.inputFocus = true;
    },
    removeFocus() {
      if (
        this.screen === "small" &&
        event.relatedTarget &&
        event.relatedTarget.id === "search-button"
      ) {
        this.submitSearch();
        this.inputFocus = false;
      } else {
        this.inputFocus = false;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
    });
    if (this.width >= 768) {
      this.input = true;
    } else {
      this.input = false;
    }
  },
};
</script>


<style lang="scss">
#search {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 0 0 1.25rem;

  #search-form {
    margin-left: 0.5rem;
    flex-grow: 1;
  }

  #search-button {
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
  }

  #search-button:hover {
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
  }

  #search-button:active {
    outline: none;
  }

  #search-input {
    width: 100%;
    border: none;
    border-radius: 5px;
    padding-top: 0.3rem;
    padding-left: 0.5rem;
    background-color: rgb(236, 236, 236);
  }

  #search-input:focus {
    background-color: $uocify-color-transparent;
  }
}
</style>