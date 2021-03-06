import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    top: '100vh',
    left: '0',
    transform: 'translateY(-100%)',
    height: '40px',
    backgroundColor: '#E1E4E5',
    color: '#607D8B',
    borderTop: '2px solid #C1C6C8 ',
    textAlign: 'center',
    boxShadow: 'none',
  },
  textContainer: {
    justifyContent: 'center',
    minHeight: '40px',
  },
  icon: {
    fontSize: '10px',
    margin: '0px 8px 0px 2px',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '12px',
    letterSpacing: '2px',
    lineHeight: '16px',
  },
}));

export default function FooterBar() {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.root}>
      <Container maxWidth='md'>
        <Toolbar className={classes.textContainer}>
          <CopyrightIcon className={classes.icon} />
          <Typography className={classes.title}>Users app</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
