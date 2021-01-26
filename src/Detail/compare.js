import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import Endbar from '../navbar/endbar';
const Compare  = ()=>{
    const [ content , setContent] = useState([]);
     var allData = [];
     const [ user1 , setUser1] = useState("") ;
     const [ user2  , setUser2 ] =useState ("") ;
     const [ flag , setFlag] =useState(false) ;
     useEffect(() =>{
         
     })
     

     const getdata  = async ( handle )=>{
        
        const url = "https://codeforces.com/api/user.rating?handle="+handle ;
        const raw = await fetch( url ) ;
        const jsonData = await raw.json ();
        const newData = jsonData.result ;
        // console.log( newData ) ;
        var arrayData = [ ];
        newData.map ( ( user)=>{
            arrayData.push(user.newRating) ;
        })
        return arrayData ;
     }
     
     const trigger= async ()=>{
         
         setFlag(true ) ;
         const data1= await getdata(user1);
         const data2 = await getdata(user2);
        var l1 = data1.length , l2 = data2.length , l3 =l1 ;
        l3 = l1<l2 ?l2 :l1 ;
        allData.push(['Sno.' , user1 , user2]);
        for( let i =0 ;i < l3 ;i++ ){
            let v1 = "", v2 ="";
            if( i < l1 ) {
                 v1 = data1[ i] ;
            }
            if( i < l2 ) {
                v2 = data2[ i] ;
            }
            allData.push([ i+1 ,v1 ,v2 ]) ;
        }
        setContent(allData) ;
        console.log( allData) ;
         
     }
     return (
         <div className="mt-6" style ={{width:"100%"}}>
          <div className="mt-5 mb-5 center w-100" style ={{fontFamily :"Poppins"}}> Compare two CF-User </div >  
         <input type = "text"  onChange = {(e ) => setUser1 ( e.target.value ) } />
         <input type = "text"  onChange = {(e ) => setUser2 ( e.target.value ) } />
         <button class ="green"onClick={trigger} >Compare </button > 
         {
         flag ? <div style={{ marginLeft:"1%"}}>
         <div className = "center w-100 mt-5"> 
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
          colors: ['#8e0152', "#8e0000"],
          hAxis: { title: 'Number Of Contest', titleTextStyle: { color: 'red' } },
          vAxis: { minValue: 0 },
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: '80%', height: '70%' },
          // lineWidth: 25
        }}
      />
      </div >
          </div>  :
         <></>
         }
         <Endbar/>
         </div>
         
     )

}

export default Compare