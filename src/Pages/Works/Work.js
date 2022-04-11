import React from 'react'
import Grid from '@mui/material/Grid'
import { Paper, Typography, Container } from '@mui/material'
import Header from '../../Components/Header/Header'
import { WorkStyle } from './WorkStyle'
import work1 from "../../Assets/Images/work1.jpg"
import work2 from "../../Assets/Images/work2.jpg"
import work3 from "../../Assets/Images/work3.jpg"
import work4 from "../../Assets/Images/work4.jpg"
import work5 from "../../Assets/Images/work5.jpg"
import work6 from "../../Assets/Images/work6.jpg"
import work7 from "../../Assets/Images/work7.jpg"
import work8 from "../../Assets/Images/work8.jpg"
import work9 from "../../Assets/Images/work9.jpg"
import work10 from "../../Assets/Images/work10.jpg"
import work11 from "../../Assets/Images/work11.jpg"
import work12 from "../../Assets/Images/work12.jpg"
import Footer from '../../Components/Footer/Footer'

const Work = () => {
  return (
    <>
        <Header />
       <Grid container mt={16}  direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={12} mb={3}>
              <Typography variant="h2" color="green" align="center">Works</Typography>
              <Typography variant="h5" color="initial" align="center">Branding & Strategy</Typography>
        </Grid>          
       </Grid>
       <Container maxWidth="lg" sx={WorkStyle.gallaryStyle}>
       <Grid container spacing={4} direction="row" alignItems="center" justifyContent="center">
       {/* ====1st Row==== */}
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                <img src={work1} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                <img src={work2} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                 <img src={work3} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
        {/* ====2nd Row==== */}
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                <img src={work4} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                <img src={work5} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                 <img src={work6} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
        {/* ====3rd Row==== */}
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                <img src={work7} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                <img src={work8} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                 <img src={work9} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
        {/* ====4th Row==== */}
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                <img src={work10} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                <img src={work11} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
            <Paper elevation={8}>
                 <img src={work12} alt="letsMeetImage" style={{width:"100%", height:"15rem"}} />
            </Paper>
        </Grid>
         
       </Grid>
       </Container>

       <Footer/>
    </>
  )
}

export default Work