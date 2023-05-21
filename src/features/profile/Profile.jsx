import styled from 'styled-components'
import Account from "../../components/Account"

import { useGetUserQuery, useUpdateUserMutation } from './profileApiSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserFirstname, selectUserLastname } from './profileSlice'
import { useEffect } from 'react'
import { setUserName } from './profileSlice'

const accountsList = [
  {
    id: "account-01",
    name: "Argent Bank Checking (x8349)",
    amount: "2,082.79",
    amountDescription: "Available"
  },
  {
    id: "account-02",
    name: "Argent Bank Savings (x6712)",
    amount: "10,928.42",
    amountDescription: "Available"
  },
  {
    id: "account-03",
    name: "Argent Bank Credit Card (x8349)",
    amount: "184.30",
    amountDescription: "Current"
  },
]

function Profile() {
  const {
    data : user,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUserQuery()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUserName(user))
  }, [dispatch, user])
  
  const firstName = useSelector(selectUserFirstname)
  const lastName = useSelector(selectUserLastname)
  
  const [editFirstName, setEditFirstName] = useState('')
  const [editLastName, setEditLastName] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [updateUser] = useUpdateUserMutation()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const data = await updateUser({firstName: editFirstName, lastName: editLastName}).unwrap()
      console.log(data)
      dispatch(setUserName(data))
      setEditFirstName(firstName)
      setEditLastName(lastName)
    } catch (error) {
      console.error(error)
    } finally {
      setEditMode(false)
    }
  }

  const handleFirstNameInput = (e) => setEditFirstName(e.target.value)
  const handleLastNameInput = (e) => setEditLastName(e.target.value)

  const handleOpenEditMode = () => {
    setEditFirstName(firstName)
    setEditLastName(lastName)
    setEditMode(true)
  }

  const handleCloseEditMode = () => {
    setEditMode(false)
    setEditFirstName(firstName)
    setEditLastName(lastName)
  }

  let content
  if (isLoading) {
    content = <h1>Loading...</h1>
  } else if (isSuccess) {
    content = (
      <MainContainer>
      <div className='header'>
        <h1>
          <p>Welcome back</p>
          { 
            editMode ? 
            (
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="firstName" className="sr-only">Firstname</label>
                  <input id="firstName" type="text" name="firstName" onChange={handleFirstNameInput} value={editFirstName} required/>
                  <label htmlFor="lastName" className="sr-only">Lastname</label>
                  <input id="lastName" type="text" name="lastName" onChange={handleLastNameInput} value={editLastName} required/>
                </div>
                <div>
                  <button type="submit">Save</button>
                  <button onClick={handleCloseEditMode}>Cancel</button>
                </div>
              </form>
            ) 
            : 
            (
              <p>{`${firstName} ${lastName} !`}</p>
            )
          }
        </h1>
        {!editMode && <button className='edit-button' onClick={handleOpenEditMode}>Edit name</button>}
      </div>
      <h2 className='sr-only'>Accounts</h2>
      {accountsList.map((account) => (
        <Account 
          key={account.id}
          name={account.name}
          amount={account.amount}
          amountDescription={account.amountDescription}
        />
      ))}
    </MainContainer>
    )
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return content
}

export default Profile

/////  Style  /////

const MainContainer = styled.main`
  background-color: #12002b;
  flex: 1;
  text-align: center;

  & .header {
    color: #fff;
    margin-bottom: 2rem;

    & p {
      margin: 0;
    }

    & form input {
      width: 167px;
      height: 36px;
      color: #BFC8D3;
      box-sizing: border-box;
      padding-left: 10px;
      border-radius: 4px;
      border: 2px solid #00bc77;
      font-weight: 500;
      font-size: 1.1rem;
      margin-inline: 6px;
    }

    & form button {
      width: 100px;
      height: 30px;
      color: #00bc77;
      background-color: #fff;
      border-radius: 4px;
      border: 2px solid #00bc77;
      font-size: 1rem;
      font-weight: 600;
      margin-inline: 6px;
    }

    & .edit-button {
      border-color: #00bc77;
      background-color: #00bc77;
      color: #fff;
      font-weight: bold;
      padding: 10px;
    }

  }
`