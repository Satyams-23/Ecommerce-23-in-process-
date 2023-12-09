import Footer from '@/components/Footer'
import Head from 'next/head'

import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <title>Stylishwear</title>
      <meta name='desc' content='Styleswear,com - Wear the Stylish'></meta>
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
