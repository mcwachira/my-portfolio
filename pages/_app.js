import '../styles/globals.css'
import { createGlobalStyle } from 'styled-components'
import Layout from '@/components/Layout'
import {ThemeProvider} from 'next-themes'

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
  return (
    <>
 
        <Layout>
          <Component {...pageProps} />
        </Layout>
 
    </>
 

  )
}

export default MyApp
