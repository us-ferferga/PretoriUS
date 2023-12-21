<template>
  <PageTemplate v-if="lugar && turno">
    <template #leftHeader>
      {{ lugar.nombre }} - {{ turno.inicio.toLocaleString() }} a {{ turno.fin.toLocaleString() }}
    </template>
    <template #leftContent>
      <h4 class="text-h6">
        Vigilantes asignados
      </h4>
      <ContentCard
        :content="vigilantesAsignados"
        search-label="Buscar vigilantes asignados..." />
    </template>
    <template #rightContent>
      <div class="min-w-xl">
        <ContentCard
          :content="vigilantesDisponibles"
          search-label="Buscar vigilantes disponibles..." />
      </div>
    </template>
  </PageTemplate>
</template>

<route lang="yaml">
meta:
  access: 'J.SERVICIO'
</route>

<script setup lang="ts">
import { placeStore } from '@/store/places';
import { serviceStore } from '@/store/services';
import { turnStore } from '@/store/turns';
import { vigilantStore } from '@/store/vigilants';
import { computed } from 'vue';
import { useRoute } from 'vue-router/auto';

const route = useRoute<'/service_boss/places/[id]'>();

const turno = computed(() => {
  return turnStore.turns.find((t) => t.id === route.params.id);
});
const service = computed(() => {
  return serviceStore.services.find((s) => s.id === turno.value?.serviceId);
});
const lugar = computed(() => {
  return placeStore.places.find((p) => p.id === service.value?.lugarId);
});

const vigilantesAsignados = computed(() => {
  return turno.value?.vigilantes.map((v) => {
    const vigilante = vigilantStore.vigilants.find((vi) => vi.dni === v);

    return {
      id: v,
      text: `${vigilante?.nombre}`
    };
  }) ?? [];
});

const vigilantesDisponibles = computed(() => {
  const vigilantDnis = new Set(turnStore.turns.flatMap((t) => t.vigilantes));

  return vigilantStore.vigilants
    .filter((v) => !vigilantDnis.has(v.dni))
    .map((v) => {
      return {
        id: v.dni,
        text: `${v.nombre}`
      };
    });
});
</script>
