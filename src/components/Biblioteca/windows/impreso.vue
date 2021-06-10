<!--
<template
v-for="n in datos"
:key= "n">
  <div>
    <v-icon v-if="n.tipo == 1"
        right
      >
        mdi-download-circle
      </v-icon>
      <v-icon v-else
      >
        mdi-cloud-upload
      </v-icon>
    
    <v-btn
      
      
      class="ma-2" 
      outlined 
      rounded
      @click="descargarArchivo(n.ruta)"
      color="blue lighten-2"
    >
    {{n.tipo}}
      
     
    </v-btn>
  </div>
</template>


<template>
  <v-container fluid>
    <v-row class="fill-height mt-6 mx-6"> 
      <template v-for="n in datos">
        <v-col :key= "n" cols="12" xl="1" lg="2" md="4" sm="6" xs="12">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card 
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              shaped              
              color="#5AA9E6"
              class="card"
              @click="descargarArchivo(n.ruta)"
            >
              <v-card-title>
                <v-row>
                  <v-col cols="12" lg="12" md="12" xs="12">
                      <v-img v-if ="n.tipo == 1" src="@/assets/media/logos/icon-pdf.png" class="imagen mx-6">
                      </v-img>
                      <v-img v-if ="n.tipo == 2" src="@/assets/media/logos/icon-doc.png" class="imagen mx-4">
                      </v-img>
                      <v-img v-if ="n.tipo == 3" :src=n.ruta class="imagen mx-4">
                      </v-img>
                      <v-img v-if ="n.tipo > 8" src="@/assets/media/logos/icon-default.png" class="imagen mx-4">
                      </v-img>
                  </v-col>
                </v-row>
              </v-card-title>
                <p class="subtitulo text-center">
                  {{ n.titulo }}
                </p>
            </v-card>
          </v-hover>
        </v-col>
      </template>
      </v-row>
  </v-container>
</template>

-->
<template>
  <v-container>
    <v-row class="fill-height mt-6 mx-6" justify="center">
      <v-col cols="12" xl="3" lg="4" md="5" sm="7" xs="12"> 
        <v-list height="360" outlined rounded elevation="12">
          <v-subheader class = "menu-subtitle mx-16">CUENTOS</v-subheader>
          <v-list-item-group>
            <v-divider></v-divider>
            <div 
              v-for="n in datos"
                :key="n"
            >
              <v-list-item
                class="menu-text"
                v-if="n.tipo == 1"
                @click="descargarArchivo(n.ruta)"
              >
                {{ n.titulo }}
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col cols="12" xl="3" lg="4" md="5" sm="7" xs="12">
        <v-list height="360" outlined rounded elevation="12">
          <v-subheader class = "menu-subtitle mx-16">RECORTABLE</v-subheader>
            <v-list-item-group
              color="rgb(40, 53, 147)!important"
            >
              <v-divider></v-divider>
              <div 
                v-for="n in datos"
                :key="n"
              >
              <v-list-item
                class="menu-tex"
                v-if="n.tipo == 2"
                v-text="n.titulo"
                @click="descargarArchivo(n.ruta)"
              >
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col cols="12" xl="3" lg="4" md="5" sm="7" xs="12">
        <v-list height="360" outlined rounded elevation="12">
          <v-subheader class = "menu-subtitle mx-16">MI ÁLBUM</v-subheader>
            <v-list-item-group
              
            >
              <v-divider></v-divider>
              <div 
                v-for="n in datos"
                :key="n"
              >
              <v-list-item
                class="menu-tex"
                v-if="n.tipo == 3"
                v-text="n.titulo"
                @click="descargarArchivo(n.ruta)"
              >
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col cols="12" xl="3" lg="4" md="5" sm="7" xs="12">
        <v-list height="360" outlined rounded elevation="12" two-line>
          <v-subheader class = "menu-subtitle mx-16">VALORES</v-subheader>
            <v-list-item-group
              color="rgb(40, 53, 147)!important"
            >
              <v-divider></v-divider>
              <div 
                v-for="n in datos"
                :key="n"
              >
              <v-list-item
                class="menu-tex"
                v-if="n.tipo == 4"
                v-text="n.titulo"
                @click="descargarArchivo(n.ruta)"
              >
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col cols="12" xl="3" lg="4" md="5" sm="7" xs="12">
        <v-list height="360" outlined rounded elevation="12">
          <v-subheader class = "menu-subtitle mx-16">OTROS</v-subheader>
            <v-list-item-group
              color="rgb(40, 53, 147)!important"
            >
              <v-divider></v-divider>
              <div 
                v-for="n in datos"
                :key="n"
              >
              <v-list-item
                class="menu-tex"
                v-if="n.tipo == 5"
                v-text="n.titulo"
                @click="descargarArchivo(n.ruta)"
              >
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "impreso",
  data() {
    return {
      links: [],
      datos: [],
    };
  },
  methods: {
    descargarArchivo(id) {
      window.open("" + id, "_blank");
    },
    obtenerImpreso() {
      axios
        .get(
          "https://xicoclass.online/Impreso.php?periodoAsociado=" +
            window.sessionStorage.getItem("id_grado")
        )
        .then((r) => {
          this.datos = r.data;
          console.log(this.datos);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.obtenerImpreso();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

.box-title {
  font-family: Montserrat;
  font-weight: 800;
  color: white;
  font-size: 25px;
  margin-left: 20px !important;
  vertical-align: middle;
}

.titulo-seccion {
  width: 100%;
  height: 40px;
  background-color: #26a69a;
}
.img-seccion {
  height: 150px !important;
  width: 150px !important;
  margin-left: auto !important;
  margin-right: 30px !important;
  margin-bottom: -50px !important;
}

.menu-text {
  color: rgb(40, 53, 147) !important;
  font-size: 16px !important;
  font-family: "Montserrat";
}
.menu-subtitle {
  color: rgb(40, 53, 147) !important;
  font-size: 18px !important;
  font-family: "Montserrat", sans-serif;
  margin-left: 20px !important;
}
.card {
  min-height: 150px;
  max-height: 150px;
}
.imagen {
  display: block;
  width: 60px;
  height: 60px;
}
.subtitulo {
  font-family: "Poppins";
  font-weight: 500px;
  font-size: 14px;
  color: white;
}
</style>
