import {
  Listbox,
  ListboxSection,
  ListboxItem, Button, Divider
} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import '../../assets/modelsHub.css'
import { deleteModel } from "../../ai_src/modelManager";

function ModelsList({ models }) {
  return (
    <>
      <Listbox
        aria-label="Actions"
        onAction={(key) => alert(key)}
        variant='light'
      >
        {models.map((item) => (
          <ListboxItem key={item.name}>
            <div className='model-container'>
              <div className='display-flex flex items-center justify-center'>
                  <span className="model-entry model-text" style={{ transform: "translate(0, 6px)" }}>
                    {item.name}
                  </span>
              </div>
              <div className='display-flex flex items-center justify-center'>
                <span className="model-entry modelSize model-text">
                  {Math.round((item.size / 1e+9 + Number.EPSILON) * 100) / 100} GB
                </span>
                <Button style={{ float: "right", zIndex: 1 }} size="sm" color="danger"
                        variant="ghost"
                        onClick={async () => {
                          console.log(deleteModel(item.model))
                        }}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                  <span className="model-entry">
                          Delete
                    </span>
                </Button>
              </div>
            </div>
          </ListboxItem>
        ))}
      </Listbox>
    </>
  )
}

export default ModelsList
