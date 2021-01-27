import React, { useState, useEffect } from 'react';
import '../Detail/codeforces.css'
import Endbar from '../navbar/endbar'

const Notification = ()=>{
    
    const [ curr ,Setcurr ] = useState ([]) ;   
   const [ res , setRes ] = useState([]) ;
   const [ flag , setFlags] = useState ( false )

let pre =""; 
const getData = async ()=>{
    
    const name = localStorage.getItem("atcoder");
    const id = localStorage.getItem('contest') ;
     const data = await fetch("https://getdata0826.herokuapp.com/atcoder0826/"+name+"/"+id);
     const few =  await data.json(); 
    //  console.log(few.data)   
    if( few.data[6] === 'WJ')
    {

    }
    else {
    if( curr ===""){
       Setcurr( few.data[0]);
    }
    if( pre!=="" && pre !== few.data[0] ){
        let fl = 0 ; 
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        let sp = "Sorry" ;

        let verd = few.data[6] ;
        // console.log(few.data[6]);
        if( verd === 'AC'){
        verd = "AC"
        fl = 1 ;
        sp = "Congratulations"   
       }
       else {
           verd = verd.replace("_"," ")
       }
       if( verd === 'WA'){
           verd = "Wrong Answer" ;
       }
       else if ( verd ==='CE'){
           verd = "Compilation error " ;
       }
       else if  ( verd === 'RE'){
           verd = "Run time error " ;
       }
        
        speech.text = sp+" sir "+verd+"  on problem ";
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);

    }
    
    pre = few.data[0] ;

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


export default Notification ; 