import React from 'react';
import PropTypes from 'prop-types';
import { Col, ControlLabel, FormControl } from 'react-bootstrap';
import styled from 'styled-components';


const MyInputField = ({ className, width, inputWidth, label, value, onChange, error, errorMessage, ...props }) => (
  <div className={className}>
    <Col componentClass={ControlLabel} md={width} className="input-label">{label}</Col>
    <Col md={inputWidth || width}>
      <FormControl
        className="input-field"
        type="text"
        value={value}
        onChange={onChange}
        validationstate={error === true ? 'error' : null}
        {...props}
      />
    </Col>
    {error && <div>{errorMessage}</div>}
  </div>
);

MyInputField.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  inputWidth: PropTypes.number,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  value: PropTypes.any,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export const GenericInput = styled(MyInputField)`
    .input-label {
        text-align: right;
    }
    .input-field {
        text-align: left;
        width: 100%;
    }
`;

export const InputForm = GenericInput.extend`
    padding: 20px 0;
`;
