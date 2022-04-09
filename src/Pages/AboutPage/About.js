import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { AboutStyle } from './AboutStyle'
import { Box } from '@mui/system'
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
import team1 from "../../Assets/Images/team1.jpg"
import team2 from "../../Assets/Images/team2.jpg"
import team3 from "../../Assets/Images/team3.jpg"



const About = () => {
  return (
    <>
      <Header/>
        <Grid container mt={16}  direction="column" alignItems="center" justifyContent="center">
          <Grid item xs={10} sm={12}>
              <Typography variant="h3" color="green" align="center">
                About the Studio
              </Typography>
              <Box  sx={AboutStyle.aboutInfo}>
                <Typography variant="body2" color="initial" align="center" mt={5} paddingX={4} >
                  I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </Typography>
            </Box>
          </Grid> 
        </Grid>

        <Grid container my={8} pb={6} spacing={4} direction="row" alignItems="center" justifyContent="center" sx={AboutStyle.teambg}>
            <Grid item xs={10} sm={12} mb={3}>
              <Typography variant="h3" color="initial" align="center">Meet Our Team</Typography>
            </Grid>
            <Grid item  xs={10} sm={4}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={team1} />
                  <CardContent>
                    <Typography variant="h5" color="initial" align="center">Adrianne Flynn</Typography>
                    <Typography variant="subtitle2" color="initial" align="center">Founder & CEO</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={10} sm={4}>
            <Card>
                <CardActionArea>
                  <CardMedia component="img" image={team2} />
                  <CardContent>
                    <Typography variant="h5" color="initial" align="center">Tom Benson</Typography>
                    <Typography variant="subtitle2" color="initial" align="center">Head of Marketing</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={10} sm={4}>
            <Card>
                <CardActionArea>
                  <CardMedia component="img" image={team3} />
                  <CardContent>
                    <Typography variant="h5" color="initial" align="center">Sara Jhonson</Typography>
                    <Typography variant="subtitle2" color="initial" align="center">Design Lead</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
        </Grid>
        <Footer/>
    </>
  )
}

export default About