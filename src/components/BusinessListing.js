import React from 'react';
import { connect } from "react-redux";
import { deleteBusiness } from "../redux/action";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const BusinessListing = ({ locations, deleteBusiness}) => {
    const classes = useStyles();
    console.log("locations",locations)
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Hours</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {locations.map((location, i) => (
                        <TableRow key={location.id}>
                            <TableCell component="th" scope="row">{location.name} </TableCell>
                            <TableCell align="left">{location.description}</TableCell>
                            <TableCell align="left">{location.hours}</TableCell>
                            <TableCell align="left">{location.address}</TableCell>
                            <TableCell align="left"><DeleteIcon
                    onClick={() => deleteBusiness(i)}
                    className="icon text-red"
                  /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = state => {
    return {
        locations: state.locations,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        deleteBusiness: i => dispatch(deleteBusiness(i))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(BusinessListing);