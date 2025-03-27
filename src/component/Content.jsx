import React from 'react'
import Header from './Header'
import { Link } from 'react-router'


const Content = (recipes) => {
    return (

        <>
        
            <div className="m-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img src={recipes.img} alt="" />
  <a href="#">

    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {recipes.name}
    </h5>
  </a>
  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    {recipes.ingredients}
  </p>
  <Link><p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {recipes.id}
    
    </p></Link>
    Read more
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
    
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>

</div>






        </>
    )
}

export default Content