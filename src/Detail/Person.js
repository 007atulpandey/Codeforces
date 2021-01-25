import React, { useState ,useEffect} from 'react'


const Person = ()=>{
    
    const [ data , setContent] = useState ({}) ;
    
    useEffect(()=>{
      let i = 1 ;
      let flag = true ;
    
       const user = localStorage.getItem("codeforces")  
       if(user){
         const key = "https://codeforces.com/api/user.info?handles=" +user;
        fetch(key)
        .then( data => data.json())
        .then ( data => data.result[0])
        .then( (props)=>{
         console.log( props)
          setContent ( props) ;
         }
        )

        
       }
       else {
         setContent(null);
       }
      return () => flag = false ;
  } ,[])

    return (
       
      <div class="infocardContainer">
        <div id="main">
          <img src={"https:"+ data.titlePhoto }></img>
        </div>
        <div id="textbois">
          <h5>Handle : { data.handle}</h5>
          <h6>maxRating : { data.maxRating}</h6>
          <h6>Name : { data.firstName +" "+ data.lastName}</h6>
          <h6>Rank : { data.rank}</h6>
          <h6>CurrentRating : { data.rating}</h6>
        </div>
      </div>)

}

export default  Person 