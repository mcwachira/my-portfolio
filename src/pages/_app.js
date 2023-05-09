import "@code-hike/mdx/dist/index.css"
import '@/styles/globals.css'
import Layout from '@/components/Layout'
import * as gtag from '@/utils/gtag'
import Router from 'next/router'
import { useEffect } from 'react'
import Script from 'next/script'
 import { PageView, Event} from '@/utils/gtag'


function MyApp({ Component, pageProps }) {


  // Router here to allow gtag to track page views and events individually. 
  useEffect(() => {
    const handleRouteChange = (url) => {
gtag.Pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routerChangeComplete', handleRouteChange)
    }

  }, [Router.events])
  return (
<>
  <Script
    strategy='afterInteractivity'
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} />

  <Script id='google-analytics' strategy='afterInteractivity' dangerouslySetInnerHTML={{
    _html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,

      cookie_flags: 'SameSite=None;Secure'
            });
      `}} />

       <Layout>

         <Component {...pageProps} />
       </Layout>

     </>


   )
}

export default MyApp