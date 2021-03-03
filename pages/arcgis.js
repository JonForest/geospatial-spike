
import dynamic from "next/dynamic";
import Markdown from "../components/Markdown"
import { getMarkdown } from "../utils/read_md";
import Link from 'next/link'


const ArcGISMapNoSSR = dynamic(() => import("../components/ArcGISMap"), {
  ssr: false,
});

export default function ArcGISView({ markdown }) {
  return (
    <>
      <h1>ArcGIS View</h1>
      <h2>Notes</h2>
      <ArcGISMapNoSSR />
      <Markdown markdown={markdown} />
      <Link href="/"><a>Home</a></Link>
    </>
  );
}

export function getStaticProps(context) {
  
  return {
    props: { markdown: getMarkdown('arcgis.md') },
  };
}
