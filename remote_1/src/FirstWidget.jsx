import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';


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

export const FirstWidget = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{maxWidth: '300px'}}>
     <CardContent>
      <Typography sx={{ fontSize: 14,  mb: 1.5  }} color="text.secondary" gutterBottom  textAlign='left'>
        First Widget
      </Typography>
      <Typography variant="body2" textAlign='left'>
        This is the new First Widget work from a remote application exposed with vite-plugin module federation 
      </Typography>
    </CardContent>
    <CardActions>
    <Link href="#" variant="body2" onClick={handleOpen}>
      See more ...
    </Link>
  
    </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          First Widget
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Nothing to see here. Its just an empty widget called First Widget. Its supposed to called some api and display data in a Table
          </Typography>
        </Box>
      </Modal>
      </Card>   
  );
}




export default FirstWidget

