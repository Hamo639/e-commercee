import { KeyboardArrowUp } from '@mui/icons-material';
import { Fab, useScrollTrigger, Zoom } from '@mui/material';
import React from 'react';

const Scrooltotop = () => {
  return (
    <Zoom  in={useScrollTrigger({threshold:200})}>
       <Fab onClick={() => {
         window.scrollTo(0,0)
       }
       } sx={{position:"fixed",bottom:{xs:"50px",md:"20px"},right:"10px"}} size="small" color="primary" aria-label="add">
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
}

export default Scrooltotop;
