<template>
  <div class="MiPerfil">
    <navbar></navbar>
    <v-container class="pa-4 text-center">
      <v-row class="my-6">
        <v-col
        cols="12"
        class="tam-card estilo-card"
        >
        <div >
          
        </div>
       
        </v-col>
      </v-row>

    </v-container>
  

  <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";

export default {
  name: "MiPerfil",
  data() {
    return {};
  },
  components: {
    navbar,
    footerHome,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");

/* Proiedades Layout */
.tam-card{
  width: 1478px;
  height: 1091px;
}

/* UI */
.estilo-card{
  background: #A85DFF 0% 0% no-repeat padding-box;
  box-shadow: 4px 6px 3px #00000029;
  border: 1px solid #707070;
  border-radius: 55px;
  opacity: 1;
}
.titulo{
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 34;
  color: white;
}
.subtitulo{
  font-family: "Montserratc";
}



</style>
