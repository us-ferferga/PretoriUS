<template>
  <div class="flex justify-end items-end">
    <QBtn
      v-if="userStore.currentUser"
      class="ma-5"
      label="Cerrar sesión"
      color="red"
      @click="userStore.logoutUser" />
  </div>

  <div class="flex justify-center items-center h-screen w-screen">
    <div class="h-full flex items-center">
      <PageView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { userStore } from '@/store/user';
</script>
