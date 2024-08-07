import React , { useEffect, useContext }from 'react' ;
import M from 'materialize-css'
import "./Nav.css"
import { Link , useHistory  } from 'react-router-dom'; 
import {UserContext} from '../App' 
// import GavelRoundedIcon from '@material-ui/icons/GavelRounded';
const Navbar =()=>{
   
  const { state ,dispatch } = useContext ( UserContext) ;
  
  console.log("atcoder user " + localStorage.getItem("atcoder"))
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,'left');
  }); 
   
  useEffect( ( ) => {
    nav_data( localStorage.getItem('codeforces'));
    main_data(localStorage.getItem( 'codeforces'));  
  },[]);
  const history = useHistory (); 

  const nav_data = (flag )=>{ 
      console.log( " this is flag " + flag );
     if( ! flag  || flag == null ) {
       return ( 
         
              <li><Link to="/signin" style={{ "text-decoration" : "none " , "right" :"10px"}}> <i class="material-icons">fingerprint</i> SignIn</Link></li>
        
       );
      }

    
     return ( 
      <div >
       
       

     <li> <Link to ="/" ><i class="material-icons">beenhere</i> Codeforces </Link>  </li>
     <li> <Link to ="/dashboard" ><i class="material-icons">beenhere</i> Dashboard </Link>  </li>
     <li>  <Link to="/codeforces" > <i class="material-icons">add_box</i> Notification </ Link > </li>
     <li><Link to ="/compare" >  <i class="material-icons">chat_bubble</i>  Compare  </Link></li>
     <li><Link to ="/steps" >  <i class="material-icons">account_circle</i>  How to use?  </Link></li>
     { 
       localStorage.getItem("atcoder") === null ? 
       <li><Link to ="/atcoder" >  <i class="material-icons">account_circle</i>  Atcoder  </Link></li>
        : 
        <li><Link to ="/notifyatcoder" >  <i class="material-icons">account_circle</i> NotificationAtcoder </Link></li>
     }
   {/*   <li><Link to ="/bonus" > <i class="material-icons">attach_money</i>Bonus </Link></li>
     <li><Link to="/candidates"><i class="material-icons">account_circle</i> Candidates</Link></li>
     <li><Link to="badges.html"> <i class="material-icons">do_not_disturb</i> Generate Report</Link></li> */}
     <li><button onClick = { ()=>{ localStorage.clear() ; history.push('/signin') ; dispatch({type:"CLEAR"})} }>  Logout</button></li>
     </ div >
    );
  }
    
  const main_data= (flag ) =>{

    if ( flag == false || flag == null ) {
      return ( 
        
            <li style  ={ {  "display":"inline"} }><Link to="/signin" style={{ "text-decoration" : "none " , "right" :"10px"}}>  SignIn</Link></li>
        
      )
    }
     return (
         <div > 
           <li><Link style={{ "text-decoration" : "none " , "right" :"10px"}}>{ localStorage.getItem('codeforces')}</Link></li>
     
           </div > 
     )
   }

    return (
        <div className = "nav-div" > 
          
  <nav className = "navbars">
    <div class="nav-wrapper">
      <Link to ="/" class="" style={{ "text-decoration" : "none "}}> CODEFORCES.com </Link>
      <Link style={{ "text-decoration" : "none "}}  data-target="mobile-demo" class="sidenav-trigger">
      <i className="material-icons">menu</i>
     </ Link>
      <ul id="nav-mobile" class="right ">
      {main_data(localStorage.getItem('codeforces')) }
      </ul>
    </div>
  </nav>

  <ul class="sidenav side-nav" id="mobile-demo">
    {nav_data(localStorage.getItem('codeforces')) }
  </ul>
          

        </div >

    );

}

export default Navbar 


