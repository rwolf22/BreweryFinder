import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgCarousel from '../ImageSlider/ImageCarousel';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

import { useParams } from 'react-router-dom';
import image7 from '../../images/events.jpg'
import React, { useEffect, useState }from 'react';


const PaperStyle = { height:'auto', width:'95%', margin: "20px auto"}
const PaperStyle2 = { height:'auto', width:'90%', margin: "20px auto"}
const PaperStyle3 = { height:'auto', width:'60%', margin: "20px auto"}
const PaperStyle2Edited = { height:'auto', width:'30%', margin: "20px auto"}
const PaperStyle4 = { height:'auto', width:'99%', margin: "auto auto"}

export default function SelectedBreweryMenu(){

    const [beers, setBeers] = useState([]);
    const [breweries, setBreweries] = useState([]);
    const{ id } = useParams();
    function getBeers(){
        fetch("http://localhost:8081/beer/all")
        .then(res => res.json())
        .then((result) => {
            setBeers(result);
            }
        )
    }

    

    function getBreweries(){
        fetch("http://localhost:8081/brewery/all")
        .then(res => res.json())
        .then((result) => {
            setBreweries(result);
            }
        )
    }
 
    const filteredBrewery = breweries.filter(brewery =>{
        return brewery.breweryId == id;
    })

    console.log(filteredBrewery)
    
    

    const filterdBeers = beers.filter(beer =>{
        return beer.breweryId == id;
    })
    console.log(filterdBeers)


    useEffect(() =>{
        getBeers();
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
            {filteredBrewery.map(brewery =>(
                <div key ={brewery}>
                    NAME: {brewery.name} 
                    </div>
                    ))}
          </Typography>
                <Paper elevation={5} style = {PaperStyle2}>
                <Paper elevation={0} style = {PaperStyle3}>
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                        *BREWERY IMAGES GO HERE*
                    </Grid>

                    
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
            VIEW OUR BEERS BELOW  
          </Typography>
                    </Paper>
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Grid container direction="row" justifyContent="center" alignItems="center">   
                         {filterdBeers.map(beer =>(
                <Paper elevation={5} style = {PaperStyle2Edited} key = {beer}>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                    NAME: {beer.name} <br/><br/>
                    TYPE: {beer.type}<br/><br/>
                    ABV: {beer.abv}<br/><br/>
                    DESCRIPTION: {beer.description}<br/><br/>
                    IMG: {beer.image}
                    </Grid>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                        <Button>
                            <Typography variant='p'>
                                <Link to="/selectedBrewery"> ADD TO FAVORITES</Link>
                            </Typography>
                        </Button>
                    </Grid>
                </Paper>
            ))}
                    </Grid>
                  
                    </Grid>
                    
                    

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
