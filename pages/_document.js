import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script'
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const styledComponentsSheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        styledComponentsSheet.collectStyles(<App {...props} />)
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <React.Fragment>
                        {initialProps.styles}
                        {styledComponentsSheet.getStyleElement()}
                    </React.Fragment>
                )
            };
        } finally {
            styledComponentsSheet.seal();
        }
    }

    render() {
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
            <Html lang="en" dir="ltr">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;700&display=swap"
                        rel="stylesheet"
                    />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <Script
                        async
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
                    />
                    <Script id="google-analytics" 
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

                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
