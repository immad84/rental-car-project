
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { Modell } from './style';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()
  const Login = (state) => {
    navigate('/login', { state })
  }
  const Home = (state) => {
    navigate('/profile', { state })
  }

  return (
    <div>
      <Button onClick={handleOpen}>Logout</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Modell>
          <Fade in={open}>
            <Box sx={style}>
              <div className='log-1'>
                <p className='logout'>Logout</p>
              </div>
              <div className='sure'>
                <p className='want'> Are You sure You want to <br />logout</p>
              </div>
              <div className='button-1'>
                <button type='submit' className='button' onClick={() => Login()}>Yes</button>
              </div>
              <div className='button-1'>
                <button type='submit' className='button-2' onClick={() => Home()}>No</button>
              </div>
            </Box>
          </Fade>
        </Modell>
      </Modal>
    </div>
  );
}
