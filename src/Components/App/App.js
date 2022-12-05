import LoginButton from "../Auth0/login";
import LogoutButton from "../Auth0/logout";
import Profile from "../Auth0/profile";
import "./App.css";
import CancelLaunchButton from "../CancelLaunchButton"
import React from "react";
import {useState} from "react";



function App() {
  const [userName, setUserName] = useState(false)

  function handleClick(e){
    e.window.open("https://media.tenor.com/v2n3rVxTeJQAAAAd/jeff-goldblum.gif")
    console.log(e)
  }

  return (
    <div className="App">
      <header className="App-header">Ooops!</header>
      <Profile setUserName={setUserName}/>
      <div className="button-container">
        <LoginButton  />
        <LogoutButton />
      {userName && (
        <CancelLaunchButton handleClick={handleClick}/>)}
      </div>
      <div className="meta-box">
        <h1> OOOPS! YOU'VE TRIGGERED A NUCLEAR LAUNCH.</h1> 
        <p>LOGIN WITH THE CORRECT ACCOUNT OR IT'S BAD TIMES FOR ALL!!!</p>
        <br></br>
        <h1>Personnel Logins</h1>
        <br></br>
        <h3>Chuck Norris</h3>
        <p> Username: Chuck@defcon-solutions.com</p>
        <p>Password: chucknorrisisking!1</p>
        <br></br>
        <h3>Generally Clueless</h3>
        <p> Username: Clueles@defcon-solutions.com</p>
        <p>Password: noidea!1</p>
        <br></br>
        <h3>General Jeff</h3>
        <p> Username: General_Goldblum@defcon-solutions.com</p>
        <p>Password: semperfi!1</p>
        <br></br>
        <h3>Generally Clueless</h3>
        <p> Username: Clueles@defcon-solutions.com</p>
        <p>Password: noidea!1</p>


      </div>
    </div>
  );
}
export default App;
