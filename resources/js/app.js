import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaApp } from '@inertiajs/inertia-react';

const app = document.getElementById('app');

render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={name =>
      import(`./Pages/${name}`).then(module => module.default)
    }
  />,
  app
);