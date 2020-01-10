import React from 'react'
import { Container } from "@material-ui/core/";
import GoogleMapReact from "google-map-react";

const Map = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        <Container style={{ height: '400px', width: '400px',margin: 'auto', padding: '40px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals

            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />

            </GoogleMapReact>
        </Container>
    )
}

export default Map; 