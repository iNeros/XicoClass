<template>
  <div class="misMaterias">
    <div class="title-container">
      <span class="title-text"> PERIODO 2021: MES - MES </span>
    </div>
    <v-card elevation="24" class="container">
      <!-- El Contenido.. :V -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: "misMaterias",
  data() {
    return {};
  },
};
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
  width: 80%;
  min-height: 300px;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}
</style>
