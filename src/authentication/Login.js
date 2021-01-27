import React, { useContext } from 'react' 
import { Link,useHistory} from 'react-router-dom'
import M from 'materialize-css' 
import  './login-style.css'
import {UserContext} from '../App'
const Login =()=>{
	
	const { state , dispatch } = useContext( UserContext) ;
	const history = useHistory();
	// function login (e){
		
	// 	const handle = document.getElementById("handle");
	// 	const email = document.getElementById("email");
	// 	localStorage.setItem('handle',handle.value);
	// 	localStorage.setItem('email',email.value);
    //     history.push('/dashboard');

	// }
    	
    const login  = async (e)=> {
       e.preventDefault();
	   const handle = document.getElementById("email");
	   localStorage.setItem('codeforces',handle.value);
	   const key = "https://codeforces.com/api/user.info?handles=" +handle.value;
	   
	   const allData = await fetch (key); 
	   const finalData = await allData.json () ;
	   console.log( finalData.result[ 0]);
	   await dispatch ( { type : "USER" , payload : finalData.result[ 0] }) 
	   await history.push('/dashboard');
	   
	   // setPassword ( data.password);
	}
 
    
    return (


<div  class="container" id="container" >
	<div class="center">
		<form >
			<h1> Codeforces Handle</h1>
			<input id = "email"  name="email" type="email" />
			<button onClick = { login }>Sign Ins</button>
		</form>
	</div>
</div>

    );


}

export default Login 