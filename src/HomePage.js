import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Components/home';
import Payment from './Payment';
import { Switch , Route} from 'react-router-dom';

const HomePage = (props) => (
  <MuiThemeProvider>
    <Switch>
      <Route exact path = "/" component={Home} />
      <Route path="/payment" component ={Payment}/>
    </Switch>
  </MuiThemeProvider>
);

export default HomePage;