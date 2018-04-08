/* eslint-disable */
import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { compose, withProps } from 'recompose';

const Map = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px', margin: '10px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  (<GoogleMap
    defaultZoom={8}
    defaultCenter={props.geo}
    center={props.geo}
    onClick={props.onMark}
  >
    <Marker
      position={props.geo}
      onClick={props.onMarker}
    >
    </Marker>
  </GoogleMap>)
);

export default Map;
