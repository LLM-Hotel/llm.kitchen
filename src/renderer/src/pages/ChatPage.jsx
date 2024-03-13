import InputField from "../components/Chat/InputField";
import '../assets/chat.css'
import ChatHistory from "../components/Chat/ChatHistory";

function ChatPage() {
  return (
    <>
      <div className='main-body chat-container'>
        <div style={{
          height: '100%',
          width: '100%'
        }}>
          <ChatHistory />
        </div>
        <InputField />
      </div>
    </>
  )
}

export default ChatPage
