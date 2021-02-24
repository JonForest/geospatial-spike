import remark from 'remark'
import html from 'remark-html'
import {useState, useEffect} from 'react'

export default function Markdown({markdown}) {
  const [content, setContent] = useState(null)
  useEffect(() => {
    async function processHTML () {
      setContent((await remark().use(html).process(markdown)).toString())
    }

    processHTML()
  }, [])

  if (!content) return <p>Loading</p>
  else return <div dangerouslySetInnerHTML={{__html: content}}/>
}