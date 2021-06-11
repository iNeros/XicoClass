<template>
  <div class="Evaluacion">
    <navbar></navbar>
    <v-container>
      <v-row class="mt-2">
        <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="2" color="#7e57c2" height="30em">
            <v-card-title class="titulo">
              Lenguaje y Comunicación
            </v-card-title>
            <v-card-text class="cuerpo">
              <v-img
                class="imagen-carta mx-12"
                src="@/assets/media/logos/Cometa2.png"
              >
              </v-img>
            </v-card-text>
              <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Noviembre
              </v-card-subtitle>
              Observaciones Nov
            <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Marzo
              </v-card-subtitle>
              Observaciones Marzo
              <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Junio
              </v-card-subtitle>
              Observaciones Junio
          </v-card>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="2" color="#80D8FF" height="30em">
            <v-card-title class="titulo">
              Pensamiento Matemático
            </v-card-title>
            <v-card-text class="cuerpo">
              <v-img
                contain
                class="imagen-carta mx-12"
                src="@/assets/media/logos/CastilloyBandera.png"
              >
              </v-img>
            </v-card-text>
               <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Noviembre
              </v-card-subtitle>
              Observaciones Nov
            <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Marzo
              </v-card-subtitle>
              Observaciones Marzo
              <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Junio
              </v-card-subtitle>
              Observaciones Junio
          </v-card>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="2" color="#ffee58" height="30em">
            <v-card-title class="titulo">
              Exploración y Comprensión del mundo
            </v-card-title>
            <v-card-text class="cuerpo">
              <v-img
                contain
                class="imagen-carta mx-12"
                src="@/assets/media/logos/TresGlobos.png"
              >
              </v-img>
            </v-card-text>
              <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Noviembre
              </v-card-subtitle>
              Observaciones Nov
            <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Marzo
              </v-card-subtitle>
              Observaciones Marzo
              <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Junio
              </v-card-subtitle>
              Observaciones Junio            
          </v-card>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="2" color="#ffee58" height="30em">
            <v-card-title class="titulo">
             Arte
            </v-card-title>
            <v-card-text class="cuerpo">
              <v-img
                contain
                class="imagen-carta mx-12"
                src="@/assets/media/logos/TresGlobos.png"
              ></v-img>
              </v-card-text>
               <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Noviembre
              </v-card-subtitle>
              Observaciones Nov
            <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Marzo
              </v-card-subtitle>
              Observaciones Marzo
              <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Junio
              </v-card-subtitle>
              Observaciones Junio
          </v-card>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="2" color="#ffee58" height="30em">
            <v-card-title class="titulo">
              Educación Socioemocional
            </v-card-title>
            <v-card-text class="cuerpo">
              <v-img
                contain
                class="imagen-carta mx-12"
                src="@/assets/media/logos/TresGlobos.png"
              >
              </v-img>
            </v-card-text>
              <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Noviembre
              </v-card-subtitle>
              Observaciones Nov
            <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Marzo
              </v-card-subtitle>
              Observaciones Marzo
              <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Junio
              </v-card-subtitle>
              Observaciones Junio
          </v-card>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="2" color="#ffee58" height="30em">
            <v-card-title class="titulo">
              Educación Física
            </v-card-title>
            <v-card-text class="cuerpo">
              <v-img
                contain
                class="imagen-carta mx-12"
                src="@/assets/media/logos/TresGlobos.png"
              >
             </v-img>
            </v-card-text>
              <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Noviembre
              </v-card-subtitle>
              Observaciones Nov
            <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Marzo
              </v-card-subtitle>
              Observaciones Marzo
              <v-card-subtitle class="subtitulo-2">
              Observaciones del mes de Junio
              </v-card-subtitle>
              Observaciones Junio
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
  methods: {
    Session() {
      if (window.sessionStorage.getItem("id_alumno") == null) {
        window.location.href = "/";
      }
    },
  },
  mounted() {
    this.Session();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.titulo {
  font-family: "Poppins";
  font: weight 700px;
  font-size: 29px;
  line-height: 40px;
  letter-spacing: 0.01px;
  color: white;
  text-align: justify;
}
.subtitulo-2 {
  font-family: "Poppins";
  font-weight: 500px;
  font-size: 20px;
  color: white;
}
.cuerpo {
  font-family: "Poppins";
  font-weight: 400px;
  font-size: 12px;
  color: white;
}
.imagen-carta {
  display: block;
  width: 200px;
  height: 200px;
  opacity: 1;
  background: transparent;
}
.globos {
  width: 146px;
  height: 259px;
  opacity: 1;
  background: transparent;
}
#t01 {
  background-color: #64dd17;
  color: white;
}
</style>
