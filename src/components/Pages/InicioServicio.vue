<template>
  <PageTemplate>
    <template #leftHeader>
      Servicios en proceso
    </template>
    <template #leftContent>
      <ContentCard
        :content="clientData"
        item-link="/service_boss/places/[id]"
        search-label="Buscar servicios..." />
    </template>
    <template #rightContent>
      <Calendar />
    </template>
  </PageTemplate>
</template>

<script setup lang="ts">
import { placeStore } from '@/store/places';
import { serviceStore } from '@/store/services';
import { computed } from 'vue';

const clientData = computed(() => {
  return placeStore.places
    .filter((p) => {
      return Boolean(serviceStore.services.some((s) => s.lugarId === p.id && s.inicio <= new Date() && s.fin >= new Date()));
    })
    .map((i) => {
      return {
        id: i.id,
        text: `${i.nombre}`
      };
    });
});
</script>
