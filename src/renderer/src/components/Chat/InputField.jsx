import '../../assets/chat.css'
import { useRef } from "react";

function InputField({ history, setHistory }) {
  const divRef = useRef(null);

  const handleClick = () => {
    const divContents = divRef.current.innerHTML;
    setHistory(history.concat([
      {
        role: 'user',
        message: divContents
      }
    ]))
  };

  return (
    <>
      <div
        className="overflow-y-auto w-[837px] h-16 bg-white bg-opacity-0 rounded-[15px] border border-white border-opacity-10 justify-center items-center gap-[3.75] inline-flex">
        <div className="grow shrink basis-0 self-stretch px-3.5 justify-start items-center gap-2.5 flex text-white text-lg input-container"
        contentEditable='plaintext-only' id='inputText' ref={divRef}>
        </div>
        <a href='#'
           style={{textDecoration: 'none'}}
           onClick={handleClick}
           className="send-button w-[111px] self-stretch px-[33px] bg-white bg-opacity-0 border-l border-white border-opacity-10 justify-center items-center gap-[3.75] flex">
          <div className="text-white text-lg">Send</div>
        </a>
      </div>
    </>
  )
}

export default InputField
