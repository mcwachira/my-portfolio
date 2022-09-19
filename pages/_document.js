import Document, {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'
class MyDocument extends Document {
    render(){
        const setInitialTheme = `
        const getUserPreference = () =>{
            if(window.localStorage.getItem('theme')){
                return window.localStorage.getItem('theme')
            }
            return window.matchMedia('(preference-color-scheme:dark)').matches ? 'dark':'light
        }
        document.body.dataset.theme = getUserPreference()
        
        `


        return (
            <Html lang='en'>
                <Head>


                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <Script
                        async
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
              page_path: window.location.pathname,

            //     <!-- this line is used to supress
            //   the SameSite warning that will be throwed -->
              cookie_flags: 'SameSite=None;Secure'
            });
          `,
                            setInitialTheme  }}
                    />
                </Head>
                <body>
                <Script id="">0</Script>
                    
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument