<template>
  <div class="home">
    <navbar></navbar>
    <carouselHome> </carouselHome>
    
    <div class="center-info"> 
        <v-row align-content="space-around">
          <v-col cols="12" sm="6" class="mx-0 px-0">
            <v-card>
              <v-img 
              src="@/assets/media/holders/800x600.png"
              max-height="600px"
              max-width="100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" class="mx-0 px-0">
            <v-card>
              <v-img 
              src="@/assets/media/holders/800x600.png"
              max-height="600px"
              max-width="100%"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
    </div>
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
  display: block;
}
.spacer{
  display: block;
  height: 20px;
}

</style>
