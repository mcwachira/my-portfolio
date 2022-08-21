import React from 'react'
import Head from 'next/head'
import Search from './Search'

import Header from './Header'
const Layout = ({title,keywords, description, children}) => {
  return (
    <div>

        <Head>
            {title}
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
       

<Header/>

      <Search />
        <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}


Layout.defaultProps = {
    title:"welcome to Mcwachira's portfolio and blog website",
    keywords:'web development ,app development, devops , react, nextjs, gatsby , nodejs, aws, azure, docker ,Kubernetes , linux',
    description:'THis website contains projects developed by @mcwachira a fullstack Javascript developer and a lot of technical articles. '
}

export default Layout