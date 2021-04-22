import React, { useEffect } from 'react';
//material ui
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// components
import UsersList from './UsersList';
//router
import { Link } from 'react-router-dom';
//redux
import { useDispatch } from 'react-redux';
import { loadUsers } from '../../redux/actions/usersActions';

const useStyles = makeStyles((theme) => ({
  cardsBox: {
    backgroundColor: '#ffffff',
    borderRadius: '0px',
    margin: '48px 48px 100px 48px',
    boxShadow:
      '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '24px',
    lineHeight: '28px',
    color: 'rgba(0,0,0,0.87)',
  },
  linkTag: {
    textDecoration: 'none',
  },
  addButton: {
    height: '36px',
    color: '#FFFFFF',
    backgroundColor: '#617D8B',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '1.25px',
  },
}));

const Users = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    console.log(loadUsers, 'GET react');
  }, [dispatch]);

  return (
    <Container maxWidth='md'>
      <Box clone className={classes.cardsBox}>
        <Paper>
          <Box p={2} clone>
            <Typography variant='h3' className={classes.tableHeader}>
              Users
              <Link to='/user/newuser' className={classes.linkTag}>
                <Button variant='contained' className={classes.addButton}>
                  + add users
                </Button>
              </Link>
            </Typography>
          </Box>
          <UsersList />
        </Paper>
      </Box>
    </Container>
  );
};

export default Users;
