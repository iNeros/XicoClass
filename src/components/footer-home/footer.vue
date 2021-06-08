<template>
  <div class="footerHome">
    <v-footer color="#26A69A" absolute height="150px">
      <v-row justify="center" no-gutters>
        <v-btn color="white" text rounded class="my-2" href="/Home">
          Inicio
        </v-btn>
        <v-btn color="white" text rounded class="my-2" href="/ApartadoLegal">
          Apartado Legal
        </v-btn>
        <v-btn color="white" text rounded class="my-2" href="/Equipo">
          Equipo
        </v-btn>
        <v-btn color="white" text rounded class="my-2" href="/AcercaDe">
          Acerca De
        </v-btn>
        <v-col class="py-0 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>XicoClass</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
// import  component  from '@/components/foler-name/component.vue'

export default {
  name: "footerHome",
  component: {},
  data: () => {
    return {
      links: ["Inicio", "Apartado Legal", "Equipo", "Acerca De"],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,300&display=swap");
.footerHome {
  margin-top: 150px;
}

.text-redes {
  width: 250px;
}
.subtitle-text {
  font-family: "Poppins";
  color: white !important;
}
</style>
