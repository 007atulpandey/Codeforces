import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Atcoder  = ()=>{
    const history = useHistory();
    
    const [ name , setName ] = useState("");
    const [ contest, setContest] = useState("") ;
    const PostData = ()=>{
         
        localStorage.setItem("atcoder", name ) ;
        localStorage.setItem("contest" , contest) ;
        history.push("/") ;
    }
   return (
      <div className="mycard">
          <div className="card auth-card input-field">
            <h2>Atcoder</h2>
            (atcoder handle)
            <input type = "text"  onChange = {(e ) => setName ( e.target.value ) } />
            Contest name : (like abc189 , agc50 , arc..)
            <input placeholder= "like ... abc189" type = "text"  onChange = {(e ) => setContest ( e.target.value ) } />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>PostData()}
            >
                Login
            </button>    
        </div>
      </div>
   )
}


export default Atcoder