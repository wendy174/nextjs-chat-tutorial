import React, { useState, useEffect, useContext} from "react";
import {Context} from "../context"; 
import {useRouter} from 'next/router'; 
import dynamic from 'next/dynamic'; 


const ChatEngine = dynamic(() => 
  import('react-chat-engine').then((module) => module.ChatEngine)) 

const MessageFromSocial = dynamic(() => 
import('react-chat-engine').then((module) => module.MessageFromSocial)) 



export default function Chats() {

  const { username, secret } = useContext(Context) 
  const router = useRouter()
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    if (typeof document !== null) { 
      setShowChat(true)
    }
}) 

  // if logout thene return to login page 
  useEffect(() => { 
    if (username.length === 0 || secret.length === 0 ) { 
      router.push('/')
    }
}) 

if (!showChat) return <div /> 


  return (
  <div className="background">
    <div className="shadow"> 
      <ChatEngine 
        height= 'calc(100vh - 200px)'
        projectID = '9d511f27-40e3-4cf0-8394-d56c4ef47907'
        userName= {username}
        userSecret = {secret}
        renderNewMessageForm={() => <MessageFromSocial />}
      /> 
    </div>
  </div>
  )
}
