<template>
  <div class="misTramites">
    <v-row justify="space-around" class="rowSettings">
        <v-btn  class="button-img" >
          <v-img
          class="img-setings"
          src="@/assets/media/tramites-botones/btn-preInscripcion.png"
          @click="setTramiteSelected(1)"
          >
          </v-img>
        </v-btn> 
        <v-btn  class="button-img" >
          <v-img
          class="img-setings"
          src="https://picsum.photos/id/12/600/300"
          >
          </v-img>
        </v-btn> 
        <v-btn  class="button-img" >
          <v-img
          class="img-setings"
          src="https://picsum.photos/id/13/700/300"
          >
          </v-img>
        </v-btn> 
        <v-btn  class="button-img" >
          <v-img
          class="img-setings"
          src="https://picsum.photos/id/14/600/300"
          >
          </v-img>
        </v-btn> 
        <v-btn  class="button-img" >
          <v-img
          class="img-setings"
          src="https://picsum.photos/id/15/600/300"
          >
          </v-img>
        </v-btn> 
        <v-btn  class="button-img" >
          <v-img
          class="img-setings"
          src="https://picsum.photos/id/16/600/300"
          >
          </v-img>
        </v-btn> 
    </v-row>
  </div>
</template>

<script>
export default {
  name: "misTramites",

  data(){
    return{
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>

.misTramites{
    width: 100%;
    margin-bottom: 20px;
  }
.btnImg{
  height: auto;
  background-color: aqua;
  margin: 20px;
  height: 100px;
  width: 280px
  
}
@media (min-width: 800px){
  .misTramites{
    margin-left: auto;
    margin-right: auto;
    width: 60%;
  }
}
.rowSettings{
  margin-top: 50px;
}
.button-img{
  margin-top: 10px;
  margin-bottom: 10px;
  width: 300px!important;
  height: 120px!important;
}
.img-setings{
  width: 300px!important;
  height: 120px!important;
}

</style>
