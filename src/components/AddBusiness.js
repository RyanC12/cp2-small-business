import React from 'react';

import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container } from '@material-ui/core/';


import Map from './Map';

const useStyles = makeStyles(theme => ({
    contianer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: 'auto',
        padding: '20px'
    },
    
}));

const AddBusiness = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container} style={{display: 'flex'}} >
            <form className={classes.formContainer} >
                <TextField style={{ margin: '10px' }} id="standard-basic" label="Name" />
                <TextField style={{ margin: '10px' }} id="standard-basic" label="Address" />
                <TextField style={{ margin: '10px' }} id="standard-basic" label="Hours" />
                <TextField style={{ margin: '10px' }} id="standard-basic" label="Description" />
                <Button style={{ margin: '10px' }} variant="contained">Save</Button>
            </form>
            <Map />
        </Container>
    );
}
export default AddBusiness;