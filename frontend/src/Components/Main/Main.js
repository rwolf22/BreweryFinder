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
import MyBreweryManage from '../Breweries/ManageMyBrewery'
import PageAppBar from '../Pages/Appbar'
import MyBreweries from '../Breweries/MyBrweriesClass'

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
                {this.props.token.token !== undefined ?
                        <div>
                            <PageAppBar/>
                            <Link to='/home'>Home | </Link>
                            <Link to='/login' onClick={this.handleLogout}>logout</Link> 
                            <Redirect to='/breweryHome'/>
                            <Route path='/breweryhome' component={() => <BreweryHome/>}/>

                        </div>  
                    : 
                        <Link to='/login'> </Link>
                }
               
                <Switch> 
                <Route path='/home' component={this.props.token.token !== undefined ? () => <Home/> : null}/>
                    <Route path='/login' component={() => <Login/>}/>
                    <Route path='/register'component={() => <Register/>}/>
                    <Route path='/contact' component={() => <ContactUs/>}/>
                    <Route path='/privacy' component={() => <PrivacyPolicy/>}/>
                    <Route path='/MyBrewery/Manage' component={() => <MyBreweryManage/>}/>
                    <Route path='/MyBreweries' component={() => <MyBreweries/>}/>
                    <Route path='/terms-of-service' component={() => <TermsOfService/>}/>
                    <Route path='/breweryhome' component={this.props.token.token === undefined ? () => null : null}/>
                    <Route path='/:id/Menu'  component={this.props.token.token !== undefined ? () => <SelectedBreweryMenu/> : null}/>
                    <Route path='/:id/OurEvents' component={this.props.token.token !== undefined ? () => <SelectedBreweryEvents/> : null}/>
                    <Route path="/:id" component={this.props.token.token !== undefined ? () => <SelectedBreweryHome/> : null}/>
                    <Redirect to='/login'/>
                </Switch>
                <Footer/>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));