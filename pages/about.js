import React from 'react'
import Layout from '../components/Layout'
const AboutPage = () => {
  return (
   <Layout title='About Site'>

    <h1 className='text-5xl border-b-4pb-5 font-bold'>
        About
    </h1>

    <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>

<h3 className='text-2xl mb-5'>
    My portfolio and Blog
</h3>

<p className='mb-3'>
    This website is build with Next.js and Markdown
</p>

<p>
    <span className='font-bold'> 1.0</span>
</p>
    </div>
   </Layout>
  )
}

export default AboutPage