import styled from 'styled-components'
import argentBankLogo from '../assets/argentBankLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
// import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <NavContainer>
      <Link to="/" className='main-nav-logo'>
        <img src={argentBankLogo} alt="Logo ArgentBank" className='main-nav-logo-image'/>
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      
      <div>
        <Link to="/signin" className='main-nav-item'>
          <FontAwesomeIcon icon={faCircleUser} /> Sign in
        </Link>
        {/* <FontAwesomeIcon icon={faRightFromBracket} /> Sign out */}
      </div>
    </NavContainer>
  )
}

export default Nav

/////  Style  /////

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;

  & a {
    font-weight: bold;
  }

  & .main-nav-logo {
    display: flex;
  }

  & .main-nav-logo-image {
    max-width: 100%;
    width: 200px;
  }

  & .main-nav-item {
    margin-right: 0.5rem;
  }
`