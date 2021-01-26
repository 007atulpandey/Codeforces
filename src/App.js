import React,{useEffect,createContext,useReducer,useContext} from 'react';
import './App.css';
import Navbar from './navbar/Navbar' ;
import Login from './authentication/Login'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Dashboard from './Detail/dashboard';
import { reducer ,initialState } from './reducer/userReducer'
import Codeforces from './Detail/Codeforces'
import Home from './navbar/home';
import Compare from './Detail/compare';
export const UserContext = createContext();
export const UserGraph = createContext();

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  useEffect( ()=>{
    const user = localStorage.getItem("codeforces") 
    if(user){
      const key = "https://codeforces.com/api/user.info?handles=" +user;
     fetch(key)
     .then( data => data.json())
     .then ( data =>{
       const userData = data.result[0] ;
       console.log("navbar")
       dispatch( {type :"USER" , payload : userData});
     })
     
    }else{
           history.push('/signin')
    }
  },[])
  return(
    <Switch>
      <Route exact path="/signin">
        <Navbar />
        <Login />
      </Route>
      <Route exact path="/compare">
       <Navbar/> 
        <Compare />
      </Route>
      <Route exact path="/">
        <Navbar />
        <Home/>
      </Route>
      <Route exact path="/dashboard">
      <Navbar />
        <Dashboard data = {state}/>
      </Route>
      <Route exact path="/codeforces">
       <Navbar/>
      <Codeforces/>
      </Route>
     {/*  
      <Route path="/create">
        <CreatePost/>
      </Route>
      <Route path="/profile/:userid">
        <UserProfile />
      </Route>
      <Route path="/myfollowingpost">
        <SubscribedUserPosts />
      </Route>
      <Route exact path="/reset">
        <Reset/>
      </Route>
      <Route path="/reset/:token">
        <NewPassword />
      </Route> */}
      
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  const [graph,add] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      
      {/* <Navbar /> */}
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;