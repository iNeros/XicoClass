<template>
  <div class="misMaterias">
    <!-- Diseño de xd 
    <div class="title-container">
      <span class="title-text"> PERIODO 2021: MES - MES </span>
    </div>
    <v-card elevation="24" class="container" 
             El Contenido.. :V  
    </v-card> -->
    <v-container fluid class="pa-4 text-center">
      <v-row class="fill-height">
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" xl="4" lg="4" md="6" xs="12">
            <v-hover v-slot="{ hover }" open-delay="200">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                shaped
                color="#b388ff"
              >
                <v-card-title class="titulo">
                  <v-row>
                    <v-col cols="12" xl="8" lg="8" md="8" xs="8" class="">
                      <p class="mt-1 text-left mx-6">
                        {{ item.materia }}
                      </p>
                    </v-col>
                    <v-col cols="12" lg="4" md="4" xs="4" class="">
                      <v-avatar class="ma-0 pa-0" size="90">
                        <v-img :src="item.img"></v-img>
                      </v-avatar>
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-card-text>
                  <p class="subtitulo text-left mx-6">
                    {{ item.nombreDocente }}
                  </p>
                  <p class="subtitulo-2 mx-6 my-0 text-left">
                    {{ item.horario }}
                  </p>
                  <v-divider class="mt-1 mx-6"></v-divider>
                </v-card-text>
                <p class="cuerpo" justify="center">
                  {{ item.descripcion }}
                </p>
                <v-card-actions>
                  <v-btn color="#7b1fa2" block text> Ver mas </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "misMaterias",
  data: () => ({
    items: [
      {
        materia: "#Nombre Asignatura",
        nombreDocente: "Nombre del docente",
        horario: "Horario",
        descripcion: "Lorem ipsum dolor sit amet consectetur",
        img: "https://cdn.vuetifyjs.com/images/john.jpg",
      },
      {
        materia: "#Nombre Asignatura",
        nombreDocente: "Nombre del docente",
        horario: "Horario",
        descripcion: "Lorem ipsum dolor sit amet consectetur",
        img: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
      },
      {
        materia: "#Nombre Asignatura",
        nombreDocente: "Nombre del docente",
        horario: "Horario",
        descripcion: "Lorem ipsum dolor sit amet consectetur",
        img: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      },
      {
        materia: "#Nombre Asignatura",
        nombreDocente: "Nombre del docente",
        horario: "Horario",
        descripcion: "Lorem ipsum dolor sit amet consectetur",
        img: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      },
    ],
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.titulo {
  font-family: "Poppins";
  font: weight 700px;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.01px;
  color: black;
}
.subtitulo {
  font-family: "Poppins";
  font-weight: 500px;
  font-size: 28px;
  color: white;
}
.subtitulo-2 {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 22px;
  color: white;
}
.cuerpo {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 18px;
  color: white;
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
  font-family: "Poppins";
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
  font-family: "Poppins";
  font-weight: 800;
}
.status-text {
  text-align: right;
}
.status-label {
  font-family: "Poppins";
  font-weight: 800;
  color: blue;
  margin-left: 10px;
}
.texto-descriptivo {
  font-family: "Poppins";
  text-align: justify;
}
.texto-material {
  font-family: "Poppins";
  font-weight: 800;
  color: #da37a4;
}
.texto-trabajo {
  font-family: "Poppins";
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
