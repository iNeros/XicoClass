<template>
  <v-container fluid>
    <v-row>
     <v-carousel hide-delimiter-background show-arrows-on-hover cycle>
        <template v-slot:prev="{ on, attrs }">
          <v-btn color="#B2FF59" v-bind="attrs" v-on="on">←</v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn color="#80D8FF" v-bind="attrs" v-on="on">→</v-btn>
        </template>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {
      items: [
        {
          src: require("@/assets/media/sliders/slider1.png"),
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel {
  display: block;
}
</style>
