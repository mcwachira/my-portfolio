import React from 'react'
import Navbar from './Navbar/Navbar.jsx'
import Footer from './Footer/Footer'

const Layout = ({title, keywords, description, children}) => {
  return (
    <>
      
    <Navbar/>
          {children}
          <Footer/>
    </>
  )
}


Layout.defaultProps = {
    title: 'Welcome to Mcwachira&#8216;s Personal website',
    keywords: ['React','Redux','Typescript', 'React Native', 'Nextjs','Remix', 'Gatsbyjs', 'Nodejs','Deno','bun', 'Fresh', 'rust','Astro', 'solidJs', 'testing', 'cloud computing ',  'aws', 'azure', 'docker', 'Kubernetes', 'linux'],
    description:'This site contains technical articles written by me in my continuous Journey of learning Software development and also some of the projects I have done throughout the years.'
}

export default Layout