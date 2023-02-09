import React from "react";
import GoogleMap from "google-map-react";


const Map = () => {
    const defaultProps = {
        center: {
            lat: 10.79609794202330,
            lng: 106.67550228400384
        },
        zoom: 20
    };

    const AnyReactComponent = ({text}) => <div>{text}</div>;
    return (
        // Important! Always set the container height explicitly
        <div style={{height: '100vh', width: '100%'}}>
            <GoogleMap
                bootstrapURLKeys={{key: ""}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMap>
        </div>
    );
}

export default Map;