import React, { useState ,useEffect} from 'react' 
import Endbar from './endbar';

const Home = ()=>{
    const [data , allData] = useState([]) 

    useEffect(()=>{

        let flag = true ;
        var temp = [];
        
        fetch ( 'https://codeforces.com/api/contest.list')
        .then( data => data.json())
        .then( data => data.result)
        .then( ( props) =>{
           var getdata = [];
           props.map( ( user) =>{
                if( user.phase==="BEFORE"){
                    temp.push(user) ;
                    // console.log( user)
                    getdata.push(user) ;
                }
                
            })
            return getdata;
        }

        )
        .then( data => allData(data));

        
        
        return () => flag = false ;
    } ,[])

    return (

        <>
         
<table class="table table-dark">
  <thead className="bg-danger">
    <tr className="bg-danger">
      <th scope="col">Upcoming Contest</th>
    </tr>
  </thead>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">ContestName</th>
      <th scope="col">TimeLeft</th>
      <th scope="col">Duration</th>
    </tr>
  </thead>
  <tbody>
    
    {
        data.map((user)=>{
            return (
                <>
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{ user.name}</td>
                  <td>{ parseInt(-1*user.relativeTimeSeconds/3600) +" hrs "+parseInt(( (-1 *user.relativeTimeSeconds )%3600 )/60 )+" min" }</td>
                  <td>{ parseInt(user.durationSeconds/(60*60)) +" : "+parseInt((user.durationSeconds%(3600)) /(60) ) }</td>
                </tr>

                </>
            )
        })
    }
  </tbody>
</table>
        <Endbar /> 
        </>
    )

}

export default Home ;