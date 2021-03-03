// https://github.com/benelan/arcgis-esm-samples
import { useState, useCallback } from 'react';
import Map from '@arcgis/core/Map';
import Basemap from '@arcgis/core/Basemap';
import MapView from '@arcgis/core/views/MapView';
import BaseTileLayer from '@arcgis/core/layers/BaseTileLayer';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import LayerList from '@arcgis/core/widgets/LayerList';
import Sketch from '@arcgis/core/widgets/Sketch';
import styles from '../styles/EsriMap.module.css';
import { OSM_URL, geoJSON } from '../utils/constants';

export default function ArcGISMap() {
  // const mapRef = useRef(null)
  const [map, setMap] = useState(null)
  const [layers, setLayers] = useState([])

  const mapRef = useCallback((node) => {
    if (!node || map) return

    // // Layers
    const osmLayer = new BaseTileLayer({
      title: 'Open Street Map',
      urlTemplate: OSM_URL,
      getTileUrl: function (level, row, col) {
        return this.urlTemplate
          .replace('{z}', level)
          .replace('{x}', col)
          .replace('{y}', row);
      },
    });

    var vtlLayer = new VectorTileLayer({
      // URL to the vector tile service
      url:
        'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer',
    });

    const blob = new Blob([JSON.stringify(geoJSON)], {type: "application/json"});
    const url  = URL.createObjectURL(blob);
    const geoJsonLayer = new GeoJSONLayer({ url, title: 'GeoJson Layer'});//, fields, objectIdField: 'id' });

    const graphicsLayer = new GraphicsLayer();

    const basemap = new Basemap({
      baseLayers: [osmLayer],
      title: 'basemap',
      id: 'basemap',
    });

    const tempLayers = [vtlLayer, geoJsonLayer, graphicsLayer];
    setLayers(tempLayers)

    const tempMap = new Map({
      basemap,
      layers: tempLayers,
    });
    

    const view = new MapView({
      map: tempMap,
      center: [176.031361, -37.65199],
      zoom: 13, // Zoom level
      container: node,
    });

    // // Widgets
    var layerList = new LayerList({
      view: view,
    });


    const sketch = new Sketch({
      layer: graphicsLayer,
      view: view,
      // graphic will be selected as soon as it is created
      creationMode: "update"
    });
    
    view.ui.add(sketch, "top-right");

    // Handle this with a button click instead
    // view.ui.add(layerList, {
    //   position: 'top-left',
    // });

    view.ui.add(sketch, "top-right");

    setMap(tempMap)
  }, [map, layers]);

  function toggleAllLayers() {
    if (!map) return;
    if (map.layers.length) {
      map.layers = [];
    } else {
      map.layers = layers;
    }
  }

  return (
    <>
      <div className={styles.mapDiv} id="viewDiv" ref={mapRef}></div>
      <button onClick={() => toggleAllLayers()}>Toggle layers</button>
    </>
  );
}
