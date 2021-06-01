<template>
  <div class="misTramites">
    <v-container>
      <v-stepper
    v-model="e6"
    vertical
  >
    <v-stepper-step
      :complete="e6 > 1"
      step="1"
      class="titulo"
    >
      DATOS DEL ALUMNO
      <small class="subtitulo">A continuación escriba los datos del alumno</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Nombre/s"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Grupo"
      required
    ></v-select>

    
    
  </v-form>
      <v-btn
        color="primary"
        @click="e6 = 2"
      >
        Continuar
      </v-btn>
      <v-btn 
        color="grey lighten-2"
        @click="e6 = 1"
      >
        Cancelar
      </v-btn>
    
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2"
      class="titulo"
    >
      CURP
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e6 = 3"
      >
        Continuar
      </v-btn>
      <v-btn 
        color="grey lighten-2"
        @click="e6 = e6-1"
        >
        Cancelar
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3"
      class="titulo"
    >
      COMPROBANTE DE DOMICILIO
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e6 = 4"
      >
        Continuar
      </v-btn>
      <v-btn
        color="grey lighten-2"
        @click="e6 = e6-1"
        >
        Cancelar
      </v-btn>
    </v-stepper-content>

    <v-stepper-step 
    step="4"
    class="titulo"
    >
      INE/IDENTIFICACIÓN DE PADRE O TUTOR
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e6 = 1"
      >
        Continue
      </v-btn>
      <v-btn
        color="grey lighten-2"
        @click="e6 = e6-1"
      >
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>
  </v-container>
  </div>
</template>

<script>
  export default {
    name:"misTramites",
    data: () => ({
      e6:1,
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        /* 
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
         */
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
      ],
      select: null,
      items: [
        'Grupo 1',
        'Grupo 2',
        'Grupo 3',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");

/* Propiedades de Caracteres */
.titulo{
  font-family: "Montserrat";
  font: weight 800px;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.01px;
  color: white;
}
.subtitulo {
  font-family: "Montserrat";
  font-weight: 600px;
  font-size: 28px;
  line-height: 40px;
  color: #00000098;
}


</style>
