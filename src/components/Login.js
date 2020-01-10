import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container } from '@material-ui/core/';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: 'auto',
        padding: '20px'
    },
    contianer: {
        '& > *': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
    },
}));

const Login = ({ user }) => {
    const classes = useStyles();

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("")

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };
    const handleUserPassword = (e) => {
        setUserPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName !== "" && userPassword !== "") {
            document.cookie = "loggedIn=true;max-age=60*1000"
            const user = { userName };
        }
    };

    return (
        <Container className={classes.container}>
            <form className={classes.formContainer} >
                <TextField style={{ margin: '10px' }} id="standard-basic" label="Username"
                    onChange={handleUserName}
                />
                <TextField style={{ margin: '10px' }} id="standard-basic" label="Password"
                    onChange={handleUserPassword}
                />
                <Button onClick={handleSubmit} style={{ margin: '10px' }} variant="contained">LOGIN</Button>
            </form>
        </Container>
    );
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};


export default connect(mapStateToProps)(Login)