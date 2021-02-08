<template>
  <header id="header">
    <Brand :logo="logo" />
    <SearchBar @setLogo="setLogo" />
    <User
      @logoutUser="logout"
      :currentUser="currentUser"
      :isLoggedIn="isLoggedIn"
    />
  </header>
</template>


<script>
import SearchBar from "./SearchBar";
import Brand from "./Brand.vue";
import User from "./User.vue";
import firebase from "firebase";

export default {
  name: "AppHeader",
  components: {
    SearchBar,
    Brand,
    User,
  },
  props: ["user", "userLogged"],
  data() {
    return {
      logo: true,
      isLoggedIn: false,
      currentUser: "",
    };
  },
  methods: {
    setLogo(logo) {
      this.logo = logo;
    },
    logout(e) {
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            console.log("Sessió finalitzada");
            this.isLoggedIn = false;
            this.currentUser = "";
            this.$router.push('/').catch(() => {});
          },
          (reject) => {
            console.log(reject.message);
          }
        );
      e.preventDefault();
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.currentUser = user.email;
      } else {
        this.isLoggedIn = false;
        this.currentUser = "";
      }
    });
  },
};
</script>


<style lang="scss">
//definir la capçalera
#header {
  position: fixed;
  top: 0;
  height: 4.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0em 1.5rem;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(13, 10, 44, 0.04);
}
</style>