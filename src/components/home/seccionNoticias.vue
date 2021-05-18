<template>

<div>
  <h1>Hola</h1>
</div>
<!--
  <v-container fluid>
    <v-row class="">
      <v-col cols="8" class="">
        <h1>hola</h1>
        
      </v-col>
      <v-col cols="4" class="">

      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
export default {
  name: "seccionNoticias",
  data() {
    return {
      losDatos: [],
    };
  },
  methods: {
    Obtener() {
      let vue = this;
      fetch("https://xicolass.herokuapp.com/FirstAPI.php?var=othon")
        .then((datos) => datos.json())

        .then((datos) => {
          vue.losDatos = datos[0][8];
          console.log(vue.losDatos); //esto solo muestra
        });
    },
  },

  mounted() {
    this.Obtener();
  },
};
</script>

<style scoped>
.seccionNoticias {
  display: block;
  margin-top: 100px;
}
.dobleColumna {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>
