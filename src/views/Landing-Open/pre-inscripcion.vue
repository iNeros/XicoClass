<template>
  <div id="app">
    <div class="titulo-container">

    </div>
    <v-app id="inspire" dark>
        <v-layout justify-center>
        <v-flex xs12 sm10 md8 lg6>
            <v-card class="mt-6" elevation="16">
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
                <h1 class="titulo-seccion">DATOS DEL TUTOR</h1> 
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
            

            <v-divider class="mt-5"></v-divider>
            <v-card-actions>
                <v-btn text color="red">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="subirDocumentos()">Pre-Inscribirme!</v-btn>
            </v-card-actions>

            </v-card>
        </v-flex>
        </v-layout>
    </v-app>
    </div>
</template>

<script>
import { firebase, fr } from "../../main.js";
export default {
    name: "pre-inscripcion",
    data(){
        return{
            name: null,
            edad: null,
            email: null,
            curpTexto: null,

            nombreTutor: null,

            curpFile: null,
            domicilioFile: null,
            ineFrente: null,
            ineReverso: null,

        }
    },
    methods: {
        async subirDocumentos(){
            if(this.name != null && this.edad != null && this.email != null && this.curpTexto != null && this.curpFile != null && this.domicilioFile != null && this.ineFrente != null && this.ineReverso != null){
                
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
                await fr
                .collection("pre-inscripcion")
                .doc()
                .set(dataInfo)

                console.log("SE GUARDO SATISFACTORIAMENTE LA INFORMACION: ",dataInfo);
                alert('SE AN GUARDADO LOS DATOS');
                window.location = '/';  
            }else{
                alert("Debe Llenar Todos Los Datos Del Formulario");
            }
        },
    }
    
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;600;800&display=swap");

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

.application.theme--dark {
  background: url(  );
}
.v-card {
    background: rgba(0, 0, 0, 0.35);
}

</style>