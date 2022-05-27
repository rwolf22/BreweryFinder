import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import React, { useEffect, useState }from 'react';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import axios from 'axios'


const PaperStyle = { height:'auto', width:'95%', margin: "20px auto"}
const PaperStyle2 = { height:'auto', width:'90%', margin: "20px auto"}
const PaperStyle3 = { height:'auto', width:'60%', margin: "20px auto"}
const PaperStyle2Edited = { height:'500px', width:'40%', margin: "20px auto"}
const PaperStyle4 = { height:'98%', width:'98%', margin: "5px auto"}
const PaperStyle2Events = { height:'auto', width:'40%', margin: "20px auto"}
const PaperStyle4Events = { height:'98%', width:'98%', margin: "5px auto"}

export default function MyBreweryManage(props){
  const{ id } = useParams();
    const [beers, setBeers] = useState([]);
    const [breweries, setBreweries] = useState([]);
    const [events, setEvents] = useState([]);

    const [name, setBeerName] = useState("");
    const [type, setBeerType] = useState("");
    const [abv, setBeerABV] = useState();
    const [image, setBeerImage] = useState("");
    const [description, setBeerDescription] = useState("");
    const breweryId = id;
    const [eventDate, seteventDate] = useState("");
    
    function getEvents(){
      fetch("http://localhost:8081/newsAndEvents/all")
      .then(res => res.json())
      .then((result) => {
          setEvents(result);
          }
      )
  }
  
    
    
    
    function getBeers(){
      fetch("http://localhost:8081/beer/all")
      .then(res => res.json())
      .then((result) => {
          setBeers(result);
          }
      )
  }
  const filterdBeers = beers.filter(beer =>{
    return beer.breweryId == id;
  })


  

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

function deleteBeerItem(beerId) {
  fetch("http://localhost:8080/beer/" + id + "/delete/" + beerId , {
      method: 'DELETE',
  })
      .then((response) => {
          return response.text();
      })
      .then((data) => {
        getBeers();
      })
}

  useEffect(() =>{
    getEvents();
    getBeers();
    getBreweries();
  },[])


const handleClick=(e) =>{
        e.preventDefault()
        const beer = {breweryId, name, type, abv, image, description}
      
        axios.post('http://localhost:8081/beer/create',
          {breweryId, name, type, abv, image, description}, 
        {headers: {
          'Authorization' : `Bearer ${props.props.token.token}`}
        })
}

const handleEventSubmit =(e) =>{
  e.preventDefault()
  axios.post('http://localhost:8081/newsAndEvents/create',
  {breweryId, name, eventDate, description}, 
{headers: {
  'Authorization' : `Bearer ${props.props.token.token}`}
})
 {console.log({breweryId, name, eventDate, description})}
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
            {filteredBrewery.map(brewery =>(
                <div key ={brewery}>
                    {brewery.name} DASHBOARD
                    </div>
                    ))} 
          </Typography>
                <Paper elevation={5} style = {PaperStyle2}>
                <Paper elevation={0} style = {PaperStyle3}>
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                        
                <Typography
            variant="h5"
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
            Edit & Mange Your Brewery
          </Typography>
                    </Grid>

                    
                    </Paper>
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Paper elevation={5} style = {PaperStyle2Edited}>
                    <Paper elevation={5} style = {PaperStyle4}>
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
            ADD ITEMS 
          </Typography>
                    <Grid container direction="row" justifyContent="center" alignItems="center">   
                    <form>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter Beer Name" label="Beer Name" variant="outlined" fullWidth value={name} onChange={(e) => setBeerName(e.target.value)} required />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter Beer Type" label="Beer Type" variant="outlined" fullWidth value={type} onChange={(e) => setBeerType(e.target.value)} required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField  placeholder="Enter Beer ABV" label="Beer ABV" variant="outlined" fullWidth  value={abv} onChange={(e) => setBeerABV(e.target.value)} required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField  placeholder="Enter Beer Image" label="Beer Image" variant="outlined" fullWidth value={image} onChange={(e) => setBeerImage(e.target.value)} required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Beer Description" multiline rows={4} placeholder="Enter Brewery Descriptioon" variant="outlined" fullWidth  value={description} onChange={(e) => setBeerDescription(e.target.value)} required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleClick}>Add Item</Button>
                  </Grid>
  
                </Grid>
              </form>

                        
                    </Grid>
                    </Paper>
                    </Paper>
                    <Paper elevation={5} style = {PaperStyle2Edited}>
                    <Paper elevation={5} style = {PaperStyle4}>
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
            ADD EVENTS
          </Typography>
                    <Grid container direction="row" justifyContent="center" alignItems="center">   
                    <form>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter Event Name" label="Event Name" variant="outlined" fullWidth  value={name} onChange={(e) => setBeerName(e.target.value)} required />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter Event Date" label="Event Date" variant="outlined" fullWidth required  value={eventDate} onChange={(e) => seteventDate(e.target.value)}/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Event Description" multiline rows={7} placeholder="Enter Event Descriptioon" variant="outlined" fullWidth value={description} onChange={(e) => setBeerDescription(e.target.value)} required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleEventSubmit} >Add Event</Button>
                  </Grid>
  
                </Grid>
              </form>

                        
                    </Grid>
                    </Paper>
                    </Paper>
                    </Grid>





                    <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="flex-start"
>
                    <Paper elevation={5} style = {PaperStyle2Events}>
                    <Paper elevation={0} style = {PaperStyle4Events}>
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
            MANAGE MENU
          </Typography>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                    {/* <img src={image7}></img> */}
                    {filterdBeers.map((beer,index) =>(
                              (
                <Paper elevation= {5} style = {PaperStyle4} key ={beer}>
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                    NAME: {beer.name} <br/><br/>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                        <Button onClick={()=> deleteBeerItem(beer.id) }>
                            <Typography variant='p'>
                            DELETE ITEM
                            </Typography>
                        </Button>
                    </Grid>
                    </Grid>

                </Paper>)
            ))}
                    
                    </Grid>
                    </Paper>
                    </Paper>


                    
                    <Paper elevation={5} style = {PaperStyle2Events}>
                    <Paper elevation={0} style = {PaperStyle4Events}>
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
            MANAGE EVENTS
          </Typography>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                    {/* <img src={image7}></img> */}
                    
                   
                    
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
