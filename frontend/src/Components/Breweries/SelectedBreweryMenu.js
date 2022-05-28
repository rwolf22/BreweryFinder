import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImgCarousel from '../ImageSlider/ImageCarousel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState }from 'react';
import { baseUrl } from '../../Shared/baseUrl'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Description } from '@mui/icons-material';
import { height } from '@mui/system';



const PaperStyle = { height:'auto', width:'95%', margin: "20px auto"}
const PaperStyle2 = { height:'auto', width:'70%', margin: "20px auto"}
const PaperStyle3 = { height:'auto', width:'60%', margin: "20px auto"}
const PaperStyle2Edited = { minHeight: 350, width:'30%', margin: "20px auto"}
const PaperStyle4 = { height:'650px', width:'48%', margin: "auto auto"}

const LeaveStyle = { height:'50%', width:'80%', margin: "10px auto"}
const ReviewStyle = { height:'99%', width:'80%', margin: "10px auto"}

export default function SelectedBreweryMenu(props){

    const [beers, setBeers] = useState([]);
    const [breweries, setBreweries] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState();
    const [review, setReview] = useState("");
    const{ id } = useParams();
    const author = props.props.user.username;
    const beer_id = 1;
    const handleReviewClick=(e) =>{
        e.preventDefault()
      
        axios.post('http://localhost:8081/review/create',
          {beer_id, author, rating, review},
          {headers: {
            'Authorization' : `Bearer ${props.props.token.token}`}
          })
}


    function getBeers(){
        fetch("http://localhost:8081/beer/all")
        .then(res => res.json())
        .then((result) => {
            setBeers(result);
            }
        )
    }

    function getReviews(){
        fetch("http://localhost:8081/review/all")
        .then(res => res.json())
        .then((result) => {
            setReviews(result);
            }
        )
    
    }
    // const filteredReviews = reviews.filter(review =>{
    //     return review.beerId === 
    // })
    

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

    
    

    const filterdBeers = beers.filter(beer =>{
        return beer.breweryId == id;
    })


    useEffect(() =>{
        getBeers();
        getBreweries();
        getReviews();
    },[])

    function addToFavorites(beerName){
        axios.post(baseUrl + "/beer/favorites/" + props.props.user.username + "/add/" + beerName)
    }
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 13,
        height:'70%',
        pt: 2,
        px: 4,
        pb: 3,
      };
    
      const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };


      const [isReadMoreShown, setReadMoreShown] = useState(false);

      const toggleBtn = () =>{
          setReadMoreShown(prevState => !prevState)
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
                    <Grid container direction="column" justifyContent="center" alignItems="center" >
                    <Grid container direction="row" justifyContent="center" alignItems="center">   
                         {filterdBeers.map(beer =>(
                <Paper elevation={5} style = {PaperStyle2Edited} key = {beer}>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                    <Button onClick ={()=> addToFavorites(beer.name)}>
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
                                ADD TO FAVORITE
                            </Typography>
                        </Button>
                    </Grid>
                    
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                    NAME: {beer.name} <br/><br/>
                    TYPE: {beer.type}<br/><br/>
                    ABV: {beer.abv}<br/><br/>
                    {isReadMoreShown ? (beer.description) :  (beer.description).substr(0,180)}
                    <Button onClick={toggleBtn}>
                        {isReadMoreShown ? <Typography
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
                                READ LESS
                            </Typography> : <Typography
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
                                READ MORE
                            </Typography>} 
                        </Button><br/>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">   
                    <Button onClick={handleOpen}>REVIEWS</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}   
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Box sx={{ ...style, width: '1300px'}}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                >
                                 <Paper elevation={0} style = {PaperStyle4} >
                                 <Typography
                            variant="h3"
                            noWrap
                            justifyContent="center"
                            sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            color: '#2E3B55',
                            }}
                        > 
                                REVIEWS
                            </Typography>
                            <Paper elevation={0}>
                            {reviews.map((review, index) =>(
                                index < 6  &&  (
                                 <Paper elevation={5}  style = {ReviewStyle} key = {review}>
                                    NAME: {review.author} <br/>
                                    RATING: {review.rating} <br/>
                                    REVIEW: {review.review}
                                </Paper>)
                                    ))}

                            </Paper>
                                 </Paper>
                                 <Paper elevation={0} style = {PaperStyle4} >
                                 <Typography
                            variant="h3"
                            noWrap
                            justifyContent="center"
                            sx={{
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 900,
                            color: '#2E3B55',
                            }}
                        > 
                                LEAVE REVIEW
                            </Typography>
                            <Paper elevation={0} style={LeaveStyle}>
                            <Grid container direction="row" justifyContent="center" alignItems="flex-center">   
                    <form>
                            <Grid container spacing={1}>
                            
                            <Grid xs={12} item>
                                <TextField type="number" value={rating} onChange={(e) => setRating(e.target.value)} 
                                placeholder="Enter Rating" label="Rating" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Review" multiline rows={4} value={review} onChange={(e) => setReview(e.target.value)} 
                                placeholder="Enter Beer Review" variant="outlined" fullWidth  required />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleReviewClick} >Add Item</Button>
                            </Grid>
            
                            </Grid>
                        </form>

                    </Grid>

                            </Paper>
                                 </Paper>
                            </Grid>
                            </Box>
                        </Modal>
                    </Grid>
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
