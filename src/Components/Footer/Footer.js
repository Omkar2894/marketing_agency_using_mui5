import { Grid, List, ListItem,Typography, Button, MenuList, MenuItem, ListItemIcon } from '@mui/material'
import React from 'react'
import { FooterStyle } from './FooterStyle'
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <>
        <Grid container sx={FooterStyle.footerbg} mt={8} p={4}>
            <Grid item xs={12} sm={12} >
                <Grid container>
                    <Grid item xs={12} sm={2} align="center">
                        <Typography variant="h6" color="white">TRADEMARK</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} align="center">
                            <List>
                                <ListItem sx={FooterStyle.menuAlign}>
                                    <Typography variant="h5" mb={1} color="white">Menu</Typography>
                                    <Button variant="text" component={NavLink} to="/" sx={FooterStyle.menuStyle}>Home</Button>
                                    <Button variant="text" component={NavLink} to="/works" sx={FooterStyle.menuStyle}>Works</Button>
                                    <Button variant="text" component={NavLink} to="/about" sx={FooterStyle.menuStyle}>About</Button>
                                    <Button variant="text" component={NavLink} to="/contact" sx={FooterStyle.menuStyle}>Contact</Button>
                                </ListItem>
                            </List>
                    </Grid>
                    <Grid item xs={12} sm={3} align="center">
                        <Typography variant="h5" color="white">Contact</Typography>
                        <Typography variant="subtitle1" mt={2} color="white" fontSize={16} >info@mysite.com</Typography>
                        <Typography variant="subtitle1" mt={1} color="white" fontSize={16} >123-456-7890</Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} align="center">
                        <Typography variant="h5" color="white">Address</Typography>
                        <Typography variant="subtitle1" mt={2} color="white" fontSize={16}>
                        500 Terry Francois St. <br/> San Francisco, CA <br/> 94158
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2} align="center">
                        <Typography variant="h5" color="white">Social</Typography>
                            <MenuList sx={FooterStyle.socialAlign}>
                                <MenuItem>
                                    <ListItemIcon>
                                        <FacebookIcon  sx={FooterStyle.icons}/>
                                    </ListItemIcon>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <LinkedInIcon  sx={FooterStyle.icons}/>
                                    </ListItemIcon>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <InstagramIcon sx={FooterStyle.icons}/>
                                    </ListItemIcon>
                                </MenuItem>
                            </MenuList>  
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default Footer