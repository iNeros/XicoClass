<template>
  <v-container fluid>
    <v-row class="fill-height mx-6" justify="space-around">
      <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12">
        <div>
          <v-img
            class="img-seccion"
            src="@/assets/media/biblioteca/img-videos.png"
          >
          </v-img>
        </div>
        <div class="titulo-seccion">
          <span class="box-title"> VIDEOS </span>
        </div>
        <!-- VISTA DE LAS TABS EN WIDEVIEW --->
        <div class="hidden-sm-and-down">
          <v-list width="100%" outlined rounded elevation="12">
            <v-list-group class="menu-text">
              <template v-slot:activator>
                <v-list-item-title>CUENTOS</v-list-item-title>
              </template>
              <div v-for="n in datos" :key="n">
                <v-list-item
                  class="menu-text"
                  v-if="n.tipo == 1"
                  @click="selectLink(n.url)"
                >
                  {{ n.titulo }}
                </v-list-item>
              </div>
            </v-list-group>

            <v-list-group class="menu-text">
              <template v-slot:activator>
                <v-list-item-title>CLASES</v-list-item-title>
              </template>
              <div v-for="n in datos" :key="n">
                <v-list-item
                  class="menu-text"
                  v-if="n.tipo == 2"
                  @click="selectLink(n.url)"
                >
                  {{ n.titulo }}
                </v-list-item>
              </div>
            </v-list-group>

            <v-list-group class="menu-text">
              <template v-slot:activator>
                <v-list-item-title>REFORZAMIENTO</v-list-item-title>
              </template>
              <div v-for="n in datos" :key="n">
                <v-list-item
                  class="menu-text"
                  v-if="n.tipo == 3"
                  @click="selectLink(n.url)"
                >
                  {{ n.titulo }}
                </v-list-item>
              </div>
            </v-list-group>
          </v-list>
        </div>
        <!-- VISTA DE LAS TABS EN DISPOSITIVOS MOVILES --->
        <div class="hidden-md-and-up">
          <v-list width="100%" height="250px" outlined rounded elevation="12">
            <v-list-group class="menu-text">
              <template v-slot:activator>
                <v-list-item-title>CUENTOS</v-list-item-title>
              </template>
              <div v-for="n in datos" :key="n">
                <v-list-item
                  class="menu-text"
                  v-if="n.tipo == 1"
                  @click="selectLink(n.url)"
                >
                  {{ n.titulo }}
                </v-list-item>
              </div>
            </v-list-group>

            <v-list-group class="menu-text">
              <template v-slot:activator>
                <v-list-item-title>CLASES</v-list-item-title>
              </template>
              <div v-for="n in datos" :key="n">
                <v-list-item
                  class="menu-text"
                  v-if="n.tipo == 2"
                  @click="selectLink(n.url)"
                >
                  {{ n.titulo }}
                </v-list-item>
              </div>
            </v-list-group>

            <v-list-group class="menu-text">
              <template v-slot:activator>
                <v-list-item-title>REFORZAMIENTO</v-list-item-title>
              </template>
              <div v-for="n in datos" :key="n">
                <v-list-item
                  class="menu-text"
                  v-if="n.tipo == 3"
                  @click="selectLink(n.url)"
                >
                  {{ n.titulo }}
                </v-list-item>
              </div>
            </v-list-group>
          </v-list>
        </div>
      </v-col>

      <v-col cols="12" xl="9" lg="9" md="9" sm="12" xs="12">
        <!-- VISTA DE LAS TABS EN WIDEVIEW --->
        <div class="hidden-sm-and-down">
          <iframe
            width="100%"
            height="675px"
            :src="link"
            allow="accelerometer; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <!-- VISTA DE LAS TABS EN DISPOSITIVOS MOVILES --->
        <div class="hidden-md-and-up">
          <iframe
            margin-top="10px"
            width="100%"
            height="300px"
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
      link: "https://firebasestorage.googleapis.com/v0/b/xicoclassproject-579bb.appspot.com/o/ImagenEleccion%2FholderVideo.png?alt=media&token=659d282f-4074-48ec-985b-506c65425f23",
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
        .get("https://xicoclass.online/Visual.php")
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.menu-text {
  color: #64dd17 !important;
  font-size: 18px !important;
  font-family: "Poppins", sans-serif;
}
.box-title {
  font-family: "Poppins";
  font-weight: 800;
  color: white;
  font-size: 25px;
  margin-left: 60px !important;
  vertical-align: middle;
}
.titulo-seccion {
  width: 100%;
  height: 40px;
  background-color: #b2ff59;
}
.img-seccion {
  height: 80px !important;
  width: 80px !important;
  margin-left: auto !important;
  margin-right: 0px !important;
  margin-bottom: -60px !important;
}
</style>
