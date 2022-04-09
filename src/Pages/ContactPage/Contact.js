import {Grid, FormControl, InputLabel, OutlinedInput, Container, TextField, Button, Typography } from '@mui/material'
import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { ContactStyle } from './ContactStyle'
import contactImg from "../../Assets/Images/contactImg.jpg"

const Contact = () => {
  return (
    <>
        <Header />
        <Container maxWidth="lg">
            <Typography variant="h3" align="center" mt={12} sx={ContactStyle.contactText}>Contact Us</Typography>
            <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            wrap="nowrap" 
            sx={ContactStyle.contactBorder} 
            >
            <Grid item xs={12} sm={6}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormControl color='success'>
                            <InputLabel htmlFor="firstName" color="success">First Name</InputLabel>
                            <OutlinedInput
                            id="firstName"
                            label="firstName"
                            color="success"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl color='success'>
                            <InputLabel htmlFor="lastName" color="success">Last Name</InputLabel>
                            <OutlinedInput
                            id="lastName"
                            label="lastName"
                            color="success"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl color='success'>
                            <InputLabel htmlFor="email" color="success">Email</InputLabel>
                            <OutlinedInput
                            id="email"
                            label="email"
                            color="success"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl color='success'>
                            <InputLabel htmlFor="phone" color="success">Phone</InputLabel>
                            <OutlinedInput
                            id="phone"
                            label="phone"
                            color="success"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl color='success' sx={ContactStyle.messageWidth}>
                        <TextField
                            id="msg"
                            label="Message"
                            multiline
                            rows={4}
                        />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button variant="contained" color="success">Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={contactImg} alt="letsMeetImage" style={{width:"100%", height:"100%"}} />
            </Grid>
            
            </Grid>
        </Container>
        <Footer />
    </>
  )
}

export default Contact