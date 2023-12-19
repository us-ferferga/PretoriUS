<template>
  <img
    :src="banner"
    class="w-2xl pa-10"
    alt="Header image" />
  <QForm>
    <div class="flex justify-center flex-col">
      <QInput
        v-model="dni"
        outlined
        label="DNI" />
      <QInput
        v-model="password"
        outlined
        type="password"
        class="mt-2"
        label="Contraseña" />
      <QCheckbox
        v-model="remember"
        label="Mantener la sesión iniciada" />
      <QBtn
        class="mt-2"
        color="blue"
        rounded
        @click.prevent="submit">
        Iniciar sesión
      </QBtn>
    </div>
  </QForm>
</template>

<route lang="yaml">
meta:
  layout: login
</route>

<script setup lang="ts">
import { ref } from 'vue';
import banner from '@/assets/img/header.png';
import { userStore } from '@/store/user';

const dni = ref('');
const password = ref('');
const remember = ref(true);

/**
 * Submits the login data
 */
function submit(): void {
  userStore.loginUser(dni.value, password.value, remember.value);
}
</script>
