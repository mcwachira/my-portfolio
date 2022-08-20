import React from 'react'
import Link from 'next/link'
const CategoryLabel = ({children}) => {
    const colorKey= {
        Javascript:'yellow',
        Css:'blue',
        Node:'green',
        devOPs:'purple'
    }
    console.log(`${colorKey[children]}`)
  return (
      <div className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-600 font-bold rounded`}>
        <Link href={`/blog/category/${children.toLowerCase()}`}>
        {children}

        </Link>
    </div>
  )
}

export default CategoryLabel

