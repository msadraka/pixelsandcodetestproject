/* @flow */

import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { InputText, SubmitButton } from 'components/FormElements';
import { FORM_NAMES } from 'utils/constants';
import { isFill } from 'utils/validation';

import type { Connector } from 'react-redux';

type Props = {
  submitting: boolean,
  handleSubmit: Function
};

class LoginForm extends PureComponent<Props> {
  validate = {
    isFill: isFill()
  };

  render() {
    const { submitting, handleSubmit } = this.props;

    return (
      <form className="auth--form login">
        <div className="InputWrapper">
          <Field
            name="username"
            component={InputText}
            placeholder="Username"
            type="text"
            validate={[this.validate.isFill]}
          />
        </div>

        <div className="InputWrapper">
          <Field
            name="password"
            component={InputText}
            placeholder="Password"
            type="password"
            validate={[this.validate.isFill]}
          />
        </div>

        <div className="InputWrapper LeftRightComponent">
          <SubmitButton
            className="c-btn"
            label="Sign in"
            submitting={submitting}
            type="primary"
            onSubmit={handleSubmit}
          />
        </div>
      </form>
    );
  }
}

const connector: Connector<{}> = connect();
export default compose(
  withRouter,
  connector,
  reduxForm({
    form: FORM_NAMES.LOGIN_FORM
  })
)(LoginForm);
