import { useRouter } from 'next/router'
import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Head from 'next/head'


const Layout = ({ children, ...customMeta}) => {

  const router= useRouter()

  const meta = {
    title: 'Welcome to Mcwachira&#8216;s Personal website',
    keywords: ['React', 'Redux', 'Typescript', 'React Native', 'Nextjs', 'Remix', 'Gatsbyjs', 'Nodejs', 'Deno', 'bun', 'Fresh', 'rust', 'Astro', 'solidJs', 'testing', 'cloud computing ', 'aws', 'azure', 'docker', 'Kubernetes', 'linux'],
    description: 'This site contains technical articles written by me in my continuous Journey of learning Software development and also some of the projects I have done throughout the years.',
    type:'website',
    ...customMeta
  }
  return (
    <>
    <Head>
      <title>
        {meta.title}
      </title>
      <meta name='robots' content='follow, index'/>
      <meta content={meta.description} name='description'/>

        <meta
          property="og:url"
          content={`https://www.mcwachira.dev${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.mcwachira.dev${router.asPath}`}
        />

        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="mcwachira.dev" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mc_wachira" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter.description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.data && (
          <meta property="article:published_time" content={meta.date} />
        )}      
    </Head>
      
    <Navbar/>
          {children}
          <Footer/>
    </>
  )
}




export default Layout