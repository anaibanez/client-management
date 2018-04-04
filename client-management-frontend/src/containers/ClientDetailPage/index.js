import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Col, Grid, Row } from 'react-bootstrap';

import { getClientDetail } from './selectors';
import { getFetch } from '../App/selectors';
import injectReducer from '../../utils/injects/injectReducer';
import injectSaga from '../../utils/injects/injectSaga';
import reducer from './reducer';
import saga from './saga/rootSagas';
import { getDetail } from './actions';
// eslint-disable-next-line import/no-named-as-default-member
import ClientDetail from './ClientDetail';
import LoadingIndicator from '../../components/LoadingIndicator';
import { CLIENT_DETAIL_FETCH_KEY } from '../App/fetchConstants';
import { getLiteral } from '../../utils/utilities';
import Icon from '../../components/Icon';


export class ClientDetailPage extends Component {
  constructor(props) {
    super(props);
    this.props.onGetDetail(this.props.match.params.id);
  }

  render() {
    const {
      fetch,
      detail,
    } = this.props;

    return (
      <Grid>
        {fetch[CLIENT_DETAIL_FETCH_KEY].fetching
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
                {detail && <ClientDetail
                  detail={detail}
                />}
              </Col>
            </Row>
          </Row>
        }
      </Grid>
    );
  }
}

ClientDetailPage.propTypes = {
  fetch: PropTypes.object,
  detail: PropTypes.object,
  onGetDetail: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  fetch: getFetch(),
  detail: getClientDetail(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetDetail: (id) => dispatch(getDetail(id)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'clientDetail', reducer });
const withSaga = injectSaga({ key: 'clientDetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ClientDetailPage);
