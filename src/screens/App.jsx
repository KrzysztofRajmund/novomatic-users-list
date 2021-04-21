import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//components
import Users from './users';
import TopBar from './_shared/TopBar';
import FooterBar from './_shared/FooterBar';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TopBar />
      <Users />
      <FooterBar />
    </div>
  );
};

export default App;
