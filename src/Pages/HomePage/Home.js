import {Button, Container,Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header/Header'
import { HomeStyle } from './HomeStyle';
import homeMeet from "../../Assets/Images/homeMeet.jpg"
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <>
        <Header />
        <Container maxWidth="lg" sx={HomeStyle.mainContainer}>
            <Paper  sx={HomeStyle.homebg}>
            </Paper>
            <Typography variant="h1" align='center' sx={HomeStyle.homeText}>
                We Specialize in Strategy, Design & Marketing
            </Typography>

            <Grid  container sx={HomeStyle.letsMeet}>
                <Grid item sm={6} xs={12} my={4} sx={HomeStyle.letsMeetText} >
                    <Typography variant='h3' color="green" mx={12} align="right">
                        Let's Meet
                    </Typography>
                    <Typography variant="subtitle1" color="black" mx={12} my={4}>
                    I'm a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    </Typography>
                    <Button variant='contained' color="success" sx={HomeStyle.booknowbtn}>
                        Book Now
                    </Button>
                </Grid>
                <Grid item sm={6} xs={12} sx={HomeStyle.letsMeetImgGrid}>
                    <img src={homeMeet} alt="letsMeetImage" style={{width:"100%", height:"100%"}} />
                </Grid>
            </Grid>

            <Grid container>
                    <Grid item lg={12}>
                        <Typography variant="h2" color="green" align="center" mt={8}>Work with US</Typography>
                        <Typography variant="h6"  color="black" align="center" my={4}>
                            We will provide you awesome strategies that make your product Famouse
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} px={4} sx={HomeStyle.workTitle}>
                            <Typography variant="h5" color="green" mt={4} sx={HomeStyle.workDetails}>Data Driven</Typography>
                            <Typography variant="body2" color="black" my={4}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nam totam eaque, voluptas repellat impedit sed delectus ad numquam necessitatibus
                            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} px={4} sx={HomeStyle.workTitle}>
                            <Typography variant="h5" color="green" mt={4} sx={HomeStyle.workDetails}>Innovation</Typography>
                            <Typography variant="body2" color="black" my={4}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nam totam eaque, voluptas repellat impedit sed delectus ad numquam necessitatibus
                            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} px={4} sx={HomeStyle.workTitle}>
                            <Typography variant="h5" color="green" mt={4} sx={HomeStyle.workDetails}>Creativity</Typography>
                            <Typography variant="body2" color="black" my={4}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nam totam eaque, voluptas repellat impedit sed delectus ad numquam necessitatibus
                            </Typography>
                    </Grid>
            </Grid> 
        </Container>
        <Footer/>
    </>
  )
}

export default Home