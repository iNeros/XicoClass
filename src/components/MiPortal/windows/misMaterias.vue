<template>
  <div class="misMaterias">
    <!-- Diseño de xd 
    <div class="title-container">
      <span class="title-text"> PERIODO 2021: MES - MES </span>
    </div>
    <v-card elevation="24" class="container" 
             El Contenido.. :V  
    </v-card> -->
    <v-container fluid class="text-center">
      <v-row
      class="fill-height"
      align="center"
      justify="center"
      >
      </v-row>
      <template v-for="(item, i) in items">
        <v-col
        :key="i"
        cols="12"
        md="4"
        >
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover }"
          shaped
          class="mx-auto card-container"
          height="300"
          width="400"
          >
          <v-card-title class="display-1 titulo-tarjeta">
            Materias
          </v-card-title>
          <v-card-text>
          
          </v-card-text>
          <v-card-actions>
            <v-btn> Boton </v-btn>
          </v-card-actions>
          </v-card>
        </v-hover>
        </v-col>
      </template> 
    </v-container>
  </div>
</template>

<script>
export default {
  name: "misMaterias",
  data: () => ({
    items: [
      {
        tittle:'',
        text:'',
        subtext:''
        
      },
      {
        tittle:'',
        text:'',
        subtext:''
      },
      {
        tittle:'',
        text:'',
        subtext:''
      },
    ],
  }),
}
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
}
.boton-entregar {
  float: right;
  margin-right: 20px;
}
.acciones {
  padding-left: 20px;
  margin-bottom: 10px;
}
.titulo-tarjeta {
  font-family: "Montserrat";
  font-weight: 800;
}
.status-text {
  text-align: right;
}
.status-label {
  font-family: "Montserrat";
  font-weight: 800;
  color: blue;
  margin-left: 10px;
}
.texto-descriptivo {
  font-family: "Montserrat";
  text-align: justify;
}
.texto-material {
  font-family: "Montserrat";
  font-weight: 800;
  color: #da37a4;
}
.texto-trabajo {
  font-family: "Montserrat";
  font-weight: 800;
  color: #30dba0;
}
</style>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
