<template>
    <div>
    <v-list dense>
      <v-subheader>VIDEOS</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="#30dba0"
      >
        <v-divider></v-divider>
        <v-list-item class = "menu-tex" v-for="n in numeros" :key="n" v-text="n"></v-list-item>
        <!--
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
        -->
      </v-list-item-group>

    

    </v-list>
    </div>
    
</template>


<script>
export default {
  name: "visual",
  data() {
    return {
      numeros:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    };
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
.v-list{
  height:60vh;/* or any height you want */
  width:300px;
  overflow-y:auto;
  margin-left: 0px;
}
</style>