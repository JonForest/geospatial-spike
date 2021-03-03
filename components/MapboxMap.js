import React, { useCallback, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import { MAPBOX_TOKEN } from '../utils/private';
import styles from '../styles/EsriMap.module.css';
import { OSM_URL, geoJSON } from '../utils/constants';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

// mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = MAPBOX_TOKEN;

export default function MapboxMap() {
  const [map, setMap] = useState(null)
  const mapRef = useCallback((node) => {
    console.log('callback fired')
    // Don't call if no node, and don't keep calling this once the map is set
    if (!node || map) return;

    const tempMap = new mapboxgl.Map({
      container: node,
      // style: 'mapbox://styles/mapbox/streets-v11', // style URL
      style: {
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            tiles: [OSM_URL],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 22,
          },
        ],
      },
      center: [176.031361, -37.65199], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

  
    var Draw = new MapboxDraw();
    tempMap.addControl(Draw, 'top-right');

    tempMap && tempMap.on('load', function () {
      tempMap.addSource('home', {
        type: 'geojson',
        data: geoJSON,
      });

      tempMap.addLayer({
        id: 'play_area',
        type: 'fill',
        source: 'home',
        paint: {
          'fill-color': '#7722BB',
          'fill-opacity': 0.4,
        },
        // Actually need this default value here or the first click of the toggle does nothing
        layout: {
          'visibility': 'visible'
        },
        filter: ['==', '$type', 'Polygon'],
      });

      tempMap.addLayer({
        id: 'football_pitch',
        type: 'circle',
        source: 'home',
        paint: {
          'circle-radius': 6,
          'circle-color': '#B42222',
        },
        layout: {
          'visibility': 'visible'
        },
        filter: ['==', '$type', 'Point'],
      });
    });

    setMap(tempMap)
  })

  function toggleLayer(layerName) {
    if (!map || !map.loaded()) return

    const visibility = map.getLayoutProperty(layerName, 'visibility');
    const isVisible = visibility === 'visible'
    map.setLayoutProperty(layerName, 'visibility', isVisible ? 'none' : 'visible');
  }

  return (
    <>
      <div className={styles.mapDiv} id="viewDiv" ref={mapRef}></div>
      <div id="menu">
        <button onClick={() => toggleLayer('play_area')}>Play Area</button>
        <button onClick={() => toggleLayer('football_pitch')}>Football Pitch</button>
      </div>
    </>
  );
}
