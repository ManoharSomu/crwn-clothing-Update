import React from 'react';
import './App.css';
import {Switch,Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckOut from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.action';


class App extends React.Component{
  
  unsubscribeFromAuth = null;
  
  componentDidMount () {
    const {setCurrentUser} = this.props;
    auth.onAuthStateChanged( async userAuth => {

        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {
           this.props.setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              
            });
          });

          }                                                           
              setCurrentUser(userAuth); 
      })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

   
  render (){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  exact path='/checkout' component={CheckOut} />

          <Route exact path='/Signin' render={() => this.props.currentUser ?
             (<Redirect to ='/'  />): (<SignInAndSignUp />)} />

        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps =({user}) =>({
  currentUser:user.currentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,
  mapDispatchToProps)(App);
