import logoFas from '../../assets/logo/logo.png'

const Header = () => {
  return (
    <div className="header-component-container">
        <div className='header-component-container-logo'>
          <img src={logoFas} alt="logo fas" />
        </div>
    </div>
  )
}

export default Header