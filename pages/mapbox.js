
import dynamic from "next/dynamic";
import Markdown from "../components/Markdown"
import { getMarkdown } from "../utils/read_md";

const MapBoxMapNoSSR = dynamic(() => import("../components/MapboxMap"), {
  ssr: false,
});

export default function MapboxView({ markdown }) {
  return (
    <>
      <h1>ArcGIS View</h1>
      <h2>Notes</h2>
      <MapBoxMapNoSSR />
      <Markdown markdown={markdown} />
    </>
  );
}

export function getStaticProps(context) {
  
  return {
    props: { markdown: getMarkdown('mapbox.md') },
  };
}
