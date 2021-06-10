<template>
  <v-container fluid>
    <v-layout justify-space-between>
      <v-flex xs2>
        <v-list dense>
          <v-subheader>JUEGOS</v-subheader>
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
        <iframe
          class="xicostore"
          src="https://firebasestorage.googleapis.com/v0/b/xicoclassproject-579bb.appspot.com/o/Didactico%2F1%2Findex.html?alt=media&token=9f794bad-e8cf-4289-a387-5ce8d5c9063f"
          width="90%"
          height="800px"
        ></iframe>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "didactico",
  data() {
    return {
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
