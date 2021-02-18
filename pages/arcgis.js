
import dynamic from 'next/dynamic'
//  import '@arcgis/core/assets/esri/themes/dark/main.css';

const ArcGISMapNoSSR = dynamic(
  () => import('../components/ArcGISMap'),
  { ssr: false }
)

export default function ArcGISView() {
  console.log('render1')
  return (
    <>
      <h1>ArcGIS View</h1>
      <h2>Notes</h2>
      <ArcGISMapNoSSR />
      <ul>
        <li>
          The introductory/getting started documentation is a horror - possibly because I'm on a free account and don't
          appear to be able to do the second thing it requires, which is get an API key
        </li>
        <li>The map containing div needs a fixed height, or it continues to load forever</li>
      </ul>
    </>
  );
}
