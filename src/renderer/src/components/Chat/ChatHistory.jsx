import '../../assets/chat.css'

function ChatHistory() {
  return (
    <>
      <div className=" justify-start items-center gap-2.5 inline-flex">
        <div className="text-cyan-400 text-lg font-semibold">User  </div>
        <div className='vl'>
          <div className="text-white text-lg font-normal">This is an example prompt that I may have sent.<br />Testing 1
            2 3!
          </div>
        </div>

      </div>
    </>
  )
}

export default ChatHistory;
