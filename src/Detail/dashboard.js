import React , { useEffect , useState, useContext }  from 'react'
import {Link} from 'react-router-dom' ;
import './dashboard.css'
import './person.css'
import Person from './Person';
import { useHistory} from 'react-router-dom' 
import Endbar from '../navbar/endbar'
import {UserContext} from '../App';
import Graph from './Graph';


function Dashboard(data){
     const history = useHistory();
     
     
      return ( 
         <>
         
       <div className = "main">

             <Person  /> 
              
              < hr className="mt-5" style = {{ height:"4px" , background:"blue"}}> 
              </hr > 
            
            < Graph  />  

          

      </div > 
      <Endbar />
      
     </>
       

     )
    

}


export default Dashboard ;











