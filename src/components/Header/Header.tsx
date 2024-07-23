import logoFas from '../../assets/logo/logo.png'

import './_header.scss'

const Header = () => {
  return (
    <div className="header-component-container">
      <div className='header-component-container-logo'>
        <img src={logoFas} alt="logo fas" />
      </div>

      <div className='header-component-container-options'>
        <p>Inicio</p>
        <p>Cliente</p>
        <p>Projeto</p>
        <p>Recurso</p>
        <p>Projeção</p>
      </div>
    </div>
  )
}

export default Header