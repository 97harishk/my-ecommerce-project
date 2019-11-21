import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import reducer from './store/index'
import {createStore, applyMiddleware, compose} from 'redux'
import Carts from './containers/Carts/Carts';
import Orders from './containers/Orders/Orders';
import ContactsUs from './containers/ContactsUs/ContactsUs';
import thunk from 'redux-thunk'
import WishLists from './containers/WishLists/WishLists';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import Products from './containers/Products/Products';
import ProductDetails from './containers/ProductDetails/ProductDetails';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path='/contacts' component={ContactsUs} />
              <Route path='/orders' component={Orders} />
              <Route path='/cart' component={Carts} />
              <Route path='/wishlist' component={WishLists} />
              <Route path='/sign-in' component={SignIn} />
              <Route path='/sign-up' component={SignUp} />
              <Route path='/products' component={Products} />
              <Route path='/productdetails/:id' component={ProductDetails} />
              <Route exact path='/' component={Home} />         
            </Switch>
          </Layout>
        </BrowserRouter>
    </Provider>

  );
}

export default App;
