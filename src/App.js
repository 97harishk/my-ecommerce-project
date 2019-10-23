import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Layout from './hoc/Layout/Layout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import reducer from './store/reducers/productRducers'
import {createStore, applyMiddleware, compose} from 'redux'
import Carts from './containers/Carts/Carts';
import Orders from './containers/Orders/Orders';
import ContactsUs from './containers/ContactsUs/ContactsUs';
import thunk from 'redux-thunk'
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
              <Route exact path='/' component={Home} />
            </Switch>
          </Layout>
        </BrowserRouter>
    </Provider>

  );
}

export default App;
