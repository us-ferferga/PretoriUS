import { useTitle } from '@vueuse/core';
import { computed, watch } from 'vue';
import {
  createRouter,
  createWebHashHistory
} from 'vue-router/auto';
import metaGuard from './middlewares/meta';
import permissionGuard from './middlewares/permissions';
import { userStore } from '@/store/user';

const router = createRouter({
  history: createWebHashHistory()
});

/**
 * Middlewares
 */
router.beforeEach(metaGuard);
router.beforeEach(permissionGuard);

/**
 * Replaces the 'back' function, taking into account if there's a previous page or not.
 * If there's no previous page in history, we ensure we want to go home
 */
router.back = (): ReturnType<typeof router.back> => {
  const route = router.currentRoute;
  const leaveTransition = 'scroll-x-transition';

  /**
   * Play the same transition we do at RouterViewTransition.vue (scroll-x-reverse-transition)
   * but reversed, to play a different effect when going to the previous page.
   */
  if (!route.value.meta.transition) {
    route.value.meta.transition = {
      enter: 'scroll-x-reverse-transition',
      leave: leaveTransition
    };
  } else if (!route.value.meta.transition.leave) {
    route.value.meta.transition.leave = leaveTransition;
  }

  window.setTimeout(
    async () =>
      await router.replace(
        typeof router.options.history.state.back === 'string'
          ? router.options.history.state.back
          : '/'
      )
  );
};

/**
 * Handle page title changes
 */
const pageTitle = computed(() => {
  const title = router.currentRoute.value.meta.title?.trim();

  return title ? `${title} | PretoriUS` : 'PretoriUS';
});

useTitle(pageTitle);

watch(() => userStore.currentUser, async () => {
  await (userStore.currentUser ? router.replace('/') : router.replace('/login'));
});

export default router;
