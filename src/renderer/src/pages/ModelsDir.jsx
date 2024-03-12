import ModelsList from "../components/ModelList/ModelsList";
import { getAllModels } from "../ai_src/modelManager";
import { useEffect, useState } from 'react';
import AddModel from "../components/ModelList/AddModel";

function ModelsDir() {
  const [models, setModels] = useState([]);

  return (
    <>
      <div className='main-body' style={{padding: '20px'}} onMouseOver={async () => {setModels(await getAllModels())}}>
        <ModelsList models={models} />
        <AddModel />
      </div>
    </>
  )
}

export default ModelsDir
