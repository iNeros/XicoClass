<template>
  <body>
    <div class="degradado"></div>
    <div class="right">
      <v-icon dark> mdi-arrow-left-bold </v-icon>
      <a
        href="https://federiquitos.com/"
        style="color: yellow; text-decoration: underline"
      >
        REGRESAR
      </a>
    </div>
    <div class="center">
      <v-app id="inspire" dark>
        <v-layout justify-center overflow class="fixed-height">
          <v-flex>
            <v-card class="v-card-settings" elevation="16">
              <v-card-title>
                <h1 class="titulo-seccion">DATOS DEL ASPIRANTE</h1>
                <div class="diver"></div>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  ref="name"
                  v-model="name"
                  label="Nombre Completo"
                  required
                  solo-inverted
                  background-color="#f5b8cb"
                ></v-text-field>

                <v-text-field
                  ref="edad"
                  v-model="edad"
                  type="number"
                  label="Edad"
                  required
                  solo-inverted
                ></v-text-field>

                <v-text-field
                  ref="email"
                  v-model="email"
                  label="E-Mail"
                  required
                  solo-inverted
                ></v-text-field>

                <v-text-field
                  ref="curpTexto"
                  v-model="curpTexto"
                  label="CURP"
                  required
                  solo-inverted
                ></v-text-field>

                <v-file-input
                  truncate-length="15"
                  v-model="curpFile"
                  label="CURP-ARCHIVO"
                  required
                  solo-inverted
                ></v-file-input>

                <v-file-input
                  truncate-length="15"
                  v-model="domicilioFile"
                  label="COMPROBANTE DE DOMICILIO"
                  required
                  solo-inverted
                ></v-file-input>
              </v-card-text>

              <v-card-title>
                <h1 class="titulo-seccion mt-n5">DATOS DEL TUTOR</h1>
                <div class="diver-red"></div>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  ref="name"
                  v-model="nombreTutor"
                  label="Nombre Completo"
                  required
                  solo-inverted
                  background-color="#f5b8cb"
                ></v-text-field>

                <v-file-input
                  truncate-length="15"
                  v-model="ineFrente"
                  label="INE-FRENTE"
                  required
                  solo-inverted
                ></v-file-input>

                <v-file-input
                  truncate-length="15"
                  v-model="ineReverso"
                  label="INE-REVERSO"
                  required
                  solo-inverted
                ></v-file-input>
              </v-card-text>

              <v-divider class="mt-2"></v-divider>
              <v-card-actions>
                <v-btn text color="red">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="subirDocumentos()"
                  >Pre-Inscribirme!</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-app>
      <v-dialog v-model="dialogLoading" width="500">
        <v-card rounded="20" elevation="2" width="400" height="300">
          <v-row align="center" class="pt-15" justify="space-around">
            <v-col cols="12">
              <h2 align="center">Guardando Los Datos</h2>
            </v-col>
            <v-col cols="3">
              <v-progress-circular
                :size="70"
                :width="7"
                color="purple"
                indeterminate
              ></v-progress-circular>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>
    </div>
  </body>
</template>

<script>
import { firebase, fr } from "../../main.js";
export default {
  name: "pre-inscripcion",
  data() {
    return {
      name: null,
      edad: null,
      email: null,
      curpTexto: null,
      dialogLoading: false,

      nombreTutor: null,

      curpFile: null,
      domicilioFile: null,
      ineFrente: null,
      ineReverso: null,
    };
  },
  methods: {
    async subirDocumentos() {
      
      if (
        this.name != null &&
        this.edad != null &&
        this.email != null &&
        this.curpTexto != null &&
        this.curpFile != null &&
        this.domicilioFile != null &&
        this.ineFrente != null &&
        this.ineReverso != null
      ) {
        this.dialogLoading = true;
        const storageCurp = firebase
          .storage()
          .ref(`/Pre-InscripcionFiles/${this.curpFile.name}`);
        const task1 = await storageCurp.put(this.curpFile);
        const curpUrl = await task1.ref.getDownloadURL();

        const storageDomicilio = firebase
          .storage()
          .ref(`/Pre-InscripcionFiles/${this.domicilioFile.name}`);
        const task2 = await storageDomicilio.put(this.domicilioFile);
        const domicilioUrl = await task2.ref.getDownloadURL();

        const ineFrentreStorage = firebase
          .storage()
          .ref(`/Pre-InscripcionFiles/${this.ineFrente.name}`);
        const task3 = await ineFrentreStorage.put(this.ineFrente);
        const ineFrenteUrl = await task3.ref.getDownloadURL();

        const ineReversoStorage = firebase
          .storage()
          .ref(`/Pre-InscripcionFiles/${this.ineReverso.name}`);
        const task4 = await ineReversoStorage.put(this.ineReverso);
        const ineReversoUrl = await task4.ref.getDownloadURL();

        const dataInfo = {
          nombre: this.name,
          edad: this.edad,
          email: this.email,
          curpTexto: this.curpTexto,
          curpFile: curpUrl,
          nombreTutor: this.nombreTutor,
          domicilioFile: domicilioUrl,
          ineFrente: ineFrenteUrl,
          ineReverso: ineReversoUrl,
        };
        await fr.collection("pre-inscripcion").doc().set(dataInfo);

        console.log("SE GUARDO SATISFACTORIAMENTE LA INFORMACION: ", dataInfo);
        //alert("SE AN GUARDADO LOS DATOS");
        //window.location = "/";
        this.dialogLoading = false;
        window.location = "/";
      } else {
        alert("Debe Llenar Todos Los Datos Del Formulario");
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;600;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
}
body {
  margin: 0;
  padding: 0;
  background: url("../../assets/media/backgrounds/background.png");
  height: 100vh;
  overflow: hidden;
}

.v-card-settings {
  overflow-y: auto !important;
  max-height: 100vh !important;
}

.fixed-height {
  max-height: 100vh;
}

.right {
  font-family: "Montserrat";
  color: white;
  font-size: 20px;
  position: absolute;
  top: 2%;
  left: 20px;
}

@media screen and (min-width: 800px) {
  .center {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 550px;
    height: 100vh;
    background: white;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
  }
}
@media screen and (max-width: 800px) {
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 600px;
    background: white;
    border-radius: 10px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
    margin-top: 30px;
  }
}

.center h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
  width: 800px;
  margin-top: 0;
}

.btn-design {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.login-form {
  margin-top: 200px;
  margin-bottom: 50px;
}
@media screen and (max-width: 800px) {
  .login-form {
    margin-top: 50px;
  }
}

.descripcion-text {
  text-align: center;
  font-size: 24px !important;
  font-family: "Montserrat";
}
.forgotten-password {
  position: absolute;
  bottom: 10px;
  margin-left: 30%;
  align-self: auto;
  text-align: center;
  font-size: 16px !important;
}
@media screen and (max-width: 800px) {
  .forgotten-password {
    position: absolute;
    bottom: 10px;
    margin-left: 20%;
    align-self: auto;
    text-align: center;
    font-size: 16px !important;
  }
}
.margin-card {
  margin-left: auto;
  margin-right: auto;
}

.titulo-seccion {
  font-family: "Montserrat";
  font-weight: 800;
  color: #23395b;
  font-size: 26px;
  margin-bottom: 5px;
  width: 100%;
}

.diver {
  width: 100%;
  height: 5px;
  background-color: #f57c00 !important;
  border-radius: 20px;
}

.diver-red {
  width: 100%;
  height: 5px;
  background-color: #0091ea !important;
  border-radius: 20px;
}
.v-card {
  background: rgba(0, 0, 0, 0.35);
}
</style>
