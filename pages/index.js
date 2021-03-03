import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Geospatial spike</h1>
      <p>An investigation into:</p>
      <ul>
        <li>
          <Link href="/arcgis">ArcGIS</Link>
        </li>
        <li>
          <Link href="/mapbox">Mapbox</Link>
        </li>
        <li>
          <Link href="/leaflet">Leaflet + Leaflet Geoman</Link>
        </li>
      </ul>
      libraries to see how they can both perform some common tasks, such as:
      <ul>
        <li>Rendering basetiles from OpenStreet Maps</li>
        <li>Rendering points and polygons from GeoJSON</li>
        <li>Offline</li>
        <li>Adding points/features to a map</li>
        <li>Custom markers</li>
        <li>Accessibility support</li>
      </ul>
    </>
  );
}
