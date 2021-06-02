<template>
  <div class="misDocumentos">
    <v-container >
      <v-row>
      <template v-for="item in items">
        <v-col :key="item.items"
          cols="6"
          class=""
          >
          <h1>{{item}} </h1>
          <v-divider class=""></v-divider>
        </v-col>
      </template>
      <v-col cols="6">
        <h1>donde esta este text fukk tesxt asjhd fhbfbe hgrebfbr</h1>
      </v-col>
      </v-row>
      
    </v-container>
  </div>
</template>

<script>
export default {
  name: "misDocumentos",
  data: () => ({
    actaNacimiento:'',
    curpAlumno:'',
  }),
};
</script>

<style scoped></style>
