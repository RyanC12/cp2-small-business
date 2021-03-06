import React, {useState, useEffect} from 'react';

import { connect } from "react-redux";
import {addBusiness} from '../redux/action';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container } from '@material-ui/core/';

import Map from './Map';

import axios from 'axios';

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

const AddBusiness = ({ locations, addBusiness}) => {
    const classes = useStyles();

    const [newBusinessName, setNewBusinessName] = useState('')
    const [newBusinessAddress, setNewBusinessAddress] = useState('')
    const [newBusinessHours, setNewBusinessHours] = useState('')
    const [newBusinessDescription, setNewBusinessDescription] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')

    useEffect(
        () => {
            const geocode = () => {
                axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
                    params: {
                        address: newBusinessAddress,
                        key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
                    }
                })
                    .then(response => {
                        setLat(response.data.results[0].geometry.location.lat || null)
                        setLng(response.data.results[0].geometry.location.lng || null)
        
                    })
                    .catch(error => console.log(error))
            }
            geocode()
        },
        [newBusinessAddress]
    )

    const handleName = (e) => {
        setNewBusinessName(e.target.value)
    }
    const handleAddress = (e) => {
        setNewBusinessAddress(e.target.value)
    }
    const handleHours = (e) => {
        setNewBusinessHours(e.target.value)
    }
    const handleDescription = (e) => {
        setNewBusinessDescription(e.target.value)
    }
    const handleSubmit = () => {
        const id = locations.length + 1;
        const location = {
            id,
            newBusinessName,
            newBusinessAddress,
            newBusinessHours,
            newBusinessDescription
        }
        addBusiness(location)

    }

    return (
        <Container className={classes.container} style={{display: 'flex'}} >
            <form className={classes.formContainer} >
                <TextField onChange={handleName} style={{ margin: '10px' }} id="standard-basic" label="Name" />
                <TextField onBlur={handleAddress} style={{ margin: '10px' }} id="standard-basic" label="Address" />
                <TextField onChange={handleHours} style={{ margin: '10px' }} id="standard-basic" label="Hours" />
                <TextField onChange={handleDescription} style={{ margin: '10px' }} id="standard-basic" label="Description" />
                <Button style={{ margin: '10px' }} onClick={handleSubmit} variant="contained">Save</Button>
            </form>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
      locations: state.locations
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      addBusiness: location => dispatch(addBusiness(location))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(AddBusiness);