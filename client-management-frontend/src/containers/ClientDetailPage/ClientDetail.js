import React from 'react';
import PropTypes from 'prop-types';
import { Col, Panel, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { getLiteral } from '../../utils/utilities';
import Map from '../../components/Map';


const myClientDetail = ({ className, detail = {} }) => {
  const { address = { geo: {} }, company = {} } = detail;
  const { lat, lng } = address.geo;
  const latitude = parseFloat(lat, 10);
  const longitude = parseFloat(lng, 10);
  return (<div className={className}>
    <Col md={8}>
      <Panel>
        <Panel.Heading>{getLiteral('client.detail')}</Panel.Heading>
        <Panel.Body className="panel-body">
          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.name')}</dt>
            <dd className="col-md-6">{detail.name}</dd>
          </dl>

          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.username')}</dt>
            <dd className="col-md-6">{detail.username}</dd>
          </dl>

          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.email')}</dt>
            <dd className="col-md-6">{detail.email}</dd>
          </dl>

          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.phone')}</dt>
            <dd className="col-md-6">{detail.phone}</dd>
          </dl>

          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.website')}</dt>
            <dd className="col-md-6">{detail.website}</dd>
          </dl>
        </Panel.Body>
      </Panel>
      {address && <Panel>
        <Panel.Heading>{getLiteral('client.address')}</Panel.Heading>
        <Panel.Body className="panel-body">
          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.address.street')}</dt>
            <dd className="col-md-6">{address.street}</dd>
          </dl>

          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.address.suite')}</dt>
            <dd className="col-md-6">{address.suite}</dd>
          </dl>

          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.address.city')}</dt>
            <dd className="col-md-6">{address.city}</dd>
          </dl>

          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.address.zipcode')}</dt>
            <dd className="col-md-6">{address.zipcode}</dd>
          </dl>
          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.address.geo.lat')}</dt>
            <dd className="col-md-6">{address.geo.lat}</dd>
          </dl>

          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.address.geo.lng')}</dt>
            <dd className="col-md-6">{address.geo.lng}</dd>
          </dl>

          {!isNaN(latitude) && !isNaN(longitude) && <Row>
            <Col md={12}>
              <Map
                geo={{ lat: latitude, lng: longitude }}
                isMarkerShown
              />
            </Col>
          </Row>
          }
        </Panel.Body>
      </Panel>}
      {company && <Panel>
        <Panel.Heading>{getLiteral('client.company')}</Panel.Heading>
        <Panel.Body className="panel-body">
          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.company.name')}</dt>
            <dd className="col-md-6">{company.name}</dd>
          </dl>

          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.company.catchPhrase')}</dt>
            <dd className="col-md-6">{company.catchPhrase}</dd>
          </dl>

          <dl className="row">
            <dt className="col-md-6">{getLiteral('client.company.bs')}</dt>
            <dd className="col-md-6">{company.bs}</dd>
          </dl>
        </Panel.Body>
      </Panel>}
    </Col>
  </div>);
};

myClientDetail.propTypes = {
  className: PropTypes.string,
  detail: PropTypes.object,
};

export default styled(myClientDetail)`
    dt {
        text-align: right;
    }

    .panel-body {
        overflow-y: auto;
    }
`;
