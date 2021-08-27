<template>
  <div class="misTareas">
    <div class="container" v-for="item in Tareas" :key="item.id_actividad">
      <v-card elevation="20" class="card-container" color="#f5f5f5">
        <v-row class="mt-2 mb-0 pb-0">
          <v-col cols="12" sm="8" md="10" lg="11">
            <h1 class="ml-6 tittle-text">
              #{{ item.id_actividad }} {{ item.nombre }}
            </h1>
          </v-col>
          <v-col class="estado-actividad" cols="12" sm="4" md="2" lg="1">
            <div>
              <span class="status-label">ESTATUS: </span>
              <span id="estado-text" class="status-label estado-pendiente">{{
                item.estado
              }}</span>
            </div>
          </v-col>
        </v-row>
        <v-row class="ml-3">
          <div class="texto-descriptivo mx-4">
            <span style="font-size: 18px; color: #8e78ec">
              <b>Descripción:</b>
            </span>
            <p class="pr-10">
              {{ item.descripcion }}
            </p>
          </div>
        </v-row>
        <v-row class="acciones mx-4" align-content="space-around">
          <v-col cols="12" md="6">
            <span class="texto-material"> MATERIAL ADJUNTO: </span>
            <!-- AQUI VA UN: V-FOR -->
            <template>
              <div v-for="archivo in archivos" :key="archivo.id_archivo">
                <div v-if="archivo.id_actividades == item.id_actividad">
                  <v-chip class="mx-2" @click="DescargarArchivo(archivo.ruta)">
                    {{ archivo.nombre }}
                  </v-chip>
                </div>
              </div>
            </template>
          </v-col>

          <v-col cols="12" md="6">
            <span v-if="item.entregado == 'si'" class="texto-trabajo">
              <b style="color: #f595bc">ENTREGADO</b>, MI TRABAJO:
            </span>
            <span v-if="item.entregado == 'no'" class="texto-trabajo">
              AÑADIR DOCUMENTOS:
            </span>
            <!--     -------------------------    AQUI SUBEN EL ARCHIVO / SE VIZUALIZAN LO ARCHIVOS SUBIDOS  ----------------------------   -->
            <!-- AQUI SE RECUPERAN LOS ARCHIVOS QUE SE ENTREGARON SI YA ENTREGO LA TAREA -->
            <div v-if="item.entregado == 'si'">
              <v-chip
                @click="AbrirMiArchivo(i)"
                v-for="i in item.url_documents"
                :key="i"
                class="mx-2"
              >
                <v-icon> mdi-file-document-multiple </v-icon>
              </v-chip>
            </div>
            <!---- AQUI SE DA EL ESPACIO PARA QUE SUBA LOS ARCHIVOS ---->
            <div class="fileInputBox" v-if="item.entregado == 'no'">
              <v-file-input
                v-model="tareasFiles[item.id_actividad]"
                multiple
                outlined
                chips
              ></v-file-input>
            </div>
          </v-col>
        </v-row>
        <v-card-actions class="mt-n5">
          <v-spacer></v-spacer>
          <v-btn
            v-if="item.entregado == 'si'"
            class="boton-entregar mr-4 mb-4"
            color="#f595bc"
            dark
            @click="eliminarTarea(item)"
          >
            Cancelar Entrega
          </v-btn>
          <v-btn
            v-if="item.entregado == 'no'"
            class="boton-entregar mr-4 mb-4"
            color="green"
            dark
            @click="subirTareas(item)"
          >
            Entregar
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import { firebase, fr } from "../../../main.js";

export default {
  name: "misTareas",
  data() {
    return {
      archivos: [],
      archivosAlumno: "",
      Tareas: [],
      tareasFiles: [],
      tempLinks: [],
      pageViewController: [],
    };
  },

  props: ["childVar"],

  methods: {
    DescargarArchivo(id) {
      const decodedData = atob(id);
      window.open("" + decodedData, "_blank");
    },

    AbrirMiArchivo(url) {
      window.open(url, "Mi Archivo Cargado");
    },

    async eliminarTarea(it) {
      await fr.collection("relacionDeTareas").doc(it.firebaseId).delete();
      console.log("Eliminado");
      window.location.reload();
    },

    async subirTareas(data) {
      console.log("LA DATA QUE ENVIAS");
      console.log(data);
      const id = data.id_actividad;
      for (var i = 0; i < this.tareasFiles[id].length; i++) {
        const storageRef = firebase
          .storage()
          .ref(`/ArchivosActividades/${id}/${this.tareasFiles[id][i].name}`);
        const task = await storageRef.put(this.tareasFiles[id][i]);
        const tempUrl = await task.ref.getDownloadURL();
        this.tempLinks[i] = await tempUrl;
      }

      const dataInfo = {
        id_actividad: data.id_actividad,
        id_docente: data.id_docente,
        id_grupo: data.id_grupo,
        id_alumno: sessionStorage.getItem("id_alumno"),
        url_documents: this.tempLinks,
      };
      await fr.collection("relacionDeTareas").doc().set(dataInfo);
      // AQUI VA UN: await axios. ......................... que actualice el dato para este alumno
      window.location.reload();
    },

    loadData() {
      this.Tareas = this.$store.state.Tareas;
      this.archivos = this.$store.state.archivos;
      this.archivosAlumno = this.$store.state.archivosAlumno;
    },
  },

  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

.title-text {
  font-family: "Poppins";
  font-weight: 800;
  color: black;
  font-size: 60px;
  margin-left: 20px;
}
.container {
  width: 80%;
  min-height: 300px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}
.acciones {
  padding-left: 20px;
  margin-bottom: 10px;
}
.card-container {
  width: 100%;
  min-height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.titulo-tarjeta {
  font-family: "Poppins";
  font-weight: 800;
  color: black;
}
.status-text {
  font-family: "Poppins";
}
.status-label {
  font-family: "Poppins";
  font-weight: 800;
  color: black;
}
.texto-descriptivo {
  font-family: "Poppins";
  text-align: justify;
  color: black;
}
.texto-material {
  font-family: "Poppins";
  font-weight: 800;
  color: #e91e63;
}
.texto-trabajo {
  font-family: "Poppins";
  font-weight: 800;
  color: #7e57c2;
}
.v-chip {
  color: #e0e0e0;
}
/* Estos Estilos Los Aplicaremos Al ID: estado-text  */
.estado-pendiente {
  color: #d50000 !important;
}
.estado-entregado {
  color: #64dd17 !important;
}

.estado-actividad {
  margin-left: 0px !important;
}

.fileInputBox {
  width: 90%;
}

@media screen and (max-width: 620px) {
  .estado-actividad {
    margin-left: 25px !important;
  }
}
</style>
