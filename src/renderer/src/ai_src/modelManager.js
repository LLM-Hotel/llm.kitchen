import ollama from 'ollama';
import { parse } from "node-html-parser";

async function getModelVariants (modelName) {
  const url = "https://ollama.com/library/" + modelName;
  const html = (await (await fetch(url)).text()); // html as text
  const ok = (await (await fetch(url)).ok);

  if (!ok) {
    return null
  }

  const parsed = parse(html);
  const variants = parsed.querySelectorAll('option');

  return variants.map(variant => {
    return variant.text.replace(/\s+/g, '');
  });
}

async function getAllModels() {
  const models = await ollama.list();
  return models.models;
}

async function deleteModel(name) {
  console.log(name);
  return await ollama.delete({ model: name })
}

export {getAllModels, deleteModel, getModelVariants}
