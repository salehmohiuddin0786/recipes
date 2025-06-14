import React from 'react'
import { Links, Route } from 'react-router'
import Header from './Header'
import { Link } from 'react-router'


const Content = ( { id, name, ingredients, instructions, img } ) => {

    return (

        <>
        
            <div className="m-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img src={img} alt="" />
  <a href="#">

    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {name}
    </h5>
  </a>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    {ingredients}
  </p>
  {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{instructions}</p> */}

  <Link to ={`/recipe/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">   
  
    Read more
  
    </Link>
  
</div>






        </>
    )
}

export default Content