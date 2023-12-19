<template>
  <TransitionView :transition-key="route.meta.layout">
    <SuspenseView>
      <component :is="getLayoutComponent(route.meta.layout)" />
    </SuspenseView>
  </TransitionView>
</template>

<script setup lang="ts">
import { RouteMeta, useRoute } from 'vue-router/auto';
import DefaultLayout from '@/layouts/default.vue';
import LoginLayout from '@/layouts/login.vue';

const route = useRoute();

/**
 * Return the appropiate layout component according to the route's meta.layout property
 */
function getLayoutComponent(layout: RouteMeta['layout']): typeof DefaultLayout | typeof LoginLayout {
  return layout === 'login' ? LoginLayout : DefaultLayout;
}
</script>
