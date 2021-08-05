<template>
  <v-container fluid>
    <v-row dense class="">
      <!-- Barra de avisos recientes-->
      <v-col cols="6" xs="3" lg="4" class="">
        <h2 style="color: #d50000" id="ods">Noticias recientes</h2>
        <hr class="mb-3" color="#D50000" id="od" />
        <!-- Carta de Avisos-->
        <v-card class="sizes" color="#ef5350 " dark elevation="5">
          <v-card-title class="ods">
            {{ noticias[0].nombre }}
          </v-card-title>
          <v-card-subtitle class="texto">{{
            noticias[0].descripcion
          }}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              v-if="noticias[0].ruta_archivo != ''"
              color="#D50000"
              dark
              v-bind:href="'' + noticias[0].ruta_archivo"
            >
              Enlace
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="6" xs="3" lg="4" class="">
        <h2 style="color: #d50000" id="ods">Más noticias recientes</h2>
        <hr class="mb-3" color="#D50000" id="od" />
        <!--  Carta de Avisos      -->
        <v-card class="sizes" color="#ef5350 " dark elevation="5">
          <v-card-title class="ods">
            {{ noticias[1].nombre }}
          </v-card-title>
          <v-card-subtitle class="texto">{{
            noticias[1].descripcion
          }}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              v-if="noticias[1].ruta_archivo != ''"
              color="#D50000"
              dark
              v-bind:href="'' + noticias[1].ruta_archivo"
            >
              Enlace
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!--Columna de Redes sociales-->
      <v-col cols="12" xs="6" lg="4" class="">
        <h2 class="ml-6" style="color: #1565c0">Redes Sociales</h2>
        <hr class="mb-3" color="#1565c0" id="od" />
        <v-card class="ml-6" color="#26c6da" dark max-width="400" elevation="5">
          <v-card-title>
            <v-icon large left> mdi-twitter </v-icon>
            <span class="title font-weight-light">Twitter</span>
          </v-card-title>

          <v-card-text class="headline font-weight-bold">
            "Turns out semicolon-less style is easier and safer in TS because
            most gotcha edge cases are type invalid as well."
          </v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
              </v-list-item-content>

              <v-row align="center" justify="end">
                <v-icon class="mr-1"> mdi-heart </v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1"> mdi-share-variant </v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "seccionNoticias",
  data() {
    return {
      noticias: "",
      items: [
        {
          color: "#1F7087",
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          title: "Supermodel",
          artist: "Foster the People",
        },
        {
          color: "#952175",
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          title: "Halcyon Days",
          artist: "Ellie Goulding",
        },
      ],
    };
  },
  methods: {
    Nglobales() {
      axios
        .get("https://xicoclass.online/Noticias_globales.php?R")
        .then((r) => {
          this.noticias = r.data;
          console.log(this.noticias);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.Nglobales();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
.seccionNoticias {
  display: block;
  margin-top: 100px;
}
.dobleColumna {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.sizes {
  min-height: 250px;
  max-height: 250px;
}
.texto {
  height: 150px;
  overflow-y: auto;
}
.od {
  font-family: "Poppins";
}
.ods {
  font-family: "Poppins";
}
</style>
