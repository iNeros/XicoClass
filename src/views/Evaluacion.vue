<template>
  <div class="Evaluacion">
    <navbar></navbar>
    <v-container>
      <v-row class="mt-2 mb-6">
        <v-col cols="12" xl="4" lg="4" md="6" sm="6" xs="12">
          <v-card elevation="2" color="#E91E63" min-height="610" width="100%">
            <v-card-title class="titulo">
              Lenguaje y Comunicación
            </v-card-title>

            <v-col
              cols="12"
              xl="12"
              lg="12"
              md="12"
              sm="12"
              xs="12"
              class="ml-16"
            >
              <v-img
                contain
                class="imagen-carta mx-12"
                src="@/assets/media/biblioteca/img-notas.png"
              >
              </v-img>
            </v-col>

            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de noviembre</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalNoviembre[0].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de marzo</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalMarzo[0].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de junio</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalJunio[0].text }}
              </p>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="6" sm="6" xs="12">
          <v-card elevation="2" color="#7E57C2" min-height="610" width="100%">
            <v-card-title class="titulo"> Pensamiento Matemático </v-card-title>

            <v-col
              cols="12"
              xl="12"
              lg="12"
              md="12"
              sm="12"
              xs="12"
              class="ml-16"
            >
              <v-img
                contain
                class="imagen-carta mx-12"
                src="@/assets/media/biblioteca/img-mate.png"
              >
              </v-img>
            </v-col>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de noviembre</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalNoviembre[1].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de marzo</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalMarzo[1].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de junio</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalJunio[1].text }}
              </p>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="6" sm="6" xs="12">
          <v-card elevation="2" color="#80D8FF" min-height="610" width="100%">
            <v-card-title class="titulo">
              Exploración y Comprensión del Mundo
            </v-card-title>

            <v-row justify="center">
              <v-col
                cols="4"
                class="mx-0"                             
              >              
              <v-img
                contain
                class="imagen-carta mx-0"
                src="@/assets/media/biblioteca/img-rana.png"
              >
              </v-img>            
              </v-col>
              
              <v-col
                cols="4"
                class="mx-0"    
              >
              <v-img
                contain
                class="imagen-carta mx-0"
                src="@/assets/media/biblioteca/img-conejo.png"
              >
              </v-img>            
              </v-col>
            </v-row>

            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de noviembre</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalNoviembre[2].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de marzo</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalMarzo[2].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de junio</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalJunio[2].text }}
              </p>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="6" sm="6" xs="12">
          <v-card elevation="2" color="#64DD17" min-height="610" width="100%">
            <v-card-title class="titulo"> Arte </v-card-title>

            <v-col
              cols="12"
              xl="12"
              lg="12"
              md="12"
              sm="12"
              xs="12"
              class="ml-16"
            >
              <v-img
                contain
                class="imagen-carta mx-12"
                src="@/assets/media/biblioteca/img-grimm.png"
              >
              </v-img>
            </v-col>

            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de noviembre</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalNoviembre[3].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de marzo</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalMarzo[3].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de junio</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalJunio[3].text }}
              </p>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="6" sm="6" xs="12">
          <v-card elevation="2" color="#FFFF00" min-height="610" width="100%">
            <v-card-title class="titulo">
              Eduación Socioemocional
            </v-card-title>

            <v-col
              cols="12"
              xl="12"
              lg="12"
              md="12"
              sm="12"
              xs="12"
              class="ml-16"
            >
              <v-img
                contain
                class="imagen-carta mx-12"
                src="@/assets/media/biblioteca/img-niños.png"
              >
              </v-img>
            </v-col>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de noviembre</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalNoviembre[4].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de marzo</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalMarzo[4].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de junio</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalJunio[4].text }}
              </p>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" xl="4" lg="4" md="6" sm="6" xs="12">
          <v-card elevation="2" color="#FF9800" min-height="610" width="100%">
            <v-card-title class="titulo"> Educación Física </v-card-title>

            <v-col
              cols="12"
              xl="12"
              lg="12"
              md="12"
              sm="12"
              xs="12"
              class="ml-16"
            >
              <v-img
                contain
                class="imagen-carta mx-12"
                src="@/assets/media/biblioteca/img-juegos.png"
              >
              </v-img>
            </v-col>

            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de noviembre</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalNoviembre[5].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de marzo</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalMarzo[5].text }}
              </p>
            </div>
            <div class="mt-1">
              <p class="subtitulo-2 mx-4">Observaciones del mes de junio</p>
              <p class="cuerpo mx-6" justify="center">
                {{ evalJunio[5].text }}
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <footerHome></footerHome>
  </div>
</template>

<script>
import { fr } from "../main.js";
import navbar from "../components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
export default {
  name: "Evaluacion",
  data() {
    return {
      evalNoviembre: [
        { id_local: 0, text: "Evaluacion Aun No Reportada" },
        { id_local: 1, text: "Evaluacion Aun No Reportada" },
        { id_local: 2, text: "Evaluacion Aun No Reportada" },
        { id_local: 3, text: "Evaluacion Aun No Reportada" },
        { id_local: 4, text: "Evaluacion Aun No Reportada" },
        { id_local: 5, text: "Evaluacion Aun No Reportada" },
      ],
      evalMarzo: [
        { id_local: 0, text: "Evaluacion Aun No Reportada" },
        { id_local: 1, text: "Evaluacion Aun No Reportada" },
        { id_local: 2, text: "Evaluacion Aun No Reportada" },
        { id_local: 3, text: "Evaluacion Aun No Reportada" },
        { id_local: 4, text: "Evaluacion Aun No Reportada" },
        { id_local: 5, text: "Evaluacion Aun No Reportada" },
      ],
      evalJunio: [
        { id_local: 0, text: "Evaluacion Aun No Reportada" },
        { id_local: 1, text: "Evaluacion Aun No Reportada" },
        { id_local: 2, text: "Evaluacion Aun No Reportada" },
        { id_local: 3, text: "Evaluacion Aun No Reportada" },
        { id_local: 4, text: "Evaluacion Aun No Reportada" },
        { id_local: 5, text: "Evaluacion Aun No Reportada" },
      ],
    };
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
    async getNoviembre() {
      let calificaciones = [];
      const id_alumno = window.sessionStorage.getItem("id_alumno");
      await fr
        .collection("evaluacionesNov")
        .where("id_alumno", "==", id_alumno)
        .orderBy("id_local")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((calificacion) => {
            let currentID = calificacion.id;
            let appObj = { ...calificacion.data(), ["id"]: currentID };
            calificaciones[appObj.id_local] = appObj;
          });
          for (var i = 0; i < 6; i++) {
            if (calificaciones[i]) {
              if (calificaciones[i].text != "") {
                this.evalNoviembre[i].text = calificaciones[i].text;
              }
            }
          }
          console.log(this.evalNoviembre);
        });
    },

    async getMarzo() {
      let calificaciones = [];
      const id_alumno = window.sessionStorage.getItem("id_alumno");
      await fr
        .collection("evaluacionesMarzo")
        .where("id_alumno", "==", id_alumno)
        .orderBy("id_local")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((calificacion) => {
            let currentID = calificacion.id;
            let appObj = { ...calificacion.data(), ["id"]: currentID };
            calificaciones[appObj.id_local] = appObj;
          });
          for (var i = 0; i < 6; i++) {
            if (calificaciones[i]) {
              if (calificaciones[i].text != "") {
                this.evalMarzo[i].text = calificaciones[i].text;
              }
            }
          }
          console.log(this.evalMarzo);
        });
    },
    async getJunio() {
      let calificaciones = [];
      const id_alumno = window.sessionStorage.getItem("id_alumno");
      await fr
        .collection("evaluacionesJunio")
        .where("id_alumno", "==", id_alumno)
        .orderBy("id_local")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((calificacion) => {
            let currentID = calificacion.id;
            let appObj = { ...calificacion.data(), ["id"]: currentID };
            calificaciones[appObj.id_local] = appObj;
          });
          for (var i = 0; i < 6; i++) {
            if (calificaciones[i]) {
              if (calificaciones[i].text != "") {
                this.evalJunio[i].text = calificaciones[i].text;
              }
            }
          }
          console.log(this.evalJunio);
        });
    },
  },
  mounted() {
    this.Session();
    this.getNoviembre();
    this.getMarzo();
    this.getJunio();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.titulo {
  font-family: "Poppins";
  font: weight 700px;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.01px;
  color: #37474f;
  text-align: justify;
}
.subtitulo-2 {
  font-family: "Poppins";
  font-weight: 500px;
  font-size: 20px;
  color: black;
}
.cuerpo {
  font-family: "Poppins";
  font-weight: 400px;
  font-size: 15px;
  color: black;
}
.imagen-carta {
  display: block;
  width: 128px;
  height: 128px;
  opacity: 1;
  background: transparent;
}
</style>
