import * as React from 'react';
import Head from 'next/head';
import Map, { Marker } from 'react-map-gl';
import { Model } from './Model'

import 'mapbox-gl/dist/mapbox-gl.css';
import ModelContainer from './ModelContainer';

const MAPBOX_TOKEN = 'pk.eyJ1IjoianBudXdhZ2FiYSIsImEiOiJjbGduMmlrbDgwYm9mM21tbWdkZ3hodjc4In0.Q9vUbRDFh0Q7rc8o8Al8pA'

const ReactMap = () => {
  const [viewState, setViewState] = React.useState({
    latitude: 0.334500,
    longitude: 32.568438,
    zoom: 18,
    pitch: 45,
    bearing: 0
  })
  return (
    <div className='w-full h-screen'>
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        // style={{width: 800, height: 600}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <ModelContainer />
      </Map>
    </div>
  )
}

export default ReactMap