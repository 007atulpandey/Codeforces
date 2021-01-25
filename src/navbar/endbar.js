
import './endbar.css'
const Endbar =()=>{
     return (
        <div className="endBar"> 

        Follow  on :
        <a className="ml-3"  href="https://www.facebook.com/profile.php?id=100018325608720" ><i class="fab fa-facebook-f"></i > </ a>
        <a href ="https://twitter.com/AtulPan89108726/" > <i class="ml-2 fab fa-twitter"></i></a>
        <a href= "https://www.linkedin.com/in/atul-pandey%E2%9C%94-a2196217a/" > <i class="ml-2 fab fa-linkedin"></i> </a>
        <a href ="https://007atulpandey.github.io/portfolio/" > <i class="ml-2 fas fa-address-card"></i></a>
        <hr style={{'height':'2px', 'background':'grey'}}/>
        </div>
     )
}

export default Endbar;