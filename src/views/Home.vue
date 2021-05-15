<template>
  <div class="home">
    <navbar></navbar>
    <carouselHome> </carouselHome>
    <!--AGREGAR AQUI DISEÑO PARALAX PARA CUANDO HAGA SCROLL HACIA LAS IMAGENES 
    SE BAJE A UN AXIS ESPECIFICO EN Y ; (QUE SE VEAN LAS 2 IMAGENES POR COMPLETO)  -->
    
    <!--#region ImagenesHome -->
    <div class="center-info"> 
        <v-row align-content="space-around" class="my-0 py-0">
          <v-col cols="12" sm="12" align-self="center" class="my-0 py-0">
            <v-card
            flat
            >
              <v-img 
              class="img-borders"
              src="@/assets/media/holders/1600x500.png"
              max-height="500px"
              max-width="80%"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-row align-content="space-around" class="my-0 py-0">
          <v-col cols="12" sm="12" align-self="center" class="my-0 py-0">
            <v-card
            flat
            >
              <v-img 
              class="img-borders"
              src="@/assets/media/holders/1600x500.png"
              max-height="500px"
              max-width="80%"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
    </div>
    <!--#endregion-->
    
    <div class="spacer"></div>
  <footerHome></footerHome>
  </div>
</template>

<script>
// import  component  from '@/components/foler-name/component.vue'
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
import carouselHome from "@/components/home/carousel.vue"

export default {
  name: "Home",

  components: {
    navbar,
    footerHome,
    carouselHome
  },
  data() {
    return {};
  },
};
</script>

<style>
.center-info{
  margin-top: 10px;
  display: block;
}
.spacer{
  display: block;
  height: 20px;
}
.img-borders{
  margin-right: auto!important;
  margin-left: auto!important;
}

</style>
