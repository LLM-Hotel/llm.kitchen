import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Autocomplete, AutocompleteItem
} from "@nextui-org/react";
import '../../assets/modelsHub.css'
import DownloadButton from "./DownloadButton";
import { downloadModel } from "../../ai_src/modelManager";

function AddModel() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modelVariants, setModelVariants] = useState([])
  const [modelName, setModelName] = useState('Hello!');

  return (
    <>
      <DownloadButton onPress={onOpen} />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        className='dark bg-background text-foreground modal'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Pull model</ModalHeader>
              <ModalBody>
                <Input
                  onValueChange={async (value) => {
                    setModelName(value);
                  }}
                  autoFocus
                  label="Model Name"
                  placeholder="Find available models from: https://ollama.com/library"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={async () => {
                  onClose()
                  console.log(downloadModel(modelName))
                }}>
                  Download
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddModel
