import React from 'react';
import PropTypes from 'prop-types';
import { Col, Form, Grid, Row, Button, Panel } from 'react-bootstrap';

import { getLiteral } from '../../utils/utilities';
import { InputForm } from '../../components/InputField';
import Map from '../../components/Map';


// eslint-disable-next-line react/prop-types
const CustomField = ({ fields, nameField, onChange, ...props }) => (
  <InputForm
    value={fields[nameField] ? fields[nameField] : ''}
    onChange={({ target }) => onChange({ [nameField]: target.value })}
    {...props}
  />
);

const ClientForm = ({
  fields = {},
  changeField,
  submitAction,
  textButton,
}) => {
  const latitude = parseFloat(fields['address.geo.lat']);
  const longitude = parseFloat(fields['address.geo.lng']);
  return (
    <Form
      inline
      onSubmit={(e) => {
        e.preventDefault();
        submitAction({
          ...fields,
        });
      }}
    >
      <Grid>
        <Row>
          <Col md={8}>

            <Panel>
              <Panel.Heading>{getLiteral('client.detail')}</Panel.Heading>
              <Panel.Body className="panel-body">
                <CustomField
                  width={5}
                  inputWidth={7}
                  label={getLiteral('client.name')}
                  fields={fields}
                  nameField="name"
                  onChange={changeField}
                />
                <CustomField
                  width={5}
                  inputWidth={7}
                  label={getLiteral('client.username')}
                  fields={fields}
                  nameField="username"
                  onChange={changeField}
                />
                <CustomField
                  width={5}
                  inputWidth={7}
                  label={getLiteral('client.email')}
                  fields={fields}
                  nameField="email"
                  onChange={changeField}
                />
                <CustomField
                  width={5}
                  inputWidth={7}
                  label={getLiteral('client.phone')}
                  fields={fields}
                  nameField="phone"
                  onChange={changeField}
                />
                <CustomField
                  width={5}
                  inputWidth={7}
                  label={getLiteral('client.website')}
                  fields={fields}
                  nameField="website"
                  onChange={changeField}
                />

              </Panel.Body>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={8}>

            <Panel>
              <Panel.Heading>{getLiteral('client.address')}</Panel.Heading>
              <Panel.Body className="panel-body">
                <CustomField
                  width={5}
                  inputWidth={7}
                  label={getLiteral('client.address.street')}
                  fields={fields}
                  nameField="address.street"
                  onChange={changeField}
                />
                <CustomField
                  width={5}
                  inputWidth={7}
                  label={getLiteral('client.address.suite')}
                  fields={fields}
                  nameField="address.suite"
                  onChange={changeField}
                />
                <CustomField
                  width={5}
                  inputWidth={7}
                  label={getLiteral('client.address.city')}
                  fields={fields}
                  nameField="address.city"
                  onChange={changeField}
                />
                <CustomField
                  width={5}
                  inputWidth={7}
                  label={getLiteral('client.address.zipcode')}
                  fields={fields}
                  nameField="address.zipcode"
                  onChange={changeField}
                />
                <CustomField
                  width={5}
                  inputWidth={7}
                  type="number"
                  label={getLiteral('client.address.geo.lat')}
                  fields={fields}
                  nameField="address.geo.lat"
                  onChange={changeField}
                />
                <CustomField
                  width={5}
                  inputWidth={7}
                  type="number"
                  label={getLiteral('client.address.geo.lng')}
                  fields={fields}
                  nameField="address.geo.lng"
                  onChange={changeField}
                />
                {!isNaN(latitude) && !isNaN(longitude) && <Row>
                  <Col md={12}>

                    <Map
                      geo={{ lat: latitude, lng: longitude }}
                      isMarkerShown
                      onMark={(e) => {
                        changeField({ 'address.geo.lng': `${e.latLng.lng()}` });
                        changeField({ 'address.geo.lat': `${e.latLng.lat()}` });
                      }}
                    />
                  </Col>
                </Row>}
              </Panel.Body>
            </Panel>

          </Col>
        </Row>
        <Row>
          <Col md={8}>

            <Panel>
              <Panel.Heading>{getLiteral('client.company')}</Panel.Heading>
              <Panel.Body className="panel-body">
                <CustomField
                  width={6}
                  label={getLiteral('client.company.name')}
                  fields={fields}
                  nameField="company.name"
                  onChange={changeField}
                />
                <CustomField
                  width={6}
                  label={getLiteral('client.company.catchPhrase')}
                  fields={fields}
                  nameField="company.catchPhrase"
                  onChange={changeField}
                />
                <CustomField
                  width={6}
                  label={getLiteral('client.company.bs')}
                  fields={fields}
                  nameField="company.bs"
                  onChange={changeField}
                />

              </Panel.Body>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Button type="submit" className="pull-right">{getLiteral(textButton)}</Button>
          </Col>
        </Row>
      </Grid>
    </Form>
  );
};

ClientForm.propTypes = {
  fields: PropTypes.object,
  changeField: PropTypes.func,
  submitAction: PropTypes.func,
  textButton: PropTypes.string,
};

export default ClientForm;
