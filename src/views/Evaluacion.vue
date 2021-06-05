<template>
  <div class="Evaluacion">
    <navbar></navbar>
    <v-container>
      <v-row class="mt-2">
        <v-col 
          cols="12" xl="4" lg="4" md="4" sm="12" xs="12"
        >
          <v-card elevation="2" color="#7e57c2">
            <v-card-title class="titulo">
              disciplina <br />
              y conducta
            </v-card-title>
            <v-card-subtitle class="subtitulo-2">
              Hola soy el subtitulo
            </v-card-subtitle>
            <v-card-text class="cuerpo">
              <v-img
                class="cometa ml-12"
                src="@/assets/media/logos/Cometa2.png"
              >
              </v-img>
              Hola soy el cuerpo
            </v-card-text>
            <v-card-actions>
              <v-btn class="" block elevation="2"> Accion </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col 
          cols="12" xl="4" lg="4" md="4" sm="12" xs="12"
        >
          <v-card elevation="2" color="#283593">
            <v-card-title class="titulo">
              uniforme e <br />
              higiene personal
            </v-card-title>
            <v-card-subtitle class="subtitulo-2">
              Hola soy el subtitulo
            </v-card-subtitle>
            <v-card-text class="cuerpo">
              <v-img
                class="cometa ml-12"
                src="@/assets/media/logos/Cometa2.png"
              >
              </v-img>
              Hola soy el cuerpo
            </v-card-text>
            <v-card-actions>
              <v-btn class="" block elevation="2"> Accion </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col 
          cols="12" xl="4" lg="4" md="4" sm="12" xs="12"
        >
          <v-card elevation="2" color="#26a69a">
            <v-card-title class="titulo">
              actividad de <br />
              reforzamiento
            </v-card-title>
            <v-card-subtitle class="subtitulo-2">
              Hola soy el subtitulo
            </v-card-subtitle>
            <v-card-text class="cuerpo">
              <v-img
                class="cometa ml-12"
                src="@/assets/media/logos/Cometa2.png"
              >
              </v-img>
              Hola soy el cuerpo
            </v-card-text>
            <v-card-actions>
              <v-btn class="" block elevation="2"> Accion </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col 
          cols="12" xl="12" lg="12" md="12" xs="12"
        >
          <v-card elevation="2" color="#64dd17">
            <v-col 
              cols="12" xl="3" lg="3" md="3" xs="3"
            >
              <v-card-title class="titulo-boleta">
                <h3>asistencia</h3>
              </v-card-title>
              <v-card-title class="titulo-boleta">
                <h3>retardos</h3>
              </v-card-title>
              <v-card-title class="titulo-boleta">
                <h3>participación</h3>
              </v-card-title>
            </v-col>
            <v-col
              cols="12" xl="4" lg="4" md="4" sm="12" xs="12"
            >
              
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "../components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
export default {
  name: "Evaluacion",
  data() {
    return {};
  },
  components: {
    navbar,
    footerHome,
  },
  mounted() {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.titulo {
  font-family: "Poppins";
  font: weight 700px;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.01px;
  color: white;
  text-align: justify;
  text-transform: uppercase;
}
.titulo-boleta {
  font-family: "Poppins";
  font: weight 700px;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.01px;
  color: white;
  text-align: center;
  text-transform: uppercase;
}
.subtitulo {
  font-family: "Poppins";
  font-weight: 500px;
  font-size: 28px;
  color: white;
}
.subtitulo-2 {
  font-family: "Poppins";
  font-weight: 400px;
  font-size: 22px;
  color: white;
}
.cuerpo {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  color: white;
}
.card {
  border-radius: 55px;
}
.cometa {
  width: 199px;
  height: 216px;
  opacity: 1;
  background: transparent;
}
</style>
