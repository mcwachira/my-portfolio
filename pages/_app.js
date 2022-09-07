import '../styles/globals.css'
import { createGlobalStyle } from 'styled-components'
import Layout from '@/components/Layout'
import * as gtag from '@/utils/gtag'
import Router from 'next/router'
import {ThemeProvider} from 'next-themes'
import { useEffect } from 'react'

// Your themeing variables
const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
  }

  [data-theme="dark"] {
    --fg: #000;
    --bg: #000;
  }
`


function MyApp({ Component, pageProps }) {

  //Router here to allow gtag to track pageviews and events individually. 
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
