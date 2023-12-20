<template>
  <PageTemplate>
    <template #leftHeader>
      Nuevo Cliente
    </template>
    <template #leftContent>
      <div class="min-w-xl">
        <QInput
          v-model="nombreEmpresa"
          class="ma-2"
          outlined
          label="Nombre de la empresa"
          :rules="rules" />
        <QSelect
          v-model="razonSocial"
          class="ma-2"
          outlined
          label="Razón social"
          :rules="rules"
          :options="Object.values(RazonesSociales)" />
        <QInput
          v-model="domicilio"
          class="ma-2"
          outlined
          :rules="rules"
          label="Domicilio social" />
        <QInput
          v-model="cif"
          class="ma-2"
          outlined
          :rules="rules"
          label="CIF" />
        <QInput
          v-model="telefono"
          class="ma-2"
          type="number"
          outlined
          :rules="rules"
          label="Teléfono de la empresa" />
        <QSelect
          v-model="metodoPago"
          class="ma-2"
          outlined
          :rules="rules"
          label="Método de pago"
          :options="Object.values(MetodoPago)" />
        <QInput
          v-model="cuentaBancaria"
          class="ma-2"
          outlined
          :rules="rules"
          label="Número de cuenta bancaria"
          :disable="metodoPago !== 'Transferencia Bancaria'" />
      </div>
    </template>
    <template #rightContent>
      <div class="min-w-xl">
        <QCheckbox
          v-model="autenticacionBancaria"
          class="ma-2"
          label="Autenticación bancaria"
          :disable="metodoPago !== 'Transferencia Bancaria'" />
        <QInput
          v-model="nombreContacto"
          class="ma-2"
          outlined
          :rules="rules"
          label="Nombre de contacto" />
        <QInput
          v-model="telefonoContacto"
          class="ma-2"
          type="number"
          outlined
          :rules="rules"
          label="Teléfono de contacto" />
        <QInput
          v-model="nombreAdministrador"
          class="ma-2"
          outlined
          :rules="rules"
          label="Nombre del administrador" />
        <QInput
          v-model="telefonoAdministrador"
          class="ma-2"
          type="number"
          outlined
          :rules="rules"
          label="Teléfono del Administrador" />
        <div class="flex justify-center mt-5">
          <QBtn
            label="Crear"
            @submit="() => {
              clientStore.addClient({
                nombreEmpresa,
                razonSocial: razonSocial ?? 'S.A',
                domicilio,
                cif,
                telefono: telefono ?? -1,
                cuentaBancaria: cuentaBancaria,
                metodoPago: metodoPago ?? 'Transferencia Bancaria',
                autenticacionBancaria,
                nombreContacto,
                telefonoContacto: telefonoContacto ?? -1,
                nombreAdministrador,
                telefonoAdministrador: telefonoAdministrador ?? -1
              });
              $router.back();
            }" />
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
import { ref } from 'vue';
import { clientStore } from '@/store/clients';

enum MetodoPago {
  Transferencia = 'Transferencia Bancaria',
  Confirming = 'Confirming',
  Cuaderno19 = 'Cuaderno 19'
}

enum RazonesSociales {
  SA = 'S.A',
  SL = 'S.L'
}

const rules = [
  (val: string): boolean | string => val && val.length > 0 || 'Este campo no puede estar vacío'
];

const nombreEmpresa = ref('');
const razonSocial = ref<RazonesSociales>();
const domicilio = ref('');
const cif = ref('');
const telefono = ref<number>();
const cuentaBancaria = ref('');
const metodoPago = ref<MetodoPago>();
const autenticacionBancaria = ref(false);
const nombreContacto = ref('');
const telefonoContacto = ref<number>();
const nombreAdministrador = ref('');
const telefonoAdministrador = ref<number>();
</script>
