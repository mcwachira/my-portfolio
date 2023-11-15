import React from 'react'
import Link from '../Link'
import { CategoryContainer, CategoryItems, CategoryItem, CategoryTitle } from './CategoryList.style'

const CategoryList = ({categories}) => {
    // (categories)
    return (
   <CategoryContainer>

            <CategoryTitle>
                Post Category
            </CategoryTitle>

            <CategoryItems>


            
            {categories.map((category, index) => (
                <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>



                    <CategoryItem>

                    {category}
                    </CategoryItem>
                </Link>
            ))}

            <h2>
                hello
            </h2>
            </CategoryItems>
   </CategoryContainer>
    )
}

export default CategoryList