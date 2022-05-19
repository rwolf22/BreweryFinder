import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgCarousel from '../ImageSlider/ImageCarousel';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';



const PaperStyle = { height:'auto', width:'95%', margin: "20px auto"}
const PaperStyle2 = { height:'auto', width:'90%', margin: "20px auto"}
const PaperStyle3 = { height:'auto', width:'60%', margin: "20px auto"}
const PaperStyle2Edited = { height:'500px', width:'40%', margin: "20px auto"}
const PaperStyle4 = { height:'97% ', width:'98%', margin: "auto auto"}

export default function SelectedBreweryEvents(){
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
            *BREWERY NAME GOES HERE*
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
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Paper elevation={5} style = {PaperStyle2Edited}>
                    <Paper elevation={5} style = {PaperStyle4}>
                    <Typography variant="h5"
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
                        EVENT NAME: 
                    </Typography>
                    <p> 
                    EVENT DATE : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamation
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
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
                                <Link to="/selectedBrewery"> ADD TO FAVORITES</Link>
                            </Typography>
                        </Button>
                    </Grid>
                    </Paper>
                    </Paper>
                    <Paper elevation={5} style = {PaperStyle2Edited}>
                    <Paper elevation={5} style = {PaperStyle4}>
                    <Typography variant="h5"
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
                        EVENT NAME: 
                    </Typography>
                    <p> 
                    EVENT DATE : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamation
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
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
                                <Link to="/selectedBrewery"> ADD TO FAVORITES</Link>
                            </Typography>
                        </Button>
                    </Grid>
                    </Paper>
                    </Paper>
                    <Paper elevation={5} style = {PaperStyle2Edited}>
                    <Paper elevation={5} style = {PaperStyle4}>
                    <Typography variant="h5"
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
                        EVENT NAME: 
                    </Typography>
                    <p> 
                    EVENT DATE : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamation
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
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
                                <Link to="/selectedBrewery"> ADD TO FAVORITES</Link>
                            </Typography>
                        </Button>
                    </Grid>
                    </Paper>
                    </Paper>
                    <Paper elevation={5} style = {PaperStyle2Edited}>
                    <Paper elevation={5} style = {PaperStyle4}>
                    <Typography variant="h5"
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
                        EVENT NAME: 
                    </Typography>
                    <p> 
                    EVENT DATE : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamation
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
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
                                <Link to="/selectedBrewery"> ADD TO FAVORITES</Link>
                            </Typography>
                        </Button>
                    </Grid>
                    </Paper>
                    </Paper>
                    <Paper elevation={5} style = {PaperStyle2Edited}>
                    <Paper elevation={5} style = {PaperStyle4}>
                    <Typography variant="h5"
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
                        EVENT NAME: 
                    </Typography>
                    <p> 
                    EVENT DATE : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
                    </p>
                    <p>
                    EVENT INFO : 
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamation
                        fasdfa
                        sdf
                        Afd
                        a
                        df
                        a
                        defamationa
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
                                <Link to="/selectedBrewery"> ADD TO FAVORITES</Link>
                            </Typography>
                        </Button>
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
