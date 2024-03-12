import MenuButton from './MenuButton'

function Menu() {
  return (
    <>
      <div className='menu'>
        <p className='m-3'>Welcome <strong>User</strong></p>
        <div className='button-container'>
          <MenuButton text='Model Hub'/>
          <MenuButton text='Chat'/>
          <MenuButton text='Training Lab'/>
          <MenuButton text='Data Studio'/>
        </div>
      </div>
    </>
  )
}

export default Menu
