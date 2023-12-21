<template>
  <PageTemplate v-if="lugar && empresa">
    <template #leftHeader>
      {{ lugar.nombre }} - {{ empresa.nombreEmpresa }} {{ empresa.razonSocial }}
    </template>
    <template #leftContent>
      <QInput
        v-model="comentarios"
        readonly
        label="Comentarios"
        class="min-w-2xl"
        outlined
        type="textarea" />
    </template>
    <template #rightContent>
      <div class="min-w-xl">
        <ContentCard
          :content="turnos"
          search-label="Buscar turnos..." />
      </div>
    </template>
  </PageTemplate>
</template>

<route lang="yaml">
meta:
  access: 'J.SERVICIO'
</route>

<script setup lang="ts">
import { clientStore } from '@/store/clients';
import { placeStore } from '@/store/places';
import { serviceStore } from '@/store/services';
import { turnStore } from '@/store/turns';
import { printDate } from '@/utils/date';
import { computed, watchEffect } from 'vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute<'/service_boss/places/[id]'>();

const lugar = computed(() => {
  return placeStore.places.find((p) => p.id === route.params.id);
});
const empresa = computed(() => {
  return clientStore.clients.find((p) => p.id === lugar.value?.clientId);
});
const servicio = computed(() => serviceStore.services.find((s) => s.id === route.params.id));
const comentarios = computed(() => servicio.value?.comentarios);
const turnos = computed(() => {
  return turnStore.turns.filter((t) => t.serviceId === route.params.id)
    .map((t) => {
      let text = `${printDate(t.inicio)} - ${printDate(t.fin)}`;

      if (t.fin <= new Date()) {
        text += ' - Completado';
      } else if (t.vigilantes.length > 0) {
        text += ' - Con vigilantes';
      } else {
        text += ' - Sin vigilantes';
      }

      return {
        text,
        id: t.id
      };
    });
});

watchEffect(() => {
  const inicio = servicio.value?.inicio;
  const fin = servicio.value?.fin;

  if (inicio && fin) {
    route.meta.title = `Servicio del ${printDate(inicio)} al ${printDate(fin)}`;
  }
});
</script>
