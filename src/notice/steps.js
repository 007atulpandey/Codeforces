import React from 'react'
import Endbar from '../navbar/endbar';


const Notice = () =>{
     
    return (
        <>

  <div class="row" style= { { marginBottom:"100px"}}>
    <div class="col s12 m9 l10">
      <div id="introduction" class="section scrollspy">
        <h3 > Dashboard </h3 > 
        <p>  Contains Information about the user .
         </p>
         <ul style={{listStyleType: "circle"}}> 
             <li> User Details </li>
             <li> User Rating Graph </li>
        </ul>
      </div>

      <div id="structure" class="section scrollspy">
      <h3 > Notification </h3 > 
        <p>  This notify You about your submission verdicts during the contest through Voice Notification.
         </p>
         <ul style={{listStyleType: "circle"}}> 
             <li> SignIn with your handle  </li>
             <li> Open Notification in this application  </li>
             <li> Leave the application into another tab so it notify you during contest </li>
        </ul>
      </div>

      <div id="initialization" class="section scrollspy">
        <h3 >Compare </h3>
        <ul style={{listStyleType: "circle"}}> 
             <li> Enter the handles of  two user  </li>
             <li> Shows the graph of both user and compare </li>
        </ul>

      </div>
      <div id="home" class="section scrollspy">
        <h3 >HOme </h3>
        <ul style={{listStyleType: "circle"}}> 
             <li> HOme page shows upcoming contest list   </li>
             
        </ul>

      </div>
    </div>
    <div class="col hide-on-small-only m3 l2">
      <ul class="section table-of-contents">
        <li><a href="#introduction">Dashboard</a></li>
        <li><a href="#structure">Notification</a></li>
        <li><a href="#initialization">Compare</a></li>
        <li><a href="#home">Home</a></li>
      </ul>
    </div>
  </div>
        
<Endbar/>
        </>
    )
}


export default Notice 