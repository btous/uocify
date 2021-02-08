<template>
  <main class="page-login">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/logos/icon.svg" />
      <h1 class="main-title">Iniciar sesión</h1>
      <p class="auth-intro">
        Inicia sesión en uocify para disfrutar de miles de canciones.
      </p>

      <form>
        <div class="form-group">
          <label class="form-label" for="username">Email</label>
          <input
            placeholder="Correo electrónico"
            type="email"
            id="email"
            class="form-control"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Contraseña</label>
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            class="form-control"
            v-model="password"
          />
        </div>

        <div v-if="showSuccess" class="message success">
          {{ successMessage }}
        </div>
        <div v-if="showError" class="message error">{{ errorMessage }}</div>

        <button @click="login" class="btn btn-primary btn-lg">
          Iniciar sesión
        </button>
      </form>

      <p class="auth-bottom">
        ¿No tienes cuenta?
        <router-link to="/register" class="alink">Regístrate</router-link>
      </p>
    </section>
  </main>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      successMessage: "",
      showSuccess: false,
      errorMessage: "",
      showError: false,
      logged: false,
    };
  },
  methods: {
    login: function (e) {
      this.showSuccess = false;
      this.showError = false;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (resolve) => {
            console.log(
              "Sessió iniciada correctament amb el correu: " +
                resolve.user.email
            );
            this.logged = true;
            this.showSuccess = true;
            this.successMessage = "Sesión iniciada con exito";
            this.$emit("loginUser", resolve.user.email, this.logged);
            setTimeout(() => this.$router.push('/').catch(() => {}), 2000);
          },
          (reject) => {
            this.showError = true;
            this.errorMessage = reject.message;
          }
        );
      e.preventDefault();
    },
  },
};
</script>


<style lang="scss" >
.page-login {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  .logo {
    margin: 15px auto;
  }
  .main-title {
    margin-bottom: 20px;
  }
  .message {
    margin-bottom: 20px;
    font-size: 0.9rem;
  }
  .success {
    color: green;
  }
  .error {
    color: red;
  }
}
</style>