<template>
  <v-container fluid>
      <v-layout justify-space-between>
        <v-flex xs2>
          <v-list dense>
            <v-subheader>JUEGOS</v-subheader>
            <v-list-item-group
              v-model="selectedItem"
              color="#30dba0"
              mandatory
            >
              <v-divider></v-divider>
              <v-list-item 
                class = "menu-tex" 
                v-for="n in datos" 
                :key="n" 
                v-text="n"
              ></v-list-item>
            </v-list-item-group>
          </v-list>
        </v-flex>
        <v-flex xs10>
          <h4>flex xs10</h4>
        </v-flex> 
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: "didactico",
  data() {
    return {
      datos:["Juego 1","Juego 2","Juego 3","Juego 4","Juego 5",6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
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
.videoClass{
  max-width: 1200px!important;
  max-height: 680px!important;
  min-width: 400px!important;
  min-height: 400px!important;
}
</style>
