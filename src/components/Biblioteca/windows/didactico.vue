<template>
  <v-container fluid>
    <v-row class="fill-height mx-6" justify="space-around" >
      <v-col cols="12" xl="3" lg="3" md="3" sm="12" xs="12">
        <div>
          <v-img
            class="img-seccion"
            src="@/assets/media/biblioteca/img-juegos.png">
          </v-img>
        </div>
        <div class="titulo-seccion">
          <span class="box-title"> JUEGOS </span>
        </div>
        <v-list width="100%" outlined rounded elevation="12">
          <v-list-item-group>
            <v-list-item
              class="menu-text"
              v-for="n in datos"
              :key="n"
              v-text="n.titulo"
              @click="selectLink(n.url)"
            ></v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col cols="12" xl="9" lg="9" md="9" sm="12" xs="12">
        <iframe
          :src="holder"
          width="100%"
          height="670px"
          allow="accelerometer; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "didactico",
  data() {
    return {
      holder: require("@/assets/media/holders/holderDidactico.png"),
      link: ["https://i.ytimg.com/vi/xJ200hf9w90/maxresdefault.jpg"],
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
    obtenerDidactico() {
      axios
        .get("https://xicoclass.online/Didactico.php?periodoAsociado=1")
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
    this.obtenerDidactico();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.menu-text {
  color:#e65100 !important;
  font-size: 18px !important;
  font-family: "Poppins", sans-serif;
}

.v-list {
  height: 60vh; /* or any height you want */
  width: 300px;
  overflow-y: auto;
  margin-left: 0px;
}
.videoClass {
  max-width: 1200px !important;
  max-height: 680px !important;
  min-width: 400px !important;
  min-height: 400px !important;
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
  background-color: #FFCA28;
}
.img-seccion {
  height: 80px !important;
  width: 80px !important;
  margin-left: auto !important;
  margin-right: -10px !important;
  margin-bottom: -60px !important;
}
</style>
