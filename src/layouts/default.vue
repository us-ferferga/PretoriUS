<template>
  <QLayout>
    <QHeader
      elevated>
      <QToolbar>
        <RouterLink
          v-slot="{ navigate }"
          to="/"
          custom>
          <QToolbarTitle
            class="cursor-pointer"
            @click="navigate">
            <QAvatar>
              <img :src="logo" />
            </QAvatar>
            PretoriUS
            <span
              v-if="mode"
              class="text-subtitle1">{{ ` · ${mode}` }}
            </span>
          </QToolbarTitle>
        </RouterLink>
        <QSeparator />
        <b v-if="userStore.currentUser?.dni">{{ userStore.currentUser.dni }}</b>
        <QBtn
          v-if="userStore.currentUser"
          class="ma-5"
          label="Cerrar sesión"
          color="red"
          @click="userStore.logoutUser" />
      </QToolbar>
    </QHeader>
    <QPageContainer>
      <PageView />
    </QPageContainer>
  </QLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import logo from '@/assets/img/logo.png';
import { userStore } from '@/store/user';

const mode = computed(() => {
  switch (userStore.currentUser?.type) {
    case 'D.OPERACIONES': {
      return 'Director de operaciones';
    }
    case 'J.SEGURIDAD': {
      return 'Jefe de seguridad';
    }
    case 'J.SERVICIO': {
      return 'Jefe de servicio';
    }
  // No default
  }
});
</script>
