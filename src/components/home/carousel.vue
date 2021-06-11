<template>
  <v-container fluid class="slider-container">
    <v-row>
      <v-carousel height="auto" hide-delimiter-background show-arrows-on-hover >
        <template v-slot:prev="{ on, attrs }">
          <v-btn color="#B2FF59" v-bind="attrs" v-on="on">←</v-btn>
        </template>
        <template v-slot:next="{ on, attrs }">
          <v-btn color="#7E57C2" v-bind="attrs" v-on="on">→</v-btn>
        </template>
        <v-carousel-item   
          eager  
          v-for="(item, i) in items"
          :key="i"        
          :src="item.src"
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
export default {
  name: "Carousel",

  data() {
    return {
      items: [
        {
          src: require("@/assets/media/carusel/carusel1.png"),
        },
        {
          src: require("@/assets/media/carusel/carusel2.png"),
        },
        {
          src: require("@/assets/media/carusel/carusel3.png"),
        },
      ],
    };
  },  
};
</script>

<style scoped>
</style>
