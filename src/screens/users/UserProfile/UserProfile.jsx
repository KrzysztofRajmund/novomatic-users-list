import React, { useState, useEffect } from 'react';
//material ui
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { loadUsers } from '../../../redux/actions/usersActions';
//router
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  linkTag: {
    textDecoration: 'none',
  },
  arrowBack: {
    color: 'rgba(0,0,0,0.54)',
    width: '14px',
    height: '18px',
  },
  cardsBox: {
    backgroundColor: '#ffffff',
    borderRadius: '0px',
    margin: '48px 48px 100px 48px',
    padding: '25px',
    boxShadow:
      '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(2),
      width: '50ch',
    },
  },
  content: {
    textAlign: 'left',
    fontSize: '24px',
    lineHeight: '28px',
    color: 'rgba(0,0,0,0.87)',
  },
  buttons: {
    height: '36px',
    color: '#FFFFFF',
    backgroundColor: '#607D8B',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '1.25px',
    borderRadius: '4px',
  },
  cancelButton: {
    textAlign: 'center',
    height: '36px',
    color: '#546E7A',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '1.25px',
  },
}));

const UserProfile = () => {
  //use styles material ui
  const classes = useStyles();
  //dispatch action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  //useState hooks
  const [button, setButton] = useState(true);
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  //get current state
  const allUsers = useSelector((state) => state.users.data);

  //filter user
  const userID = useParams().id;
  const filteredUser = allUsers.filter((user) => user.id === parseInt(userID));

  return (
    <Container maxWidth='md'>
      {filteredUser[0] ? (
        <Box clone className={classes.cardsBox}>
          <Paper>
            {/* <Box p={2} clone> */}

            <Typography variant='h3' className={classes.content}>
              <Link to='/' className={classes.linkTag}>
                {' '}
                <ArrowBackIosIcon className={classes.arrowBack} />
              </Link>
              {filteredUser[0].first_name} {filteredUser[0].last_name}
            </Typography>
            <form className={classes.form} validate='true' autoComplete='off'>
              <TextField
                id='outlined-basic'
                label='Name'
                variant='outlined'
                type='text'
                name='first_name'
                value={filteredUser[0].first_name}
              />
              <TextField
                id='outlined-basic'
                label='Surname'
                variant='outlined'
                type='text'
                name='last_name'
                value={filteredUser[0].last_name}
              />
              <TextField
                id='outlined-basic'
                label='Email'
                variant='outlined'
                type='email'
                name='email'
                value={filteredUser[0].email}
              />
              <ButtonGroup>
                <Button className={classes.cancelButton}>Cancel</Button>
                <Button
                  type='submit'
                  variant='contained'
                  className={classes.buttons}
                  disabled
                >
                  submit to review
                </Button>
              </ButtonGroup>
            </form>
            {/* </Box> */}
          </Paper>
        </Box>
      ) : (
        ''
      )}
    </Container>
  );
};

export default UserProfile;
