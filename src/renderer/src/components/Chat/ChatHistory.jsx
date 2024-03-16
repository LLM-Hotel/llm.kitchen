import '../../assets/chat.css'
import { Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ChatHistory({ history, setHistory }) {
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState(0);

  const deleteMessage = (message) => {
    const updatedHistory = history.filter(element => element !== message);
    setHistory(updatedHistory);
  }

  const editMessage = (message) => {
    setEdit(true);
    setEditID(message.id);
  }

  return (
    <>
      <div className='flex flex-col p-5'>
        {history.map((item) => (
          <Tooltip classNames={{
            content: [
              "bg-neutral-950 inline-block",
            ]
          }}
            content={(
              <>
                <button onClick={() => deleteMessage(item)}>
                  <FontAwesomeIcon style={{ color: "red", fontSize: "15px", marginRight: '20px'}} icon={faTrashCan} />
                </button>
                <button onClick={() => editMessage(item)}>
                  <FontAwesomeIcon style={{ color: "white", fontSize: "15px" }} icon={faPenToSquare} />
                </button>
              </>
            )} placement="bottom-end">
            <div className=" justify-start items-center gap-2.5 inline-flex mb-4">
              <div className={item.role === 'user' ? "text-cyan-400 w-[50px] text-lg font-semibold" : "text-red-400 w-[50px] text-lg font-semibold"}>
                {item.role === 'user' ? 'User' : 'AI'}
              </div>
              <div className="vl">
                <div className="text-white text-lg font-normal"
                contentEditable={edit && editID === item.id ? 'true' : 'false'}
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    setEdit(false);
                  }
                }}>
                  {item.message}
                </div>
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </>
  )
}

export default ChatHistory;
