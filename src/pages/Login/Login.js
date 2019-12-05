/* @flow */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { get } from 'lodash';
import { LoginForm } from 'components'
import StyleWrapper from './login.style';
import errorHandler from 'utils/errorHandler';
import { create as login } from 'actions/login.action';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { /* Link, */ withRouter } from 'react-router-dom';
import type { Connector } from 'react-redux';

type Props = {
  history: Object,
  location: Object,
  login: Function
};

type State = {
  visibleModal: boolean,
  userId: ?string,
  query: string
};

// Export this for unit testing more easily
class Login extends PureComponent<Props, State> {

  handleLogin = (data: Object) => {
    const {
      history: { push },
      login: loginPromise,
      location: { pathname },
    } = this.props;

    return loginPromise(data)
      .then(() => push(pathname !== '/' ? pathname : '/hallOfFame'))
      .catch(errorHandler);
  };
  
  render() {
   
    return (
      <StyleWrapper>
        <Helmet title="Login" />
        <LoginForm onSubmit={this.handleLogin} />
      </StyleWrapper>
    );
  }
}


const connector: Connector<{}> = connect(
  undefined,
  { login }
);
export default compose(
  withRouter,
  connector
)(Login);
