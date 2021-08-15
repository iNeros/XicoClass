<template>
  <body>
    <div class="degradado"></div>
    <div class="right">
      ¿ERES UN DOCENTE? HAZ CLICK
      <a href="https://xicoclassproject-579bb.web.app/" style="color: yellow; text-decoration: underline">
        AQUI
      </a>
    </div>
    <div class="center">
      <h1 style="color: #30dba0">INICIA SESION</h1>
      <v-card class="mx-auto px-6" max-width="500" elevation="0" raised>
        <v-card-text>
          <br />
          <div class="descripcion-text">
            Utiliza el usuario y contraseña que tu maestro te proporciono
          </div>
          <v-form class="login-form">
            <v-text-field
              prepend-icon="mdi-account"
              label="Usuario"
              type="text"
              class="mb-6"
              v-model="User"
            ></v-text-field>

            <v-text-field
              prepend-icon="mdi-lock"
              label="Contraseña"
              type="password"
              v-model="Pass"
              v-on:keyup.enter="Session()"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            dark
            color="red"
            width="200"
            class="btn-design"
            @click="Session(), setInicio()"
          >
            INICIAR SESION
          </v-btn>
        </v-card-actions>
        <div class="forgotten-password">
          <v-alert
            v-show="show"
            color="orange"
            dense
            dismissible
            elevation="8"
            type="info"
            >¡Verifica tu usuario y contraseña!</v-alert
          >
          <forgottenPassword></forgottenPassword>
        </div>
      </v-card>
    </div>
  </body>
</template>

<script>
import forgottenPassword from "@/components/dialogs/forgottenPassword.vue";
import axios from "axios";

export default {
  name: "Landing",
  components: {
    forgottenPassword,
  },
  data() {
    return {
      show: false,
      User: "",
      Pass: "",
      AlumnoD: [],
      userData: [],
    };
  },
  methods: {
    Session() {
      this.show = false;
      axios
        .get(
          "https://xicoclass.online/Alumno.php?User=" +
            this.User +
            "&Pass=" +
            this.Pass
        )
        .then((r) => {
          this.AlumnoD = r.data;
          if (this.AlumnoD.length == 1) {
            console.log(this.AlumnoD);
            window.sessionStorage.setItem(
              "id_alumno",
              this.AlumnoD[0]["id_alumno"]
            );
            window.sessionStorage.setItem("nombre", this.AlumnoD[0]["nombre"]);
            window.sessionStorage.setItem("appPat", this.AlumnoD[0]["appPat"]);
            window.sessionStorage.setItem("appMat", this.AlumnoD[0]["appMat"]);
            window.sessionStorage.setItem(
              "fechaNac",
              this.AlumnoD[0]["fechaNac"]
            );
            window.sessionStorage.setItem(
              "usuario",
              this.AlumnoD[0]["usuario"]
            );
            window.sessionStorage.setItem(
              "id_grado",
              this.AlumnoD[0]["id_grado"]
            );
            window.location.href = "/home";
          } else {
            this.show = true;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    guardarID() {
      //window.sessionStorage.setItem('idUsuario',1); // AQUI VA EL ID DE USUARIO
      // window.sessionStorage.getItem('idUsuario');
      //window.sessionStorage.removeItem('idUsuario');
    },
    setInicio() {
      localStorage.selectedNavTab = 1;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");
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
.degradado {
  background: linear-gradient(120deg, #2980b9, #8e44ad);
  height: 100vh;
  opacity: 0.6;
}
.right {
  font-family: "Montserrat";
  color: white;
  font-size: 20px;
  position: absolute;
  top: 2%;
  right: 20px;
}

@media screen and (min-width: 800px) {
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    height: 600px;
    background: white;
    border-radius: 20px;
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
  }
}

.center h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}

.btn-design {
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.login-form {
  margin-top: 50px;
}

.descripcion-text {
  text-align: center;
  font-size: 14px !important;
}
.forgotten-password {
  margin-top: 30px;
  text-align: center;
  font-size: 16px !important;
}
</style>
