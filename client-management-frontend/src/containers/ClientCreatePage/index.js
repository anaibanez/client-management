import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Col, Grid, Row } from 'react-bootstrap';

import { getClientCreate } from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer';
import saga from './saga/rootSagas';
import { changeField, createClient, clearFields } from './actions';
import ClientForm from '../ClientForm';
import { getLiteral } from '../../utils/utilities';
import Icon from '../../components/Icon';


export class ClientCreatePage extends Component {
  constructor(props) {
    super(props);
    this.props.onClearFields();
  }

  render() {
    const {
      client,
      onChangeField,
      onCreateClient,
    } = this.props;
    return (
      <Grid fluid>
        <Row>
          <Row>
            <Col md={12}>
              <div className="pull-right">
                <Icon name="angle-double-left" />
                <Button onClick={() => this.props.history.push('/clients')} bsStyle="link">{getLiteral('common.goBack')}</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <ClientForm
                fields={client}
                changeField={onChangeField}
                submitAction={onCreateClient}
                textButton={'client.save'}
              />
            </Col>
          </Row>
        </Row>
      </Grid>
    );
  }
}

ClientCreatePage.propTypes = {
  client: PropTypes.object,
  onChangeField: PropTypes.func,
  onCreateClient: PropTypes.func,
  onClearFields: PropTypes.func,
  history: PropTypes.object,
};

export const mapStateToProps = createStructuredSelector({
  client: getClientCreate(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeField: (value) => dispatch(changeField(value)),
    onCreateClient: (client) => dispatch(createClient(client)),
    onClearFields: () => dispatch(clearFields()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'clientCreate', reducer });
const withSaga = injectSaga({ key: 'clientCreate', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ClientCreatePage);
