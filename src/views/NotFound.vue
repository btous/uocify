<template>
  <main class="page-not-found">
    <div class="container container-thin">
      <img class="logo" src="@/assets/logos/icon-sad.svg" alt="logo" />
      <h1 class="main-title">Página no encontrada</h1>
      <p>
        No hemos encontrado la página que estás buscando. Es posible que haya sido eliminada o que la dirección de acceso sea incorrecta.
      </p>
      <p>HTTP ERROR 404</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "NotFound",
};
</script>


<style lang="scss">
.page-not-found {
  margin-top: 200px;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;

  .logo {
    width: 200px;
    margin: 25px auto;
  }

  .container-thin {
    max-width: 600px;
  }
}
</style>