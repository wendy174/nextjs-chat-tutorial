import React, {useContext} from "react";
import { Context } from '../context'; 
import {useRouter} from 'next/router'; 
import axios from 'axios'; 
// js library used for making http requests //


export default function Auth() {
  const {username, setUsername, secret, setSecret} = useContext(Context)
  
  const router = useRouter()
  
// 7f918868-0bc5-4a11-8808-8d344985c75e
  
  function onSubmit(e) { 
    e.preventDefault()
    if (username.length === 0 || secret.length === 0) return; // does nothing 
    
    axios.put('https://api.chatengine.io/users/'), 
    {username, secret}, 
    {headers: {"Private-key": '7f918868-0bc5-4a11-8808-8d344985c75e'}}
    .then( r => router.push('/chats'))
  }

  return( 
  <div className="background">
    <div className='auth-container'>
      <form className='auth-form' onSubmit={e => e.onSubmit(e)}>
        <div className='auth-title'> Next JS Chat</div>
        <div className='input-container'>
          <input 
            placeholder='Email' 
            className='text-input'
            onChange={e => setUsername(e.target.value)}
          />
          <input 
            type= 'password' // needs type to hid the value 
            placeholder='Password' 
            className='text-input'
            onChange={e => setSecret(e.target.value)}
          />
          <button type='submit'className='submit-button'>
            Login / Sign Up 
          </button>
        </div>
      </form>

    </div>
  
  </div>
  )
}
