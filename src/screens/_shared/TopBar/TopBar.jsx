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
    boxShadow: 'none',
    padding: '0px',
  },
  icon: {
    fontSize: '50px',
    margin: '0px 0px 0px -20px',
  },
  title: {
    letterSpacing: '0px',
    lineHeight: '28px',
    fontSize: '24px',
    margin: '0px 0px 0px 14px',
  },
}));

export default function TopBar() {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.root}>
      <Container maxWidth='md'>
        <Toolbar>
          <GroupIcon className={classes.icon} />
          <Typography className={classes.title}>Users app</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
