import * as React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';
import image from '../../images/neelicar.svg'
import { Box1 } from './style';

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 243,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
 
  padding: "32px",
  borderRadius: "10px",
  border: "1px",
 
};

export default function SpringModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Cancel</Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
      <Box1>
        <Fade in={open}>
          <Box sx={style}>
          <div className='image'>
            <img src={image}/>
          </div>
          <div className='para-1'>
          <p className='paragraph'>Are you Sure you want to cancel this order.<br/> After Cancel this order  you have 2 Warnings<br/> left after your account will Blocked</p>
          </div>
          <div className='main-button'>
            <button className='btn1'>Yes</button>
            <button className='btn2'>No</button>
          </div>
            {/* <Typography id="spring-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography> */}
            {/* <Typography id="spring-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
          </Box>
        </Fade>
        </Box1>
      </Modal>
    </div>
  );
}