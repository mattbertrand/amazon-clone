import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Orders from './components/Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51JWs6FCHnHhiw4tMtGwaiyc2HGayS9BbXZ1fsQX5xauniSpt7ExHVnAVpbT3k39o8r4MRtGxPmsFiZRglDQ3WYnS00VcX1apae'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER is >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
       
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
