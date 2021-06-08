<!--
<template
v-for="n in datos"
:key= "n">
  <div>
    <v-icon v-if="n.tipo == 1"
        right
      >
        mdi-download-circle
      </v-icon>
      <v-icon v-else
      >
        mdi-cloud-upload
      </v-icon>
    
    <v-btn
      
      
      class="ma-2" 
      outlined 
      rounded
      @click="descargarArchivo(n.ruta)"
      color="blue lighten-2"
    >
    {{n.tipo}}
      
     
    </v-btn>
  </div>
</template>
-->

<template>
  <v-container fluid>
    <v-row class="fill-height mt-6 mx-6"> 
      <template v-for="n in datos">
        <v-col :key= "n" cols="12" xl="1" lg="2" md="4" sm="6" xs="12">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card 
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              shaped              
              color="#5AA9E6"
              class="card"
              @click="descargarArchivo(n.ruta)"
            >
              <v-card-title>
                <v-row>
                  <v-col cols="12" lg="12" md="12" xs="12">
                      <v-img v-if ="n.tipo == 1" src="@/assets/media/logos/icon-pdf.png" class="imagen mx-6">
                      </v-img>
                      <v-img v-if ="n.tipo == 2" src="@/assets/media/logos/icon-doc.png" class="imagen mx-4">
                      </v-img>
                      <v-img v-if ="n.tipo == 3" :src=n.ruta class="imagen mx-4">
                      </v-img>
                      <v-img v-if ="n.tipo > 8" src="@/assets/media/logos/icon-default.png" class="imagen mx-4">
                      </v-img>
                  </v-col>
                </v-row>
              </v-card-title>
                <p class="subtitulo text-center">
                  {{ n.titulo }}
                </p>
            </v-card>
          </v-hover>
        </v-col>
      </template>
      </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "impreso",
  data() {
    return {
      links:[],
      datos:[],
    };
  },
  methods: {
    descargarArchivo(id) {
      window.open("" + id, "_blank");
    },
    obtenerImpreso() {
      axios
        .get(
          "https://xicoclassapi.azurewebsites.net/impreso.php"
        )
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
    this.obtenerImpreso();
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
.card{
  min-height: 150px;
  max-height: 150px;
}
.imagen{
  display: block;
  width: 60px;
  height: 60px;
}
.subtitulo {
  font-family: "Poppins";
  font-weight: 500px;
  font-size: 14px;
  color: white;
}
</style>

