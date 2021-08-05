<template>
  <v-container fluid class="slider-container">
    <v-row>
      <v-carousel height="auto" hide-delimiter-background show-arrows-on-hover>
        <template v-slot:prev="{ on, attrs }">
          <v-btn color="#B2FF59" v-bind="attrs" v-on="on">←</v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn color="#7E57C2" v-bind="attrs" v-on="on">→</v-btn>
        </template>
        <v-carousel-item
          eager
          v-for="(item, i) in imagenesC"
          :key="i"
          :src="item.url_img"
          reverse-transition="fade-transition"
          transition="fade-transition"
          @click="window.location.href = '#'"
        >
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
import  { fr }  from "../../main.js";
export default {
  name: "Carousel",

  mounted() {
    this.obtenerImagenes();
  },

  data() {
    return {
      imagenesC: [],
    };
  },

  methods: {
    async obtenerImagenes() {
      const imagenes = [];
      await fr
        .collection("carruselPrincipal")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((imagen) => {
            let currentID = imagen.id;
            let appObj = { ...imagen.data(), ["id"]: currentID };
            imagenes.push(appObj);
          });
          this.imagenesC = imagenes;
        });
    },
  },
};
</script>

<style scoped></style>
