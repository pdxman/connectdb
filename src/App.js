// import firebase from './firebase/Firebase'
// import { v4 as uuidv4 } from 'uuid'
import React, {useContext, useEffect, useState} from 'react'
import Devtodos from './Devtodos.js'
import Dailytodos from './Dailytodos.js'
import { signInWithGoogle } from "./firebase/Firebase.js";
import UserProvider from './providers/UserProvider.js'
import UserContext from './providers/UserProvider.js'

import './App.css';

function App() {
    const user = useContext(UserContext)

    console.log('user:', UserContext)

    return (
    <>
      <UserProvider>
       { !user ? 
          <div className="login-buttons">
              <button className="login-provider-button" onClick={signInWithGoogle}>
              <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
              <span> Continue with Google</span>
            </button>
          </div>
          :
          <>
            <Devtodos />
            <Dailytodos /> 
          </>        
        } 
      </UserProvider>
    </>
    
  );
};
export default App;
