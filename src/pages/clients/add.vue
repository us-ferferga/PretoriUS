<template>
  <PageTemplate>
    <template #leftHeader>
      Nuevo Cliente
    </template>
    <template #leftContent>
      <div class="min-w-xl">
      <QInput v-model="nombreEmpresa" class="ma-2" outlined label="Nombre de la empresa" />
      <QSelect v-model="razonSocial"  class="ma-2" outlined label="Razón social" :options="razonesSociales" />
      <QInput v-model="domicilio"  class="ma-2" outlined label="Domicilio social" />
      <QInput v-model="cif" class="ma-2" outlined label="CIF" />
      <QInput v-model="telefono" class="ma-2" outlined label="Teléfono de la empresa" />
      <QInput v-model="cuentaBancaria"  class="ma-2" outlined label="Número de cuenta bancaria" />
      <QSelect v-model="metodoPago" class="ma-2" outlined label="Método de pago" :options="metodosPago" />
      </div>
    </template>
    <template #rightContent>
      <div class="min-w-xl">
      <QCheckbox v-model="autenticacionBancaria" class="ma-2" outlined label="Autenticación bancaria" />
      <QInput v-model="nombreContacto" class="ma-2" outlined label="Nombre de contacto" />
      <QInput v-model="telefonoContacto" class="ma-2" outlined label="Teléfono de contacto" />
      <QInput v-model="nombreAdministrador" class="ma-2" outlined label="Nombre del administrador" />
      <QInput v-model="telefonoAdministrador" class="ma-2" outlined label="Teléfono del Administrador" />
      <div class="flex justify-center mt-5">
      <QBtn label="Crear" />
      </div>
      </div>
    </template>
  </PageTemplate>
</template>

<route lang="yaml">
meta:
  access: 'D.OPERACIONES'
</route>

<script setup lang="ts">
import { QCheckbox } from 'quasar';
import { ref } from 'vue';

const nombreEmpresa = ref('');
const razonSocial = ref('');
const domicilio = ref('');
const cif = ref('');
const telefono = ref('');
const cuentaBancaria = ref('');
const metodoPago = ref('');
const autenticacionBancaria = ref(false);
const nombreContacto = ref('');
const telefonoContacto = ref('');
const nombreAdministrador = ref('');
const telefonoAdministrador = ref('');


const razonesSociales = [
  'Sociedad Anónima', ' Sociedad Limitada'
];
const metodosPago = [
  'Transferencia', 'Efectivo'
];
</script>
