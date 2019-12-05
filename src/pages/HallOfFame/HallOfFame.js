/* @flow */

import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { get } from 'lodash';
import { LoginForm } from 'components'
import StyleWrapper from './hallOfFame.style';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { /* Link, */ withRouter } from 'react-router-dom';
import type { Connector } from 'react-redux';
import { loadAll as loadAllFames } from 'actions/fames.action';
import { create as logout } from 'actions/logout.action';
import { SimpleTable } from 'components';
import { Button } from 'antd';
import errorHandler from 'utils/errorHandler';



type Props = {
  history: Object,
  location: Object,
  fames: Object,
  login: Object,
  loadAllFames: Function,
  logout: Function
};

type State = {
  visibleModal: boolean,
  userId: ?string,
  query: string
};

// Export this for unit testing more easily
class HallOfFame extends PureComponent<Props, State> {
  columns = [
    {
      title: 'Fame Name',
      dataIndex: 'name'
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dob'
    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (item) => {
        return (
          <div className="type">
            <img src={item} alt="" />

          </div>
        );
      }
    },
    {
      title: '',
      dataIndex: 'id',
      render: (item) => {
        return (
          <div className="type">
            <button onClick={() => (this.handleRow(item))}>View Details</button>

          </div>
        );
      }
    }
  ];


  componentDidMount() {
    const { history, login, loadAllFames: loadAllFamesPromise } = this.props;

    const success = get(login, 'data.data.success', false);

    if (success) {
      loadAllFamesPromise();
    } else {
      history.push(`/`);
    }

  }

  handleLogout = () => {
    const {
      history: { push },
      location: { pathname },
      logout: logoutPromise
    } = this.props;

    logoutPromise()
      .finally(() => push(pathname !== '/hallOfFame' ? pathname : '/'))
  }

  handleRow = (id: string) => {
    const { history } = this.props;
    history.push(`/fame-detail/${id}`);
  };
  
  render() {

    const { fames } = this.props;

    const datasource = get(fames, 'data.data.list', []);

    return (
      <StyleWrapper>
        <Helmet title="Hall of Fame" />
        <Button onClick={this.handleLogout} type='danger' >Logout</Button>
        <SimpleTable
          className="full-width history--table"
          dataSource={datasource || []}
          columns={this.columns}
          rowKey="id"
        />
      </StyleWrapper>
    );
  }
}


const connector: Connector<{}> = connect(
  state => ({
    fames: state.fames.all,
    login: state.login.all
  }),
  { loadAllFames, logout }
);
export default compose(
  withRouter,
  connector
)(HallOfFame);
