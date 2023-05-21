import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router'

import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice'
import { useLoginMutation } from './authApiSlice'


function Login() {
  const emailRef = useRef()
  const errRef = useRef()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState("")
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  // Set the focus on the username input
  useEffect(() => {
    emailRef.current.focus()
  }, [])

  // Reset the error message on input changes
  useEffect(() => {
    setErrMsg("")
  }, [email, password])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // Retrieves data from API and unwrap the results
      const userData = await login({ email, password}).unwrap()
      dispatch(setCredentials({...userData, email}))
      setEmail('')
      setPassword('')
      navigate("/user")
    } catch (error) {
      setErrMsg(error.data.message)
      errRef.current.focus()
    }
  }

  const handleEmailInput = (e) => setEmail(e.target.value)
  const handlePassworddInput = (e) => setPassword(e.target.value)

  const content = isLoading ? 
    <h1>Loading...</h1> : 
    (
      <MainContainer>
        <SignInContainer>
          <FontAwesomeIcon icon={faCircleUser} />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input id= "email" ref={emailRef} type="text" name="email" onChange={handleEmailInput} value={email} required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input id= "password" type="password" name="password" onChange={handlePassworddInput} value={password} required />
            </div>
            <div className="input-remember">
              <input id= "remember-me" type="checkbox" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <p ref={errRef} className={errMsg ? "errmsg" : "sr-only"} aria-live="assertive">{errMsg}</p>
            <button className='sign-in-button'>Sign In</button>
          </form>
        </SignInContainer>
      </MainContainer>
    )

  return content
}

export default Login

/////  Style  /////

const MainContainer = styled.main`
  background-color: #12002b;
  flex: 1;
`

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

  & .errmsg {
    color: #D04343;
    font-weight: 600;
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