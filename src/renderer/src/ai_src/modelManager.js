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

async function sendMessage(message) {
  console.log(message);
}

export {getAllModels, deleteModel, downloadModel}
