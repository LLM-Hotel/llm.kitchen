import '../../assets/modelsHub.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function DownloadButton({ onPress }) {
  return (
    <>
      <button className='download-button' onClick={onPress}>
        <div className='download-text'>
          <FontAwesomeIcon icon={faPlus} />
          <h1>Add Model</h1>
        </div>
      </button>
    </>
  )
}

export default DownloadButton;
