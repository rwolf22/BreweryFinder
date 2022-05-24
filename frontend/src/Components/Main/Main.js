import {Component} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import { addToken, deleteUser, fetchBreweries } from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Footer from '../Pages/Footer'
import ContactUs from '../Contact/Contact'
import TermsOfService from '../TOS/TermsOfService'
import PrivacyPolicy from '../Privacy/PrivacyPolicy'
import BreweryHome from '../Breweries/BreweryHome'
import SelectedBreweryMenu from '../Breweries/SelectedBreweryMenu'
import SelectedBreweryHome from '../Breweries/SelectedBreweryHome'
import SelectedBreweryEvents from '../Breweries/SelecttedBreweryEvents'
import MyBrewery from '../Breweries/MyBreweries'
import MyBreweryManage from '../Breweries/ManageMyBrewery'
import HomeAppbar from '../Pages/HomeAppbar'
import PageAppBar from '../Pages/Appbar'
import SBHome from '../Breweries/SBHome'

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user,
        breweries: state.breweries,
        beers: state.beers,
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())},
    fetchBreweries: () => { dispatch(fetchBreweries())},
});



class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchBreweries();
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }

    render(){
        
        return(
            <div>
                <HomeAppbar/>
                {this.props.token.token !== undefined ?
                        <div>
                            <PageAppBar/>
                            <Link to='/home'>Home | </Link>
                            <Link to='/login' onClick={this.handleLogout}>logout</Link> 
                            <Redirect to='/breweryHome'/>

                        </div>  
                    : 
                        <Link to='/login'> </Link>
                }
               
                <Switch> 
                    
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Route path='/contact' component={() => <ContactUs/>}/>
                    <Route path='/privacy' component={() => <PrivacyPolicy/>}/>
                    <Route path='/breweryhome' component={() => <BreweryHome/>}/>
                    <Route path='/MyBrewerys' component={() => <MyBrewery/>}/> 
                    <Route path='/:id/Menu' component={() => <SelectedBreweryMenu/>}/>
                    <Route path='/:id/OurEvents' component={() => <SelectedBreweryEvents/>}/>
                    <Route path="/:id" component={() => <SelectedBreweryHome/>}/>
                    <Route path='/MyBrewery/Manage' component={() => <MyBreweryManage/>}/>
                    <Route path='/terms-of-service' component={() => <TermsOfService/>}/>
                    <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Redirect to='/login'/>
                </Switch>
                <Footer/>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));