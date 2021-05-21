<template>
  <div class="misMaterias">
    <!-- Diseño de xd 
    <div class="title-container">
      <span class="title-text"> PERIODO 2021: MES - MES </span>
    </div>
    <v-card elevation="24" class="container" 
             El Contenido.. :V  
    </v-card> -->
    <v-container fluid>
      <div class="" v-for="(item, i) in items" :key="i"> 
        <v-row cols="12" lg="3" class="mt-5">
        <!-- <v-col cols="3">  -->
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              shaped
              class="mx-auto"
              height="300"
              width="400"
            >
              <v-card-title class="display-1 titulo-tarjeta">
                Materia
              </v-card-title>
              <v-card-text>
                <div class="my-3 subtitle-1">Nombre del profesor/a</div>
                <v-divider class="mx-2"></v-divider>
                <div class="mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus asperiores ab cumque harum maxime labore.
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn> Boton </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
          <!-- </v-col> -->
      </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "misMaterias",
  data() {
    return {
      items: [1, 2, 3],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");

.title-container {
  width: 80%;
  height: 30px;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  background-color: #5d576b;
}
.title-text {
  font-family: "Montserrat";
  font-weight: 800;
  color: white;
  font-size: 20px;
  margin-left: 20px;
}
.container {
  width: 100%;
  min-height: 300px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}

.card-container {
  width: 80%;
  min-height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.titulo-tarjeta {
  font-family: "Montserrat";
  font-weight: 800;
}
</style>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
