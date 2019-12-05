/* @flow */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { get } from 'lodash';
import { LoginForm } from 'components'
import StyleWrapper from './fameDetail.style';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { /* Link, */ withRouter } from 'react-router-dom';
import type { Connector } from 'react-redux';
import { load as loadFames } from 'actions/fames.action';



type Props = {
  history: Object,
  params: Object,
  fameDetail: Object,
  loadFames: Function
};

type State = {
  visibleModal: boolean,
  userId: ?string,
  query: string
};

// Export this for unit testing more easily
class HallOfFame extends PureComponent<Props, State> {

  componentDidMount() {
    const { params, loadFames: loadFamesPromise } = this.props;

    loadFamesPromise(params.id);
  }

  render() {

    const { fameDetail } = this.props;
    const datasource = get(fameDetail, 'data.data', {})

    return (
      <StyleWrapper>
        <Helmet title="Fame Detail" />
        <div className="avatar">
          <img src={datasource.image} alt={""} />
        </div>
        <div className="name">
          <h1>{datasource.name}</h1>
        </div>
        <div className="dob">
          <h3>{datasource.dob}</h3>
        </div>
      </StyleWrapper>
    );
  }
}


const connector: Connector<{}> = connect(
  state => ({
    fameDetail: state.fames.detail
  }),
  { loadFames }
);
export default compose(
  withRouter,
  connector
)(HallOfFame);
