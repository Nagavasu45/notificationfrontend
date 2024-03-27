import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import "./Notify.css";

import axios from 'axios';
//import axios from 'axios';


const Notifi = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(0);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3420/add'); // Replace with your API endpoint
        setData(response.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data initially when component mounts
    fetchData();

    // Fetch data every 5 seconds
    const intervalId = setInterval(fetchData, 3000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);
  

  const handleNotificationClick =  () => {
    
    if(data>0)
    {  
      
      navigate('/Notifydetails');
     
      }
      
};

  
  return (<>
    
    <div className='bellcontainer' >{data ?<><span className='countnumber' >{data}</span></> : <></>}
      <button   className='bellposition'>
      <FontAwesomeIcon icon={faBell} onClick={handleNotificationClick} />
      </button>
      
    </div> 
    
    </> )
}

export default Notifi
