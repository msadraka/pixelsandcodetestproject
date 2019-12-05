/* @flow */

import React from 'react';
import loadable from '@loadable/component';
import { Loading, ErrorBoundary } from 'components';

const FameDetail = loadable(() => import('./FameDetail'), {
  fallback: <Loading />
});

export default (props: { props: Object }) => (
  <ErrorBoundary>
    <FameDetail {...props} />
  </ErrorBoundary>
);
