import React from 'react';
import { useHistory } from 'react-router-dom';

import { ContainerHeader, Nav } from './styles';

function Header() {
  const history = useHistory()

  const goToLogin = () => {
      history.replace("/login")
  }
  
  const goToSignup = () => {
      history.replace("/signup")
  }

  const goToEditProfile = () => {
    history.replace("/formsperfil")
  }

  const goToLocalization = () => {
      history.replace("/formslocalizacao")
  }
  
  const goToProfile = () => {
    history.replace("/perfil")
  }
  return (
      <ContainerHeader>
        <span>
          <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg" class="logoNavbar">
            <path d="M31.873 32.667h-9.747c-5.307 0-9.626-4.358-9.626-9.714V17.71C12.504 12.358 16.819 8 22.127 8h9.747c5.307 0 9.626 4.358 9.626 9.71v5.238c0 5.36-4.319 9.719-9.627 9.719zM22.127 14.69c-1.654 0-2.996 1.355-2.996 3.024v5.239c0 1.669 1.342 3.024 2.997 3.024h9.747c1.654 0 2.996-1.355 2.996-3.024V17.71c0-1.67-1.342-3.024-2.996-3.024h-9.747v.004z" fill="#3B4B5B">
            </path>
            <path d="M20.656 40.73c0-2.36-1.828-4.268-4.078-4.268-2.254 0-4.078 1.913-4.078 4.269 0 2.36 1.828 4.269 4.078 4.269 2.254 0 4.078-1.91 4.078-4.27z" fill="#C93B59">
            </path>
          </svg>
        </span>
        <Nav>
          <span onClick={goToProfile}>PERFIL</span>
          <span onClick={goToLogin}>ENTRAR</span>
          <span onClick={goToSignup}>CADASTRE-SE</span>
          <span onClick={goToEditProfile}>EDITAR PERFIL</span>
          <span onClick={goToLocalization}>LOCALIZAÇÃO</span>
        </Nav>
      </ContainerHeader>
  )
}

export default Header;