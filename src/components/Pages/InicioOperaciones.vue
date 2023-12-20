<template>
  <PageTemplate>
    <template #leftHeader>
      Clientes
    </template>
    <template #leftContent>
      <ContentCard
        :content="clientData"
        add-link="/clients/add"
        item-link="/clients/[id]" />
    </template>
    <template #rightContent>
      <Calendar />
    </template>
  </PageTemplate>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { clientStore } from '@/store/clients';

const clientData = computed(() => {
  return clientStore.clients.map((i) => {
    return {
      id: i.id,
      text: `${i.nombreEmpresa} ${i.razonSocial}`
    };
  });
});
</script>
