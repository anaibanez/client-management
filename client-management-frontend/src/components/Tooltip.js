import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const Tooltip = ({
  children,
  delayShow = 300,
  effect = 'solid',
  under,
  place = under ? 'bottom' : 'right',
  type = 'dark',
  id,
  ...props
}) => (
  <ReactTooltip delayShow={delayShow} effect={effect} place={place} type={type} id={id} {...props}>
    {children}
  </ReactTooltip>
);

Tooltip.propTypes = {
  children: PropTypes.any,
  delayShow: PropTypes.number,
  effect: PropTypes.string,
  under: PropTypes.bool,
  place: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

export default Tooltip;
