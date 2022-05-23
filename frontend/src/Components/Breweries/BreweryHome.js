import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgCarousel from '../ImageSlider/ImageCarousel';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState }from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import SelectedBrewery from './SelectedBreweryHome';


const PaperStyle = { height:'auto', width:'95%', margin: "20px auto"}
const PaperStyle2 = { height:'auto', width:'90%', margin: "20px auto"}
const PaperStyle3 = { height:'auto', width:'60%', margin: "20px auto"}
const PaperStyle4 = { height:'auto', width:'99%', margin: "auto auto"}




export default function BreweryHome(){
    
    const [breweries, setBreweries] = useState([]);

    function getBreweries(){
        fetch("http://localhost:8081/brewery/all")
        .then(res => res.json())
        .then((result) => {
            setBreweries(result);
            }
        )
    }

    useEffect(() =>{
        getBreweries();
    },[])



    return(
        <div>
            <>
            
            <Grid>
                
                <Paper elevation={0} style = {PaperStyle}>
                <Typography
            variant="h2"
            noWrap
            justifyContent="center"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#2E3B55',
              textDecoration: 'none',
            }}
          >
            DRINK WHERE YOUR BEER IS MADE
          </Typography>
                <Paper elevation={5} style = {PaperStyle2}>
                <Paper elevation={0} style = {PaperStyle3}>
                    <ImgCarousel/>
                   

                    <Typography
            variant="h2"
            noWrap
            justifyContent="center"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#2E3B55',
              textDecoration: 'none',
            }}
          >
            FIND A BREWERY NEAR YOU
          </Typography>
                    </Paper>
                    <Paper elevation={5} style = {PaperStyle2}>
                    <Paper elevation={5} style = {PaperStyle4}>
                    {breweries.map(brewery =>(
                <Paper elevation= {6} style = {{margin:'10px', padding: "15px", textAlign: "center"}} key ={brewery.breweryId}>
                    NAME: {brewery.name} <br/><br/>
                    ADDRESS: {brewery.address}<br/><br/>
                    description: {brewery.description}<br/><br/>
                    image: {brewery.image}<br/><br/>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                        <Button>
                            <Typography variant='p'>
                                
                                <Link to ="/${brewery.name}" > test</Link>
                            </Typography>
                        </Button>
                    </Grid>

                </Paper>
            ))}
                    </Paper>
                    </Paper>

                    <Grid  align="left">
                    <p>
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    </Grid>
                    </Paper>
                </Paper> 
            </Grid>
            </>
        </div>
    )
}
