import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogTitle, DialogContent, DialogActions } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide';
import Typography from 'material-ui/Typography';

const renderDetails = (details) => details.map((detail, idx) => <li key={idx}>{detail}</li>);

const Modal = ({
  children,
  type,
  title,
  message,
  details,
  hideModal,
  ...props
}) => {
  const titleText = title;
  const messageText = message;

  return (
    <Dialog
      {...props}
      transitionDuration={150}
      transition={Slide}
    >
      {titleText !== '' && (
        <DialogTitle>
          <span>
            {titleText}
          </span>
        </DialogTitle>
      )}
      <DialogContent>
        {children || (
          <div>
            {messageText && <Typography type="body2">{messageText}</Typography>}
            {Array.isArray(details) && details.length > 0 && (
              <Typography component="ul">{renderDetails(details)}</Typography>
            )}
          </div>
        )}
      </DialogContent>
      <DialogActions><Button onClick={() => hideModal()}>Close</Button></DialogActions>
    </Dialog>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  details: PropTypes.array,
  hideModal: PropTypes.func,
};

export default Modal;
