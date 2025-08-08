import { createDevApp } from '@backstage/dev-utils';
import { homescreenappPlugin, HomescreenappPage } from '../src/plugin';

createDevApp()
  .registerPlugin(homescreenappPlugin)
  .addPage({
    element: <HomescreenappPage />,
    title: 'Root Page',
    path: '/homescreenapp',
  })
  .render();
