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
  methods:{
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

<style scoped></style>

