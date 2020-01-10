import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import LoggedIn from './LoggedIn';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    navContainer: {
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textAlign: 'left',
        width: '100%'
    },
    button: {
        float: 'right',
        textDecoration: 'none',
    }
}));

const Nav = ({ user }) => {
    const classes = useStyles();

    return (
        <div className={classes.navContainer}>
            <AppBar position="static" >
                <Toolbar>
                    <Typography className={classes.title}>
                        Austin Small Business
          </Typography>
                    <Link to="/listings" className={classes.button} color="inherit">
                        <Button style={{ color: "white" }}>Listings</Button>
                    </Link>
                    <Link to="/add" className={classes.button} color="inherit" >
                        <Button style={{ color: "white" }} >Add</Button>
                    </Link>
                    <Link to="/" className={classes.button}>
                        <Button style={{ color: "white" }}>Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            {user ? <LoggedIn /> : null}
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
});
export default connect(mapStateToProps)(Nav);
