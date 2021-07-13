<template>
  <div class="Equipo">
    <navbar></navbar>
    <v-container>
      <v-row justify="center" justify-lg="center" class="mt-4 mb-2">
        <h1 class="titulo-pagina">Miembros del equipo</h1>
      </v-row>
          <hr color="#BA68C8" id="od" />

      <!-- MAESTRA SALOME ORIGINAL
      <v-row class="mt-11 mb-4" justify="center" >
        <v-card elevation="3" width="400" shaped outlined class="sombra-avatar1">
          <div class="d-flex justify-center">
            <v-avatar size="164" class="sombra-avatar1">
              <v-img
                contain
                class="mt-6"
                src="@/assets/media/logos/CaraNiña.png"
              >
              </v-img>
            </v-avatar>
          </div>

          <div class="d-flex justify-center">
            <v-card-title class="titulo mb-0 pb-0">
              Mtra. María <br />
              Salomé Alejandre<br />
              Apolinar
            </v-card-title>
          </div>
          <v-card-subtitle class="subtitulo pt-1">
        Asesor de proyecto del ITSX
          </v-card-subtitle>
          <v-card-text class="texto-centrado fuente-poppins">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            molestias dolorem eum, ab officia perferendis veniam, consectetur
            quas obcaecati facilis nisi fugiat modi, placeat unde quod ducimus
            optio! Quidem, debitis.
          </v-card-text>
        </v-card>
      </v-row>
      -->

      <!--PRUEBA SOMBRA COLOR-->
      <v-row class="mt-7 mb-4" justify="center" >
        <v-col cols="12" class="card-salome redondo" xl="4" lg="4" md="6" sm="7" xs="10">
            <div class="d-flex justify-center">
            <v-avatar size="164" class="sombra-avatar1">
              <v-img
                contain
                class="mt-6"
                src="@/assets/media/logos/CaraNiña.png"
              >
              </v-img>
            </v-avatar>
          </div>

          <div class="d-flex justify-center">
            <p class="titulo mt-4 mb-0 pb-0">
              Mtra. María <br />
              Salomé Alejandre<br />
              Apolinar
            </p>
          </div>
          <p class="subtitulo texto-centrado mb-1">
            Asesor de proyecto del ITSX
          </p>
          <p class="descripcion mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            molestias dolorem eum, ab officia perferendis veniam, consectetur
            quas obcaecati facilis nisi fugiat modi.
          </p>          
        </v-col>                  
      </v-row>

      <!-- NOSOTROS-->
      <v-row justify-lg="space-around" class="mb-2">
        <v-col xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="3" width="400" shaped outlined min-height="450">
            <div class="d-flex justify-center">
              <v-avatar size="164" class="sombra-avatar2">
                <v-img
                  contain
                  class="mt-6"
                  src="@/assets/media/logos/CaraNiña.png"
                >
                </v-img>
              </v-avatar>
            </div>

            <div class="d-flex justify-center">
              <v-card-title class="titulo mb-0 pb-0">
                Adriana Abigail <br />
                Dominguez <br />
                Morales
              </v-card-title>
            </div>

            <v-card-subtitle class="subtitulo pt-1">
              Lider del proyecto
            </v-card-subtitle>
            <v-card-text class="texto-centrado fuente-poppins">
              Ingeniera en sistemas computacionales con una especialidad en redes.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="3" width="400" shaped outlined min-height="450">
            <div class="d-flex justify-center">
              <v-avatar size="164" class="sombra-avatar3">
                <v-img
                  contain
                  class="mt-6 imagen-carta"
                  src="@/assets/media/logos/CaraNiño.png"
                >
                </v-img>
              </v-avatar>
            </div>

            <div class="d-flex justify-center">
              <v-card-title class="titulo mb-0 pb-0">
                Gibran Camacho Ramos
              </v-card-title>
            </div>

            <v-card-subtitle class="subtitulo pt-1">
              Lider del proyecto
            </v-card-subtitle>
            <v-card-text class="texto-centrado fuente-poppins">
            Ingeniero en sistemas computacionales con una especialidad en redes.

            </v-card-text>
          </v-card>
        </v-col>

        <v-col xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="3" width="400" shaped outlined min-height="450">
            <div class="d-flex justify-center">
              <v-avatar size="164" class="sombra-avatar4">
                <v-img
                  contain
                  class="mt-6 imagen-carta"
                  src="@/assets/media/logos/CaraNiño.png"
                >
                </v-img>
              </v-avatar>
            </div>

            <div class="d-flex justify-center">
              <v-card-title class="titulo mb-0 pb-0">
                Michel Yafté <br />
                Chablé Antonio
              </v-card-title>
            </div>

            <v-card-subtitle class="subtitulo pt-1">
              Lider del proyecto
            </v-card-subtitle>
            <v-card-text class="texto-centrado fuente-poppins">
              Ingeniero en sistemas computacionales con una especialidad en software.

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify-lg="space-around" class="mb-2">
        <v-col xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="3" width="400" shaped outlined min-height="450">
            <div class="d-flex justify-center">
              <v-avatar size="164" class="sombra-avatar5">
                <v-img
                  contain
                  class="mt-6"
                  src="@/assets/media/logos/CaraNiño.png"
                >
                </v-img>
              </v-avatar>
            </div>

            <div class="d-flex justify-center">
              <v-card-title class="titulo mb-0 pb-0">
                Raúl Alfonso <br />
                Tenorio De La O
              </v-card-title>
            </div>

            <v-card-subtitle class="subtitulo pt-1">
              Lider del proyecto
            </v-card-subtitle>
            <v-card-text class="texto-centrado fuente-poppins">
              Ingeniero en sistemas computacionales con una especialidad en software.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="3" width="400" shaped outlined min-height="450" >
            <div class="d-flex justify-center">
              <v-avatar size="164" class="sombra-avatar6">
                <v-img
                  contain
                  class="mt-6 imagen-carta"
                  src="@/assets/media/logos/CaraNiño.png"
                >
                </v-img>
              </v-avatar>
            </div>

            <div class="d-flex justify-center">
              <v-card-title class="titulo mb-0 pb-0">
                Othón Andrés <br />
                Morales Viveros
              </v-card-title>
            </div>

            <v-card-subtitle class="subtitulo pt-1">
              Lider del proyecto
            </v-card-subtitle>
            <v-card-text class="texto-centrado fuente-poppins">
              Ingeniero en sistemas computacionales con una especialidad en software.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col xl="4" lg="4" md="4" sm="12" xs="12">
          <v-card elevation="3" width="400" shaped outlined min-height="450" >
            <div class="d-flex justify-center">
              <v-avatar size="164" class="sombra-avatar7">
                <v-img
                  contain
                  class="mt-6 imagen-carta"
                  src="@/assets/media/logos/CaraNiño.png"
                >
                </v-img>
              </v-avatar>
            </div>

            <div class="d-flex justify-center">
              <v-card-title class="titulo mb-0 pb-0">
                Alejandro Oliva <br />
                Baizabal
              </v-card-title>
            </div>

            <v-card-subtitle class="subtitulo pt-1">
              Lider del proyecto
            </v-card-subtitle>
            <v-card-text class="texto-centrado fuente-poppins">
              Ingeniero en sistemas computacionales con una especialidad en redes.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "../../components/navbar-home/navbar.vue";
import footerHome from "../../components/footer-home/footer.vue";

export default {
  name: "Equipo",
  data() {
    return {};
  },
  components: {
    navbar,
    footerHome,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

.card-salome{
  height: 455px;
  box-shadow: 0px 6px 8px #E91E63;
}
.card-team{
  height: 474px;
}
.redondo{
  border: none;
  border-radius: 40px 10px;
}
.titulo-pagina {
  font-family: "Poppins";
  font: weight 700px;
  font-size: 40px;
  line-height: 40px;
  color: black;
  text-align: center;
}
.titulo {
  font-family: "Poppins";
  font: weight 700px;
  font-size: 35px;
  line-height: 33px;
  color: #263238;
  text-align: center;
}
.subtitulo {
  font-family: "Poppins";
  font-weight: 500px;
  font-size: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
}
.descripcion{
  font-size: 14px;
  text-align: center;
  font-family: "Poppins";
  color: rgba(0, 0, 0, 0.6);  
}
.texto-centrado {
  text-align: center;
}
.fuente-poppins {
  font-family: "Poppins";
}
.logo {
  display: block;
  width: 250px;
}
.imagen-carta {
  display: block;
  width: 150px;
  height: 150px;
  opacity: 1;
  background: transparent;
}

.linea {
  width: 200px;
  height: 0px;
  border: 2px solid #495167;
  opacity: 1;
}
.margen-abajo {
  margin-bottom: 0px;
}
.sombra-avatar1{
  box-shadow: 0px 6px 8px #E91E63;
}
.sombra-avatar2 {
  box-shadow: 0px 6px 8px #7E57C2;
}
.sombra-avatar3{
  box-shadow: 0px 6px 8px #80D8FF;
}
.sombra-avatar4 {
  box-shadow: 0px 6px 8px #283593;
}
.sombra-avatar5{
  box-shadow: 0px 6px 8px #64DD17;
}
.sombra-avatar6 {
  box-shadow: 0px 6px 8px #FFFF00;
}
.sombra-avatar7 {
  box-shadow: 0px 6px 8px #FF9800;
}
#od {
  margin-left: 15px;
  margin-right: 15px;
  height: 5px;
  color:  #BA68C8;
}

</style>
