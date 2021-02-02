import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'hiweb-component',

  plugins: [
    sass({
      injectGlobalPaths: ['src/scss/main.scss'],
    }),
  ],

  bundles: [{ components: ['button-hiweb-component'] }],
  outputTargets: [
    {
      type: 'dist',
      buildDir: 'assets/build',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
