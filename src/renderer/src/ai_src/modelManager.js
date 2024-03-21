import ollama from 'ollama';

async function getAllModels() {
  const models = await ollama.list();
  return models.models;
}

async function deleteModel(name) {
  console.log(name);
  return await ollama.delete({ model: name })
}

async function downloadModel(name) {
  return await ollama.pull({ model: name })
}

async function sendMessage(message, history, setHistory) {
  const updatedHistory = history.concat([
    {
      role: 'assistant',
      content: '',
    }
  ])

  setHistory(updatedHistory)

  const response = await ollama.chat({ model: 'dolphin-mistral', messages: history, stream: true })
  let wholeMessage = "";
  let lastMessage = history[history.length - 1];

  for await (const part of response) {
    wholeMessage = wholeMessage + part.message.content
    updatedHistory[updatedHistory.length - 1] = {role: 'assistant', content: wholeMessage}
    setHistory(updatedHistory);
  }
}

async function sendMessageDEPRACATED(message, history, setHistory) {
  const response = await ollama.chat({
    model: 'dolphin-mistral',
    messages: history,
  })

  setHistory(history.concat([
    {
      role: 'assistant',
      content: response.message.content
    }
  ]))
}

export {getAllModels, deleteModel, downloadModel, sendMessage}

