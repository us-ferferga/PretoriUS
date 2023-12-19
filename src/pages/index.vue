<template>
  <h2 class="ma-5">
    Inicio
  </h2>
  <InicioOperaciones v-if="userStore.currentUser?.type === 'D.OPERACIONES'" />
  <InicioSeguridad v-else-if="userStore.currentUser?.type === 'J.SEGURIDAD'" />
  <InicioServicio v-else-if="userStore.currentUser?.type === 'J.SERVICIO'" />
</template>

<script setup lang="ts">
import { userStore } from '@/store/user';
</script>
