import axios from 'axios'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


const AvatarStyle = {backgroundColor: '#2E3B55'}
const PaperStyle = { height:'auto', width:'95%', margin: "20px auto"}
const PaperStyle2 = { height:'auto', width:'90%', margin: "20px auto"}
const PaperStyle3 = { height:'auto', width:'60%', margin: "20px auto"}
const PaperStyle2Edited = { height:'500px', width:'96%', margin: "20px auto"}
const PaperStyle4 = { height:'98%', width:'98%', margin: "5px auto"}
const PaperStyle2Events = { height:'auto', width:'96%', margin: "20px auto"}
const PaperStyle4Events = { height:'98%', width:'98%', margin: "5px auto"}
class MyBreweries extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            address: '',
            descrption: '',
            image: ''
        }
        
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    

    handleSubmit = () => {
        const data = {ownerid: 2, name: this.state.name, address: this.state.address, descrption: this.state.descrption, image: this.state.image}
            fetch("http://localhost:8081/brewery/create",{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(() =>{
            console.log("new brewery added.")
        })
            console.log(data)
    }

    render(){
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
            BREWERY DASHBOARD
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
            Manage & Create Your Breweries
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
            CREATE A BREWERY
          </Typography>
                    <Grid container direction="row" justifyContent="center" alignItems="center">   
                    <form>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter Brewery Name" 
                    label="Brewery Name" variant="outlined"id="name"  name="name"
                     fullWidth 
                     onChange={this.handleInputChange} required />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter Brewery Address" id="address" name="address"
                    label="Brewery Address" variant="outlined" fullWidth  
                    onChange={this.handleInputChange} required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField  placeholder="Enter Brewery Image" name="image" id='image'
                     label="Brewery Image" variant="outlined" fullWidth  
                     onChange={this.handleInputChange} required/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Brewery Description"  name="description" id='description'
                    multiline rows={4} placeholder="Enter Brewery Descriptioon" 
                    variant="outlined" fullWidth  
                    onChange={this.handleInputChange} required/>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" 
                    color="primary" fullWidth onClick={this.handleSubmit}> Add Brewery</Button>
                  </Grid>
  
                </Grid>
              </form>

                        
                    </Grid>
                    </Paper>
                    </Paper>
                    <Paper elevation={5} style = {PaperStyle2Events}>
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
                    <p>
                        BREWERY INFO : 
                        fasdfaf
                        addTokenf
                    </p>
                    <p> 
                    BREWERY INFO :  
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    BREWERY INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                        <Button>
                            <Typography variant='p'>
                                <Link to="/MyBrewery/Manage">  MANAGE BREWERY</Link>
                            </Typography>
                        </Button>
                    </Grid>
                    </Paper>
                    <Paper elevation={5} style = {PaperStyle4}>
                    <p>
                    BREWERY INFO : 
                        fasdfaf
                        addTokenf
                    </p>
                    <p> 
                    BREWERY INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    BREWERY INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                        <Button>
                            <Typography variant='p'>
                                <Link to="/MyBrewery/Manage"> MANAGE BREWERY</Link>
                            </Typography>
                        </Button>
                    </Grid>
                    </Paper>
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
}

export default MyBreweries;