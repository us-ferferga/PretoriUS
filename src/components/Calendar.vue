<template>
  <QDate
    v-model="date"
    readonly
    color="primary" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const date = computed(() => {
  const currentDate = new Date();

  return `${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDate()}`;
});
</script>
