<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
/* ----------------------AQUI SE IMPORTAN FUENTES GLOBALMENTE-------------------- */
/* Montserrat ExtraBold - Import */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
</style>
