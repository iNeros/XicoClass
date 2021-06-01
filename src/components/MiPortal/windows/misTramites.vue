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
  >   <!-- NOMBRE -->
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Nombre/s"
      placeholder="Nombre o nombres del alumno"
      required
    ></v-text-field>
    <!-- APELLIDO -->
    <v-text-field
      v-model="apellido"
      :rules="apellidoRules"
      label="Apellidos"
      placeholder="Apellidos del alumno"
      required
    ></v-text-field>
    <!-- SLIDER EDAD -->
    <v-slider
    v-model="age"
    :rules="ageRules"
    color="blue"
    label="Edad"
    hint="Desliza hasta llegar a tu edad"
    min="2"
    max="7"
    thumb-label
    ></v-slider>
    <!-- CORREO -->
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <!-- GRUPO -->
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Grupo"
      required
    ></v-select>
    
  </v-form>
      <v-btn
        :disabled="!valid"
        color="primary"
        @click="validate, e6 = 2"

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
      <small class="subtitulo">Suba el arcvhio(imagen o pdf) o escriba el CURP del alumno</small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >  
      <v-text-field
        v-model="curp"
        :rules="curpRules"
        label="Ingrese el CURP del alumno"
        placeholder="CURP del alumno"
        required
      ></v-text-field>
      </v-form>

      <v-file-input
        chips
        counter
        show-size 
        accept="image/*,.pdf"
        label="Subir Archivo"
      >        
      </v-file-input>

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
        v => !!v || 'Nombre es necesario',
        /* 
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
         */
      ],
      apellido: '',
      apellidoRules:[
        v => !!v || 'Apellido es necesario',
      ],
      age:null,
      ageRules:[

        v => v < 6 || '¡No te creo!',
        v => !!v || 'Edad es necesaria',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail es necesario',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser valido',
      ],
      select: null,
      items: [
        'Grupo 1',
        'Grupo 2',
        'Grupo 3',
      ],
      curp:'',
      curpRules:[
        v => (v && v.length == 18) || 'Ingrese un CURP valido'
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
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.01px;
}
.subtitulo {
  font-family: "Montserrat";
  font-weight: 800px;
  font-size: 22px;
  line-height: 40px;
}


</style>
