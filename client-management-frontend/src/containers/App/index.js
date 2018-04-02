import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from '../../components/Header';
import ClientListPage from '../ClientListPage';
import ClientCreatePage from '../ClientCreatePage';
import Modal from '../../components/Modal';
import { getModalOptions } from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import reducer from './reducer/rootReducer';
import { hideModal } from './actions';
import ClientDetailPage from '../ClientDetailPage';
import ClientEditPage from '../ClientEditPage';
import { getLiteral } from '../../utils/utilities';

// eslint-disable-next-line react/prefer-stateless-function
export class App extends Component {
  render() {
    const { modals, onHideModal } = this.props;
    return (
      <div>
        <Header title={getLiteral('header.title')} />
        <div className="main-body">
          {modals.modals.map((modalOpt, index) => (<Modal key={index} hideModal={onHideModal} {...modalOpt} />))}
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/clients" />)} />
            <Route exact path="/clients" component={ClientListPage} />
            <Route exact path="/client/edit/:id" component={ClientEditPage} />
            <Route exact path="/client/create" component={ClientCreatePage} />
            <Route exact path="/client/detail/:id" component={ClientDetailPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  modals: PropTypes.object,
  onHideModal: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  modals: getModalOptions(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onHideModal: () => dispatch(hideModal()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'global', reducer });

export default withRouter(compose(
  withReducer,
  withConnect
)(App));

