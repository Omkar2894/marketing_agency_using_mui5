import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Hidden from '@mui/material/Hidden'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { HeaderStyle } from './HeaderStyle'
import { IconButton, List, ListItem, SwipeableDrawer, Container } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] =useState(false)
  return (
    <>
       <AppBar position="fixed" sx={HeaderStyle.headerbg}>
         <Toolbar>
          <Container maxWidth="lg" sx={{display: 'flex'}}>  
           <Typography variant="h6" sx={HeaderStyle.menuAlign}>
             TRADEMARK
           </Typography>
           <Hidden smDown>
                <Button variant="text" component={NavLink} to="/" sx={HeaderStyle.menuStyle}>
                   Home
                </Button>
                <Button variant="text" component={NavLink} to="/works" sx={HeaderStyle.menuStyle}>
                   Works
                </Button>
                <Button variant="text" component={NavLink} to="/about" sx={HeaderStyle.menuStyle}>
                  About
                </Button>
                <Button variant="text" component={NavLink} to="/contact" sx={HeaderStyle.menuStyle}>
                  Contact
                </Button>
                <Button variant="text" component={NavLink} to="/login" sx={HeaderStyle.menuStyle}>
                <AccountCircle/> Login 
                </Button>
           </Hidden>
          </Container>
           <Hidden smUp>
              <IconButton>
                <MenuRoundedIcon onClick={()=> setOpen(true)} />
              </IconButton>
              <SwipeableDrawer anchor='right' open={open} >
                <ListItem>
                  <div>
                    <CloseRoundedIcon onClick={()=> setOpen(false)} />
                  </div>
                </ListItem>

                <List>
                  <ListItem onClick={()=> setOpen(false)}>
                    <Button variant="text" component={NavLink} to="/" sx={HeaderStyle.menuStyle}>
                        Home
                    </Button>
                  </ListItem>
                  <ListItem onClick={()=> setOpen(false)}>
                    <Button variant="text" component={NavLink} to="/works" sx={HeaderStyle.menuStyle}>
                        Works
                    </Button>
                  </ListItem>
                  <ListItem onClick={()=> setOpen(false)}>
                    <Button variant="text" component={NavLink} to="/about" sx={HeaderStyle.menuStyle}>
                        About
                    </Button>
                  </ListItem>
                  <ListItem onClick={()=> setOpen(false)}>
                    <Button variant="text" component={NavLink} to="/contact" sx={HeaderStyle.menuStyle}>
                        Contact 
                    </Button>
                  </ListItem>
                  <ListItem onClick={()=> setOpen(false)}>
                    <Button variant="text" component={NavLink} to="/login" sx={HeaderStyle.menuStyle}>
                      <AccountCircle/> Login
                    </Button>
                  </ListItem>
                </List>
              </SwipeableDrawer>
           </Hidden>
         </Toolbar>
       </AppBar>
    </>
  )
}

export default Header