import React, { useState, useEffect } from 'react';

//material ui
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
//router
import { Link, useHistory } from 'react-router-dom';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getMessage } from '../../../redux/actions/usersActions';

const useStyles = makeStyles((theme) => ({
  root: {
    '&.MuiContainer-root': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  linkTag: {
    textDecoration: 'none',
  },
  disabledLink: {
    pointerEvents: 'none',
  },
  arrowBack: {
    color: 'rgba(0,0,0,0.54)',
    width: '14px',
    height: '18px',
  },
  cardsBox: {
    margin: theme.spacing(2),
    width: '50ch',
    backgroundColor: '#ffffff',
    borderRadius: '0px',
    margin: '48px 48px 100px 48px',
    padding: '25px',
    boxShadow:
      '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
  },
  form: {
    '& > *': {
      margin: theme.spacing(2),
      width: '50ch',
    },
    '& .Mui-focused': {
      color: 'rgba(0,0,0,0.87)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(25,25,25,0.32)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(25,25,25,0.32)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(25,25,25,0.32)',
      },
    },
  },

  content: {
    textAlign: 'left',
    fontSize: '24px',
    lineHeight: '28px',
    color: 'rgba(0,0,0,0.87)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
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

const UserNewProfile = () => {
  //router
  let history = useHistory();
  //use styles material ui
  const classes = useStyles();
  //dispatch action
  const dispatch = useDispatch();
  //new data
  const newUser = useSelector((state) => state);
  console.log(newUser, '  new user');
  //useState hooks
  const [button, setButton] = useState(true);
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  //useEffect hooks
  useEffect(() => {
    enableButton();
  }, [user]);

  //on input change
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  //enable submit button
  const enableButton = () => {
    let disable;
    for (const key in user) {
      if (user[key] === '') {
        disable = true;
      } else if (!user.email.includes('@')) {
        disable = true;
      } else {
        disable = false;
      }
    }
    setButton(disable);
  };
  //submit form
  const submitUser = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
    getMessage();
    history.push('/');
  };

  return (
    <Container maxWidth='md' className={classes.root}>
      <Box clone className={classes.cardsBox}>
        <Paper>
          <Typography variant='h3' className={classes.content}>
            <Link to='/' className={classes.linkTag}>
              {' '}
              <ArrowBackIosIcon className={classes.arrowBack} />
            </Link>
            New user details
          </Typography>
          <form
            onSubmit={submitUser}
            className={classes.form}
            validate='true'
            autoComplete='off'
          >
            <TextField
              id='outlined-basic'
              label='Name'
              variant='outlined'
              type='text'
              name='first_name'
              inputProps={{
                minLength: 3,
              }}
              onChange={onChangeHandler}
            />
            <TextField
              id='outlined-basic'
              label='Surname'
              variant='outlined'
              type='text'
              name='last_name'
              inputProps={{
                minLength: 3,
              }}
              onChange={onChangeHandler}
            />
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              type='email'
              name='email'
              inputProps={{
                minLength: 3,
              }}
              onChange={onChangeHandler}
            />
            <div className={classes.buttonContainer}>
              <Link to='/' className={classes.linkTag}>
                <Button className={classes.cancelButton}>Cancel</Button>
              </Link>
              <Button
                type='submit'
                variant='contained'
                className={classes.buttons}
                disabled={button}
              >
                submit to review
              </Button>
            </div>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default UserNewProfile;
