<template>
  <div class="misDocumentos">
    <v-container>
      <v-row>
      <template v-for="(item,i) in items">
        <v-col :key="i"
          cols="6"
          class=""
          >
          <h1>{{item}} </h1>
        </v-col>
      </template>
      </v-row>
      
    </v-container>
  </div>
</template>

<script>
export default {
  name: "misDocumentos",
  data: () => ({
    items:[
      {
        actaNacimiento:'Acta de nacimiento',
        curpAlumno:'CURP alumno',
        curpPadre:'CURP Padre de familia o Tutor',
        docsOficiales:'Docs oficiales',
      },
    ],
  }),
};
</script>

<style scoped></style>
