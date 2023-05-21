import styled from 'styled-components'
import argentBankLogo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentToken } from '../../features/auth/authSlice'
import { logOut } from '../../features/auth/authSlice'

function Nav() {
  const token = useSelector(selectCurrentToken)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logOut())
    navigate('/')
  }

  return (
    <NavContainer>
      <Link to="/" className='main-nav-logo'>
        <img src={argentBankLogo} alt="Logo ArgentBank" className='main-nav-logo-image'/>
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>

      { !token ? 
        (
          <div>
            <Link to="/signin" className='main-nav-item'>
              <FontAwesomeIcon icon={faCircleUser} /> Sign in
            </Link>
          </div>
        )
        : 
        (
          <div>
            <button className='logout-button' onClick={() => handleLogOut()}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span>Sign Out</span>
            </button>
          </div>
        )
      }
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

    &:hover {
      text-decoration: underline 2px;
    }
  }

  & .logout-button {
    border: none;
    background-color: transparent;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    cursor: pointer;
    padding: 8px;
    & span {
      padding-left: 6px;
      font-weight: bold;
    }
  }
`