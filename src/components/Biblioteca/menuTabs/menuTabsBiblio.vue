<template>
  <div class="menuTabs">
    <!-- VISTA DE LAS TABS EN WIDEVIEW --->
    <div class="hidden-sm-and-down">
      <v-tabs grow class="menu-tabs" color="rgb(40, 53, 147)!important">
        <v-tab @click="(texto = 'Material Impreso'), setImpreso()">
          MATERIAL IMPRESO
        </v-tab>
        <v-tab @click="(texto = 'Material Visual'), setVisual()">
          MATERIAL VISUAL
        </v-tab>
        <v-tab @click="(texto = 'Material Didactico'), setDidactico()">
          MATERIAL DIDÁCTICO
        </v-tab>
        <v-tab @click="(texto = 'Xico Store'), setStore()"> XICO STORE </v-tab>
      </v-tabs>
    </div>
    <!-- VISTA DE LAS TABS EN DISPOSITIVOS MOVILES --->
    <div class="hidden-md-and-up">
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              elevation="24"
              class="button-menu"
              color="blue"
              dark
              v-bind="attrs"
              v-on="on"
            >
              {{ texto }}
            </v-btn>
          </template>
          <v-list class="button-container">
            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu ma-0"
                  color="blue"
                  dark
                  @click="(texto = 'Material Impreso'), setImpreso()"
                >
                  Material Impreso
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu"
                  color="blue"
                  dark
                  @click="(texto = 'Material Visual'), setVisual()"
                >
                  Material Visual
                </v-btn>
              </v-list-item-title>
            </v-list-item>
            <!--
            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu"
                  color="blue"
                  dark
                  @click="(texto = 'Material Didactico'), setDidactico()"
                >
                  Material Didactico
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu"
                  color="blue"
                  dark
                  @click="(texto = 'Xico Store'), setStore()"
                >
                  Xico Store
                </v-btn>
              </v-list-item-title>
            </v-list-item>
            -->
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuTabsBiblio",
  data() {
    return {
      texto: "Material Impreso",
    };
  },
  methods: {
    setImpreso() {
      this.$store.commit("setImpresoTab");
    },
    setVisual() {
      this.$store.commit("setVisualTab");
    },
    setDidactico() {
      this.$store.commit("setDidacticoTab");
    },
    setStore() {
      this.$store.commit("setStoreTab");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.menu-tabs {
  max-width: 100% !important;
  min-width: 800px !important;
  margin-left: auto;
  margin-right: auto;
  font-weight: 900;
}
.button-menu {
  font-family: "Poppins";
  width: 100% !important;
  height: 40px;
  font-weight: 900;
}
.button-container {
  width: 100% !important;
}
</style>
