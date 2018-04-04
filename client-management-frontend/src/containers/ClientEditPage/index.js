import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Col, Grid, Row, Button } from 'react-bootstrap';
import { createStructuredSelector } from 'reselect';

import { getClientUpdate } from './selectors';
import { getFetch } from '../App/selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer';
import saga from './saga/rootSagas';
import { getClient, changeField, updateClient } from './actions';
import ClientForm from '../ClientForm';
import LoadingIndicator from '../../components/LoadingIndicator';
import { CLIENT_FETCH_KEY } from '../App/fetchConstants';
import { getLiteral } from '../../utils/utilities';
import Icon from '../../components/Icon';


export class ClientEditPage extends Component {
  constructor(props) {
    super(props);
    this.props.onGetClient(this.props.match.params.id);
  }

  render() {
    const {
      fetch,
      client,
      onChangeField,
      onUpdateClient,
    } = this.props;
    return (
      <Grid>
        {fetch[CLIENT_FETCH_KEY].fetching
          ? <LoadingIndicator />
          : <Row>
            <Row>
              <Col md={8}>
                <div className="pull-right">
                  <Icon name="angle-double-left" />
                  <Button onClick={() => this.props.history.push('/clients')} bsStyle="link">{getLiteral('common.goBack')}</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                {client && <ClientForm
                  fields={client}
                  changeField={onChangeField}
                  submitAction={onUpdateClient}
                  textButton={'client.save'}
                />}
              </Col>
            </Row>
          </Row>
        }
      </Grid>
    );
  }
}

ClientEditPage.propTypes = {
  fetch: PropTypes.object,
  client: PropTypes.object,
  onGetClient: PropTypes.func,
  onChangeField: PropTypes.func,
  onUpdateClient: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  fetch: getFetch(),
  client: getClientUpdate(),
});


export function mapDispatchToProps(dispatch) {
  return {
    onGetClient: (id) => dispatch(getClient(id)),
    onChangeField: (value) => dispatch(changeField(value)),
    onUpdateClient: (client) => dispatch(updateClient(client)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'clientUpdate', reducer });
const withSaga = injectSaga({ key: 'clientUpdate', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ClientEditPage);
