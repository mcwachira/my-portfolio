import '../styles/globals.css'
import Layout from '@/components/Layout'
import * as gtag from '@/utils/gtag'
import Router from 'next/router'
import { useEffect } from 'react'



function MyApp({ Component, pageProps }) {

  //Router here to allow gtag to track page views and events individually. 
  useEffect(() => {
    const handleRouteChange = (url) => {
gtag.PageView(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routerChangeComplete', handleRouteChange)
    }

  }, [])
  return (
    <>
 
        <Layout>
      
          <Component {...pageProps} />
        </Layout>
 
    </>
 

  )
}

export default MyApp
