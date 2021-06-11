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
                    <v-col cols="12" xl="12" lg="12" md="12" xs="12" class="">
                      <p class="mt-1 text-left mx-6 " >
                        {{ item.materia }}
                      </p>
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
        materia: "Lenguaje y Comunicación",
        nombreDocente: "Laura Luz Tlaxcalteco",
        horario: "Horario",
        descripcion: "Adquirir y desarrollar los conocimientos, actitudes y valores que permitan a los estudiantes seguir aprendiendo a lo largo de su vida y afrontar los retos que implica una sociedad diversa y en continuo cambio. ",
      },
      {
        materia: "Pensamiento Matemático",
        nombreDocente: "Laura Luz Tlaxcalteco",
        horario: "Horario",
        descripcion: "Busca que los estudiantes desarrollen esa forma de razonar tanto lógica como no convencional y que al hacerlo aprecien el valor de ese pensamiento, lo que ha de traducirse en actitudes y valores favorables hacia las matemáticas, su utilidad y su valor científico y cultural.",
      },
      {
        materia: "Exploración y Comprensión del mundo",
        nombreDocente: "Laura Luz Tlaxcalteco",
        horario: "Horario",
        descripcion: "Ofrece un conjunto de aproximaciones a ciertos fenómenos y procesos naturales y sociales cuidadosamente seleccionados.",
      },
      {
        materia: "Arte",
        nombreDocente: "Laura Luz Tlaxcalteco",
        horario: "Horario",
        descripcion: "Concepto amplio, abierto e incluyente de las artes que permite reconocer la diversidad cultural y artística de México y del mundo, y que engloba tanto las llamadas bellas artes como las distintas artes populares, indígenas, clásicas, emergentes, tradicionales y contemporáneas.",
      },
      {
        materia: "Educación Socioemocional",
        nombreDocente: "Laura Luz Tlaxcalteco",
        horario: "Horario",
        descripcion: "Aporta a la formación de los estudiantes conocimientos, habilidades, valores y actitudes enfocados en el desarrollo personal, sin perder de vista que estos aprendizajes adquieren valor en contextos sociales y de convivencia.",
      },
      {
        materia: "Educación Física",
        nombreDocente: "Laura Luz Tlaxcalteco",
        horario: "Horario",
        descripcion: "Motiva la realización de diversas acciones motrices, en un proceso dinámico y reflexivo, a partir de estrategias didácticas que se derivan del juego motor, como la expresión corporal, la iniciación deportiva y el deporte educativo, entre otras. ",
      },
    ],
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.titulo {
  font-family: "Poppins";
  font: weight 500px;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.01px;
  color: black;
  text-align: center;
}
.subtitulo {
  font-family: "Poppins";
  font-weight: 400px;
  font-size: 18px;
  color: white;
}
.subtitulo-2 {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 15px;
  color: white;
}
.cuerpo {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 15px;
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
