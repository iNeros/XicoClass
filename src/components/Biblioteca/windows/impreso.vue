<template>
  <div>
    <v-btn
      v-for="n in links"
      :key= "n"
      class="ma-2" 
      outlined 
      @click="descargarArchivo(n)"
      color="blue lighten-2"
    >
      Archivo
      <v-icon 
        dark
        right
      >
        mdi-cloud-upload
      </v-icon>
    
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "impreso",
  data() {
    return {
      links:[],
    };
  },
  methods:{
    descargarArchivo(id) {
      window.open("" + id, "_blank");
    },
  },
};
</script>

<style scoped></style>
