import { useTheme } from '@emotion/react';
import { Box ,Typography, IconButton, List, ListItemText, Menu, MenuItem, ListItem } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ExpandMore, Facebook, Instagram, Twitter } from '@mui/icons-material';
import { useState } from 'react';
const Header = ({setmymode}) => {
  const theme=useTheme()

  const options = [
    'EN',
    'AR',
  
  ];
  
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

  

  return (
    
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",bgcolor:"#2B3445",Width:"100%"}}>
      

        <Box sx={{display:{xs:"none",md:"flex"},alignItems:"center",ml:"70px"}}>
          <Typography sx={{
            backgroundColor:"#db6363",
            width:"90px",
            height:"50px",
            borderRadius:"30px",
            textAlign:"center",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
// @ts-ignore
color:"#fff"
          }} variant="body1" color="initial">
Hot
          </Typography>
          <Typography sx={{textTransform:"capitalize",color:`#fff`,ml:"15px",cursor:"pointer"}} variant="h6" color="initial">
            free express shipping
          </Typography>
        </Box>




<Box sx={{display:"flex",alignItems:"center",marginRight:{xs:"auto",md:"70px"},marginLeft:{xs:"auto",md:null}}}>


  {theme.
// @ts-ignore
  palette.mode==="light"?<IconButton aria-label="" 
    onClick={() => {
      // @ts-ignore
      localStorage.setItem("currentmode",theme.palette.mode==="dark"?"light":"dark")
      // @ts-ignore
      setmymode(theme.palette.mode==="dark"?"light":"dark")
      }      
            }
  >
    <LightModeIcon sx={{color:"#fff"}}/>
  </IconButton>:
  <IconButton aria-label="" 
  onClick={() => {
    // @ts-ignore
    localStorage.setItem("currentmode",theme.palette.mode==="dark"?"light":"dark")
    // @ts-ignore
    setmymode(theme.palette.mode==="dark"?"light":"dark")
    }      
          }
>
  <DarkModeIcon/>
</IconButton>
  }
  


  <List
        component="nav"
        aria-label="Device settings"
        sx={{ color:"#fff" }}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText sx={{display:"flex",direction:"rtl",alignItems:"center",color:"#fff",cursor:"pointer",".MuiTypography-root":{color:"white"}}}
            secondary={options[selectedIndex]}
          >
            <ExpandMore sx={{display:"flex",alignItems:"center"}}/>
            </ListItemText>
        </ListItem>
      </List>
      <Menu
      sx={{color:"#fff"}}
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      <Box sx={{color:"#fff",display:"flex",alignItems:"center"}}>
      <Twitter />
      <Facebook sx={{ml:"10px"}}/>
      <Instagram sx={{ml:"10px"}}/>
      </Box>
      
</Box>












    </Box>
    
  );
}

export default Header;
