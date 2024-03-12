import '../../assets/menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNodes, faComments, faUserGear, faChartSimple } from '@fortawesome/free-solid-svg-icons'

function MenuButton({ text }) {
  var iconName = null
  var link = null

  switch (text) {
    case 'Model Hub':
      iconName = faCircleNodes;
      link = '/models'
      break
    case 'Chat':
      iconName = faComments;
      link = '/chat'
      break
    case 'Training Lab':
      iconName = faUserGear;
      link = '/training'
      break
    case 'Data Studio':
      iconName = faChartSimple;
      link = '/data'
      break
  }

  return (
    <>
      <a href={link} style={{textDecoration: "none"}}>
      <div className='center-parent'>
        <div className="center-child">
          <FontAwesomeIcon icon={iconName} className='icon'/>
          <p className='button-text'>{text}</p>
        </div>
      </div>
      </a>
    </>
  )
}

export default MenuButton
