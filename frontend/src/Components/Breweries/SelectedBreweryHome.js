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
const PaperStyle2Edited = { height:'500px', width:'500px', margin: "20px auto"}
const PaperStyle4 = { height:'98%', width:'98%', margin: "5px auto"}

export default function SelectedBrewery(){

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
                    NAME: {brewery.name} <br/><br/>
                    </div>
                    ))}
          </Typography>
                <Paper elevation={5} style = {PaperStyle2}>
                <Paper elevation={0} style = {PaperStyle3}>
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                        *BREWERY IMAGES GO HERE*
                    </Grid>

                    
                    <ImgCarousel/>
                   

                    
                    </Paper>
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Paper elevation={5} style = {PaperStyle2Edited}>
                    <Paper elevation={5} style = {PaperStyle4}>
                    <Typography
            variant="h2"
            noWrap
            component="a"
            href="/SelectedBrewery/menu"
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
            MENU 
          </Typography>
                    <Grid container direction="row" justifyContent="center" alignItems="center">   
                         {filterdBeers.map(beer =>(
                <Paper elevation= {6} style = {{textAlign: "center"}} key ={beer}>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                    NAME: {beer.name} <br/><br/>
                    </Grid>

                </Paper>
            ))}
                    </Grid>
                    </Paper>
                    </Paper>
                    <Paper elevation={5} style = {PaperStyle2Edited}>
                    <Paper elevation={5} style = {PaperStyle4}>
                    <Typography
            variant="h2"
            noWrap
            component="a"
            href="/SelectedBrewery/events"
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
            EVENTS 
          </Typography>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                    {/* <img src={image7}></img> */}
                        <Typography align='center'>
                        From our annual 4/05 Day celebration to an entire festival dedicated to our mixed fermentation sours, we believe in making memorable experiences while enjoying beer.
                        </Typography>
                        
                    </Grid>
                    </Paper>
                    </Paper>
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
