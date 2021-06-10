<template>
  <v-container>
    <v-row class="fill-height mt-6 mx-6 mb-6" justify="space-around">
      <v-col cols="12" xl="3" lg="4" md="5" sm="7" xs="12">
        <div>
          <v-img
            class="img-seccion"
            src="@/assets/media/biblioteca/img-cuento.png"
          ></v-img>
        </div>
        <div class="titulo-seccion">
          <span class="box-title"> CUENTOS </span>
        </div>
        <v-list height="360" width="90%" outlined rounded elevation="12" two-line>
          <v-list-item-group>
            <div v-for="n in datos" :key="n">
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
        <div>
          <v-img
            class="img-seccion"
            src="@/assets/media/biblioteca/img-recortable.png"
          ></v-img>
        </div>
        <div class="titulo-seccion">
          <span class="box-title"> RECORTABLES </span>
        </div>
        <v-list height="360" width="90%" outlined rounded elevation="12" two-line>
          <v-list-item-group>
            <div v-for="n in datos" :key="n">
              <v-list-item
                class="menu-text"
                v-if="n.tipo == 2"
                @click="descargarArchivo(n.ruta)"
              >
                {{ n.titulo }}
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col cols="12" xl="3" lg="4" md="5" sm="7" xs="12">
        <div>
          <v-img
            class="img-seccion"
            src="@/assets/media/biblioteca/img-album.png"
          ></v-img>
        </div>
        <div class="titulo-seccion">
          <span class="box-title"> MI ÁLBUM </span>
        </div>
        <v-list height="360" width="90%" outlined rounded elevation="12" two-line>
          <v-list-item-group>
            <div v-for="n in datos" :key="n">
              <v-list-item
                class="menu-text"
                v-if="n.tipo == 3"
                @click="descargarArchivo(n.ruta)"
              >
                {{ n.titulo }}
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col cols="12" xl="3" lg="4" md="5" sm="7" xs="12">
        <div>
          <v-img
            class="img-seccion"
            src="@/assets/media/biblioteca/img-valores.png"
          ></v-img>
        </div>
        <div class="titulo-seccion">
          <span class="box-title"> VALORES </span>
        </div>
        <v-list height="360" width="90%" outlined rounded elevation="12" two-line>
          <v-list-item-group>
            <div v-for="n in datos" :key="n">
              <v-list-item
                class="menu-text"
                v-if="n.tipo == 4"
                @click="descargarArchivo(n.ruta)"
              >
                {{ n.titulo }}
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-col>
      
      <v-col cols="12" xl="3" lg="4" md="5" sm="7" xs="12">
        <div>
          <v-img
            class="img-seccion"
            src="@/assets/media/biblioteca/img-otros.png"
          ></v-img>
        </div>
        <div class="titulo-seccion">
          <span class="box-title"> OTROS </span>
        </div>
        <v-list height="360" width="90%" outlined rounded elevation="12">
          <v-list-item-group>
            <div v-for="n in datos" :key="n">
              <v-list-item
                class="menu-text"
                v-if="n.tipo == 5"
                @click="descargarArchivo(n.ruta)"
              >
                {{ n.titulo }}
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
  width: 90%;
  height: 40px;
  background-color: #26a69a;
}
.img-seccion {
  height: 80px !important;
  width: 80px !important;
  margin-left: auto !important;
  margin-right: 26px !important;
  margin-bottom: -48px !important;
}
.menu-text {
  color: rgb(40, 53, 147) !important;
  font-size: 16px !important;
  font-family: "Montserrat";
}
</style>
