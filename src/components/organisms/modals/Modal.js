import React from 'react'
import Modal from '@material-ui/core/Modal';
import Form from '../../molecules/form/Form'
import Fade from '@material-ui/core/Fade';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const CustomModal = ({ useStyles, open, handleClose, Backdrop }) =>{
  const classes = useStyles();


return (
  <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
  <Fade in={open}>
 
<div className={classes.paper}>
    <h2 id="transition-modal-title">Contact Me.</h2>
    <hr />
<Form/>
</div>
</Fade>
<hr />
<LinkedInIcon fontSize="large"/>
<TwitterIcon fontSize="large" />
</Modal>
)
}

export default CustomModal;