import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//components
import Users from './users';
import UserNewProfile from './users/UserNewProfile';
import UserProfile from './users/UserProfile';
import TopBar from './_shared/TopBar';
import FooterBar from './_shared/FooterBar';
//react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.container}>
        <TopBar />
        <Switch>
          <Route path='/user/newuser'>
            <UserNewProfile />
          </Route>
          <Route path='/user/:id'>
            <UserProfile />
          </Route>
          <Route path='/'>
            <Users />
          </Route>
        </Switch>
        <FooterBar />
      </div>
    </Router>
  );
};

export default App;
