<template>
  <v-container fluid>
    <v-row class="fill-height mx-6" justify="space-around">
      <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12">
        <div>
          <v-img
            class="img-seccion"
            src="@/assets/media/biblioteca/img-videos.png">
          </v-img>
        </div>
        <div class="titulo-seccion">
          <span class="box-title"> VIDEOS </span>
        </div>
        <v-list width="100%" outlined rounded elevation="12">
          <v-list-group class="menu-text">
            <template v-slot:activator>
              <v-list-item-title>CUENTOS</v-list-item-title>
            </template>
            <div
            v-for="n in datos"
            :key="n"
            >
            <v-list-item
              class="menu-text"
              v-if="n.tipo == 1"
              @click="selectLink(n.url)"
            >
            {{n.titulo}}
            </v-list-item>
            </div>
          </v-list-group>

           <v-list-group class="menu-text">
            <template v-slot:activator>
              <v-list-item-title>CLASES</v-list-item-title>
            </template>
            <div
            v-for="n in datos"
            :key="n"
            >
            <v-list-item
              class="menu-text"
              v-if="n.tipo == 2"
              @click="selectLink(n.url)"
            >
            {{n.titulo}}
            </v-list-item>
            </div>
          </v-list-group>

           <v-list-group class="menu-text">
            <template v-slot:activator>
              <v-list-item-title>REFORZAMIENTO</v-list-item-title>
            </template>
            <div
            v-for="n in datos"
            :key="n"
            >
            <v-list-item
              class="menu-text"
              v-if="n.tipo == 3"
              @click="selectLink(n.url)"
            >
            {{n.titulo}}
            </v-list-item>
            </div>
          </v-list-group>
        </v-list>
      </v-col>

      <v-col cols="12" xl="9" lg="9" md="9" sm="12" xs="12">
        <div class="hidden-sm-and-down">
          <iframe
            margin-top="10px"
            width="100%"
            height="670px"
            :src="link"
            allow="accelerometer; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="hidden-md-and-up">
          <iframe
            margin-top="10px"
            width="100%"
            height="480px"
            :src="link"
            allow="accelerometer; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "visual",
  data() {
    return {
      link: "https://www.youtube.com/embed/X1sQg4nxEe8",
      datos: [],
    };
  },
  methods: {
    selectLink(item) {
      //agregar item entre los parentesis
      this.link = item;
      // link = axios de la consulta db
      //link =
      //@click="setLink()" in v-list-item
    },
    obtenerVisual() {
      axios
        .get("https://xicoclass.online/Visual.php?periodoAsociado=1")
        .then((r) => {
          this.datos = r.data;
          console.log(this.datos);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.obtenerVisual();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
.menu-text {
  color: rgb(40, 53, 147) !important;
  font-size: 18px !important;
  font-family: "Montserrat", sans-serif;
}
.box-title {
  font-family: Montserrat;
  font-weight: 800;
  color: white;
  font-size: 25px;
  margin-left: 60px !important;
  vertical-align: middle;
}
.titulo-seccion {
  width: 100%;
  height: 40px;
  background-color: #26a69a;
}
.img-seccion {
  height: 80px !important;
  width: 80px !important;
  margin-left: auto !important;
  margin-right: 0px !important;
  margin-bottom: -60px !important;
}
</style>
