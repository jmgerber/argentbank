import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

function SignInCard() {
  return (
    <SignInContainer>
      <FontAwesomeIcon icon={faCircleUser} />
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label for="username">Username</label>
          <input id= "username" type="text" />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input id= "password" type="password" />
        </div>
        <div className="input-remember">
          <input id= "remember-me" type="checkbox" />
          <label for="remember-me">Remember me</label>
        </div>
        <button className='sign-in-button'>Sign In</button>
      </form>
    </SignInContainer>
  )
}

export default SignInCard

/////  Style  /////

const SignInContainer = styled.section`
  box-sizing: border-box;
  background-color: #fff;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
  text-align: center;

  & .input-wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;

    & label {
      font-weight: bold;
    }

    & input {
      padding: 5px;
      font-size: 1.2rem;
    }
  }

  & .input-remember {
    display: flex;

    & label {
      margin-left: 0.25rem;
    }
  }

  & .sign-in-button {
    cursor: pointer;
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
  }
`