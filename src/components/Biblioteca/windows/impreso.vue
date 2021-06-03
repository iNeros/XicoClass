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
      links:["http://xicolass.herokuapp.com/uploads/1/Sello.png","http://xicolass.herokuapp.com/uploads/1/Imagen%201.png","http://xicolass.herokuapp.com/uploads/1/prueba.m","http://xicolass.herokuapp.com/uploads/1/PROTOCOLO%20RESIDENCIAS%20PROFECIONALES%20-%20167O00742.pdf","http://xicolass.herokuapp.com/uploads/1/work2.pdf","http://xicolass.herokuapp.com/uploads/1/work1.pdf","http://xicolass.herokuapp.com/uploads/1/CV%20-%20Michel%20Chabl%C3%A9%20C.pdf","http://xicolass.herokuapp.com/uploads/1/F-DC-27%20Reporte-Mensual-Abril%20Raul%20Alfonso%20Tenorio%20De%20La%20O-167O01568.pdf"],
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
