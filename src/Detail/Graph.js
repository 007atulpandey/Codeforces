import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
const Graph  = ()=>{
    const [ content , setContent] = useState([]);
     var allData = [];
     
     useEffect(()=>{
         let i = 1 ;
         let flag = true ;
       
          const user = localStorage.getItem("codeforces") 
          // var total = null; 
          if(user){
            const key = "https://codeforces.com/api/user.rating?handle=" +user;
           fetch(key)
           .then( data => data.json())
           .then ( data => data.result)
           .then( (props)=>{
            console.log( props)
            allData .push(['Sr.No.' , 'Rating'])
             props.map((user)=>{
                     allData.push( [i , user.newRating]) 
                     i+=1;
             })
             setContent ( allData) ;
            }
           )

           
          }
          else {
            setContent(null);
          }
         return () => flag = false ;
     } ,[])
     return (
        <Chart
        width={'90vw'}
        height={'600px'}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={content}
        options={{
          title: 'User Performance',
          animation: {
            duration: 1000,
            easing: 'out',
            startup: true,
          },  
          backgroundColor:"black",
          colors: ['#8e0152'],
          hAxis: { title: 'Number Of Contest', titleTextStyle: { color: 'red' } },
          vAxis: { minValue: 0 },
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: '80%', height: '70%' },
          // lineWidth: 25
        }}
      />
     )

}

export default Graph