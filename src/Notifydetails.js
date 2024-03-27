import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from './Datacompo'
import axios from 'axios'
import "./Notify.css"

const Notifydetails = () => {
    const navigate=useNavigate()
    
    
    // console.log(vl,"notifydetails")
    const [companydata]=useContext(Store)
    console.log(companydata)
    const Backfunction=async ()=>{
        await axios.get('http://localhost:3420/update')
  
    .then(response => {
    
      // Handle the response data
      if(response.data==="success"){
        return;
        
        
        
      }
      

  
    })  
    .catch(error => {
  
      // Handle any errors  
      console.error('Error:', error);   
    
    })
    
    navigate("/")
    
    }
   
  return (<>
 
    
        <button onClick={Backfunction} className='backbuttonstyle'>back</button>

      
    
    <div className='main-container'>
      {companydata.map((data)=>{
        return(
            <>
            <div className='company-container'  key={data.id}>
              
              <div className='company-exp'>Exp:{data.min_exp}-{data.max_exp}years</div>
                <div className='company-logo'><img src={data.img} alt='not-loaded' className='imgsty'/></div>
               
                <div className='company-description'>
                <div><h2>-----Hiring-----</h2></div>
                <div><h2 className='jobrolestyle'>{data.jobrole}</h2></div>
                <div><h4>Location:-{data.location}</h4></div>
                <div><h4>Package:-{data.lpa}</h4></div>
                
                </div>
                
                <div className='company-skills'><h2>Skills:</h2>
                <ul key={data.id}>
                  {data.skills.map((skillsdata)=>{
                    return(<>
                    <li className='skillsstyle'>{skillsdata}</li>
                    </>)
                })}</ul></div>
              {/* <button onClick={() =>navigate(`/CompanyDeatails/${data.id}`)  } target="_blank" className='button1' >Click here to know more information </button>
               */}
            </div>
            </>
        )
      })}
    </div>
 </> )
}

export default Notifydetails
