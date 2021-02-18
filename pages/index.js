import Head from 'next/head';
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <h1>Geospatial spike</h1>
      <p>
        An investigation into <Link href="/arcgis">ArcGIS</Link> and <Link href="/mapbox">Mapbox</Link> Javascript
        libraries to see how they can both perform some common tasks, such as:
      </p>
      <ul>
        <li>Rendering basetiles from OpenStreet Maps</li>
        <li>Rendering points and polygons from GeoJSON</li>
        <li>Offline</li>
        <li>Adding points/features to a map</li>
      </ul>
    </>
  );
}
