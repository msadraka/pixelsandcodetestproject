/* @flow */

import React from 'react';
import loadable from '@loadable/component';
import { Loading, ErrorBoundary } from 'components';

const HallOfFame = loadable(() => import('./HallOfFame'), {
  fallback: <Loading />
});

export default (props: { props: Object }) => (
  <ErrorBoundary>
    <HallOfFame {...props} />
  </ErrorBoundary>
);
