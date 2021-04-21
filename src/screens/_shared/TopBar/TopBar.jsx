import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GroupIcon from '@material-ui/icons/Group';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#617D8B',
    color: '#FFFFFF',
    height: '60px',
  },
  icon: {
    fontSize: '50px',
    textAlign: 'center',
  },
  title: {
    textAlign: 'left',
  },
}));

export default function TopBar() {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.root}>
      <Container maxWidth='md'>
        <Toolbar>
          <GroupIcon className={classes.icon} />
          <Typography variant='h5' className={classes.title}>
            Users app
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
