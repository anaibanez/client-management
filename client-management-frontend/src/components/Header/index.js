import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
    text-align: center;
    font-size: 1.7em;
    font-weight: bold;
    padding: 1em;
    margin-bottom: 1.5em; 
    background: #323232;
    color: white;
`;

const Header = ({ title }) => (
  <StyledHeader>
    {title}
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default Header;
