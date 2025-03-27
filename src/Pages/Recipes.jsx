import React, { useEffect, useState } from 'react'
import Loading from '../component/Loading'
import Content from '../component/Content'
import Header from '../component/Header'


const Recipes = () => {
    const [apiData,setApiData] =useState({})
 
    
    useEffect(()=>{
      const fetchData=async()=>{
  
        const response=await fetch('https://dummyjson.com/recipes')
        const json = await  response.json()
        setApiData( json.recipes);
        
      }
      fetchData()
      // console.log(data);
      
    },[])
    console.log(apiData);


    
  
  return (

    <>
    
    <div className='flex flex-wrap justify-center'>
        
    {apiData.length>0?apiData.map((elem,index)=>{
        return <Content key={index} name={elem.name} id={elem.id}  ingredients={elem.ingredients} img={elem.image} />} )
      :<Loading/>}
    </div>

    // </>
  )
}

export default Recipes