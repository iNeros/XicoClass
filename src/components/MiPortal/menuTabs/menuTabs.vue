<template>
  <div class="menuTabs">
    <!-- VISTA DE LAS TABS EN WIDEVIEW --->
    <div class="hidden-sm-and-down">
      <v-tabs fixed-tabs class="menu-tabs" color="rgb(40, 53, 147)!important">
        <v-tab
          @click="
            (texto = 'MIS CAMPOS FORMATIVOS Y AREAS DE CONOCIMIENTO'),
              setMaterias()
          "
        >
          MIS CAMPOS FORMATIVOS Y AREAS DE CONOCIMIENTO
        </v-tab>
        <v-tab @click="(texto = 'TAREAS Y ACTIVIDADES'), setTareas()">
          TAREAS Y ACTIVIDADES
        </v-tab>
        <v-tab @click="(texto = 'DATOS PERSONALES'), setDocumentos()">
          DATOS PERSONALES
        </v-tab>
        <v-tab @click="(texto = 'TRAMITES'), setTramites()"> FORMATOS </v-tab>
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
                  @click="
                    (texto = 'MIS CAMPOS FORMATIVOS Y AREAS DE CONOCIMIENTO'),
                      setMaterias()
                  "
                >
                  MIS CAMPOS FORMATIVOS Y AREAS DE CONOCIMIENTO
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu"
                  color="blue"
                  dark
                  @click="(texto = 'TAREAS Y ACTIVIDADES'), setTareas()"
                >
                  TAREAS Y ACTIVIDADES
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu"
                  color="blue"
                  dark
                  @click="(texto = 'DATOS PERSONALES'), setDocumentos()"
                >
                  DATOS PERSONALES
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="button-menu"
                  color="blue"
                  dark
                  @click="(texto = 'FORMATOS'), setTramites()"
                >
                  TRAMITES
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menuTabs",
  data() {
    return {
      texto: "MIS CAMPOS FORMATIVOS Y AREAS DE CONOCIMIENTO",
    };
  },
  methods: {
    setMaterias() {
      this.$store.commit("setMisMaterias");
    },
    setTareas() {
      this.$store.commit("setMisTareas");
    },
    setDocumentos() {
      this.$store.commit("setMisDocumentos");
    },
    setTramites() {
      this.$store.commit("setMisTramites");
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
