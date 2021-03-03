// https://github.com/benelan/arcgis-esm-samples
import { useState, useCallback } from 'react';
import styles from '../styles/EsriMap.module.css';
import { OSM_URL, geoJSON } from '../utils/constants';
import 'leaflet';
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';

export default function LeafletMap() {
  const [map, setMap] = useState(null);
  const [options, setOptions] = useState({});

  const mapRef = useCallback(
    (node) => {
      if (!node || map) return;
      var tempMap = L.map(node.id).setView([-37.65199, 176.031361], 13);

      L.tileLayer(OSM_URL, {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(tempMap);

      L.marker([-37.65199, 176.031361], {
        icon: L.icon({ iconUrl: '/media/marker-icon.png' }),
      })
        .addTo(tempMap)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

      tempMap.pm.addControls({
        position: 'topleft',
      });

      tempMap.pm.enableDraw('Polygon', { snappable: false });
      tempMap.pm.disableDraw();



      setMap(tempMap);
    },
    [map]
  );

  function toggleSnapable() {
    map.pm.enableDraw('Polygon', { snappable: !options?.snappable });
    map.pm.disableDraw();
    setOptions({ ...options, snappable: !options?.snappable });
  }

  return (
    <>
      <div className={styles.mapDiv} id="map" ref={mapRef}></div>
      <button onClick={() => toggleSnapable()}>
        Toggle snappable - {options?.snappable ? 'ON' : 'OFF'}
      </button>
    </>
  );
}
