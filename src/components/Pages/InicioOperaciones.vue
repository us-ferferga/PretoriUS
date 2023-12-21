<template>
  <PageTemplate>
    <template #leftHeader>
      Clientes
    </template>
    <template #leftContent>
      <ContentCard
        :content="clientData"
        add-link="/operations_boss/clients/add"
        item-link="/operations_boss/clients/[id]"
        search-label="Buscar clientes..." />
    </template>
    <template #rightContent>
      <Calendar />
    </template>
  </PageTemplate>
</template>

<script setup lang="ts">
import { clientStore } from '@/store/clients';
import { computed } from 'vue';

const clientData = computed(() => {
  return clientStore.clients.map((i) => {
    return {
      id: i.id,
      text: `${i.nombreEmpresa} ${i.razonSocial}`
    };
  });
});
</script>
