import React from 'react';
//redux
import { useSelector } from 'react-redux';
//material-ui
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//router
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  linkTag: {
    textDecoration: 'none',
  },
  singleCard: {
    border: '1px solid rgba(0,0,0,0.12)',
    borderRadius: '6px',
    backgroundColor: '#ffffff',
    color: 'rgba(0,0,0,0.87)',
    width: 'auto',
    margin: '12px 24px',
    '&:hover': {
      backgroundColor: 'rgb(247, 247, 247)',
      cursor: 'pointer',
    },
  },
  avatar: {
    width: '100px',
    height: '80px',
    borderRadius: '0px',
  },
}));
const UsersList = () => {
  const classes = useStyles();
  const users = useSelector((state) => state.users.data);
  console.log(users, 'users list');
  return (
    <List>
      {users.map((user) => (
        <Link to={`/user/${user.id}`} className={classes.linkTag}>
          <ListItem key={`user-${user.id}`} className={classes.singleCard}>
            <ListItemText
              primary={
                <div>
                  <ListItemText secondary={`id:${user.id}`.toUpperCase()} />
                  <Typography variant='h6'>{`${user.first_name} ${user.last_name}`}</Typography>
                </div>
              }
              secondary={user.email}
            />

            <Avatar
              className={classes.avatar}
              alt={`${user.first_name}-avatar`}
              src={user.avatar}
            />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default UsersList;
