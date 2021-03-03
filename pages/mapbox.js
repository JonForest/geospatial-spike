
import dynamic from "next/dynamic";
import Markdown from "../components/Markdown"
import { getMarkdown } from "../utils/read_md";
import Link from 'next/link'

const MapBoxMapNoSSR = dynamic(() => import("../components/MapboxMap"), {
  ssr: false,
});

export default function MapboxView({ markdown }) {
  return (
    <>
      <h1>Mapbox View</h1>
      <h2>Notes</h2>
      <MapBoxMapNoSSR />
      <Markdown markdown={markdown} />
      <Link href="/"><a>Home</a></Link>
    </>
  );
}

export function getStaticProps(context) {
  
  return {
    props: { markdown: getMarkdown('mapbox.md') },
  };
}
