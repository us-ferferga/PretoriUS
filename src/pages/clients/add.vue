<template>
  <PageTemplate>
    <template #leftHeader>
      Nuevo cliente
    </template>
    <template #leftContent>
      <div class="min-w-xl">
        <QForm
          ref="form1"
          greedy>
          <QInput
            v-model="nombreEmpresa"
            class="ma-2"
            outlined
            label="Nombre de la empresa"
            :rules="commonFormRules" />
          <QSelect
            v-model="razonSocial"
            class="ma-2"
            outlined
            label="Razón social"
            :rules="commonFormRules"
            :options="Object.values(RazonesSociales)" />
          <QInput
            v-model="domicilio"
            class="ma-2"
            outlined
            :rules="commonFormRules"
            label="Domicilio social" />
          <QInput
            v-model="cif"
            class="ma-2"
            outlined
            :rules="commonFormRules"
            label="CIF" />
          <QInput
            v-model="telefono"
            class="ma-2"
            type="number"
            outlined
            :rules="commonFormRules"
            label="Teléfono de la empresa" />
          <QSelect
            v-model="metodoPago"
            class="ma-2"
            outlined
            :rules="commonFormRules"
            label="Método de pago"
            :options="Object.values(MetodoPago)" />
          <QInput
            v-model="cuentaBancaria"
            class="ma-2"
            outlined
            :rules="commonFormRules"
            label="Número de cuenta bancaria"
            :disable="metodoPago !== 'Transferencia Bancaria'" />
        </QForm>
      </div>
    </template>
    <template #rightContent>
      <div class="min-w-xl">
        <QForm
          ref="form2"
          greedy>
          <QCheckbox
            v-model="autenticacionBancaria"
            class="ma-2"
            label="Autenticación bancaria"
            :disable="metodoPago !== 'Transferencia Bancaria'" />
          <QInput
            v-model="nombreContacto"
            class="ma-2"
            outlined
            :rules="commonFormRules"
            label="Nombre de contacto" />
          <QInput
            v-model="telefonoContacto"
            class="ma-2"
            type="number"
            outlined
            :rules="commonFormRules"
            label="Teléfono de contacto" />
          <QInput
            v-model="nombreAdministrador"
            class="ma-2"
            outlined
            :rules="commonFormRules"
            label="Nombre del administrador" />
          <QInput
            v-model="telefonoAdministrador"
            class="ma-2"
            type="number"
            outlined
            :rules="commonFormRules"
            label="Teléfono del Administrador" />
        </QForm>
        <div class="flex justify-center mt-5">
          <QBtn
            label="Crear"
            @click="async () => {
              const valid = await form1?.validate() && await form2?.validate();
              if (valid) {
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
              } else {
                Notify.create({
                  message: 'El formulario no ha pasado la validación',
                  color: 'red',
                  type: 'negative'
                });
              }
            }" />
        </div>
      </div>
    </template>
  </PageTemplate>
</template>

<route lang="yaml">
meta:
  title: Nuevo cliente
  access: 'D.OPERACIONES'
</route>

<script setup lang="ts">
import { clientStore } from '@/store/clients';
import { commonFormRules } from '@/store/globals';
import { Notify, QForm } from 'quasar';
import { ref } from 'vue';

enum MetodoPago {
  Transferencia = 'Transferencia Bancaria',
  Confirming = 'Confirming',
  Cuaderno19 = 'Cuaderno 19'
}

enum RazonesSociales {
  SA = 'S.A',
  SL = 'S.L'
}

const form1 = ref<QForm>();
const form2 = ref<QForm>();
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
