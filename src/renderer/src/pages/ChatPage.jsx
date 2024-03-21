import InputField from "../components/Chat/InputField";
import '../assets/chat.css'
import ChatHistory from "../components/Chat/ChatHistory";
import { useState } from "react";

function ChatPage() {
  const [chatHistory, setChatHistory] = useState([]);

  return (
    <>
      <div className='main-body chat-container'>
        <div style={{
          height: '100%',
          width: '100%'
        }} className='overflow-y-auto'>
          <ChatHistory history={chatHistory} setHistory={setChatHistory}/>
        </div>
        <InputField history={chatHistory} setHistory={setChatHistory}/>
      </div>
    </>
  )
}

export default ChatPage
