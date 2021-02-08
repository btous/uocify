<template>
  <div id="app">
    <AppHeader :user="currentUser" :userLogged="userLogged"/>
    <router-view @loginUser="loginUser" />
    <!--<SearchResults />-->
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader'

  export default {
    name: 'App',
    components: {
      AppHeader
    },
    data() {
      return {
        currentUser: '',
        userLogged: false
      }
    },
    methods: {
      loginUser(user, logged) {
        this.currentUser = user;
        this.userLogged = logged;
      }
    }
  }
</script>