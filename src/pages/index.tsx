import Image from 'next/image'
import { Inter } from 'next/font/google'
import ModelContainer from '@/components/ModelContainer'
import ReactMap from '@/components/ReactMap'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>3D Interactive Map of Makerere University</title>
      </Head>
      <ModelContainer />
      {/* <ReactMap /> */}
    </div>
  )
}
