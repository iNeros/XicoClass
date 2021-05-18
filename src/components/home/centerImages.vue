<!-- Hechos por nero 
<template>
  <div class="center-info">
    <v-row align-content="space-around" class="my-0 py-0">
      <v-col cols="12" sm="12" align-self="center" class="my-0 py-0">
        <v-card flat>
          <v-img
            class="img-borders"
            src="@/assets/media/holders/1600x500.png"
            max-height="500px"
            max-width="80%"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row align-content="space-around" class="my-0 py-0">
      <v-col cols="12" sm="12" align-self="center" class="my-0 py-0">
        <v-card flat>
          <v-img
            class="img-borders"
            src="@/assets/media/holders/1600x500.png"
            max-height="500px"
            max-width="80%"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
-->

<template>
  <v-container fluid>
    <!-- Imagenes Normales
    <v-row xs="6" lg="12" class="py-0 my-0">
        <v-img src="@/assets/media/holders/imagenCentro1.png"></v-img>
        <v-img src="@/assets/media/holders/imagenCentro2.png"></v-img>
    </v-row>
    -->

    <!-- Con Propiedad de HOVER -->
    <v-row xs="6" lg="12" class="py-0 my-0">
      <v-hover v-slot="{ hover }" open-delay="200">
        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
          <v-img src="@/assets/media/holders/imagenCentro1.png"></v-img>
        </v-card>
      </v-hover>

      <v-hover v-slot="{ hover }" open-delay="200">
        <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
          <v-img src="@/assets/media/holders/imagenCentro2.png"></v-img>
        </v-card>
      </v-hover>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "centerImages",
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>

<style scoped>
.v-card:not(.on-hover) {
  opacity: 0.95;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.center-info {
  margin-top: 10px;
  display: block;
}
.spacer {
  display: block;
  height: 20px;
}
.img-borders {
  margin-right: auto !important;
  margin-left: auto !important;
}

.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
