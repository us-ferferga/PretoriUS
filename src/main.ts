/**
 * Top-level await requires ES2022 (at least) as target and module
 * for TypeScript compiler (check tsconfig.json)
 * https://caniuse.com/mdn-javascript_operators_await_top_level
 */

import { createApp } from 'vue';
import Root from '@/App.vue';
/* eslint-disable @typescript-eslint/no-restricted-imports */
import { Quasar } from 'quasar';
import router from '@/plugins/router';
import quasarOptions from './plugins/quasar';
/* eslint-enable @typescript-eslint/no-restricted-imports */

/**
 * - GLOBAL STYLES -
 */
import '@/main.css';
import '@fontsource/jost';
import '@unocss/reset/normalize.css';
import '@unocss/reset/sanitize/assets.css';
import '@unocss/reset/sanitize/sanitize.css';
import '@unocss/reset/tailwind.css';
import 'quasar/dist/quasar.css';
import 'virtual:uno.css';


/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */
const app = createApp(Root);

app.use(router);
app.use(Quasar, quasarOptions);

await router.isReady();
app.mount('#app');
