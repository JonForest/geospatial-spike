// https://github.com/benelan/arcgis-esm-samples
import { useRef, useEffect, useCallback } from 'react'
import EsriMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView'; 
import styles from '../styles/EsriMap.module.css'


export default function ArcGISMap() {
  // const mapRef = useRef(null)
  console.log('render2')

  // useEffect(() => {
  // if (mapRef.current) {
  const mapRef = useCallback(node => {

    const map = new EsriMap({
      basemap: "topo-vector"
    });

    const view = new MapView({
      map: map,
      center: [ 176.031361, -37.65199],
      // extent: {
      //   spatialReference: {
      //     wkid: 102100,
      //   },
      //   xmax: -13581772,
      //   xmin: -13584170,
      //   ymax: 4436367,
      //   ymin: 4435053,
      // },
      zoom: 13, // Zoom level
      container: node
    });
    
  })
// }, []);

return (
  <>
      <div className={styles.mapDiv} id="viewDiv" ref={mapRef}></div>
  </>
)

}