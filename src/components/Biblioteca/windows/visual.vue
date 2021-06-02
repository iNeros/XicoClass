<template>
  <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list dense
    class = "menu-text">
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="#30dba0"
      >
        <v-list-item>Text1</v-list-item>
        <v-list-item>Text2</v-list-item>
        <v-list-item>Text3</v-list-item>
        <v-list-item>Text1</v-list-item>
        <v-list-item>Text2</v-list-item>
        <v-list-item>Text3</v-list-item>
        <v-list-item>Text1</v-list-item>
        <v-list-item>Text2</v-list-item>
        <v-list-item>Text3</v-list-item>
        <v-list-item>Text1</v-list-item>
        <v-list-item>Text2</v-list-item>
        <v-list-item>Text3</v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "visual",
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
.menu-text {
  color: #5D576B !important;
  font-size: 18px !important;
  font-family: "Montserrat", sans-serif;
}
</style>