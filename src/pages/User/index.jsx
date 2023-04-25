import styled from 'styled-components'
import Account from "../../components/Account"

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

function User() {
  return (
    <MainContainer>
      <div className='header'>
        <h1>Welcome back<br /> Tony Jarvis!</h1>
        <button className='edit-button'>Edit name</button>
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
}

export default User

/////  Style  /////

const MainContainer = styled.main`
  background-color: #12002b;
  flex: 1;
  text-align: center;

  & .header {
    color: #fff;
    margin-bottom: 2rem;

    & .edit-button {
      border-color: #00bc77;
      background-color: #00bc77;
      color: #fff;
      font-weight: bold;
      padding: 10px;
    }
  }
`