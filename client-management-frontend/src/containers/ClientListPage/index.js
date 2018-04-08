import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Col, Grid, Row } from 'react-bootstrap';
import styled from 'styled-components';

import {
  getData,
  getFetch,
} from './selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer';
import saga from './saga/rootSaga';
import Table from '../../components/Table';
import Icon from '../../components/Icon';
import { getDataTable, deleteClient } from './actions';
import columns from './columnsDefinition';
import { getLiteral } from '../../utils/utilities';


export class ClientListPage extends Component {
  constructor(props) {
    super(props);
    this.props.onGetDataTable();
  }

    goDetail = (id) => {
      this.props.history.push(`/client/detail/${id}`);
    }

    goEdit = (id) => {
      this.props.history.push(`/client/edit/${id}`);
    }

    goCreate = () => {
      this.props.history.push('/client/create');
    }

    actions = {
      goDetail: this.goDetail,
      goEdit: this.goEdit,
      delete: this.props.onDeleteClient,
    }

    render() {
      const {
        data,
        fetch,
      } = this.props;
      return (
        <Grid fluid className={this.props.className}>
          <Row>
            <Col>
              <div className="pull-right create">
                <Button onClick={() => this.goCreate()} bsStyle="success"><Icon name="plus-circle" />&nbsp;{getLiteral('client.create')}</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table
                columns={columns(this.actions)}
                data={data}
                loading={fetch.clients.fetching === true}
                pageSize={data.length ? data.length : 4}
                noDataText={getLiteral('common.noDataTable')}
              />
            </Col>
          </Row>
        </Grid>
      );
    }
}

ClientListPage.propTypes = {
  data: PropTypes.array,
  fetch: PropTypes.object,
  onGetDataTable: PropTypes.func,
  onDeleteClient: PropTypes.func,
  history: PropTypes.object,
  className: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  data: getData(),
  fetch: getFetch(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetDataTable: () => dispatch(getDataTable()),
    onDeleteClient: (id) => dispatch(deleteClient(id)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'clientList', reducer });
const withSaga = injectSaga({ key: 'clientList', saga });

const ClientListStyled = styled(ClientListPage)`
    div.create {
        margin-bottom: 10px;
    }
`;


export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ClientListStyled);
