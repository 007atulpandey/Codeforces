import React, { useState, useEffect } from 'react';
import './codeforces.css'
import Endbar from '../navbar/endbar'

const Codeforces = ()=>{
    
    const [ curr ,Setcurr ] = useState ([]) ;   
   const [ res , setRes ] = useState([]) ;
   const [ flag , setFlags] = useState ( false )

let pre =""; 
const getData = async ()=>{
    
       const name = localStorage.getItem("codeforces");
     const data = await fetch("https://codeforces.com/api/user.status?handle="+localStorage.getItem("codeforces")+"&from=1&count=2");
     const few =  await data.json();    
    if( few.result[0].verdict === 'TESTING')
    {

    }
    else {
    if( curr ===""){
       Setcurr( few.result[0].id) ;
    }
    if( pre!=="" && pre !== few.result[0].id ){
        let fl = 0 ; 
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        let sp = "Sorry" ;

        let verd = few.result[0].verdict ;
        let prob = few.result[0].problem.index;
        let suf ="at Test Case "+(few.result[ 0].passedTestCount+1);
        
        if( verd == 'OK'){
        verd = "AC"
        fl = 1 ;

        suf = "";
        sp = "Congratulations"   
       }
       else {
           verd = verd.replace("_"," ")
       }
     

       console.log( prob);
        
        speech.text = sp+" sir "+verd+"  on problem "+prob+" "+suf;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);

    }
    
    pre = few.result[ 0].id ;

   }
   
   } 


   useEffect ( () =>{    
    const interval = setInterval(async () =>{
        await getData();
    } ,5000);
    return ()=>clearInterval(interval);

   } , []) ;

    return (
        <div className = "codeforces">
 
        <Endbar /> 
        </div>
    )

}


export default Codeforces ; 