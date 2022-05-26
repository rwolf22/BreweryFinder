import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState }from 'react';

const PaperStyle4 = { height:'98%', width:'98%', margin: "5px auto"}

const PaperStyle4Events = { height:'98%', width:'98%', margin: "5px auto"}

export default function MyBreweriesList(props){
    const [breweries, setBreweries] = useState([]);
    function getBreweries(){
        fetch("http://localhost:8081/brewery/all")
        .then(res => res.json())
        .then((result) => {
            setBreweries(result);
            }
        )
    }
   const filteredBreweries = breweries.filter(brewery =>{
    return brewery.ownerId === props.props;
    })

    useEffect(() =>{
        getBreweries();
        console.log(props.props)
    },[])


    return(
        <div>
            <Paper elevation={5} style = {PaperStyle4Events}>
                    <Typography
            variant="h2"
            noWrap
            component="a"
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
            MANAGE BREWERIES
          </Typography>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                    {/* <img src={image7}></img> */}
                    <Paper elevation={5} style = {PaperStyle4}>
                    {filteredBreweries.map(brewery =>(
                <Paper elevation={5} style = {PaperStyle4}><div key ={brewery}>
                    BREWERY NAME:<br/>{brewery.name}<Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                        <Button>
                            <Typography variant='p'>
                                <Link to="/MyBrewery/Manage">  MANAGE BREWERY</Link>
                            </Typography>
                        </Button>
                    </Grid>
                    </div></Paper>
                    ))}
                    </Paper>
                    </Grid>
                    </Paper>
        </div>
    )
}