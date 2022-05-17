import axios from 'axios'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import { baseUrl } from '../../Shared/baseUrl'
import PageAppBar from '../Pages/Appbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import Paper from '@mui/material/Paper';
import { Container } from 'reactstrap'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';



const PaperStyle = {Padding: '50px 20px', height:'70vh', width:450, margin: "20px auto"}
const AvatarStyle = {backgroundColor: '#1976d2'}

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        }
        
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        const data = {username: this.state.username, password: this.state.password, confirmPassword: this.state.confirmPassword, role: 'USER'}
        if(this.state.password === this.state.confirmPassword){
            axios.post(baseUrl + "/register", data)
        }else{
            alert("Password and Confirm Password must match!!!");
            <Alert severity="error">This is an error alert — check it out!</Alert>
        }
    }

    render(){
        return(
            <div>
                <PageAppBar/>
                <Grid>
                <Paper elevation={10} style = {PaperStyle}>
                <Grid  align="center">
                         <br/>
                <Avatar style = {AvatarStyle}><LockIcon/></Avatar>
                <br/>
                <h2>Create Account</h2>
                
                <br/>
                
                <TextField style = {{width: 300}}  label ="Username" placeholder ="Username" type="text" id="username" 
                    name="username"  v-model="user.username" variant="standard" 
                    onChange={this.handleInputChange} required />
                    <br/>

                <TextField  style = {{width: 300}} label ="Password" placeholder ="Password" type ="password" id="password"
                    name="password"   v-model="user.password" variant="standard" 
                    onChange={this.handleInputChange} required />
                    <br/>
                <TextField  style = {{width: 300}} label ="Confirm Password" placeholder ="Confirm Password" type ="password" id="password-confirm"
                name="confirmPassword"   v-model="user.password" variant="standard" 
                onChange={this.handleInputChange} required />

                <br/>
                <Stack  spacing={2} direction="column">
                <br/> 
                <Box textAlign='center'>
                <Button style = {{ width: 300}} variant="contained" type="submit" onClick={this.handleSubmit}> Sign in</Button>
                </Box>
                <Typography> Already Have an Account? 
                    <Link to="/login"> Sign in Here</Link>
                </Typography>
                
                </Stack>
                </Grid>
                </Paper> 
                </Grid>
            </div>
        )
    }
}

export default Register;