import { getAllThingIDs, getThingData } from '../../lib/getthings'
import Link from 'next/dist/client/link'

export async function getStaticProps({ params }) {
  const postData = await getThingData(params.thing)
  return {
    props: {
      postData
    }
  }
}


export async function getStaticPaths() {
    const paths = await getAllThingIDs()
    return {
      paths,
      fallback: false
    }
}

  export default function Thing(postData) {

    console.log(postData);
    let thingData = postData.postData

    return (
        <div>
            <span><Link href="/"><a>home</a></Link></span>
            <h5>Thing Template: {thingData.thing}</h5>
            <h3>{thingData.fileContent.name}</h3>
            <p>{thingData.fileContent.words}</p>
        </div>
    )
  }