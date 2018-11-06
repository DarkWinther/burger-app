import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

global.BASEURL = "https://burger-server-3e616.firebaseio.com/"

const App = () => (
  <div>
    <BrowserRouter>
      <Layout>
          <Switch>
            <Route path="/Builder" component={BurgerBuilder} />
            <Redirect from="/" exact to="/Builder" />
            <Route path="/Orders" component={Orders} />
            <Route path="/Checkout" component={Checkout} />
          </Switch>
      </Layout>
    </BrowserRouter>
  </div>
)

export default App;
