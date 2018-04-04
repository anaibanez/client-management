import React from 'react';
import { Col } from 'react-tooltip';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const ColMap = ({ className, children, ...props }) => (
  <Col className={className} {...props}>
    {children}
  </Col>
);

export default styled(ColMap)`
    height: '100vh';
    width: '100%'
`;

