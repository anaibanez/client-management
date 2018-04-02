import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from './Tooltip';

const FieldWithTooltip = ({ id, message, children, ...props }) => (<span>
  {React.cloneElement(children, { 'data-tip': true, 'data-for': id })}
  <Tooltip
    id={id}
    {...props}
  >
    <div>{message}</div>
  </Tooltip>
</span>);

FieldWithTooltip.propTypes = {
  id: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.any,
};

export default FieldWithTooltip;

