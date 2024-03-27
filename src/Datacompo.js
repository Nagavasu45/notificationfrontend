import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const Store=createContext()
const Datacompo = (props) => {
    const [datacom,datacomSet]=useState([])
    
    useEffect(()=>{

    
        axios.get('http://localhost:3420/add')
    
      .then(response => {
    
        // Handle the response data
    
        console.log(datacomSet(response.data));
    
      })
    
      .catch(error => {
    
        // Handle any errors
    
        console.error('Error:', error);
    
      })},[])

      
  return (
    <Store.Provider value={[datacom]}>
        {props.children}
        </Store.Provider>
  )
}

export default Datacompo
