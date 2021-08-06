<template>
  <div class="MiPortal">
    <navbar></navbar>
    <div class="tabs">
      <menuTabs></menuTabs>
    </div>
    <div class="AccionWindow">
      <v-window v-model="$store.state.portalStep">
        <v-window-item :value="1">
          <misMaterias></misMaterias>
        </v-window-item>
        <v-window-item :value="2">
          <misTareas :key="$store.state.TareasPageViewController" :childVar="childVar"></misTareas>
        </v-window-item>
        <v-window-item :value="3">
          <misDocumentos></misDocumentos>
        </v-window-item>
        <v-window-item :value="4">
          <misTramites></misTramites>
        </v-window-item>
      </v-window>
    </div>

    <footerHome></footerHome>
  </div>
</template>

<script>
import navbar from "@/components/navbar-home/navbar.vue";
import footerHome from "@/components/footer-home/footer.vue";
import menuTabs from "@/components/MiPortal/menuTabs/menuTabs.vue";
import misMaterias from "@/components/MiPortal/windows/misMaterias.vue";
import misTareas from "@/components/MiPortal/windows/misTareas.vue";
import misDocumentos from "@/components/MiPortal/windows/misDocumentos.vue";
import misTramites from "@/components/MiPortal/windows/misTramites.vue";

import axios from "axios";
import {fr} from "../main.js";


export default {
  name: "MiPortal",
  data() {
    return {
      archivos: [],
      archivosAlumno: "",
      Tareas: [],
      tareasFiles: [],
      tempLinks:[],

      childVar: 0,

      dataTemporal: [],
    };
  },
  components: {
    navbar,
    footerHome,
    menuTabs,
    misMaterias,
    misTareas,
    misDocumentos,
    misTramites,
  },
  methods: {
    Session() {
      if (window.sessionStorage.getItem("id_alumno") == null) {
        window.location.href = "/";
      }
    },

    async revisarEntregas(){
      for(var k=0;k<this.Tareas.length;k++){
        const snapshot = await fr.collection("relacionDeTareas")
        .where('id_actividad', '==', this.Tareas[k].id_actividad)
        .where('id_docente', '==', this.Tareas[k].id_docente)
        .where('id_alumno', '==', sessionStorage.getItem("id_alumno"))
        .get();
        if(!snapshot.empty){
          let temp = [];
          snapshot.forEach((doc) => {
            temp.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          this.dataTemporal = temp[0];
          this.Tareas[k].entregado = "si";
          this.Tareas[k].url_documents = this.dataTemporal.url_documents;
          this.Tareas[k].firebaseId = this.dataTemporal.id;
        }else{
          this.Tareas[k].entregado = "no";
        }
      }
      this.$store.state.Tareas = this.Tareas;
      console.log(this.$store.state.Tareas);
    },

    async Tarea() {
      axios
        .get(
          "https://xicoclass.online/Actividades.php?id_grupo=" +
            window.sessionStorage.getItem("id_grado")
        )
        .then((r) => {
          this.Tareas = r.data;
          this.$store.state.Tareas = this.Tareas
          this.revisarEntregas();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    Archivo() {
      axios
        .get("https://xicoclass.online/Archivos.php")
        .then((r) => {
          this.archivos = r.data;
          this.$store.state.archivos = this.archivos;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    ArchivoAlumno() {
      axios
        .get(
          "https://xicoclass.online/ArchivosAlumnos.php?id_alumno=" +
            window.sessionStorage.getItem("id_alumno")
        )
        .then((r) => {
          this.archivosAlumno = r.data;
          this.$store.state.archivosAlumno = this.archivosAlumno;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

  },
  mounted() {
    this.Session();
    this.Tarea();
    this.Archivo();
    this.ArchivoAlumno();
  },

  watch: {
    childVar() {
      console.log("CAMBIO LA VARIABLE");  
    },
  },

};
</script>

<style scoped></style>
