import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgCarousel from '../ImageSlider/ImageCarousel';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState }from 'react';
import Button from '@mui/material/Button';
import SelectedBrewery from './SelectedBreweryHome';
import axios from 'axios'
import { baseUrl } from '../../Shared/baseUrl'
import {Link} from 'react-router-dom'


const PaperStyle = { height:'auto', width:'95%', margin: "20px auto"}
const PaperStyle2 = { height:'auto', width:'90%', margin: "20px auto"}
const PaperStyle3 = { height:'auto', width:'60%', margin: "20px auto"}
const PaperStyle4 = { height:'auto', width:'99%', margin: "auto auto"}




export default function FavoriteBeers(props){
    
    const [beers, setBeers] = useState([]);
    function getBeers(){
        fetch("http://localhost:8081/beer/favorites/" + props.props +"/all")
        .then(res => res.json())
        .then((result) => {
            setBeers(result);
            }
        )
    }

    useEffect(() =>{
        getBeers();
    },[])

    
    function removeBeer(beerName){
        console.log("Removed Brewery")
        axios.delete(baseUrl + "/beer/favorites/" + props.props + "/add/" + beerName)
    }

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
            {props.props}`s Beer List
            
          </Typography>
                <Paper elevation={0} style = {PaperStyle2}>
                <Paper elevation={0} style = {PaperStyle3}>
                  
                    </Paper>
                    <Paper elevation={5} style = {PaperStyle2}>
                        <br/>
                    <Paper elevation={0} style = {PaperStyle4}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        >
                    {beers.map(beer =>(
                <Paper elevation= {9} style = {{width:'40%' , margin:'10px', padding: "15px", textAlign: "center"}} key ={beer.breweryId}>
                    
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                        <Button onClick ={()=> removeBeer(beer.name)}>
                        <Typography
                            variant="p"
                            noWrap
                            justifyContent="center"
                            sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            color: '#2E3B55',
                            }}
                        > 
                                REMOVE FROM FAVORITES
                            </Typography>
                        </Button> 
                        
                    </Grid>
                    NAME: {beer.name} <br/><br/>
                    type: {beer.type}<br/><br/>
                    description: {beer.description}<br/><br/>
                    abv: {beer.abv}<br/><br/>
                    image: {beer.image}<br/><br/>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                        <Button>
                        <Typography
                            variant="p"
                            noWrap
                            justifyContent="center"
                            sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            color: '#2E3B55',
                            }}
                        >
                                
                            <Link
                                to={{
                                    pathname: `/selectedbrewery/${beer.breweryId}`,
                                }}
                                >
                                VISIT
                                </Link>
                            </Typography>
                        </Button> 
                        
                    </Grid>
                    

                </Paper>
            ))}
            </Grid>
            <br/>
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
