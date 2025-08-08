import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const homescreenappPlugin = createPlugin({
  id: 'homescreenapp',
  routes: {
    root: rootRouteRef,
  },
});

export const HomescreenappPage = homescreenappPlugin.provide(
  createRoutableExtension({
    name: 'HomescreenappPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
