import { Notify } from 'quasar';
import { RouteLocationNormalized, RouteLocationRaw } from 'vue-router/auto';
import { userStore } from '@/store/user';

/**
 * Redirect the user to index page when attempting to access
 * a restricted pages
 */
export default function adminGuard(
  to: RouteLocationNormalized
): boolean | RouteLocationRaw {
  if (!userStore.currentUser && to.name !== '/login') {
    return { path: '/login', replace: true };
  } else if (to.meta.access !== userStore.currentUser?.type && to.name !== '/') {
    Notify.create({
      message: 'No tienes permisos para acceder a esta página',
      color: 'red',
      type: 'negative'
    });

    return { path: '/', replace: true };
  }

  return true;
}
