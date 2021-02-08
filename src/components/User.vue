<template>
  <div id="user" :style="{ 'flex-direction': direction, 'align-items': align }">
    <template v-if="!isLoggedIn">
      <router-link id="user-login" to="/login" class="alink"
        >Iniciar sesión</router-link
      >
      <router-link id="user-register" to="/register" class="alink"
        >Registrarse</router-link
      >
    </template>
    <template v-else>
      <p id="user-name">{{ currentUser }}</p>
      <fa-icon icon="user" class="big-icon" />
      <fa-icon icon="sign-out-alt" class="big-icon logoutBtn" @click="logout" />
    </template>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["currentUser", "isLoggedIn"],
  computed: {
    direction() {
      if (this.isLoggedIn) {
        return "row";
      } else {
        return "";
      }
    },
    align() {
      if (this.isLoggedIn) {
        return "center";
      } else {
        return "";
      }
    },
  },
  methods: {
    logout(e) {
      this.$emit("logoutUser", e);
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss">
#user {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100%;

  #user-name {
    display: none;
    margin-bottom: 0px;
    font-weight: 600;
  }

  #user-login,
  #user-register {
    margin-bottom: 0px;
    font-weight: 600;
    color: inherit;
  }

  .logoutBtn {
    cursor: pointer;
  }

  * {
    margin-left: 0.7rem;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  //mostrar elements user en fila
  //mostrar nom usuari

  #user {
    display: flex;
    flex-direction: row;
    align-items: center;

    #user-name {
      display: block;
    }
  }
}
</style>