<template>
  <PageTemplate>
    <template #leftHeader>
      Clientes
    </template>
    <template #leftContent>
      <ContentCard :content="testData" addLink="/clients/add" />
    </template>
    <template #rightContent>
      <Calendar />
    </template>
  </PageTemplate>
</template>

<script setup lang="ts">
const testData = [
  {
    id: 1,
    text: 'Lorem ipsum'
  },
  {
    id: 2,
    text: 'dolor'
  },
  {
    id: 2,
    text: 'sit'
  }
];
</script>
