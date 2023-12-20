<template>
  <PageTemplate v-if="empresa">
    <template #leftHeader>
      {{ empresa.nombreEmpresa }} {{ empresa.razonSocial }}
    </template>
    <template #leftContent>
      <QCard>
        <QCardSection class="min-w-xl">
          <div class="text-h6">
            Datos
          </div>
        </QCardSection>
        <QCardSection class="flex flex-col">
          <div>
            <b>Domicilio social: </b>{{ empresa.domicilio }}
          </div>
          <div>
            <b>CIF: </b>{{ empresa.cif }}
          </div>
          <div>
            <b>Teléfono de empresa: </b>{{ empresa.telefono }}
          </div>
          <br />
          <div>
            <b>Método de pago: </b>{{ empresa.metodoPago }}
          </div>
          <div v-if="empresa.cuentaBancaria">
            <b>Número de cuenta bancaria: </b>{{ empresa.cuentaBancaria }}
          </div>
          <div>
            <b>Autenticación bancaria: </b>{{ empresa.autenticacionBancaria ? 'Sí' : 'No' }}
          </div>
          <br />
          <div>
            <b>Nombre de contacto: </b>{{ empresa.nombreContacto }}
          </div>
          <div>
            <b>Teléfono de contacto: </b>{{ empresa.telefonoContacto }}
          </div>
          <br />
          <div>
            <b>Nombre administrador: </b>{{ empresa.nombreAdministrador }}
          </div>
          <div>
            <b>Teléfono administrador: </b>{{ empresa.telefonoAdministrador }}
          </div>
        </qcardsection>
      </QCard>
    </template>
    <template #rightContent>
      <ContentCard
        :content="lugares"
        add-link="/places/add"
        item-link="/places/[id]" />
    </template>
  </PageTemplate>
</template>

<route lang="yaml">
meta:
  access: 'D.OPERACIONES'
</route>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router/auto';
import { clientStore } from '@/store/clients';
import { placeStore } from '@/store/places';

const route = useRoute<'/clients/[id]'>();

const empresa = computed(() => {
  return clientStore.clients.find((i) => i.id === route.params.id);
});
const lugares = computed(() => {
  return placeStore.places.filter((i) => i.empresaId === empresa.value?.id)
    .map((i) => ({
      text: i.nombre,
      id: i.id
    }));
});
</script>
