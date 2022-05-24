import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgCarousel from '../ImageSlider/ImageCarousel';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

import { useParams } from 'react-router-dom';
import React, { useEffect, useState }from 'react';

const PaperStyle = { height:'auto', width:'95%', margin: "20px auto"}
const PaperStyle2 = { height:'auto', width:'90%', margin: "20px auto"}
const PaperStyle3 = { height:'auto', width:'60%', margin: "20px auto"}
const PaperStyle2Edited = { height:'500px', width:'40%', margin: "20px auto"}
const PaperStyle4 = { height:'87% ', width:'98%', margin: "auto auto"}

export default function SelectedBreweryEvents(){

    const [events, setEvents] = useState([]);
    const [breweries, setBreweries] = useState([]);
    const{ id } = useParams();


    function getEvents(){
        fetch("http://localhost:8081/newsAndEvents/all")
        .then(res => res.json())
        .then((result) => {
            setEvents(result);
            }
        )
    }
    const filteredEvents = events.filter(event =>{
        return event.breweryId == id;
    })
    console.log(filteredEvents)

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

    useEffect(() =>{
        getEvents();
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
            VIEW OUR EVENTS BELOW  
          </Typography>
                    </Paper>
                    <Grid  direction="row" justifyContent="center"> 
                        {filteredEvents.map(event =>(
                    <div  key = {event}>
                        
                        <Paper elevation={5} style = {PaperStyle2Edited}><Typography variant="h5"
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
                        EVENT NAME:  {event.name}
                    </Typography>
                        <Paper elevation={5} style = {PaperStyle4}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                        DATE: {event.eventDate}<br/><br/>
                        DESCRIPTION: {event.description}
                        </Grid>
                    
                    </Paper>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                        <Button>
                            <Typography variant='p'>
                                <Link to="/selectedBrewery"> ADD TO FAVORITES</Link>
                            </Typography>
                        </Button>
                    </Grid>
                    </Paper>
                </div>
            ))}
                    
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
