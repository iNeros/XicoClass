<template>
  <v-container fluid>
    <v-layout justify-space-between>
      <v-flex xs2>
        <v-list dense>
          <v-subheader>VIDEOS</v-subheader>
          <v-list-item-group
            v-model="selectedItem"
            color="rgb(40, 53, 147)!important"
            mandatory
          >
            <v-divider></v-divider>
            <v-list-item
              class="menu-tex"
              v-for="n in datos"
              :key="n"
              v-text="n.titulo"
              @click="selectLink(n.url)"
            ></v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>

      <v-flex xs10>
        <div class="hidden-sm-and-down mx-12">
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
      </v-flex>
    </v-layout>
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
  color: #5d576b !important;
  font-size: 18px !important;
  font-family: "Montserrat", sans-serif;
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
</style>
